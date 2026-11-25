import type { Metadata } from "next";
import StartCta from "@/components/StartCta";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { caseStudies } from "@/components/CaseStudy";

const TITLE = "Work: Three Marketing Engines, Three Budgets";
const DESCRIPTION =
  "Three case studies with numbers: an AI marketing engine under NACHA and CFPB, a B2B partnership engine inside a $70M nonprofit, and enterprise ABM on a lean budget.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "https://neelythomson.com/work" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://neelythomson.com/work",
    siteName: "Neely Thomson",
    locale: "en_US",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://neelythomson.com/work#page",
  url: "https://neelythomson.com/work",
  name: TITLE,
  description: DESCRIPTION,
  isPartOf: { "@id": "https://neelythomson.com/#website" },
  author: { "@id": "https://neelythomson.com/#person" },
  hasPart: caseStudies.map((c) => ({ "@id": `https://neelythomson.com/work/${c.slug}#article` })),
};

const clients = [
  {
    name: "stable/kernel",
    role: "Fractional marketing lead",
    body: "I built and launched the enterprise ABM program, aimed at accounts with seven-figure contracts, then handed it to an in-house owner.",
  },
  {
    name: "LeadLife Solutions",
    role: "Fractional marketing lead",
    body: "I launched the B2B digital marketing program that reached startups and mid-sized businesses, then handed it to an in-house owner.",
  },
];

const programs = [
  {
    name: "PGi",
    role: "Sales enablement",
    body: "I launched the enterprise-wide sales enablement program for 400+ reps.",
  },
  {
    name: "Socialvest",
    role: "First marketing hire",
    body: "I ran digital marketing from the start at an early-stage ecommerce platform.",
  },
  {
    name: "Pfizer Animal Health (now Zoetis)",
    role: "Program operations",
    body: "I ran the consumer rewards program operations end to end.",
  },
];

function NamedRows({ rows }: { rows: { name: string; role: string; body: string }[] }) {
  return (
    <div>
      {rows.map((r, i) => (
        <div
          key={r.name}
          className={`grid gap-3 py-6 md:grid-cols-[230px_1fr] md:gap-10 ${i === 0 ? "" : "border-t border-rule"}`}
        >
          <div>
            <p className="text-[15px] font-medium text-ink">{r.name}</p>
            <p className="mt-1 text-[12.5px] text-faint">{r.role}</p>
          </div>
          <p className="max-w-[62ch] text-[15px] leading-[1.7] text-muted">{r.body}</p>
        </div>
      ))}
    </div>
  );
}

export default function Work() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <Breadcrumbs items={[{ name: "Work", url: "https://neelythomson.com/work" }]} />
      <main id="main">
        <section className="px-6 pt-20 pb-16 sm:px-10 sm:pt-24 sm:pb-20">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">Work</p>
            <h1 className="display mb-8 max-w-[18ch] text-[clamp(2.3rem,5vw,4rem)]">
              Three engines, three budgets, the same method.
            </h1>
            <p className="measure text-base leading-[1.68] text-muted">
              A $2M fintech marketing budget under federal payments regulation, the B2B side of a
              $70M nonprofit, and a services firm selling to enterprise executives on a lean budget. Different
              budgets, same problem: plenty of marketing activity, no system under it. Company names
              are withheld on the case studies; details and references are available in conversation.
            </p>
            <p className="measure mt-4 text-base leading-[1.68] text-muted">
              The method was the same each time. Two weeks of audit first: the stack, the funnel by
              segment, the last ninety days of requests, and interviews with whoever owned the number.
              Then the three layers, built in order inside the tools the team already owned: a strategy
              layer that decides who to sell to and what to say, an operating system that moves a lead
              from first touch to sales without anyone chasing it, and a scoreboard that reports what
              each channel returned in pipeline. Every build ended with a named person on the team
              running it and a written procedure for each system. The results below are the numbers
              those teams reported on their own scoreboards afterward.
            </p>
          </div>
        </section>

        <section className="border-t border-rule px-6 pt-20 pb-20 sm:px-10 sm:pt-24 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            {caseStudies.map((c, i) => (
              <a
                key={c.slug}
                href={`/work/${c.slug}`}
                className={`group grid gap-5 py-9 md:grid-cols-[170px_1fr] md:gap-10 ${i === 0 ? "" : "border-t border-rule"}`}
              >
                <div>
                  <p className="label">Case study {c.n}</p>
                  <p className="mt-2 text-[12.5px] font-medium text-muted">{c.facts[0].v}</p>
                  <p className="mt-1 text-[12.5px] text-faint">{c.facts[1].v}</p>
                </div>
                <div>
                  <h2 className="display-sm text-[clamp(1.5rem,2.6vw,2.1rem)] text-ink transition-colors group-hover:text-accent">
                    {c.title}
                  </h2>
                  <p className="mt-3 max-w-[62ch] text-[15px] leading-[1.7] text-muted">{c.description}</p>
                  {c.results.length > 0 && (
                    <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
                      {c.results.map((r) => (
                        <li key={r.label}>
                          <span className="display tnum text-[26px] leading-none text-accent">{r.figure}</span>
                          <span className="ml-2 text-[12.5px] text-muted">{r.label}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <p className="mt-5 text-[13px] font-medium text-accent">Read the case study</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="named" className="scroll-mt-20 border-t border-rule px-6 pt-20 pb-20 sm:px-10 sm:pt-24 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">
          Where I&apos;ve done this work <span className="text-accent">&middot; a selection</span>
        </p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              I&apos;ve worked this way before.
            </h2>
            <p className="measure text-base leading-[1.68] text-muted">
              Two companies brought me in as their marketing lead to build a program, get it
              running, and hand it to someone in-house. The rest are programs I built from the
              inside.
            </p>

            <p className="label mt-14 mb-2">Fractional engagements</p>
            <NamedRows rows={clients} />

            <p className="label mt-14 mb-2">Programs I&apos;ve built</p>
            <NamedRows rows={programs} />

            <p className="measure mt-10 border-t border-rule pt-7 text-[15px] leading-[1.7] text-muted">
              These are the ones I can name. Over twenty years I&apos;ve built marketing inside
          companies from bootstrapped startups to a $70M marketing organization, through two
          acquisitions. Most of that work I don&apos;t name publicly, and references are
          available in conversation.
            </p>
          </div>
        </section>

        <section className="border-t border-rule px-6 pt-20 pb-16 sm:px-10 sm:pt-24 sm:pb-20">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">Start here</p>
            <p className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              Before your first marketing hire, or after it.
            </p>
            <p className="measure text-base leading-[1.68] text-muted">
              No marketing hire yet: the function gets designed before the
              posting goes up, in six weeks. A marketer already in place: every
              engine above started with the same two-week Diagnostic. Fixed fee
              either way, quoted on the first call, and the plan is yours whether
              or not we build it together.
            </p>
            <StartCta place="work" className="mt-9" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
