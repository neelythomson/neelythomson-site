const artifacts = [
  {
    kind: "Living document",
    t: "The Engine Doc",
    b: "One source of truth for how marketing works here, with the reasoning attached to every decision. The thing a new hire reads on day one instead of asking six people.",
    contains: [
      "ICP and buyer research",
      "Every channel bet with its kill and scale criteria",
      "The decision log: what we chose, and why",
    ],
  },
  {
    kind: "Positioning asset",
    t: "The Messaging Kit",
    b: "Everything your team needs to say the same thing in the same way, without you in the room approving copy.",
    contains: [
      "Category narrative and value proposition",
      "Messaging architecture by segment and persona",
      "Proof points, objection handling, competitor framing",
      "Voice guidelines and naming conventions",
    ],
  },
  {
    kind: "Model + dashboard",
    t: "The Pipeline Model & Scoreboard",
    b: "The math behind the number, and a live board that tells you within a week whether it's still true.",
    contains: [
      "Funnel stages with conversion assumptions",
      "Five metrics, with definitions, sources and owners",
      "The dashboard, wired to your real data",
      "Budget allocation model",
    ],
  },
  {
    kind: "Technical specification",
    t: "The Systems Spec",
    b: "How the plumbing is actually put together, written so a new ops hire or an agency can pick it up without reverse-engineering anything.",
    contains: [
      "Lifecycle sequences: logic, triggers, branching, timing",
      "Lead scoring model with thresholds",
      "Routing rules and CRM field architecture",
      "The marketing–sales SLA, agreed by both sides",
    ],
  },
  {
    kind: "Documentation",
    t: "Documented processes and walkthroughs",
    b: "A written procedure for every workflow I build: what it does, when it runs, how to change it safely, and how to tell when it's broken. Screen recordings where they help, though the writing stands on its own.",
    contains: [
      "One procedure per system, in plain language",
      "Change and troubleshooting steps for each",
      "Walkthroughs recorded during the handoff",
    ],
  },
  {
    kind: "Operating kit",
    t: "The Weekly Loop and the 30/60/90",
    b: "The cadence that keeps the engine from becoming a screenshot, plus exactly what your operator does in each of their first three months without me.",
    contains: [
      "The Monday agenda: inputs, decisions, owners",
      "Campaign brief and template structures",
      "A 30/60/90 runbook written for the named operator",
    ],
  },
];

export default function Keeps() {
  return (
    <section className="border-t border-rule px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
      <div className="mx-auto max-w-[960px]">
        <p className="label mb-8">What you keep</p>

        <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
          The engagement ends. All of this stays.
        </h2>

        <p className="measure text-base leading-[1.68] text-muted">
          What you own at the end is a shelf of documents, models and specs,
          all of it written for whoever has to use it once I&apos;m gone rather
          than for whoever signed the agreement. That distinction starts to
          matter about six months in.
        </p>

        <div className="mt-11 grid gap-px border border-rule bg-rule sm:grid-cols-2">
          {artifacts.map((a) => (
            <div key={a.t} className="flex flex-col bg-bg px-6 py-7">
              <p className="mb-3 text-[10px] uppercase tracking-[0.13em] text-accent">
                {a.kind}
              </p>
              <h3 className="display-xs mb-2.5 text-[19px]">{a.t}</h3>
              <p className="text-[13.5px] leading-[1.6] text-muted">{a.b}</p>
              <ul className="mt-4 border-t border-rule pt-3">
                {a.contains.map((c) => (
                  <li
                    key={c}
                    className="relative py-1 pl-4 text-[12.5px] leading-[1.5] text-faint"
                  >
                    <span aria-hidden="true" className="absolute left-0.5 text-accent">
                      &middot;
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="measure mt-8 text-[15px] leading-[1.7] text-muted">
          Handed over as working files in your own tools: your drive, your CRM,
          your automation platform. Nothing lives in a system only I can log into.
        </p>
      </div>
    </section>
  );
}
