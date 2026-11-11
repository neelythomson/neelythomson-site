import type { Metadata } from "next";
import StartCta from "@/components/StartCta";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import Byline from "@/components/Byline";
import Figures, { type Figure } from "@/components/Figures";
import PageFaq from "@/components/PageFaq";

const TITLE = "Fractional CMO vs Full-Time CMO vs Build Then Hire: The 2026 Guide";
const DESCRIPTION =
  "Three ways to get marketing leadership at a B2B software company: a full-time CMO, a fractional CMO on retainer, or building the function first and hiring into it. Year-one cost from third-party benchmarks, time to start, what is left when it ends, and when each is right.";
const URL = "https://neelythomson.com/fractional-cmo-vs-full-time";
const PUBLISHED = "2026-09-02";
const UPDATED = "2026-11-07";

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
    n: "$152,500",
    t: "is the median base salary for a VP of Marketing at a SaaS company, with the typical range running from $132,000 to about $173,000. Bonus, benefits, equity and the search sit on top",
    s: "Founderpath SaaS salary benchmarks",
    href: "https://founderpath.com/salary-benchmarks/saas/vp-marketing",
    note: "94 verified salaries, February 2026",
  },
  {
    n: "$166,790",
    t: "is the median annual wage for marketing managers across all industries in the United States, which is roughly where a senior full-time hire below VP sits",
    s: "U.S. Bureau of Labor Statistics, Occupational Outlook Handbook",
    href: "https://www.bls.gov/ooh/management/advertising-promotions-and-marketing-managers.htm",
    note: "May 2025",
  },
  {
    n: "$35,879",
    t: "is the average cost of an executive hire before a day of salary, against $5,475 for a non-executive role",
    s: "SHRM 2025 recruiting benchmarks",
    href: "https://www.shrm.org/mena/topics-tools/research/recruiting-benchmarking/full-data-brief",
  },
  {
    n: "$4,000 to $20,000",
    t: "a month is the typical fractional CMO retainer, with an average around $12,000 a month, or $144,000 a year. Hourly rates run $150 to $500",
    s: "Go Fractional, Fractional CMO Salary 2026",
    href: "https://gofractional.com/blog/fractional-cmo-salary",
    note: "updated June 2026",
  },
  {
    n: "$3,000 to $15,000",
    t: "a month is where most fractional CMO retainers land for ten to twenty hours a week, by a second marketplace's count. The two ranges overlap; the midpoint of both is near $10,000 a month",
    s: "MarketerHire, Fractional CMO Cost 2026",
    href: "https://marketerhire.com/blog/fractional-cmo-cost",
  },
  {
    n: "2.6 years",
    t: "is the average marketing leader's tenure at VC-backed companies, against 4.1 years for CMOs at S&P 500 companies. A year-one cost is usually most of the cost",
    s: "CMO Huddles and Findem, reported by MediaPost; Spencer Stuart 2026",
    href: "https://www.mediapost.com/publications/article/418386/cmo-tenure-inches-up-to-26-years.html",
    note: "2026",
  },
];

const faq = [
  {
    q: "Is a fractional CMO worth it for a startup under $30M in revenue?",
    a: "Usually, with one condition: the engagement has to leave something behind. A fractional CMO who runs marketing for a year and takes the strategy with them when the retainer ends was a rented executive. One who builds the lead definition, the routing, the scoreboard and the operating cadence in the company's own tools, and hands them to a named person, was an investment. Ask what is left on the last day before you sign.",
  },
  {
    q: "Can you build the marketing function before hiring a full-time CMO?",
    a: "Yes, and for most companies between a few million and thirty million in revenue it is the better order. A full-time marketing leader takes a quarter or more to hire and another quarter to rebuild the basics if they inherit nothing. Building the function during the search, so the hire inherits a working system, is what The Marketing Engine and The First Hire Plan are for. The hire still happens; it lands on something that works.",
  },
  {
    q: "How long does a fractional CMO engagement usually last?",
    a: "Retainers are open-ended by design and most renew, which is why they are usually measured in years rather than months. A fixed-scope build is different: it has an end date agreed in writing before it starts, and what happens after it is the client's decision. If the engagement you are considering has no stated end, ask what would cause one.",
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
      dateModified: `${UPDATED}T12:00:00-05:00`,
      image: [`${URL}/opengraph-image`],
      author: { "@id": "https://neelythomson.com/#person" },
      publisher: { "@id": "https://neelythomson.com/#person" },
      isPartOf: { "@id": "https://neelythomson.com/#website" },
      about: ["Fractional CMO", "Chief Marketing Officer", "B2B SaaS marketing leadership", "Marketing function design"],
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
  {
    k: "Year-one cash",
    ft: "A median SaaS VP of Marketing base of $152,500, plus bonus, benefits and equity on top, plus an average executive hiring cost of $35,879 before they start. Source ranges above.",
    fc: "$48,000 to $240,000 at the typical $4,000 to $20,000 a month; the average retainer runs near $144,000 a year. Most retainers renew, so plan on year two.",
    me: "A fixed fee for the build, quoted on the first call and written into the agreement before anything starts, then the hire's cost from the month they start, into a function that already runs.",
  },
  {
    k: "Time to start",
    ft: "A quarter or more to hire, then a quarter of ramp before they change anything.",
    fc: "Two to four weeks.",
    me: "Two weeks to the Diagnostic readout, or six weeks for the First Hire Plan. The build starts the week after.",
  },
  {
    k: "What you get",
    ft: "A leader who owns marketing, manages the team, sits in the executive meeting, and is accountable for the number.",
    fc: "Senior judgment, a strategy, and a part-time operator who runs marketing while they are under contract.",
    me: "The function itself: positioning, lead definition, scoring and routing, attribution, the scoreboard and a weekly cadence, built in your tools and handed to a named person on your team.",
  },
  {
    k: "What is left when it ends",
    ft: "Whatever they documented. Usually less than you would hope, and the next leader rebuilds.",
    fc: "The strategy deck and the campaigns they ran. The systems tend to leave with them.",
    me: "Six working artifacts, a trained operator, and four weeks of support after handoff. Nothing depends on anyone outside the company staying.",
  },
  {
    k: "The ongoing bill",
    ft: "Salary every year, plus whatever team they hire.",
    fc: "The retainer, for as long as you keep them.",
    me: "Nothing required. Some clients keep an Advisory Seat afterward, roughly ten hours a month, scoped to the work.",
  },
  {
    k: "Right when",
    ft: "Five or more people report into marketing, the board wants a named owner of the number, and marketing is the main growth lever.",
    fc: "You need marketing run by a senior person for a defined stretch and are fine renting that judgment month to month.",
    me: "You have revenue, a dozen or so closed deals, someone who can own the function, and either no marketing leader yet or a team producing without a system.",
  },
];

const fullTimeCases = [
  {
    t: "Five or more people report into marketing",
    b: "Managing people is a full-time job on its own. A fractional leader at ten to twenty hours a week cannot do it well, and I do not offer people management at all. Once the team is that size, hire the executive.",
  },
  {
    t: "The board wants a named owner of the number",
    b: "Investors at Series B and beyond usually want a full-time executive whose name is on the marketing plan. That is a governance preference, and a fair one. A fractional CMO can get you to that hire, but rarely replaces it.",
  },
  {
    t: "Marketing is the company's main growth lever",
    b: "If most of the pipeline comes from marketing rather than sales or partnerships, the person running it should be in the building every day. A product-led software company at $20M in ARR needs a full-time CMO, not a consultant.",
  },
];

const fractionalCases = [
  {
    t: "You are between a few million and $30M in revenue with no marketing leader",
    b: "There is a marketing manager or a small team, and nobody senior above them. The CEO is the de facto CMO. Marketing spend goes out the door every month without anyone able to say what it returned.",
  },
  {
    t: "Sales sources most of the pipeline",
    b: "Companies selling six-figure contracts into banks, school systems, hospitals or state agencies get most of their pipeline from sales, conferences and referrals. Marketing's job there is to feed and route the pipeline, not to be it. That is a systems problem more than a leadership one.",
  },
  {
    t: "AI tools were bought and nobody owns the process",
    b: "The tools are live and the output looks the same as before, or worse, and legal has not signed off on any of it. That is the state of most marketing teams in 2026, and it is fixable in weeks, not years.",
  },
  {
    t: "You will hire full-time eventually, but not this year",
    b: "The strongest use of outside marketing leadership is to build the function a full-time hire will inherit, so that person starts on day one with a working engine instead of a blank CRM and a shared drive full of old decks.",
  },
];

const decide = [
  {
    q: "Who will own the number in eighteen months?",
    a: "If the answer is a full-time executive, start that search now and build the function during it. If the answer is the founder or a manager, a retainer is renting a decision you have not made.",
  },
  {
    q: "What is left on the last day?",
    a: "Ask every option this. A full-time hire leaves what they documented. A retainer leaves a deck. A build leaves the systems, in your tools, with a trained owner. Price the three accordingly.",
  },
  {
    q: "Is the problem leadership or systems?",
    a: "No lead definition, no scoreboard, a CRM nobody trusts and tools nobody owns is a systems problem, and a leader hired into it spends the first quarter fixing it. Fix it first, at a fraction of a leader's salary, then hire the leader.",
  },
];

export default function FractionalCMOvsFullTime() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <Breadcrumbs items={[{ name: "Fractional CMO vs full-time CMO vs build then hire", url: URL }]} />
      <main id="main">
        <section className="px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">A guide for CEOs and founders · 2026</p>
            <h1 className="display mb-8 max-w-[16ch] text-[clamp(2.2rem,4.8vw,3.8rem)]">
              Fractional CMO, full-time CMO, or build then hire.
            </h1>
            <p className="measure text-[17px] leading-[1.62] text-muted">
              A fractional CMO is a senior marketing leader who works with a
              company part-time, usually ten to twenty hours a week on a
              monthly retainer. A full-time CMO or VP of Marketing is an
              employee who owns the function, manages the team and is
              accountable for pipeline. The third option, build then hire,
              puts the marketing function in place first, with a fixed scope
              and an end date, and hires the leader into it.
            </p>
            <p className="measure mt-4 text-[17px] leading-[1.62] text-muted">
              I have been the full-time leader, I work in the fractional
              category, and the third option is what I sell, so read the
              last section knowing that. The cost figures below are
              third-party benchmarks with the source beside each one, not my
              prices; mine are quoted on the first call.
            </p>
            <Byline date={UPDATED} label="Updated" className="mt-6" />
          </div>
        </section>

        <section className="border-t border-rule px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">The difference</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              What is the difference between a fractional CMO and a full-time CMO?
            </h2>
            <p className="measure text-base leading-[1.68] text-muted">
              Ownership and time. A full-time CMO owns marketing outright:
              the team, the budget, the board slide, and the consequences.
              They are there every day and they are expected to stay for
              years. A fractional CMO brings the same level of judgment for
              part of a week, on a contract that either side can end, and
              usually without managing people. The retainer buys strategy
              and oversight; execution stays with the company&apos;s team or
              an agency.
            </p>
            <p className="measure mt-4 text-base leading-[1.68] text-muted">
              The comparison most companies run is those two against each
              other. The one that decides it for a company between a few
              million and thirty million in revenue is a third: what each
              option leaves behind when it ends. A leader leaves what they
              documented. A retainer leaves a deck. Neither reliably leaves
              the function, which is the thing the next person needs.
            </p>
          </div>
        </section>

        <section className="border-t border-rule bg-band px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">Side by side</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              What does each option cost in year one, and what do you get?
            </h2>
            <p className="measure text-base leading-[1.68] text-muted">
              US market ranges for B2B software companies between roughly
              a few million and $30M in revenue, as of 2026, from the sources
              listed under the table. Your numbers will differ by city and
              stage; the shape of the comparison holds.
            </p>
            <div className="mt-9 overflow-x-auto">
              <table className="w-full min-w-[720px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-rule">
                    <th scope="col" className="label pb-4 pr-6 font-medium">&nbsp;</th>
                    <th scope="col" className="label pb-4 pr-6 font-medium">Full-time CMO</th>
                    <th scope="col" className="label pb-4 pr-6 font-medium">Fractional CMO, retainer</th>
                    <th scope="col" className="label pb-4 font-medium">Build, then hire</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.k} className="border-b border-rule align-top">
                      <th scope="row" className="w-[16%] py-5 pr-6 text-[14px] font-medium leading-[1.5] text-ink">{r.k}</th>
                      <td className="w-[28%] py-5 pr-6 text-[13.5px] leading-[1.65] text-muted">{r.ft}</td>
                      <td className="w-[28%] py-5 pr-6 text-[13.5px] leading-[1.65] text-muted">{r.fc}</td>
                      <td className="w-[28%] py-5 text-[13.5px] leading-[1.65] text-muted">{r.me}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Figures className="mt-12 border-t border-rule pt-8" label="The sources" items={figures} />
            <div className="mt-12 border-t border-rule pt-8">
              <p className="measure text-base leading-[1.68] text-muted">
                Not sure which column you are in? That is what the two-week{" "}
                <a href="/diagnostic" className="border-b border-accent pb-px text-ink transition-colors hover:text-accent">
                  Diagnostic
                </a>{" "}
                answers: which option fits, what the function should be, and
                what it costs, with the fee credited toward the build if there
                is one. If the answer is a full-time hire, I will say so.
              </p>
              <StartCta place="vs-full-time-table" className="mt-7" />
            </div>
          </div>
        </section>

        <section className="border-t border-rule px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">The job itself</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              What should the role be, before you decide who fills it?
            </h2>
            <p className="measure text-base leading-[1.68] text-muted">
              The job you are about to post, or the retainer you are about
              to sign, was probably written for a team AI has already
              changed. Drafting, routing, scoring and reporting used to take
              three people. Now it takes one person and a process legal can
              sign off on. The scarce work is the system: definitions,
              routing, attribution, the AI usage policy and the cadence. A
              posting that lists channels describes the job as it was.
            </p>
            <p className="measure mt-4 text-base leading-[1.68] text-muted">
              Deciding that first changes the cost of every option on this
              page. It is a smaller full-time hire, a shorter retainer, or a
              build with a known scope.{" "}
              <a href="/before-you-hire" className="border-b border-accent pb-px text-ink transition-colors hover:text-accent">
                There is a ten-question scorecard for the posting
              </a>
              , and{" "}
              <a href="/head-of-marketing-vs-marketing-manager" className="border-b border-accent pb-px text-ink transition-colors hover:text-accent">
                a page on which level to hire
              </a>
              .
            </p>
          </div>
        </section>

        <section className="border-t border-rule bg-band px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">Full-time</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              When is a full-time CMO the right answer?
            </h2>
            <p className="measure text-base leading-[1.68] text-muted">
              In three situations, and I would rather say so here than after
              a Diagnostic. If any of these describe you, hire the executive,
              and build the function they inherit while the search runs.
            </p>
            <div className="mt-11 grid gap-x-12 gap-y-9 sm:grid-cols-3">
              {fullTimeCases.map((c, i) => (
                <div key={c.t} className="border-t border-rule pt-5">
                  <p className="label mb-3">0{i + 1}</p>
                  <h3 className="display-xs mb-2.5 text-[19px]">{c.t}</h3>
                  <p className="text-[13.5px] leading-[1.65] text-muted">{c.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-rule px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">Fractional</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              When is a fractional CMO the right answer?
            </h2>
            <p className="measure text-base leading-[1.68] text-muted">
              In four situations. These are the companies I work with, and
              they have more in common with each other than with the
              product-led software company down the street.
            </p>
            <div className="mt-11 grid gap-x-12 gap-y-9 sm:grid-cols-2">
              {fractionalCases.map((c, i) => (
                <div key={c.t} className="border-t border-rule pt-5">
                  <p className="label mb-3">0{i + 1}</p>
                  <h3 className="display-xs mb-2.5 text-[19px]">{c.t}</h3>
                  <p className="text-[13.5px] leading-[1.65] text-muted">{c.b}</p>
                </div>
              ))}
            </div>
            <p className="measure mt-10 text-base leading-[1.68] text-muted">
              One caution on the retainer form specifically. It is open-ended
              by design, and most renew. If the engagement you are
              considering has no stated end, ask what would cause one, and
              what you would be holding on that day.
            </p>
          </div>
        </section>

        <section className="border-t border-rule bg-band px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">The third option</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              What does build then hire mean?
            </h2>
            <p className="measure text-base leading-[1.68] text-muted">
              It means putting the marketing function in place before the
              leader arrives, so the leader inherits it. The function is a
              specific set of things: positioning and the one-page
              go-to-market, one lead definition signed by sales, scoring and
              routing in the CRM, the AI production process and the policy
              legal signed, attribution, a five-metric scoreboard, and the
              weekly operating cadence. Built in the company&apos;s own
              tools, documented, and handed to a named person on the team.
            </p>
            <p className="measure mt-4 text-base leading-[1.68] text-muted">
              That is what{" "}
              <a href="/marketing-engine" className="border-b border-accent pb-px text-ink transition-colors hover:text-accent">
                The Marketing Engine
              </a>{" "}
              is for a company that already has a marketer: ninety days,
              fixed scope, an end date agreed in writing, after a two-week{" "}
              <a href="/diagnostic" className="border-b border-accent pb-px text-ink transition-colors hover:text-accent">
                Diagnostic
              </a>
              . For a founder who has not made the first marketing hire,{" "}
              <a href="/first-hire-plan" className="border-b border-accent pb-px text-ink transition-colors hover:text-accent">
                The First Hire Plan
              </a>{" "}
              designs the function in six weeks, before the posting goes up.
              Either way, the leader you hire afterward, full-time or
              fractional, starts with something that already works, and
              nothing depends on me staying.
            </p>
          </div>
        </section>

        <section className="bg-ink px-6 pt-24 pb-20 text-band sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8 text-white/70">Deciding</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)] text-white">
              Which should a startup choose? Three questions settle it.
            </h2>
            <div className="mt-11 grid gap-x-12 gap-y-8 sm:grid-cols-3">
              {decide.map((d) => (
                <div key={d.q}>
                  <h3 className="display-xs mb-2 border-t border-white/20 pt-4 text-[18px] text-white">{d.q}</h3>
                  <p className="text-[13.5px] leading-[1.6] text-white/60">{d.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-rule px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">Next</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              If the answer is build first, it starts with two weeks.
            </h2>
            <p className="measure text-base leading-[1.68] text-muted">
              The Diagnostic answers what the function should be, what AI
              should cover, what your people should hold, and what it costs,
              in two weeks, and the fee is credited in full toward the build.
              If the answer turns out to be a full-time hire, you will have a
              better job description than any recruiter would write, and I
              will say so.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <StartCta place="vs-full-time" />
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
