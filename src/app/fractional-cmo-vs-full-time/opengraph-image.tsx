import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Fractional CMO or a full-time hire? Here's the math.";
export default function Image() {
  return ogImage({ label: "Fractional CMO vs. full-time", title: "Fractional CMO or a full-time hire? Here's the math.", sub: "Year-one cost, time to start, what's left when it ends, and a third option." });
}
