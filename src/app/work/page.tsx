import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { caseStudies } from "@/components/CaseStudy";

const TITLE = "Work: Marketing Engines Built for B2B, Fintech, and Institutional Buyers";
const DESCRIPTION =
  "Three case studies with numbers: an AI marketing engine under NACHA and CFPB, a B2B partnership engine inside a $70M nonprofit, and enterprise ABM on a $500K budget.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "https://neelythomson.com/work" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://neelythomson.com/work",
    siteName: "Neely Thomson",
    locale: "en_US",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Neely Thomson. I build the marketing engine. Your team runs it." }],
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://neelythomson.com/work#page",
  url: "https://neelythomson.com/work",
  name: TITLE,
  description: DESCRIPTION,
  isPartOf: { "@id": "https://neelythomson.com/#website" },
  author: { "@id": "https://neelythomson.com/#person" },
  hasPart: caseStudies.map((c) => ({ "@id": `https://neelythomson.com/work/${c.slug}#article` })),
};

export default function Work() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="px-6 pt-20 pb-16 sm:px-10 sm:pt-24 sm:pb-20">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">Work</p>
            <h1 className="display mb-8 max-w-[18ch] text-[clamp(2.3rem,5vw,4rem)]">
              Three engines, three budgets, the same method.
            </h1>
            <p className="measure text-base leading-[1.68] text-muted">
              A $2M fintech marketing budget under federal payments regulation, the B2B side of a
              $70M nonprofit, and a $500K services firm selling to enterprise executives. Different
              money, same problem: production without plumbing. Names are withheld; details and
              references are available in conversation.
            </p>
          </div>
        </section>

        <section className="border-t border-rule px-6 pt-20 pb-20 sm:px-10 sm:pt-24 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            {caseStudies.map((c, i) => (
              <a
                key={c.slug}
                href={`/work/${c.slug}`}
                className={`group grid gap-5 py-9 md:grid-cols-[170px_1fr] md:gap-10 ${i === 0 ? "" : "border-t border-rule"}`}
              >
                <div>
                  <p className="label">Case study {c.n}</p>
                  <p className="mt-2 text-[12.5px] font-medium text-muted">{c.facts[0].v}</p>
                  <p className="mt-1 text-[12.5px] text-faint">{c.facts[1].v}</p>
                </div>
                <div>
                  <h2 className="display-sm text-[clamp(1.5rem,2.6vw,2.1rem)] text-ink transition-colors group-hover:text-accent">
                    {c.title}
                  </h2>
                  <p className="mt-3 max-w-[62ch] text-[15px] leading-[1.7] text-muted">{c.description}</p>
                  {c.results.length > 0 && (
                    <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
                      {c.results.map((r) => (
                        <li key={r.label}>
                          <span className="display tnum text-[26px] leading-none text-accent">{r.figure}</span>
                          <span className="ml-2 text-[12.5px] text-muted">{r.label}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <p className="mt-5 text-[13px] font-medium text-accent">Read the case study</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="border-t border-rule px-6 pt-20 pb-16 sm:px-10 sm:pt-24 sm:pb-20">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">Start here</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              Two weeks, $7,500, and you&apos;ll know what&apos;s broken.
            </h2>
            <p className="measure text-base leading-[1.68] text-muted">
              Every engine above started with the same audit.{" "}
              <a href="/#start" className="border-b border-accent pb-px text-ink transition-colors hover:text-accent">
                Send a note
              </a>{" "}
              and I&apos;ll reply with a few questions.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
