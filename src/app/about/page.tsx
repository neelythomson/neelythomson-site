import type { Metadata } from "next";
import StartCta from "@/components/StartCta";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

const TITLE = "About Neely Thomson: Marketing Functions for Software Startups";
const DESCRIPTION =
  "Twenty years running marketing for technology companies, most recently as Head of Marketing at a fintech. Now Neely Thomson builds marketing functions for software startups.";
const URL = "https://neelythomson.com/about";

export const metadata: Metadata = {
  title: { absolute: TITLE },
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
    r: "Fractional CMO for regulated B2B software.",
  },
  {
    k: "2022 – 2026",
    v: "B2B fintech payments",
    r: "Head of Marketing. Led the AI marketing rebuild, served as interim sales leader, helped execute the sale.",
  },
  {
    k: "2018 – 2022",
    v: "National nonprofit",
    r: "Director of B2B Engagement, corporate partnerships, inside a $70M marketing organization.",
  },
  {
    k: "2014 – 2016",
    v: "Enterprise collaboration software",
    r: "Senior Sales Enablement Marketing Manager. Launched the internal sales enablement platform used by 400+ reps.",
  },
  {
    k: "2013 – 2014",
    v: "B2B marketing automation software",
    r: "Marketing Manager.",
  },
];

const beliefs = [
  {
    t: "The plumbing matters more than the content",
    b: "AI made content cheap. Routing, scoring, attribution and a weekly decision cadence are what turn it into pipeline.",
  },
  {
    t: "Your team runs it",
    b: "Fixed scope, fixed end date. One person on your side learns each system as I build it. Whether I stay on afterward is your call.",
  },
  {
    t: "Compliance is part of the build",
    b: "Review, approval routing and claim substantiation go inside the workflow. That is what makes marketing faster in a regulated company, not slower.",
  },
];

export default function About() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <Breadcrumbs items={[{ name: "About", url: URL }]} />
      <main id="main">
        <section className="px-6 pt-20 pb-16 sm:px-10 sm:pt-24 sm:pb-20">
          <div className="mx-auto grid max-w-[960px] items-start gap-10 md:grid-cols-[1fr_240px] md:gap-14">
            <div>
            <p className="label mb-8">About</p>
            <h1 className="display mb-8 max-w-[17ch] text-[clamp(2.3rem,5vw,4rem)]">
              Twenty years running marketing for technology companies. Now I build the function for startups.
            </h1>
            <p className="measure text-base leading-[1.68] text-muted">
              I&apos;m Neely Thomson, in Atlanta. I build revenue-generating marketing functions
              for software startups: before the first marketing hire, when the role, the plan,
              the budget and the stack need to exist before the posting goes up, or after it,
              when a marketer is in place and nobody can say what the spend returned. Most of
              my work is in regulated software: fintech, healthtech, edtech, govtech.
            </p>
            <p className="measure mt-4 text-base leading-[1.68] text-muted">
              The last four of those twenty years were as Head of Marketing at a fintech payments
              company that was acquired in 2026. We built AI into how marketing ran there, under
              NACHA and CFPB, with legal inside the workflow. It took 60% of the manual work out
              of campaigns. I also spent a stretch as interim sales leader, which is where I
              learned how the marketing to sales handoff breaks.
            </p>
            <p className="measure mt-4 text-base leading-[1.68] text-muted">
              I have done this at startup and enterprise scale, through two acquisitions, on
              budgets from millions a month to bootstrapped. Now I do it for founders: design
              or rebuild the marketing function around what AI covers and what people must hold,
              get it through legal review, and hand it to the person who runs it. I&apos;m always
              trying to work myself out of a job.
            </p>
            </div>
            <figure className="max-w-[280px] md:max-w-none md:pt-14">
              <Image
                src="/neely-thomson.jpg"
                alt="Neely Thomson"
                width={800}
                height={800}
                priority
                sizes="(min-width: 768px) 240px, 280px"
                className="aspect-[4/5] w-full rounded-[3px] object-cover object-top"
              />
              <figcaption className="label mt-3">Neely Thomson · Atlanta</figcaption>
            </figure>
          </div>
        </section>

        <section className="border-t border-rule px-6 pt-20 pb-20 sm:px-10 sm:pt-24 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">
              Track record <span className="text-accent">&middot; a selection</span>
            </p>
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
            <p className="label mb-8">How I work</p>
            <div className="mt-10 grid gap-x-12 gap-y-9 md:grid-cols-3">
              {beliefs.map((b) => (
                <div key={b.t} className="border-t border-rule pt-5">
                  <h2 className="display-xs mb-2.5 text-[19px]">{b.t}</h2>
                  <p className="text-[13.5px] leading-[1.65] text-muted">{b.b}</p>
                </div>
              ))}
            </div>
            <p className="mt-11 border-t border-rule pt-7 text-[15px] leading-[1.7] text-muted">
              The full definition is on{" "}
              <a href="/marketing-engine" className="border-b border-accent pb-px text-ink transition-colors hover:text-accent">
                the marketing engine page
              </a>
              . Three engagements are written up under{" "}
              <a href="/work" className="border-b border-accent pb-px text-ink transition-colors hover:text-accent">
                Work
              </a>
              , names withheld.
            </p>
          </div>
        </section>

        <section className="border-t border-rule px-6 pt-20 pb-20 sm:px-10 sm:pt-24 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <div className="grid gap-6 md:grid-cols-[170px_1fr] md:gap-10">
              <p className="label">Elsewhere</p>
              <div className="max-w-[62ch]">
                <p className="text-[15px] leading-[1.7] text-muted">
                  I write on Substack about building marketing engines from the inside. Names
                  changed, numbers real.
                </p>
                <ul className="mt-6">
                  <li className="border-t border-rule py-3 text-[14px] text-muted">
                    <a href="/writing" className="border-b border-accent pb-px text-ink transition-colors hover:text-accent">
                      The essays
                    </a>{" "}
                    on this site, and in full on Substack
                  </li>
                  <li className="border-t border-rule py-3 text-[14px] text-muted">
                    Start with{" "}
                    <a href="/writing/your-buyers-are-finding-you-through" className="border-b border-accent pb-px text-ink transition-colors hover:text-accent">
                      Your buyers are finding you through an AI tool. Are you ready?
                    </a>
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
                    for the full history, or to send a note
                  </li>
                  <li className="border-t border-rule py-3 text-[14px] text-muted">
                    <a href="mailto:hello@neelythomson.com" className="border-b border-accent pb-px text-ink transition-colors hover:text-accent">
                      hello@neelythomson.com
                    </a>{" "}
                    if you&apos;d rather write
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-rule px-6 pt-20 pb-16 sm:px-10 sm:pt-24 sm:pb-20">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">Start here</p>
            <p className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              Before your first marketing hire, or after it.
            </p>
            <p className="measure text-base leading-[1.68] text-muted">
              Two doors, one method: a marketing function your team runs,
              measured on the revenue it produces, with a fixed fee and a fixed
              end date. Tell me which moment you are in and I will tell you which
              door.
            </p>
            <StartCta place="about" className="mt-9" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
