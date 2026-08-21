const phases = [
  {
    name: "Diagnose",
    weeks: "Weeks 1–2",
    body: "Marketing audit, ICP, positioning brief, pipeline math, and the five metrics we'll judge everything by. Your operator gets named here.",
    you: "Your side: 6 hrs of interviews",
  },
  {
    name: "Architect",
    weeks: "Weeks 3–5",
    body: "Brand system and messaging architecture. Channel bets written as hypotheses with kill and scale criteria. Scoring model, routing rules, the marketing–sales SLA, and the data architecture underneath.",
    you: "Your side: 4 hrs/week",
  },
  {
    name: "Build",
    weeks: "Weeks 6–10",
    body: "Systems get built and go live. Each passes through the three-rep cycle: I build v1 while your operator watches, they build v2 and I review before it ships, they build v3 alone and I review after.",
    you: "Your side: 6 hrs/week",
  },
  {
    name: "Hand off",
    weeks: "Weeks 11–13",
    body: "Your operator runs the engine unaided. Runbooks recorded, cadence under their hand. Then I sit on your Monday call for four more weeks, silent unless asked.",
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
