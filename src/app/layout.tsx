import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Neely Conway — AI-Forward B2B Marketing Leader",
  description:
    "VP & Head of Marketing with 15+ years building AI-powered marketing engines for B2B SaaS and fintech. GTM strategy, demand gen, and marketing automation.",
  openGraph: {
    title: "Neely Conway — AI-Forward B2B Marketing Leader",
    description:
      "VP & Head of Marketing. 15+ years building AI-powered marketing engines for B2B SaaS.",
    url: "https://neelythomson.com",
    siteName: "Neely Conway",
    locale: "en_US",
    type: "website",
  },
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
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
