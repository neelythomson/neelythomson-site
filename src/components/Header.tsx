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
            <circle cx="50" cy="50" r="48" fill="#FDDCB5" stroke="#E8C9A0" strokeWidth="2" />
            {/* Hair */}
            <path d="M12 45C12 25 28 8 50 8C72 8 88 25 88 45C88 45 85 35 75 30C65 25 60 28 50 28C40 28 35 25 25 30C15 35 12 45 12 45Z" fill="#8B5E3C" />
            <path d="M12 45C12 42 13 38 15 35C10 42 8 52 12 55C14 50 12 47 12 45Z" fill="#8B5E3C" />
            <path d="M88 45C88 42 87 38 85 35C90 42 92 52 88 55C86 50 88 47 88 45Z" fill="#8B5E3C" />
            {/* Bangs */}
            <path d="M25 35C30 25 40 20 50 20C60 20 70 25 75 35C70 28 60 24 50 24C40 24 30 28 25 35Z" fill="#7A5232" />
            {/* Eyes */}
            <circle cx="36" cy="48" r="3.5" fill="#2D2D2D" />
            <circle cx="64" cy="48" r="3.5" fill="#2D2D2D" />
            {/* Eye shine */}
            <circle cx="37.5" cy="46.5" r="1.2" fill="white" />
            <circle cx="65.5" cy="46.5" r="1.2" fill="white" />
            {/* Eyebrows */}
            <path d="M29 40C32 37 37 36 41 38" stroke="#7A5232" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M71 40C68 37 63 36 59 38" stroke="#7A5232" strokeWidth="2" strokeLinecap="round" fill="none" />
            {/* Nose */}
            <path d="M48 55C49 57 51 57 52 55" stroke="#D4A574" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            {/* Smile */}
            <path d="M38 62C42 68 58 68 62 62" stroke="#2D2D2D" strokeWidth="2" strokeLinecap="round" fill="none" />
            {/* Blush */}
            <circle cx="30" cy="58" r="5" fill="#FFB5B5" opacity="0.4" />
            <circle cx="70" cy="58" r="5" fill="#FFB5B5" opacity="0.4" />
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
