import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "What is a marketing engine?";
export default function Image() {
  return ogImage({ label: "Definition", title: "What is a marketing engine?", sub: "The strategy layer points it. The operating system runs it. The optimization loop makes it cheaper per opportunity." });
}
