import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Your first marketing hire. A guide for founders.";
export default function Image() {
  return ogImage({ label: "A guide for founders", title: "Your first marketing hire.", sub: "When it becomes necessary, what to decide before the posting, which role to hire, and what the hire should inherit on day one." });
}
