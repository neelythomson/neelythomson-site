import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "I spent my career on the inside. Now I build the part that stays.";
export default function Image() {
  return ogImage({
    label: "About",
    title: "I spent my career on the inside.",
    sub: "I build marketing functions for software startups. Four years leading marketing at a fintech payments company, including a stretch in the sales chair.",
  });
}
