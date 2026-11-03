import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Fractional CMO for credit unions: growth that clears compliance.";
export default function Image() {
  return ogImage({ label: "Fractional CMO · Credit unions", title: "Growth that clears compliance.", sub: "Marketing built for exam rules, run by your own team." });
}
