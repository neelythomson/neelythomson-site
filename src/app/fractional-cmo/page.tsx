import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FractionalCMO from "@/components/FractionalCMO";

export const metadata: Metadata = {
  title: "The Engine Install | Fractional CMO — Neely Thomson",
  description:
    "A 90-day fractional CMO engagement for B2B software companies: positioning, lifecycle sequencing, lead scoring, CRM integration, routing, and attribution — built, handed to your team, and done. Fixed scope, no ongoing retainer.",
  keywords: [
    "fractional CMO",
    "90 day marketing engine",
    "marketing systems architect",
    "B2B SaaS fractional CMO",
    "fintech fractional CMO",
    "regulated industry marketing",
    "lead scoring",
    "marketing automation consultant",
    "GTM strategy consultant",
    "marketing operations consultant",
  ],
  alternates: { canonical: "https://neelythomson.com/fractional-cmo" },
  openGraph: {
    title: "The Engine Install | Fractional CMO — Neely Thomson",
    description:
      "You need a marketing engine. You don't need a marketing department. A 90-day fixed-scope build, handed to your team.",
    url: "https://neelythomson.com/fractional-cmo",
    siteName: "Neely Thomson",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Engine Install | Fractional CMO — Neely Thomson",
    description:
      "You need a marketing engine. You don't need a marketing department. A 90-day fixed-scope build, handed to your team.",
    creator: "@neelythomson",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "The Engine Install — Fractional CMO",
  serviceType: "Fractional CMO / Marketing systems architecture",
  provider: {
    "@type": "Person",
    name: "Neely Thomson",
    url: "https://neelythomson.com",
  },
  areaServed: "US",
  description:
    "A 90-day fixed-scope engagement that builds a B2B marketing engine — positioning and brand system, lifecycle sequencing, lead scoring, CRM integration, routing, and attribution — then hands it to the client's team.",
  offers: [
    {
      "@type": "Offer",
      name: "The Diagnostic",
      price: "7500",
      priceCurrency: "USD",
      description:
        "Two-week marketing audit, ICP and positioning read, pipeline math, and a prioritized 90-day plan. Credited toward an Engine Install.",
    },
    {
      "@type": "Offer",
      name: "The Engine Install",
      price: "45000",
      priceCurrency: "USD",
      description:
        "Ninety-day fixed-scope build and handoff of a complete B2B marketing engine.",
    },
  ],
};

export default function FractionalCMOPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Header />
      <main>
        <FractionalCMO />
      </main>
      <Footer />
    </>
  );
}
