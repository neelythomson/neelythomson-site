export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-[var(--color-border)]">
      <div className="max-w-5xl mx-auto flex items-center justify-between text-sm text-[var(--color-muted)]">
        <p>&copy; {new Date().getFullYear()} Neely Thomson</p>
        <a
          href="#"
          className="hover:text-[var(--color-pop)] transition-colors"
        >
          Back to top
        </a>
      </div>
    </footer>
  );
}
