import type { Metadata } from "next";
import StartCta from "@/components/StartCta";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import Byline from "@/components/Byline";
import ReadNext from "@/components/ReadNext";
import PageFaq from "@/components/PageFaq";

const TITLE = "Head of Growth vs Head of Marketing: Which Title a B2B Startup Should Post";
const DESCRIPTION =
  "The difference between a head of growth and a head of marketing at a B2B software startup: the number each owns, how each works, what each needs in place, and a decision rule for which to hire.";
const URL = "https://neelythomson.com/head-of-growth-vs-head-of-marketing";
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

const rows = [
  { k: "The number they own", growth: "One metric across the whole funnel: signups to paid, activation, retention, expansion.", mkt: "Pipeline, and the budget that produced it." },
  { k: "How they get there", growth: "Experiments. Many, fast, each with a rule for when to kill it and when to scale it.", mkt: "Decisions. The segment, the message and the channel bets, then a team or agencies to run them." },
  { k: "Who they work with most", growth: "Product and data. Much of the work ships inside the product.", mkt: "Sales. A peer to whoever runs it, and the other signature on the SLA." },
  { k: "What has to exist first", growth: "Volume. Enough signups or traffic that a test reads in weeks, and product analytics you trust.", mkt: "A sales motion. Reps, a lead definition, and a CRM whose numbers people believe." },
  { k: "Where they usually come from", growth: "Product-led and consumer companies, performance marketing, product management.", mkt: "Demand generation, product marketing, or a first-marketer seat at a sales-led company." },
  { k: "What goes wrong", growth: "Hired into a sales-led company with a few dozen deals a year. No test ever reaches a result.", mkt: "Hired into a self-serve product. Builds a pipeline motion for a buyer who never talks to sales." },
];

const faq = [
  {
    q: "What is the difference between a head of growth and a head of marketing?",
    a: "A head of growth owns one number across the whole funnel, from signup through retention, and moves it by running experiments, often inside the product. A head of marketing owns who the company sells to, what it says, and the pipeline the sales team works. The first fits a product a customer can buy without talking to anyone. The second fits a product sold through a sales conversation.",
  },
  {
    q: "Should a B2B SaaS startup hire a head of growth or a head of marketing first?",
    a: "If most customers talk to a salesperson before they pay, hire a head of marketing. If most customers sign up and pay on their own, hire a head of growth. A sales-led B2B company rarely has the volume a growth role needs: with a few dozen deals a year and a buying committee on each, experiments take quarters to read.",
  },
  {
    q: "Is a head of growth more senior than a head of marketing?",
    a: "No. They are parallel titles for different jobs. The level of either role is set by who decides strategy for the next twelve months, the founder or the hire. A head of growth who runs experiments the founder chose is a manager with a bigger title, and the same is true of a head of marketing who executes the founder's plan.",
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
      about: ["Head of Growth", "Head of Marketing", "First marketing hire", "B2B SaaS marketing"],
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

export default function GrowthVsMarketing() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <Breadcrumbs items={[{ name: "Your first marketing hire", url: "https://neelythomson.com/first-marketing-hire" }, { name: "Head of growth vs head of marketing", url: URL }]} />
      <main id="main">
        <section className="px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">A guide for founders · Choosing the title</p>
            <h1 className="display mb-8 max-w-[16ch] text-[clamp(2.2rem,4.8vw,3.8rem)]">
              Head of growth, or head of marketing?
            </h1>
            <p className="measure text-[17px] leading-[1.62] text-muted">
              A head of growth owns one number across the whole funnel and
              moves it by running experiments, often inside the product. A
              head of marketing owns who you sell to, what you say, and the
              pipeline your sales team works. They are different jobs, and
              which one is open at your company depends on where your
              customer decides to buy: in the product, or in a conversation
              with a salesperson.
            </p>
            <p className="measure mt-4 text-[17px] leading-[1.62] text-muted">
              This page is for the founder of a B2B software startup choosing
              between the two titles before the posting goes up.
            </p>
            <Byline date={PUBLISHED} label="Published" className="mt-6" />
            <ReadNext
              className="mt-8"
              next={{
                lead: "Choosing the level, not the title?",
                href: "/head-of-marketing-vs-marketing-manager",
                text: "Head of marketing, or marketing manager",
              }}
              step={{
                lead: "Posting written already?",
                href: "/scorecard",
                text: "Score it in ten lines before it goes live",
              }}
            />
          </div>
        </section>

        <section className="border-t border-rule px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">The decision</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              Where does your customer decide to buy?
            </h2>
            <p className="measure text-base leading-[1.68] text-muted">
              If a customer can sign up, try the product and pay without
              talking to anyone, the buying decision happens in the product.
              Growth is the job: get more people in, get them to the moment
              the product proves itself, keep them. That work lives in
              onboarding flows, pricing pages and usage data, and it runs on
              experiments.
            </p>
            <p className="measure mt-4 text-base leading-[1.68] text-muted">
              If a customer talks to a salesperson first, the decision
              happens in that conversation, usually with several people on
              the buyer&apos;s side. Marketing is the job: pick the segment,
              settle the message, and fill the pipeline your reps work.
            </p>
            <p className="measure mt-4 text-base leading-[1.68] text-muted">
              A quick test: pull your last ten closed deals and count how
              many spoke to a salesperson before paying. Eight or more, and
              the title on the posting is head of marketing. Two or fewer,
              head of growth. Anything in between, read the section on
              needing both.
            </p>
          </div>
        </section>

        <section className="border-t border-rule bg-band px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">Side by side</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              What each role owns.
            </h2>
            <div className="mt-9 overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-rule">
                    <th scope="col" className="label pb-4 pr-6 font-medium">&nbsp;</th>
                    <th scope="col" className="label pb-4 pr-6 font-medium">Head of growth</th>
                    <th scope="col" className="label pb-4 font-medium">Head of marketing</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.k} className="border-b border-rule align-top">
                      <th scope="row" className="w-[22%] py-5 pr-6 text-[14px] font-medium leading-[1.5] text-ink">{r.k}</th>
                      <td className="w-[39%] py-5 pr-6 text-[14px] leading-[1.65] text-muted">{r.growth}</td>
                      <td className="w-[39%] py-5 text-[14px] leading-[1.65] text-muted">{r.mkt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="border-t border-rule px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">Regulated and sales-led</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              Why does a growth title struggle in regulated B2B?
            </h2>
            <p className="measure text-base leading-[1.68] text-muted">
              Growth work needs volume and speed. Regulated B2B has neither.
              When you sell to banks, health systems or public agencies, a
              year might hold a few dozen deals, each with a security
              reviewer and a procurement calendar. An experiment on that
              funnel takes quarters to read.
            </p>
            <p className="measure mt-4 text-base leading-[1.68] text-muted">
              Speed has a second limit. When legal reads the landing page,
              every variant of a claim is another review. Ten versions of a
              headline is a normal week for a growth team and a month of
              compliance queue for you.
            </p>
            <p className="measure mt-4 text-base leading-[1.68] text-muted">
              So in most of the companies I work with, the open role is a
              head of marketing, whatever the founder first called it. The
              experimental habit is still worth hiring for. Ask for it in
              the interview, and write channel bets with kill and scale
              criteria into the plan.
            </p>
          </div>
        </section>

        <section className="border-t border-rule bg-band px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">In between</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              What if you need both?
            </h2>
            <p className="measure text-base leading-[1.68] text-muted">
              Some companies do: a self-serve tier feeding a sales team, or
              a free product with an enterprise plan on top. A combined
              title is fine. What it can&apos;t be is two jobs with two
              numbers. Name the one number the role owns in its first year,
              and say in the posting which motion comes first.
            </p>
            <p className="measure mt-4 text-base leading-[1.68] text-muted">
              And check whether you need a head at all. A company still
              finding its first channel usually needs a growth generalist
              who tests fast with the founder close by. That&apos;s a
              different level and a different salary.{" "}
              <a href="/head-of-marketing-vs-marketing-manager" className={link}>
                Head of marketing, or marketing manager
              </a>{" "}
              covers the level, and the{" "}
              <a href="/first-marketing-hire" className={link}>
                full guide to the first hire
              </a>{" "}
              covers the three roles side by side.
            </p>
          </div>
        </section>

        <section className="border-t border-rule px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">If you want it decided with you</p>
            <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              The title follows the role. Decide the role first.
            </h2>
            <p className="measure text-base leading-[1.68] text-muted">
              The role, its level and its title are the first deliverable of{" "}
              <a href="/first-hire-plan" className={link}>
                The First Hire Plan
              </a>
              , alongside the plan, the budget, the stack, the lead
              definition and the scoreboard: six weeks, fixed fee, finished
              before the posting goes up.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <StartCta place="growth-vs-marketing" />
            </div>
          </div>
        </section>
        <PageFaq items={faq} />
      </main>
      <Footer />
    </>
  );
}
