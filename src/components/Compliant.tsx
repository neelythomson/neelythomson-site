const points = [
  {
    t: "Compliance as architecture",
    b: "Review states, approval routing, and claim substantiation live inside the workflow. Legal stops being the bottleneck because they're a step, not a gate.",
  },
  {
    t: "I've sat in the sales chair",
    b: "I served as interim sales leader at the same company, and helped execute its sale when it was acquired. The marketing–sales handshake is the first thing to die after a consultant leaves. I build it from both sides because I have sat in both.",
  },
  {
    t: "Procurement runs on a fiscal year",
    b: "School districts, agencies and hospital systems buy on a budget calendar, not on your quarter. Channel bets and sequencing get planned against their year, so pipeline is warm when the window opens.",
  },
  {
    t: "The security reviewer is on the committee",
    b: "Your buyer's security and legal teams are in the deal by the second call. The engine carries what they'll ask for: claims with substantiation, a review trail, and content that has already been through the gate.",
  },
];

export default function Compliant() {
  return (
    <section id="compliant" className="scroll-mt-20 bg-ink px-6 pt-24 pb-20 text-band sm:px-10 sm:pt-28 sm:pb-24">
      <span id="regulated" className="block" aria-hidden="true" />
      <div className="mx-auto max-w-[960px]">
        <p className="label mb-8 text-white/70">Compliance</p>

        <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)] text-white">
          Built to pass legal review.
        </h2>

        <p className="measure text-base leading-[1.68] text-white/70">
          In fintech, edtech, healthtech and govtech, every claim on your
          website is a regulated statement. I put review inside the workflow,
          so legal sees each claim with its evidence attached instead of
          reading finished campaigns at the end. I write the rules for what AI
          can draft and what a person has to approve. And I keep the record an
          examiner would ask for: prompts, outputs, approvals.
        </p>
        <p className="measure mt-4 text-base leading-[1.68] text-white/70">
          I built marketing this way at a payments company under NACHA and
          CFPB. It cut manual campaign work by 60%.{" "}
          <a href="/fractional-cmo-fintech" className="border-b border-white/40 pb-px text-white transition-colors hover:text-accent">
            What changes in fintech, in detail
          </a>
          .
        </p>
        <p className="mt-6 text-[13px] text-white/70">
          <span className="label mr-3 text-white/70">By industry</span>
          <a href="/fractional-cmo-fintech" className="border-b border-white/40 pb-px text-white transition-colors hover:text-accent">
            Fintech and payments
          </a>
          <span className="mx-2">&middot;</span>
          <a href="/fractional-cmo-credit-unions" className="border-b border-white/40 pb-px text-white transition-colors hover:text-accent">
            Credit unions
          </a>
          <span className="mx-2">&middot;</span>Healthtech
          <span className="mx-2">&middot;</span>Edtech and workforce
          <span className="mx-2">&middot;</span>Govtech
        </p>

        <div className="mt-11 grid gap-x-12 gap-y-8 sm:grid-cols-2">
          {points.map((p) => (
            <div key={p.t}>
              <h3 className="display-xs mb-2 border-t border-white/20 pt-4 text-[18px] text-white">
                {p.t}
              </h3>
              <p className="text-[13.5px] leading-[1.6] text-white/70">{p.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
