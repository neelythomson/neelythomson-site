import type { Metadata } from "next";
import StartCta from "@/components/StartCta";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

const TITLE = "Fractional CMO for Credit Unions: Growth Under Exam Rules";
const DESCRIPTION =
  "Fractional CMO for credit unions, and for the CUSOs and fintechs that sell to them. One lead definition across member and business lines, compliance inside the workflow, AI with guardrails.";
const URL = "https://neelythomson.com/fractional-cmo-credit-unions";
const PUBLISHED = "2026-11-02";
const MODIFIED = "2026-11-02";

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
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
};

const segments = [
  {
    n: "01",
    t: "Credit unions with a growth mandate",
    b: "You are adding commercial lending, indirect auto, or a new field of membership, and the board wants member growth it can see on one page. There is a marketing lead on staff, and the agency retainer is up for review.",
  },
  {
    n: "02",
    t: "CUSOs and fintechs selling to credit unions",
    b: "You sell cores, digital banking, payments, lending, or financial wellness into credit unions. The buyer brings compliance, IT, and the board into the deal, and the sales cycle runs on the examination and budget calendar, not yours.",
  },
  {
    n: "03",
    t: "Two audiences, one engine",
    b: "Member growth on one side, SEG employers, indirect dealers, or business members on the other. Two buyers, two funnels, and a lead definition that has to hold for both without doubling the team.",
  },
];

const differences = [
  {
    t: "Every rate and claim is a regulated statement",
    b: "NCUA, UDAAP, Truth in Savings and Regulation Z decide what a landing page can say. If compliance reviews once at the end, the review queue sets your campaign calendar. If each claim carries its evidence and there is a written rule for which claims need review, compliance is a step in the workflow instead. At a payments company that change took 60% of the manual work out of campaigns.",
  },
  {
    t: "The examination calendar sets the rhythm",
    b: "Budgets are annual, exams are scheduled, and the supervisory committee meets on its own cadence. Channel bets and sequencing get planned against that calendar, so pipeline is warm when the budget window opens instead of a campaign landing in a quarter nobody is approving spend.",
  },
  {
    t: "Agencies sell campaigns. What's missing is underneath.",
    b: "Most credit union marketing budgets go to an agency that produces campaigns. What's usually missing: one definition of a qualified lead, scoring and routing in the CRM, and a way to say which channel produced loans last quarter. That is the system, and it stays when the retainer ends.",
  },
  {
    t: "The board wants a one-pager, not a dashboard",
    b: "A volunteer board and a supervisory committee do not want to read a marketing dashboard. They want five numbers anchored on loans and deposits, with the channel P&L behind them, assembled from a scoreboard rather than built the night before.",
  },
  {
    t: "The AI tools need an approved-claims library first",
    b: "Canva, Jasper and the AI in your marketing platform are fine tools. Under NCUA and UDAAP they are a liability until there is an approved-claims library, a prompt library built from it, and a review step every asset passes through. With that in place, the same tools gave back 60% of the team's time.",
  },
];

const build = [
  {
    t: "A messaging kit built from verifiable claims",
    b: "Positioning by audience (member, business member, SEG employer, indirect partner), proof points with their substantiation, the required disclosures attached to each claim, and the list of claims compliance has already said no to.",
  },
  {
    t: "One lead definition across member and business lines",
    b: "A written definition of a qualified lead for each line, with the thresholds that matter to lending, scoring and routing built into the CRM, and a service-level agreement between marketing and the lending and business development teams.",
  },
  {
    t: "Compliance inside the workflow",
    b: "Review states, approval routing, and claim substantiation inside the workflow. The compliance officer sees the claim, its disclosure, and its evidence together, in the tool, which is why review time stops setting the calendar.",
  },
  {
    t: "An AI production process with the guardrails first",
    b: "Brief template, subject-matter-expert step, prompt and template libraries built from the messaging kit, a locked brand kit, and a written quality bar. Your team and your agency produce inside it.",
  },
  {
    t: "A scoreboard the board and the supervisory committee both accept",
    b: "Five metrics anchored on funded loans, new deposits, and cost per funded account by channel, and a one-pager that assembles itself, so the monthly conversation is about what moved and why.",
  },
];

const faq = [
  {
    q: "What does a fractional CMO for credit unions do?",
    a: "Builds the systems under the marketing: positioning from verifiable claims with disclosures attached, one lead definition across member and business lines, compliance review inside the workflow, an AI production process with guardrails, and a scoreboard that counts loans and deposits. The agency keeps producing campaigns. The system decides which ones ship, where they go, and whether they worked.",
  },
  {
    q: "Can a credit union use AI in marketing under NCUA and UDAAP rules?",
    a: "Yes, with the guardrails built first: an approved-claims library with the required disclosures, a prompt library built from it, and a review step every asset passes through. I built AI content production this way at a B2B payments company under NACHA and CFPB, with legal inside the workflow. Manual campaign work fell 60%.",
  },
  {
    q: "What does a fractional CMO for a credit union cost compared with an agency retainer?",
    a: "For comparison, market-rate fractional CMO retainers in the US run $10,000 to $12,000 a month, usually with a three to six month minimum. An agency retainer for a mid-sized credit union often costs the same and produces campaigns, not systems. I work differently: a two-week Diagnostic at a fixed fee, then a ninety-day build with a fixed scope and a fixed end date. The proposal shows that price next to the retainer and full-time options so you can compare them.",
  },
  {
    q: "How does the engagement process work?",
    a: "Two weeks for the Diagnostic: an audit of your stack, your funnel by line of business, and how work moves through compliance today. You get a findings document, a board one-pager, and a priced proposal. Then ninety days for the build, in your own tools, with a named person on your team running each system before it ends. Whether I stay on afterward is your call.",
  },
  {
    q: "Do you work with CUSOs and fintechs that sell to credit unions?",
    a: "Yes. Most of my experience is on that side of the sale. I ran marketing for four years at a B2B payments company that sold to banks and credit unions, so compliance, IT, the board and the budget calendar are what the system is built around. The fintech version of this page is at fractional CMO for fintech.",
  },
  {
    q: "Which credit unions is this built for?",
    a: "Credit unions between roughly $500 million and $5 billion in assets, with a growth mandate and a marketing lead on staff who will run the system after the build. It works when the next twelve months depend on marketing producing funded loans and new accounts, and when you are willing to measure the agency on the same scoreboard as every other channel.",
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
      datePublished: PUBLISHED,
      dateModified: MODIFIED,
      author: { "@id": "https://neelythomson.com/#person" },
      publisher: { "@id": "https://neelythomson.com/#person" },
      isPartOf: { "@id": "https://neelythomson.com/#website" },
      about: ["Fractional CMO", "Credit union marketing", "NCUA", "UDAAP", "CUSO marketing", "Financial services marketing"],
    },
    {
      "@type": "Service",
      "@id": `${URL}#service`,
      name: "Fractional CMO for credit unions",
      serviceType: "Fractional CMO",
      provider: { "@id": "https://neelythomson.com/#person" },
      areaServed: "US",
      audience: { "@type": "BusinessAudience", name: "Credit unions, CUSOs, and fintechs selling to credit unions" },
      url: URL,
      description: DESCRIPTION,
      offers: {
        "@type": "Offer",
        name: "Marketing Diagnostic",
        url: "https://neelythomson.com/diagnostic",
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

function slug(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9\s]/g, "").trim().replace(/\s+/g, "-");
}

export default function FractionalCMOCreditUnions() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <Breadcrumbs items={[{ name: "Fractional CMO for credit unions", url: URL }]} />
      <main id="main">
        <section className="px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">
              Fractional CMO · Credit unions and CUSOs · Published{" "}
              <time dateTime={PUBLISHED}>November 2026</time>
            </p>
            <h1 className="display mb-8 max-w-[18ch] text-[clamp(2.2rem,4.8vw,3.8rem)]">
              Fractional CMO for credit unions: growth that clears compliance.
            </h1>
            <p className="measure text-[17px] leading-[1.62] text-muted">
              I build the marketing system under your agency: one lead
              definition across member and business lines, compliance review
              inside the workflow, AI production with guardrails, and a
              scoreboard that counts funded loans and new deposits. The same
              system works for CUSOs and fintechs selling to credit unions. The
              buyer is the same.
            </p>
            <p className="measure mt-4 text-[17px] leading-[1.62] text-muted">
              I ran marketing for four years at a B2B payments company that
              sold to banks and credit unions, under NACHA and CFPB. This page
              is what I learned about marketing to institutions that answer to
              an examiner.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <StartCta place="credit-unions" />
              <a href="/fractional-cmo-fintech" className="border-b border-accent pb-0.5 text-sm font-medium text-ink transition-colors hover:text-accent">
                The fintech version of this page
              </a>
            </div>
          </div>
        </section>

        <div className="border-t border-rule bg-band px-6 py-13 sm:px-10">
          <div className="mx-auto max-w-[960px]">
            <div className="mb-9 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
              <p className="label">Results · B2B fintech payments, sold to banks and credit unions, under NACHA and CFPB</p>
              <a href="/work/fintech-payments" className="border-b border-accent pb-px text-[13px] text-ink transition-colors hover:text-accent">
                The case study &rarr;
              </a>
            </div>
            <div className="grid gap-9 sm:grid-cols-3">
              {[
                { v: "60%", l: "of manual campaign work removed, with legal inside the workflow" },
                { v: "5:1", l: "LTV:CAC over four years" },
                { v: "15%", l: "lift in MQL-to-opportunity conversion" },
              ].map((p) => (
                <div key={p.v} className="border-t border-rule pt-5">
                  <div className="display tnum text-[40px] leading-none">{p.v}</div>
                  <p className="mt-[9px] max-w-[24ch] text-[12.5px] leading-[1.45] text-muted">{p.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <section className="border-t border-rule px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">Who this is for</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              Credit unions with a growth mandate, and the companies that sell to them.
            </h2>
            <p className="measure text-base leading-[1.68] text-muted">
              The common thread is the buyer. Whether the member is signing or
              the credit union is, compliance, IT, and the board are in the
              decision, and the marketing engine has to be built for them as
              much as for the person who clicked.
            </p>
            <div className="mt-11 grid gap-x-12 gap-y-9 md:grid-cols-3">
              {segments.map((s) => (
                <div key={s.t} className="border-t border-rule pt-5">
                  <p className="label mb-3">{s.n}</p>
                  <h3 className="display-xs mb-2.5 text-[19px]">{s.t}</h3>
                  <p className="text-[13.5px] leading-[1.65] text-muted">{s.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-rule px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">What changes for a credit union</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              Five things that are different here.
            </h2>
            <div className="mt-11">
              {differences.map((d, i) => (
                <div key={d.t} className={`grid gap-4 py-7 md:grid-cols-[260px_1fr] md:gap-10 ${i === 0 ? "" : "border-t border-rule"}`}>
                  <h3 className="display-xs text-[19px]">{d.t}</h3>
                  <p className="max-w-[62ch] text-[15px] leading-[1.7] text-muted">{d.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-ink px-6 pt-24 pb-20 text-band sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8 text-white/70">What I build first</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)] text-white">
              The credit union build order.
            </h2>
            <p className="measure text-base leading-[1.68] text-white/60">
              The Diagnostic sets the order for your credit union. This is the
              usual shape.
            </p>
            <div className="mt-11">
              {build.map((b, i) => (
                <div key={b.t} className={`grid gap-3 py-6 md:grid-cols-[60px_1fr] md:gap-6 ${i === 0 ? "" : "border-t border-white/20"}`}>
                  <span className="label tnum pt-1 text-white/70">0{i + 1}</span>
                  <div>
                    <h3 className="display-xs mb-1.5 text-[18px] text-white">{b.t}</h3>
                    <p className="max-w-[62ch] text-[14px] leading-[1.65] text-white/60">{b.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-rule px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">Questions</p>
            {faq.map((f, i) => (
              <div key={f.q} id={slug(f.q)} className={`scroll-mt-20 grid gap-3 py-7 md:grid-cols-[260px_1fr] md:gap-10 ${i === 0 ? "" : "border-t border-rule"}`}>
                <h2 className="display-xs text-[19px]">{f.q}</h2>
                <p className="max-w-[62ch] text-[15px] leading-[1.7] text-muted">{f.a}</p>
              </div>
            ))}
            <p className="mt-9 text-[13px] text-faint">
              The three layers of the engine, defined, at{" "}
              <a href="/marketing-engine" className="border-b border-accent pb-px text-ink transition-colors hover:text-accent">
                what is a marketing engine
              </a>
              , the fintech version at{" "}
              <a href="/fractional-cmo-fintech" className="border-b border-accent pb-px text-ink transition-colors hover:text-accent">
                fractional CMO for fintech
              </a>
              , and the year-one math at{" "}
              <a href="/fractional-cmo-vs-full-time" className="border-b border-accent pb-px text-ink transition-colors hover:text-accent">
                fractional vs. full-time
              </a>
              .
            </p>
          </div>
        </section>

        <section className="border-t border-rule bg-band px-6 pt-20 pb-16 sm:px-10 sm:pt-24 sm:pb-20">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">Start here</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              Two weeks, and you&apos;ll know what&apos;s broken.
            </h2>
            <p className="measure text-base leading-[1.68] text-muted">
              The Diagnostic audits your stack, your funnel economics by line of
              business, and how work moves through compliance today, and comes
              back with a findings document, a board one-pager, and a priced
              proposal.{" "}
              <a href="/diagnostic" className="border-b border-accent pb-px text-ink transition-colors hover:text-accent">
                How the two weeks run
              </a>
              .
            </p>
            <StartCta place="credit-unions" className="mt-9" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
