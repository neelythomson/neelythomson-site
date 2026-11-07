import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "The sales and marketing SLA, for a startup.";
export default function Image() {
  return ogImage({ label: "A guide for founders", title: "The sales and marketing SLA, for a startup.", sub: "Five clauses on one page, what each prevents, the numbers that go in them, and how to get it signed in a week." });
}
