import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Head of growth, or head of marketing?";
export default function Image() {
  return ogImage({ label: "A guide for founders", title: "Head of growth, or head of marketing?", sub: "What each role owns, what each one needs in place to work, and the one question that decides which title goes on the posting." });
}
