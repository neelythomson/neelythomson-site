import Image from "next/image";

const track = [
  { k: "2020 – present", v: "Independent · Marketing functions for software startups" },
  { k: "2022 – 2026", v: "B2B fintech payments · Head of Marketing (acquired)" },
  { k: "2018 – 2022", v: "National nonprofit · Director of B2B Engagement" },
  { k: "2014 – 2016", v: "Enterprise collaboration software · Sr. Sales Enablement Marketing Manager" },
  { k: "2013 – 2014", v: "B2B marketing automation software · Marketing Manager" },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-rule px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
      <div className="mx-auto grid max-w-[960px] items-start gap-8 lg:grid-cols-2 lg:gap-14">
        <div>
          <Image
            src="/neely-thomson.jpg"
            alt="Neely Thomson"
            width={800}
            height={800}
            sizes="168px"
            className="mb-8 aspect-[4/5] w-[168px] rounded-[3px] object-cover object-top"
          />
          <p className="label mb-8">About</p>
          <h2 className="display-sm mb-5 text-[clamp(1.9rem,3.4vw,2.9rem)]">
            Neely Thomson
          </h2>
          <p className="text-base leading-[1.68] text-muted">
            Twenty years building, scaling, and leading B2B SaaS and fintech
            marketing teams. Most recently I spent four years as Head of
            Marketing at a B2B fintech payments startup, where I led a
            company-wide AI marketing transformation, stepped in as interim
            sales leader, and helped execute the sale when the company was
            acquired.
          </p>
          <p className="mt-4 text-base leading-[1.68] text-muted">
            Now I do this for software startups, before the first marketing
            hire or after it. Most of my work is in regulated software.
          </p>
        </div>

        <div>
          <p className="label mb-8">Track record</p>
          <ul>
            {track.map((r) => (
              <li
                key={r.v}
                className="grid gap-1 border-t border-rule py-3 text-[13.5px] leading-[1.5] text-muted sm:grid-cols-[118px_1fr] sm:gap-4"
              >
                <span className="label pt-0.5">{r.k}</span>
                {r.v}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
