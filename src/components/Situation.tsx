import ReadNext from "@/components/ReadNext";

export default function Situation() {
  return (
    <section className="border-t border-rule px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
      <div className="mx-auto max-w-[960px]">
        <p className="label mb-8">The situation</p>

        <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
          You have marketing, or you&apos;re about to hire for it. Either way,
          it isn&apos;t a revenue-generating system yet.
        </h2>

        <p className="measure text-base leading-[1.68] text-muted">
          You have a marketing manager or an agency, a HubSpot account, a
          couple of AI tools, and a dashboard nobody trusts. Content goes out
          every week. Nobody can say which of it produced pipeline, which
          leads got dropped, or why sales stopped following up on them.
        </p>
        <p className="measure mt-4 text-base leading-[1.68] text-muted">
          That&apos;s the gap I close. It usually shows up as one of three
          things: you&apos;re about to make your first marketing hire and
          don&apos;t know what to hire for, headcount is flat and the board
          wants more pipeline, or you bought AI tools and nothing changed.
        </p>
        <ReadNext
          className="mt-7"
          next={{
            lead: "About to make the first hire?",
            href: "/head-of-marketing-vs-marketing-manager",
            text: "Head of marketing, or marketing manager",
          }}
          step={{
            lead: "Have a marketer already?",
            href: "/diagnostic",
            text: "How the two-week Diagnostic runs",
          }}
        />

        <p
          className="mt-9 max-w-[32ch] border-t border-rule pt-7 text-[23px] italic leading-[1.42] text-ink"
          style={{ fontFamily: "var(--font-display)", fontVariationSettings: '"opsz" 48', fontWeight: 300 }}
        >
          Every system I build is measured on the pipeline it returns. If it
          doesn&apos;t produce revenue, it doesn&apos;t ship.
        </p>
      </div>
    </section>
  );
}
