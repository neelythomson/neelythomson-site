import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { getCaseStudy } from "@/components/CaseStudy";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
const c = getCaseStudy("nonprofit-partnerships")!;
export const alt = c.title;
export default function Image() {
  return ogImage({ label: `Case study ${c.n}`, title: c.title, sub: c.facts.slice(0, 2).map((f) => f.v).join(" · ") });
}
