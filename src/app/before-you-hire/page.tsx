import type { Metadata } from "next";
import StartCta from "@/components/StartCta";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import JdScorecard from "@/components/JdScorecard";

const TITLE = "Before You Hire a Head of Marketing: Build the Function First";
const DESCRIPTION =
  "Hiring a Head of Marketing, VP of Marketing, or CMO? Your next marketing leader should inherit a system, not build one. A two-week Diagnostic during the search defines the role, the AI stack, and the ninety-day plan the hire walks into. Score your posting in ten questions.";
const URL = "https://neelythomson.com/before-you-hire";

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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${URL}#article`,
      headline: "Build the function. Then hire the person who runs it.",
      description: DESCRIPTION,
      url: URL,
      author: { "@id": "https://neelythomson.com/#person" },
      publisher: { "@id": "https://neelythomson.com/#person" },
      datePublished: "2026-11-03",
      dateModified: "2026-11-03",
    },
    {
      "@type": "FAQPage",
      "@id": `${URL}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Should we hire a fractional CMO before a full-time Head of Marketing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Do both, in order. A marketing-leader search takes months. A two-week Diagnostic during the search defines what the role runs, sets up the AI stack compliantly, and writes the ninety-day plan, so the hire inherits a working function instead of spending their first quarter building one. The hire still happens; it just lands on a system.",
          },
        },
        {
          "@type": "Question",
          name: "What should a new Head of Marketing inherit on day one?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A written definition of a qualified lead that sales agreed to, lead routing and scoring in the CRM, a five-metric scoreboard with real numbers in it, an AI stack with an owner and an approval step, a one-page go-to-market per business unit, and a weekly operating meeting that already runs. With those in place, the new leader's first quarter produces pipeline rather than infrastructure.",
          },
        },
        {
          "@type": "Question",
          name: "How do you shorten the onboarding of a new CMO or Head of Marketing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Build the function before they arrive. A new marketing leader who inherits a lead definition, routing, a working scoreboard, an owned AI stack, and a go-to-market per business unit spends their first month on the leader's job: strategy, board management, hiring and people management, and revenue forecasting. Without those, the same work waits until the fourth month while the leader builds infrastructure at a leader's salary.",
          },
        },
        {
          "@type": "Question",
          name: "How has AI changed the Head of Marketing job description?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Producing content got cheap, so postings that ask a leader to manage a large content team or own the blog and social calendar describe the job as it was. The scarce work now is the system: definitions, routing, scoring, attribution, the AI usage policy, and the cadence. A current posting names the number the role owns, the systems it runs, the AI tools already in place, and the regulations the function operates under.",
          },
        },
      ],
    },
  ],
};

const then = [
  "Build and manage a five-person content team",
  "Own the blog, the newsletter, and the social calendar",
  "Write and edit campaign copy",
  "Manage agency relationships",
  "Report MQLs to the board monthly",
];

const now = [
  "Own one number: pipeline, and the cost of each dollar of it",
  "Run the systems: one lead definition, routing, scoring, attribution, the scoreboard",
  "Own the AI stack: what it drafts, who signs, and the log that proves it",
  "Hold the regulated line: a written approval step before any claim ships",
  "Run the weekly loop where somebody decides something",
];

const quarter = [
  { d: "Weeks 1 to 4", w: "Learns the company. Meets sales. Discovers there are three definitions of a lead and nobody agrees on which one the board sees." },
  { d: "Weeks 5 to 8", w: "Audits the stack. Finds the AI tools somebody bought last spring, no process around them, no owner. Starts a tool evaluation." },
  { d: "Weeks 9 to 13", w: "Rebuilds reporting. Negotiates the lead definition with sales. Presents a plan to the board. Pipeline from this quarter: whatever was already in motion." },
];

const quarterWithFunction = [
  { d: "Weeks 1 to 4", w: "Opens a scoreboard with numbers in it. Meets sales over a lead definition both sides already signed. Walks into the first board meeting with a read, not a plan to produce one." },
  { d: "Weeks 5 to 8", w: "Sets the strategy: which segments, which channel bets, what gets killed. Decides who to hire under them, against a headcount plan that already accounts for what AI covers." },
  { d: "Weeks 9 to 13", w: "Forecasts pipeline for the next two quarters from attribution that already works. Manages people instead of tools. Pipeline from this quarter: theirs." },
];

const outputs = [
  {
    n: "01",
    t: "The role, scoped",
    b: "What the role actually runs at your company, the headcount under it set after deciding what AI covers, and a rewritten posting. The candidate pool changes when the posting changes.",
  },
  {
    n: "02",
    t: "The AI operating baseline",
    b: "The tools you already own, assigned an owner, a review step, and a written usage policy that matches the rules you operate under. Set up compliantly before anyone generates a word.",
  },
  {
    n: "03",
    t: "The ninety-day plan the hire walks into",
    b: "One lead definition sales agreed to, the scoreboard with numbers in it, and the first-quarter plan written down. Day one is a working document, not a blank page.",
  },
];

const inherits = [
  { t: "One lead definition", b: "Written, with deal-value thresholds, signed by sales. The fight the new leader would otherwise spend their first month on is already over." },
  { t: "Routing and scoring in the CRM", b: "Leads move to the right person on a rule, not a Slack message. Scoring reflects the definition above." },
  { t: "A scoreboard with numbers in it", b: "Five metrics, anchored on pipeline, owners named, wired to real data. The board one-pager is assembled from it." },
  { t: "An AI stack with an owner", b: "What AI may draft, what a person must sign, and the log that shows who reviewed what. Built to the rulebook that applies to you." },
  { t: "A go-to-market per business unit", b: "ICP, segments, channel bets, and the criteria for killing or scaling each one. One page each." },
  { t: "A weekly loop that already runs", b: "The Monday agenda with inputs, decisions, and owners. The operator you already have knows how to run it." },
];

const fit = [
  "You run a B2B software company that sells into regulated or institutional buyers: fintech, healthtech, edtech, govtech.",
  "A Head of Marketing, VP of Marketing, or CMO posting is open, or about to be, and the role reports to you or your COO.",
  "Marketing is sitting with you, or with a manager, until the hire lands.",
  "You'd rather the hire's first quarter produce pipeline than infrastructure.",
];

const notFit = [
  "You need an interim leader three days a week. I don't sell days, and the Diagnostic is scoped to end before or as the hire starts.",
  "You need campaigns run and content produced this quarter. That's an agency or a coordinator hire, and I can point you to people I trust.",
];

export default function BeforeYouHire() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <Breadcrumbs items={[{ name: "Before you hire", url: URL }]} />
      <main id="main">
        <section className="px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">Before you hire · For CEOs with an open marketing-leader search</p>
            <h1 className="display mb-8 max-w-[16ch] text-[clamp(2.2rem,4.8vw,3.8rem)]">
              Build the function. Then hire the person who runs it.
            </h1>
            <p className="measure text-[17px] leading-[1.62] text-muted">
              Your next marketing leader should inherit a system, not build
              one. While you search, I run a two-week Diagnostic that defines
              the role, sets up the AI stack compliantly, and writes the
              ninety-day plan. Your hire walks into it on day one.
            </p>
            <p className="measure mt-4 text-[17px] leading-[1.62] text-muted">
              The hire still happens. They just start with the function
              already built, so their first month goes to strategy, the
              board, the team, and the forecast instead of the CRM.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <StartCta place="before-you-hire" />
              <a href="#scorecard" className="border-b border-accent pb-0.5 text-sm font-medium text-ink transition-colors hover:text-accent">
                Score your posting in ten questions
              </a>
            </div>
          </div>
        </section>

        <section className="border-t border-rule px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">The posting</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              Most of them were written for a job that no longer exists.
            </h2>
            <p className="measure text-base leading-[1.68] text-muted">
              Read ten marketing-leader postings at B2B software companies this
              month and the same lines come up. They were right in 2022. Then
              producing content got cheap, and the scarce work moved to the
              plumbing underneath it.
            </p>
            <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
              <div>
                <p className="label mb-5">What the postings say</p>
                <ul>
                  {then.map((x) => (
                    <li key={x} className="relative border-t border-rule py-3 pl-4 text-[14.5px] leading-[1.6] text-faint line-through decoration-faint/60">
                      <span aria-hidden="true" className="absolute left-0.5 text-faint">&middot;</span>
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="label mb-5">What the role runs now</p>
                <ul>
                  {now.map((x) => (
                    <li key={x} className="relative border-t border-rule py-3 pl-4 text-[14.5px] leading-[1.6] text-muted">
                      <span aria-hidden="true" className="absolute left-0.5 text-accent">&middot;</span>
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="measure mt-10 text-[15px] leading-[1.7] text-muted">
              The headcount plan under the role follows the same shift. A
              posting budgeted for a team of five usually describes two people
              and a system. Deciding that before the hire is cheaper than
              asking the hire to decide it in their first quarter.
            </p>
          </div>
        </section>

        <section className="border-t border-rule bg-band px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">The first quarter</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              The most expensive ninety days of their tenure.
            </h2>
            <p className="measure text-base leading-[1.68] text-muted">
              Here is what a new marketing leader does in their first quarter
              when they inherit nothing. All of it at a leader&apos;s salary.
              None of it pipeline.
            </p>
            <div className="mt-9">
              {quarter.map((q, i) => (
                <div key={q.d} className={`grid gap-3 py-6 md:grid-cols-[170px_1fr] md:gap-10 ${i === 0 ? "" : "border-t border-rule"}`}>
                  <p className="label pt-1">{q.d}</p>
                  <p className="max-w-[62ch] text-[15px] leading-[1.7] text-muted">{q.w}</p>
                </div>
              ))}
            </div>
            <p className="measure mt-10 text-[15px] leading-[1.7] text-muted">
              Every item on that list can be done before they start, by
              someone who has done it before, in two weeks of diagnosis and
              a fixed build.
            </p>

            <div className="mt-14 border-t border-rule pt-8">
              <p className="label mb-6">The same quarter, with a function in place</p>
              <div>
                {quarterWithFunction.map((q, i) => (
                  <div key={q.d} className={`grid gap-3 py-6 md:grid-cols-[170px_1fr] md:gap-10 ${i === 0 ? "" : "border-t border-rule"}`}>
                    <p className="label pt-1">{q.d}</p>
                    <p className="max-w-[62ch] text-[15px] leading-[1.7] text-muted">{q.w}</p>
                  </div>
                ))}
              </div>
              <p className="measure mt-8 text-[15px] leading-[1.7] text-muted">
                That is what you&apos;re paying a leader for: strategy, the
                board, the team, the forecast. Build the function before
                they start and they get to it in month one instead of month
                four.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-rule px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">The Diagnostic, during the search · Two weeks</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              Three things your hire walks into.
            </h2>
            <p className="measure text-base leading-[1.68] text-muted">
              The{" "}
              <a href="/diagnostic" className="border-b border-accent pb-px text-ink transition-colors hover:text-accent">
                Diagnostic
              </a>{" "}
              is the same two-week audit I run for every client: stack,
              funnel, interviews, the last ninety days of requests. Run during
              a search, the readout is written for the hire as much as for
              you.
            </p>
            <div className="mt-11 grid gap-x-12 gap-y-9 sm:grid-cols-3">
              {outputs.map((o) => (
                <div key={o.t} className="border-t border-rule pt-5">
                  <p className="label mb-3">{o.n}</p>
                  <h3 className="display-xs mb-2.5 text-[19px]">{o.t}</h3>
                  <p className="text-[13.5px] leading-[1.65] text-muted">{o.b}</p>
                </div>
              ))}
            </div>
            <p className="measure mt-10 text-[15px] leading-[1.7] text-muted">
              If the readout shows the function needs building before anyone
              can run it, that&apos;s{" "}
              <a href="/marketing-engine" className="border-b border-accent pb-px text-ink transition-colors hover:text-accent">
                The Marketing Engine
              </a>
              : ninety days, fixed scope, timed to finish before or as the
              hire starts. If it shows you&apos;re ready to hire, you get a
              better posting and a plan, and the Diagnostic was the cheapest part
              of the search.
            </p>
          </div>
        </section>

        <section id="scorecard" className="scroll-mt-20 border-t border-rule bg-band px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">The scorecard</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              Ten questions to ask of the posting before it goes up.
            </h2>
            <p className="measure text-base leading-[1.68] text-muted">
              Open the posting as it reads today. Tick each line that is true.
              Nothing here is stored or sent anywhere.
            </p>
            <JdScorecard />
          </div>
        </section>

        <section className="bg-ink px-6 pt-24 pb-20 text-band sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8 text-white/70">Day one</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)] text-white">
              What the hire inherits.
            </h2>
            <p className="measure text-base leading-[1.68] text-white/60">
              I left a marketing function in June that kept running without
              me. This is what it had. It&apos;s what I build, in your tools,
              with the person you already have beside me.
            </p>
            <div className="mt-11 grid gap-x-12 gap-y-8 sm:grid-cols-2">
              {inherits.map((t) => (
                <div key={t.t}>
                  <h3 className="display-xs mb-2 border-t border-white/20 pt-4 text-[18px] text-white">{t.t}</h3>
                  <p className="text-[13.5px] leading-[1.6] text-white/60">{t.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-rule px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">Fit</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              This works when four things are true.
            </h2>
            <ul className="max-w-[70ch]">
              {fit.map((n) => (
                <li key={n} className="relative border-t border-rule py-3 pl-4 text-[14.5px] leading-[1.6] text-muted first:border-t-0">
                  <span aria-hidden="true" className="absolute left-0.5 text-accent">&middot;</span>
                  {n}
                </li>
              ))}
            </ul>
            <div className="mt-12 border-t border-rule pt-8">
              <p className="label mb-5">Where I&apos;ll point you elsewhere</p>
              <ul className="max-w-[70ch]">
                {notFit.map((n) => (
                  <li key={n} className="relative border-t border-rule py-3 pl-4 text-[14.5px] leading-[1.6] text-muted first:border-t-0">
                    <span aria-hidden="true" className="absolute left-0.5 text-accent">&middot;</span>
                    {n}
                  </li>
                ))}
              </ul>
            </div>
            <p className="measure mt-12 text-[15px] leading-[1.7] text-muted">
              One more thing, since it comes up: I&apos;m not a candidate for
              the role. I build the function and hand it off. The person you
              hire runs it, and I&apos;m always trying to work myself out of
              a job.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <StartCta place="before-you-hire" />
              <a href="/fractional-cmo-vs-full-time" className="border-b border-accent pb-0.5 text-sm font-medium text-ink transition-colors hover:text-accent">
                Fractional vs. full-time, side by side
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
