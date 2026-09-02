import type { Metadata } from "next";
import CaseStudy, { getCaseStudy } from "@/components/CaseStudy";

const c = getCaseStudy("fintech-payments");

export const metadata: Metadata = {
  title: c.metaTitle,
  description: c.description,
  alternates: { canonical: "https://neelythomson.com/work/fintech-payments" },
  openGraph: {
    title: c.metaTitle,
    description: c.description,
    url: "https://neelythomson.com/work/fintech-payments",
    siteName: "Neely Thomson",
    locale: "en_US",
    type: "article",
  },
};

export default function Page() {
  return <CaseStudy c={c} />;
}
