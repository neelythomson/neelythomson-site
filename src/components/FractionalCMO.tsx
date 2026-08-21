const installs = [
  {
    group: "Brand & positioning",
    items: [
      "ICP definition and buyer research",
      "Positioning, category narrative, and value proposition",
      "Messaging architecture and voice guidelines",
      "Brand system specification and creative direction",
      "Naming for products, tiers, and categories",
    ],
  },
  {
    group: "Pipeline systems",
    items: [
      "Lifecycle and nurture sequencing — logic, triggers, branching, timing",
      "Lead scoring model and qualification thresholds",
      "CRM and marketing automation integration, data hygiene, field architecture",
      "Routing rules and the marketing–sales SLA",
    ],
  },
  {
    group: "Measurement & cadence",
    items: [
      "Attribution wiring and a five-metric scoreboard",
      "Channel strategy with explicit kill and scale criteria",
      "Budget allocation model",
      "The weekly operating cadence your team runs after I leave",
    ],
  },
];

const notMine = [
  "Writing your blog posts, emails, or social content",
  "Graphic design, brand identity files, illustration, video",
  "Running or optimizing paid campaigns — LinkedIn, Google, anything",
  "Holding or managing your ad accounts",
  "Social media management, community, event execution",
  "Acting as agency of record, or managing your agency",
  "Managing your people",
];

const phases = [
  {
    n: "01",
    name: "Diagnose",
    weeks: "Weeks 1–2",
    body: "Marketing audit, ICP, positioning brief, pipeline math, and the five metrics we'll judge everything by. Your operator gets named here.",
  },
  {
    n: "02",
    name: "Architect",
    weeks: "Weeks 3–5",
    body: "Brand system and messaging architecture. Channel bets written as hypotheses with kill and scale criteria. Scoring model, routing rules, the marketing–sales SLA, and the data architecture underneath it.",
  },
  {
    n: "03",
    name: "Build",
    weeks: "Weeks 6–10",
    body: "The systems get built and go live — sequencing, scoring, CRM integration, routing, attribution, campaign templates. Each one passes through the handoff cycle as it's built.",
  },
  {
    n: "04",
    name: "Hand off",
    weeks: "Weeks 11–13",
    body: "Your operator runs the engine unaided. Runbooks recorded, cadence under their hand. Then I sit on your Monday call for four more weeks, silent unless asked.",
  },
];

const keeps = [
  {
    title: "The Engine Doc",
    body: "One living source of truth — ICP, positioning, every channel bet with its kill criteria, the pipeline model, and every decision with the reasoning attached. Not a slide deck.",
  },
  {
    title: "Recorded walkthroughs",
    body: "Every workflow, screen-recorded, about five minutes each. Nobody reads documentation. They watch it once and copy what you did.",
  },
  {
    title: "The weekly loop",
    body: "Priorities, what shipped, what the numbers say, what to kill or scale. A ritual, not a folder — it's what keeps the engine from becoming a screenshot.",
  },
  {
    title: "The 30/60/90 runbook",
    body: "Exactly what your operator does in each of their first three months without me in the room.",
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-medium text-[var(--color-pop)] mb-4 tracking-wide uppercase">
      {children}
    </p>
  );
}

export default function FractionalCMO() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="pt-28 pb-16 px-6 relative overflow-hidden">
        <div className="absolute top-20 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-violet-200/40 via-purple-100/20 to-transparent blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto relative">
          <Eyebrow>The Engine Install</Eyebrow>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-[1.08] mb-6 max-w-3xl">
            You need a marketing engine.
            <br />
            You don&apos;t need a marketing{" "}
            <span className="italic" style={{ fontFamily: "var(--font-display)" }}>
              department.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-[var(--color-muted)] leading-relaxed max-w-2xl mb-10">
            In 90 days I build the systems that turn attention into pipeline —
            positioning, sequencing, scoring, CRM, routing, attribution — train
            someone on your side to run them, and step out. Fixed scope. Fixed
            end date. No retainer that quietly becomes a job.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#start"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium bg-[var(--color-pop)] text-white rounded-full hover:opacity-90 transition-opacity"
            >
              Start with a Diagnostic
              <span aria-hidden="true">→</span>
            </a>
            <a
              href="#install"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium border border-[var(--color-border)] rounded-full hover:border-[var(--color-pop)] hover:text-[var(--color-pop)] transition-colors"
            >
              See what gets built
            </a>
          </div>
        </div>
      </section>

      {/* ---------- The problem ---------- */}
      <section className="py-20 px-6 border-t border-[var(--color-border)]">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-3 space-y-5">
            <Eyebrow>The situation</Eyebrow>
            <h2
              className="text-3xl sm:text-4xl leading-snug"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Everyone tells you to hire a CMO. Almost half of those hires
              don&apos;t survive eighteen months.
            </h2>
            <p className="text-base text-[var(--color-muted)] leading-relaxed">
              A full-time marketing leader costs roughly $800,000 in year one
              once you count salary, equity, benefits, and the search. Forty-two
              percent of those hires are judged unsuccessful inside eighteen
              months — and then you do it again.
            </p>
            <p className="text-base text-[var(--color-muted)] leading-relaxed">
              The alternative most founders are offered is a fractional CMO who
              shows up two days a week and stays for years. That&apos;s not
              cheaper leadership. That&apos;s the same dependency with a
              different invoice.
            </p>
            <p className="text-base text-[var(--color-muted)] leading-relaxed">
              What you actually need is the machinery: something that knows who
              to talk to, what to say, when to route a lead to sales, and how to
              tell what worked. Machinery can be built once and operated by
              people you already employ.
            </p>
          </div>
          <div className="lg:col-span-2 grid grid-cols-2 gap-4 content-start">
            {[
              { v: "$800k", l: "Year-one cost of a full-time CMO" },
              { v: "42%", l: "Of CMO hires judged unsuccessful in 18 months" },
              { v: "90", l: "Days to install the engine instead" },
              { v: "0", l: "Ongoing retainer required afterward" },
            ].map((s) => (
              <div
                key={s.l}
                className="p-5 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl"
              >
                <p className="text-2xl sm:text-3xl font-bold text-[var(--color-pop)]">
                  {s.v}
                </p>
                <p className="text-sm text-[var(--color-muted)] mt-1">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- What I install ---------- */}
      <section id="install" className="py-20 px-6 border-t border-[var(--color-border)]">
        <div className="max-w-5xl mx-auto">
          <Eyebrow>What I install</Eyebrow>
          <h2
            className="text-3xl sm:text-4xl leading-snug mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The engine, specifically.
          </h2>
          <p className="text-base text-[var(--color-muted)] leading-relaxed mb-12 max-w-2xl">
            Most fractional CMO pages are vague about this on purpose. Here is
            the actual list.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {installs.map((col) => (
              <div key={col.group}>
                <h3 className="text-sm font-mono uppercase tracking-wider text-[var(--color-pop)] mb-4 pb-3 border-b border-[var(--color-border)]">
                  {col.group}
                </h3>
                <ul className="space-y-3">
                  {col.items.map((i) => (
                    <li
                      key={i}
                      className="text-sm text-[var(--color-muted)] leading-relaxed pl-4 relative"
                    >
                      <span className="absolute left-0 top-[0.55em] w-1.5 h-1.5 rounded-full bg-[var(--color-pop)]" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- What I don't do ---------- */}
      <section className="py-20 px-6 bg-[#0f0f0f] text-white">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-2">
            <p className="text-sm font-medium text-violet-400 mb-4 tracking-wide uppercase">
              What I don&apos;t do
            </p>
            <h2
              className="text-3xl sm:text-4xl leading-snug mb-5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              I build the machine. I don&apos;t feed it.
            </h2>
            <p className="text-base text-white/60 leading-relaxed">
              If it produces an asset, it&apos;s yours. If it moves, routes,
              scores, or measures an asset, it&apos;s mine. I&apos;ll write the
              creative brief and direct the work — I won&apos;t be the one
              making it. I keep a short list of people I trust for that, and
              I&apos;ll introduce you directly.
            </p>
          </div>
          <ul className="lg:col-span-3 space-y-4 content-start">
            {notMine.map((n) => (
              <li
                key={n}
                className="text-base text-white/70 leading-relaxed pl-7 relative"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 text-white/25 font-mono text-sm"
                >
                  ✕
                </span>
                {n}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- The 90 days ---------- */}
      <section className="py-20 px-6 border-t border-[var(--color-border)]">
        <div className="max-w-5xl mx-auto">
          <Eyebrow>The 90 days</Eyebrow>
          <h2
            className="text-3xl sm:text-4xl leading-snug mb-12"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Four phases, each one gated on the last.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {phases.map((p) => (
              <div
                key={p.n}
                className="experience-card p-6 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl"
              >
                <p className="font-mono text-xs text-[var(--color-pop)] mb-3">
                  {p.n}
                </p>
                <h3 className="text-lg font-semibold mb-1">{p.name}</h3>
                <p className="font-mono text-xs text-[var(--color-muted)] mb-4">
                  {p.weeks}
                </p>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- The handoff ---------- */}
      <section className="py-20 px-6 border-t border-[var(--color-border)]">
        <div className="max-w-5xl mx-auto">
          <Eyebrow>How the handoff actually works</Eyebrow>
          <h2
            className="text-3xl sm:text-4xl leading-snug mb-5 max-w-2xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            I build the first one. Your team builds the second. They run the
            third.
          </h2>
          <p className="text-base text-[var(--color-muted)] leading-relaxed mb-12 max-w-2xl">
            An engine with no operator stops the day the consultant leaves.
            That&apos;s why every system passes through the same three reps
            before I sign off on it.
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                n: "Rep one",
                t: "I build it, you watch",
                b: "Live, screen-recorded. You see the judgment calls as I make them, not a summary of them afterward.",
              },
              {
                n: "Rep two",
                t: "You build it, I review",
                b: "Before it ships. This is the rep that matters — it's where we find out what's still missing while I'm still under contract.",
              },
              {
                n: "Rep three",
                t: "You build it, I stay quiet",
                b: "You ship without me. I review after. If it holds, that system is handed off for good.",
              },
            ].map((r) => (
              <div
                key={r.n}
                className="p-6 border-l-2 border-[var(--color-pop)] bg-[var(--color-pop-light)]/40 rounded-r-xl"
              >
                <p className="font-mono text-xs uppercase tracking-wider text-[var(--color-pop)] mb-3">
                  {r.n}
                </p>
                <h3 className="text-lg font-semibold mb-2">{r.t}</h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  {r.b}
                </p>
              </div>
            ))}
          </div>
          <p className="text-base text-[var(--color-muted)] leading-relaxed mt-10 max-w-2xl">
            That&apos;s what <em>install</em> means here. Not that I set it up —
            that someone on your team has now done it three times.
          </p>
        </div>
      </section>

      {/* ---------- What you keep ---------- */}
      <section className="py-20 px-6 border-t border-[var(--color-border)]">
        <div className="max-w-5xl mx-auto">
          <Eyebrow>What you keep</Eyebrow>
          <h2
            className="text-3xl sm:text-4xl leading-snug mb-12 max-w-2xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The deliverable is an asset, not my availability.
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {keeps.map((k) => (
              <div
                key={k.title}
                className="experience-card p-6 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl"
              >
                <h3 className="text-lg font-semibold mb-2">{k.title}</h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  {k.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Fit ---------- */}
      <section className="py-20 px-6 border-t border-[var(--color-border)]">
        <div className="max-w-5xl mx-auto">
          <Eyebrow>Fit</Eyebrow>
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <h3
                className="text-2xl mb-5"
                style={{ fontFamily: "var(--font-display)" }}
              >
                This works when
              </h3>
              <ul className="space-y-3">
                {[
                  "You sell B2B software, often into regulated or institutional buyers — fintech, edtech and workforce, healthtech, govtech",
                  "You have real revenue and no marketing leader, or one who needs the systems built underneath them",
                  "Compliance, procurement, or long sales cycles have been treated as reasons not to build",
                  "Someone on your team can own this after me — and can give it four to six hours a week while I'm there",
                ].map((x) => (
                  <li
                    key={x}
                    className="text-sm text-[var(--color-muted)] leading-relaxed pl-6 relative"
                  >
                    <span className="absolute left-0 top-0 text-[var(--color-pop)] font-mono text-sm">
                      ✓
                    </span>
                    {x}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3
                className="text-2xl mb-5"
                style={{ fontFamily: "var(--font-display)" }}
              >
                This doesn&apos;t work when
              </h3>
              <ul className="space-y-3">
                {[
                  "You want someone to run campaigns week to week — that's a coordinator hire or an agency, and I'll tell you so",
                  "There's nobody to hand the engine to. I'll say this in week one rather than month three",
                  "You want a marketing department rented by the month",
                  "The goal is more content rather than more pipeline",
                ].map((x) => (
                  <li
                    key={x}
                    className="text-sm text-[var(--color-muted)] leading-relaxed pl-6 relative"
                  >
                    <span className="absolute left-0 top-0 text-[var(--color-muted)] font-mono text-sm">
                      ✕
                    </span>
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Credentials ---------- */}
      <section className="py-20 px-6 border-t border-[var(--color-border)]">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-3 space-y-5">
            <Eyebrow>Why me</Eyebrow>
            <h2
              className="text-3xl sm:text-4xl leading-snug"
              style={{ fontFamily: "var(--font-display)" }}
            >
              I&apos;ve built this under regulators, and I&apos;ve sat in the
              sales chair.
            </h2>
            <p className="text-base text-[var(--color-muted)] leading-relaxed">
              Twenty years in B2B SaaS and fintech. Most recently VP &amp; Head
              of Marketing at Dwolla, a payments platform, where I ran an
              AI-forward marketing org under NACHA and CFPB constraints and got
              it through legal. &ldquo;Compliance won&apos;t let us&rdquo; is a
              sentence I&apos;ve heard and worked around for years.
            </p>
            <p className="text-base text-[var(--color-muted)] leading-relaxed">
              I also served as interim sales leader there. That matters more
              than it sounds: the most common way a handed-off marketing engine
              dies is that sales stops trusting it. Leads pile up, nobody works
              them, and by month five someone unplugs the whole thing. I build
              the marketing–sales handshake because I&apos;ve been on both sides
              of it.
            </p>
            <p className="text-base text-[var(--color-muted)] leading-relaxed">
              I also build{" "}
              <a
                href="https://kindlingmagic.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-pop)] hover:underline"
              >
                Kindling
              </a>
              , an AI marketing teammate for small teams. Every Engine Install
              includes it free for a year — it&apos;s how your team keeps
              producing after I&apos;m gone.
            </p>
          </div>
          <div className="lg:col-span-2 grid grid-cols-2 gap-4 content-start">
            {[
              { v: "20+", l: "Years in B2B marketing" },
              { v: "60%", l: "Manual campaign work removed" },
              { v: "5:1", l: "LTV:CAC delivered" },
              { v: "15%", l: "MQL-to-Opp conversion lift" },
            ].map((s) => (
              <div
                key={s.l}
                className="p-5 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl"
              >
                <p className="text-2xl sm:text-3xl font-bold text-[var(--color-pop)]">
                  {s.v}
                </p>
                <p className="text-sm text-[var(--color-muted)] mt-1">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Start ---------- */}
      <section id="start" className="py-24 px-6 border-t border-[var(--color-border)]">
        <div className="max-w-5xl mx-auto">
          <Eyebrow>Where to start</Eyebrow>
          <h2
            className="text-3xl sm:text-4xl leading-snug mb-6 max-w-2xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Start with a Diagnostic. Two weeks, and you owe me nothing after
            it.
          </h2>
          <p className="text-base text-[var(--color-muted)] leading-relaxed mb-10 max-w-2xl">
            Nobody should quote a 90-day build before looking at the business.
            The Diagnostic is a marketing audit, an ICP and positioning read, a
            stack and data review, the pipeline math, and a prioritized 90-day
            plan. It stands on its own. If we go forward, the full fee comes off
            the Install.
          </p>

          <div className="grid sm:grid-cols-2 gap-5 mb-10">
            <div className="p-6 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl">
              <p className="font-mono text-xs uppercase tracking-wider text-[var(--color-muted)] mb-3">
                The Diagnostic · 2 weeks
              </p>
              <p
                className="text-3xl mb-2 text-[var(--color-pop)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                $7,500
              </p>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                Credited in full toward an Engine Install.
              </p>
            </div>
            <div className="p-6 bg-[var(--color-pop-light)] border border-[var(--color-pop)] rounded-xl">
              <p className="font-mono text-xs uppercase tracking-wider text-[var(--color-pop)] mb-3">
                The Engine Install · 90 days
              </p>
              <p
                className="text-3xl mb-2 text-[var(--color-pop)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                From $45,000
              </p>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                Fixed scope, billed across the three months. Includes Kindling
                free for twelve.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:neelyannconway@gmail.com?subject=Engine%20Install%20%E2%80%94%20Diagnostic"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium bg-[var(--color-pop)] text-white rounded-full hover:opacity-90 transition-opacity"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="3" width="12" height="10" rx="1.5" />
                <path d="M2 5l6 4 6-4" />
              </svg>
              Book a Diagnostic
            </a>
            <a
              href="https://linkedin.com/in/neelyconway"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium border border-[var(--color-border)] rounded-full hover:border-[var(--color-pop)] hover:text-[var(--color-pop)] transition-colors"
            >
              LinkedIn
            </a>
          </div>
          <p className="text-sm text-[var(--color-muted)] mt-6">
            Taking two Engine Installs this quarter.
          </p>
        </div>
      </section>
    </>
  );
}
