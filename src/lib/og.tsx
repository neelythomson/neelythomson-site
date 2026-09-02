import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

async function font(name: string) {
  return readFile(join(process.cwd(), "src/lib/og-fonts", name));
}

export async function ogImage(opts: { label: string; title: string; sub?: string }) {
  const [serif, serifItalic, sans, sansMedium] = await Promise.all([
    font("newsreader-300.ttf"),
    font("newsreader-300i.ttf"),
    font("inter-400.ttf"),
    font("inter-500.ttf"),
  ]);
  const long = opts.title.length > 60;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#fbfaf8",
          padding: "72px 80px 64px",
          fontFamily: "Inter",
          color: "#1a1917",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 20, letterSpacing: 4, textTransform: "uppercase", color: "#706c65", fontWeight: 500 }}>
            {opts.label}
          </div>
          <div
            style={{
              marginTop: 36,
              fontFamily: "Newsreader",
              fontSize: long ? 66 : 80,
              lineHeight: 1.05,
              letterSpacing: -1,
              maxWidth: 1000,
              display: "flex",
            }}
          >
            {opts.title}
          </div>
          {opts.sub && (
            <div style={{ marginTop: 28, fontSize: 26, lineHeight: 1.45, color: "#6b6862", maxWidth: 900, display: "flex" }}>
              {opts.sub}
            </div>
          )}
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid #e7e4de", paddingTop: 28 }}>
          <div style={{ fontFamily: "Newsreader", fontSize: 30 }}>Neely Thomson</div>
          <div style={{ fontSize: 20, color: "#6b6862", display: "flex", gap: 8, alignItems: "baseline" }}>
            <span>I build the marketing engine. </span>
            <span style={{ fontFamily: "Newsreader", fontStyle: "italic", fontSize: 24, color: "#b33a24" }}>Your team runs it.</span>
          </div>
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        { name: "Newsreader", data: serif, style: "normal", weight: 300 },
        { name: "Newsreader", data: serifItalic, style: "italic", weight: 300 },
        { name: "Inter", data: sans, style: "normal", weight: 400 },
        { name: "Inter", data: sansMedium, style: "normal", weight: 500 },
      ],
    }
  );
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", url: "https://neelythomson.com" }, ...items].map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}
