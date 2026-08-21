export default function Hero() {
  return (
    <section className="pt-28 pb-12 px-6 relative overflow-hidden">
      {/* Subtle gradient orb */}
      <div className="absolute top-20 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-violet-200/40 via-purple-100/20 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-40 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-violet-100/30 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">

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
          Twenty years building B2B SaaS and fintech marketing, including
          AI-powered marketing under NACHA and CFPB. Now I install the systems
          that generate pipeline — sequencing, lead scoring, CRM, attribution —
          and hand them to your team in 90 days.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <a
            href="/fractional-cmo"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium bg-[var(--color-pop)] text-white rounded-full hover:opacity-90 transition-opacity"
          >
            See how the Engine Install works
            <span aria-hidden="true">→</span>
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium border border-[var(--color-border)] rounded-full hover:border-[var(--color-pop)] hover:text-[var(--color-pop)] transition-colors"
          >
            About me
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
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
              className="text-sm font-medium px-4 py-2 rounded-full bg-white/80 text-[var(--color-text)] shadow-sm border border-black/[0.08] hover:border-[var(--color-pop)] hover:text-[var(--color-pop)] transition-colors cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    
        <div className="mt-10 flex mx-auto w-fit items-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-2 text-sm text-[var(--color-muted)]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
          </span>
          Taking two Engine Installs this quarter
        </div>
</section>
  );
}
