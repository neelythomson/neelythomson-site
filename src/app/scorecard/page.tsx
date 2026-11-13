import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import Byline from "@/components/Byline";
import PostingScorecard from "@/components/PostingScorecard";
import CopyPosting from "@/components/CopyPosting";
import data from "@/data/posting-scorecard.json";

const TITLE = "Marketing Leader Job Posting Scorecard: Ten Lines to Check Before It Goes Live";
const DESCRIPTION =
  "A free ten-line scorecard for a Head of Marketing, VP of Marketing or first marketing hire posting. Tick what is true, see what to change for every line that is not, copy an example posting, and take three questions into the final round.";
const URL = "https://neelythomson.com/scorecard";
const PUBLISHED = "2026-11-13";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: "Neely Thomson",
    locale: "en_US",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${URL}#article`,
      headline: TITLE,
      description: DESCRIPTION,
      url: URL,
      datePublished: `${PUBLISHED}T12:00:00-05:00`,
      dateModified: `${PUBLISHED}T12:00:00-05:00`,
      image: [`${URL}/opengraph-image`],
      author: { "@id": "https://neelythomson.com/#person" },
      publisher: { "@id": "https://neelythomson.com/#person" },
    },
    {
      "@type": "ItemList",
      name: "Ten lines to check in a marketing-leader job posting",
      itemListElement: data.items.map((it, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: it.q,
        description: it.fix,
      })),
    },
  ],
};

const link = "border-b border-accent pb-px text-ink transition-colors hover:text-accent";

export default function Scorecard() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <Breadcrumbs items={[{ name: "Posting scorecard", url: URL }]} />
      <main id="main">
        <section className="px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">A scorecard for founders · Ten lines</p>
            <h1 className="display mb-8 max-w-[18ch] text-[clamp(2.2rem,4.8vw,3.8rem)]">
              Score a marketing-leader posting before it goes live.
            </h1>
            <p className="measure text-[17px] leading-[1.62] text-muted">
              Open the posting as it reads today and tick each line that is
              true. Every open line has a note under it that says what to
              change, and there is an example posting further down that you
              can copy. It takes about ten minutes, and it works for a Head
              of Marketing, a VP of Marketing, or a first marketing hire.
            </p>
            <p className="measure mt-4 text-[14px] leading-[1.62] text-faint">
              Free to use and to share. Nothing you tick is stored or sent
              anywhere.
            </p>
            <Byline date={PUBLISHED} label="Published" className="mt-6" />
            <PostingScorecard />
          </div>
        </section>

        <section className="border-t border-rule bg-band px-6 pt-20 pb-16 sm:px-10 sm:pt-24 sm:pb-20">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">How to read the score</p>
            <div className="grid gap-x-12 gap-y-9 md:grid-cols-3">
              {data.bands.map((b) => (
                <div key={b.range}>
                  <p className="label mb-3 tnum">{b.range}</p>
                  <h2 className="display-xs mb-3 text-[21px]">{b.t}</h2>
                  <p className="text-[14px] leading-[1.7] text-muted">{b.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="example" className="scroll-mt-20 border-t border-rule px-6 pt-20 pb-16 sm:px-10 sm:pt-24 sm:pb-20">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">An example to edit</p>
            <h2 className="display-sm mb-7 max-w-[24ch] text-[clamp(1.7rem,3vw,2.5rem)]">
              A posting that covers all eight lines.
            </h2>
            <p className="measure text-base leading-[1.68] text-muted">
              Every detail below is a placeholder. Keep the structure, replace
              what is in brackets, and change the specifics to what is true at
              your company. The number beside each paragraph is the line it
              answers.
            </p>
            <div className="mt-10 border-t border-ink pt-8">
              <div className="grid gap-3 pb-6 md:grid-cols-[170px_1fr] md:gap-10">
                <span className="label pt-1">The posting</span>
                <div>
                  <p className="display-xs text-[21px]">{data.model.title}</p>
                  <p className="mt-2 max-w-[62ch] text-[15px] leading-[1.7] text-muted">{data.model.intro}</p>
                </div>
              </div>
              {data.model.parts.map((p) => (
                <div key={p.line} className="grid gap-3 border-t border-rule py-5 md:grid-cols-[170px_1fr] md:gap-10">
                  <span className="label pt-1 tnum">Line {p.line}</span>
                  <div>
                    <p className="text-[15px] font-medium leading-[1.6] text-ink">{p.h}</p>
                    <p className="mt-1 max-w-[62ch] text-[15px] leading-[1.7] text-muted">{p.t}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <CopyPosting />
            </div>
          </div>
        </section>

        <section className="border-t border-rule bg-band px-6 pt-20 pb-16 sm:px-10 sm:pt-24 sm:pb-20">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">For the final round</p>
            <h2 className="display-sm mb-9 max-w-[24ch] text-[clamp(1.7rem,3vw,2.5rem)]">
              Three of the lines work as interview questions.
            </h2>
            <ol>
              {data.interview.map((it, i) => (
                <li key={it.q} className={`grid gap-3 py-6 md:grid-cols-[170px_1fr] md:gap-10 ${i === 0 ? "" : "border-t border-rule"}`}>
                  <span className="label pt-1 tnum">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="max-w-[62ch] text-[16px] leading-[1.65] text-ink">&ldquo;{it.q}&rdquo;</p>
                    <p className="mt-2 max-w-[62ch] text-[14px] leading-[1.7] text-muted">{it.why}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-t border-rule px-6 pt-16 pb-16 sm:px-10">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-5">Who made this</p>
            <p className="measure text-base leading-[1.68] text-muted">
              I&apos;m{" "}
              <a href="/about" className={link}>
                Neely Thomson
              </a>
              . I build marketing functions for B2B software startups, mostly
              in regulated markets. If you&apos;d like a second read of a
              posting, send it to{" "}
              <a href="mailto:hello@neelythomson.com?subject=Posting%20read" className={link}>
                hello@neelythomson.com
              </a>
              . The longer guide to a first marketing hire is{" "}
              <a href="/first-marketing-hire" className={link}>
                here
              </a>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
