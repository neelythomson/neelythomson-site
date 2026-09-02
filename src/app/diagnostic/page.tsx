import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TITLE = "The Marketing Diagnostic: A Two-Week B2B Marketing Audit, $7,500";
const DESCRIPTION =
  "A two-week, fixed-fee audit of a B2B company's marketing stack, funnel, and team. You get a findings document, a board one-pager, and a priced proposal for what to build first.";
const URL = "https://neelythomson.com/diagnostic";

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
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Neely Thomson. I build the marketing engine. Your team runs it." }],
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${URL}#service`,
      name: "The Marketing Diagnostic",
      serviceType: "B2B marketing audit",
      provider: { "@id": "https://neelythomson.com/#person" },
      areaServed: "US",
      url: URL,
      description: DESCRIPTION,
      offers: {
        "@type": "Offer",
        price: "7500",
        priceCurrency: "USD",
        url: URL,
        description: "Two weeks, fixed fee, invoiced at signature. Credited in full toward The Marketing Engine if the build is signed within 30 days of the readout.",
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${URL}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is a marketing diagnostic?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A marketing diagnostic is a short, fixed-scope audit of a company's marketing stack, funnel data, processes, and team, ending in a written set of findings ranked by impact on pipeline and a scoped proposal for what to fix first. Mine takes two weeks, costs $7,500, and is credited in full toward the build that follows.",
          },
        },
        {
          "@type": "Question",
          name: "How much does a B2B marketing audit cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Diagnostic is $7,500, fixed, invoiced at signature and payable net 15. No expenses are anticipated. The fee is credited in full toward The Marketing Engine if that build is signed within 30 days of the readout.",
          },
        },
        {
          "@type": "Question",
          name: "What do we get at the end of the Diagnostic?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Three things: a findings document ranked by impact on pipeline with the evidence behind each finding, a one-page summary you can put in front of your board, and a scoped, priced proposal for the ninety-day build. Plus a sixty-minute readout to walk through all three.",
          },
        },
      ],
    },
  ],
};

const work = [
  {
    t: "Stack and process audit",
    b: "Your CRM, marketing automation, AI tools, web analytics, forms and lead capture, attribution if any, and the data flow between them. I document how a lead moves from first touch to sales-accepted today, and where it gets lost.",
  },
  {
    t: "Interviews",
    b: "Up to eight 45-minute interviews: you, the head of marketing, the marketing managers, the sales leader for each business unit, the owner of each business unit, and one subject matter expert of your choosing. Interviews are confidential and reported in aggregate.",
  },
  {
    t: "Funnel and unit economics, by business unit",
    b: "Lead sources and volumes, the current MQL definition and monthly counts, conversion by stage, average contract value, sales cycle length, LTV:CAC, and attrition. Where you don't have a number, I say so rather than estimate.",
  },
  {
    t: "ICP and segmentation read",
    b: "A map of who actually buys, how they're funded, and how that calendar should shape marketing timing. For companies with more than one motion, candidate subsegments sized against the pipeline data.",
  },
  {
    t: "Request intake analysis",
    b: "The last ninety days of inbound marketing requests, classified by source, type, and pipeline relevance. This answers, with data, whether the marketing team's request volume is the problem or a symptom.",
  },
  {
    t: "Channel and calendar review",
    b: "Conference load and cost per event, email and webinar performance, and a first read on which channels your buyer responds to that you're not using.",
  },
  {
    t: "AI stack usage review",
    b: "How the tools you've bought are being used today, by whom, with what review, and what a working process would need to include.",
  },
];

const deliverables = [
  {
    n: "01",
    t: "Findings document",
    b: "What I found, ranked by impact on pipeline, with the evidence behind each finding. Written for you and your leadership team, not a slide deck.",
  },
  {
    n: "02",
    t: "Board one-pager",
    b: "A single page you can put in front of your board: the state of the marketing function, the three highest-impact fixes, and what each one moves.",
  },
  {
    n: "03",
    t: "The Marketing Engine proposal",
    b: "A scoped, priced proposal for the ninety-day build: which systems, in what order, what each one requires from you, who the named operator is, and what is explicitly excluded. Fixed price, not day rates.",
  },
  {
    n: "04",
    t: "Readout",
    b: "A sixty-minute working session with you to walk through all three. An optional second readout with the marketing team, framed as what we're building and why, is included if you want it.",
  },
];

const days = [
  { d: "Days 1 to 2", w: "Kickoff (30 minutes). System access granted. Interviews scheduled. Data pull requested." },
  { d: "Days 3 to 7", w: "Interviews. Stack audit. Funnel and intake data analysis." },
  { d: "Day 8", w: "30-minute check-in with you: early findings, anything surprising, anything I need." },
  { d: "Days 9 to 10", w: "Synthesis. Deliverables finalized. Readout." },
];

const needs = [
  "You, as executive sponsor, with the kickoff, day-8 check-in, and readout on the calendar at signature.",
  "One point of contact who can schedule interviews and chase access.",
  "Read-only access to your CRM, marketing automation, AI tools, web analytics, and any marketing dashboards, within three business days of kickoff.",
  "A CRM export of leads, opportunities, and closed-won and closed-lost for the trailing twelve months; the marketing budget by line; the conference calendar with costs; and the last ninety days of marketing requests in whatever form they exist.",
  "Interviewees available for 45 minutes each during days 3 through 7.",
];

const terms = [
  { k: "Fee", v: "$7,500, fixed. Invoiced at signature, payable net 15. No expenses anticipated." },
  { k: "Credit", v: "The full fee is credited toward The Marketing Engine if that build is signed within 30 days of the readout." },
  { k: "Timeline", v: "Ten business days from kickoff. If access or interviews slip past day 3, the timeline moves with them and the fee does not change." },
  { k: "Data", v: "Your customer data stays in your systems. Nothing goes into a third-party AI tool without your written approval of the tool and its data terms." },
  { k: "Ownership", v: "The findings, one-pager, and proposal are yours on payment. My frameworks and templates stay mine, with a perpetual license for your internal use." },
  { k: "Ending it", v: "Either of us can end it with five business days' notice. The fee is earned at signature. If you end it early, you get everything completed to date." },
];

const excluded = [
  "Producing marketing assets of any kind",
  "Running or optimizing campaigns, paid media, or ad accounts",
  "Configuring or implementing tools (that is the build)",
  "Managing your staff, agencies, or vendors",
  "Personnel decisions. I may recommend changes to roles; the decisions are yours.",
];

export default function Diagnostic() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">The Diagnostic · Two weeks · $7,500</p>
            <h1 className="display mb-8 max-w-[16ch] text-[clamp(2.2rem,4.8vw,3.8rem)]">
              Two weeks, and you&apos;ll know what&apos;s broken.
            </h1>
            <p className="measure text-[17px] leading-[1.62] text-muted">
              A marketing diagnostic is a short, fixed-scope audit of your
              marketing stack, funnel data, processes, and team. It ends in a
              written set of findings ranked by impact on pipeline, a one-pager
              for your board, and a scoped, priced proposal for what to build
              first. Mine takes ten business days, costs $7,500, and is credited
              in full toward the build that follows.
            </p>
            <p className="measure mt-4 text-[17px] leading-[1.62] text-muted">
              It exists because nobody should quote a ninety-day build before
              looking under the hood. It is designed so you can stop at the end
              of it and keep the plan.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <a href="/#start" className="rounded-sm bg-ink px-[22px] py-[13px] text-sm font-medium text-bg transition-colors hover:bg-accent">
                Start a Diagnostic &nbsp;&rarr;
              </a>
              <a href="#what-happens" className="border-b border-accent pb-0.5 text-sm font-medium text-ink transition-colors hover:text-accent">
                What happens in the two weeks
              </a>
            </div>
          </div>
        </section>

        <section id="what-happens" className="scroll-mt-20 border-t border-rule px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">What I do</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              Seven things, in ten business days.
            </h2>
            <div className="mt-11">
              {work.map((w, i) => (
                <div key={w.t} className={`grid gap-4 py-7 md:grid-cols-[220px_1fr] md:gap-10 ${i === 0 ? "" : "border-t border-rule"}`}>
                  <p className="text-[12.5px] font-medium">{w.t}</p>
                  <p className="max-w-[62ch] text-[15px] leading-[1.7] text-muted">{w.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-rule bg-band px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">What you receive</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              Three documents and a conversation.
            </h2>
            <div className="mt-11 grid gap-x-12 gap-y-9 sm:grid-cols-2">
              {deliverables.map((d) => (
                <div key={d.t} className="border-t border-rule pt-5">
                  <p className="label mb-3">{d.n}</p>
                  <h3 className="display-xs mb-2.5 text-[19px]">{d.t}</h3>
                  <p className="text-[13.5px] leading-[1.65] text-muted">{d.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-rule px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">The ten days</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              Kickoff on a Monday. Readout two Fridays later.
            </h2>
            <div className="mt-9">
              {days.map((d, i) => (
                <div key={d.d} className={`grid gap-3 py-6 md:grid-cols-[170px_1fr] md:gap-10 ${i === 0 ? "" : "border-t border-rule"}`}>
                  <p className="label pt-1">{d.d}</p>
                  <p className="max-w-[62ch] text-[15px] leading-[1.7] text-muted">{d.w}</p>
                </div>
              ))}
            </div>

            <div className="mt-14 border-t border-rule pt-8">
              <p className="label mb-6">What I need from you</p>
              <ul className="max-w-[70ch]">
                {needs.map((n) => (
                  <li key={n} className="relative border-t border-rule py-3 pl-4 text-[14.5px] leading-[1.6] text-muted first:border-t-0">
                    <span aria-hidden="true" className="absolute left-0.5 text-accent">&middot;</span>
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-ink px-6 pt-24 pb-20 text-band sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8 text-white/55">Terms</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)] text-white">
              The whole agreement fits on this screen.
            </h2>
            <div className="mt-11 grid gap-x-12 gap-y-8 sm:grid-cols-2">
              {terms.map((t) => (
                <div key={t.k}>
                  <h3 className="display-xs mb-2 border-t border-white/20 pt-4 text-[18px] text-white">{t.k}</h3>
                  <p className="text-[13.5px] leading-[1.6] text-white/60">{t.v}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 border-t border-white/20 pt-7">
              <p className="label mb-4 text-white/55">Not included</p>
              <ul className="max-w-[70ch] sm:columns-2 sm:gap-x-11">
                {excluded.map((x) => (
                  <li key={x} className="relative break-inside-avoid py-1.5 pl-4 text-[13.5px] leading-[1.5] text-white/60">
                    <span aria-hidden="true" className="absolute left-0.5 text-accent">&middot;</span>
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="border-t border-rule px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">After the readout</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              Build it with me, or take the plan and run.
            </h2>
            <p className="measure text-base leading-[1.68] text-muted">
              If we go on to{" "}
              <a href="/#packages" className="border-b border-accent pb-px text-ink transition-colors hover:text-accent">
                The Marketing Engine
              </a>
              , the $7,500 comes off the price and the build starts the week
              after. If we don&apos;t, the findings, the one-pager, and the
              proposal are yours, and you&apos;re free to hand them to anyone
              you like. Some people do exactly that.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <a href="/#start" className="rounded-sm bg-ink px-[22px] py-[13px] text-sm font-medium text-bg transition-colors hover:bg-accent">
                Start a Diagnostic &nbsp;&rarr;
              </a>
              <a href="/faq" className="border-b border-accent pb-0.5 text-sm font-medium text-ink transition-colors hover:text-accent">
                Questions people ask first
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
