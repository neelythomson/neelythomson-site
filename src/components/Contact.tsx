export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm font-medium text-[var(--color-pop)] mb-4 tracking-wide uppercase">
          Contact
        </p>
        <h2
          className="text-3xl sm:text-4xl leading-snug mb-6"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Let&apos;s build something together.
        </h2>
        <p className="text-base text-[var(--color-muted)] leading-relaxed mb-10 max-w-xl">
          Most of my work is one thing: a 90-day build that leaves your team
          running the marketing engine instead of paying me to run it. I also
          take on advisory and speaking when the fit is right.
        </p>

        <a
          href="/fractional-cmo"
          className="block mb-10 max-w-2xl p-6 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl hover:border-[var(--color-pop)] transition-colors group"
        >
          <p className="font-mono text-xs uppercase tracking-wider text-[var(--color-pop)] mb-3">
            The Engine Install · 90 days
          </p>
          <h3 className="text-xl font-semibold mb-2">
            I install the marketing engine. Your team runs it.
          </h3>
          <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-4">
            Positioning and brand system, lifecycle sequencing, lead scoring,
            CRM integration, routing, attribution — built, handed over, done.
            Fixed scope, fixed end date, no open-ended retainer.
          </p>
          <span className="text-sm font-medium text-[var(--color-pop)] group-hover:underline">
            See how it works →
          </span>
        </a>

        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:neelyannconway@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium bg-[var(--color-pop)] text-white rounded-full hover:opacity-90 transition-opacity"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <rect x="2" y="3" width="12" height="10" rx="1.5" />
              <path d="M2 5l6 4 6-4" />
            </svg>
            Email me
          </a>
          <a
            href="https://linkedin.com/in/neelyconway"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium border border-[var(--color-border)] rounded-full hover:border-[var(--color-pop)] hover:text-[var(--color-pop)] transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
