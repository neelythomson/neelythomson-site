import StartCta from "@/components/StartCta";

const packages = [
  {
    n: "01",
    stage: "Before the hire",
    name: "The First Hire Plan",
    figure: "Six weeks",
    terms: "Fixed fee, quoted on the first call",
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
    href: "/first-hire-plan",
    cta: "What the six weeks produce",
  },
  {
    n: "02",
    stage: "After the hire · start here",
    name: "The Diagnostic",
    figure: "Two weeks",
    terms: "Fixed fee, quoted on the first call. Credited toward the build",
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
    href: "/diagnostic",
    cta: "How the two weeks run",
  },
  {
    n: "03",
    stage: "The build",
    name: "The Marketing Engine",
    figure: "Ninety days",
    terms: "Fixed fee, quoted after the Diagnostic",
    includes: [
      "Everything in the Diagnostic",
      "All three layers, built and live in your tools",
      "Your named operator trained alongside me, system by system",
      "Everything under What you keep, as working files",
      "Four weeks of support after handoff",
    ],
    note: "Fixed scope and a fixed end date, agreed in writing before anything starts.",
    href: "/marketing-engine",
    cta: "The three layers and the 90 days",
  },
  {
    n: "04",
    stage: "After, or instead",
    name: "The Advisory Seat",
    figure: "Monthly",
    terms: "Fixed monthly fee, quoted on the first call",
    includes: [
      "Roughly ten hours a month",
      "A monthly read of the scoreboard",
      "Kill and scale calls on live channel bets",
      "On call for whoever runs marketing (usually your operator)",
      "Strategy and systems only, no production work",
    ],
    note: "The build has a fixed end date. The engagement doesn't have to. After a First Hire Plan, I'm on weekly with your new hire for their first quarter, then monthly. After an Engine, a seat alongside your operator. Or on its own.",
    href: "/faq#what-is-the-advisory-seat",
    cta: "How the seat works",
  },
];

const doors = [
  {
    n: "01",
    when: "Before the hire",
    name: "The First Hire Plan",
    lead: "You're a founder about to make your first marketing hire.",
    fit: "Seed to Series A, 10 to 40 people, marketing still run by you.",
    href: "/first-hire-plan",
    cta: "What the six weeks produce",
  },
  {
    n: "02",
    when: "After the hire",
    name: "The Diagnostic, then The Marketing Engine",
    lead: "You have a marketer, or a small team, and no engine.",
    fit: "A marketer in place, a dozen or more closed deals, budget going out the door.",
    href: "/diagnostic",
    cta: "How the Diagnostic runs",
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
        <p className="label mb-8">Packages <span className="text-accent">· two ways in</span></p>

        <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
          Before your first marketing hire, or after it.
        </h2>

        <p className="measure text-base leading-[1.68] text-muted">
          Same company, same size, two different moments. Which door is yours
          depends on one question: have you made the hire yet? Both end the
          same way: a function your team runs, measured on the revenue it
          produces, with a fixed end date in the agreement.
        </p>

        <div id="doors" className="mt-11 grid scroll-mt-20 items-start gap-x-10 gap-y-8 md:grid-cols-2">
          {doors.map((d, i) => (
            <div
              key={d.name}
              className={`border-t-2 border-ink pt-6 ${i > 0 ? "md:border-l md:border-l-rule md:pl-10" : "md:pr-2"}`}
            >
              <p className="label mb-4">
                {d.n} <span className="mx-0.5">·</span> {d.when}
              </p>
              <h3 className="display-xs mb-3 text-[22px]">{d.name}</h3>
              <p className="text-[15.5px] font-medium leading-[1.55] text-ink">{d.lead}</p>
              <p className="mt-3 text-[12.5px] leading-[1.55] text-faint">
                <span className="label mr-3">Fit</span>
                {d.fit}
              </p>
              <a
                href={d.href}
                className="mt-4 inline-block border-b border-accent pb-px text-[13px] text-ink transition-colors hover:text-accent"
              >
                {d.cta} &rarr;
              </a>
            </div>
          ))}
        </div>

        <p className="label mt-16 mb-2">The four packages</p>
        <p className="measure text-[15px] leading-[1.7] text-muted">
          Every one is a fixed fee, quoted on the first call. The Diagnostic fee
          comes off the price of the build. Whether I stay on afterward is your
          call, never a condition.
        </p>

        <div className="mt-9 grid items-start gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
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
              <a href={pkg.href} className="mt-3 inline-block border-b border-accent pb-px text-[13px] text-ink transition-colors hover:text-accent">
                {pkg.cta} &rarr;
              </a>
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

        <div className="mt-9 border-t border-rule pt-8">
          <StartCta place="packages" />
          <p className="mt-4 text-[13px] text-faint">
            Every package is a fixed fee, quoted on the first call. Say in the
            note whether you have made the marketing hire yet and I will tell
            you which one fits.
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
