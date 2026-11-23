import type { Metadata } from "next";
import StartCta from "@/components/StartCta";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import Byline from "@/components/Byline";
import ReadNext from "@/components/ReadNext";
import Figures, { type Figure } from "@/components/Figures";
import PageFaq from "@/components/PageFaq";

const TITLE = "When to Make Your First Marketing Hire: Three Signals for Founders";
const DESCRIPTION =
  "When a software startup should hire its first marketer: the three signals that say it is time, a quick way to check each one, what hiring too early or too late costs, and why funding stage is a weak guide.";
const URL = "https://neelythomson.com/when-to-hire-first-marketer";
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

const signals = [
  {
    n: "01",
    t: "The founder's hours",
    b: "You're doing marketing between fundraising, product and the pipeline review, and your own job is the one that slips.",
    check: "Add up the hours you spent on marketing last week. Then name the thing you didn't get to because of them.",
  },
  {
    n: "02",
    t: "A channel with no owner",
    b: "Something works (outbound to one segment, a partner's newsletter, a webinar that keeps producing meetings) and it works because one person remembers to run it.",
    check: "Name the channel that produced the most meetings last quarter. Then name who would keep it running if that person were out for a month.",
  },
  {
    n: "03",
    t: "Sales is waiting",
    b: "You have a salesperson, or two, and they're sourcing their own pipeline. Every week of that is a salesperson's salary spent on prospecting.",
    check: "Ask each rep how much of their open pipeline they sourced themselves. If the answer is nearly all of it, marketing has an empty seat.",
  },
];

const figures: Figure[] = [
  {
    n: "8%",
    t: "of startups made a marketer their first hire after the founders. 48% hired an engineer first and 19% a salesperson, so by the time marketing arrives the company already has habits",
    s: "HubSpot Go-To-Market Report for Startups",
    href: "https://www.hubspot.com/startups/go-to-market-startups/2019",
    note: "2019 survey",
  },
  {
    n: "39 days",
    t: "is the median time to fill a non-executive role, from requisition to accepted offer. A leadership search runs longer. Start the search when the first signal shows up, not the third",
    s: "SHRM Recruiting Benchmarking 2026",
    href: "https://www.shrm.org/mena/topics-tools/research/recruiting-benchmarking/full-data-brief",
  },
  {
    n: "2.6 years",
    t: "is the average marketing leader's tenure at VC-backed companies, the shortest of any ownership type. A hire made in a hurry, into a role nobody defined, is how a lot of those tenures start",
    s: "CMO Huddles and Findem CMO tenure study, reported by MediaPost",
    href: "https://www.mediapost.com/publications/article/418386/cmo-tenure-inches-up-to-26-years.html",
    note: "2026",
  },
];

const faq = [
  {
    q: "When should a founder hire their first marketing leader?",
    a: "When one of three things is true: the founder's marketing hours are crowding out the founder's job, a channel is working and has no owner, or a sales team exists and is waiting on marketing for pipeline. Whether that first hire is a leader or a manager is a separate question, and it depends on who will set strategy for the next twelve months.",
  },
  {
    q: "Is it too early to hire a marketer?",
    a: "It is too early if none of the three signals is true. A marketer hired before any channel works, before sales exists and while the founder still has the hours spends the first two quarters looking for something to run. Until then, keep marketing with the founder and use contractors for the pieces that need hands.",
  },
  {
    q: "Should funding stage decide when to hire the first marketer?",
    a: "No. Stage is a rough proxy for the three signals. A seed company with two salespeople sourcing their own pipeline is ready. A Series A company whose founder still enjoys running marketing and has the hours for it can wait. Stage is more useful for choosing the level of the hire than the timing.",
  },
  {
    q: "How long does it take to hire a first marketer?",
    a: "Plan on two to three months from posting to start date. SHRM's 2026 benchmark puts the median time to fill a non-executive role at 39 days, a leadership search runs longer, and most candidates give notice after accepting. That window is long enough to decide the role, the plan, the budget and the lead definition before the person arrives.",
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
      about: ["First marketing hire", "Startup hiring", "Startup marketing", "B2B SaaS marketing"],
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

export default function WhenToHire() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <Breadcrumbs items={[{ name: "Your first marketing hire", url: "https://neelythomson.com/first-marketing-hire" }, { name: "When to make the hire", url: URL }]} />
      <main id="main">
        <section className="px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">A guide for founders · Timing</p>
            <h1 className="display mb-8 max-w-[16ch] text-[clamp(2.2rem,4.8vw,3.8rem)]">
              When to make your first marketing hire.
            </h1>
            <p className="measure text-[17px] leading-[1.62] text-muted">
              Make your first marketing hire when one of three things is true:
              marketing is crowding out your own job, a channel is working and
              nobody owns it, or your salespeople are sourcing their own
              pipeline. Before any of those, the hire has nothing to run.
              After all three, you have usually been losing deals for a
              quarter.
            </p>
            <p className="measure mt-4 text-[17px] leading-[1.62] text-muted">
              This page is for the founder deciding whether it&apos;s time.
              Each signal comes with a check you can run this week, from your
              own calendar and your own CRM.
            </p>
            <Byline date={PUBLISHED} label="Published" className="mt-6" />
            <ReadNext
              className="mt-8"
              next={{
                lead: "Already know it's time?",
                href: "/head-of-marketing-vs-marketing-manager",
                text: "Head of marketing, or marketing manager",
              }}
              step={{
                lead: "Want the role, the plan and the budget set before the posting goes up?",
                href: "/first-hire-plan",
                text: "The First Hire Plan",
              }}
            />
          </div>
        </section>

        <section className="border-t border-rule px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">The three signals</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              What tells you it&apos;s time?
            </h2>
            <p className="measure text-base leading-[1.68] text-muted">
              One is enough. Founders tend to wait for all three and then
              hire in a hurry, which is how a role ends up posted before
              anyone has decided what it is.
            </p>
            <div className="mt-9">
              {signals.map((s, i) => (
                <div key={s.t} className={`grid gap-4 py-7 md:grid-cols-[220px_1fr] md:gap-10 ${i === 0 ? "" : "border-t border-rule"}`}>
                  <div>
                    <p className="text-[12.5px] font-medium">{s.t}</p>
                    <p className="label mt-1 tnum">{s.n}</p>
                  </div>
                  <div>
                    <p className="max-w-[62ch] text-[15px] leading-[1.7] text-muted">{s.b}</p>
                    <p className="mt-3 max-w-[62ch] text-[15px] leading-[1.7] text-ink">
                      <span className="label mr-3">The check</span>
                      {s.check}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-rule bg-band px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">Too early</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              What if none of the three is true yet?
            </h2>
            <p className="measure text-base leading-[1.68] text-muted">
              Then wait. A marketer hired before a channel works, before
              sales exists, and while you still have the hours, spends two
              quarters looking for something to run. You pay a salary for
              the search you could have run yourself, with better access to
              customers.
            </p>
            <p className="measure mt-4 text-base leading-[1.68] text-muted">
              Keep marketing with you until you can say who buys and why,
              from deals that actually closed. Use contractors for the
              pieces that need hands (the website, the design, the list).
              The first hire should own something that already works.
            </p>
          </div>
        </section>

        <section className="border-t border-rule px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">Too late</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              What does waiting cost?
            </h2>
            <p className="measure text-base leading-[1.68] text-muted">
              Each signal costs money every week it goes unaddressed. Your
              hours are the most expensive in the company. A channel with no
              owner stops the first month its owner gets busy. And once
              sales exists, marketing without an owner is the most expensive
              seat in the company, and it&apos;s empty.
            </p>
            <p className="measure mt-4 text-base leading-[1.68] text-muted">
              There is a quieter cost too. The longer marketing runs without
              an owner, the more habits the hire inherits: a lead definition
              nobody wrote down, six half-configured tools, a board that has
              stopped expecting a number.
            </p>
            <Figures className="mt-12 border-t border-rule pt-8" label="The numbers behind this page" items={figures} />
          </div>
        </section>

        <section className="border-t border-rule bg-band px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">Stage</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              Does revenue or funding stage decide it?
            </h2>
            <p className="measure text-base leading-[1.68] text-muted">
              Less than the advice suggests. Most guides give you a revenue
              number or a round. Those are stand-ins for the three signals,
              and they miss in both directions. A seed company with two
              salespeople sourcing their own pipeline is ready now. A Series
              A company whose founder still likes running marketing, and has
              the hours, can wait.
            </p>
            <p className="measure mt-4 text-base leading-[1.68] text-muted">
              Stage is more useful for the next decision, which is the level
              of the hire.{" "}
              <a href="/head-of-marketing-vs-marketing-manager" className={link}>
                Head of marketing, or marketing manager
              </a>{" "}
              covers that one.
            </p>
          </div>
        </section>

        <section className="border-t border-rule px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">If it&apos;s time</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              The search is the window to get ready.
            </h2>
            <p className="measure text-base leading-[1.68] text-muted">
              A search takes a couple of months. That&apos;s enough time to
              decide the six things the hire should walk into: the role and
              its level, a twelve-month plan, a budget by quarter, the
              stack, one lead definition your sales lead has signed, and a
              scoreboard with baselines. The checklist is at{" "}
              <a href="/what-your-first-marketer-inherits" className={link}>
                what your first marketer should inherit on day one
              </a>
              , and the full guide to the hire is{" "}
              <a href="/first-marketing-hire" className={link}>
                here
              </a>
              .
            </p>
            <p className="measure mt-4 text-base leading-[1.68] text-muted">
              If you&apos;d like those six decided with you,{" "}
              <a href="/first-hire-plan" className={link}>
                The First Hire Plan
              </a>{" "}
              does it in six weeks, fixed fee, finished before the posting
              goes up.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <StartCta place="when-to-hire" />
            </div>
          </div>
        </section>
        <PageFaq items={faq} />
      </main>
      <Footer />
    </>
  );
}
