import { getEssays } from "@/lib/substack";

export const revalidate = 3600;

// The static sitemap.xml covers the fixed pages. This one covers the essays,
// so a new Substack post reaches the search engines without an edit here.
export async function GET() {
  const essays = await getEssays();
  const urls = [
    { loc: "https://neelythomson.com/writing", lastmod: essays[0]?.isoDate.slice(0, 10) ?? "2026-09-02", priority: "0.7" },
    ...essays.map((e) => ({
      loc: `https://neelythomson.com/writing/${e.slug}`,
      lastmod: e.isoDate.slice(0, 10),
      priority: "0.6",
    })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) =>
      `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`
  )
  .join("\n")}
</urlset>
`;

  return new Response(body, {
    headers: { "content-type": "application/xml; charset=utf-8" },
  });
}
