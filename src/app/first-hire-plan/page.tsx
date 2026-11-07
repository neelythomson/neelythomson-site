import type { Metadata } from "next";
import StartCta from "@/components/StartCta";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import Byline from "@/components/Byline";
import PageFaq from "@/components/PageFaq";

const TITLE = "The First Hire Plan: Design the Marketing Function Before You Hire";
const DESCRIPTION =
  "Six weeks, before your first marketing hire: the role and its level, the twelve-month plan, the budget, the stack, the sales-marketing SLA and the scoreboard.";
const URL = "https://neelythomson.com/first-hire-plan";

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

const faq = [
  { q: "What is the First Hire Plan?", a: "A six-week engagement for founders who are about to make their first marketing hire. Before the posting goes up, the marketing function is designed: which role and what level, the twelve-month plan, the budget by quarter, the stack, one lead definition with a sales-marketing SLA, the five-metric scoreboard, and the hire's first ninety days. The hire walks into a function instead of building one." },
  { q: "Do you run the hiring search?", a: "No. I decide the role with you: the kind of marketer, the level, what to look for, and what the role runs in year one. You run the search. Once the person starts, they inherit the plan, the budget, the stack and the scoreboard on day one." },
  { q: "What does the First Hire Plan cost?", a: "A fixed fee, quoted on the first call and written into the agreement before anything starts. No prices are published. The quote is anchored to what the first hire costs if it lands wrong: a year of salary and a year of lost pipeline." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://neelythomson.com/first-hire-plan#webpage",
      url: "https://neelythomson.com/first-hire-plan",
      isPartOf: { "@id": "https://neelythomson.com/#website" },
      dateModified: "2026-11-07",
    },
    {
      "@type": "Service",
      "@id": `${URL}#service`,
      name: "The First Hire Plan",
      serviceType: "Marketing function design for startups",
      provider: { "@id": "https://neelythomson.com/#person" },
      areaServed: "US",
      url: URL,
      description: DESCRIPTION,
      offers: {
        "@type": "Offer",
        url: URL,
        description: "Six weeks, fixed fee, quoted on the first call and written into the agreement before anything starts.",
      },
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

const deliverables = [
  {
    n: "01",
    t: "The role to hire",
    b: "Which kind of marketer, at what level, and what to look for. A head of marketing and a marketing manager run different functions; the plan says which one you need first and why.",
  },
  {
    n: "02",
    t: "The twelve-month plan",
    b: "The segment to lead with, the channel bets, and what marketing is expected to produce by quarter. Written so the hire can execute it in their first month instead of writing it.",
  },
  {
    n: "03",
    t: "The budget by quarter",
    b: "People, programs, and tools, quarter by quarter, sized to the pipeline you need rather than to a benchmark percentage.",
  },
  {
    n: "04",
    t: "The stack",
    b: "Which tools, at which tier, bought when the hire starts and not before. Configuration notes for each, so the first week is setup and not research.",
  },
  {
    n: "05",
    t: "One lead definition and the sales-marketing SLA",
    b: "What a qualified lead is, in writing, signed by whoever runs sales before the hire's first day. The single most common thing a new marketing leader spends their first quarter fighting about.",
  },
  {
    n: "06",
    t: "The five-metric scoreboard",
    b: "Five numbers, with definitions, owners, and baselines from your CRM today. The board reads the same page the hire reports on.",
  },
  {
    n: "07",
    t: "The hire's first ninety days",
    b: "Written before the first interview: what they ship in month one, two, and three, and what good looks like at each check-in.",
  },
];

const weeks = [
  { d: "Weeks 1 to 2", w: "Discovery. Interviews with you, whoever runs sales, and whoever is doing marketing today. Pipeline and CRM data pulled. What marketing produces now, and what it costs, on one page." },
  { d: "Weeks 3 to 4", w: "The plan and the budget. The segment to lead with, the channel bets, and the quarter-by-quarter budget, reviewed with you and revised once." },
  { d: "Weeks 5 to 6", w: "The function. The role and its level, the stack, the lead definition and SLA signed by sales, the scoreboard with baselines, and the ninety-day plan. Readout with you, then the plan is yours." },
];

const needs = [
  "You, with the kickoff, the week-four review, and the readout on the calendar at signature.",
  "Whoever runs sales, for two interviews and one signature on the lead definition.",
  "Read-only access to your CRM and whatever marketing tools exist, within three business days of kickoff.",
  "A CRM export of opportunities and closed-won and closed-lost for the trailing twelve months, and whatever marketing spend exists, in whatever form it exists.",
];

const terms = [
  { k: "Fee", v: "Fixed, quoted on the first call, written into the agreement before anything starts. Invoiced in two parts: signature and readout." },
  { k: "Timeline", v: "Six weeks from kickoff. If access or interviews slip, the timeline moves with them and the fee does not change." },
  { k: "Ownership", v: "The plan, the budget, the scoreboard and the ninety-day document are yours on payment, in your own tools. Hand them to whoever you hire." },
  { k: "The search", v: "Yours. I decide the role with you and tell you what to look for. I do not write the posting, screen candidates, or sit in interviews." },
  { k: "Marketing meanwhile", v: "Whoever is doing it now keeps doing it. The plan is built around what exists so nothing stops while you hire." },
  { k: "Ending it", v: "Either of us can end it with five business days' notice. You keep everything completed to date." },
];

export default function FirstHirePlan() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <Breadcrumbs items={[{ name: "The First Hire Plan", url: URL }]} />
      <main id="main">
        <section className="px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">
              The First Hire Plan · Six weeks
            </p>
            <h1 className="display mb-8 max-w-[16ch] text-[clamp(2.2rem,4.8vw,3.8rem)]">
              Before your first marketing hire.
            </h1>
            <p className="measure text-[17px] leading-[1.62] text-muted">
              The First Hire Plan is a six-week, fixed-fee engagement that designs
              a software startup&apos;s marketing function before its first
              marketing hire, so the person you hire inherits a role, a plan, a
              budget, a stack, and a scoreboard on day one.
            </p>
            <p className="measure mt-4 text-[17px] leading-[1.62] text-muted">
              You are a founder, marketing is still run by you, and the next
              hire is a marketer. Before you write the posting, I design the
              function they walk into: which role and what level, the
              twelve-month plan, the budget by quarter, the stack, a lead
              definition your sales lead signs, and the scoreboard the board
              will read.
            </p>
            <p className="measure mt-4 text-[17px] leading-[1.62] text-muted">
              The hire starts with a plan on day one instead of spending their
              first quarter writing one. Fixed fee, quoted on the first call.
            </p>
            <Byline date="2026-11-07" label="Published" className="mt-6" />
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <StartCta place="first-hire-plan" />
              <a href="#what-you-get" className="border-b border-accent pb-0.5 text-sm font-medium text-ink transition-colors hover:text-accent">
                What the six weeks produce
              </a>
            </div>
          </div>
        </section>

        <section className="border-t border-rule px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">Why before</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              The first marketing hire usually lands in an empty room.
            </h2>
            <p className="measure text-base leading-[1.68] text-muted">
              No plan, no budget, no agreed definition of a lead, a CRM nobody
              trusts, and a founder who has been doing marketing between
              everything else. The new hire spends their first quarter finding
              all of that out, and their second quarter arguing with sales about
              it. By the time anything ships, half a year is gone.
            </p>
            <p className="measure mt-4 text-base leading-[1.68] text-muted">
              I have been the person walking into that room, and the person
              hiring into it. The fix is cheap next to a mis-hire: decide the
              function first, then hire the person who runs it.
            </p>
            <p className="mt-5 text-[13.5px] leading-[1.6] text-faint">
              <span className="label mr-3">Related</span>
              <a href="/before-you-hire" className="border-b border-accent pb-px text-ink transition-colors hover:text-accent">
                Hiring a Head of Marketing? Build the function first
              </a>
            </p>
          </div>
        </section>

        <section id="what-you-get" className="scroll-mt-20 border-t border-rule bg-band px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">What you receive</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              Seven documents, in your own tools, before the posting goes up.
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
            <p className="label mb-8">The six weeks</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              Kickoff on a Monday. Readout six Fridays later.
            </h2>
            <div className="mt-9">
              {weeks.map((d, i) => (
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
            <p className="label mb-8 text-white/70">Terms</p>
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
          </div>
        </section>

        <section className="border-t border-rule px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">After the readout</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              Hire the person. They inherit the function.
            </h2>
            <p className="measure text-base leading-[1.68] text-muted">
              The plan, the budget, the stack and the scoreboard are waiting
              when your hire starts. If you want me close by while their first
              quarter runs, that is{" "}
              <a href="/#packages" className="border-b border-accent pb-px text-ink transition-colors hover:text-accent">
                The Advisory Seat
              </a>
              : weekly with your new hire for the first quarter, then monthly.
              Your call, made on the call, never a condition of the plan.
            </p>
            <p className="measure mt-4 text-base leading-[1.68] text-muted">
              Already have a marketer? The other door is{" "}
              <a href="/diagnostic" className="border-b border-accent pb-px text-ink transition-colors hover:text-accent">
                The Diagnostic
              </a>
              , two weeks, then The Marketing Engine.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <StartCta place="first-hire-plan" />
              <a href="/faq" className="border-b border-accent pb-0.5 text-sm font-medium text-ink transition-colors hover:text-accent">
                Questions people ask first
              </a>
            </div>
          </div>
        </section>
        <PageFaq items={faq} />
      </main>
      <Footer />
    </>
  );
}
