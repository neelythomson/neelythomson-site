import type { Metadata } from "next";
import "./globals.css";

const TITLE = "Neely Thomson | Fractional CMO, The Marketing Engine";
const DESCRIPTION =
  "I build the marketing engine. Your team runs it. A 90-day fractional CMO engagement for B2B software selling to regulated buyers. Diagnostic: two weeks, $7,500.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "fractional CMO",
    "marketing systems architect",
    "90 day marketing engine",
    "B2B SaaS fractional CMO",
    "fintech fractional CMO",
    "regulated industry marketing",
    "AI marketing consultant",
    "GTM strategy consultant",
    "demand generation",
    "lead scoring",
    "marketing automation consultant",
    "marketing operations consultant",
    "pipeline revenue",
    "Neely Thomson",
  ],
  authors: [{ name: "Neely Thomson", url: "https://neelythomson.com" }],
  creator: "Neely Thomson",
  metadataBase: new URL("https://neelythomson.com"),
  alternates: { canonical: "https://neelythomson.com" },
  openGraph: {
    title: TITLE,
    description:
      "I build the marketing engine. Your team runs it. A 90-day fixed-scope build, handed to your team. Starts with a two-week Diagnostic, $7,500.",
    url: "https://neelythomson.com",
    siteName: "Neely Thomson",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Neely Thomson. I build the marketing engine. Your team runs it." }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og.png"],
    title: TITLE,
    description:
      "I build the marketing engine. Your team runs it. A 90-day fixed-scope build for B2B software companies.",
    creator: "@neelythomson",
  },
  robots: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
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
        "Fractional CMO who builds B2B marketing engines in 90 days and hands them to the client's own team. Twenty years in B2B SaaS and fintech, including AI-powered marketing under NACHA and CFPB.",
      knowsAbout: [
        "Fractional CMO",
        "Marketing systems architecture",
        "AI Marketing",
        "B2B SaaS Marketing",
        "GTM Strategy",
        "Demand Generation",
        "Account-Based Marketing",
        "Marketing Automation",
        "Lead Scoring",
        "Marketing Attribution",
        "Fintech Marketing",
        "Sales Alignment",
      ],
      sameAs: [
        "https://www.linkedin.com/in/neelythomson",
        "https://neelythomson.substack.com",
        "https://kindlingmagic.com",
      ],
    },
    {
      "@type": "Service",
      "@id": "https://neelythomson.com/#service",
      name: "The Marketing Engine, a fractional CMO engagement",
      serviceType: "Fractional CMO / Marketing systems architecture",
      provider: { "@id": "https://neelythomson.com/#person" },
      areaServed: "US",
      description:
        "A 90-day fixed-scope engagement that builds a B2B marketing engine (positioning and brand system, lifecycle sequencing, lead scoring, CRM integration, routing and attribution), then hands it to the client's team with no ongoing retainer.",
      offers: [
        {
          "@type": "Offer",
          name: "The Diagnostic",
          price: "7500",
          priceCurrency: "USD",
          description:
            "Two-week marketing audit, ICP and positioning read, pipeline math, and a prioritized build order. Credited in full toward The Marketing Engine.",
        },
        {
          "@type": "Offer",
          name: "The Marketing Engine",
          description:
            "Ninety-day fixed-scope build and handoff of a complete B2B marketing engine. Scoped and priced after the Diagnostic.",
        },
        {
          "@type": "Offer",
          name: "The Advisory Seat",
          description:
            "Monthly strategic advisory, roughly ten hours a month, scoped to the work. Available after an Engine build or on its own.",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://neelythomson.com/#website",
      url: "https://neelythomson.com",
      name: TITLE,
      publisher: { "@id": "https://neelythomson.com/#person" },
    },
  ],
};

const favicon =
  "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='8' fill='%231a1917'/><text x='32' y='45' font-family='Georgia,serif' font-size='38' fill='%23fbfaf8' text-anchor='middle'>N</text></svg>";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href={favicon} />
        <meta name="theme-color" content="#fbfaf8" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
