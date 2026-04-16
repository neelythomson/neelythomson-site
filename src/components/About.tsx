export default function About() {
  const stats = [
    { value: "15+", label: "Years in B2B Marketing" },
    { value: "60%", label: "Manual work reduced via AI" },
    { value: "5:1", label: "LTV:CAC ratio achieved" },
    { value: "15%", label: "MQL-to-Opp conversion lift" },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm font-medium text-[var(--color-pop)] mb-4 tracking-wide uppercase">
          About
        </p>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-3 space-y-5">
            <h2
              className="text-3xl sm:text-4xl leading-snug"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Fractional CMO and AI marketing consultant who treats AI as a
              first-class teammate — not a buzzword.
            </h2>
            <p className="text-base text-[var(--color-muted)] leading-relaxed">
              I&apos;ve spent the last decade and a half building, scaling, and
              leading marketing teams at B2B SaaS and fintech companies. Today, I
              lead an AI-forward marketing org where we&apos;ve automated inbound
              and outbound funnels, content production, and web ops — all under
              strict fintech compliance (NACHA, CFPB).
            </p>
            <p className="text-base text-[var(--color-muted)] leading-relaxed">
              As a fractional CMO and marketing consultant, I advise mid-sized B2B
              tech companies on GTM strategy, brand positioning, and AI-powered
              demand generation. Whether it&apos;s architecting modern MarTech
              stacks or building lifecycle campaigns that move pipeline, I care
              about one thing: outcomes.
            </p>
            <p className="text-base text-[var(--color-muted)] leading-relaxed">
              I&apos;m also the founder and creator of{" "}
              <a
                href="https://kindlingmagic.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-pop)] hover:underline"
              >
                Kindling
              </a>
              {" "}— an AI marketing teammate built for startup teams of one to
              three. One brief in, a full campaign out.
            </p>
          </div>

          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-5 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl"
              >
                <p className="text-2xl sm:text-3xl font-bold text-[var(--color-pop)]">
                  {stat.value}
                </p>
                <p className="text-sm text-[var(--color-muted)] mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
