const track = [
  { k: "2020 — present", v: "Independent · Fractional CMO & marketing systems" },
  { k: "2025 — present", v: "Kindling · Founder" },
  { k: "2022 — 2026", v: "Dwolla · VP & Head of Marketing" },
  { k: "2018 — 2022", v: "ASPCA · Director of B2B Engagement" },
  { k: "2014 — 2016", v: "PGi · Sr. Sales Enablement Marketing Manager" },
  { k: "2013 — 2014", v: "LeadLife Solutions · Marketing Manager" },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-rule px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
      <div className="mx-auto grid max-w-[960px] items-start gap-8 lg:grid-cols-2 lg:gap-14">
        <div>
          <p className="label mb-8">About</p>
          <h2 className="display-sm mb-5 text-[clamp(1.9rem,3.4vw,2.9rem)]">
            Neely Thomson
          </h2>
          <p className="text-base leading-[1.68] text-muted">
            Twenty years building, scaling, and leading B2B SaaS and fintech
            marketing teams — most recently as VP &amp; Head of Marketing at
            Dwolla, where I led a company-wide AI marketing transformation and
            stepped in as interim sales leader.
          </p>
          <p className="mt-4 text-base leading-[1.68] text-muted">
            Now I work independently, building marketing engines for B2B
            software companies selling into regulated and institutional buyers.
            I also build{" "}
            <a
              href="https://kindlingmagic.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-accent pb-px text-ink transition-colors hover:text-accent"
            >
              Kindling
            </a>
            , an AI marketing teammate for very small teams.
          </p>
        </div>

        <div>
          <p className="label mb-8">Track record</p>
          <ul>
            {track.map((r) => (
              <li
                key={r.v}
                className="grid gap-1 border-t border-rule py-3 text-[13.5px] leading-[1.5] text-muted sm:grid-cols-[118px_1fr] sm:gap-4"
              >
                <span className="label pt-0.5">{r.k}</span>
                {r.v}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
