"use client";

import { useState } from "react";

const COMPANY_SIZES = [
  "1–10",
  "11–50",
  "51–200",
  "201–500",
  "500+",
];

const ENGAGEMENTS = [
  "The Diagnostic (2 weeks)",
  "The Marketing Engine (90 days)",
  "Advisory / ongoing support",
  "Not sure yet",
];

const OPERATORS = [
  "A named person on our team",
  "We'd need to hire someone",
  "Not sure yet",
];

const TIMELINES = [
  "As soon as possible",
  "This quarter",
  "Next quarter",
  "Exploring, no timeline yet",
];

const SOURCES = [
  "Google or another search engine",
  "An AI tool (ChatGPT, Claude, Perplexity, Copilot)",
  "LinkedIn",
  "The Substack",
  "A referral or introduction",
  "Somewhere else",
];

const FIELD =
  "w-full rounded-sm border border-rule bg-white px-3.5 py-3 text-sm text-ink outline-none transition-colors focus:border-accent";
const LABEL = "block text-[12.5px] font-medium mb-2";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    const data = Object.fromEntries(new FormData(event.currentTarget).entries());
    setStatus("submitting");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const payload = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(payload.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setStatus("success");
    } catch {
      setError(
        "Couldn't reach the server. Please email neelyannconway@gmail.com directly.",
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="max-w-2xl border-t-2 border-accent bg-band px-7 py-8">
        <h3 className="display-xs mb-3 text-[24px]">Got it. Thank you.</h3>
        <p className="max-w-lg text-base leading-[1.68] text-muted">
          Your details are in my inbox. I read every one of these myself and
          reply within two business days, usually with a question or two before
          we book anything.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate={false} className="max-w-2xl">
      {/* Honeypot — hidden from people, tempting to bots */}
      <div className="absolute h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={LABEL} htmlFor="name">
            Your name
          </label>
          <input id="name" name="name" type="text" required maxLength={120} autoComplete="name" className={FIELD} />
        </div>
        <div>
          <label className={LABEL} htmlFor="email">
            Work email
          </label>
          <input id="email" name="email" type="email" required maxLength={200} autoComplete="email" className={FIELD} />
        </div>
        <div>
          <label className={LABEL} htmlFor="company">
            Company
          </label>
          <input id="company" name="company" type="text" required maxLength={160} autoComplete="organization" className={FIELD} />
        </div>
        <div>
          <label className={LABEL} htmlFor="companySize">
            Company size
          </label>
          <select id="companySize" name="companySize" required defaultValue="" className={FIELD}>
            <option value="" disabled>
              Select…
            </option>
            {COMPANY_SIZES.map((s) => (
              <option key={s} value={s}>
                {s} people
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className={LABEL} htmlFor="engagement">
            What are you looking for?
          </label>
          <select id="engagement" name="engagement" required defaultValue="" className={FIELD}>
            <option value="" disabled>
              Select…
            </option>
            {ENGAGEMENTS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={LABEL} htmlFor="operator">
            Who would run marketing afterward?
          </label>
          <select id="operator" name="operator" required defaultValue="" className={FIELD}>
            <option value="" disabled>
              Select…
            </option>
            {OPERATORS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={LABEL} htmlFor="timeline">
            Timeline
          </label>
          <select id="timeline" name="timeline" required defaultValue="" className={FIELD}>
            <option value="" disabled>
              Select…
            </option>
            {TIMELINES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className={LABEL} htmlFor="source">
            How did you find me?{" "}
            <span className="font-normal text-faint">(optional)</span>
          </label>
          <select id="source" name="source" defaultValue="" className={FIELD}>
            <option value="">Select…</option>
            {SOURCES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className={LABEL} htmlFor="notes">
            Anything else?{" "}
            <span className="font-normal text-faint">(optional)</span>
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={4}
            maxLength={4000}
            placeholder="What you&apos;ve already tried, what&apos;s stuck, what the growth number is. Whatever&apos;s useful."
            className={`${FIELD} resize-y`}
          />
        </div>
      </div>

      {status === "error" && (
        <p
          role="alert"
          className="mt-5 border-l-2 border-accent bg-tint px-4 py-3 text-sm text-ink"
        >
          {error}
        </p>
      )}

      <div className="mt-7 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center gap-2 rounded-sm bg-ink px-[22px] py-[13px] text-sm font-medium text-bg transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Request a Diagnostic"}
          {status !== "submitting" && <span aria-hidden="true">→</span>}
        </button>
        <p className="text-[13px] text-faint">
          Goes straight to my inbox. No list, no sequence.
        </p>
      </div>
      <p className="mt-4 text-[13px] text-faint">
        Not ready for a Diagnostic?{" "}
        <a
          href="/writing"
          className="border-b border-accent pb-px text-ink transition-colors hover:text-accent"
        >
          I write about this
        </a>{" "}
        every other week.
      </p>
    </form>
  );
}
