const groups = [
  {
    group: "Brand & positioning",
    weeks: "Weeks 1–5",
    items: [
      "ICP definition and buyer research",
      "Positioning, category narrative, value proposition",
      "Messaging architecture and voice guidelines",
      "Brand system specification and creative direction",
      "Naming for products, tiers, and categories",
    ],
  },
  {
    group: "Pipeline systems",
    weeks: "Weeks 3–10",
    items: [
      "Lifecycle and nurture sequencing — logic, triggers, branching, timing",
      "Lead scoring model and qualification thresholds",
      "CRM and marketing automation integration, data hygiene, field architecture",
      "Routing rules and the marketing–sales SLA",
    ],
  },
  {
    group: "Measurement & cadence",
    weeks: "Weeks 6–13",
    items: [
      "Attribution wiring and a five-metric scoreboard",
      "Channel strategy with explicit kill and scale criteria",
      "Budget allocation model",
      "The weekly operating cadence your team runs after I leave",
    ],
  },
];

const excluded = [
  "Writing your blog posts, emails, or social content",
  "Graphic design, brand identity files, illustration, video",
  "Running or optimizing paid campaigns — LinkedIn, Google, anything",
  "Holding or managing your ad accounts",
  "Social media management, community, event execution",
  "Acting as agency of record, or managing your agency",
  "Managing your people",
];

export default function Engine() {
  return (
    <>
      <section id="engine" className="scroll-mt-20 border-t border-rule px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
        <div className="mx-auto max-w-[960px]">
          <p className="label mb-8">
            What gets built <span className="text-accent">· three system groups</span>
          </p>

          <h2 className="display-sm max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
            Everything below is built, tested, and handed to a named person on
            your team.
          </h2>

          <div className="mt-12">
            {groups.map((g, i) => (
              <div
                key={g.group}
                className={`grid gap-4 py-7 md:grid-cols-[170px_1fr] md:gap-10 ${
                  i === 0 ? "" : "border-t border-rule"
                }`}
              >
                <div>
                  <p className="text-[12.5px] font-medium">{g.group}</p>
                  <p className="label mt-1">{g.weeks}</p>
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

      <section className="border-t border-rule px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
        <div className="mx-auto max-w-[960px]">
          <p className="label mb-8">Not included</p>
          <h2 className="display-sm max-w-[24ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
            What I don&apos;t do, written down so neither of us finds out in
            week six.
          </h2>
          <ul className="mt-9 max-w-[74ch] sm:columns-2 sm:gap-x-11">
            {excluded.map((x) => (
              <li
                key={x}
                className="relative break-inside-avoid border-t border-rule py-2.5 pl-[22px] text-[14.5px] leading-[1.5] text-muted"
              >
                <span aria-hidden="true" className="absolute left-0 text-accent">
                  &mdash;
                </span>
                {x}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
