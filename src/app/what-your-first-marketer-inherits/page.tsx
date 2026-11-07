import type { Metadata } from "next";
import StartCta from "@/components/StartCta";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import Byline from "@/components/Byline";
import Figures, { type Figure } from "@/components/Figures";
import PageFaq from "@/components/PageFaq";

const TITLE = "What Your First Marketer Should Inherit on Day One: A Checklist";
const DESCRIPTION =
  "The six things a startup's first marketing hire should inherit on day one, what each one is, what the first ninety days look like without it, and how to put each in place before the hire starts.";
const URL = "https://neelythomson.com/what-your-first-marketer-inherits";
const PUBLISHED = "2026-11-07";

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

const figures: Figure[] = [
  {
    n: "39 days",
    t: "is the median time to fill a non-executive role. Six items, six weeks: the checklist can be finished inside the search, before the hire's first day",
    s: "SHRM Recruiting Benchmarking 2026",
    href: "https://www.shrm.org/mena/topics-tools/research/recruiting-benchmarking/full-data-brief",
  },
  {
    n: "49 days",
    t: "is roughly how long a marketing role takes to fill in the United States, measured across about 178,000 confirmed hires. Add a notice period and the window is close to a quarter",
    s: "LinkedIn hiring analysis, reported by CNBC",
    href: "https://www.cnbc.com/2023/08/16/landing-a-job-right-now-could-take-you-nearly-2-months-says-linkedin.html",
    note: "April to June 2023",
  },
  {
    n: "$166,790",
    t: "is the median annual wage for a marketing manager in the United States. A quarter of it spent on finding out what the company already knew is the cost of an empty inheritance",
    s: "U.S. Bureau of Labor Statistics, Occupational Outlook Handbook",
    href: "https://www.bls.gov/ooh/management/advertising-promotions-and-marketing-managers.htm",
    note: "May 2025",
  },
  {
    n: "8%",
    t: "of ARR is the median marketing budget at private B2B SaaS companies, with selling counted separately. Item three on the list is deciding your company's number before the hire has to ask for it",
    s: "SaaS Capital, Spending Benchmarks for Private B2B SaaS Companies 2026",
    href: "https://www.saas-capital.com/wp-content/uploads/2026/06/Spending-Benchmarks-for-Private-B2B-SaaS-Companies-2026-W1.pdf",
  },
  {
    n: "2.6 years",
    t: "is the average marketing leader's tenure at VC-backed companies. A first quarter spent on infrastructure is a large share of a short runway",
    s: "CMO Huddles and Findem CMO tenure study, reported by MediaPost",
    href: "https://www.mediapost.com/publications/article/418386/cmo-tenure-inches-up-to-26-years.html",
    note: "2026",
  },
];

const faq = [
  {
    q: "What does a new marketing hire need on day one?",
    a: "Six things: a written role with a level and a scope, a twelve-month plan with the lead segment and channel bets, a budget by quarter, the stack with tiers and owners, one lead definition the sales lead has signed, and a scoreboard with baselines pulled from the CRM. Plus the ordinary things: access to the tools, a calendar with the first three weeks of conversations booked, and a founder who has blocked time for them.",
  },
  {
    q: "What should the first ninety days of a new marketing hire look like?",
    a: "With the six items in place: month one runs the first campaigns against the inherited plan and reports on the inherited scoreboard; month two adjusts the channel bets with real data; month three forecasts the next quarter. Without them: month one is discovery, month two is negotiating a lead definition with sales, month three is presenting a plan, and pipeline from the quarter is whatever was already in motion.",
  },
  {
    q: "Who should build the marketing function before the first hire starts?",
    a: "The founder can, with a few weeks and a sales lead who will sign a paragraph; this page is the checklist. If the founder would rather it were done with someone who has built the function before, that is what The First Hire Plan is for: all six items designed in six weeks, before the posting goes up, with the founder running the search.",
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
      about: ["First marketing hire", "Marketing onboarding", "Startup marketing", "Marketing operations"],
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

const items = [
  {
    n: "01",
    t: "A role with a level and a written scope",
    what: "One page. The title, the level (head or manager), who the hire reports to, who decides strategy for the next twelve months, the number the role owns, and what it does not do. Written before the search, shown to every finalist.",
    without: "The hire and the founder discover in month two that they expected different jobs. The head of marketing is not allowed to lead; the manager is asked to invent a strategy. Either way, the conversation about what the job actually is happens after the offer, when it is hardest to have.",
    how: "Answer one question in writing: who sets segment, message and channel bets for the next year, the founder or the hire? Everything else on the page follows from that answer.",
  },
  {
    n: "02",
    t: "A twelve-month plan with the lead segment",
    what: "Which segment marketing leads with, which channel bets it runs, what each bet is expected to produce by quarter, and the rule for killing or scaling each one. Short. A plan the hire can execute in month one, not a strategy deck.",
    without: "The first quarter is spent writing a plan the founder could have dictated in a week, because the founder already knows which segment closes fastest and which channel produced the last ten deals. The hire learns it from the CRM, slowly, and presents it back in month three.",
    how: "List the last twenty closed deals. Where did they come from, what did they have in common, how long did they take? The segment and the first channel bets are in that list.",
  },
  {
    n: "03",
    t: "A budget by quarter",
    what: "People, programs and tools, quarter by quarter, sized to the pipeline the company needs rather than to a benchmark percentage. The benchmark is a check on the answer, not the answer.",
    without: "Every tool and every program becomes a negotiation. The hire learns within a month that asking costs more than it gets, and stops asking. The function runs on whatever was already paid for, and the founder wonders why nothing new is being tried.",
    how: "Take next year's pipeline target, divide by today's conversion rates, and you have what marketing must produce. Cost that. Then compare with the benchmark and decide.",
  },
  {
    n: "04",
    t: "The stack, with tiers and owners",
    what: "Which tools, at which tier, who owns each, and what is configured. Bought when the hire starts, not before, except the CRM, which already exists and is the one thing that must be clean on day one.",
    without: "A month of tool evaluation. The hire inherits six half-configured tools somebody bought last spring, with no owner and no process, and spends the first weeks deciding which to keep. Nothing ships until that is settled.",
    how: "Inventory what exists. For each tool: who logs in, what it does, what it costs, whether anyone would notice if it were cancelled. Cancel what nobody would notice. Leave the rest for the hire to choose.",
  },
  {
    n: "05",
    t: "One lead definition, signed by sales",
    what: "A paragraph that says what a qualified lead is: the firmographics, the signal, the deal-value threshold, and what sales will do with one inside how many days. Signed by whoever runs sales, before the hire's first day.",
    without: "Two teams report different pipeline numbers to the same board, and the board believes sales. The hire spends the second quarter negotiating a definition with no authority to make sales agree, and every marketing number is arguable until it is done.",
    how: "Write the paragraph yourself. Hand it to the sales lead and ask for one signature. If that takes longer than a week, you have found the first thing the hire would have spent a quarter on, and you have found it while you still have the standing to settle it.",
  },
  {
    n: "06",
    t: "A scoreboard with baselines",
    what: "Five numbers, with definitions, owners and the value each one has today, pulled from the CRM. Opportunities created, pipeline value, win rate, average deal, sales cycle is a reasonable first five. The board reads this page; so does the hire.",
    without: "The first board meeting is a plan to produce a read, not a read. The hire's first year is judged on activity, and activity is always arguable. Nobody can say in month six whether marketing is working, which is the question everybody is asking.",
    how: "The five numbers exist in the CRM today. Pull them for the trailing twelve months. That is the baseline, and it took an afternoon.",
  },
];

export default function WhatTheyInherit() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <Breadcrumbs items={[{ name: "Your first marketing hire", url: "https://neelythomson.com/first-marketing-hire" }, { name: "What your first marketer inherits", url: URL }]} />
      <main id="main">
        <section className="px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">A guide for founders · Day one</p>
            <h1 className="display mb-8 max-w-[16ch] text-[clamp(2.2rem,4.8vw,3.8rem)]">
              What your first marketer inherits.
            </h1>
            <p className="measure text-[17px] leading-[1.62] text-muted">
              A first marketing hire should inherit six things on day one: a
              written role, a twelve-month plan, a budget by quarter, the
              stack, one lead definition signed by sales, and a scoreboard
              with baselines. With those in place, the first quarter produces
              pipeline. Without them, the first quarter produces the six
              things, at a new hire&apos;s salary and with less authority
              than the founder had.
            </p>
            <p className="measure mt-4 text-[17px] leading-[1.62] text-muted">
              This is the checklist. For each item: what it is, what the
              first ninety days look like without it, and how to put it in
              place before the hire starts. Most of it is an afternoon&apos;s
              work with the CRM open. The hardest item is a paragraph and a
              signature.
            </p>
            <Byline date={PUBLISHED} label="Published" className="mt-6" />
          </div>
        </section>

        {items.map((it, idx) => (
          <section key={it.n} className={`border-t border-rule px-6 pt-20 pb-16 sm:px-10 sm:pt-24 sm:pb-20 ${idx % 2 === 1 ? "bg-band" : ""}`}>
            <div className="mx-auto max-w-[960px]">
              <p className="label mb-6">{it.n}</p>
              <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.7rem,3vw,2.5rem)]">
                {it.t}
              </h2>
              <div className="grid gap-x-12 gap-y-8 md:grid-cols-3">
                <div>
                  <p className="label mb-3">What it is</p>
                  <p className="text-[14px] leading-[1.7] text-muted">{it.what}</p>
                </div>
                <div>
                  <p className="label mb-3">The first ninety days without it</p>
                  <p className="text-[14px] leading-[1.7] text-muted">{it.without}</p>
                </div>
                <div>
                  <p className="label mb-3">How to put it in place</p>
                  <p className="text-[14px] leading-[1.7] text-muted">{it.how}</p>
                </div>
              </div>
            </div>
          </section>
        ))}

        <section className="border-t border-rule px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">The window</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              When does this get done?
            </h2>
            <p className="measure text-base leading-[1.68] text-muted">
              During the search. A marketing role takes six to eight weeks to
              fill, a leadership role longer, and a notice period sits on top.
              That is the window, and it is usually spent interviewing. The
              six items take about six weeks to do properly and an afternoon
              to do roughly, and the hire cannot start on any of them before
              arriving. The best time to build what the hire inherits is the
              day the search opens.
            </p>
            <Figures className="mt-12 border-t border-rule pt-8" label="The numbers behind this page" items={figures} />
          </div>
        </section>

        <section className="bg-ink px-6 pt-24 pb-20 text-band sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8 text-white/70">Day one, the ordinary part</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)] text-white">
              Four small things that are usually missing too.
            </h2>
            <div className="mt-11 grid gap-x-12 gap-y-8 sm:grid-cols-2">
              {[
                { k: "Access, on the first morning", v: "CRM, automation platform, analytics, the website, the ad accounts, the shared drive. Admin where they will own the tool. Nothing waiting on a ticket." },
                { k: "Three weeks of conversations, booked", v: "The sales lead, every salesperson, the product lead, the two or three customers who will talk, and the founder, weekly. Put them on the calendar before day one." },
                { k: "The last twelve months, in one folder", v: "Every campaign that ran, what it cost, what it produced. The board decks. The one-pager somebody wrote about positioning two years ago. The hire will ask; have it ready." },
                { k: "The founder's time, blocked", v: "An hour a week for the first quarter, on the calendar, not to be moved. The most common thing a first marketer says they lacked is the founder's attention after week two." },
              ].map((t) => (
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
            <p className="label mb-8">If you want it built with you</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              The six items, designed in six weeks.
            </h2>
            <p className="measure text-base leading-[1.68] text-muted">
              The six things on this page are the deliverables of{" "}
              <a href="/first-hire-plan" className="border-b border-accent pb-px text-ink transition-colors hover:text-accent">
                The First Hire Plan
              </a>
              , plus the hire&apos;s first ninety days written before the
              first interview: six weeks, fixed fee, finished before the
              posting goes up. You run the search. The full guide to the
              first hire, including when to make it and which level to hire,
              is{" "}
              <a href="/first-marketing-hire" className="border-b border-accent pb-px text-ink transition-colors hover:text-accent">
                here
              </a>
              ; the level decision on its own is{" "}
              <a href="/head-of-marketing-vs-marketing-manager" className="border-b border-accent pb-px text-ink transition-colors hover:text-accent">
                here
              </a>
              .
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <StartCta place="what-they-inherit" />
            </div>
          </div>
        </section>
        <PageFaq items={faq} />
      </main>
      <Footer />
    </>
  );
}
