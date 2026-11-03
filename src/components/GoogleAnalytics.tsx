import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

// GA4 via gtag.js. Renders nothing until NEXT_PUBLIC_GA_ID is set in Vercel.
// Google Signals and ad personalization are off: this is for counting
// conversions, not for advertising.
export default function GoogleAnalytics() {
  if (!GA_ID) return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}', { allow_google_signals: false, allow_ad_personalization_signals: false });`}
      </Script>
    </>
  );
}
