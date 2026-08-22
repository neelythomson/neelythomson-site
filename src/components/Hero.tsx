const proof = [
  { v: "60%", l: "of manual campaign work removed", s: "Dwolla, 2022–26" },
  { v: "5:1", l: "LTV:CAC delivered", s: "Dwolla" },
  { v: "15%", l: "lift in MQL-to-Opportunity conversion", s: "Dwolla" },
  { v: "20", l: "years building B2B SaaS and fintech marketing", s: "Since 2005" },
];

export default function Hero() {
  return (
    <>
      <section className="reveal px-6 pt-24 pb-20 sm:px-10">
        <div className="mx-auto max-w-[960px]">
          <p className="label mb-8">Fractional CMO · Marketing systems</p>

          <h1 className="display mb-8 max-w-[15ch] text-[clamp(2.9rem,6.6vw,5.4rem)]">
            I build the marketing engine.{" "}
            <em className="font-light italic">Your team runs it.</em>
          </h1>

          <p className="mb-9 max-w-[60ch] text-[17px] leading-[1.62] text-muted">
            Ninety days. I build the systems that turn attention into pipeline —
            positioning, sequencing, scoring, CRM, routing, attribution — train
            someone on your side to run them, and step out. Fixed scope, fixed
            end date, no retainer that quietly becomes a job.
          </p>

          <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
            <a
              href="#start"
              className="rounded-sm bg-ink px-[22px] py-[13px] text-sm font-medium text-bg transition-colors hover:bg-accent"
            >
              Start with a Diagnostic &nbsp;&rarr;
            </a>
            <a
              href="#engine"
              className="border-b border-accent pb-0.5 text-sm font-medium text-ink transition-colors hover:text-accent"
            >
              See what gets built
            </a>
            <span className="tnum text-[12.5px] tracking-[0.02em] text-faint">
              Starts with a two-week Diagnostic · $7,500
            </span>
          </div>
        </div>
      </section>

      <div className="border-t border-rule bg-band px-6 py-13 sm:px-10">
        <div className="mx-auto grid max-w-[960px] gap-9 sm:grid-cols-2 lg:grid-cols-4">
          {proof.map((p) => (
            <div key={p.l}>
              <div className="display tnum text-[40px] leading-none">{p.v}</div>
              <p className="mt-[9px] max-w-[22ch] text-[12.5px] leading-[1.45] text-muted">
                {p.l}
              </p>
              <p className="label mt-1.5">{p.s}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
