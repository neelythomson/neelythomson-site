const stages = [
  {
    n: "Step one",
    t: "The Diagnostic",
    meta: "Two weeks · $7,500",
    body: "A marketing and funnel audit, ICP definition, the pipeline math, the five metrics worth judging everything by, and a prioritized build order. It stands on its own — you can take the plan and run it yourself, or hand it to someone else.",
    note: "Credited in full if we go on to build.",
    lead: true,
  },
  {
    n: "Step two",
    t: "The Marketing Engine",
    meta: "Ninety days",
    body: "The systems get built, go live, and get handed to a named person on your team. Scoped and priced after the Diagnostic, because the build order depends on what's already in place — a company with a working CRM and no positioning needs a different ninety days than one with the reverse.",
    note: "Fixed scope and a fixed end date, agreed in writing before anything starts.",
  },
  {
    n: "Optional",
    t: "The Operator's Seat",
    meta: "Monthly, after the build",
    body: "Advisory only, roughly ten hours a month, once the engine belongs to your team. Your operator has someone to call, the scoreboard gets read by someone who knows what it meant to build it, and channel bets get killed or scaled on schedule.",
    note: "Always optional, and priced into the original agreement rather than sold later.",
  },
];

const terms = [
  "Fixed scope",
  "Fixed end date",
  "No open-ended retainer",
  "One named operator required",
];

export default function Engagement() {
  return (
    <section id="how" className="scroll-mt-20 border-t border-rule px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
      <div className="mx-auto max-w-[960px]">
        <p className="label mb-8">How it works</p>

        <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
          Start with two weeks. Decide from there.
        </h2>

        <p className="measure text-base leading-[1.68] text-muted">
          Nobody should quote a ninety-day build before looking at the business.
          Most engagements start with the Diagnostic and either stop there or
          continue — and whatever we agree after it is written down, in full,
          before anything begins.
        </p>

        <div className="mt-11">
          {stages.map((stage, i) => (
            <div
              key={stage.t}
              className={`grid gap-4 py-8 md:grid-cols-[170px_1fr] md:gap-10 ${
                i === 0 ? "" : "border-t border-rule"
              }`}
            >
              <div>
                <p className="label">{stage.n}</p>
                <p
                  className={`mt-2 text-[12.5px] font-medium ${
                    stage.lead ? "text-accent" : ""
                  }`}
                >
                  {stage.meta}
                </p>
              </div>
              <div className="max-w-[62ch]">
                <h3 className="display-xs mb-2.5 text-[21px]">{stage.t}</h3>
                <p className="text-[15px] leading-[1.7] text-muted">
                  {stage.body}
                </p>
                <p className="mt-3 text-[13px] text-ink">{stage.note}</p>
              </div>
            </div>
          ))}
        </div>

        <ul className="mt-8 flex flex-wrap gap-2.5 border-t border-rule pt-8">
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
