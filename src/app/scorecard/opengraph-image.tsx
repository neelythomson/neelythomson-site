import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Score a marketing-leader posting before it goes live.";
export default function Image() {
  return ogImage({ label: "A scorecard for founders", title: "Score a marketing-leader posting before it goes live.", sub: "Ten lines to check, what to change when one is missing, and three questions for the final round." });
}
