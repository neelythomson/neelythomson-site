export default function Hero() {
  return (
    <section className="pt-28 pb-12 px-6 relative overflow-hidden">
      {/* Subtle gradient orb */}
      <div className="absolute top-20 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-violet-200/40 via-purple-100/20 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-40 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-violet-100/30 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-pop-light)] text-[var(--color-pop)] text-xs font-medium mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-pop)] animate-pulse" />
          AI-Forward Marketing Leader
        </div>

        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
          I build marketing
          <br />
          engines that{" "}
          <span
            className="italic typing-cursor"
            style={{ fontFamily: "var(--font-display)" }}
          >
            think.
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-[var(--color-muted)] leading-relaxed max-w-2xl mb-10">
          VP & Head of Marketing with 15+ years turning B2B SaaS companies into
          category leaders. I architect AI-powered GTM strategies, automated
          funnels, and demand gen engines that drive real pipeline — not vanity
          metrics.
        </p>

        <div className="flex flex-wrap gap-3">
          {[
            "AI Marketing Automation",
            "GTM Strategy",
            "Demand Gen & ABM",
            "Pipeline Revenue",
            "B2B Fintech",
            "Sales Alignment",
          ].map((tag) => (
            <span
              key={tag}
              className="text-sm px-4 py-2 border border-[var(--color-border)] rounded-full text-[var(--color-muted)] hover:border-[var(--color-pop)] hover:text-[var(--color-pop)] transition-colors cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    
        <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-2 text-sm text-[var(--color-muted)]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
          </span>
          Open to advisory, fractional CMO, and consulting
        </div>
</section>
  );
}
