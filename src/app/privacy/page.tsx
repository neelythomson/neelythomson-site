import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy",
  description: "What neelythomson.com collects, why, and who handles it.",
  alternates: { canonical: "https://neelythomson.com/privacy" },
  robots: { index: false, follow: true },
};

const sections: { h: string; p: string[] }[] = [
  {
    h: "Who this covers",
    p: [
      "This site is run by Neely Thomson, an independent marketing consultant based in Atlanta, Georgia. Questions about anything on this page go to hello@neelythomson.com.",
    ],
  },
  {
    h: "What the site collects",
    p: [
      "The Diagnostic form. If you fill it in, you give me your name, work email, company, company size, what you are looking for, who would run marketing afterward, a timeline, and optionally how you found me and a note. That is everything the form collects, and it only collects it when you press send.",
      "Analytics. The site uses Vercel Web Analytics, which counts page views without cookies and without storing anything that identifies you. It records the page, the referring site, the country, the device type, and any campaign tags in the link you arrived on. Your IP address is used to derive the country and is not stored.",
      "Server logs. Vercel, which hosts the site, keeps standard request logs (the page requested, the time, and the IP address) for a short period for security and reliability.",
      "Cookies. The site itself sets none. The Writing page embeds my Substack, and that embed is served by Substack under its own privacy policy.",
    ],
  },
  {
    h: "What I do with it",
    p: [
      "Form submissions come to my inbox so I can reply to you and decide whether a Diagnostic makes sense. I do not add you to a mailing list, and there is no automated email sequence. You get one confirmation email when the form goes through, and after that you hear from me personally or not at all.",
      "I do not sell personal information, and I do not share it with anyone except the services below that are needed to run the site.",
    ],
  },
  {
    h: "Who handles the data",
    p: [
      "Vercel hosts the site and provides the analytics. Resend delivers the form notification and your confirmation email. Google Workspace holds my mailbox. Google Fonts serves the two typefaces on the site, which means Google receives a request from your browser when a page loads. Each of these companies has its own privacy policy and handles data on my behalf, not for its own use.",
    ],
  },
  {
    h: "How long I keep it",
    p: [
      "Form submissions stay in my inbox for as long as our conversation is live and as ordinary business records afterward. If you would like yours deleted, email hello@neelythomson.com and I will do it.",
    ],
  },
  {
    h: "Your choices",
    p: [
      "You can ask what I hold about you, ask me to correct it, or ask me to delete it, at any time, by email. California residents have these rights under state law; I extend the same treatment to everyone.",
      "This site is not directed at anyone under eighteen, and I do not knowingly collect information from minors.",
    ],
  },
  {
    h: "Changes",
    p: [
      "If this page changes in a way that matters, the date below moves and the change is described here. This version is effective September 2, 2026.",
    ],
  },
];

export default function Privacy() {
  return (
    <>
      <Header />
      <main>
        <section className="px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">Privacy</p>
            <h1 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
              What this site collects, and what happens to it.
            </h1>
            <p className="measure text-base leading-[1.68] text-muted">
              Short version: the only personal information this site collects is
              what you type into the Diagnostic form, it goes to my inbox and
              nowhere else, and the analytics are cookieless.
            </p>

            <div className="mt-12">
              {sections.map((s, i) => (
                <div
                  key={s.h}
                  className={`grid gap-4 py-7 md:grid-cols-[170px_1fr] md:gap-10 ${i === 0 ? "" : "border-t border-rule"}`}
                >
                  <p className="text-[12.5px] font-medium">{s.h}</p>
                  <div className="max-w-[62ch]">
                    {s.p.map((t, j) => (
                      <p key={j} className={`text-[15px] leading-[1.7] text-muted ${j === 0 ? "" : "mt-3"}`}>
                        {t}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
