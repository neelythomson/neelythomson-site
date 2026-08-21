const keeps = [
  {
    f: "Living document",
    t: "The Engine Doc",
    b: "One source of truth — ICP, positioning, every channel bet with its kill criteria, the pipeline model, and every decision with the reasoning attached. Not a slide deck.",
  },
  {
    f: "~12 videos, 5 min each",
    t: "Recorded walkthroughs",
    b: "Every workflow, screen-recorded. Nobody reads documentation. They watch it once and copy what you did.",
  },
  {
    f: "Weekly ritual",
    t: "The Monday loop",
    b: "Priorities, what shipped, what the numbers say, what to kill or scale. A ritual, not a folder — it's what keeps the engine from becoming a screenshot.",
  },
  {
    f: "Printed runbook",
    t: "The 30/60/90",
    b: "Exactly what your operator does in each of their first three months without me in the room.",
  },
];

export default function Keeps() {
  return (
    <section className="border-t border-rule px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
      <div className="mx-auto max-w-[960px]">
        <p className="label mb-8">What you keep</p>

        <h2 className="display-sm max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
          Four artifacts that outlive the engagement.
        </h2>

        <div className="mt-11 grid gap-px border border-rule bg-rule sm:grid-cols-2">
          {keeps.map((k) => (
            <div key={k.t} className="bg-bg px-6 py-7">
              <p className="mb-3 text-[10px] uppercase tracking-[0.13em] text-accent">
                {k.f}
              </p>
              <h3 className="display-xs mb-2.5 text-[19px]">{k.t}</h3>
              <p className="text-[13.5px] leading-[1.6] text-muted">{k.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
