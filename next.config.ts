import type { NextConfig } from "next";

const securityHeaders = [
  {
    // Prevent clickjacking
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    // Prevent MIME type sniffing
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    // Control referrer information
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    // Permissions policy — disable unnecessary browser features
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    // Strict Transport Security — force HTTPS
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    // Content Security Policy
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline'",
      "font-src 'self'",
      "img-src 'self' data: https:",
      "connect-src 'self'",
      "frame-src https://neelythomson.substack.com",
      "frame-ancestors 'none'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Slugs a draft of the case studies briefly used. Nothing should link to
      // them, but they were crawled, so they redirect rather than 404.
      { source: "/work/01-b2b-fintech-payments-platform", destination: "/work/fintech-payments", permanent: true },
      { source: "/work/02-national-nonprofit", destination: "/work/nonprofit-partnerships", permanent: true },
      { source: "/work/03-technology-services-firm", destination: "/work/enterprise-abm", permanent: true },
      // Two URLs people and crawlers guess at.
      { source: "/privacy-policy", destination: "/privacy", permanent: true },
      { source: "/what-gets-built", destination: "/marketing-engine", permanent: true },
    ];
  },
  async rewrites() {
    return [
      // The essay sitemap lives at a .xml URL; the route folder cannot carry
      // the dot, so it is served through this rewrite.
      { source: "/writing-sitemap.xml", destination: "/writing-sitemap" },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
