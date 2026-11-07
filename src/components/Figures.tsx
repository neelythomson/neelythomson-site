// A hairline list of third-party figures, each with the number set in the
// display face, the claim in body type, and the source named and linked
// inline. Used on the offer and article pages so a reader (or an answer
// engine) can check every number against where it came from.

export type Figure = {
  n: string; // the number, as displayed
  t: string; // the claim, one sentence, no trailing period
  s: string; // source name as displayed
  href: string; // source URL
  note?: string; // optional qualifier, e.g. the survey year or sample
};

export default function Figures({
  label = "By the numbers",
  intro,
  items,
  className = "",
}: {
  label?: string;
  intro?: string;
  items: Figure[];
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="label mb-6">{label}</p>
      {intro ? (
        <p className="measure mb-2 text-[15px] leading-[1.7] text-muted">{intro}</p>
      ) : null}
      <dl>
        {items.map((f, i) => (
          <div
            key={f.n + f.s}
            className={`grid gap-2 py-6 md:grid-cols-[170px_1fr] md:gap-10 ${i === 0 ? "" : "border-t border-rule"}`}
          >
            <dt className="display tnum text-[34px] leading-none text-ink sm:text-[38px]">{f.n}</dt>
            <dd className="max-w-[62ch]">
              <p className="text-[15px] leading-[1.7] text-muted">{f.t}.</p>
              <p className="mt-2 text-[13px] leading-[1.6] text-faint">
                <a
                  href={f.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-rule pb-px text-ink transition-colors hover:border-accent hover:text-accent"
                >
                  {f.s}
                </a>
                {f.note ? <span>, {f.note}</span> : null}
              </p>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
