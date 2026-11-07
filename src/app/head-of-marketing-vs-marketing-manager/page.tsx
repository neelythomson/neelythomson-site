import type { Metadata } from "next";
import StartCta from "@/components/StartCta";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import Byline from "@/components/Byline";
import Figures, { type Figure } from "@/components/Figures";
import PageFaq from "@/components/PageFaq";

const TITLE = "Head of Marketing vs Marketing Manager: Which First Hire a Startup Needs";
const DESCRIPTION =
  "The difference between a head of marketing and a marketing manager at a software startup: scope, level, what each runs in year one, and a decision rule for which to hire first.";
const URL = "https://neelythomson.com/head-of-marketing-vs-marketing-manager";
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
    n: "$166,790",
    t: "is the median annual wage for marketing managers in the United States. A head of marketing at a funded startup sits above it, and the gap between the two levels is the price of judgment",
    s: "U.S. Bureau of Labor Statistics, Occupational Outlook Handbook",
    href: "https://www.bls.gov/ooh/management/advertising-promotions-and-marketing-managers.htm",
    note: "May 2025",
  },
  {
    n: "$35,879",
    t: "is the average cost of an executive hire before salary, against $5,475 for a non-executive role. Hiring a head when a manager was needed, or the reverse, pays one of those twice",
    s: "SHRM 2025 recruiting benchmarks",
    href: "https://www.shrm.org/mena/topics-tools/research/recruiting-benchmarking/full-data-brief",
  },
  {
    n: "4.1 years",
    t: "is the average CMO tenure at S&P 500 companies, against 5.0 years for all C-suite roles. A head of marketing hired to execute someone else's plan rarely gets close to that",
    s: "Spencer Stuart CMO Tenure Study 2026",
    href: "https://www.aaaa.org/research-report/cmo-tenure-study/",
    note: "summary at the 4A's",
  },
  {
    n: "2.6 years",
    t: "is the average marketing leader's tenure at VC-backed companies, the shortest of any ownership type. The level mismatch is one of the common reasons",
    s: "CMO Huddles and Findem CMO tenure study, reported by MediaPost",
    href: "https://www.mediapost.com/publications/article/418386/cmo-tenure-inches-up-to-26-years.html",
    note: "2026",
  },
  {
    n: "8%",
    t: "of ARR is the median marketing spend at private B2B SaaS companies, with selling counted separately. The level you hire decides who owns that number and who merely spends it",
    s: "SaaS Capital, Spending Benchmarks for Private B2B SaaS Companies 2026",
    href: "https://www.saas-capital.com/wp-content/uploads/2026/06/Spending-Benchmarks-for-Private-B2B-SaaS-Companies-2026-W1.pdf",
  },
];

const faq = [
  {
    q: "What is the difference between a head of marketing and a marketing manager?",
    a: "A head of marketing owns the strategy: which segment, which message, which channel bets, the budget, the hiring plan and the board read. A marketing manager owns the execution of a strategy someone else set: the channels, the stack, the calendar and the weekly numbers. The title matters less than the question underneath it: who decides, and who runs.",
  },
  {
    q: "Should a startup's first marketing hire be a head of marketing or a marketing manager?",
    a: "Hire a manager if the founder will keep setting strategy for the next twelve months, which is true at most seed and early Series A companies. Hire a head if the founder is handing strategy off now and will let the hire make the calls. The mis-hire in both directions is common: a head who is not allowed to lead, or a manager who is expected to invent a strategy at a manager's authority.",
  },
  {
    q: "What does a marketing lead do, compared with a head of marketing?",
    a: "Marketing lead is usually a manager-level role with a senior title: the first marketer, running execution with the founder still deciding strategy. Some companies use it as a head-of role in waiting, with the understanding that the person grows into strategy as the company grows. Write down which one you mean before the posting goes up, because the candidate will assume the bigger one.",
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
      about: ["Head of Marketing", "Marketing Manager", "First marketing hire", "Startup marketing"],
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

const rows = [
  { k: "Who sets strategy", head: "The hire. Segment, message, channel bets, budget, hiring plan.", mgr: "The founder, or a head above the role. The manager executes it." },
  { k: "Reports to", head: "The CEO. Sits in the leadership meeting.", mgr: "The CEO at a small company, otherwise a head of marketing or a COO." },
  { k: "What they produce directly", head: "Little. Decisions, the plan, the board read, the team.", mgr: "Most of it. Campaigns, the calendar, the stack, the weekly numbers." },
  { k: "The number they own", head: "Pipeline, and the budget that produced it.", mgr: "The leading indicators under pipeline: leads, conversion, cost per opportunity." },
  { k: "Who they manage", head: "A team, or the plan to build one. Agencies and contractors.", mgr: "Usually nobody at first. Contractors and tools." },
  { k: "The sales relationship", head: "A peer to whoever runs sales. Signs the SLA.", mgr: "Works inside an SLA someone above them signed." },
  { k: "Typical stage", head: "Series A or later, with a sales team in place and revenue the founder cannot steer alone.", mgr: "Seed to early Series A. A plan exists, or will, and needs an owner." },
  { k: "What goes wrong", head: "Hired, then not allowed to lead. Leaves inside a year.", mgr: "Asked to invent a strategy with a manager's authority. Judged on it. Leaves inside a year." },
];

const yearOne = [
  {
    r: "A head of marketing's first year",
    items: [
      "Quarter one: reads the pipeline, settles the lead definition with sales, sets the segment and the message, presents a plan to the board.",
      "Quarter two: places the first channel bets, hires or contracts the execution, builds the scoreboard the board will read for the next two years.",
      "Quarters three and four: kills what did not work, scales what did, forecasts next year's pipeline and asks for the budget to produce it.",
    ],
  },
  {
    r: "A marketing manager's first year",
    items: [
      "Quarter one: inherits the plan, the stack and the lead definition, and runs the first campaigns against them. If none of those exist, writes them, slowly, with no authority to make sales agree.",
      "Quarter two: owns the channels end to end, reports weekly, flags what is not working to whoever set the plan.",
      "Quarters three and four: the plan either produced pipeline or it did not, and the manager is judged on a strategy they did not set.",
    ],
  },
];

export default function HeadVsManager() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <Breadcrumbs items={[{ name: "Your first marketing hire", url: "https://neelythomson.com/first-marketing-hire" }, { name: "Head of marketing vs marketing manager", url: URL }]} />
      <main id="main">
        <section className="px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">A guide for founders · Choosing the level</p>
            <h1 className="display mb-8 max-w-[16ch] text-[clamp(2.2rem,4.8vw,3.8rem)]">
              Head of marketing, or marketing manager?
            </h1>
            <p className="measure text-[17px] leading-[1.62] text-muted">
              A head of marketing decides what marketing does: the segment,
              the message, the channel bets, the budget and the team. A
              marketing manager runs what someone else decided: the channels,
              the stack, the calendar and the weekly numbers. The right first
              hire is whichever of those two jobs is actually open, and the
              most common mis-hire is filling one while expecting the other.
            </p>
            <p className="measure mt-4 text-[17px] leading-[1.62] text-muted">
              This page is for the founder choosing the level before writing
              the posting. It sets the two roles side by side, walks through
              what each one does in year one, and ends with the one question
              that decides it.
            </p>
            <Byline date={PUBLISHED} label="Published" className="mt-6" />
          </div>
        </section>

        <section className="border-t border-rule px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">The decision</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              Who sets strategy for the next twelve months?
            </h2>
            <p className="measure text-base leading-[1.68] text-muted">
              That is the whole decision. If the answer is the founder, hire a
              manager, pay a manager, and give them a plan to run. If the
              answer is the hire, hire a head, pay a head, and then let them
              make the calls, including the ones you would have made
              differently. Founders tend to answer &ldquo;the hire&rdquo; and
              behave as &ldquo;the founder,&rdquo; which produces a head of
              marketing who is a highly paid manager and knows it.
            </p>
            <p className="measure mt-4 text-base leading-[1.68] text-muted">
              A useful test: write down the three biggest marketing decisions
              of the last six months. Who made them? If it was you, and you
              would make the next three too, the role that is open is a
              manager. If you want never to make them again, it is a head.
            </p>
          </div>
        </section>

        <section className="border-t border-rule bg-band px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">Side by side</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              What each role runs.
            </h2>
            <div className="mt-9 overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-rule">
                    <th scope="col" className="label pb-4 pr-6 font-medium">&nbsp;</th>
                    <th scope="col" className="label pb-4 pr-6 font-medium">Head of marketing</th>
                    <th scope="col" className="label pb-4 font-medium">Marketing manager</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.k} className="border-b border-rule align-top">
                      <th scope="row" className="w-[22%] py-5 pr-6 text-[14px] font-medium leading-[1.5] text-ink">{r.k}</th>
                      <td className="w-[39%] py-5 pr-6 text-[14px] leading-[1.65] text-muted">{r.head}</td>
                      <td className="w-[39%] py-5 text-[14px] leading-[1.65] text-muted">{r.mgr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="border-t border-rule px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">Year one</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              What does each role do in the first year?
            </h2>
            <p className="measure text-base leading-[1.68] text-muted">
              The two years look nothing alike, and the difference is where
              the strategy comes from. A head spends the first quarter making
              decisions. A manager spends it running them, if they exist, or
              writing them without the standing to make them stick.
            </p>
            <div className="mt-11 grid gap-x-12 gap-y-10 md:grid-cols-2">
              {yearOne.map((y) => (
                <div key={y.r} className="border-t border-rule pt-5">
                  <h3 className="display-xs mb-4 text-[19px]">{y.r}</h3>
                  <ul>
                    {y.items.map((it) => (
                      <li key={it} className="relative border-t border-rule py-3 pl-4 text-[14px] leading-[1.65] text-muted first:border-t-0">
                        <span aria-hidden="true" className="absolute left-0.5 text-accent">&middot;</span>
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-rule bg-band px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">By stage</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              Which level fits which stage?
            </h2>
            <p className="measure text-base leading-[1.68] text-muted">
              Stage is a proxy for the real variable, which is how much
              strategy the founder can still hold. At seed, the founder is the
              strategy and a manager runs it. Around Series A, with a sales
              team and a board asking for a forecast, the founder&apos;s
              marketing hours run out and a head becomes the job. Between the
              two sits the most common first hire of all: a senior manager
              with a head-of title, expected to grow into the strategy as the
              company grows. That works when it is said out loud at the offer
              stage and fails when the candidate assumed the bigger job.
            </p>
            <p className="measure mt-4 text-base leading-[1.68] text-muted">
              Revenue is a weaker guide than it looks. A company at a few
              million in ARR with a founder who loves marketing needs a
              manager. The same company with a founder who is done with it
              needs a head. The posting should say which.
            </p>
            <Figures className="mt-12 border-t border-rule pt-8" label="The numbers behind this page" items={figures} />
          </div>
        </section>

        <section className="border-t border-rule px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">The mis-hire</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              What happens when the level is wrong?
            </h2>
            <p className="measure text-base leading-[1.68] text-muted">
              Hire a head and keep deciding, and you have paid a leader&apos;s
              salary for a manager&apos;s output, and the leader knows it by
              month three. Hire a manager and expect a strategy, and the
              manager writes one with no authority to make sales agree to the
              lead definition or the board accept the forecast, and is judged
              on a plan nobody else owned. Both end the same way: a departure
              inside a year, a second search, and a posting that reads
              exactly like the first.
            </p>
            <p className="measure mt-4 text-base leading-[1.68] text-muted">
              Either way, the hire inherits the same six things or does not:
              a role with a level, a plan, a budget, a stack, a lead
              definition and a scoreboard. The head sets most of them. The
              manager needs them set.{" "}
              <a href="/what-your-first-marketer-inherits" className="border-b border-accent pb-px text-ink transition-colors hover:text-accent">
                What the first marketer should inherit on day one
              </a>{" "}
              is the companion to this page.
            </p>
          </div>
        </section>

        <section className="bg-ink px-6 pt-24 pb-20 text-band sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8 text-white/70">Before the posting</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)] text-white">
              Three lines to write before you write the job description.
            </h2>
            <div className="mt-11 grid gap-x-12 gap-y-8 sm:grid-cols-3">
              {[
                { k: "Who decides", v: "One sentence: for the next twelve months, segment, message and channel bets are decided by [the founder / this hire]." },
                { k: "The number they own", v: "Pipeline, or the leading indicators under it. Name it, and name the baseline from the CRM today." },
                { k: "Who they report to, and who reports to them", v: "The CEO, and nobody, is a fine answer for a manager. It is a warning sign for a head." },
              ].map((t) => (
                <div key={t.k}>
                  <h3 className="display-xs mb-2 border-t border-white/20 pt-4 text-[18px] text-white">{t.k}</h3>
                  <p className="text-[13.5px] leading-[1.6] text-white/60">{t.v}</p>
                </div>
              ))}
            </div>
            <p className="measure mt-10 text-[15px] leading-[1.7] text-white/60">
              Hiring a head specifically?{" "}
              <a href="/before-you-hire" className="border-b border-white/40 pb-px text-white transition-colors hover:border-white">
                There is a ten-question scorecard for the posting
              </a>
              .
            </p>
          </div>
        </section>

        <section className="border-t border-rule px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">If you want it decided with you</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              The level is the first of six decisions.
            </h2>
            <p className="measure text-base leading-[1.68] text-muted">
              The role and its level is deliverable one of{" "}
              <a href="/first-hire-plan" className="border-b border-accent pb-px text-ink transition-colors hover:text-accent">
                The First Hire Plan
              </a>
              , alongside the plan, the budget, the stack, the lead
              definition and the scoreboard: six weeks, fixed fee, finished
              before the posting goes up. The full guide to the first hire is{" "}
              <a href="/first-marketing-hire" className="border-b border-accent pb-px text-ink transition-colors hover:text-accent">
                here
              </a>
              .
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <StartCta place="head-vs-manager" />
            </div>
          </div>
        </section>
        <PageFaq items={faq} />
      </main>
      <Footer />
    </>
  );
}
