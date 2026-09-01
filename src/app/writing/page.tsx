import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TITLE = "Writing | Neely Thomson";
const DESCRIPTION =
  "Essays every other Tuesday on building a marketing engine from inside a B2B software company: what I saw, what I decided, what the scoreboard said. On Substack.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "https://neelythomson.com/writing" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://neelythomson.com/writing",
    siteName: "Neely Thomson",
    locale: "en_US",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Neely Thomson. I build the marketing engine. Your team runs it." }],
    type: "website",
  },
};

const SUBSTACK = "https://neelythomson.substack.com";

export default function WritingPage() {
  return (
    <>
      <Header />
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

        <section className="border-t border-rule px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <div className="grid gap-4 md:grid-cols-[170px_1fr] md:gap-10">
              <div>
                <p className="label">Subscribe</p>
                <p className="tnum mt-2 text-[12.5px] leading-[1.5] text-muted">
                  First essay: September 8, 2026.
                </p>
              </div>
              <div>
                <iframe
                  src={`${SUBSTACK}/embed`}
                  width="480"
                  height="150"
                  style={{ border: "1px solid var(--color-rule)", background: "transparent" }}
                  frameBorder="0"
                  scrolling="no"
                  title="Subscribe on Substack"
                  className="block max-w-full"
                />
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
