const packages = [
  {
    n: "01",
    stage: "Start here",
    name: "The Diagnostic",
    figure: "$7,500",
    terms: "Two weeks",
    lead: true,
    includes: [
      "Marketing and funnel audit",
      "ICP definition and pipeline math",
      "The five metrics worth judging everything by",
      "A prioritized build order, written down",
    ],
    note: "Credited in full if we go on to build. Or take the plan and run it yourself, which some people do.",
  },
  {
    n: "02",
    stage: "The build",
    name: "The Marketing Engine",
    figure: "Ninety days",
    terms: "Scoped and priced after the Diagnostic",
    includes: [
      "Everything in the Diagnostic",
      "All three system groups, built and live",
      "The three-rep handoff to your named operator",
      "The six artifacts you keep, as working files",
      "Four weeks of support after handoff",
      "Kindling free for twelve months",
    ],
    note: "Fixed scope and a fixed end date, agreed in writing before anything starts.",
  },
  {
    n: "03",
    stage: "After, or instead",
    name: "The Advisory Seat",
    figure: "Monthly",
    terms: "Scoped per client",
    includes: [
      "Roughly ten hours a month",
      "A monthly read of the scoreboard",
      "Kill and scale calls on live channel bets",
      "On call for whoever runs marketing (usually your operator)",
      "Strategy and systems only, no production work",
    ],
    note: "Works either way: a seat alongside your operator after a build, or on its own for a team that doesn't need one.",
  },
];

const terms = [
  "Fixed scope",
  "Fixed end date",
  "No open-ended retainer",
  "One named operator required",
];

export default function Packages() {
  return (
    <section id="packages" className="scroll-mt-20 border-t border-rule px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
      <div className="mx-auto max-w-[960px]">
        <p className="label mb-8">Packages</p>

        <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
          Three ways in. Most people start with the first.
        </h2>

        <p className="measure text-base leading-[1.68] text-muted">
          Nobody should quote a ninety-day build before looking at the business,
          so the Diagnostic is where almost everything starts. What comes after
          it is scoped to what we find there, and written down in full before
          anything begins.
        </p>

        <div className="mt-11 grid items-start gap-x-8 md:grid-cols-3">
          {packages.map((pkg, i) => (
            <div
              key={pkg.name}
              className={`border-t-2 pt-7 pb-7 ${
                pkg.lead ? "border-accent" : "border-ink"
              } ${i > 0 ? "md:border-l md:border-l-rule md:pl-8" : "md:pr-2"}`}
            >
              <p className="label mb-5">
                {pkg.n} <span className="mx-0.5">·</span> {pkg.stage}
              </p>

              <h3 className="display-xs mb-4 text-[22px]">{pkg.name}</h3>

              <div
                className={`display tnum text-[30px] leading-none ${
                  pkg.lead ? "text-accent" : ""
                }`}
              >
                {pkg.figure}
              </div>
              <p className="mt-2 text-xs leading-[1.5] text-faint">{pkg.terms}</p>

              <ul className="mt-5 border-t border-rule pt-4">
                {pkg.includes.map((item) => (
                  <li
                    key={item}
                    className="relative py-1.5 pl-4 text-[13px] leading-[1.5] text-muted"
                  >
                    <span aria-hidden="true" className="absolute left-0.5 text-accent">
                      &middot;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-4 border-t border-rule pt-3.5 text-xs leading-[1.55] text-faint">
                {pkg.note}
              </p>
            </div>
          ))}
        </div>

        <ul className="mt-10 flex flex-wrap gap-2.5 border-t border-rule pt-8">
          {terms.map((t) => (
            <li
              key={t}
              className="border border-rule px-3 py-[7px] text-[10.5px] uppercase tracking-[0.11em] text-muted"
            >
              {t}
            </li>
          ))}
        </ul>

        <p className="mt-8 text-[15px] leading-[1.7] text-muted">
          Weighing this against a full-time hire?{" "}
          <a
            href="/fractional-cmo-vs-full-time"
            className="border-b border-accent pb-px text-ink transition-colors hover:text-accent"
          >
            Here&apos;s the year-one math
          </a>
          .
        </p>
      </div>
    </section>
  );
}
