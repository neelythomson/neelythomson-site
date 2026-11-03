"use client";

import { useState } from "react";
import { track } from "@/lib/track";

const SOURCES = [
  "Google or another search engine",
  "An AI tool (ChatGPT, Claude, Perplexity, Copilot)",
  "LinkedIn",
  "The Substack",
  "A referral or introduction",
  "Somewhere else",
];

const FIELD =
  "w-full min-h-[48px] rounded-sm border border-rule bg-white px-3.5 py-3 text-[16px] text-ink outline-none transition-colors focus:border-accent sm:min-h-0 sm:text-sm";
const LABEL = "block text-[13px] font-medium mb-2 sm:text-[12.5px]";

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
        track("form_error", { status: res.status });
        return;
      }
      setStatus("success");
      track("form_submit", { source: typeof data.source === "string" ? data.source : "" });
    } catch {
      setError(
        "Couldn't reach the server. Please email hello@neelythomson.com directly.",
      );
      setStatus("error");
      track("form_error", { status: 0 });
    }
  }

  if (status === "success") {
    return (
      <div className="max-w-2xl border-t-2 border-accent bg-band px-7 py-8">
        <h3 className="display-xs mb-3 text-[24px]">Got it. Thank you.</h3>
        <p className="max-w-lg text-base leading-[1.68] text-muted">
          Your note is in my inbox. I read every one of these myself and reply
          within two business days, usually with a question or two before we
          book anything.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate={false} className="max-w-2xl">
      {/* Honeypot: hidden from people, tempting to bots */}
      <div className="absolute h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
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
        <div className="md:col-span-2">
          <label className={LABEL} htmlFor="notes">
            What&apos;s going on?
          </label>
          <textarea
            id="notes"
            name="notes"
            required
            rows={5}
            maxLength={4000}
            placeholder="A few lines is plenty. What you sell, who buys it, what's stuck."
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
          className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-ink px-[22px] py-[14px] sm:w-auto sm:py-[13px] text-sm font-medium text-bg transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Send"}
          {status !== "submitting" && <span aria-hidden="true">→</span>}
        </button>
        <p className="text-[13px] text-faint">
          Goes straight to my inbox. No list, no sequence.
        </p>
      </div>
    </form>
  );
}
