const tiers = [
  {
    n: "Tier 0",
    t: "Diagnostic",
    p: "$7,500",
    u: "2 weeks",
    inc: [
      "Marketing and funnel audit",
      "ICP definition and pipeline math",
      "The five metrics we'd judge everything by",
      "A prioritized build order you can hand to anyone",
    ],
    note: "Credited in full toward The Marketing Engine.",
  },
  {
    n: "Tier 1",
    t: "The Marketing Engine",
    p: "$45,000",
    u: "90 days",
    lead: true,
    inc: [
      "Everything in the Diagnostic",
      "All three system groups, built and live",
      "Three-rep handoff to your named operator",
      "The four artifacts you keep",
      "Four weeks of silent support after handoff",
      "Kindling free for twelve months",
    ],
    note: "Billed in three installments of $15,000. Founding rate of $32,000 for the first two engagements.",
  },
  {
    n: "Tier 2",
    t: "Operator's Seat",
    p: "$3,500",
    u: "per month · 6-month minimum",
    inc: [
      "About 10 hours a month, advisory only",
      "Monthly review of the scoreboard",
      "Kill and scale calls on live channel bets",
      "On call for your operator",
    ],
    note: "Optional, and only after an Engine build. Priced into the original agreement if you take it at signing.",
  },
];

const terms = [
  "Fixed scope",
  "Fixed end date",
  "No open-ended retainer",
  "One named operator required",
];

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 border-t border-rule px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
      <div className="mx-auto max-w-[960px]">
        <p className="label mb-8">Pricing</p>

        <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
          Published, so you don&apos;t need a call to find out.
        </h2>

        <p className="measure text-base leading-[1.68] text-muted">
          Three ways in. Most engagements start with the Diagnostic and stop or
          continue from there.
        </p>

        <div className="mt-10 grid items-start gap-x-8 md:grid-cols-3">
          {tiers.map((tier, i) => (
            <div
              key={tier.t}
              className={`border-t-2 pt-7 pb-7 ${
                tier.lead ? "border-accent" : "border-ink"
              } ${i > 0 ? "md:border-l md:border-l-rule md:pl-8" : "md:pr-2"}`}
            >
              <p className="label mb-4">{tier.n}</p>
              <h3 className="display-xs mb-3.5 text-[22px]">{tier.t}</h3>
              <div className="display tnum text-[34px] leading-none">{tier.p}</div>
              <p className="mt-1.5 text-xs text-faint">{tier.u}</p>

              <ul className="mt-4.5 border-t border-rule pt-3.5">
                {tier.inc.map((x) => (
                  <li
                    key={x}
                    className="relative py-1.5 pl-4 text-[13px] leading-[1.5] text-muted"
                  >
                    <span aria-hidden="true" className="absolute left-0.5 text-accent">
                      &middot;
                    </span>
                    {x}
                  </li>
                ))}
              </ul>

              <p className="mt-3.5 border-t border-rule pt-3 text-xs leading-[1.5] text-faint">
                {tier.note}
              </p>
            </div>
          ))}
        </div>

        <ul className="mt-8 flex flex-wrap gap-2.5">
          {terms.map((t) => (
            <li
              key={t}
              className="border border-rule px-3 py-[7px] text-[10.5px] uppercase tracking-[0.11em] text-muted"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
