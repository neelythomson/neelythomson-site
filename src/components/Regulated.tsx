const points = [
  {
    t: "Compliance as architecture",
    b: "Review states, approval routing, and claim substantiation live inside the workflow. Legal stops being the bottleneck because they're a step, not a gate.",
  },
  {
    t: "I've sat in the sales chair",
    b: "Interim Sales Leader at Dwolla. The marketing–sales handshake is the thing that dies first after a consultant leaves. I build it from both sides.",
  },
  {
    t: "The handoff has software attached",
    b: "I built Kindling, an AI marketing teammate for teams of one to three. Your operator gets a tool, not just a runbook.",
  },
  {
    t: "I leave a system, not a strategy",
    b: "A build isn't finished until someone on your team has done every workflow three times — on camera, with me watching the first two.",
  },
];

export default function Regulated() {
  return (
    <section className="bg-ink px-6 pt-24 pb-20 text-band sm:px-10 sm:pt-28 sm:pb-24">
      <div className="mx-auto max-w-[960px]">
        <p className="label mb-8 text-white/40">Why regulated buyers</p>

        <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)] text-white">
          I&apos;ve shipped AI marketing through legal review, not around it.
        </h2>

        <p className="measure text-base leading-[1.68] text-white/60">
          Selling into banks, school districts, hospital systems, and government
          agencies isn&apos;t the same motion with a longer sales cycle. The
          buying committee has a security reviewer in it. Procurement gates on
          fiscal year. Legal reads your landing page. Most marketing engines are
          built as if none of that is true, then quietly stall at the compliance
          step.
        </p>
        <p className="measure mt-4 text-base leading-[1.68] text-white/60">
          I built AI-assisted content production and web ops at a payments
          company under NACHA rules and CFPB scrutiny — with legal in the
          workflow, not bolted on at the end.
        </p>

        <div className="mt-11 grid gap-x-12 gap-y-8 sm:grid-cols-2">
          {points.map((p) => (
            <div key={p.t}>
              <h3 className="display-xs mb-2 border-t border-white/20 pt-4 text-[18px] text-white">
                {p.t}
              </h3>
              <p className="text-[13.5px] leading-[1.6] text-white/60">{p.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
