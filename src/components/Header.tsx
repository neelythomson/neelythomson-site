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
          <svg width="36" height="36" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Background circle */}
                  <circle cx="50" cy="50" r="50" fill="#FFD93D" />
                  {/* Hair back */}
                  <ellipse cx="50" cy="38" rx="42" ry="36" fill="#5C3317" />
                  {/* Face */}
                  <circle cx="50" cy="52" r="32" fill="#FFE066" />
                  {/* Hair top and sides - long flowing */}
                  <path d="M8 38C8 18 27 4 50 4C73 4 92 18 92 38C92 42 90 46 88 48C86 38 74 22 50 22C26 22 14 38 12 48C10 46 8 42 8 38Z" fill="#5C3317" />
                  {/* Left hair strand */}
                  <path d="M14 46C12 54 10 66 14 78C16 74 15 62 14 46Z" fill="#5C3317" />
                  {/* Right hair strand */}
                  <path d="M86 46C88 54 90 66 86 78C84 74 85 62 86 46Z" fill="#5C3317" />
                  {/* Bangs - soft wispy */}
                  <path d="M24 34C30 22 40 16 50 16C60 16 70 22 76 34C70 26 60 20 50 20C40 20 30 26 24 34Z" fill="#4A2810" />
                  {/* Left eye */}
                  <ellipse cx="38" cy="50" rx="4.5" ry="5" fill="#1A1A1A" />
                  <circle cx="40" cy="48" r="2" fill="white" />
                  {/* Right eye */}
                  <ellipse cx="62" cy="50" rx="4.5" ry="5" fill="#1A1A1A" />
                  <circle cx="64" cy="48" r="2" fill="white" />
                  {/* Eye color rings */}
                  <ellipse cx="38" cy="50" rx="4.5" ry="5" fill="none" stroke="#2E8B57" strokeWidth="1.5" />
                  <ellipse cx="62" cy="50" rx="4.5" ry="5" fill="none" stroke="#2E8B57" strokeWidth="1.5" />
                  {/* Eyelashes */}
                  <path d="M31 44C33 42 36 41 41 42" stroke="#4A2810" strokeWidth="1.2" strokeLinecap="round" fill="none" />
                  <path d="M69 44C67 42 64 41 59 42" stroke="#4A2810" strokeWidth="1.2" strokeLinecap="round" fill="none" />
                  {/* Nose */}
                  <path d="M48 58C49 60 51 60 52 58" stroke="#E8B830" strokeWidth="1.2" strokeLinecap="round" fill="none" />
                  {/* Smile */}
                  <path d="M39 65C43 71 57 71 61 65" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" fill="none" />
                  {/* Blush */}
                  <circle cx="30" cy="60" r="6" fill="#FFB3B3" opacity="0.4" />
                  <circle cx="70" cy="60" r="6" fill="#FFB3B3" opacity="0.4" />
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
