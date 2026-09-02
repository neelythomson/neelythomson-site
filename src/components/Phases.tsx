const phases = [
  {
    name: "Diagnose",
    weeks: "Weeks 1–2",
    body: "The audit: your stack, the funnel and unit economics by business unit, the last ninety days of marketing requests, and up to eight interviews. You get a findings document, a board one-pager, and a priced proposal for the build. Your operator gets named here, or the role gets scoped if you don't have one yet.",
    you: "Your side: about 6 hrs of interviews, plus system access",
  },
  {
    name: "Architect",
    weeks: "Weeks 3–5",
    body: "Lead definitions and the SLA drafted and signed. A one-page go-to-market per business unit. Messaging architecture, brand system, and creative direction. The brief template and the quality bar. Channel and conference tiering against pipeline.",
    you: "Your side: 4 hrs/week",
  },
  {
    name: "Build",
    weeks: "Weeks 6–10",
    body: "Scoring and routing live in your CRM. The intake queue live. Prompt, template, and brand libraries built in the tools you already own. The scoreboard live and wired to real data. I build each system with your operator beside me and run the weekly plan while we do.",
    you: "Your side: 6 hrs/week",
  },
  {
    name: "Hand off",
    weeks: "Weeks 11–13",
    body: "Your operator runs the engine. Runbooks written, walkthroughs recorded, the Monday cadence under their hand, the board one-pager producing itself. Then four more weeks on your Monday call, there when you need me.",
    you: "Your side: 4 hrs/week",
  },
];

export default function Phases() {
  return (
    <section id="ninety" className="scroll-mt-20 border-t border-rule px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
      <div className="mx-auto max-w-[960px]">
        <p className="label mb-8">The ninety days</p>

        <h2 className="display-sm max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
          Four phases, and the hours it costs you.
        </h2>

        <div className="mt-11">
          {phases.map((p, i) => (
            <div
              key={p.name}
              className={`grid gap-4 py-7 md:grid-cols-[170px_1fr] md:gap-10 ${
                i === 0 ? "" : "border-t border-rule"
              }`}
            >
              <div>
                <p className="text-[12.5px] font-medium">{p.name}</p>
                <p className="label mt-1">{p.weeks}</p>
              </div>
              <div className="max-w-[62ch]">
                <p className="text-[15px] leading-[1.7] text-muted">{p.body}</p>
                <p className="mt-2.5 text-[13px] text-ink">{p.you}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
