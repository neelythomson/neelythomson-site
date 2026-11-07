import type { Metadata } from "next";
import StartCta from "@/components/StartCta";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import Byline from "@/components/Byline";
import Figures, { type Figure } from "@/components/Figures";
import PageFaq from "@/components/PageFaq";

const TITLE = "The Sales and Marketing SLA for a Startup: Five Clauses on One Page";
const DESCRIPTION =
  "A sales and marketing SLA for a 10 to 40 person software startup: what it is, the five clauses (lead definition, marketing's volume commitment, sales response time, feedback and recycling, the review cadence), what each one prevents, and how to get it signed.";
const URL = "https://neelythomson.com/sales-marketing-sla-startup";
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
    n: "7 times",
    t: "more likely to have a qualifying conversation with a decision maker: that was the edge for firms that contacted a lead within an hour of the inquiry, against firms that waited one hour more. Against a day's wait, more than 60 times",
    s: "Harvard Business Review, The Short Life of Online Sales Leads",
    href: "https://hbr.org/2011/03/the-short-life-of-online-sales-leads",
    note: "Oldroyd, McElheran and Elkington, 2011; about 1.25 million leads",
  },
  {
    n: "42 hours",
    t: "was the average response time among the 2,241 US companies audited with a test lead; 37% responded within an hour and 23% never responded at all. The response clause exists because the default is this",
    s: "Harvard Business Review, The Short Life of Online Sales Leads",
    href: "https://hbr.org/2011/03/the-short-life-of-online-sales-leads",
    note: "2011",
  },
  {
    n: "15% and 8%",
    t: "of ARR is what private B2B SaaS companies spend on selling and on marketing respectively, at the median. The SLA is the document that says what those two budgets owe each other",
    s: "SaaS Capital, Spending Benchmarks for Private B2B SaaS Companies 2026",
    href: "https://www.saas-capital.com/wp-content/uploads/2026/06/Spending-Benchmarks-for-Private-B2B-SaaS-Companies-2026-W1.pdf",
  },
  {
    n: "2.6 years",
    t: "is the average marketing leader's tenure at VC-backed companies. The lead-definition argument is the most common way the first year of that gets spent",
    s: "CMO Huddles and Findem CMO tenure study, reported by MediaPost",
    href: "https://www.mediapost.com/publications/article/418386/cmo-tenure-inches-up-to-26-years.html",
    note: "2026",
  },
  {
    n: "4.1 years",
    t: "is the average CMO tenure at S&P 500 companies, against 5.0 years for the C-suite. Marketing is judged on a number that sales partly controls; the SLA is how that becomes fair",
    s: "Spencer Stuart CMO Tenure Study 2026",
    href: "https://www.aaaa.org/research-report/cmo-tenure-study/",
    note: "summary at the 4A's",
  },
];

const faq = [
  {
    q: "What is a sales and marketing SLA?",
    a: "A one-page agreement between whoever runs marketing and whoever runs sales that says what a qualified lead is, how many marketing will produce, how fast sales will act on each one, what happens to the ones that are not ready, and when the two sides review the numbers. It is signed by both, and it is the reference every pipeline argument goes back to.",
  },
  {
    q: "Does a startup with one salesperson need a sales and marketing SLA?",
    a: "Yes, and it is easier to write with one salesperson than with ten. The document is a paragraph and five numbers. Its value is that it exists before the first disagreement about whether a lead was any good, which at a startup arrives in the first month marketing produces anything. Written early, it is a page. Written late, it is a quarter of negotiation.",
  },
  {
    q: "What response time should a sales and marketing SLA require?",
    a: "The research is clear that the first hour matters more than anything after it: contacting a lead within an hour made firms about seven times more likely to reach a decision maker than waiting one more hour. For a startup, a first attempt within one business hour and a defined number of attempts over the following days is realistic and worth writing down. The number matters less than the fact that it is agreed and measured.",
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
      about: ["Sales and marketing SLA", "Lead definition", "Sales and marketing alignment", "Startup marketing operations"],
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

const clauses = [
  {
    n: "01",
    t: "The lead definition",
    says: "What a qualified lead is: the firmographics (size, segment, geography), the signal (what they did), and the deal-value floor below which sales will not work it. One paragraph. Examples of what qualifies and what does not.",
    prevents: "Two pipeline numbers reported to the same board. Marketing counts a download; sales counts a meeting; the board believes sales. Every marketing number is arguable until this paragraph exists.",
  },
  {
    n: "02",
    t: "Marketing's volume commitment",
    says: "How many qualified leads marketing will deliver per month, by segment if the segments differ, derived from the pipeline target and the win rate. A number, not a direction.",
    prevents: "A marketing function judged on activity. With a number agreed, a quiet month is a conversation about channels; without one, it is a conversation about whether marketing is working at all.",
  },
  {
    n: "03",
    t: "Sales response time and attempts",
    says: "How fast sales makes the first attempt on a qualified lead, how many attempts over how many days, and through which channels, before the lead is returned. Measured in the CRM, not remembered.",
    prevents: "Leads going cold in a queue. The research puts the average response at 42 hours and nearly a quarter of inquiries never answered. Marketing's budget bought those leads; the clause says what happens to them inside the first hour.",
  },
  {
    n: "04",
    t: "Feedback and recycling",
    says: "What sales does with a lead that is not ready: a reason code from a short list, and a return to marketing for nurture rather than a silent drop. What marketing does with it next, and when it may come back.",
    prevents: "The black hole. Without reason codes, marketing cannot tell which channel produces leads sales rejects, and cannot fix it. Without recycling, the budget that produced the lead is spent once and lost.",
  },
  {
    n: "05",
    t: "The review cadence",
    says: "A fixed meeting, weekly at a startup, with four numbers on the table: leads delivered against commitment, response time against the clause, conversion to opportunity, and the top rejection reasons. Owners named. Fifteen minutes.",
    prevents: "The annual argument. Reviewed weekly, a missed number is a small correction. Reviewed never, it is a quarter of blame arriving at the board meeting.",
  },
];

export default function SalesMarketingSla() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <Breadcrumbs items={[{ name: "Your first marketing hire", url: "https://neelythomson.com/first-marketing-hire" }, { name: "The sales and marketing SLA for a startup", url: URL }]} />
      <main id="main">
        <section className="px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">A guide for founders · The one-page agreement</p>
            <h1 className="display mb-8 max-w-[16ch] text-[clamp(2.2rem,4.8vw,3.8rem)]">
              The sales and marketing SLA, for a startup.
            </h1>
            <p className="measure text-[17px] leading-[1.62] text-muted">
              A sales and marketing SLA is a one-page agreement between
              whoever runs sales and whoever runs marketing. It says what a
              qualified lead is, how many marketing will produce, how fast
              sales will act on each one, what happens to the ones that are
              not ready, and when the two sides look at the numbers
              together. Both sign it. At a software startup of ten to forty
              people it is the single document that prevents the most
              expensive argument the company will have about pipeline.
            </p>
            <p className="measure mt-4 text-[17px] leading-[1.62] text-muted">
              This page explains the five clauses, what each one prevents,
              the numbers that go in them, and how to get the thing signed
              in a week. I have sat on both sides of the table it is written
              at, including a stretch running sales and marketing at once,
              which is the fastest way to learn why the page has to exist.
            </p>
            <Byline date={PUBLISHED} label="Published" className="mt-6" />
          </div>
        </section>

        <section className="border-t border-rule px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">Why</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              Why does a startup this small need a sales and marketing SLA?
            </h2>
            <p className="measure text-base leading-[1.68] text-muted">
              Because the argument it prevents arrives early and costs a
              quarter. The first month marketing produces anything, a
              salesperson calls one of the leads, finds it is a student with
              a free email address, and from then on &ldquo;marketing
              leads&rdquo; is said with a tone. Marketing, meanwhile, watches
              the leads it paid for sit in a queue for two days. Neither side
              is wrong, and nothing is written down, so the dispute runs
              until someone senior settles it, usually at the board meeting,
              usually against marketing.
            </p>
            <p className="measure mt-4 text-base leading-[1.68] text-muted">
              At ten to forty people the agreement is a paragraph and five
              numbers, and the two people who need to sign it sit twenty
              feet apart. That is the moment to write it. At a hundred
              people it is a project.
            </p>
          </div>
        </section>

        <section className="border-t border-rule bg-band px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">The five clauses</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              What goes in a sales and marketing SLA?
            </h2>
            <p className="measure text-base leading-[1.68] text-muted">
              Five clauses, in this order. Each one is a few sentences, and
              each one exists to stop a specific thing from happening.
            </p>
            <div className="mt-9">
              {clauses.map((c, i) => (
                <div key={c.n} className={`py-8 ${i === 0 ? "" : "border-t border-rule"}`}>
                  <p className="label mb-3">{c.n}</p>
                  <h3 className="display-xs mb-5 text-[22px]">{c.t}</h3>
                  <div className="grid gap-x-12 gap-y-5 md:grid-cols-2">
                    <div>
                      <p className="label mb-2">What it says</p>
                      <p className="text-[14px] leading-[1.7] text-muted">{c.says}</p>
                    </div>
                    <div>
                      <p className="label mb-2">What it prevents</p>
                      <p className="text-[14px] leading-[1.7] text-muted">{c.prevents}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-rule px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">The numbers</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              What numbers go in it?
            </h2>
            <p className="measure text-base leading-[1.68] text-muted">
              Five, and four of them come from the CRM. The deal-value floor
              in the lead definition is the smallest deal sales will work,
              which the last year of closed deals shows. The volume
              commitment is next year&apos;s pipeline target, divided by the
              win rate, multiplied by marketing&apos;s share. The response
              time is a decision rather than a measurement, and the research
              makes it an easy one: the first hour is worth seven times the
              second. The attempt count is whatever the sales lead will
              commit to and the CRM can log. The review is weekly.
            </p>
            <p className="measure mt-4 text-base leading-[1.68] text-muted">
              Every number is wrong at first. That is fine; the point of
              the weekly review is to change them with evidence. A clause
              nobody can measure is the one to cut.
            </p>
            <Figures className="mt-12 border-t border-rule pt-8" label="The numbers behind this page" items={figures} />
          </div>
        </section>

        <section className="border-t border-rule bg-band px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">Getting it signed</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              How do you get a sales lead to sign it?
            </h2>
            <p className="measure text-base leading-[1.68] text-muted">
              Write it yourself, short, and lead with the clause that is in
              their interest. Sales wants fewer bad leads; the lead
              definition gives them a veto over what counts. Sales wants a
              forecastable number; the volume commitment is one. The response
              clause is the one they will push on, so make it the one they
              name: ask what they can commit to, write that down, and agree
              to review it in a month. A founder who hands over a draft and
              asks for one signature usually has it in a week. A founder who
              asks sales to co-write it from a blank page has a project.
            </p>
            <p className="measure mt-4 text-base leading-[1.68] text-muted">
              If it takes longer than a week, you have found the first thing
              a new marketing hire would have spent a quarter on, and you
              have found it while you still have the standing to settle it.
            </p>
          </div>
        </section>

        <section className="bg-ink px-6 pt-24 pb-20 text-band sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8 text-white/70">On one page</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)] text-white">
              The whole agreement, as a skeleton.
            </h2>
            <div className="mt-11 grid gap-x-12 gap-y-8 sm:grid-cols-2">
              {[
                { k: "A qualified lead is", v: "A [role] at a [segment] company of [size] in [geography] who has [signal], where the likely deal is at least [floor]. Not: [two examples]." },
                { k: "Marketing will deliver", v: "[N] qualified leads a month, [by segment], reviewed quarterly against the pipeline target." },
                { k: "Sales will", v: "Make a first attempt within [one business hour], [N] attempts over [N] days by [channels], logged in the CRM, before returning the lead." },
                { k: "A lead that is not ready", v: "Gets a reason code from [list of five] and returns to marketing for nurture. It may re-qualify after [period]." },
                { k: "We review", v: "Every [weekday] for fifteen minutes: delivered vs committed, response time, conversion to opportunity, top rejection reasons. Owners: [names]." },
                { k: "Signed", v: "[Sales lead], [Marketing owner], [date]. Revised with evidence, not by argument." },
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
            <p className="label mb-8">Where it sits</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              The SLA is one of six things a first marketer should inherit.
            </h2>
            <p className="measure text-base leading-[1.68] text-muted">
              It is deliverable five of{" "}
              <a href="/first-hire-plan" className="border-b border-accent pb-px text-ink transition-colors hover:text-accent">
                The First Hire Plan
              </a>
              , signed by sales before the hire&apos;s first day, and it is
              part of the operating system in{" "}
              <a href="/marketing-engine" className="border-b border-accent pb-px text-ink transition-colors hover:text-accent">
                The Marketing Engine
              </a>{" "}
              for a company that already has a marketer. The rest of the
              day-one list is{" "}
              <a href="/what-your-first-marketer-inherits" className="border-b border-accent pb-px text-ink transition-colors hover:text-accent">
                here
              </a>
              , and the full guide to the first hire is{" "}
              <a href="/first-marketing-hire" className="border-b border-accent pb-px text-ink transition-colors hover:text-accent">
                here
              </a>
              .
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <StartCta place="sla" />
            </div>
          </div>
        </section>
        <PageFaq items={faq} />
      </main>
      <Footer />
    </>
  );
}
