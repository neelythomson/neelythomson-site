import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "What your first marketer inherits.";
export default function Image() {
  return ogImage({ label: "A guide for founders", title: "What your first marketer inherits.", sub: "Six things to have in place on day one, what the first ninety days look like without each, and how to put them in place before the hire starts." });
}
