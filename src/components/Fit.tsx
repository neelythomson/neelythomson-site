const conditions = [
  {
    t: "You're about to make your first marketing hire",
    b: "Seed to Series A, marketing still run by you, and you'd rather the hire inherit a plan, a budget, a stack and a scoreboard than spend their first quarter building them. That's the First Hire Plan.",
  },
  {
    t: "You have a marketer and want more pipeline from them",
    b: "A marketer or a small team, a dozen or more closed deals, budget going out the door, and nobody can say what it returned. That's the Diagnostic, then the Marketing Engine.",
  },
  {
    t: "You measure marketing on revenue",
    b: "Every system I build is scored on the pipeline it returns, and the proof sits in your own CRM, not in my deck. If you'd rather measure on activity, we'll disagree about what good looks like.",
  },
  {
    t: "You want to own it",
    b: "At the end, the function belongs to your team and runs under their hands. Someone on your side gives it a few hours a week during the build. Whether I stay close afterwards is your call, not a condition.",
  },
];

export default function Fit() {
  return (
    <section id="fit" className="scroll-mt-20 border-t border-rule px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
      <div className="mx-auto max-w-[960px]">
        <p className="label mb-8">Fit</p>

        <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
          This works when you want a marketing function that produces
          revenue, and you want to own it.
        </h2>

        <p className="measure text-base leading-[1.68] text-muted">
          Four things are usually true of the companies that get the most out
          of this. If you&apos;re not sure which door is yours, say so on the
          first call and we&apos;ll work it out together.
        </p>

        <div className="mt-9">
          {conditions.map((c, i) => (
            <div
              key={c.t}
              className={`grid gap-4 py-7 md:grid-cols-[170px_1fr] md:gap-10 ${
                i === 0 ? "" : "border-t border-rule"
              }`}
            >
              <div>
                <p className="text-[12.5px] font-medium">{c.t}</p>
                <p className="label mt-1 tnum">0{i + 1}</p>
              </div>
              <p className="max-w-[62ch] text-[15px] leading-[1.7] text-muted">
                {c.b}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-6 border-t border-rule pt-7 text-[15px] leading-[1.7] text-muted">
          Everything else people ask before the first call is on the{" "}
          <a
            href="/faq"
            className="border-b border-accent pb-px text-ink transition-colors hover:text-accent"
          >
            FAQ
          </a>
          .
        </p>
      </div>
    </section>
  );
}
