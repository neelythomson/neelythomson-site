import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TITLE = "Fractional CMO vs. Full-Time CMO: Cost, Timing, and Which to Choose";
const DESCRIPTION =
  "A fractional CMO runs $10k to $12k a month. A full-time marketing leader costs $320k to $495k in year one. The math, when each is right, and a third option.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "https://neelythomson.com/fractional-cmo-vs-full-time" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://neelythomson.com/fractional-cmo-vs-full-time",
    siteName: "Neely Thomson",
    locale: "en_US",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Neely Thomson. I build the marketing engine. Your team runs it." }],
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://neelythomson.com/fractional-cmo-vs-full-time#article",
  headline: TITLE,
  description: DESCRIPTION,
  url: "https://neelythomson.com/fractional-cmo-vs-full-time",
  datePublished: "2026-09-02",
  dateModified: "2026-09-02",
  author: { "@id": "https://neelythomson.com/#person" },
  publisher: { "@id": "https://neelythomson.com/#person" },
  isPartOf: { "@id": "https://neelythomson.com/#website" },
  about: ["Fractional CMO", "Chief Marketing Officer", "B2B SaaS marketing leadership"],
};

const rows = [
  {
    k: "Year-one cost",
    ft: "$320,000 to $495,000 fully loaded: base, bonus, benefits, equity, and a recruiter fee of 20 to 30 percent of base.",
    fc: "$120,000 to $144,000 at a market retainer of $10,000 to $12,000 a month. Most retainers renew, so plan on year two.",
    me: "A two-week Diagnostic at $7,500, then a fixed fee for the ninety-day build, scoped after the Diagnostic and written into the SOW before anything starts.",
  },
  {
    k: "Time to start",
    ft: "Three to six months to hire, then three months of ramp before they change anything.",
    fc: "Two to four weeks.",
    me: "Two weeks to the Diagnostic readout. The build starts the week after.",
  },
  {
    k: "What you get",
    ft: "A leader who owns marketing, manages the team, sits in exec meetings, and is accountable for the number.",
    fc: "Senior judgment, a strategy, and an operator who runs marketing while they're under contract.",
    me: "The engine itself: positioning, sequencing, scoring, routing, attribution, and a weekly cadence, built in your tools and handed to a named person on your team.",
  },
  {
    k: "What's left when it ends",
    ft: "Whatever they documented. Usually less than you'd hope.",
    fc: "The strategy deck and the campaigns they ran. The systems tend to leave with them.",
    me: "Six working artifacts, a trained operator, and four weeks of support after handoff. Nothing depends on me staying.",
  },
  {
    k: "The ongoing bill",
    ft: "Salary every year, plus whatever team they hire.",
    fc: "The retainer, for as long as you keep them. The industry renewal rate is around 84 percent, which tells you how often that's a long time.",
    me: "Nothing required. Some clients keep an Advisory Seat afterward, roughly ten hours a month, scoped per client.",
  },
  {
    k: "Right when",
    ft: "You have a team of five or more to manage, a board that wants one throat to choke, and the budget to pay for a bench.",
    fc: "You need marketing run by a senior person for a defined stretch and you're fine renting that judgment month to month.",
    me: "You have revenue, a dozen or so closed deals, someone on your team who can own the engine, and no marketing leader yet.",
  },
];

const fullTimeCases = [
  {
    t: "Five or more people report into marketing",
    b: "Managing people is a full-time job on its own. A fractional leader at ten to twenty hours a week can't do it well, and I don't offer people management at all. Once the team is that size, hire the executive.",
  },
  {
    t: "The board wants a named owner of the number",
    b: "Investors in a Series B and beyond usually want a full-time executive whose name is on the marketing plan. That's a governance preference, and it's a fair one. A fractional CMO can get you to that hire, but rarely replaces it.",
  },
  {
    t: "Marketing is the company's main growth lever",
    b: "If most of your pipeline comes from marketing rather than sales or partnerships, the person running it should be in the building every day. A product-led software company at $20M in ARR needs a full-time CMO, not a consultant.",
  },
];

const fractionalCases = [
  {
    t: "You're between $2M and $20M in revenue with no marketing leader",
    b: "There's a marketing manager or a small team, and nobody senior above them. The CEO is the de facto CMO. Marketing spend goes out the door every month without anyone able to say what it returned.",
  },
  {
    t: "Sales sources most of the pipeline",
    b: "Companies selling six-figure contracts into banks, school systems, hospitals, or state agencies usually get most of their pipeline from sales, conferences, and referrals. Marketing's job there is to feed and route the pipeline, not to be it. That's a systems problem more than a leadership one.",
  },
  {
    t: "You just bought AI tools and nobody owns the process",
    b: "Copy.ai, Jasper, Canva, HubSpot's AI features, whatever landed last quarter. The tools are live and the output looks the same as before, or worse. That's the state of most marketing teams in 2026, and it's fixable in weeks, not years.",
  },
  {
    t: "You'll hire full-time eventually, but not this year",
    b: "The strongest use of a fractional CMO is to build the function a full-time hire will inherit, so that person starts on day one with a working engine instead of a blank CRM and a shared drive full of old decks.",
  },
];

export default function FractionalCMOvsFullTime() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        {/* ── Hero ────────────────────────────────────────── */}
        <section className="px-6 pt-20 pb-16 sm:px-10 sm:pt-24 sm:pb-20">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">Fractional CMO vs. full-time</p>
            <h1 className="display mb-8 max-w-[18ch] text-[clamp(2.3rem,5vw,4rem)]">
              Fractional CMO or a full-time hire? Here&apos;s the math.
            </h1>
            <p className="measure text-[17px] leading-[1.65] text-ink">
              A fractional CMO is a senior marketing leader who works with a
              company part-time, usually ten to twenty hours a week on a monthly
              retainer, instead of joining as a full-time executive. A full-time
              CMO or VP of Marketing is an employee who owns the marketing
              function, manages the team, and is accountable for pipeline and
              revenue targets.
            </p>
            <p className="measure mt-5 text-base leading-[1.68] text-muted">
              I&apos;m Neely Thomson. I spent twenty years as an in-house B2B
              marketing leader, most recently as VP &amp; Head of Marketing at a
              fintech payments company, and I now work as a fractional CMO for
              B2B software companies. I&apos;ve been on both sides of this
              decision. This page lays out what each option costs, when each one
              is right, and a third option I think most companies at this stage
              should consider first.
            </p>
          </div>
        </section>

        {/* ── Comparison table ─────────────────────────────── */}
        <section className="border-t border-rule px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">Side by side</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              Full-time CMO, fractional CMO, or a built engine.
            </h2>
            <p className="measure text-base leading-[1.68] text-muted">
              The figures below are US market ranges for B2B software companies
              between roughly $2M and $30M in revenue, as of 2026. Your numbers
              will differ by city and stage, but the shape of the comparison
              holds.
            </p>

            <div className="mt-11 overflow-x-auto">
              <table className="w-full min-w-[720px] border-collapse text-left">
                <thead>
                  <tr className="border-t-2 border-ink">
                    <th className="label w-[150px] py-4 pr-4 align-top font-medium">
                      &nbsp;
                    </th>
                    <th className="display-xs py-4 pr-6 align-top text-[18px] font-normal">
                      Full-time CMO
                    </th>
                    <th className="display-xs py-4 pr-6 align-top text-[18px] font-normal">
                      Fractional CMO (retainer)
                    </th>
                    <th className="display-xs py-4 align-top text-[18px] font-normal text-accent">
                      The Marketing Engine
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.k} className="border-t border-rule align-top">
                      <th scope="row" className="label py-5 pr-4 font-medium">
                        {r.k}
                      </th>
                      <td className="py-5 pr-6 text-[13.5px] leading-[1.6] text-muted">
                        {r.ft}
                      </td>
                      <td className="py-5 pr-6 text-[13.5px] leading-[1.6] text-muted">
                        {r.fc}
                      </td>
                      <td className="py-5 text-[13.5px] leading-[1.6] text-ink">
                        {r.me}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Cost math ───────────────────────────────────── */}
        <section className="border-t border-rule bg-band px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">The cost math, written out</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              What a full-time marketing leader costs in year one.
            </h2>
            <p className="measure text-base leading-[1.68] text-muted">
              Salary is the number everyone quotes and it&apos;s about half the
              bill. Here is the full-time figure the way a CFO would build it,
              for a VP of Marketing at a B2B software company in the US.
            </p>

            <div className="mt-11 grid gap-x-8 gap-y-6 md:grid-cols-3">
              <div className="border-t-2 border-ink pt-6">
                <p className="label mb-4">Full-time, year one</p>
                <ul className="text-[13.5px] leading-[1.6] text-muted">
                  <li className="flex justify-between gap-4 border-b border-rule py-2"><span>Base salary</span><span className="tnum text-ink">$200,000 to $275,000</span></li>
                  <li className="flex justify-between gap-4 border-b border-rule py-2"><span>Bonus (15 to 25 percent)</span><span className="tnum text-ink">$30,000 to $70,000</span></li>
                  <li className="flex justify-between gap-4 border-b border-rule py-2"><span>Benefits and payroll tax (~25 percent)</span><span className="tnum text-ink">$50,000 to $70,000</span></li>
                  <li className="flex justify-between gap-4 border-b border-rule py-2"><span>Recruiter fee (20 to 30 percent of base)</span><span className="tnum text-ink">$40,000 to $80,000</span></li>
                  <li className="flex justify-between gap-4 py-2"><span>Equity</span><span className="tnum text-ink">Not counted here</span></li>
                </ul>
                <p className="display tnum mt-5 text-[30px] leading-none">$320k to $495k</p>
                <p className="mt-2 text-xs leading-[1.5] text-faint">Before the person has changed anything. Add three to six months of search and a quarter of ramp.</p>
              </div>

              <div className="border-t-2 border-ink pt-6">
                <p className="label mb-4">Fractional retainer, year one</p>
                <ul className="text-[13.5px] leading-[1.6] text-muted">
                  <li className="flex justify-between gap-4 border-b border-rule py-2"><span>Monthly retainer</span><span className="tnum text-ink">$10,000 to $12,000</span></li>
                  <li className="flex justify-between gap-4 border-b border-rule py-2"><span>Hours per week, typical</span><span className="tnum text-ink">10 to 20</span></li>
                  <li className="flex justify-between gap-4 border-b border-rule py-2"><span>Minimum term, typical</span><span className="tnum text-ink">3 to 6 months</span></li>
                  <li className="flex justify-between gap-4 py-2"><span>Renewal rate, industry</span><span className="tnum text-ink">~84 percent</span></li>
                </ul>
                <p className="display tnum mt-5 text-[30px] leading-none">$120k to $144k</p>
                <p className="mt-2 text-xs leading-[1.5] text-faint">Per year, and most engagements run past one. The systems they build tend to leave when they do.</p>
              </div>

              <div className="border-t-2 border-accent pt-6">
                <p className="label mb-4">The Marketing Engine</p>
                <ul className="text-[13.5px] leading-[1.6] text-muted">
                  <li className="flex justify-between gap-4 border-b border-rule py-2"><span>The Diagnostic, two weeks</span><span className="tnum text-ink">$7,500</span></li>
                  <li className="flex justify-between gap-4 border-b border-rule py-2"><span>The build, ninety days</span><span className="tnum text-ink">Fixed fee, scoped after the Diagnostic</span></li>
                  <li className="flex justify-between gap-4 border-b border-rule py-2"><span>Support after handoff</span><span className="tnum text-ink">Four weeks, included</span></li>
                  <li className="flex justify-between gap-4 py-2"><span>Ongoing requirement</span><span className="tnum text-ink">None</span></li>
                </ul>
                <p className="display tnum mt-5 text-[30px] leading-none text-accent">One fixed number</p>
                <p className="mt-2 text-xs leading-[1.5] text-faint">Agreed in writing before the build starts, and priced to come in under six months of a market-rate retainer. The Diagnostic fee is credited in full.</p>
              </div>
            </div>

            <p className="measure mt-11 border-t border-rule pt-7 text-base leading-[1.68] text-muted">
              The comparison people get wrong is fractional against full-time.
              The one that decides it for a company at this stage is fractional
              against an implementation partner, the agency or consultancy that
              would build your CRM, automation, and scoring for $25,000 to
              $75,000 and leave you the configuration without the strategy. A
              ninety-day engine build sits in that range and includes the
              strategy, the handoff, and the person on your team who knows how
              it works.
            </p>
          </div>
        </section>

        {/* ── When full-time is right ──────────────────────── */}
        <section className="border-t border-rule px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">When to hire full-time</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              A full-time CMO is the right answer in three situations.
            </h2>
            <p className="measure text-base leading-[1.68] text-muted">
              I&apos;d rather tell you this now than after a Diagnostic. If any
              of these describe you, go hire the executive, and I&apos;ll happily
              build the engine they inherit.
            </p>
            <div className="mt-9">
              {fullTimeCases.map((c, i) => (
                <div
                  key={c.t}
                  className={`grid gap-4 py-7 md:grid-cols-[170px_1fr] md:gap-10 ${i === 0 ? "" : "border-t border-rule"}`}
                >
                  <div>
                    <p className="text-[12.5px] font-medium">{c.t}</p>
                    <p className="label mt-1 tnum">0{i + 1}</p>
                  </div>
                  <p className="max-w-[62ch] text-[15px] leading-[1.7] text-muted">{c.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── When fractional is right ─────────────────────── */}
        <section className="border-t border-rule px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">When to go fractional</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              A fractional CMO is the right answer in four situations.
            </h2>
            <p className="measure text-base leading-[1.68] text-muted">
              These are the companies I work with, and they have more in common
              with each other than with the product-led software company down
              the street.
            </p>
            <div className="mt-9">
              {fractionalCases.map((c, i) => (
                <div
                  key={c.t}
                  className={`grid gap-4 py-7 md:grid-cols-[170px_1fr] md:gap-10 ${i === 0 ? "" : "border-t border-rule"}`}
                >
                  <div>
                    <p className="text-[12.5px] font-medium">{c.t}</p>
                    <p className="label mt-1 tnum">0{i + 1}</p>
                  </div>
                  <p className="max-w-[62ch] text-[15px] leading-[1.7] text-muted">{c.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── The third option ─────────────────────────────── */}
        <section className="bg-ink px-6 pt-24 pb-20 text-band sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8 text-white/40">The third option</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)] text-white">
              Build the engine first. Then hire the person to run it.
            </h2>
            <p className="measure text-base leading-[1.68] text-white/60">
              The Marketing Engine is a ninety-day, fixed-scope fractional CMO
              engagement that builds a B2B company&apos;s marketing systems and
              hands them to a named person on the client&apos;s own team. It
              covers positioning and messaging, lifecycle sequencing, lead
              scoring, CRM and marketing automation integration, routing rules,
              the marketing and sales SLA, attribution, and a weekly operating
              cadence. It doesn&apos;t include writing content, designing
              creative, or running paid campaigns; those stay with the
              client&apos;s team or a partner.
            </p>
            <p className="measure mt-4 text-base leading-[1.68] text-white/60">
              The difference from a retainer is that it ends on purpose. Every
              system goes through a three-rep handoff: I build the first version
              while your operator watches, they build the second and I review it
              before it ships, they build the third alone. When the ninety days
              are up, the engine is theirs, and the marketing leader you hire
              afterward, full-time or fractional, starts with something that
              already works.
            </p>
            <p className="mt-9 text-[13.5px] leading-[1.6] text-white/60">
              Everything starts with a two-week Diagnostic at $7,500, credited in
              full toward the build.{" "}
              <a href="/#start" className="border-b border-accent pb-px text-white transition-colors hover:text-accent">
                Start a Diagnostic
              </a>
              , or{" "}
              <a href="/faq" className="border-b border-white/30 pb-px text-white transition-colors hover:text-accent">
                read the questions people ask first
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
