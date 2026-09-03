import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

const TITLE = "Fractional CMO FAQ: How the Engagement Works, What It Costs, Who It's For";
const DESCRIPTION =
  "Twenty-two questions people ask before hiring a fractional CMO: what one does, what it costs, how a 90-day build differs from a retainer, and what you keep.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "https://neelythomson.com/faq" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://neelythomson.com/faq",
    siteName: "Neely Thomson",
    locale: "en_US",
    type: "website",
  },
};

type QA = { q: string; a: string[] };
type Group = { label: string; items: QA[] };

const groups: Group[] = [
  {
    label: "The basics",
    items: [
      {
        q: "What is a fractional CMO?",
        a: [
          "A fractional CMO is a senior marketing leader who works with a company part-time, usually ten to twenty hours a week, instead of joining as a full-time executive. Most work on a monthly retainer of $10,000 to $12,000 and stay for a year or more. The model exists because companies between roughly $2M and $30M in revenue need marketing judgment at the executive level before they can justify the salary of one.",
          "I work as a fractional CMO for B2B software companies, with one difference from the usual model: my engagements are built to end. Ninety days, a fixed scope, and one person on your team trained to run everything before I step out.",
        ],
      },
      {
        q: "What does a fractional CMO do?",
        a: [
          "A typical fractional CMO sets the marketing strategy, decides where the budget goes, manages the marketing team or agency, and reports to the CEO on pipeline. Some run campaigns themselves; most direct other people who do.",
          "What I do is narrower, and it's built to stay after I leave. I build the marketing engine: positioning and messaging, lifecycle sequencing, lead scoring, CRM and marketing automation integration, routing rules, the marketing and sales SLA, attribution, and a weekly operating cadence. I build it in your tools, teach your operator to run it, and leave.",
        ],
      },
      {
        q: "What is a marketing engine?",
        a: [
          "A marketing engine is the set of systems underneath marketing that decide what gets made, for whom, where it goes, and whether it worked. It has three layers. The strategy layer points it: ICP, positioning, and channel bets with kill and scale criteria. The operating system runs it: one definition of a good lead, scoring, routing, the SLA with sales, a working process for your AI tools, and a weekly cadence. The optimization loop makes it more efficient: pipeline per dollar by channel, on one scoreboard, reviewed monthly.",
          "Most companies have content and campaigns but no engine. That's why nobody can say which of last quarter's activity produced pipeline.",
        ],
      },
      {
        q: "Who is Neely Thomson?",
        a: [
          "I'm a fractional CMO and marketing systems architect based in Atlanta. I spent twenty years leading B2B SaaS and fintech marketing teams, most recently four years as Head of Marketing at a B2B fintech payments company, where I led a company-wide AI marketing transformation, served as interim sales leader, and helped execute the sale when the company was acquired in 2026.",
        ],
      },
    ],
  },
  {
    label: "Cost and comparison",
    items: [
      {
        q: "How much does a fractional CMO cost?",
        a: [
          "Market-rate fractional CMO retainers in the US run $10,000 to $12,000 a month for ten to twenty hours a week, usually with a three to six month minimum. The industry renewal rate is around 84 percent, so most engagements run past a year and the total cost is closer to $120,000 to $144,000 than to a monthly number.",
          "My engagement is priced differently. It starts with a two-week Diagnostic at $7,500. The ninety-day build that follows is a fixed fee, scoped after the Diagnostic and written into the SOW before anything starts, and the Diagnostic fee is credited in full toward it. There's no retainer and nothing ongoing is required.",
        ],
      },
      {
        q: "What is the difference between a fractional CMO and a full-time CMO?",
        a: [
          "A full-time CMO is an employee who owns the marketing function, manages the team, sits in executive meetings, and carries the number. A fractional CMO provides the same level of judgment part-time, without the salary, the recruiter fee, or the three to six months it takes to hire one.",
          "The right choice depends on stage. Five or more people reporting into marketing, or a board that wants a named owner of the number, means hire full-time. Revenue but no marketing leader, sales sourcing most of the pipeline, and a small team without senior direction means fractional. I wrote the full comparison, with the year-one cost math, at neelythomson.com/fractional-cmo-vs-full-time.",
        ],
      },
      {
        q: "What is the difference between a fractional CMO and a marketing agency?",
        a: [
          "An agency produces work: content, creative, campaigns, paid media. A fractional CMO decides what work should be produced, for whom, and how you'll know if it paid off. The two are complementary, and a fractional CMO often manages the agency.",
          "I don't produce work and I don't act as agency of record. If you need an agency, I'll help you brief one and I'm glad to refer people I trust.",
        ],
      },
      {
        q: "Why a fixed-scope build instead of a retainer?",
        a: [
          "Because a retainer pays the consultant for staying, and a build pays them for finishing. On a retainer, the systems tend to live in the consultant's head and leave when they do. In a build, every system ends up in your tools, documented, run by your person. I'm always trying to work myself out of a job, because I don't think a permanent fractional CMO is healthy for a marketing team.",
        ],
      },
    ],
  },
  {
    label: "The engagement",
    items: [
      {
        q: "What is the Diagnostic?",
        a: [
          "The Diagnostic is a two-week, $7,500 audit that starts every engagement. I go through your stack, the funnel and unit economics by business unit, the last ninety days of marketing requests, and up to eight interviews across marketing, sales, and the business owners. Your side commits about six hours of interviews and read-only access to your systems.",
          "At the end you have three things: a findings document ranked by impact on pipeline, a board one-pager, and a scoped, priced proposal for the build. If we go on to build, the $7,500 comes off the price. If we don't, the findings are yours to run yourself or hand to anyone you like, and some people do exactly that.",
        ],
      },
      {
        q: "What happens in the ninety days?",
        a: [
          "Four phases. Diagnose (weeks one and two): the audit, and your operator gets named or the role gets scoped. Architect (weeks three to five): lead definitions and the SLA, a one-page go-to-market per business unit, messaging architecture and brand system, the brief template and quality bar, channel and conference tiering. Build (weeks six to ten): scoring and routing live in your CRM, the intake queue live, the AI libraries built in the tools you own, the scoreboard wired to real data. I build each system with your operator beside me and run the weekly plan while we do. Hand off (weeks eleven to thirteen): your operator runs the engine, runbooks written, walkthroughs recorded. Then four more weeks on your Monday call.",
        ],
      },
      {
        q: "How does the handoff work?",
        a: [
          "I build every system in your tools with your operator beside me, and I run the weekly plan during the build so the cadence is a habit before it's theirs. Each system ships with a written procedure: what it does, when it runs, how to change it safely, and how to tell when it's broken. In the last three weeks your operator runs the engine and I review. After the ninety days I stay on your Monday call for four more weeks, and the Advisory Seat is there if you want a hand on the wheel after that.",
        ],
      },
      {
        q: "What does my team have to commit?",
        a: [
          "One named operator, and their time. About six hours of interviews in the Diagnostic, four hours a week in Architect, six hours a week in Build, and four hours a week in Hand off. The operator is usually a marketing manager, a marketing ops person, or a sharp generalist. If a team doesn't have that person yet, scoping or hiring the role is a Diagnostic output, and nothing ships for that team until they exist.",
        ],
      },
      {
        q: "What do we keep when it ends?",
        a: [
          "Six working artifacts, in your own tools. The Engine Doc (ICP and subsegmentation, the one-page go-to-market per business unit, channel bets with kill and scale criteria, and a decision log). The Messaging Kit (category narrative, value proposition, messaging by segment and persona, proof points, objection handling, voice guidelines, brand system and creative direction). The Pipeline Model and Scoreboard (funnel stages, five metrics with owners, a dashboard wired to real data, pipeline per dollar by channel, and the board one-pager). The Systems Spec (sequences, scoring model, routing rules, CRM field architecture, the intake queue, the SLA). Documented processes for every workflow, including the brief template and quality bar. And the Weekly Loop plus a 30/60/90 runbook for your operator.",
        ],
      },
      {
        q: "What is the Advisory Seat?",
        a: [
          "The build has a fixed end date. The engagement doesn't have to. The Advisory Seat is an optional monthly arrangement, roughly ten hours a month, scoped per client. It covers a monthly read of the scoreboard, kill and scale calls on live channel bets, and being on call for whoever runs marketing, usually your operator. Strategy and systems only, no production work. Some clients take it after a build; some take it on its own because they already have an operator and need the judgment, not the plumbing.",
        ],
      },
    ],
  },
  {
    label: "Scope and fit",
    items: [
      {
        q: "What is not included?",
        a: [
          "Writing your blog posts, emails, or social content. Graphic design, brand identity files, illustration, video (I specify the brand system and set creative direction; a designer produces it). Running or optimizing paid campaigns on LinkedIn, Google, or anywhere else. Holding or managing your ad accounts. Social media management, community, or event execution. Acting as agency of record. Managing your people.",
          "The rule is simple: if it produces an asset, it's your team's or a partner's. If it moves, routes, scores, or measures an asset, it's mine.",
        ],
      },
      {
        q: "Who is this for?",
        a: [
          "B2B software companies selling into regulated or institutional buyers: fintech, edtech and workforce development, healthtech, govtech. Usually $2M to $30M in revenue, a dozen or more closed deals, some marketing spend going out the door, and either no marketing leader above the manager level or a marketing team that produces without a system behind it. It works when four things are true: you want to own the engine rather than rent an operator, you can name the person who'll run it, creative and media stay with your team or a partner, and you know who your buyer is.",
        ],
      },
      {
        q: "Who is this not for?",
        a: [
          "Companies that need someone to run marketing week to week; that's an operator hire, and I'll say so on the first call. Teams that need a manager more than a system; I don't manage people. Product-led companies where marketing is the whole growth engine and belongs in-house full-time. And companies earlier than about a dozen closed deals, where positioning work will do more than plumbing.",
        ],
      },
      {
        q: "Do you work with fintech companies?",
        a: [
          "Yes, and it's where I learned most of this. I built AI-assisted content production and web operations at a B2B fintech payments company under NACHA rules and CFPB scrutiny, with legal sitting inside the workflow instead of reviewing it at the end. Selling to banks, credit unions, and payment platforms means a security reviewer on the buying committee, procurement that gates on fiscal year, and claims that have to be substantiated before they ship. I build engines that treat those as steps in the process rather than gates at the end.",
        ],
      },
      {
        q: "Do you work with edtech, healthtech, or govtech companies?",
        a: [
          "Yes. Companies selling to school districts, state education departments, hospital systems, and government agencies share the same buying mechanics as fintech: long committee sales, procurement rules, fiscal-year timing (most state fiscal years start July 1, the federal one October 1), and a legal or compliance reviewer somewhere in the loop. Sales usually sources most of the pipeline, and marketing's job is to feed and route it. That's the situation the engine is designed for.",
        ],
      },
      {
        q: "Can you help us with the AI tools we just bought?",
        a: [
          "That's one of the most common reasons companies call. The tools are live (Copy.ai, Jasper, Canva, HubSpot's AI features, whichever landed last quarter) and the output looks the same as before, or worse, because there's no process around them and no internal owner. I build the process: a brief template every piece of work starts from, a scheduled subject-matter-expert step so accuracy isn't a favor, a prompt and template library built from your messaging framework, brand guardrails in the design tools, a written quality bar, a review path that legal can live with, and a named person who owns it. I don't write the content the tools produce.",
        ],
      },
      {
        q: "What if our CRM or automation platform can't do this?",
        a: [
          "The Diagnostic answers that first: can the engine be built in what you already have? Three outcomes. If the stack is sufficient, configuration is the build and the fixed fee covers it. If it needs an add-on (an attribution layer, intent data, a tier that can score and route), the recommendation lands in the readout with the annual cost and the build-in-what-exists alternative beside it; you buy it in your name, billed by the vendor, and the build fee doesn't change. If it needs a foundational replacement, a CRM or automation migration, that's never absorbed into the fixed fee: it's a separately priced addendum or a phase zero handled by an implementation partner I refer, with the build starting after.",
          "I don't resell software and I don't take vendor commissions, so the recommendation is clean.",
        ],
      },
    ],
  },
  {
    label: "Practical",
    items: [
      {
        q: "Do you work remotely?",
        a: [
          "Yes. I'm in Atlanta and work with clients across the US. The Diagnostic is entirely remote. During the build, we work over screen-share, and your operator keeps the recordings.",
        ],
      },
      {
        q: "How do we start?",
        a: [
          "Send a short note through the form at neelythomson.com/#start, or message me on LinkedIn. I'll reply with a few questions and, if it looks like a fit, a Diagnostic SOW. The Diagnostic is two weeks and $7,500, and at the end of it you'll know what's broken and what I'd build, in writing.",
        ],
      },
    ],
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://neelythomson.com/faq#faq",
  url: "https://neelythomson.com/faq",
  name: TITLE,
  author: { "@id": "https://neelythomson.com/#person" },
  isPartOf: { "@id": "https://neelythomson.com/#website" },
  mainEntity: groups.flatMap((g) =>
    g.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a.join(" ") },
    })),
  ),
};

function slug(q: string) {
  return q
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export default function FAQ() {
  const count = groups.reduce((n, g) => n + g.items.length, 0);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <Breadcrumbs items={[{ name: "FAQ", url: "https://neelythomson.com/faq" }]} />
      <main>
        <section className="px-6 pt-20 pb-16 sm:px-10 sm:pt-24 sm:pb-20">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">Questions</p>
            <h1 className="display mb-8 max-w-[18ch] text-[clamp(2.3rem,5vw,4rem)]">
              The {count} questions people ask before they hire me.
            </h1>
            <p className="measure text-base leading-[1.68] text-muted">
              Answered the way I&apos;d answer them on a first call. Every
              answer stands on its own, so read the ones you came for and skip
              the rest. If yours isn&apos;t here,{" "}
              <a href="/#start" className="border-b border-accent pb-px text-ink transition-colors hover:text-accent">
                ask it directly
              </a>
              .
            </p>

            <nav aria-label="Question groups" className="mt-10 flex flex-wrap gap-2.5 border-t border-rule pt-8">
              {groups.map((g) => (
                <a
                  key={g.label}
                  href={`#${slug(g.label)}`}
                  className="border border-rule px-3 py-[7px] text-[10.5px] uppercase tracking-[0.11em] text-muted transition-colors hover:border-accent hover:text-accent"
                >
                  {g.label}
                </a>
              ))}
            </nav>
          </div>
        </section>

        {groups.map((g) => (
          <section
            key={g.label}
            id={slug(g.label)}
            className="scroll-mt-20 border-t border-rule px-6 pt-20 pb-16 sm:px-10 sm:pt-24 sm:pb-20"
          >
            <div className="mx-auto max-w-[960px]">
              <p className="label mb-4">{g.label}</p>
              {g.items.map((item, i) => (
                <article
                  key={item.q}
                  id={slug(item.q)}
                  className={`scroll-mt-20 grid gap-4 py-8 md:grid-cols-[minmax(170px,300px)_1fr] md:gap-10 ${
                    i === 0 ? "" : "border-t border-rule"
                  }`}
                >
                  <h2 className="display-xs text-[22px] leading-[1.25]">{item.q}</h2>
                  <div>
                    {item.a.map((p, j) => (
                      <p
                        key={j}
                        className={`max-w-[62ch] text-[15px] leading-[1.7] text-muted ${j === 0 ? "" : "mt-4"}`}
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}

        <section className="border-t border-rule px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">Start here</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              Two weeks, $7,500, and you&apos;ll know what&apos;s broken.
            </h2>
            <p className="measure text-base leading-[1.68] text-muted">
              The Diagnostic is where almost everything starts.{" "}
              <a href="/#start" className="border-b border-accent pb-px text-ink transition-colors hover:text-accent">
                Send a note
              </a>{" "}
              and I&apos;ll reply with a few questions. Or read the{" "}
              <a href="/fractional-cmo-vs-full-time" className="border-b border-accent pb-px text-ink transition-colors hover:text-accent">
                fractional versus full-time comparison
              </a>{" "}
              first if you&apos;re still deciding which kind of help you need.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
