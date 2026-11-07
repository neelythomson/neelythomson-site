import LayersDiagram from "@/components/LayersDiagram";

const groups = [
  {
    group: "The strategy layer",
    sub: "Points the engine",
    weeks: "Weeks 1–5",
    items: [
      "ICP definition, buyer research, and subsegmentation",
      "A one-page go-to-market per business unit: named segments, channel bets, kill and scale criteria",
      "Positioning, category narrative, value proposition, messaging architecture",
      "Brand system specification, creative direction, and naming",
      "One planning cadence, so every team plans on the same template",
    ],
  },
  {
    group: "The operating system",
    sub: "Runs it",
    weeks: "Weeks 3–10",
    items: [
      "One written definition of a qualified lead, with deal-value thresholds where they belong",
      "Lead scoring and routing built into your CRM and marketing automation, with the data architecture underneath",
      "The marketing-to-sales SLA, one page, signed by both sides",
      "The AI production process: brief template, subject-matter-expert loop, prompt and template libraries, a written quality bar",
      "Intake and capacity: one queue, every request scored on pipeline impact",
      "Lifecycle and nurture sequencing: logic, triggers, branching, timing",
    ],
  },
  {
    group: "The optimization loop",
    sub: "Makes it cheaper per opportunity",
    weeks: "Weeks 6–13",
    items: [
      "Attribution wiring and a five-metric scoreboard, anchored on pipeline",
      "Pipeline returned per dollar for every channel, conferences included, refreshed monthly",
      "Budget reallocation on a quarterly cadence, toward what returns",
      "A board one-pager that assembles itself from the scoreboard",
      "The weekly operating cadence your team runs after I leave",
    ],
  },
];

export default function Engine() {
  return (
    <>
      <section id="engine" className="scroll-mt-20 border-t border-rule px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
        <div className="mx-auto max-w-[960px]">
          <p className="label mb-8">
            How it works <span className="text-accent">· three layers</span>
          </p>

          <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
            Systems that produce revenue, built in your tools and handed to a
            named person on your team.
          </h2>
          <p className="measure text-base leading-[1.68] text-muted">
            Three layers, built in order, in the tools you already own.
            Strategy decides who you sell to and what you say. The operating
            system moves leads from first touch to sales without anyone chasing
            them. The scoreboard tells you what each channel returned in pipeline
            and revenue, every month, so the proof is in your own numbers.{" "}
            <a href="/marketing-engine" className="border-b border-accent pb-px text-ink transition-colors hover:text-accent">
              The full definition
            </a>
            .
          </p>

          <LayersDiagram className="mt-12 hidden sm:block" />

          <div className="mt-6">
            {groups.map((g, i) => (
              <div
                key={g.group}
                className={`grid gap-4 py-7 md:grid-cols-[170px_1fr] md:gap-10 ${
                  i === 0 ? "" : "border-t border-rule"
                }`}
              >
                <div>
                  <p className="text-[12.5px] font-medium">{g.group}</p>
                  <p className="mt-0.5 text-[12.5px] italic text-muted">{g.sub}</p>
                  <p className="label mt-1.5">{g.weeks}</p>
                </div>
                <ul>
                  {g.items.map((item, j) => (
                    <li
                      key={item}
                      className={`text-[15px] leading-[1.72] text-muted ${
                        j === 0 ? "" : "mt-2.5 border-t border-rule pt-2.5"
                      }`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
