// One byline row, used under the lede of every article and offer page: the
// author linked to /about (the Person entity page) and a true, labelled date
// that matches the page's dateModified.
export default function Byline({
  date,
  label = "Updated",
  className = "",
}: {
  date: string; // YYYY-MM-DD
  label?: "Updated" | "Published";
  className?: string;
}) {
  const d = new Date(`${date}T12:00:00-05:00`);
  const text = d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "America/New_York" });
  return (
    <p className={`label ${className}`}>
      By{" "}
      <a href="/about" className="text-ink transition-colors hover:text-accent">
        Neely Thomson
      </a>
      <span className="mx-1.5">·</span>
      {label} <time dateTime={date}>{text}</time>
    </p>
  );
}
