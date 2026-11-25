import Image from "next/image";
import TrackedLink from "@/components/TrackedLink";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-rule px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
      <div className="mx-auto grid max-w-[960px] items-start gap-8 md:grid-cols-[240px_1fr] md:gap-14">
        <Image
          src="/neely-thomson.jpg"
          alt="Neely Thomson"
          width={800}
          height={800}
          sizes="(min-width: 768px) 240px, 168px"
          className="aspect-[4/5] w-[168px] rounded-[3px] object-cover object-top md:w-full"
        />
        <div className="max-w-[62ch]">
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
            I&apos;ve built programs inside PGi and Pfizer Animal Health, and
            as a fractional lead for stable/kernel and LeadLife Solutions.
          </p>
          <p className="mt-4 text-base leading-[1.68] text-muted">
            I also run{" "}
            <TrackedLink
              event="signed_off_click"
              place="home_about"
              href="https://signedoffstories.com/?utm_source=neelythomson.com&utm_medium=referral&utm_campaign=home-about"
              target="_blank"
              rel="noopener"
              className="border-b border-accent pb-px text-ink transition-colors hover:text-accent"
            >
              Signed Off
            </TrackedLink>
            , which writes customer stories for regulated software companies
            and traces every figure and quote to its source.
          </p>
        </div>

      </div>
    </section>
  );
}
