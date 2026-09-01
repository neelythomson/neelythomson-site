import Header from "@/components/Header";
import Footer from "@/components/Footer";

export type CaseStudyData = {
  slug: string;
  n: string;
  title: string;
  metaTitle: string;
  description: string;
  facts: { k: string; v: string }[];
  situation: string[];
  build: { t: string; b: string }[];
  results: { figure: string; label: string }[];
  resultsHeading: string;
  resultsProse?: string[];
  why: string[];
  note: string;
  keywords: string[];
};

export const caseStudies: CaseStudyData[] = [
  {
    slug: "fintech-payments",
    n: "01",
    title: "A marketing engine, built under fintech regulation",
    metaTitle: "Case Study: AI Marketing Engine Under NACHA and CFPB Regulation",
    description:
      "How a B2B fintech payments platform cut manual campaign work 60 percent, reached 5:1 LTV:CAC, and lifted MQL-to-opportunity conversion 15 percent with compliance built into the workflow.",
    facts: [
      { k: "Company", v: "B2B fintech payments platform" },
      { k: "Annual marketing budget", v: "About $2M" },
      { k: "Regulatory context", v: "NACHA, CFPB, legal review on every asset" },
      { k: "My role", v: "VP & Head of Marketing, then interim sales leader" },
    ],
    situation: [
      "A payments platform selling into regulated industries, where every asset passes compliance and legal review before it ships. Campaign production was manual, marketing and sales ran on separate definitions of a good lead, and the team's capacity was going into producing work instead of moving pipeline.",
      "The constraint wasn't budget. It was the absence of a system.",
    ],
    build: [
      {
        t: "One lead definition, one handoff",
        b: "Marketing and sales operations integrated onto a single lead definition and a single view of the pipeline, led from both sides while I served as interim sales leader.",
      },
      {
        t: "An AI-first production process with compliance built in",
        b: "Campaign production, review, and launch redesigned around AI, with compliance checkpoints inside the workflow rather than bolted on after. Legal became a step, not a gate. Manual campaign work fell 60 percent.",
      },
      {
        t: "A website operations pipeline",
        b: "Rapid page production and A/B testing at scale, inside the same review process, so the site could move as fast as the campaigns.",
      },
      {
        t: "Personalization as a system, not a stunt",
        b: "AI-driven personalization across ABM campaigns using 6sense intent data, so high-value accounts saw relevant messaging instead of the generic version.",
      },
    ],
    resultsHeading: "What it changed",
    results: [
      { figure: "60%", label: "reduction in manual campaign work" },
      { figure: "5:1", label: "LTV:CAC delivered" },
      { figure: "15%", label: "lift in MQL-to-opportunity conversion" },
    ],
    why: [
      "The hard version of AI marketing is the one that survives a compliance department. Under NACHA and CFPB constraints, the process had to be a system: documented, reviewable, repeatable. That discipline is exactly what selling to regulated or institutional buyers takes, and it's the method I now build for clients.",
    ],
    note: "Company name withheld. Detail and verification available in conversation.",
    keywords: ["fintech marketing case study", "AI marketing compliance", "NACHA marketing", "CFPB marketing review", "LTV:CAC", "MQL to opportunity conversion"],
  },
  {
    slug: "nonprofit-partnerships",
    n: "02",
    title: "An engine for the B2B side of a $70M marketing organization",
    metaTitle: "Case Study: B2B Partnership Engine Inside a $70M Nonprofit Marketing Operation",
    description:
      "How a national nonprofit's corporate and institutional partnership team grew net-new lead acquisition 15 percent and partner engagement 75 percent by wiring campaigns to CRM relationship data.",
    facts: [
      { k: "Organization", v: "National nonprofit" },
      { k: "Annual marketing budget", v: "$70M" },
      { k: "Audience", v: "Corporate and institutional partners" },
      { k: "My role", v: "Director of B2B Engagement" },
    ],
    situation: [
      "A household-name nonprofit with a $70M marketing operation built for consumer audiences, and a B2B side (corporate and institutional partnerships) running without the same machinery. Partner cycles are long and relationship-driven, the buyer is an organization rather than an individual, and campaigns went out on a calendar that had no connection to what the CRM knew about each relationship.",
      "Big budget, no B2B engine.",
    ],
    build: [
      {
        t: "Campaigns wired to the CRM",
        b: "Outreach and nurture driven by relationship data (where each partner was in the cycle, what they had engaged with, what they were worth) instead of a one-size calendar.",
      },
      {
        t: "Segmentation by partner type and value",
        b: "The biggest institutional relationships got treated differently from net-new prospects, in message, cadence, and channel.",
      },
      {
        t: "A repeatable acquisition motion for net-new partners",
        b: "Measured on leads that became relationships rather than on send volume.",
      },
    ],
    resultsHeading: "What it changed",
    results: [
      { figure: "15%", label: "increase in net-new lead acquisition" },
      { figure: "75%", label: "increase in partner engagement through CRM-integrated campaigns" },
    ],
    why: [
      "At $70M of marketing spend, the win wasn't more budget. It was the system connecting relationship data to campaign execution. Institutional buyers respond to relevance and timing, not volume. The mechanics that moved both numbers were unglamorous: clean data, segmentation, campaigns triggered by the relationship instead of the calendar. They apply anywhere the customer is an institution with a budget cycle.",
    ],
    note: "Organization name withheld. Detail and verification available in conversation.",
    keywords: ["nonprofit B2B marketing case study", "corporate partnerships marketing", "CRM-integrated campaigns", "institutional buyer marketing"],
  },
  {
    slug: "enterprise-abm",
    n: "03",
    title: "Enterprise ABM, built on a $500K budget",
    metaTitle: "Case Study: Full-Lifecycle Enterprise ABM Program on a $500K Budget",
    description:
      "How a technology services firm replaced broad-market marketing with a named-account ABM motion its own team could run: redefined ICP, executive communications, and direct mail.",
    facts: [
      { k: "Company", v: "Technology services firm" },
      { k: "Annual marketing budget", v: "$500K" },
      { k: "Engagement", v: "Consulting, full-lifecycle ABM build" },
      { k: "My role", v: "Fractional marketing lead" },
    ],
    situation: [
      "A custom software services firm selling large engagements to enterprise buyers, with roughly $500K a year to market on. At that budget there's no room for volume plays: every dollar has to land on accounts that can buy, and the executives who sign those deals don't respond to volume campaigns anyway.",
      "The engagement: build the account-based marketing engine, end to end.",
    ],
    build: [
      {
        t: "The ICP, redefined first",
        b: "Before any campaign spend, a rebuilt definition of the accounts worth pursuing, so the program targeted a named enterprise account list instead of a broad market.",
      },
      {
        t: "A full-lifecycle ABM program",
        b: "Account selection, engagement, and nurture designed as one connected system across the funnel, not a sequence of disconnected campaigns.",
      },
      {
        t: "Executive communications as a channel",
        b: "Enterprise deals close on relationships and authority, so the program reached the executive buyer directly instead of relying on email volume.",
      },
      {
        t: "Content strategy rebuilt around the ICP",
        b: "Every asset spoke to the named accounts' problems rather than the general market's.",
      },
      {
        t: "Direct mail, launched as a working motion",
        b: "A physical channel that cuts through inboxes enterprise executives don't open, aimed at the named account list.",
      },
    ],
    resultsHeading: "What they kept",
    results: [],
    resultsProse: [
      "The firm went from broad-market marketing to a repeatable named-account motion its team could run: a defined ICP and account list, lifecycle stages with content mapped to each, and executive-facing channels (direct mail, executive communications) that fit how their buyers make decisions. The budget didn't grow; the precision did.",
    ],
    why: [
      "A small budget forces the discipline that big budgets let you skip: define exactly who you sell to, pick the channels their executives respond to, and connect every asset to a named account. That's the same shape as any business with six-figure contracts and a finite list of institutional buyers, where one right account is worth more than a thousand impressions.",
    ],
    note: "Client engagement through my consulting practice; name withheld. References available in conversation.",
    keywords: ["ABM case study", "account-based marketing small budget", "enterprise ABM program", "direct mail B2B", "executive communications"],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug)!;
}

export function caseStudyJsonLd(c: CaseStudyData) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `https://neelythomson.com/work/${c.slug}#article`,
    headline: c.title,
    description: c.description,
    url: `https://neelythomson.com/work/${c.slug}`,
    datePublished: "2026-09-02",
    dateModified: "2026-09-02",
    author: { "@id": "https://neelythomson.com/#person" },
    publisher: { "@id": "https://neelythomson.com/#person" },
    isPartOf: { "@id": "https://neelythomson.com/#website" },
    about: c.keywords,
    genre: "Case study",
  };
}

export default function CaseStudy({ c }: { c: CaseStudyData }) {
  const others = caseStudies.filter((o) => o.slug !== c.slug);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudyJsonLd(c)) }}
      />
      <Header />
      <main>
        <section className="px-6 pt-20 pb-16 sm:px-10 sm:pt-24 sm:pb-20">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">
              <a href="/work" className="transition-colors hover:text-accent">Work</a>
              <span className="mx-1.5">·</span>Case study {c.n}
            </p>
            <h1 className="display mb-8 max-w-[18ch] text-[clamp(2.3rem,5vw,4rem)]">{c.title}</h1>
            <p className="measure text-[17px] leading-[1.65] text-ink">{c.description}</p>

            <dl className="mt-11 grid gap-x-8 gap-y-6 border-t border-rule pt-8 sm:grid-cols-2 md:grid-cols-4">
              {c.facts.map((f) => (
                <div key={f.k}>
                  <dt className="label mb-2">{f.k}</dt>
                  <dd className="text-[14px] leading-[1.5] text-ink">{f.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="border-t border-rule px-6 pt-20 pb-16 sm:px-10 sm:pt-24 sm:pb-20">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">01 <span className="mx-0.5">·</span> Situation</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">The starting point</h2>
            {c.situation.map((p, i) => (
              <p key={i} className={`measure text-base leading-[1.68] text-muted ${i === 0 ? "" : "mt-4"}`}>{p}</p>
            ))}
          </div>
        </section>

        <section className="border-t border-rule px-6 pt-20 pb-16 sm:px-10 sm:pt-24 sm:pb-20">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">02 <span className="mx-0.5">·</span> The build</p>
            <h2 className="display-sm max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">The engine</h2>
            <div className="mt-9">
              {c.build.map((b, i) => (
                <div
                  key={b.t}
                  className={`grid gap-4 py-7 md:grid-cols-[220px_1fr] md:gap-10 ${i === 0 ? "" : "border-t border-rule"}`}
                >
                  <div>
                    <p className="text-[12.5px] font-medium">{b.t}</p>
                    <p className="label mt-1 tnum">0{i + 1}</p>
                  </div>
                  <p className="max-w-[62ch] text-[15px] leading-[1.7] text-muted">{b.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-rule bg-band px-6 pt-20 pb-16 sm:px-10 sm:pt-24 sm:pb-20">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">03 <span className="mx-0.5">·</span> Results</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">{c.resultsHeading}</h2>
            {c.results.length > 0 && (
              <div className="mt-4 grid gap-x-8 gap-y-8 sm:grid-cols-3">
                {c.results.map((r) => (
                  <div key={r.label} className="border-t-2 border-accent pt-5">
                    <p className="display tnum text-[52px] leading-none text-accent">{r.figure}</p>
                    <p className="mt-3 max-w-[26ch] text-[13.5px] leading-[1.55] text-muted">{r.label}</p>
                  </div>
                ))}
              </div>
            )}
            {c.resultsProse?.map((p, i) => (
              <p key={i} className="measure text-base leading-[1.68] text-muted">{p}</p>
            ))}
          </div>
        </section>

        <section className="bg-ink px-6 pt-20 pb-16 text-band sm:px-10 sm:pt-24 sm:pb-20">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8 text-white/40">04 <span className="mx-0.5">·</span> Why it matters to you</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)] text-white">The relevant part</h2>
            {c.why.map((p, i) => (
              <p key={i} className={`measure text-base leading-[1.68] text-white/60 ${i === 0 ? "" : "mt-4"}`}>{p}</p>
            ))}
            <p className="mt-9 border-t border-white/20 pt-6 text-[13px] leading-[1.6] text-white/40">{c.note}</p>
          </div>
        </section>

        <section className="border-t border-rule px-6 pt-20 pb-16 sm:px-10 sm:pt-24 sm:pb-20">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">More work</p>
            <div className="grid gap-x-8 gap-y-6 md:grid-cols-2">
              {others.map((o) => (
                <a
                  key={o.slug}
                  href={`/work/${o.slug}`}
                  className="group border-t border-ink pt-5 transition-colors hover:border-accent"
                >
                  <p className="label mb-3">Case study {o.n}</p>
                  <p className="display-xs text-[20px] leading-[1.25] text-ink transition-colors group-hover:text-accent">{o.title}</p>
                </a>
              ))}
            </div>
            <p className="mt-12 border-t border-rule pt-7 text-[13.5px] leading-[1.6] text-muted">
              Want this built for your team? It starts with a two-week Diagnostic.{" "}
              <a href="/#start" className="border-b border-accent pb-px text-ink transition-colors hover:text-accent">
                Send a note
              </a>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
