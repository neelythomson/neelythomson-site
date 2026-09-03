import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

const TITLE = "About Neely Thomson: Fractional CMO and Marketing Systems Architect";
const DESCRIPTION =
  "Twenty years in B2B SaaS and fintech marketing. Neely Thomson builds B2B marketing engines in ninety days and hands them to the client's own team, most recently after four years leading marketing at a fintech payments company under NACHA and CFPB.";
const URL = "https://neelythomson.com/about";

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
    type: "profile",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${URL}#page`,
  url: URL,
  name: TITLE,
  description: DESCRIPTION,
  isPartOf: { "@id": "https://neelythomson.com/#website" },
  mainEntity: { "@id": "https://neelythomson.com/#person" },
  about: { "@id": "https://neelythomson.com/#person" },
};

const track = [
  {
    k: "2020 – present",
    v: "Independent",
    r: "Fractional CMO and marketing systems architect. B2B software companies selling into regulated and institutional buyers.",
  },
  {
    k: "2022 – 2026",
    v: "B2B fintech payments",
    r: "Head of Marketing. Led a company-wide AI marketing transformation, served as interim sales leader, and helped execute the sale when the company was acquired.",
  },
  {
    k: "2018 – 2022",
    v: "National nonprofit",
    r: "Director of B2B Engagement inside a $70M marketing organization, on the corporate partnerships side.",
  },
  {
    k: "2014 – 2016",
    v: "Enterprise collaboration software",
    r: "Senior Sales Enablement Marketing Manager. The first job where the marketing to sales handshake was the whole problem.",
  },
  {
    k: "2013 – 2014",
    v: "B2B marketing automation software",
    r: "Marketing Manager. Learned the plumbing from inside the tools that do it.",
  },
];

const beliefs = [
  {
    t: "Plumbing over production",
    b: "AI made content cheap. It did not make routing, scoring, attribution or a weekly decision cadence cheap, and those are what turn work into pipeline. Most marketing help still sells harder into the half that got commoditized.",
  },
  {
    t: "Build and leave",
    b: "A fixed scope and a fixed end date. I train one named person on the client's team to run the engine while I build it, and then I am out. No open-ended retainer, and nothing that only works while I am in the room.",
  },
  {
    t: "Compliance is architecture",
    b: "Legal reading your landing page is not friction to route around. Review states, approval routing and claim substantiation belong inside the workflow, which is what makes marketing move faster in a regulated company, not slower.",
  },
];

export default function About() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <Breadcrumbs items={[{ name: "About", url: URL }]} />
      <main>
        <section className="px-6 pt-20 pb-16 sm:px-10 sm:pt-24 sm:pb-20">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">About</p>
            <h1 className="display mb-8 max-w-[17ch] text-[clamp(2.3rem,5vw,4rem)]">
              I spent my career on the inside. Now I build the part that stays.
            </h1>
            <p className="measure text-base leading-[1.68] text-muted">
              I am Neely Thomson, a fractional CMO and marketing systems architect based in
              Atlanta. I build marketing engines for B2B software companies selling into regulated
              and institutional buyers, and then I hand them to the client&apos;s own team.
            </p>
            <p className="measure mt-4 text-base leading-[1.68] text-muted">
              Twenty years in B2B SaaS and fintech marketing. Four of them most recently as Head
              of Marketing at a B2B fintech payments company, where I led a company-wide AI
              marketing transformation, stepped in as interim sales leader, and helped execute the
              sale when the company was acquired. Before that, the B2B side of a $70M nonprofit
              marketing organization, and before that, sales enablement and marketing automation,
              which is where I learned what the plumbing actually is.
            </p>
          </div>
        </section>

        <section className="border-t border-rule px-6 pt-20 pb-20 sm:px-10 sm:pt-24 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">Track record</p>
            <div>
              {track.map((t, i) => (
                <div
                  key={t.v}
                  className={`grid gap-3 py-6 md:grid-cols-[170px_1fr] md:gap-10 ${
                    i === 0 ? "" : "border-t border-rule"
                  }`}
                >
                  <div>
                    <p className="label tnum">{t.k}</p>
                    <p className="mt-1.5 text-[12.5px] font-medium">{t.v}</p>
                  </div>
                  <p className="max-w-[62ch] text-[15px] leading-[1.7] text-muted">{t.r}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-rule px-6 pt-20 pb-20 sm:px-10 sm:pt-24 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">What I believe about this work</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              Three things I would say on any first call.
            </h2>
            <div className="mt-10 grid gap-x-12 gap-y-9 md:grid-cols-3">
              {beliefs.map((b) => (
                <div key={b.t} className="border-t border-rule pt-5">
                  <h3 className="display-xs mb-2.5 text-[19px]">{b.t}</h3>
                  <p className="text-[13.5px] leading-[1.65] text-muted">{b.b}</p>
                </div>
              ))}
            </div>
            <p className="mt-11 border-t border-rule pt-7 text-[15px] leading-[1.7] text-muted">
              The full definition of the thing I build is on{" "}
              <a href="/marketing-engine" className="border-b border-accent pb-px text-ink transition-colors hover:text-accent">
                the marketing engine page
              </a>
              , and three engagements are written up in{" "}
              <a href="/work" className="border-b border-accent pb-px text-ink transition-colors hover:text-accent">
                the case studies
              </a>
              , with the client names withheld.
            </p>
          </div>
        </section>

        <section className="border-t border-rule px-6 pt-20 pb-20 sm:px-10 sm:pt-24 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <div className="grid gap-6 md:grid-cols-[170px_1fr] md:gap-10">
              <p className="label">Elsewhere</p>
              <div className="max-w-[62ch]">
                <p className="text-[15px] leading-[1.7] text-muted">
                  Every other Tuesday I publish an essay about what building a marketing engine
                  looks like from the inside: what I saw, what I decided, what the scoreboard said.
                  Names changed, numbers real.
                </p>
                <ul className="mt-6">
                  <li className="border-t border-rule py-3 text-[14px] text-muted">
                    <a href="/writing" className="border-b border-accent pb-px text-ink transition-colors hover:text-accent">
                      The essays
                    </a>{" "}
                    on this site, and in full on Substack
                  </li>
                  <li className="border-t border-rule py-3 text-[14px] text-muted">
                    <a
                      href="https://www.linkedin.com/in/neelythomson"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-b border-accent pb-px text-ink transition-colors hover:text-accent"
                    >
                      LinkedIn
                    </a>{" "}
                    for the full history and to send a note
                  </li>
                  <li className="border-t border-rule py-3 text-[14px] text-muted">
                    <a href="mailto:hello@neelythomson.com" className="border-b border-accent pb-px text-ink transition-colors hover:text-accent">
                      hello@neelythomson.com
                    </a>{" "}
                    if a form is the wrong shape for what you want to ask
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-rule px-6 pt-20 pb-16 sm:px-10 sm:pt-24 sm:pb-20">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">Start here</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              Two weeks, $7,500, and you&apos;ll know what&apos;s broken.
            </h2>
            <p className="measure text-base leading-[1.68] text-muted">
              Everything starts with the same audit. Two weeks, a fixed fee, and a written plan at
              the end of it, yours either way.
            </p>
            <a
              href="/#start"
              className="mt-9 inline-block rounded-sm bg-ink px-[22px] py-[13px] text-sm font-medium text-bg transition-colors hover:bg-accent"
            >
              Start a Diagnostic &nbsp;&rarr;
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
