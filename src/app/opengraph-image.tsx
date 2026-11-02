import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Neely Thomson. I rebuild marketing functions for regulated B2B software.";
export default function Image() {
  return ogImage({ label: "Fractional CMO · Regulated B2B software", title: "I rebuild marketing functions for regulated B2B software.", sub: "AI-native, compliant, and run by your team. Start with a two-week Diagnostic." });
}
