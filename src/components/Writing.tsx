export default function Writing() {
  return (
    <section id="writing" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm font-medium text-[var(--color-pop)] mb-4 tracking-wide uppercase">
          Writing
        </p>
        <h2
          className="text-3xl sm:text-4xl leading-snug mb-6"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Notes from the leap.
        </h2>
        <p className="text-base text-[var(--color-muted)] leading-relaxed mb-10 max-w-xl">
          After twenty years leading marketing teams, I left corporate to build
          a life that fits. My Substack is where I write about what happens
          next — money, meaning, alignment, and figuring out a new way to work
          — from inside it, not after the fact.
        </p>

        <a
          href="https://neelyannthomson.substack.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium bg-[var(--color-pop)] text-white rounded-full hover:opacity-90 transition-opacity"
        >
          <span aria-hidden="true">✨</span>
          Read on Substack
        </a>
      </div>
    </section>
  );
}
