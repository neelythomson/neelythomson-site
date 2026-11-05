const packages = [
  {
    n: "01",
    stage: "Before the hire",
    name: "The First Hire Plan",
    figure: "Six weeks",
    terms: "Fixed price, quoted on the first call",
    includes: [
      "The role to hire: which kind, what level, what to look for",
      "The twelve-month plan and the segment to lead with",
      "The budget by quarter: people, programs, tools",
      "The stack, and the tier of each tool, bought when the hire starts",
      "One lead definition and a sales-marketing SLA, signed before day one",
      "The five-metric scoreboard, with baselines",
      "The hire's first ninety days, written before the first interview",
    ],
    note: "For founders who haven't made the first marketing hire. I decide the role with you; you run the search. The hire inherits a function.",
  },
  {
    n: "02",
    stage: "After the hire · start here",
    name: "The Diagnostic",
    figure: "$7,500",
    terms: "Two weeks",
    lead: true,
    includes: [
      "Stack, process, and funnel audit, by business unit",
      "Interviews with you, marketing, sales, and the business owners",
      "The last ninety days of marketing requests, classified",
      "A findings document, ranked by impact on pipeline",
      "A board one-pager",
      "A scoped, priced proposal for the build",
    ],
    note: "Credited in full if we go on to build. Or take the findings and run them yourself, which some people do.",
  },
  {
    n: "03",
    stage: "The build",
    name: "The Marketing Engine",
    figure: "Ninety days",
    terms: "Scoped and priced after the Diagnostic",
    includes: [
      "Everything in the Diagnostic",
      "All three layers, built and live in your tools",
      "Your named operator trained alongside me, system by system",
      "Everything under What you keep, as working files",
      "Four weeks of support after handoff",
    ],
    note: "Fixed scope and a fixed end date, agreed in writing before anything starts.",
  },
  {
    n: "04",
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
    note: "The build has a fixed end date. The engagement doesn't have to. After a First Hire Plan, I'm on weekly with your new hire for their first quarter, then monthly. After an Engine, a seat alongside your operator. Or on its own.",
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
          Four packages. Which one you start with depends on whether
          you&apos;ve made the hire.
        </h2>

        <p className="measure text-base leading-[1.68] text-muted">
          No marketing hire yet: start with the First Hire Plan. A marketer
          already in place: start with the Diagnostic, two weeks and $7,500. I
          audit your stack, your funnel and your team, then tell you what to
          build, what AI should do, what your people should do, and what it
          costs. If you hire me to build it, the $7,500 comes off the price.
          If not, the plan is yours.
        </p>

        <div className="mt-11 grid items-start gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg, i) => (
            <div
              key={pkg.name}
              className={`border-t-2 pt-7 pb-7 ${
                pkg.lead ? "border-accent" : "border-ink"
              } ${i > 0 ? "lg:border-l lg:border-l-rule lg:pl-8" : "lg:pr-2"} ${i % 2 === 1 ? "md:border-l md:border-l-rule md:pl-8" : ""}`}
            >
              <p className="label mb-5">
                {pkg.n} <span className="mx-0.5">·</span> {pkg.stage}
              </p>

              <h3 className="display-xs mb-4 text-[21px]">{pkg.name}</h3>

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
              {pkg.lead && (
                <a href="/diagnostic" className="mt-3 inline-block border-b border-accent pb-px text-[13px] text-ink transition-colors hover:text-accent">
                  How the two weeks run
                </a>
              )}
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

        <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-rule pt-8">
          <a
            href="#start"
            className="rounded-sm bg-ink px-[22px] py-[13px] text-sm font-medium text-bg transition-colors hover:bg-accent"
          >
            Start a Diagnostic &nbsp;&rarr;
          </a>
          <p className="text-[13px] text-faint">
            Two weeks, $7,500, credited in full if we go on to build. No
            marketing hire yet? Say so in the note and we start with the First
            Hire Plan instead.
          </p>
        </div>

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
