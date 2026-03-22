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
                  {/* Hair as the outer shape - gives the circle its form */}
                  <circle cx="50" cy="50" r="48" fill="#5C3317" />
                  {/* Face - warm peach skin tone */}
                  <ellipse cx="50" cy="56" rx="30" ry="32" fill="#FDDCB5" />
                  {/* Hair top - covers forehead area */}
                  <path d="M4 46C4 20 24 2 50 2C76 2 96 20 96 46C96 46 92 32 80 24C68 16 60 20 50 20C40 20 32 16 20 24C8 32 4 46 4 46Z" fill="#5C3317" />
                  {/* Bangs - darker accent */}
                  <path d="M18 40C24 26 36 16 50 16C64 16 76 26 82 40C76 30 64 22 50 22C36 22 24 30 18 40Z" fill="#4A2810" />
                  {/* Side hair left */}
                  <path d="M8 48C6 58 6 68 10 80C14 76 12 64 10 48Z" fill="#5C3317" />
                  {/* Side hair right */}
                  <path d="M92 48C94 58 94 68 90 80C86 76 88 64 90 48Z" fill="#5C3317" />
                  {/* Left eye white */}
                  <ellipse cx="38" cy="52" rx="7" ry="7.5" fill="white" />
                  {/* Left iris - green */}
                  <ellipse cx="39" cy="53" rx="5" ry="5.5" fill="#3DA35D" />
                  {/* Left pupil */}
                  <ellipse cx="39" cy="54" rx="2.5" ry="3" fill="#1A1A1A" />
                  {/* Left eye shine */}
                  <circle cx="41.5" cy="50.5" r="2" fill="white" />
                  <circle cx="37" cy="55.5" r="1" fill="white" opacity="0.5" />
                  {/* Right eye white */}
                  <ellipse cx="62" cy="52" rx="7" ry="7.5" fill="white" />
                  {/* Right iris - green */}
                  <ellipse cx="61" cy="53" rx="5" ry="5.5" fill="#3DA35D" />
                  {/* Right pupil */}
                  <ellipse cx="61" cy="54" rx="2.5" ry="3" fill="#1A1A1A" />
                  {/* Right eye shine */}
                  <circle cx="63.5" cy="50.5" r="2" fill="white" />
                  <circle cx="59" cy="55.5" r="1" fill="white" opacity="0.5" />
                  {/* Eyelashes */}
                  <path d="M29 44C32 41 36 40 44 42" stroke="#4A2810" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                  <path d="M71 44C68 41 64 40 56 42" stroke="#4A2810" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                  {/* Nose */}
                  <path d="M48 63C49 65 51 65 52 63" stroke="#D4A373" strokeWidth="1.2" strokeLinecap="round" fill="none" />
                  {/* Smile */}
                  <path d="M40 70C44 76 56 76 60 70" stroke="#C85A3A" strokeWidth="2" strokeLinecap="round" fill="none" />
                  {/* Blush */}
                  <circle cx="29" cy="64" r="5.5" fill="#FFACAC" opacity="0.45" />
                  <circle cx="71" cy="64" r="5.5" fill="#FFACAC" opacity="0.45" />
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
