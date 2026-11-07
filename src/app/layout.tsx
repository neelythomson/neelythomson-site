import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Clarity from "@/components/Clarity";
import localFont from "next/font/local";

const newsreader = localFont({
  src: [
    { path: "./fonts/newsreader-normal.woff2", style: "normal", weight: "200 800" },
    { path: "./fonts/newsreader-italic.woff2", style: "italic", weight: "200 800" },
  ],
  variable: "--font-newsreader",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

const inter = localFont({
  src: [{ path: "./fonts/inter.woff2", style: "normal", weight: "100 900" }],
  variable: "--font-inter",
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "-apple-system", "sans-serif"],
});
import "./globals.css";

const TITLE = "Neely Thomson | Fractional CMO for B2B Software Startups";
const DESCRIPTION =
  "I build revenue-generating marketing functions for software startups, before the first marketing hire or after it. Regulated software is the specialty.";

export const metadata: Metadata = {
  title: { default: TITLE, template: "%s | Neely Thomson" },
  description: DESCRIPTION,
  keywords: [
    "fractional CMO",
    "marketing systems architect",
    "90 day marketing engine",
    "B2B SaaS fractional CMO",
    "fintech fractional CMO",
    "regulated industry marketing",
    "fractional CMO regulated industries",
    "healthtech fractional CMO",
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
      "I build marketing functions for B2B software startups, then hand them to the person who runs them. Before your first marketing hire, or after it. Most of my work is in regulated software: fintech, healthtech, edtech, govtech.",
    url: "https://neelythomson.com",
    siteName: "Neely Thomson",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
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
      url: "https://neelythomson.com/about",
      mainEntityOfPage: "https://neelythomson.com/about",
      image: "https://neelythomson.com/neely-thomson.jpg",
      jobTitle: "Fractional CMO for Regulated B2B Software",
      description:
        "Builds revenue-generating marketing functions for software startups, before the first marketing hire (The First Hire Plan) or after it (The Diagnostic, then The Marketing Engine), and hands them to the person who runs them. Most work is in regulated software: fintech, healthtech, edtech, govtech. Twenty years running marketing for technology companies, including AI marketing under NACHA and CFPB.",
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
        "Healthtech Marketing",
        "Edtech Marketing",
        "Regulated industry marketing",
        "Marketing compliance review",
        "NACHA",
        "CFPB",
        "Sales Alignment",
      ],
      sameAs: [
        "https://www.linkedin.com/in/neelythomson",
        "https://neelythomson.substack.com",
      ],
    },
    {
      "@type": "Service",
      "@id": "https://neelythomson.com/#service",
      name: "Marketing functions for software startups",
      serviceType: "Fractional CMO / Marketing function design and build",
      provider: { "@id": "https://neelythomson.com/#person" },
      areaServed: "US",
      description:
        "Fixed-scope, fixed-fee engagements that design or build a software startup's marketing function and hand it to the person who runs it: The First Hire Plan (six weeks, before the first marketing hire), The Diagnostic (two weeks), The Marketing Engine (ninety days), and The Advisory Seat (monthly). Every fee is quoted on the first call.",
      offers: [
        {
          "@type": "Offer",
          name: "The First Hire Plan",
          url: "https://neelythomson.com/first-hire-plan",
          description:
            "Six weeks, before the first marketing hire: the role and its level, the twelve-month plan, the budget by quarter, the stack, one lead definition with a sales-marketing SLA, the five-metric scoreboard, and the hire's first ninety days.",
        },
        {
          "@type": "Offer",
          name: "The Diagnostic",
          url: "https://neelythomson.com/diagnostic",
          description:
            "Two-week audit of the marketing stack, funnel economics by business unit, and team. Deliverables: a findings document covering what AI should cover, what stays human and what the function costs against today, ranked by pipeline impact; a board one-pager; and a priced proposal for the build. Credited in full toward The Marketing Engine.",
        },
        {
          "@type": "Offer",
          name: "The Marketing Engine",
          url: "https://neelythomson.com/marketing-engine",
          description:
            "Ninety-day fixed-scope build and handoff of a complete B2B marketing engine. Fixed fee, quoted after the Diagnostic.",
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
      name: "Neely Thomson",
      alternateName: "neelythomson.com",
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
    <html lang="en" className={`${newsreader.variable} ${inter.variable}`}>
      <head>
        <meta name="theme-color" content="#fbfaf8" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-sm focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-bg"
        >
          Skip to content
        </a>
        {children}
        <Analytics />
        <GoogleAnalytics />
        <Clarity />
      </body>
    </html>
  );
}
