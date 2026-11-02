const blocks = [
  {
    t: "The usage policy",
    b: "What AI may touch, what it may draft, and what a person must sign, written down and agreed with legal before the first prompt runs.",
  },
  {
    t: "Approval gates",
    b: "Review states, approval routing, and claim substantiation live inside the workflow. Legal stops being the bottleneck because they're a step, not a gate.",
  },
  {
    t: "The record",
    b: "Prompt and output logs, model versions, and who approved what, kept the way an examiner expects to find them. The function can show its work.",
  },
];

export default function Compliant() {
  return (
    <section id="compliant" className="scroll-mt-20 border-t border-rule bg-band px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
      <div className="mx-auto max-w-[960px]">
        <p className="label mb-8">Compliant by design</p>

        <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
          An AI-native marketing function your legal team can read.
        </h2>

        <p className="measure text-base leading-[1.68] text-muted">
          The rules that govern your marketing did not change when the tools
          did. A machine-drafted claim is still your claim, supervision cannot
          be handed to an algorithm, and the record has to show who reviewed
          what. I build the function so that is true from the first week, not
          retrofitted after the first exam.
        </p>

        <div className="mt-11 grid gap-x-12 gap-y-8 sm:grid-cols-3">
          {blocks.map((p) => (
            <div key={p.t}>
              <h3 className="display-xs mb-2 border-t border-rule pt-4 text-[18px]">
                {p.t}
              </h3>
              <p className="text-[13.5px] leading-[1.6] text-muted">{p.b}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-[13px] text-faint">
          Built this way under NACHA rules and CFPB scrutiny. Designed to the
          rulebook that applies to you, whether that is FINRA 2210 for a
          broker-dealer or CFPB UDAAP and your bank partner&apos;s requirements
          for payments and lending.
        </p>
      </div>
    </section>
  );
}
