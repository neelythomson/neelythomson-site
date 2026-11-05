const doors = [
  {
    n: "01",
    when: "Before the hire",
    name: "The First Hire Plan",
    figure: "Six weeks",
    lead: "You're a founder about to make your first marketing hire.",
    body:
      "Before you write the posting, I design the function the hire walks into: which role and what level, the twelve-month plan, the budget by quarter, the stack, a lead definition your sales lead signs, and the scoreboard the board will read. The hire starts with a plan on day one instead of spending their first quarter writing one.",
    fit: "Seed to Series A, 10 to 40 people, marketing still run by you.",
    href: "#packages",
    cta: "What the six weeks produce",
  },
  {
    n: "02",
    when: "After the hire",
    name: "The Marketing Engine",
    figure: "Ninety days",
    lead: "You have a marketer, or a small team, and no engine.",
    body:
      "Content goes out every week and nobody can say what produced pipeline. I audit the function in two weeks, then rebuild it around AI, get it through legal review, and train your team to run it. Strategy, operating system, optimization loop, built in your tools with your operator beside me.",
    fit: "A marketer in place, a dozen or more closed deals, budget going out the door.",
    href: "/diagnostic",
    cta: "How the Diagnostic runs",
  },
];

export default function Doors() {
  return (
    <section
      id="doors"
      className="scroll-mt-20 border-t border-rule px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24"
    >
      <div className="mx-auto max-w-[960px]">
        <p className="label mb-8">Two ways in</p>

        <h2 className="display-sm mb-7 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.9rem)]">
          Before your first marketing hire, or after it.
        </h2>

        <p className="measure text-base leading-[1.68] text-muted">
          Same company, same size, two different moments. Which door is yours
          depends on one question: have you made the hire yet?
        </p>

        <div className="mt-11 grid items-start gap-x-10 gap-y-12 md:grid-cols-2">
          {doors.map((d, i) => (
            <div
              key={d.name}
              className={`border-t-2 border-ink pt-7 ${
                i > 0 ? "md:border-l md:border-l-rule md:pl-10" : "md:pr-2"
              }`}
            >
              <p className="label mb-5">
                {d.n} <span className="mx-0.5">·</span> {d.when}
              </p>

              <h3 className="display-xs mb-3 text-[24px]">{d.name}</h3>
              <div className="display tnum text-[28px] leading-none text-accent">
                {d.figure}
              </div>

              <p className="mt-6 text-[15.5px] font-medium leading-[1.55] text-ink">
                {d.lead}
              </p>
              <p className="mt-3 max-w-[52ch] text-[15px] leading-[1.7] text-muted">
                {d.body}
              </p>

              <p className="mt-5 border-t border-rule pt-4 text-[12.5px] leading-[1.55] text-faint">
                <span className="label mr-3">Fit</span>
                {d.fit}
              </p>

              <a
                href={d.href}
                className="mt-4 inline-block border-b border-accent pb-px text-[13px] text-ink transition-colors hover:text-accent"
              >
                {d.cta} &rarr;
              </a>
            </div>
          ))}
        </div>

        <p className="mt-10 border-t border-rule pt-7 text-[15px] leading-[1.7] text-muted">
          Both doors end the same way: a function your team runs, with a fixed
          end date in the agreement. If you want me close by while your
          hire&apos;s first quarter runs, that&apos;s the Advisory Seat.
        </p>
      </div>
    </section>
  );
}
