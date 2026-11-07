import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "The startup marketing budget, by quarter.";
export default function Image() {
  return ogImage({ label: "A guide for founders", title: "The startup marketing budget, by quarter.", sub: "Benchmarks with sources, sizing from pipeline, the people-programs-tools split, and a first-year template." });
}
