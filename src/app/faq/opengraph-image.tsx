import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Everything people ask before the first call.";
export default function Image() {
  return ogImage({ label: "FAQ", title: "Everything people ask before the first call.", sub: "Twenty-three questions on the engagement, the cost, the scope, and who it's for, answered plainly." });
}
