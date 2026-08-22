const audiences = [
  {
    n: "01",
    t: "Startups looking to scale",
    b: "You've closed enough deals to know who the buyer is, and the founder is still the best marketer in the building. The engine is what lets the next fifty deals close without the founder in every one of them.",
  },
  {
    n: "02",
    t: "Enterprises automating marketing",
    b: "You have the team, the tools, and the budget. The work still moves by hand. At that scale, automating it is a routing, scoring and governance problem, and whatever gets built has to survive legal and procurement.",
  },
  {
    n: "03",
    t: "Small businesses without a CMO",
    b: "Nobody senior owns marketing, and a full-time hire is a decision you're not ready to make. You get the strategy and the systems, someone on your team runs them, and there's a seat you can keep if you want a hand on the wheel.",
  },
];

export default function WhoIWorkWith() {
  return (
    <section id="who" className="scroll-mt-20 border-t border-rule px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
      <div className="mx-auto max-w-[960px]">
        <p className="label mb-8">Who I work with</p>

        <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
          Different companies. The same missing layer.
        </h2>

        <p className="measure text-base leading-[1.68] text-muted">
          Most of my work is with B2B software sold into regulated or
          institutional buyers: fintech, edtech and workforce, healthtech,
          govtech. The gap between making things and routing them looks much the
          same wherever it turns up, though.
        </p>

        <div className="mt-11 grid gap-x-12 gap-y-9 md:grid-cols-3">
          {audiences.map((a) => (
            <div key={a.t} className="border-t border-rule pt-5">
              <p className="label mb-3">{a.n}</p>
              <h3 className="display-xs mb-2.5 text-[19px]">{a.t}</h3>
              <p className="text-[13.5px] leading-[1.65] text-muted">{a.b}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-rule pt-7">
          <p className="label mb-3">On client names</p>
          <p className="measure text-[15px] leading-[1.7] text-muted">
            No logo wall. Most of this work sits under NDA, and discretion is
            part of what people hire me for. References on request.
          </p>
        </div>
      </div>
    </section>
  );
}
