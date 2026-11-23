import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "When to make your first marketing hire.";
export default function Image() {
  return ogImage({ label: "A guide for founders", title: "When to make your first marketing hire.", sub: "Three signals that say it is time, how to check each one this week, and what waiting costs." });
}
