import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

const TITLE = "Fractional CMO for Fintech: Marketing That Survives Compliance Review";
const DESCRIPTION =
  "A fractional CMO for fintech builds marketing that clears NACHA, CFPB, and legal review without stalling. What changes in fintech marketing, what to build first, and proof from a payments company.";
const URL = "https://neelythomson.com/fractional-cmo-fintech";

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

const differences = [
  {
    t: "Legal reads the landing page",
    b: "In fintech, every claim about rates, speed, security, or compliance is a regulated statement. A marketing engine that treats legal review as a gate at the end produces a queue. One that treats it as a step inside the workflow, with claim substantiation attached to the brief and a written rule for which claims need counsel, produces throughput. The difference showed up as a 60 percent reduction in manual campaign work at a payments company under NACHA and CFPB rules.",
  },
  {
    t: "The security reviewer is on the buying committee",
    b: "Banks, credit unions, and payment platforms bring security and compliance into the deal by the second call. The engine carries what they will ask for: a review trail on every asset, SOC 2 and data-handling language that has already been through counsel, and content that speaks to the risk owner, not only the business owner.",
  },
  {
    t: "Procurement runs on a calendar you do not control",
    b: "Banks budget annually, credit unions plan around examination cycles, and enterprise payments buyers move on fiscal years. Channel bets and sequencing get planned against the buyer's calendar so pipeline is warm when the window opens, instead of a campaign landing in a quarter nobody is buying.",
  },
  {
    t: "Trust is the product, so the messaging is the moat",
    b: "In a category where every competitor claims secure, compliant, and fast, positioning has to be built from proof points a buyer can verify: regulatory posture, uptime, named integrations, the customers who will take a reference call. That messaging kit is a strategy-layer deliverable, and it is what the AI tools draw from so they never invent a claim.",
  },
  {
    t: "The AI tools need guardrails before they need prompts",
    b: "Copy.ai, Jasper, Canva, and the AI features in HubSpot are fine tools. In fintech they are dangerous without a locked messaging framework, a prompt library built from approved claims, and a review state every asset moves through. That process is what turns them from a liability into a 60 percent capacity gain.",
  },
];

const build = [
  {
    t: "Positioning and a messaging kit built from verifiable claims",
    b: "Category narrative, value proposition by segment (bank, credit union, platform, enterprise), proof points with their substantiation, and the list of claims counsel has already said no to.",
  },
  {
    t: "One lead definition and a marketing-to-sales SLA",
    b: "Fintech deals are large and long. A written definition of a qualified lead with a deal-value threshold, scoring and routing built into the CRM, and an SLA both sides signed, so the lead-credit argument has nowhere to live.",
  },
  {
    t: "Compliance as architecture",
    b: "Review states, approval routing, and claim substantiation inside the workflow. Legal stops being the bottleneck because they are a step, not a gate.",
  },
  {
    t: "An AI production process with the guardrails first",
    b: "Brief template, subject-matter-expert step, prompt and template libraries built from the messaging kit, a locked brand kit, and a written quality bar.",
  },
  {
    t: "A scoreboard the board and the risk committee both accept",
    b: "Five metrics anchored on pipeline, channel P&L, and a one-pager that assembles itself, so the monthly conversation is about what moved and why.",
  },
];

const faq = [
  {
    q: "What does a fractional CMO for fintech do differently?",
    a: "A fractional CMO for fintech builds marketing systems that survive compliance review: positioning from verifiable claims, legal review as a step inside the workflow, a lead definition with deal-value thresholds, and AI production with guardrails built from approved messaging. The generalist version treats compliance as a gate and produces a queue.",
  },
  {
    q: "Can you do AI marketing under NACHA and CFPB rules?",
    a: "Yes. I built AI-assisted content production and web operations at a B2B fintech payments company under NACHA rules and CFPB scrutiny, with legal sitting inside the workflow instead of reviewing at the end. Manual campaign work fell 60 percent, LTV:CAC reached 5:1, and MQL-to-opportunity conversion rose 15 percent.",
  },
  {
    q: "How long does it take?",
    a: "Two weeks for the Diagnostic, which audits your stack, funnel economics, and team and returns a findings document, a board one-pager, and a priced proposal. Ninety days for the build, with a fixed scope and a fixed end date. A named person on your team runs the engine afterward.",
  },
  {
    q: "Do you work with banks and credit unions directly, or with the fintechs that sell to them?",
    a: "Mostly the latter: B2B fintech and payments companies selling into banks, credit unions, and institutional buyers. The buying mechanics on the other side of that sale are what the engine is designed around.",
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
      datePublished: "2026-09-02",
      dateModified: "2026-09-02",
      author: { "@id": "https://neelythomson.com/#person" },
      publisher: { "@id": "https://neelythomson.com/#person" },
      isPartOf: { "@id": "https://neelythomson.com/#website" },
      about: ["Fractional CMO", "Fintech marketing", "NACHA", "CFPB", "B2B payments marketing"],
    },
    {
      "@type": "Service",
      "@id": `${URL}#service`,
      name: "Fractional CMO for fintech",
      serviceType: "Fractional CMO",
      provider: { "@id": "https://neelythomson.com/#person" },
      areaServed: "US",
      audience: { "@type": "BusinessAudience", name: "B2B fintech and payments companies" },
      url: URL,
      description: DESCRIPTION,
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

export default function FractionalCMOFintech() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <Breadcrumbs items={[{ name: "Fractional CMO for fintech", url: "https://neelythomson.com/fractional-cmo-fintech" }]} />
      <main>
        <section className="px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">Fractional CMO · Fintech and payments</p>
            <h1 className="display mb-8 max-w-[16ch] text-[clamp(2.2rem,4.8vw,3.8rem)]">
              Fintech marketing that survives compliance review.
            </h1>
            <p className="measure text-[17px] leading-[1.62] text-muted">
              A fractional CMO for fintech builds marketing that clears NACHA,
              CFPB, and legal review without stalling. The work is the same
              engine any B2B software company needs, with one difference that
              changes everything: every claim is a regulated statement, and the
              buyer&apos;s security reviewer is in the deal by the second call.
            </p>
            <p className="measure mt-4 text-[17px] leading-[1.62] text-muted">
              I spent four years running marketing at a B2B fintech payments
              company under exactly those constraints, and served as its interim
              sales leader. What follows is what I learned there and what I build
              now.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <a href="/#start" className="rounded-sm bg-ink px-[22px] py-[13px] text-sm font-medium text-bg transition-colors hover:bg-accent">
                Start a Diagnostic &nbsp;&rarr;
              </a>
              <a href="/work/fintech-payments" className="border-b border-accent pb-0.5 text-sm font-medium text-ink transition-colors hover:text-accent">
                Read the fintech case study
              </a>
            </div>
          </div>
        </section>

        <div className="border-t border-rule bg-band px-6 py-13 sm:px-10">
          <div className="mx-auto max-w-[960px]">
            <div className="mb-9 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
              <p className="label">Results · B2B fintech payments, under NACHA and CFPB</p>
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
            <p className="label mb-8">What changes in fintech</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              Five things a generalist engine gets wrong here.
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
            <p className="label mb-8 text-white/55">What I build first</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)] text-white">
              The fintech build order.
            </h2>
            <p className="measure text-base leading-[1.68] text-white/60">
              The Diagnostic decides the exact sequence for your company. This
              is the shape it usually takes, because the constraint is the
              strategy.
            </p>
            <div className="mt-11">
              {build.map((b, i) => (
                <div key={b.t} className={`grid gap-3 py-6 md:grid-cols-[60px_1fr] md:gap-6 ${i === 0 ? "" : "border-t border-white/20"}`}>
                  <span className="label tnum pt-1 text-white/55">0{i + 1}</span>
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
          </div>
        </section>

        <section className="border-t border-rule bg-band px-6 pt-20 pb-16 sm:px-10 sm:pt-24 sm:pb-20">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">Start here</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              Two weeks, $7,500, and you&apos;ll know what&apos;s broken.
            </h2>
            <p className="measure text-base leading-[1.68] text-muted">
              The Diagnostic audits your stack, your funnel economics, and how
              work moves through legal today, and comes back with a findings
              document, a board one-pager, and a priced proposal.{" "}
              <a href="/diagnostic" className="border-b border-accent pb-px text-ink transition-colors hover:text-accent">
                How the two weeks run
              </a>
              .
            </p>
            <a href="/#start" className="mt-9 inline-block rounded-sm bg-ink px-[22px] py-[13px] text-sm font-medium text-bg transition-colors hover:bg-accent">
              Start a Diagnostic &nbsp;&rarr;
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
