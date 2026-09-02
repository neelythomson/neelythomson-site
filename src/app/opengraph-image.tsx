import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Neely Thomson. I build the marketing engine. Your team runs it.";
export default function Image() {
  return ogImage({ label: "Fractional CMO · Marketing systems", title: "I build the marketing engine. Your team runs it.", sub: "Ninety days. Fixed scope, fixed end date. A named person on your team runs it afterward." });
}
