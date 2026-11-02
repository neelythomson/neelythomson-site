const situations = [
  {
    t: "You have an open Head of Marketing role",
    b: "and you are not sure what to hire for anymore. The last version of the job assumed a team that no longer fits the budget.",
  },
  {
    t: "Your team is flat and the board wants more pipeline",
    b: "and nobody can tell you which channel returns it, which leads got dropped, or why sales stopped trusting the handoff.",
  },
  {
    t: "You deployed AI tools in marketing",
    b: "and nothing changed except the invoice. Content ships faster. Pipeline did not move.",
  },
];

export default function Situation() {
  return (
    <section className="border-t border-rule px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
      <div className="mx-auto max-w-[960px]">
        <p className="label mb-8">The situation</p>

        <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
          Most companies I talk to have some version of the same three
          problems.
        </h2>

        <div className="measure">
          {situations.map((s, i) => (
            <div
              key={s.t}
              className={`py-5 ${i === 0 ? "border-t border-rule" : "border-t border-rule"}`}
            >
              <p className="text-base leading-[1.68] text-ink">
                <span className="font-medium">{s.t}</span>{" "}
                <span className="text-muted">{s.b}</span>
              </p>
            </div>
          ))}
        </div>

        <p className="measure mt-7 text-base leading-[1.68] text-muted">
          All three come back to the same thing: the function underneath
          marketing was never built. Everyone reads it as a content problem.
          It&apos;s a plumbing problem: sequencing, scoring, routing,
          attribution, and an operating cadence that forces a decision every
          week. AI made production cheap, which is exactly what made the
          plumbing scarce.
        </p>

        <p
          className="mt-9 max-w-[32ch] border-t border-rule pt-7 text-[23px] italic leading-[1.42] text-ink"
          style={{ fontFamily: "var(--font-display)", fontVariationSettings: '"opsz" 48', fontWeight: 300 }}
        >
          Most fractional CMOs sell harder into the half that AI already
          commoditized.
        </p>
      </div>
    </section>
  );
}
