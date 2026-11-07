import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Neely Thomson. I build marketing functions for B2B software startups.";
export default function Image() {
  return ogImage({ label: "Marketing functions · B2B software startups", title: "I build marketing functions for B2B software startups.", sub: "AI-native, compliant, and run by your team. Start with a two-week Diagnostic." });
}
