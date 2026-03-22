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
                  {/* Yellow circle bg */}
                  <circle cx="50" cy="50" r="50" fill="#FFD93D" />
                  {/* Hair behind head - long flowing brown */}
                  <path d="M6 42C6 20 25 2 50 2C75 2 94 20 94 42C94 58 90 72 84 80C82 68 80 52 80 42C80 30 68 14 50 14C32 14 20 30 20 42C20 52 18 68 16 80C10 72 6 58 6 42Z" fill="#5C3317" />
                  {/* Face */}
                  <circle cx="50" cy="54" r="30" fill="#FFE066" />
                  {/* Hair front swooping bangs */}
                  <path d="M20 40C20 24 32 10 50 10C68 10 80 24 80 40C76 30 64 20 50 20C36 20 24 30 20 40Z" fill="#5C3317" />
                  <path d="M22 40C26 30 36 22 50 22C56 22 62 24 67 28C60 22 52 19 44 20C34 22 26 30 22 40Z" fill="#4A2810" />
                  {/* Left side hair */}
                  <path d="M20 42C18 54 16 68 18 82C22 78 20 62 20 42Z" fill="#5C3317" />
                  {/* Right side hair */}
                  <path d="M80 42C82 54 84 68 82 82C78 78 80 62 80 42Z" fill="#5C3317" />
                  {/* Left eye - big kawaii style */}
                  <ellipse cx="38" cy="52" rx="6" ry="7" fill="white" />
                  <ellipse cx="39" cy="53" rx="4.5" ry="5.5" fill="#2E8B57" />
                  <ellipse cx="39" cy="54" rx="3" ry="3.5" fill="#1A1A1A" />
                  <circle cx="41" cy="50" r="2" fill="white" />
                  <circle cx="37" cy="55" r="1" fill="white" opacity="0.6" />
                  {/* Right eye - big kawaii style */}
                  <ellipse cx="62" cy="52" rx="6" ry="7" fill="white" />
                  <ellipse cx="61" cy="53" rx="4.5" ry="5.5" fill="#2E8B57" />
                  <ellipse cx="61" cy="54" rx="3" ry="3.5" fill="#1A1A1A" />
                  <circle cx="63" cy="50" r="2" fill="white" />
                  <circle cx="59" cy="55" r="1" fill="white" opacity="0.6" />
                  {/* Eyelashes */}
                  <path d="M30 45C33 42 36 41 43 43" stroke="#4A2810" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                  <path d="M70 45C67 42 64 41 57 43" stroke="#4A2810" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                  {/* Eyebrows - subtle */}
                  <path d="M32 42C35 39 40 38 44 40" stroke="#4A2810" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.4" />
                  <path d="M68 42C65 39 60 38 56 40" stroke="#4A2810" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.4" />
                  {/* Nose - tiny */}
                  <path d="M49 61C49.5 62 50.5 62 51 61" stroke="#D4A020" strokeWidth="1" strokeLinecap="round" fill="none" />
                  {/* Smile - warm */}
                  <path d="M41 67C44 72 56 72 59 67" stroke="#C85A3A" strokeWidth="2" strokeLinecap="round" fill="none" />
                  {/* Blush */}
                  <circle cx="30" cy="62" r="5" fill="#FFB3B3" opacity="0.5" />
                  <circle cx="70" cy="62" r="5" fill="#FFB3B3" opacity="0.5" />
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
