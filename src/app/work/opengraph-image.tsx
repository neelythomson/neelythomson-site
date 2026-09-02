import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Three engines, three budgets, the same method.";
export default function Image() {
  return ogImage({ label: "Work", title: "Three engines, three budgets, the same method.", sub: "Fintech payments under NACHA and CFPB. A $70M nonprofit. Enterprise ABM on $500K." });
}
