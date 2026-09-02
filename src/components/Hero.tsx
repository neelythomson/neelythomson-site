const proof = [
  {
    v: "60%",
    l: "of manual campaign work removed",
    s: "Fintech payments, under NACHA and CFPB",
    href: "/work/fintech-payments",
  },
  {
    v: "5:1",
    l: "LTV:CAC over four years",
    s: "Same engine, same company",
    href: "/work/fintech-payments",
  },
  {
    v: "75%",
    l: "lift in partner engagement",
    s: "National nonprofit, $70M marketing org",
    href: "/work/nonprofit-partnerships",
  },
  {
    v: "$500K",
    l: "budget behind a full enterprise ABM build",
    s: "Technology services firm",
    href: "/work/enterprise-abm",
  },
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
            Ninety days, for B2B software companies selling into regulated
            and institutional buyers. I build the systems that turn attention
            into pipeline, from positioning through scoring, routing and
            attribution, train someone on your side to run them, and step out.
            Fixed scope, fixed end date, and no retainer that turns into a job
            neither of us agreed to.
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
          </div>
        </div>
      </section>

      <div className="border-t border-rule bg-band px-6 py-13 sm:px-10">
        <div className="mx-auto max-w-[960px]">
          <div className="mb-9 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
            <p className="label">Results</p>
            <a
              href="/work"
              className="border-b border-accent pb-px text-[13px] text-ink transition-colors hover:text-accent"
            >
              All case studies &rarr;
            </a>
          </div>
          <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-4">
            {proof.map((p) => (
              <a
                key={p.l}
                href={p.href}
                className="group block border-t border-rule pt-5 transition-colors hover:border-accent"
              >
                <div className="display tnum text-[40px] leading-none transition-colors group-hover:text-accent">
                  {p.v}
                </div>
                <p className="mt-[9px] max-w-[22ch] text-[12.5px] leading-[1.45] text-muted">
                  {p.l}
                </p>
                <p className="label mt-1.5">{p.s}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
