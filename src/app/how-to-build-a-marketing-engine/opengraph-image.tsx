import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "How to build a marketing engine.";
export default function Image() {
  return ogImage({ label: "The build order", title: "How to build a marketing engine.", sub: "Strategy first, then the operating system, then the optimization loop. Four phases, thirteen weeks, in the tools you already own." });
}
