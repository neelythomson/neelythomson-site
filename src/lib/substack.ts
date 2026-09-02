import snapshot from "@/data/essays.json";

export const SUBSTACK = "https://neelythomson.substack.com";

export type Essay = {
  slug: string;
  title: string;
  dek: string;
  date: string;
  isoDate: string;
  substackUrl: string;
  excerpt: string[];
};

type StoredEssay = Omit<Essay, "date">;

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

function hydrate(e: StoredEssay): Essay {
  return { ...e, date: formatDate(e.isoDate) };
}

const NAMED: Record<string, string> = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  nbsp: " ",
  hellip: "…",
  rsquo: "’",
  lsquo: "‘",
  ldquo: "“",
  rdquo: "”",
  mdash: "—",
  ndash: "–",
};

function decode(input: string): string {
  return input
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&([a-z]+);/gi, (m, name) => NAMED[name.toLowerCase()] ?? m)
    .replace(/ /g, " ");
}

function tag(block: string, name: string): string {
  const re = new RegExp(`<${name}[^>]*>(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?</${name}>`);
  const m = block.match(re);
  return m ? m[1].trim() : "";
}

// Substack drops subscribe widgets, share buttons and image figures into the
// feed body. None of that belongs in an excerpt.
function bodyParagraphs(html: string): string[] {
  const cleaned = html
    .replace(/<div[^>]*class="[^"]*(subscription-widget|button-wrapper|captioned-image|digest-post-embed|footer)[^"]*"[\s\S]*?<\/div>/gi, "")
    .replace(/<form[\s\S]*?<\/form>/gi, "")
    .replace(/<blockquote[\s\S]*?<\/blockquote>/gi, "")
    .replace(/<figure[\s\S]*?<\/figure>/gi, "");

  return [...cleaned.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)]
    .map((m) => decode(m[1].replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim())
    .filter((p) => p.length > 1 && !/^(Share|Subscribe|Leave a comment|Thanks for reading)/i.test(p));
}

const WORDS = (s: string) => s.split(/\s+/).filter(Boolean).length;

// About 200 words, always ending on a paragraph boundary so the excerpt reads
// as writing rather than as a truncation.
function buildExcerpt(paragraphs: string[]): string[] {
  const out: string[] = [];
  let total = 0;
  for (const p of paragraphs) {
    if (out.length && total + WORDS(p) > 240) break;
    out.push(p);
    total += WORDS(p);
    if (total >= 190) break;
  }
  return out;
}

function parse(xml: string): StoredEssay[] {
  return [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)]
    .map((m) => {
      const item = m[0];
      const link = tag(item, "link");
      const slug = link.split("/p/")[1]?.replace(/\/$/, "").split("?")[0] ?? "";
      const pub = tag(item, "pubDate");
      const when = new Date(pub);
      const paragraphs = bodyParagraphs(tag(item, "content:encoded"));
      return {
        slug,
        title: decode(tag(item, "title")),
        dek: decode(tag(item, "description").replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim(),
        isoDate: when.toISOString(),
        substackUrl: link,
        excerpt: buildExcerpt(paragraphs),
      };
    })
    .filter((e) => e.slug && e.title);
}

// Revalidated hourly: publishing on Substack is the only step, and the site
// picks the essay up on its own. src/data/essays.json is the committed
// last-good copy, used whenever Substack refuses the request or is down, so
// the page never empties out.
export async function getEssays(): Promise<Essay[]> {
  const fallback = (snapshot as StoredEssay[]).map(hydrate);
  try {
    const res = await fetch(`${SUBSTACK}/feed`, {
      next: { revalidate: 3600 },
      headers: {
        "user-agent": "Mozilla/5.0 (compatible; neelythomson.com; +https://neelythomson.com)",
        accept: "application/rss+xml, application/xml;q=0.9, */*;q=0.8",
      },
    });
    if (!res.ok) return fallback;
    const live = parse(await res.text()).map(hydrate);
    return live.length ? live : fallback;
  } catch {
    return fallback;
  }
}

export async function getEssay(slug: string): Promise<Essay | undefined> {
  return (await getEssays()).find((e) => e.slug === slug);
}
