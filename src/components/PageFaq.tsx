// Renders the questions a page marks up as FAQPage JSON-LD, so the structured
// data never describes content a reader cannot see. Text is passed in from
// the same array that feeds the schema.
export default function PageFaq({
  items,
  label = "Questions",
  heading = "Questions people ask first.",
}: {
  items: { q: string; a: string }[];
  label?: string;
  heading?: string;
}) {
  return (
    <section className="border-t border-rule px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
      <div className="mx-auto max-w-[960px]">
        <p className="label mb-8">{label}</p>
        <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">{heading}</h2>
        <div className="mt-9">
          {items.map((f, i) => (
            <div key={f.q} className={`grid gap-3 py-7 md:grid-cols-[1fr_2fr] md:gap-10 ${i === 0 ? "" : "border-t border-rule"}`}>
              <h3 className="display-xs text-[19px]">{f.q}</h3>
              <p className="max-w-[62ch] text-[15px] leading-[1.7] text-muted">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
