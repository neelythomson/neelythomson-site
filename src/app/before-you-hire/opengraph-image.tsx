import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Build the function. Then hire the person who runs it.";
export default function Image() {
  return ogImage({ label: "Before you hire a Head of Marketing", title: "Build the function. Then hire the person who runs it.", sub: "Your next marketing leader should inherit a system, not build one." });
}
