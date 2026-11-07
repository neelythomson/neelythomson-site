import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Notes from building marketing engines that run without me.";
export default function Image() {
  return ogImage({ label: "Writing", title: "Notes from building marketing engines that run without me.", sub: "Essays on building a marketing engine from inside a B2B software company: what I saw, what I decided, what the scoreboard said." });
}
