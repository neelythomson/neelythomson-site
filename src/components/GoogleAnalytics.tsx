import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

// GA4 via gtag.js. Renders nothing until NEXT_PUBLIC_GA_ID is set in Vercel.
// Google Signals and ad personalization are off: this is for counting
// conversions, not for advertising.
//
// The tag only starts on neelythomson.com. Every Vercel deployment also gets
// its own *.vercel.app address, and visits there (build checks, previews) were
// being counted as traffic and flagged by GA4 as "additional domains".
export default function GoogleAnalytics() {
  if (!GA_ID) return null;
  return (
    <Script id="ga4-init" strategy="afterInteractive">
      {`(function(){
if (!/(^|\\.)neelythomson\\.com$/.test(location.hostname)) return;
var s = document.createElement('script');
s.async = true;
s.src = 'https://www.googletagmanager.com/gtag/js?id=${GA_ID}';
document.head.appendChild(s);
window.dataLayer = window.dataLayer || [];
window.gtag = function(){ window.dataLayer.push(arguments); };
window.gtag('js', new Date());
window.gtag('config', '${GA_ID}', { allow_google_signals: false, allow_ad_personalization_signals: false });
})();`}
    </Script>
  );
}
