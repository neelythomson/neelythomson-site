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
          Whether you&apos;re looking for a marketing leader, a strategic
          advisor, or someone to help you rethink your GTM with AI — I&apos;d
          love to talk.
        </p>

        <div className="flex flex-wrap gap-3 mb-8">
          {["Fractional CMO", "Advisory", "GTM Strategy", "AI Marketing Consulting", "Speaking"].map((item) => (
            <span
              key={item}
              className="rounded-full border border-[var(--color-border)] px-4 py-2 text-sm text-[var(--color-muted)] hover:border-[var(--color-pop)] hover:text-[var(--color-pop)] transition-colors"
            >
              {item}
            </span>
          ))}
        </div>

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
