import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Fractional CMO, full-time CMO, or build then hire.";
export default function Image() {
  return ogImage({ label: "A guide for CEOs and founders · 2026", title: "Fractional CMO, full-time CMO, or build then hire.", sub: "Year-one cost from third-party benchmarks, time to start, what is left when it ends, and when each is right." });
}
