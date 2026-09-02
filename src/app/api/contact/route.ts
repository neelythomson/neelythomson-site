import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Comma-separated list. Resend's test sender (onboarding@resend.dev) can only
// deliver to the account owner, so the second address only works once
// CONTACT_FROM_EMAIL is on the verified neelythomson.com domain.
const TO_EMAILS = (process.env.CONTACT_TO_EMAIL || "neelyannconway@gmail.com")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";
const FROM_IS_VERIFIED_DOMAIN = !FROM_EMAIL.endsWith("@resend.dev");

const FIELDS = {
  name: { label: "Name", max: 120, required: true },
  email: { label: "Work email", max: 200, required: true },
  company: { label: "Company", max: 160, required: true },
  companySize: { label: "Company size", max: 60, required: true },
  engagement: { label: "Looking for", max: 100, required: true },
  operator: { label: "Who owns marketing after", max: 120, required: true },
  timeline: { label: "Timeline", max: 80, required: true },
  source: { label: "How they found me", max: 120, required: false },
  notes: { label: "Anything else", max: 4000, required: false },
} as const;

type FieldKey = keyof typeof FIELDS;

// Very small in-memory limiter. Serverless instances are short-lived and not
// shared, so this blunts obvious floods rather than acting as real protection.
const hits = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

function recentHits(key: string) {
  const now = Date.now();
  if (hits.size > 5000) hits.clear();
  const recent = (hits.get(key) || []).filter((t) => now - t < WINDOW_MS);
  hits.set(key, recent);
  return recent;
}

// Only successful sends count toward the limit, so someone who trips
// validation a few times never gets locked out of their own enquiry.
function isRateLimited(key: string) {
  return recentHits(key).length >= MAX_PER_WINDOW;
}

function recordSend(key: string) {
  const recent = recentHits(key);
  recent.push(Date.now());
  hits.set(key, recent);
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string,
  );
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Malformed request." }, { status: 400 });
  }

  // Honeypot: real people never fill this in.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many submissions. Try again in a few minutes, or email neelyannconway@gmail.com." },
      { status: 429 },
    );
  }

  const clean: Record<FieldKey, string> = {} as Record<FieldKey, string>;
  for (const [key, spec] of Object.entries(FIELDS) as [FieldKey, (typeof FIELDS)[FieldKey]][]) {
    const raw = body[key];
    const value = typeof raw === "string" ? raw.trim() : "";
    if (spec.required && !value) {
      return NextResponse.json({ error: `${spec.label} is required.` }, { status: 400 });
    }
    if (value.length > spec.max) {
      return NextResponse.json({ error: `${spec.label} is too long.` }, { status: 400 });
    }
    clean[key] = value;
  }

  if (!EMAIL_RE.test(clean.email)) {
    return NextResponse.json({ error: "That email address doesn't look right." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not set; cannot send notification.");
    return NextResponse.json(
      { error: "The form isn't connected yet. Please email neelyannconway@gmail.com directly." },
      { status: 503 },
    );
  }

  const rows: [string, string][] = [
    ["Name", clean.name],
    ["Email", clean.email],
    ["Company", clean.company],
    ["Company size", clean.companySize],
    ["Looking for", clean.engagement],
    ["Owns marketing after", clean.operator],
    ["Timeline", clean.timeline],
    ["How they found me", clean.source || "Not answered"],
  ];

  const text =
    rows.map(([k, v]) => `${k}: ${v}`).join("\n") +
    (clean.notes ? `\n\nAnything else:\n${clean.notes}` : "");

  const html = `
    <div style="font-family:-apple-system,Segoe UI,Inter,sans-serif;font-size:15px;color:#1a1721;line-height:1.6">
      <p style="margin:0 0 4px;font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#6d28d9">New enquiry</p>
      <h2 style="margin:0 0 18px;font-size:20px">${escapeHtml(clean.company)} &mdash; ${escapeHtml(clean.engagement)}</h2>
      <table cellpadding="0" cellspacing="0" style="border-collapse:collapse">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="padding:6px 20px 6px 0;color:#6e6779;white-space:nowrap;vertical-align:top">${escapeHtml(k)}</td><td style="padding:6px 0;font-weight:600">${escapeHtml(v)}</td></tr>`,
          )
          .join("")}
      </table>
      ${
        clean.notes
          ? `<p style="margin:20px 0 6px;color:#6e6779">Anything else</p><p style="margin:0;padding:14px 16px;background:#f3f1f5;border-radius:6px;white-space:pre-wrap">${escapeHtml(clean.notes)}</p>`
          : ""
      }
      <p style="margin:24px 0 0;font-size:13px;color:#918aa0">Reply to this email to answer ${escapeHtml(clean.name)} directly.</p>
    </div>`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `neelythomson.com enquiries <${FROM_EMAIL}>`,
        to: TO_EMAILS,
        reply_to: clean.email,
        subject: `${clean.company} (${clean.companySize}): ${clean.engagement}`,
        text,
        html,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("[contact] Resend rejected the send:", res.status, detail);
      return NextResponse.json(
        { error: "Something went wrong sending that. Please email neelyannconway@gmail.com directly." },
        { status: 502 },
      );
    }
  } catch (err) {
    console.error("[contact] Network error calling Resend:", err);
    return NextResponse.json(
      { error: "Something went wrong sending that. Please email neelyannconway@gmail.com directly." },
      { status: 502 },
    );
  }

  // Confirmation to the person who wrote in. Only possible from the verified
  // domain; the test sender can't deliver to arbitrary addresses. Best effort:
  // a failure here never turns a delivered enquiry into an error for them.
  if (FROM_IS_VERIFIED_DOMAIN) {
    const firstName = clean.name.split(/\s+/)[0] || "there";
    const confirmText = [
      `Hi ${firstName},`,
      "",
      "Thanks for writing. Your note is in my inbox and I read every one of these myself.",
      "",
      "I'll reply within two business days, usually with a question or two before we book anything. If it looks like a fit, the next step is a two-week Diagnostic: a marketing and funnel audit, ICP and pipeline math, the five metrics worth judging everything by, and a prioritized build order, written down.",
      "",
      "In the meantime, the questions people usually ask first are answered at https://neelythomson.com/faq, and the case studies are at https://neelythomson.com/work.",
      "",
      "If anything changes on your side before you hear from me, just reply to this email.",
      "",
      "Neely",
      "neelythomson.com",
    ].join("\n");

    const confirmHtml = `
      <div style="font-family:-apple-system,Segoe UI,Inter,sans-serif;font-size:15px;color:#1a1917;line-height:1.65;max-width:560px">
        <p>Hi ${escapeHtml(firstName)},</p>
        <p>Thanks for writing. Your note is in my inbox and I read every one of these myself.</p>
        <p>I'll reply within two business days, usually with a question or two before we book anything. If it looks like a fit, the next step is a two-week Diagnostic: a marketing and funnel audit, ICP and pipeline math, the five metrics worth judging everything by, and a prioritized build order, written down.</p>
        <p>In the meantime, the questions people usually ask first are answered at <a href="https://neelythomson.com/faq" style="color:#b33a24">neelythomson.com/faq</a>, and the case studies are at <a href="https://neelythomson.com/work" style="color:#b33a24">neelythomson.com/work</a>.</p>
        <p>If anything changes on your side before you hear from me, just reply to this email.</p>
        <p style="margin-top:24px">Neely<br><a href="https://neelythomson.com" style="color:#6b6862;text-decoration:none">neelythomson.com</a></p>
      </div>`;

    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: `Neely Thomson <${FROM_EMAIL}>`,
          to: [clean.email],
          reply_to: TO_EMAILS[0],
          subject: "Got it. Here's what happens next.",
          text: confirmText,
          html: confirmHtml,
        }),
      });
      if (!res.ok) {
        console.error("[contact] Confirmation email rejected:", res.status, await res.text());
      }
    } catch (err) {
      console.error("[contact] Confirmation email network error:", err);
    }
  }

  recordSend(ip);
  return NextResponse.json({ ok: true });
}
