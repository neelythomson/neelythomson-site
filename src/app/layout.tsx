import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Neely Thomson | Fractional CMO & AI Marketing Consultant",
  description:
    "Neely Thomson is a fractional CMO and AI marketing consultant with 20+ years building AI-powered marketing engines for B2B SaaS and fintech companies. Specializing in GTM strategy, demand generation, marketing automation, and pipeline revenue.",
  keywords: [
    "fractional CMO",
    "AI marketing consultant",
    "B2B marketing leader",
    "GTM strategy consultant",
    "demand generation",
    "marketing automation",
    "AI marketing strategy",
    "B2B SaaS marketing",
    "fintech marketing",
    "fractional marketing leader",
    "pipeline revenue",
    "ABM strategy",
    "marketing advisor",
    "Neely Thomson",
  ],
  authors: [{ name: "Neely Thomson", url: "https://neelythomson.com" }],
  creator: "Neely Thomson",
  metadataBase: new URL("https://neelythomson.com"),
  alternates: {
    canonical: "https://neelythomson.com",
  },
  openGraph: {
    title: "Neely Thomson | Fractional CMO & AI Marketing Consultant",
    description:
      "Fractional CMO and AI marketing consultant with 20+ years building AI-powered marketing engines for B2B SaaS and fintech. GTM strategy, demand gen, and marketing automation that drives pipeline.",
    url: "https://neelythomson.com",
    siteName: "Neely Thomson",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neely Thomson | Fractional CMO & AI Marketing Consultant",
    description:
      "Fractional CMO and AI marketing consultant. 20+ years building AI-powered marketing engines for B2B SaaS and fintech.",
    creator: "@neelythomson",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://neelythomson.com/#person",
      name: "Neely Thomson",
      url: "https://neelythomson.com",
      jobTitle: "Fractional CMO & Marketing Systems Architect",
      description:
        "Fractional CMO and AI marketing consultant with 20+ years building AI-powered marketing engines for B2B SaaS and fintech companies.",
      knowsAbout: [
        "Fractional CMO",
        "AI Marketing",
        "B2B SaaS Marketing",
        "GTM Strategy",
        "Demand Generation",
        "Account-Based Marketing",
        "Marketing Automation",
        "Pipeline Revenue",
        "Fintech Marketing",
        "Sales Alignment",
      ],
      sameAs: ["https://linkedin.com/in/neelyconway"],
      alumniOf: {
        "@type": "Organization",
        name: "Dwolla",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://neelythomson.com/#service",
      name: "Neely Thomson — Fractional CMO & AI Marketing Consulting",
      url: "https://neelythomson.com",
      description:
        "Fractional CMO, advisory, and AI marketing consulting for B2B SaaS and fintech companies. GTM strategy, demand gen, marketing automation, and pipeline revenue optimization.",
      provider: { "@id": "https://neelythomson.com/#person" },
      serviceType: [
        "Fractional CMO",
        "AI Marketing Consulting",
        "GTM Strategy",
        "Advisory",
        "Marketing Automation",
        "Demand Generation",
      ],
      areaServed: "Worldwide",
    },
    {
      "@type": "WebSite",
      "@id": "https://neelythomson.com/#website",
      url: "https://neelythomson.com",
      name: "Neely Thomson | Fractional CMO & AI Marketing Consultant",
      publisher: { "@id": "https://neelythomson.com/#person" },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>\u2728</text></svg>"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
