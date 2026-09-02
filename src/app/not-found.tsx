import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = { title: "Page not found" };

const links = [
  { h: "/", t: "The homepage", b: "The whole offer on one page." },
  { h: "/work", t: "Work", b: "Three engines, written up with names withheld." },
  { h: "/diagnostic", t: "The Diagnostic", b: "Two weeks, $7,500, and you'll know what's broken." },
  { h: "/faq", t: "FAQ", b: "Everything people ask before the first call." },
];

export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <section className="px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
          <div className="mx-auto max-w-[960px]">
            <p className="label mb-8">404</p>
            <h1 className="display mb-8 max-w-[16ch] text-[clamp(2.2rem,4.8vw,3.8rem)]">
              That page isn&apos;t here.
            </h1>
            <p className="measure text-[17px] leading-[1.62] text-muted">
              Either the link was wrong or the page moved. Everything on the
              site is one click from here.
            </p>
            <div className="mt-11 grid gap-x-12 gap-y-7 sm:grid-cols-2">
              {links.map((l) => (
                <a key={l.h} href={l.h} className="group block border-t border-rule pt-5 transition-colors hover:border-accent">
                  <h2 className="display-xs mb-1.5 text-[19px] transition-colors group-hover:text-accent">{l.t}</h2>
                  <p className="text-[13.5px] leading-[1.6] text-muted">{l.b}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
