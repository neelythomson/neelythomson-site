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
            <p className="label mb-8">Marketing functions · B2B software startups</p>

            <h1 className="display mb-8 max-w-[16ch] text-[clamp(2.9rem,6.6vw,5.4rem)]">
              I build revenue-generating marketing functions{" "}
              <em className="font-light italic">for software startups.</em>
            </h1>

            <p className="mb-9 max-w-[60ch] text-[17px] leading-[1.62] text-muted">
              Whether you&apos;re about to make your first marketing hire or
              growing the function you have, I make sure you&apos;re building a
              revenue-generating engine at every step. Most of my work is in
              regulated software: fintech, healthtech, edtech, govtech.
            </p>

            <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
              <TrackedLink
                event="diagnostic_cta_click"
                place="hero"
                href="#start"
                className="rounded-sm bg-ink px-[22px] py-[13px] text-sm font-medium text-bg transition-colors hover:bg-accent"
              >
                Start the conversation &nbsp;&rarr;
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
                  href="#doors"
                  className="border-b border-accent pb-0.5 text-sm font-medium text-ink transition-colors hover:text-accent"
                >
                  Two ways in
                </a>
              )}
            </div>
          </div>

        </div>
      </section>

      <div className="border-t border-rule bg-band px-6 py-13 sm:px-10">
        <div className="mx-auto max-w-[960px]">
          <div className="mb-9 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
            <p className="label">Proof <span className="text-accent">· measured on pipeline and revenue</span></p>
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
