import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Fintech marketing that survives compliance review.";
export default function Image() {
  return ogImage({ label: "Fractional CMO · Fintech and payments", title: "Fintech marketing that survives compliance review.", sub: "Legal as a step, not a gate. 60% less manual campaign work under NACHA and CFPB." });
}
