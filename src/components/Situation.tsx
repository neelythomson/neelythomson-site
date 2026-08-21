export default function Situation() {
  return (
    <section className="border-t border-rule px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
      <div className="mx-auto max-w-[960px]">
        <p className="label mb-8">The situation</p>

        <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
          You can already make things. What you can&apos;t do is route them.
        </h2>

        <p className="measure text-base leading-[1.68] text-muted">
          You have someone who writes, someone who designs, and probably an
          agency invoice. Content ships. Nobody can tell you which of it
          produced pipeline, which leads got dropped, or why sales stopped
          trusting the handoff.
        </p>
        <p className="measure mt-4 text-base leading-[1.68] text-muted">
          That gap isn&apos;t a content problem. It&apos;s a plumbing problem —
          sequencing, scoring, routing, attribution, and an operating cadence
          that forces a decision every week. AI made production cheap. It made
          the plumbing scarce.
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
