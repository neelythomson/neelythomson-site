import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TITLE = "What Is a Marketing Engine? The Three Layers, Defined";
const DESCRIPTION =
  "A marketing engine is the set of systems underneath marketing that decide what gets made, for whom, where it goes, and whether it worked. Three layers, three terms, and a five-question test.";
const URL = "https://neelythomson.com/marketing-engine";

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
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Neely Thomson. I build the marketing engine. Your team runs it." }],
    type: "article",
  },
};

const layers = [
  {
    n: "01",
    name: "The strategy layer",
    verb: "Points the engine",
    def: "The strategy layer decides who you sell to and where effort goes. It is the ICP with its subsegments, a one-page go-to-market per business unit, positioning and messaging, the brand system, and channel bets written as hypotheses with kill and scale criteria.",
    without: "Without it, the team produces for everyone and lands with no one. Requests come from whoever asks loudest. Plans are quarterly in one team and annual in another.",
    working: "Every campaign brief can name the segment, the buyer, the claim, and the channel bet it belongs to, and someone signed the page those came from.",
  },
  {
    n: "02",
    name: "The operating system",
    verb: "Runs it",
    def: "The operating system is the set of definitions and processes that move work through the company. One written definition of a qualified lead, with deal-value thresholds where they belong. Scoring and routing built into the CRM. The marketing-to-sales SLA, signed by both sides. A working process for the AI tools you already bought: brief template, subject-matter-expert step, prompt and template libraries, a written quality bar. One intake queue. A weekly cadence.",
    without: "Without it, sales and marketing argue about lead credit, the AI tools produce plausible copy in the wrong voice, and the head of marketing is an order taker who cannot prove they are overloaded.",
    working: "A lead moves from first touch to sales-accepted with its source stamped, nobody ticks a box to claim it, and a campaign goes from brief to shipped without the CEO approving copy.",
  },
  {
    n: "03",
    name: "The optimization loop",
    verb: "Makes it cheaper per opportunity",
    def: "The optimization loop measures every channel on the pipeline it returns per dollar, conferences included, on one five-metric scoreboard, and moves budget toward what returns on a quarterly cadence. A board one-pager assembles itself from the scoreboard.",
    without: "Without it, the board reviews MQL counts, the conference calendar grows every year, and nobody can say which of last quarter's activity produced pipeline.",
    working: "The hour before the board meeting is not an assembly scramble, and every channel bet has a decision date on the calendar.",
  },
];

const terms = [
  {
    t: "Plumbing over production",
    d: "The routing, scoring, and attribution that decide whether anything you make turns into pipeline. AI made production cheap. That is exactly what made the plumbing scarce, and the plumbing is where a marketing leader's judgment now goes.",
  },
  {
    t: "Build-and-leave",
    d: "An engagement designed to end. The systems are built in the client's own tools, documented, and run by a named person on the client's team before the consultant steps out. The opposite of a retainer, which pays the consultant for staying.",
  },
  {
    t: "The engine becomes a screenshot",
    d: "What happens to a marketing system nobody runs. Six months after the consultant leaves, the dashboard is a picture in a deck and the process lives in someone's memory. The weekly cadence and the named operator are what stop this.",
  },
];

const test = [
  "Can you name, in one sentence, the definition of a qualified lead that sales and marketing both signed?",
  "Can you say which three channels produced the most pipeline per dollar last quarter, and which one you cut?",
  "If your best marketer left tomorrow, is there a written procedure for every workflow they run?",
  "Do requests to marketing go through one queue where they are ranked, or through whoever asks loudest?",
  "Does the board see a one-pager that assembles itself from a scoreboard, or a deck someone builds the night before?",
];

const faq = [
  {
    q: "What is a marketing engine?",
    a: "A marketing engine is the set of systems underneath marketing that decide what gets made, for whom, where it goes, and whether it worked. It has three layers: the strategy layer points it, the operating system runs it, and the optimization loop makes it cheaper per opportunity. Most companies have content and campaigns but no engine.",
  },
  {
    q: "What are the three layers of a marketing engine?",
    a: "The strategy layer (ICP, go-to-market per business unit, positioning and messaging, channel bets with kill and scale criteria), the operating system (one lead definition, scoring and routing in the CRM, the sales SLA, the AI production process, intake, a weekly cadence), and the optimization loop (pipeline per dollar by channel on one scoreboard, quarterly budget reallocation, a board one-pager).",
  },
  {
    q: "What does plumbing over production mean?",
    a: "Plumbing over production means the routing, scoring, and attribution that decide whether anything you make turns into pipeline matter more than the volume of what you make. AI made production cheap, which made the plumbing scarce.",
  },
  {
    q: "How do I know if my company has a marketing engine?",
    a: "Five questions: whether sales and marketing signed one lead definition; whether you can name pipeline per dollar by channel; whether every workflow has a written procedure; whether requests go through one ranked queue; and whether the board sees a self-assembling one-pager. Fewer than three yeses means you have marketing activity, not an engine.",
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
      about: ["Marketing engine", "B2B marketing operations", "Marketing systems"],
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
    {
      "@type": "DefinedTermSet",
      "@id": `${URL}#terms`,
      name: "Marketing engine vocabulary",
      hasDefinedTerm: terms.map((t) => ({
        "@type": "DefinedTerm",
        name: t.t,
        description: t.d,
        inDefinedTermSet: `${URL}#terms`,
      })),
    },
  ],
};

function slug(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9\s]/g, "").trim().replace(/\s+/g, "-");
}

export default function MarketingEngine() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">Definition</p>
            <h1 className="display mb-8 max-w-[16ch] text-[clamp(2.2rem,4.8vw,3.8rem)]">
              What is a marketing engine?
            </h1>
            <p className="measure text-[17px] leading-[1.62] text-muted">
              A marketing engine is the set of systems underneath marketing
              that decide what gets made, for whom, where it goes, and whether
              it worked. It has three layers. The strategy layer points it. The
              operating system runs it. The optimization loop makes it cheaper
              per opportunity every quarter.
            </p>
            <p className="measure mt-4 text-[17px] leading-[1.62] text-muted">
              Most companies have content and campaigns but no engine. That is
              why nobody can say which of last quarter&apos;s activity produced
              pipeline, why sales and marketing argue about lead credit, and why
              the AI tools that were supposed to help made the queue longer.
            </p>
          </div>
        </section>

        <section className="border-t border-rule bg-band px-6 pt-20 pb-20 sm:px-10 sm:pt-24 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">The three layers</p>
            <svg viewBox="0 0 960 330" className="w-full" role="img" aria-label="Three stacked layers: the strategy layer points the engine, the operating system runs it, the optimization loop makes it cheaper per opportunity and feeds back into strategy.">
              <defs>
                <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#b33a24" />
                </marker>
              </defs>
              {[
                { y: 10, n: "01", t: "The strategy layer", v: "points it", items: "ICP and subsegments · go-to-market per business unit · positioning and messaging · channel bets with kill and scale criteria" },
                { y: 120, n: "02", t: "The operating system", v: "runs it", items: "one lead definition · scoring and routing · the sales SLA · AI production process · intake queue · weekly cadence" },
                { y: 230, n: "03", t: "The optimization loop", v: "makes it cheaper", items: "pipeline per dollar by channel · one scoreboard · quarterly budget reallocation · board one-pager" },
              ].map((l) => (
                <g key={l.n}>
                  <rect x="0" y={l.y} width="860" height="86" fill="#fbfaf8" stroke="#e7e4de" />
                  <text x="20" y={l.y + 26} fontFamily="Inter, system-ui, sans-serif" fontSize="10.5" letterSpacing="1.6" fill="#706c65">{l.n}</text>
                  <text x="20" y={l.y + 50} fontFamily="Newsreader, Georgia, serif" fontSize="22" fill="#1a1917">{l.t}<tspan fontStyle="italic" fill="#b33a24"> {l.v}</tspan></text>
                  <text x="20" y={l.y + 72} fontFamily="Inter, system-ui, sans-serif" fontSize="12" fill="#6b6862">{l.items}</text>
                </g>
              ))}
              <line x1="430" y1="97" x2="430" y2="118" stroke="#b33a24" strokeWidth="1.5" markerEnd="url(#arrow)" />
              <line x1="430" y1="207" x2="430" y2="228" stroke="#b33a24" strokeWidth="1.5" markerEnd="url(#arrow)" />
              <path d="M 860 273 L 912 273 L 912 53 L 862 53" fill="none" stroke="#b33a24" strokeWidth="1.5" markerEnd="url(#arrow)" />
              <text x="932" y="163" fontFamily="Inter, system-ui, sans-serif" fontSize="10.5" letterSpacing="1.2" fill="#706c65" transform="rotate(90 932 163)" textAnchor="middle">FEEDS BACK</text>
            </svg>
          </div>
        </section>

        {layers.map((l) => (
          <section key={l.n} id={slug(l.name)} className="scroll-mt-20 border-t border-rule px-6 pt-20 pb-16 sm:px-10 sm:pt-24 sm:pb-20">
            <div className="mx-auto max-w-[960px]">
              <p className="label mb-6">{l.n} <span className="mx-0.5">·</span> {l.verb}</p>
              <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">{l.name}</h2>
              <p className="measure text-base leading-[1.68] text-muted">{l.def}</p>
              <div className="mt-9 grid gap-x-12 gap-y-6 sm:grid-cols-2">
                <div className="border-t border-rule pt-4">
                  <p className="label mb-2">Without it</p>
                  <p className="text-[14.5px] leading-[1.65] text-muted">{l.without}</p>
                </div>
                <div className="border-t border-rule pt-4">
                  <p className="label mb-2">Working looks like</p>
                  <p className="text-[14.5px] leading-[1.65] text-muted">{l.working}</p>
                </div>
              </div>
            </div>
          </section>
        ))}

        <section className="bg-ink px-6 pt-24 pb-20 text-band sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8 text-white/55">Three terms</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)] text-white">
              The vocabulary, defined once.
            </h2>
            <div className="mt-11">
              {terms.map((t, i) => (
                <div key={t.t} id={slug(t.t)} className={`scroll-mt-20 grid gap-3 py-7 md:grid-cols-[260px_1fr] md:gap-10 ${i === 0 ? "" : "border-t border-white/20"}`}>
                  <h3 className="display-xs text-[20px] text-white">{t.t}</h3>
                  <p className="max-w-[62ch] text-[15px] leading-[1.7] text-white/60">{t.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-rule px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">The five-question test</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              Do you have a marketing engine?
            </h2>
            <p className="measure text-base leading-[1.68] text-muted">
              Fewer than three yeses means you have marketing activity, not an
              engine. That is the normal state, and it is fixable in weeks, not
              quarters.
            </p>
            <ol className="mt-9 max-w-[70ch]">
              {test.map((q, i) => (
                <li key={q} className="grid gap-2 border-t border-rule py-5 md:grid-cols-[60px_1fr] md:gap-6">
                  <span className="label tnum pt-1">0{i + 1}</span>
                  <p className="text-[15px] leading-[1.7] text-ink">{q}</p>
                </li>
              ))}
            </ol>
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
            <p className="label mb-8">Built, not described</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              I build the marketing engine. Your team runs it.
            </h2>
            <p className="measure text-base leading-[1.68] text-muted">
              Three engines are written up, names withheld, at{" "}
              <a href="/work" className="border-b border-accent pb-px text-ink transition-colors hover:text-accent">Work</a>.
              Every one started with the same two-week audit.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <a href="/diagnostic" className="rounded-sm bg-ink px-[22px] py-[13px] text-sm font-medium text-bg transition-colors hover:bg-accent">
                The Diagnostic &nbsp;&rarr;
              </a>
              <a href="/#engine" className="border-b border-accent pb-0.5 text-sm font-medium text-ink transition-colors hover:text-accent">
                What gets built in ninety days
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
