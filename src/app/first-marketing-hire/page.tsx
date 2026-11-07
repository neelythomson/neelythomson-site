import type { Metadata } from "next";
import StartCta from "@/components/StartCta";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import Byline from "@/components/Byline";
import Figures, { type Figure } from "@/components/Figures";
import PageFaq from "@/components/PageFaq";

const TITLE = "Your First Marketing Hire: When, Who, and What They Should Inherit";
const DESCRIPTION =
  "A founder's guide to the first marketing hire at a software startup: the three moments it becomes necessary, what to decide before the posting, which role to hire, and what the hire should inherit on day one.";
const URL = "https://neelythomson.com/first-marketing-hire";
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
    n: "8%",
    t: "of ARR is the median marketing spend at private B2B SaaS companies, with selling costs counted separately at 15%. Treat it as the floor a plan is measured against, not the number",
    s: "SaaS Capital, Spending Benchmarks for Private B2B SaaS Companies 2026",
    href: "https://www.saas-capital.com/wp-content/uploads/2026/06/Spending-Benchmarks-for-Private-B2B-SaaS-Companies-2026-W1.pdf",
    note: "more than 1,000 companies surveyed",
  },
  {
    n: "5%",
    t: "is the median marketing budget as a share of revenue across all industries and company sizes; the average is about 9%, and smaller companies spend a higher share than larger ones",
    s: "The CMO Survey, Spring 2026",
    href: "https://cmosurvey.org/results/",
    note: "Duke Fuqua, Deloitte and the American Marketing Association",
  },
  {
    n: "39 days",
    t: "is the median time to fill a non-executive role, from requisition to accepted offer. A leadership search runs longer. Either way, the search is the window in which the function can be built",
    s: "SHRM Recruiting Benchmarking 2026",
    href: "https://www.shrm.org/mena/topics-tools/research/recruiting-benchmarking/full-data-brief",
  },
  {
    n: "2.6 years",
    t: "is the average CMO tenure at VC-backed companies, against 4.0 years at public companies. Marketing leaders at startups get the least time to show a result",
    s: "CMO Huddles and Findem CMO tenure study, reported by MediaPost",
    href: "https://www.mediapost.com/publications/article/418386/cmo-tenure-inches-up-to-26-years.html",
    note: "2026",
  },
  {
    n: "8%",
    t: "of startups made a marketer their first hire after the founders. 48% hired an engineer first, 19% a salesperson. By the time marketing arrives, the company has habits",
    s: "HubSpot Go-To-Market Report for Startups",
    href: "https://www.hubspot.com/startups/go-to-market-startups/2019",
    note: "2019 survey",
  },
];

const faq = [
  {
    q: "When should a startup hire its first marketer?",
    a: "When one of three things is true: the founder's marketing hours are crowding out the founder's job, a channel is working and has no owner, or a sales team exists and is waiting on marketing for pipeline. Before any of those, a hire has nothing to run. After all three, the company has usually been losing deals for a quarter.",
  },
  {
    q: "Should the first marketing hire be a Head of Marketing or a marketing manager?",
    a: "It depends on who is deciding strategy. If the founder will keep setting the segment, the message and the channel bets for another year, hire a manager or a generalist who executes. If the founder needs to hand strategy off now, hire a head of marketing and expect to pay for judgment, not output. Most seed and early Series A companies are in the first case and hire for the second, which is the most common mis-hire.",
  },
  {
    q: "What should a first marketing hire inherit on day one?",
    a: "Six things: a role with a level and a written scope, a twelve-month plan with the lead segment and channel bets, a budget by quarter, the stack with tiers and owners, one lead definition the sales lead has signed, and a five-metric scoreboard with baselines from the CRM. Without those, the hire's first quarter is spent producing them instead of pipeline.",
  },
  {
    q: "Can a fractional CMO replace the first marketing hire?",
    a: "Not for long. A fractional leader can design the function and run strategy for a quarter or two, but the day-to-day of a marketing function needs an owner inside the company. The useful order is: design the function first, hire the person who runs it, and keep the outside leader close by for the first quarter if the hire is junior. The hire still happens; it lands on a plan instead of a blank page.",
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
      about: ["First marketing hire", "Startup marketing", "Head of Marketing", "B2B SaaS marketing"],
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

const moments = [
  {
    n: "01",
    t: "The founder's hours",
    b: "Marketing is being done between fundraising, product and the pipeline review, and it shows. The newsletter is late, the website says what the product did last year, and the one channel that worked in spring has not been touched since. The founder's job is being done by nobody because the founder is doing marketing.",
  },
  {
    n: "02",
    t: "A channel with no owner",
    b: "Something works. Outbound to one segment, a partner's newsletter, a webinar that keeps producing meetings. It works because one person remembers to run it. The moment that person is busy, it stops. A working channel with no owner is the clearest sign a hire is overdue.",
  },
  {
    n: "03",
    t: "Sales is waiting",
    b: "There is a sales hire, or two, and they are sourcing their own pipeline. Every week they do not get leads from marketing is a week of a salesperson's salary spent on prospecting. Once sales exists, marketing without an owner is the most expensive seat in the company, and it is empty.",
  },
];

const decisions = [
  {
    k: "The role and its level",
    v: "Head, manager, or generalist, with a written scope. Decide who sets strategy for the next year: the founder or the hire. That answer picks the level, and the level picks the salary band, the title, and who the person reports to.",
  },
  {
    k: "The twelve-month plan",
    v: "Which segment to lead with, which channel bets to run, and what marketing is expected to produce each quarter, in pipeline. A plan the hire inherits is executed in month one. A plan the hire has to write is presented in month three.",
  },
  {
    k: "The budget by quarter",
    v: "People, programs and tools, sized to the pipeline the company needs rather than to a benchmark percentage. The benchmark is a sanity check. The pipeline target is the number.",
  },
  {
    k: "The stack",
    v: "Which tools, at which tier, bought when the hire starts and not before. A new marketer who inherits six half-configured tools spends a month deciding which to keep.",
  },
  {
    k: "One lead definition",
    v: "What a qualified lead is, in writing, signed by whoever runs sales. The single most common thing a new marketer spends the first quarter arguing about, and the easiest to settle before they arrive.",
  },
  {
    k: "The scoreboard",
    v: "Five numbers, with definitions, owners and baselines from the CRM as it is today. The board reads the same page the hire reports on, from the first month.",
  },
];

const roles = [
  {
    r: "Head of Marketing",
    when: "The founder is handing strategy off now. Revenue is past the point where the founder can set the segment and the message between other jobs. Usually Series A or later, with a sales team in place.",
    runs: "Segment and message decisions, the budget, the board read, the hiring plan, and the sales relationship. Produces little directly. Expensive if the founder still intends to make every call.",
  },
  {
    r: "Marketing manager",
    when: "Strategy stays with the founder for another year. There is a plan, or there will be one, and it needs an owner who runs it week to week. Seed to early Series A.",
    runs: "The channels, the stack, the content calendar, the weekly numbers. Executes a plan well. Should not be asked to invent one at a manager's authority.",
  },
  {
    r: "Growth generalist",
    when: "The company is still finding its channel and needs someone who can test fast across several, with a founder close by. Pre-Series A, often product-led.",
    runs: "Experiments, with a kill and scale rule for each. Strong on speed, weak on systems. Plan to add a second hire once a channel is proven.",
  },
];

const inherits = [
  { i: "A role with a level and a scope", w: "Without it: the hire and the founder discover in month two that they expected different jobs." },
  { i: "A twelve-month plan with the lead segment", w: "Without it: the first quarter is spent writing a plan the founder could have dictated in a week." },
  { i: "A budget by quarter", w: "Without it: every tool and every program is a negotiation, and the hire learns to ask for nothing." },
  { i: "The stack, with tiers and owners", w: "Without it: a month of tool evaluation before anything ships." },
  { i: "One lead definition, signed by sales", w: "Without it: two teams reporting different pipeline numbers to the same board." },
  { i: "A scoreboard with baselines", w: "Without it: the first board meeting is a plan to produce a read, not a read." },
];

export default function FirstMarketingHire() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <Breadcrumbs items={[{ name: "Your first marketing hire", url: URL }]} />
      <main id="main">
        <section className="px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">A guide for founders · Software startups</p>
            <h1 className="display mb-8 max-w-[16ch] text-[clamp(2.2rem,4.8vw,3.8rem)]">
              Your first marketing hire.
            </h1>
            <p className="measure text-[17px] leading-[1.62] text-muted">
              A first marketing hire is the person a software startup brings in
              to own marketing after the founders have been doing it themselves.
              The hire goes well when it lands in a function that already
              exists: a role with a level, a plan, a budget, a stack, a lead
              definition, and a scoreboard. It goes badly when the hire is asked
              to invent all of that at a new hire&apos;s salary and a new
              hire&apos;s authority.
            </p>
            <p className="measure mt-4 text-[17px] leading-[1.62] text-muted">
              This guide covers when the hire becomes necessary, what to decide
              before the posting goes up, which role to hire, what it should
              inherit on day one, and why so many first marketing hires are
              gone inside two years. I have been the first marketer, and I have
              hired one. Most of what follows is what I wish someone had
              written down before either.
            </p>
            <Byline date={PUBLISHED} label="Published" className="mt-6" />
          </div>
        </section>

        <section className="border-t border-rule px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">Timing</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              When should a startup make its first marketing hire?
            </h2>
            <p className="measure text-base leading-[1.68] text-muted">
              When one of three things is true. Not before, because the hire
              would have nothing to run, and not long after, because each of
              the three costs money every week it goes unaddressed. Founders
              tend to wait for all three, then hire in a hurry.
            </p>
            <div className="mt-11 grid gap-x-12 gap-y-9 sm:grid-cols-3">
              {moments.map((m) => (
                <div key={m.t} className="border-t border-rule pt-5">
                  <p className="label mb-3">{m.n}</p>
                  <h3 className="display-xs mb-2.5 text-[19px]">{m.t}</h3>
                  <p className="text-[13.5px] leading-[1.65] text-muted">{m.b}</p>
                </div>
              ))}
            </div>
            <p className="measure mt-10 text-base leading-[1.68] text-muted">
              One more signal, quieter than the others: the board has started
              asking what marketing produces, and the honest answer is a list
              of activities. That question does not go away. It gets asked
              again next quarter, with a number expected.
            </p>
          </div>
        </section>

        <section className="border-t border-rule bg-band px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">Before the posting</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              What should be decided before the posting goes up?
            </h2>
            <p className="measure text-base leading-[1.68] text-muted">
              Six things, and all six are the founder&apos;s to decide, because
              they are decisions about the company rather than about marketing.
              Each one left open becomes the new hire&apos;s first project,
              done with less context and less authority than the founder has
              today.
            </p>
            <div className="mt-11 grid gap-x-12 gap-y-8 sm:grid-cols-2">
              {decisions.map((d) => (
                <div key={d.k}>
                  <h3 className="display-xs mb-2 border-t border-rule pt-4 text-[18px]">{d.k}</h3>
                  <p className="text-[13.5px] leading-[1.65] text-muted">{d.v}</p>
                </div>
              ))}
            </div>
            <p className="mt-10 text-[13.5px] leading-[1.6] text-faint">
              <span className="label mr-3">Related</span>
              <a href="/first-hire-plan" className="border-b border-accent pb-px text-ink transition-colors hover:text-accent">
                The First Hire Plan: all six, designed in six weeks
              </a>
            </p>
          </div>
        </section>

        <section className="border-t border-rule px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">The role</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              Who should the first marketing hire be?
            </h2>
            <p className="measure text-base leading-[1.68] text-muted">
              One question decides it: who sets strategy for the next twelve
              months, the founder or the hire? If the founder, hire someone who
              executes. If the hire, pay for a head of marketing and then let
              them lead. The common mistake is to hire a head and keep making
              every call, or to hire a manager and expect a strategy. Both end
              the same way, with a departure inside a year and a posting that
              reads exactly like the last one.
            </p>
            <div className="mt-9">
              {roles.map((r, i) => (
                <div key={r.r} className={`grid gap-3 py-7 md:grid-cols-[170px_1fr] md:gap-10 ${i === 0 ? "" : "border-t border-rule"}`}>
                  <h3 className="display-xs pt-0.5 text-[19px]">{r.r}</h3>
                  <div className="max-w-[62ch]">
                    <p className="label mb-2">When</p>
                    <p className="text-[15px] leading-[1.7] text-muted">{r.when}</p>
                    <p className="label mt-5 mb-2">What they run</p>
                    <p className="text-[15px] leading-[1.7] text-muted">{r.runs}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="measure mt-8 text-base leading-[1.68] text-muted">
              Whichever role it is, write down what it runs in year one before
              the search starts. A posting that lists channels describes the
              job as it was. A posting that names the number the role owns, the
              systems it runs, and who it reports to describes the job as it
              is.{" "}
              <a href="/head-of-marketing-vs-marketing-manager" className="border-b border-accent pb-px text-ink transition-colors hover:text-accent">
                The level decision, side by side
              </a>
              , and{" "}
              <a href="/before-you-hire" className="border-b border-accent pb-px text-ink transition-colors hover:text-accent">
                a scorecard for the posting
              </a>
              .
            </p>
          </div>
        </section>

        <section className="border-t border-rule bg-band px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">The budget</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              How much should a startup budget for marketing?
            </h2>
            <p className="measure text-base leading-[1.68] text-muted">
              Start from the pipeline the company needs next year, work back
              through the conversion rates it has today, and the budget is
              what that costs. Then check it against the benchmarks. Done the
              other way round, a percentage of revenue becomes the plan, and
              the plan is to spend the percentage.
            </p>
            <p className="measure mt-4 text-base leading-[1.68] text-muted">
              The benchmarks say roughly this: private B2B software companies
              put a median of 8% of ARR into marketing, with selling counted
              separately; across all industries the median is nearer 5% and
              the average nearer 9%; and smaller companies run higher shares
              than larger ones because the revenue base is small and the
              growth target is not. An early-stage company that spends well
              under its benchmark is usually not frugal. It is usually not
              doing marketing.{" "}
              <a href="/startup-marketing-budget-by-quarter" className="border-b border-accent pb-px text-ink transition-colors hover:text-accent">
                The budget by quarter, with a template
              </a>
              .
            </p>
            <Figures
              className="mt-12 border-t border-rule pt-8"
              label="The numbers behind this guide"
              items={figures}
            />
          </div>
        </section>

        <section className="border-t border-rule px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">Day one</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              What does the first marketer inherit on day one?
            </h2>
            <p className="measure text-base leading-[1.68] text-muted">
              Six things, the same six decided before the posting. Here is what
              each one is, and what happens in the first quarter when it is
              missing. Most first marketing hires inherit two of the six. The
              best ones I have seen inherited all six and shipped pipeline in
              month two.{" "}
              <a href="/what-your-first-marketer-inherits" className="border-b border-accent pb-px text-ink transition-colors hover:text-accent">
                The full checklist, with how to put each in place
              </a>
              , and{" "}
              <a href="/sales-marketing-sla-startup" className="border-b border-accent pb-px text-ink transition-colors hover:text-accent">
                the sales and marketing SLA on its own page
              </a>
              .
            </p>
            <div className="mt-9">
              {inherits.map((x, i) => (
                <div key={x.i} className={`grid gap-2 py-5 md:grid-cols-[1fr_1fr] md:gap-10 ${i === 0 ? "" : "border-t border-rule"}`}>
                  <p className="text-[15px] leading-[1.6] text-ink">{x.i}</p>
                  <p className="max-w-[52ch] text-[14px] leading-[1.65] text-muted">{x.w}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-rule bg-band px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">The search</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              How long does the hire take, and what happens meanwhile?
            </h2>
            <p className="measure text-base leading-[1.68] text-muted">
              The median non-executive role takes 39 days to fill from
              requisition to accepted offer, and a marketing leadership search
              runs longer, often a quarter. Add notice periods and the hire is
              three to four months away from the day the founder decides to
              make it. That window is usually spent interviewing. It is better
              spent building what the hire will inherit, because the six
              decisions above take about six weeks and the hire cannot start
              them before arriving.
            </p>
            <p className="measure mt-4 text-base leading-[1.68] text-muted">
              Meanwhile, whoever is doing marketing today keeps doing it. The
              one thing to stop is buying tools in anticipation. A stack bought
              for a hire who has not started is a stack the hire did not
              choose, and the first thing they will want to replace.
            </p>
          </div>
        </section>

        <section className="border-t border-rule px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">Why it fails</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              Why do so many first marketing hires leave inside two years?
            </h2>
            <p className="measure text-base leading-[1.68] text-muted">
              Marketing leaders at venture-backed companies average two and a
              half years in the seat, the shortest of any ownership type. The
              reasons I have seen up close are rarely about talent. The hire
              and the founder expected different jobs. There was no agreed
              lead definition, so sales and marketing reported different
              numbers and the board believed sales. There was no scoreboard,
              so the first year was judged on activity, and activity is
              always arguable.
            </p>
            <p className="measure mt-4 text-base leading-[1.68] text-muted">
              Every one of those is settled by a decision the founder could
              have made before the posting. That is the whole case for
              designing the function first. It is not that the hire cannot do
              it. It is that the hire doing it costs a quarter of a
              leader&apos;s salary and a quarter of pipeline, and the founder
              doing it costs a few weeks.
            </p>
          </div>
        </section>

        <section className="bg-ink px-6 pt-24 pb-20 text-band sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8 text-white/70">This week</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)] text-white">
              What a founder can do before writing the posting.
            </h2>
            <div className="mt-11 grid gap-x-12 gap-y-8 sm:grid-cols-2">
              {[
                { k: "Answer the strategy question", v: "Who sets segment, message and channel bets for the next year: you, or the hire? Write the answer down. It picks the role." },
                { k: "Write one lead definition", v: "One paragraph. Get whoever runs sales to sign it. If that takes more than a week, you have found the first thing the hire would have spent a quarter on." },
                { k: "Pull five numbers from the CRM", v: "Opportunities created, pipeline value, win rate, average deal, and sales cycle, for the trailing twelve months. That is the scoreboard's baseline, and it exists today." },
                { k: "Decide the budget from the pipeline target", v: "Next year's pipeline number, divided by today's conversion rates, tells you what marketing has to produce. Cost that. Then look at the benchmark." },
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
            <p className="label mb-8">If you want it done with you</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              The six decisions, designed in six weeks.
            </h2>
            <p className="measure text-base leading-[1.68] text-muted">
              Everything on this page is doable by a founder with a few weeks
              and a sales lead who will sign a paragraph. If you would rather
              it were done with someone who has built the function before,
              that is{" "}
              <a href="/first-hire-plan" className="border-b border-accent pb-px text-ink transition-colors hover:text-accent">
                The First Hire Plan
              </a>
              : six weeks, fixed fee, the role and its level, the plan, the
              budget, the stack, the lead definition signed by sales, and the
              scoreboard, finished before the posting goes up. You run the
              search. The hire inherits the function.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <StartCta place="first-marketing-hire" />
              <a href="/before-you-hire" className="border-b border-accent pb-0.5 text-sm font-medium text-ink transition-colors hover:text-accent">
                Hiring a Head of Marketing specifically
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
