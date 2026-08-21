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

  // The browser tries to jump to a #hash before the page has hydrated, so a
  // link like /#start (or the /fractional-cmo redirect that carries one) lands
  // at the top instead of the section. Re-run the jump once we're mounted.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;
    let frame = 0;
    const jump = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "auto", block: "start" });
      } else if (frame < 20) {
        frame += 1;
        requestAnimationFrame(jump);
      }
    };
    requestAnimationFrame(jump);
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
