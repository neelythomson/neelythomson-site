import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getEssay, getEssays } from "@/lib/substack";

export const revalidate = 3600;
export const dynamicParams = true;

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return (await getEssays()).map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const essay = await getEssay(slug);
  if (!essay) return {};
  const url = `https://neelythomson.com/writing/${essay.slug}`;
  return {
    title: `${essay.title} | Neely Thomson`,
    description: essay.dek,
    alternates: { canonical: url },
    openGraph: {
      title: essay.title,
      description: essay.dek,
      url,
      siteName: "Neely Thomson",
      locale: "en_US",
      type: "article",
      publishedTime: essay.isoDate,
    },
  };
}

export default async function EssayPage({ params }: Params) {
  const { slug } = await params;
  const essay = await getEssay(slug);
  if (!essay) notFound();

  const url = `https://neelythomson.com/writing/${essay.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: essay.title,
    description: essay.dek,
    abstract: essay.excerpt.join(" "),
    datePublished: essay.isoDate,
    dateModified: essay.isoDate,
    inLanguage: "en-US",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    sameAs: [essay.substackUrl],
    isPartOf: { "@type": "Blog", "@id": "https://neelythomson.com/writing" },
    author: {
      "@type": "Person",
      name: "Neely Thomson",
      url: "https://neelythomson.com",
      jobTitle: "Fractional CMO",
    },
    publisher: { "@type": "Person", name: "Neely Thomson", url: "https://neelythomson.com" },
  };

  return (
    <>
      <Header />
      <Breadcrumbs
        items={[
          { name: "Writing", url: "https://neelythomson.com/writing" },
          { name: essay.title, url },
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main>
        <article className="px-6 pt-20 pb-16 sm:px-10 sm:pt-24 sm:pb-20">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">
              <Link href="/writing" className="transition-colors hover:text-accent">
                Writing
              </Link>
            </p>
            <div className="grid gap-4 md:grid-cols-[170px_1fr] md:gap-10">
              <div>
                <p className="tnum text-[12.5px] leading-[1.5] text-faint">
                  <time dateTime={essay.isoDate}>{essay.date}</time>
                </p>
              </div>
              <div>
                <h1 className="display max-w-[22ch] text-[clamp(2rem,4.4vw,3.2rem)]">{essay.title}</h1>
                {essay.dek && (
                  <p className="measure mt-6 text-base leading-[1.68] text-muted">{essay.dek}</p>
                )}
                <div className="measure mt-12 space-y-6 text-[17px] leading-[1.72]">
                  {essay.excerpt.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
                <div className="mt-12 border-t border-rule pt-8">
                  <p className="measure text-[15px] leading-[1.65] text-muted">
                    That is the opening. The rest of the essay, and every one that
                    follows, goes out on Substack.
                  </p>
                  <p className="mt-6">
                    <a
                      href={essay.substackUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block rounded-sm bg-ink px-[22px] py-[13px] text-sm font-medium text-bg transition-colors hover:bg-accent"
                    >
                      Read the full essay on Substack
                    </a>
                  </p>
                  <p className="mt-6 text-[13px] text-faint">
                    <Link
                      href="/writing"
                      className="border-b border-accent pb-px text-ink transition-colors hover:text-accent"
                    >
                      All essays
                    </Link>
                    <span className="px-2">·</span>
                    <Link href="/diagnostic" className="transition-colors hover:text-accent">
                      Start a Diagnostic
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
