import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import SubscribeEmbed from "@/components/SubscribeEmbed";
import { getEssays, SUBSTACK } from "@/lib/substack";

const TITLE = "Writing | Neely Thomson";
const DESCRIPTION =
  "Essays every other Tuesday on building a marketing engine from inside a B2B software company: what I saw, what I decided, what the scoreboard said.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://neelythomson.com/writing",
    types: { "application/rss+xml": `${SUBSTACK}/feed` },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://neelythomson.com/writing",
    siteName: "Neely Thomson",
    locale: "en_US",
    type: "website",
  },
};

export const revalidate = 3600;

export default async function WritingPage() {
  const essays = await getEssays();

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": "https://neelythomson.com/writing",
    name: "Neely Thomson on building marketing engines",
    description: DESCRIPTION,
    url: "https://neelythomson.com/writing",
    inLanguage: "en-US",
    author: { "@type": "Person", name: "Neely Thomson", url: "https://neelythomson.com" },
    publisher: { "@type": "Person", name: "Neely Thomson", url: "https://neelythomson.com" },
    blogPost: essays.map((e) => ({
      "@type": "BlogPosting",
      headline: e.title,
      description: e.dek,
      datePublished: e.isoDate,
      url: `https://neelythomson.com/writing/${e.slug}`,
      author: { "@type": "Person", name: "Neely Thomson" },
    })),
  };

  return (
    <>
      <Header />
      <Breadcrumbs items={[{ name: "Writing", url: "https://neelythomson.com/writing" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }} />
      <main>
        <section className="px-6 pt-20 pb-16 sm:px-10 sm:pt-24 sm:pb-20">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">Writing</p>
            <h1 className="display mb-8 max-w-[18ch] text-[clamp(2.3rem,5vw,4rem)]">
              Notes from building marketing engines that run without me.
            </h1>
            <p className="measure text-base leading-[1.68] text-muted">
              Every other Tuesday I write about what building a marketing engine
              looks like from inside a B2B software company: what I saw, what I
              decided, what the scoreboard said. Names changed, numbers real. It
              goes out on Substack.
            </p>
          </div>
        </section>

        {essays.length > 0 && (
          <section className="border-t border-rule px-6 pt-20 pb-8 sm:px-10 sm:pt-24">
            <div className="mx-auto max-w-[960px]">
              <div className="grid gap-4 md:grid-cols-[170px_1fr] md:gap-10">
                <div>
                  <p className="label">Essays</p>
                  <p className="tnum mt-2 text-[12.5px] leading-[1.5] text-muted">
                    {essays.length === 1 ? "1 published" : `${essays.length} published`}
                  </p>
                </div>
                <ol className="border-t border-rule">
                  {essays.map((essay) => (
                    <li key={essay.slug} className="border-b border-rule py-8">
                      <p className="tnum text-[12.5px] text-faint">{essay.date}</p>
                      <h2 className="display-sm mt-3 text-[clamp(1.35rem,2.6vw,1.8rem)]">
                        <Link
                          href={`/writing/${essay.slug}`}
                          className="transition-colors hover:text-accent"
                        >
                          {essay.title}
                        </Link>
                      </h2>
                      {essay.dek && (
                        <p className="measure mt-3 text-[15px] leading-[1.65] text-muted">{essay.dek}</p>
                      )}
                      <p className="mt-4 text-[13px] text-faint">
                        <Link
                          href={`/writing/${essay.slug}`}
                          className="border-b border-accent pb-px text-ink transition-colors hover:text-accent"
                        >
                          Read the opening
                        </Link>
                        <span className="px-2">·</span>
                        <a
                          href={essay.substackUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-colors hover:text-accent"
                        >
                          Full essay on Substack
                        </a>
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </section>
        )}

        <section className="border-t border-rule px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <div className="grid gap-4 md:grid-cols-[170px_1fr] md:gap-10">
              <div>
                <p className="label">Subscribe</p>
                <p className="tnum mt-2 text-[12.5px] leading-[1.5] text-muted">
                  Every other Tuesday. No other email.
                </p>
              </div>
              <div>
                <SubscribeEmbed />
                <p className="mt-6 text-[13px] text-faint">
                  Already subscribed?{" "}
                  <a
                    href={`${SUBSTACK}/archive`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-b border-accent pb-px text-ink transition-colors hover:text-accent"
                  >
                    Read the archive on Substack
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
