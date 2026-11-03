import Link from "next/link";
import { getEssays } from "@/lib/substack";

// One hairline row, fed by the Substack feed, so the homepage always points at
// the newest essay without anyone touching it.
export default async function LatestEssay() {
  const [essay] = await getEssays();
  if (!essay) return null;

  return (
    <section className="border-t border-rule px-6 py-14 sm:px-10 sm:py-16">
      <div className="mx-auto grid max-w-[960px] gap-4 md:grid-cols-[170px_1fr] md:gap-10">
        <div>
          <p className="label">Latest essay</p>
          <p className="tnum mt-2 text-[12.5px] leading-[1.5] text-faint">
            <time dateTime={essay.isoDate}>{essay.date}</time>
          </p>
        </div>
        <div>
          <h2 className="display-xs max-w-[28ch] text-[clamp(1.35rem,2.4vw,1.75rem)]">
            <Link href={`/writing/${essay.slug}`} className="transition-colors hover:text-accent">
              {essay.title}
            </Link>
          </h2>
          {essay.dek && (
            <p className="measure mt-3 text-[15px] leading-[1.65] text-muted">{essay.dek}</p>
          )}
          <p className="mt-5 text-[13px] text-faint">
            <Link
              href={`/writing/${essay.slug}`}
              className="border-b border-accent pb-px text-ink transition-colors hover:text-accent"
            >
              Read it
            </Link>
            <span className="px-2">&middot;</span>
            <Link href="/writing" className="transition-colors hover:text-accent">
              All essays, every other Tuesday
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
