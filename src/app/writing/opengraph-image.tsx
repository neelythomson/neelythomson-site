import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Notes from building marketing engines that outlast the builder.";
export default function Image() {
  return ogImage({ label: "Writing", title: "Notes from building marketing engines that outlast the builder.", sub: "Essays every other Tuesday: what I saw, what I decided, what the scoreboard said." });
}
