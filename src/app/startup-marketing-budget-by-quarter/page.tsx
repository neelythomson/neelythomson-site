import type { Metadata } from "next";
import StartCta from "@/components/StartCta";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import Byline from "@/components/Byline";
import Figures, { type Figure } from "@/components/Figures";
import PageFaq from "@/components/PageFaq";

const TITLE = "Startup Marketing Budget by Quarter: Benchmarks and a Template";
const DESCRIPTION =
  "How much a software startup should budget for marketing, as a share of ARR or raise from named sources, how to split it between people, programs and tools, and a quarter-by-quarter template for the first year.";
const URL = "https://neelythomson.com/startup-marketing-budget-by-quarter";
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
    t: "of ARR is the median marketing spend at private B2B SaaS companies, with selling costs counted separately at 15%. The two together are roughly a quarter of ARR",
    s: "SaaS Capital, Spending Benchmarks for Private B2B SaaS Companies 2026",
    href: "https://www.saas-capital.com/wp-content/uploads/2026/06/Spending-Benchmarks-for-Private-B2B-SaaS-Companies-2026-W1.pdf",
    note: "more than 1,000 companies, March 2026",
  },
  {
    n: "7.8%",
    t: "of company revenue is the average marketing budget across all industries, flat for three years, and half of CMOs run on 6% or less. The sample skews to large companies",
    s: "Gartner 2026 CMO Spend Survey",
    href: "https://www.gartner.com/en/newsroom/press-releases/2026-05-11-gartner-2026-cmo-spend-survey-finds-cmos-allocate-15-point-3-percent-of-marketing-budgets-to-ai-but-only-30-percent-are-ready-to-scale-ai-capabilities",
    note: "401 marketing leaders",
  },
  {
    n: "5%",
    t: "is the median across a broader mix of company sizes, with an average near 9%. Smaller companies consistently spend a higher share of revenue than larger ones",
    s: "The CMO Survey, Spring 2026",
    href: "https://cmosurvey.org/results/",
    note: "Duke Fuqua, Deloitte and the American Marketing Association",
  },
  {
    n: "31.4%",
    t: "of the marketing budget goes to paid media at large companies in 2026, with 24.5% to labor, 19.4% to technology and 19.2% to agencies. A startup's split looks nothing like this, and should not",
    s: "Gartner 2026 CMO Spend Survey, reported by MediaPost",
    href: "https://www.mediapost.com/publications/article/415003/cmos-find-ai-helps-adapt-to-lower-budgets",
  },
  {
    n: "15.3%",
    t: "of marketing budgets is now allocated to AI, while only 30% of marketing organizations say they are ready to scale it. The tool line in a startup budget should be smaller than the process line",
    s: "Gartner 2026 CMO Spend Survey",
    href: "https://www.gartner.com/en/newsroom/press-releases/2026-05-11-gartner-2026-cmo-spend-survey-finds-cmos-allocate-15-point-3-percent-of-marketing-budgets-to-ai-but-only-30-percent-are-ready-to-scale-ai-capabilities",
  },
];

const faq = [
  {
    q: "What percentage of revenue should a startup spend on marketing?",
    a: "The benchmarks cluster around 8% of ARR for private B2B SaaS, with selling costs counted separately, and the share runs higher the smaller the company. But a percentage is a check, not a plan. Start from the pipeline the company needs next year, work back through today's conversion rates, cost what marketing has to produce, and then compare that number with the benchmark. If the two disagree, the pipeline target or the conversion rates are wrong, and that is worth knowing before the budget is set.",
  },
  {
    q: "How should a startup split its marketing budget between people, programs and tools?",
    a: "At the earliest stage, people first: one owner, with contractors behind them, is most of the budget. Programs come second and should be bets with a kill rule, not a standing line. Tools come last and should be bought when the person who will run them starts, not before. The large-company split, roughly a third to paid media and a fifth each to labor, technology and agencies, is a reference point for where the company ends up, not where it starts.",
  },
  {
    q: "Should a startup budget marketing by quarter or by year?",
    a: "By quarter, inside an annual number. Quarter one is baseline and build, quarter two is the first channel bets, quarter three scales what worked and kills what did not, and quarter four sizes next year from real pipeline data. Spending a year's budget evenly across four quarters assumes you already know what works, and at this stage you do not.",
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
      about: ["Startup marketing budget", "Marketing budget benchmarks", "B2B SaaS marketing", "Marketing planning"],
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

const quarters = [
  {
    q: "Quarter one",
    share: "About 20% of the year",
    people: "The owner. Contractors only where a program needs them.",
    programs: "Small. One or two bets, run as tests with a written kill rule.",
    tools: "The CRM, clean. Nothing else until the owner has chosen it.",
    buys: "A baseline. Five numbers from the CRM, one lead definition signed by sales, the scoreboard, and the first read on which channel produced the last twenty deals.",
  },
  {
    q: "Quarter two",
    share: "About 25% of the year",
    people: "The owner, plus the first contractor or agency against a named program.",
    programs: "The first real channel bets, two or three, each with a kill and scale rule and a date to apply it.",
    tools: "What the bets need, bought at the tier the bets justify.",
    buys: "Evidence. Cost per opportunity by channel, for the first time, from attribution that was wired in quarter one.",
  },
  {
    q: "Quarter three",
    share: "About 30% of the year",
    people: "Same, unless a channel has proven out and needs an owner of its own.",
    programs: "Scale what returned pipeline. Kill what did not, on the date set in quarter two, not later.",
    tools: "Flat. Consolidate what overlaps.",
    buys: "Pipeline. The quarter where most of the year's marketing-sourced opportunities should land.",
  },
  {
    q: "Quarter four",
    share: "About 25% of the year",
    people: "The hiring plan for next year, costed from what the channels now need.",
    programs: "Run the proven channels. No new bets; the data would arrive too late to act on.",
    tools: "Renewals reviewed against use. Cancel what nobody opened.",
    buys: "Next year's budget, sized from real pipeline per dollar by channel, presented to the board with a forecast instead of a plan.",
  },
];

export default function BudgetByQuarter() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <Breadcrumbs items={[{ name: "Your first marketing hire", url: "https://neelythomson.com/first-marketing-hire" }, { name: "Startup marketing budget by quarter", url: URL }]} />
      <main id="main">
        <section className="px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">A guide for founders · The budget</p>
            <h1 className="display mb-8 max-w-[16ch] text-[clamp(2.2rem,4.8vw,3.8rem)]">
              The startup marketing budget, by quarter.
            </h1>
            <p className="measure text-[17px] leading-[1.62] text-muted">
              A startup marketing budget is the money a software company
              commits to people, programs and tools in order to produce a
              specific amount of pipeline. The benchmarks put it near 8% of
              ARR for private B2B software, higher at smaller companies, but
              the useful number comes from the other direction: the pipeline
              the company needs, divided by the conversion rates it has, is
              what marketing must produce, and the budget is what that costs.
            </p>
            <p className="measure mt-4 text-[17px] leading-[1.62] text-muted">
              This page gives the benchmarks with their sources, a way to size
              the budget from pipeline instead, a split between people,
              programs and tools, and a quarter-by-quarter template for the
              first year. Ranges are shares of ARR or of budget, from named
              third parties. There are no dollar figures of mine on this
              page; what I charge is quoted on the first call.
            </p>
            <Byline date={PUBLISHED} label="Published" className="mt-6" />
          </div>
        </section>

        <section className="border-t border-rule px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">The benchmarks</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              How much should a startup spend on marketing?
            </h2>
            <p className="measure text-base leading-[1.68] text-muted">
              Three surveys answer it three ways, and the spread is the
              point. Private B2B SaaS companies put a median 8% of ARR into
              marketing, with selling counted separately. Large companies
              across all industries average 7.8% of revenue, and half of
              them run on 6% or less. A broader mix of company sizes shows a
              median of 5% and an average near 9%, with the smaller the
              company, the higher the share. A startup at a few million in
              ARR that spends well under its benchmark is rarely being
              frugal. It is usually not doing marketing, and the founder is
              doing it instead, unpaid and unmeasured.
            </p>
            <Figures className="mt-12 border-t border-rule pt-8" items={figures} />
          </div>
        </section>

        <section className="border-t border-rule bg-band px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">From the pipeline</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              How do you size the budget from pipeline instead of a percentage?
            </h2>
            <p className="measure text-base leading-[1.68] text-muted">
              Five numbers, all in the CRM today. Next year&apos;s new
              revenue target. The average deal. The win rate from
              opportunity to close. The share of opportunities that should
              come from marketing rather than sales and referrals. And the
              cost per marketing-sourced opportunity, from whatever last year
              produced, or a conservative guess if nothing was measured.
            </p>
            <p className="measure mt-4 text-base leading-[1.68] text-muted">
              Revenue target divided by average deal is the number of closed
              deals. Divided by win rate, it is the number of opportunities.
              Multiplied by marketing&apos;s share, it is the opportunities
              marketing owes. Multiplied by cost per opportunity, it is the
              program budget. Add the owner&apos;s salary and the tools, and
              that is the marketing budget. Now compare it with 8% of ARR.
              If it is double, either the conversion rates are the problem,
              which is cheaper to fix than the budget, or the revenue target
              assumes a marketing function the company does not have yet.
              Either way, the comparison told you something a percentage
              never would.
            </p>
          </div>
        </section>

        <section className="border-t border-rule px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">The split</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              How should the budget be split between people, programs and tools?
            </h2>
            <p className="measure text-base leading-[1.68] text-muted">
              Large companies in 2026 put about a third of the marketing
              budget into paid media and roughly a fifth each into labor,
              technology and agencies. That is where a company ends up, not
              where it starts. At a few million in ARR, people are most of
              the budget, because one owner with contractors behind them is
              the whole function. Programs are the next line and should be
              bets with a date and a kill rule, not standing commitments.
              Tools are last, and smaller than they look: the tool line
              should be bought when the person who will run it starts, at the
              tier the programs justify, and the process around it should
              cost more thought than the licence.
            </p>
            <p className="measure mt-4 text-base leading-[1.68] text-muted">
              AI changes the labor line more than the tool line. Drafting,
              routing, scoring and reporting used to need three people and
              now need one person and a process legal can sign off on. Budget
              for the person and the process. The subscriptions are cheap;
              the usage policy, the approval step and the review loop are
              where the money and the risk actually sit.
            </p>
          </div>
        </section>

        <section className="border-t border-rule bg-band px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">The template</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              What does the first year look like, quarter by quarter?
            </h2>
            <p className="measure text-base leading-[1.68] text-muted">
              Not evenly. Spreading a year&apos;s budget across four equal
              quarters assumes you already know which channels work, and in
              the first year you do not. The shape below front-loads
              measurement, spends most in the quarter after the evidence
              arrives, and finishes with a forecast rather than a plan. The
              shares are a starting shape, mine, not a survey.
            </p>
            <div className="mt-9 overflow-x-auto">
              <table className="w-full min-w-[840px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-rule">
                    <th scope="col" className="label pb-4 pr-5 font-medium">&nbsp;</th>
                    <th scope="col" className="label pb-4 pr-5 font-medium">Share</th>
                    <th scope="col" className="label pb-4 pr-5 font-medium">People</th>
                    <th scope="col" className="label pb-4 pr-5 font-medium">Programs</th>
                    <th scope="col" className="label pb-4 pr-5 font-medium">Tools</th>
                    <th scope="col" className="label pb-4 font-medium">What it buys</th>
                  </tr>
                </thead>
                <tbody>
                  {quarters.map((r) => (
                    <tr key={r.q} className="border-b border-rule align-top">
                      <th scope="row" className="w-[11%] py-5 pr-5 text-[14px] font-medium leading-[1.5] text-ink">{r.q}</th>
                      <td className="w-[11%] py-5 pr-5 text-[13px] leading-[1.6] text-muted">{r.share}</td>
                      <td className="w-[18%] py-5 pr-5 text-[13px] leading-[1.6] text-muted">{r.people}</td>
                      <td className="w-[20%] py-5 pr-5 text-[13px] leading-[1.6] text-muted">{r.programs}</td>
                      <td className="w-[16%] py-5 pr-5 text-[13px] leading-[1.6] text-muted">{r.tools}</td>
                      <td className="w-[24%] py-5 text-[13px] leading-[1.6] text-muted">{r.buys}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="border-t border-rule px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">The rules</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              What rules keep the budget honest?
            </h2>
            <div className="mt-9 grid gap-x-12 gap-y-8 sm:grid-cols-2">
              {[
                { k: "Every program has a kill date", v: "Written before the money is spent: what it must produce, by when, or it stops. The most expensive line in most startup budgets is the channel nobody decided to stop." },
                { k: "Reallocate quarterly, not annually", v: "Pipeline per dollar by channel, refreshed each quarter, moves money toward what returns. An annual budget locked in January is a guess defended for twelve months." },
                { k: "Tools follow people", v: "Nothing is bought for a hire who has not started. A stack chosen by someone who left is the first thing the next person replaces." },
                { k: "The board reads the same page", v: "The budget and the five-metric scoreboard are one document. If the board sees spend without pipeline beside it, the budget conversation becomes a cost conversation." },
              ].map((t) => (
                <div key={t.k}>
                  <h3 className="display-xs mb-2 border-t border-rule pt-4 text-[18px]">{t.k}</h3>
                  <p className="text-[13.5px] leading-[1.65] text-muted">{t.v}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-ink px-6 pt-24 pb-20 text-band sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8 text-white/70">Before the first hire</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)] text-white">
              The budget is the third thing a first marketing hire should inherit.
            </h2>
            <p className="measure text-[15px] leading-[1.7] text-white/60">
              Without it, every tool and program becomes a negotiation, and
              the hire learns within a month that asking costs more than it
              gets. The budget by quarter is deliverable three of{" "}
              <a href="/first-hire-plan" className="border-b border-white/40 pb-px text-white transition-colors hover:border-white">
                The First Hire Plan
              </a>
              , sized from your pipeline target rather than a benchmark. The
              full guide to the first hire is{" "}
              <a href="/first-marketing-hire" className="border-b border-white/40 pb-px text-white transition-colors hover:border-white">
                here
              </a>
              , and the day-one checklist is{" "}
              <a href="/what-your-first-marketer-inherits" className="border-b border-white/40 pb-px text-white transition-colors hover:border-white">
                here
              </a>
              .
            </p>
          </div>
        </section>

        <section className="border-t border-rule px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">If you want it sized with you</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              Bring the five numbers. The budget takes an afternoon.
            </h2>
            <p className="measure text-base leading-[1.68] text-muted">
              Revenue target, average deal, win rate, marketing&apos;s share,
              cost per opportunity. If you have those, the first call can
              size the budget before anything is signed. If you do not have
              the last two, that is what a Diagnostic finds in two weeks.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <StartCta place="budget-by-quarter" />
            </div>
          </div>
        </section>
        <PageFaq items={faq} />
      </main>
      <Footer />
    </>
  );
}
