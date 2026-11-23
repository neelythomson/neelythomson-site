type Item = { lead: string; href: string; text: string };

// One hairline row that hands the reader a next page: `next` is the related
// read, `step` is the way toward the offer. Same shape as the "Related
// reading" rows, placed high on the page, where people are still reading.
export default function ReadNext({
  next,
  step,
  className = "",
}: {
  next: Item;
  step: Item;
  className?: string;
}) {
  const link = "border-b border-accent pb-px text-ink transition-colors hover:text-accent";
  return (
    <p className={`max-w-2xl border-t border-rule pt-6 text-[14px] leading-[1.65] text-muted ${className}`}>
      <span className="label mr-3">Read next</span>
      {next.lead}{" "}
      <a href={next.href} className={link}>
        {next.text}
      </a>
      . {step.lead}{" "}
      <a href={step.href} className={link}>
        {step.text}
      </a>
      .
    </p>
  );
}
