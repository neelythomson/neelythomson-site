import type { Metadata } from "next";
import StartCta from "@/components/StartCta";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import Byline from "@/components/Byline";
import ReadNext from "@/components/ReadNext";
import PageFaq from "@/components/PageFaq";

const TITLE = "How to Build a Marketing Engine: The Order That Works in Ninety Days";
const DESCRIPTION =
  "How to build a marketing engine at a B2B software company: the three layers in the order they have to be built, the four phases across thirteen weeks, what exists at the end of each, and what to do first.";
const URL = "https://neelythomson.com/how-to-build-a-marketing-engine";
const PUBLISHED = "2026-11-23";

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

const link = "border-b border-accent pb-px text-ink transition-colors hover:text-accent";

const wrongOrder = [
  {
    t: "The dashboard first",
    b: "It measures whatever is already happening, which is activity nobody chose. You get a precise read on the wrong things, and the board keeps reviewing MQL counts.",
  },
  {
    t: "The AI tools first",
    b: "Without a brief template, an approved-claims library and a written quality bar, they produce plausible copy in the wrong voice, faster. The queue gets longer.",
  },
  {
    t: "Scoring and routing first",
    b: "A score is a lead definition written in software. If sales and marketing haven't signed the definition, the model encodes an argument, and the argument continues.",
  },
];

const phases = [
  {
    name: "Diagnose",
    weeks: "Weeks 1 to 2",
    does: "Audit the stack, the funnel and unit economics by business unit, and the last ninety days of marketing requests. Interview marketing, sales and the people who own the numbers.",
    ends: "You know what is broken, ranked by its effect on pipeline, and you have named the person who will run the engine.",
  },
  {
    name: "Architect",
    weeks: "Weeks 3 to 5",
    does: "Write the strategy layer and the definitions. The ICP and its subsegments, a one-page go-to-market per business unit, the messaging, the lead definition and the SLA, the brief template and the quality bar.",
    ends: "Sales and marketing have signed one definition of a qualified lead, and every channel bet has a kill and scale rule.",
  },
  {
    name: "Build",
    weeks: "Weeks 6 to 10",
    does: "Build the operating system in the tools you already own. Scoring and routing in the CRM, one intake queue, the prompt and template libraries, the scoreboard wired to real data.",
    ends: "A lead moves from first touch to sales-accepted with its source stamped, and the scoreboard shows pipeline per dollar by channel.",
  },
  {
    name: "Hand off",
    weeks: "Weeks 11 to 13",
    does: "Your operator runs the engine while the builder reviews. Every workflow gets a written procedure. The Monday cadence moves to the operator.",
    ends: "The board one-pager assembles itself from the scoreboard, and nothing depends on the person who built it.",
  },
];

const faq = [
  {
    q: "How do you build a marketing engine?",
    a: "In layer order. Strategy first: the ICP, a one-page go-to-market, positioning, and channel bets with kill and scale criteria. Then the operating system: one lead definition, scoring and routing in the CRM, the sales SLA, an intake queue, and the AI production process. Last, the optimization loop: the scoreboard, pipeline per dollar by channel, and a quarterly budget move. Build it in the company's own tools and hand it to a named operator.",
  },
  {
    q: "How long does it take to build a marketing engine?",
    a: "About ninety days for a B2B software company with a marketer in place: two weeks to diagnose, three to architect, five to build, and three to hand off. The company's side is roughly six hours of interviews in the first two weeks, then four to six hours a week from the person who will run it.",
  },
  {
    q: "What should you build first?",
    a: "One written definition of a qualified lead, signed by whoever runs sales. Scoring, routing, the SLA and the scoreboard all depend on it, and it is the thing sales and marketing most often argue about. It costs a few conversations and no software.",
  },
  {
    q: "Do you need new software to build a marketing engine?",
    a: "Usually not. Most companies already own a CRM, a marketing automation platform and a couple of AI tools, and the build is configuration plus the definitions those tools were missing. A CRM or automation migration is a separate project and should be scoped and priced separately.",
  },
];

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
      isPartOf: { "@id": "https://neelythomson.com/#website" },
      about: ["Marketing engine", "Marketing operations", "B2B marketing", "Go-to-market"],
    },
    {
      "@type": "FAQPage",
      "@id": `${URL}#faq`,
      mainEntity: faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function HowToBuild() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <Breadcrumbs items={[{ name: "What is a marketing engine", url: "https://neelythomson.com/marketing-engine" }, { name: "How to build one", url: URL }]} />
      <main id="main">
        <section className="px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">The build order · Thirteen weeks</p>
            <h1 className="display mb-8 max-w-[16ch] text-[clamp(2.2rem,4.8vw,3.8rem)]">
              How to build a marketing engine.
            </h1>
            <p className="measure text-[17px] leading-[1.62] text-muted">
              Build a marketing engine in layer order: the strategy layer
              first, then the operating system, then the optimization loop.
              For a B2B software company with a marketer in place it takes
              about ninety days, in the tools you already own, and it ends
              with a named person on your team running it.
            </p>
            <p className="measure mt-4 text-[17px] leading-[1.62] text-muted">
              Most of what goes wrong is order. This page covers why the
              order matters, the four phases and what exists at the end of
              each, and the one thing to build first if you only build one.
            </p>
            <Byline date={PUBLISHED} label="Published" className="mt-6" />
            <ReadNext
              className="mt-8"
              next={{
                lead: "New to the term?",
                href: "/marketing-engine",
                text: "What a marketing engine is, layer by layer",
              }}
              step={{
                lead: "Want to know where yours is missing a layer?",
                href: "/diagnostic",
                text: "The Diagnostic finds it in two weeks",
              }}
            />
          </div>
        </section>

        <section className="border-t border-rule px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">Order</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              Why does the order matter?
            </h2>
            <p className="measure text-base leading-[1.68] text-muted">
              Each layer depends on the one before it. The operating system
              moves leads, so it needs to know who counts as a lead, which
              is a strategy decision. The optimization loop moves budget, so
              it needs a system that stamps every lead with its source.
              Teams usually start with whichever piece is easiest to buy.
            </p>
            <div className="mt-11 grid gap-x-12 gap-y-9 sm:grid-cols-3">
              {wrongOrder.map((w) => (
                <div key={w.t} className="border-t border-rule pt-5">
                  <h3 className="display-xs mb-2.5 text-[19px]">{w.t}</h3>
                  <p className="text-[13.5px] leading-[1.65] text-muted">{w.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-rule bg-band px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">The four phases</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              What gets built, and when?
            </h2>
            <p className="measure text-base leading-[1.68] text-muted">
              This is the order I build in. The layers overlap by a few
              weeks, and the test at the end of each phase is the part to
              hold to.
            </p>
            <div className="mt-9">
              {phases.map((p, i) => (
                <div key={p.name} className={`grid gap-4 py-7 md:grid-cols-[170px_1fr] md:gap-10 ${i === 0 ? "" : "border-t border-rule"}`}>
                  <div>
                    <p className="text-[12.5px] font-medium">{p.name}</p>
                    <p className="label mt-1">{p.weeks}</p>
                  </div>
                  <div className="max-w-[62ch]">
                    <p className="text-[15px] leading-[1.7] text-muted">{p.does}</p>
                    <p className="mt-3 text-[15px] leading-[1.7] text-ink">
                      <span className="label mr-3">Done when</span>
                      {p.ends}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-rule px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">Start here</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              What if you only build one thing?
            </h2>
            <p className="measure text-base leading-[1.68] text-muted">
              Write one definition of a qualified lead and get whoever runs
              sales to sign it. Scoring, routing, the SLA and the scoreboard
              all sit on top of it, and it&apos;s the thing sales and
              marketing argue about most. It takes a few conversations and
              no software.
            </p>
            <p className="measure mt-4 text-base leading-[1.68] text-muted">
              The one-page version, with the five clauses, is at{" "}
              <a href="/sales-marketing-sla-startup" className={link}>
                the sales and marketing SLA for a startup
              </a>
              .
            </p>
          </div>
        </section>

        <section className="border-t border-rule bg-band px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">Who runs it</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              What keeps it running after the build?
            </h2>
            <p className="measure text-base leading-[1.68] text-muted">
              A named operator and a weekly cadence. An engine nobody runs
              becomes a screenshot: six months later the dashboard is a
              picture in a deck and the process lives in someone&apos;s
              memory. So name the person in the first two weeks, build each
              system with them beside you, and have them run it before the
              build ends.
            </p>
            <p className="measure mt-4 text-base leading-[1.68] text-muted">
              You can do all of this yourself. The order is the same and
              the tools are ones you own. What usually takes longest is
              agreement between sales, marketing and whoever reads the
              number, which is why the definitions come before the software.
            </p>
          </div>
        </section>

        <section className="border-t border-rule px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">If you want it built with you</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              The first two weeks are sold on their own.
            </h2>
            <p className="measure text-base leading-[1.68] text-muted">
              The Diagnose phase is{" "}
              <a href="/diagnostic" className={link}>
                The Diagnostic
              </a>
              : a fixed fee, credited in full if the build follows. You can
              stop there and keep the plan. One engine built this way, under
              NACHA and CFPB, is written up in{" "}
              <a href="/work/fintech-payments" className={link}>
                the fintech payments case study
              </a>
              .
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <StartCta place="how-to-build" />
            </div>
          </div>
        </section>
        <PageFaq items={faq} />
      </main>
      <Footer />
    </>
  );
}
