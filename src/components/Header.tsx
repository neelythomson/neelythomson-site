"use client";

import { useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-bg)]/80 backdrop-blur-md">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="group flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Face */}
            <circle cx="50" cy="50" r="48" fill="#FFD93D" stroke="#E8C840" strokeWidth="2" />
            {/* Hair - brown, flowing */}
            <path d="M10 48C10 24 27 6 50 6C73 6 90 24 90 48C90 48 87 36 77 30C67 24 62 27 50 27C38 27 33 24 23 30C13 36 10 48 10 48Z" fill="#6B3A2A" />
            <path d="M10 48C10 44 11 40 13 36C8 44 6 54 10 58C12 52 10 49 10 48Z" fill="#6B3A2A" />
            <path d="M90 48C90 44 89 40 87 36C92 44 94 54 90 58C88 52 90 49 90 48Z" fill="#6B3A2A" />
            {/* Side hair strands */}
            <path d="M13 48C11 56 10 64 14 72C16 68 14 60 13 48Z" fill="#6B3A2A" />
            <path d="M87 48C89 56 90 64 86 72C84 68 86 60 87 48Z" fill="#6B3A2A" />
            {/* Bangs */}
            <path d="M22 36C28 24 38 18 50 18C62 18 72 24 78 36C72 27 62 22 50 22C38 22 28 27 22 36Z" fill="#5A2E1E" />
            {/* Eyes - green */}
            <ellipse cx="36" cy="48" rx="4" ry="4.5" fill="#2D8C4E" />
            <ellipse cx="64" cy="48" rx="4" ry="4.5" fill="#2D8C4E" />
            {/* Pupils */}
            <circle cx="36" cy="48" r="2" fill="#1A1A1A" />
            <circle cx="64" cy="48" r="2" fill="#1A1A1A" />
            {/* Eye shine */}
            <circle cx="38" cy="46" r="1.5" fill="white" />
            <circle cx="66" cy="46" r="1.5" fill="white" />
            {/* Eyelashes */}
            <path d="M29 42C31 40 34 39 39 40" stroke="#5A2E1E" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <path d="M71 42C69 40 66 39 61 40" stroke="#5A2E1E" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            {/* Nose */}
            <path d="M48 56C49 58 51 58 52 56" stroke="#E8B830" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            {/* Smile */}
            <path d="M38 64C42 70 58 70 62 64" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" fill="none" />
            {/* Blush */}
            <circle cx="28" cy="58" r="5" fill="#FF9E9E" opacity="0.35" />
            <circle cx="72" cy="58" r="5" fill="#FF9E9E" opacity="0.35" />
          </svg>
        </a>

        <ul className="hidden sm:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="sm:hidden p-2 -mr-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            {menuOpen ? (
              <path d="M5 5l10 10M15 5L5 15" />
            ) : (
              <path d="M3 6h14M3 10h14M3 14h14" />
            )}
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div className="sm:hidden bg-[var(--color-bg)] border-b border-[var(--color-border)]">
          <ul className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors"
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
