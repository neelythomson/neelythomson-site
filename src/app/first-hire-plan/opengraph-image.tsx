import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "The First Hire Plan. Before your first marketing hire.";
export default function Image() {
  return ogImage({ label: "The First Hire Plan · Six weeks", title: "Before your first marketing hire.", sub: "The role, the plan, the budget, the stack, the SLA and the scoreboard, written before the posting goes up." });
}
