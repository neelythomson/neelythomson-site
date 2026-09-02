import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Two weeks, and you'll know what's broken.";
export default function Image() {
  return ogImage({ label: "The Diagnostic · Two weeks · $7,500", title: "Two weeks, and you'll know what's broken.", sub: "A findings document, a board one-pager, and a priced proposal for what to build first." });
}
