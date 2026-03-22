const beliefs = [
  {
    number: "01",
    title: "AI is a teammate, not a tool.",
    body: "I don't bolt AI onto existing processes. I redesign processes around what AI makes possible — from content production to pipeline analytics to personalization at scale.",
  },
  {
    number: "02",
    title: "Pipeline over pageviews.",
    body: "Vanity metrics are noise. Every campaign, automation, and experiment I build ladders up to pipeline and revenue. If it doesn't move deals, it doesn't ship.",
  },
  {
    number: "03",
    title: "Compliance isn't a blocker — it's a moat.",
    body: "I've built AI-powered marketing in one of the most regulated industries (fintech payments). Navigating NACHA, CFPB, and legal review isn't friction — it's a competitive advantage when you do it right.",
  },
  {
    number: "04",
    title: "Speed wins, but systems sustain.",
    body: "Ship fast, learn constantly, but build the infrastructure that scales. The best marketing orgs don't rely on heroics — they rely on repeatable, automated engines.",
  },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 px-6 bg-[var(--color-accent)]">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm font-medium text-[var(--color-pop-light)] mb-4 tracking-wide uppercase">
          Philosophy
        </p>
        <h2
          className="text-3xl sm:text-4xl leading-snug mb-14 text-white"
          style={{ fontFamily: "var(--font-display)" }}
        >
          What I believe about modern marketing.
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {beliefs.map((b) => (
            <div
              key={b.number}
              className="p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/[0.08] transition-colors"
            >
              <span className="text-xs font-mono text-[var(--color-pop)] opacity-80">
                {b.number}
              </span>
              <h3 className="text-base font-semibold text-white mt-2 mb-3">
                {b.title}
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
