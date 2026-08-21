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
  "The Engine Install (90 days)",
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

const FIELD =
  "w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-accent)] outline-none transition-colors focus:border-[var(--color-pop)] focus:ring-2 focus:ring-[var(--color-pop)]/20";
const LABEL = "block text-sm font-medium mb-2";

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
      <div className="rounded-xl border border-[var(--color-pop)] bg-[var(--color-pop-light)] p-8">
        <h3
          className="mb-3 text-2xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Got it — thank you.
        </h3>
        <p className="max-w-lg text-base leading-relaxed text-[var(--color-muted)]">
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
          <label className={LABEL} htmlFor="notes">
            Anything else?{" "}
            <span className="font-normal text-[var(--color-muted)]">(optional)</span>
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={4}
            maxLength={4000}
            placeholder="What's already been tried, what's stuck, what the growth number is — whatever's useful."
            className={`${FIELD} resize-y`}
          />
        </div>
      </div>

      {status === "error" && (
        <p
          role="alert"
          className="mt-5 rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-800"
        >
          {error}
        </p>
      )}

      <div className="mt-7 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center gap-2 rounded-full bg-[var(--color-pop)] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Request a Diagnostic"}
          {status !== "submitting" && <span aria-hidden="true">→</span>}
        </button>
        <p className="text-sm text-[var(--color-muted)]">
          Goes straight to my inbox. No list, no sequence.
        </p>
      </div>
    </form>
  );
}
