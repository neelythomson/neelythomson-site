const roles = [
  {
    company: "Dwolla",
    period: "2022 – Present",
    title: "VP & Head of Marketing",
    description:
      "Built and lead an AI-forward marketing organization for a B2B fintech payments platform. Architected automated inbound/outbound funnels, deployed AI-powered content workflows under fintech compliance, and delivered LTV:CAC of 5:1.",
    highlights: [
      "Led company-wide AI marketing transformation — 60% reduction in manual campaign work",
      "Built AI-assisted website ops pipeline enabling rapid page production & A/B testing at scale",
      "Served as Interim Sales Leader, integrating marketing and sales operations",
      "Introduced AI-driven personalization across ABM campaigns using 6sense intent data",
    ],
  },
  {
    company: "Independent",
    period: "2022 – Present",
    title: "Marketing Consultant",
    description:
      "Advise mid-sized B2B tech companies on GTM strategy, brand positioning, AI-assisted content strategy, and growth marketing frameworks.",
    highlights: [
      "Architect modern MarTech stacks and AI-powered automation workflows",
      "Build lifecycle campaigns to improve pipeline velocity and close rates",
    ],
  },
  {
    company: "ASPCA",
    period: "2018 – 2022",
    title: "Director of B2B Engagement",
    description:
      "Designed and executed digital demand gen and lifecycle strategies to grow B2B partner engagement across a large nonprofit.",
    highlights: [
      "Increased net-new lead acquisition by 15%",
      "Boosted engagement metrics by 75% through CRM-integrated campaign strategy",
    ],
  },
  {
    company: "PGi",
    period: "2014 – 2016",
    title: "Sr. Sales Enablement Marketing Manager",
    description:
      "Launched an internal sales enablement platform supporting 400+ reps with content, training, battlecards, and funnel analytics.",
    highlights: [],
  },
  {
    company: "LeadLife Solutions",
    period: "2013 – 2014",
    title: "Marketing Manager",
    description:
      "Developed demand gen strategy that increased lead volume by 15% for a B2B marketing automation software provider.",
    highlights: [],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm font-medium text-[var(--color-pop)] mb-4 tracking-wide uppercase">
          Experience
        </p>
        <h2
          className="text-3xl sm:text-4xl leading-snug mb-14"
          style={{ fontFamily: "var(--font-display)" }}
        >
          From early-stage MarTech to enterprise fintech — always pushing the
          craft forward.
        </h2>

        <div className="space-y-0">
          {roles.map((role, i) => (
            <div
              key={i}
              className="experience-card group grid md:grid-cols-12 gap-4 md:gap-8 py-8 px-4 -mx-4 rounded-lg border-t border-[var(--color-border)] first:border-t-0 first:pt-0"
            >
              <div className="md:col-span-3">
                <p className="text-sm font-mono text-[var(--color-muted)]">
                  {role.period}
                </p>
                <p className="text-sm font-semibold mt-1">{role.company}</p>
              </div>
              <div className="md:col-span-9">
                <h3 className="text-base font-semibold mb-2">{role.title}</h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-3">
                  {role.description}
                </p>
                {role.highlights.length > 0 && (
                  <ul className="space-y-1.5">
                    {role.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="text-sm text-[var(--color-muted)] leading-relaxed flex gap-2"
                      >
                        <span className="text-[var(--color-pop)] mt-1 shrink-0">
                          &rarr;
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
