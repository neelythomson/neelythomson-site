// Quotes from people Neely has worked with, in their own words and with their
// permission. Add entries here; the section renders nothing while the list is
// empty, so no placeholder ever reaches the live site.
//
// Each entry: the quote as given (light edits for length only), the person's
// name, their title, and the company described the same way the case studies
// describe it when the company name is under NDA.
export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  company: string;
};

export const testimonials: Testimonial[] = [];

export default function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section id="said" className="scroll-mt-20 border-t border-rule bg-band px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
      <div className="mx-auto max-w-[960px]">
        <p className="label mb-8">From people I&apos;ve worked with</p>

        <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure key={t.name} className="border-t border-rule pt-6">
              <blockquote
                className="text-[21px] leading-[1.45] text-ink"
                style={{ fontFamily: "var(--font-display)", fontVariationSettings: '"opsz" 48', fontWeight: 300 }}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 text-[13.5px] leading-[1.5] text-muted">
                <span className="font-medium text-ink">{t.name}</span>
                <br />
                {t.title}, {t.company}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
