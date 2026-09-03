export default function Footer() {
  return (
    <div className="mx-auto max-w-[960px] px-6 sm:px-10">
      <footer className="flex flex-wrap gap-6 border-t border-rule py-11 text-[12.5px] text-faint">
        <span>&copy; {new Date().getFullYear()} Neely Thomson</span>
        <a href="/marketing-engine" className="transition-colors hover:text-accent">
          What is a marketing engine
        </a>
        <a href="/diagnostic" className="transition-colors hover:text-accent">
          The Diagnostic
        </a>
        <a href="/work" className="transition-colors hover:text-accent">
          Work
        </a>
        <a href="/about" className="transition-colors hover:text-accent">
          About
        </a>
        <a href="/fractional-cmo-vs-full-time" className="transition-colors hover:text-accent">
          Fractional vs. full-time
        </a>
        <a href="/faq" className="transition-colors hover:text-accent">
          FAQ
        </a>
        <a href="/writing" className="transition-colors hover:text-accent">
          Writing
        </a>
        <a
          href="https://www.linkedin.com/in/neelythomson"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-accent"
        >
          LinkedIn
        </a>
        <a href="/privacy" className="transition-colors hover:text-accent">
          Privacy
        </a>
      </footer>
    </div>
  );
}
