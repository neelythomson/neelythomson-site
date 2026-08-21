"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "What I build", href: "/#engine" },
  { label: "Pricing", href: "/#pricing" },
  { label: "The 90 days", href: "/#ninety" },
  { label: "About", href: "/#about" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Two things fight a #hash on first load: the browser jumps before the page
  // has hydrated, and Next's scroll restoration then pulls it back to the top.
  // So re-assert the jump for a moment, and stop the instant the reader scrolls.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;

    let cancelled = false;
    let timer: ReturnType<typeof setTimeout>;
    const stop = () => {
      cancelled = true;
    };

    const settle = (tries: number) => {
      if (cancelled) return;
      const el = document.getElementById(id);
      if (el && Math.abs(el.getBoundingClientRect().top) > 4) {
        el.scrollIntoView({ behavior: "auto", block: "start" });
      }
      if (tries < 20) timer = setTimeout(() => settle(tries + 1), 40);
    };
    settle(0);

    window.addEventListener("wheel", stop, { passive: true, once: true });
    window.addEventListener("touchstart", stop, { passive: true, once: true });
    window.addEventListener("keydown", stop, { once: true });

    return () => {
      cancelled = true;
      clearTimeout(timer);
      window.removeEventListener("wheel", stop);
      window.removeEventListener("touchstart", stop);
      window.removeEventListener("keydown", stop);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-bg">
      <nav className="mx-auto max-w-[960px] px-6 sm:px-10">
        <div className="flex items-baseline gap-7 py-5">
          <a
            href="/"
            className="display-xs mr-auto text-[17px] text-ink"
            style={{ fontVariationSettings: '"opsz" 24' }}
          >
            Neely Thomson
          </a>

          <ul className="hidden items-baseline gap-7 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[13px] text-muted transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/#start"
                className="text-[13px] font-medium text-accent transition-opacity hover:opacity-70"
              >
                Start a Diagnostic
              </a>
            </li>
          </ul>

          <button
            type="button"
            className="-mr-2 self-center p-2 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4">
              {menuOpen ? <path d="M5 5l10 10M15 5L5 15" /> : <path d="M3 6h14M3 10h14M3 14h14" />}
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-b border-rule bg-bg md:hidden">
          <ul className="mx-auto flex max-w-[960px] flex-col gap-4 px-6 py-5 sm:px-10">
            {[...navLinks, { label: "Start a Diagnostic", href: "/#start" }].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm text-muted transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
