import type { MetadataRoute } from "next";
import pages from "@/data/pages.json";

// The fixed pages, each with the date its content last changed (kept in
// src/data/pages.json; update it when a page changes, never otherwise).
// Essays have their own sitemap at /writing-sitemap.xml.
export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((p) => ({
    url: `https://neelythomson.com${p.path}`,
    lastModified: new Date(`${p.lastmod}T12:00:00-05:00`),
  }));
}
