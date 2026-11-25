// The short homepage version of the named list on /work. Names only: no
// results sit beside a name, and the case studies stay anonymized.
const names = [
  "stable/kernel",
  "LeadLife Solutions",
  "PGi",
  "Socialvest",
  "Pfizer Animal Health (now Zoetis)",
];

export default function NamedWork() {
  return (
    <section id="named" className="scroll-mt-20 border-t border-rule bg-band px-6 pt-20 pb-16 sm:px-10 sm:pt-24 sm:pb-20">
      <div className="mx-auto max-w-[960px]">
        <p className="label mb-8">Where I&apos;ve done this work</p>
        <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
          I&apos;ve worked this way before.
        </h2>
        <p className="measure text-base leading-[1.68] text-muted">
          Two companies brought me in as their marketing lead to build a program, get it
          running, and hand it to someone in-house. The rest are programs I built from the
          inside.
        </p>
        <ul className="mt-9 flex flex-wrap gap-x-9 gap-y-3 border-t border-rule pt-6">
          {names.map((n) => (
            <li key={n} className="text-[15px] font-medium text-ink">
              {n}
            </li>
          ))}
        </ul>
        <p className="mt-7">
          <a
            href="/work#named"
            className="border-b border-accent pb-px text-[13px] text-ink transition-colors hover:text-accent"
          >
            What I built at each &rarr;
          </a>
        </p>
      </div>
    </section>
  );
}
