import TrackedLink from "@/components/TrackedLink";
import { BOOKING_URL } from "@/lib/site";

const proof = [
  {
    v: "60%",
    l: "of manual campaign work removed",
    s: "Fintech payments, under NACHA and CFPB",
    href: "/work/fintech-payments",
  },
  {
    v: "5:1",
    l: "LTV:CAC over four years",
    s: "Same engine, same company",
    href: "/work/fintech-payments",
  },
  {
    v: "75%",
    l: "lift in partner engagement",
    s: "National nonprofit, $70M marketing org",
    href: "/work/nonprofit-partnerships",
  },
  {
    v: "15%",
    l: "more net-new leads acquired",
    s: "Same nonprofit, same engine",
    href: "/work/nonprofit-partnerships",
  },
];

export default function Hero() {
  return (
    <>
      <section className="reveal px-6 pt-24 pb-20 sm:px-10">
        <div className="mx-auto max-w-[960px]">
          <div>
            <p className="label mb-8">Fractional CMO · Regulated industries</p>

            <h1 className="display mb-8 max-w-[16ch] text-[clamp(2.9rem,6.6vw,5.4rem)]">
              I rebuild marketing functions{" "}
              <em className="font-light italic">for regulated B2B software.</em>
            </h1>

            <p className="mb-9 max-w-[60ch] text-[17px] leading-[1.62] text-muted">
              For companies selling to banks, schools, hospitals and government
              agencies. I rebuild your marketing around AI, get it through legal
              review, and train your team to run it. Ninety days, fixed price.
            </p>

            <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
              <TrackedLink
                event="diagnostic_cta_click"
                place="hero"
                href="#start"
                className="rounded-sm bg-ink px-[22px] py-[13px] text-sm font-medium text-bg transition-colors hover:bg-accent"
              >
                Start with a Diagnostic &nbsp;&rarr;
              </TrackedLink>
              {BOOKING_URL ? (
                <TrackedLink
                  event="book_call_click"
                  place="hero"
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-accent pb-0.5 text-sm font-medium text-ink transition-colors hover:text-accent"
                >
                  Or book a 20-minute call
                </TrackedLink>
              ) : (
                <a
                  href="#engine"
                  className="border-b border-accent pb-0.5 text-sm font-medium text-ink transition-colors hover:text-accent"
                >
                  How it works
                </a>
              )}
            </div>
          </div>

        </div>
      </section>

      <div className="border-t border-rule bg-band px-6 py-13 sm:px-10">
        <div className="mx-auto max-w-[960px]">
          <div className="mb-9 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
            <p className="label">Results</p>
            <a
              href="/work"
              className="border-b border-accent pb-px text-[13px] text-ink transition-colors hover:text-accent"
            >
              All case studies &rarr;
            </a>
          </div>
          <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-4">
            {proof.map((p) => (
              <a
                key={p.l}
                href={p.href}
                className="group block border-t border-rule pt-5 transition-colors hover:border-accent"
              >
                <div className="display tnum text-[40px] leading-none transition-colors group-hover:text-accent">
                  {p.v}
                </div>
                <p className="mt-[9px] max-w-[20ch] text-[12.5px] leading-[1.45] text-muted">
                  {p.l}
                </p>
                <p className="label mt-1.5">{p.s}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
