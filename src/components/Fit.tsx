const conditions = [
  {
    t: "You want to own the engine",
    b: "This is a build-and-leave engagement. At the end it belongs to your team, and I'm out. If what you need is someone to run marketing week to week, you need an operator, not me.",
  },
  {
    t: "You can name your operator",
    b: "One person on your side who'll own the engine and give it four to six hours a week during the build. Without them there's nothing to hand over.",
  },
  {
    t: "Creative and media live with your team",
    b: "I build the systems that route, score and measure the work. Your team or a partner produces it, and I'm glad to refer people I trust.",
  },
  {
    t: "You know who your buyer is",
    b: "Roughly a dozen closed deals is enough for me to build from patterns instead of guesses. Earlier than that, positioning work will do more for you than plumbing.",
  },
];

export default function Fit() {
  return (
    <section className="border-t border-rule px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
      <div className="mx-auto max-w-[960px]">
        <p className="label mb-8">Fit</p>

        <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
          This works when four things are true.
        </h2>

        <p className="measure text-base leading-[1.68] text-muted">
          If any of these isn&apos;t true yet, say so on the first call. It
          usually means a different engagement, or a different month.
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
