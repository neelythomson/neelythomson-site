import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Head of marketing, or marketing manager?";
export default function Image() {
  return ogImage({ label: "A guide for founders", title: "Head of marketing, or marketing manager?", sub: "Scope, level, what each runs in year one, and the one question that decides which to hire first." });
}
