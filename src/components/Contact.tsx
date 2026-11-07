import ContactForm from "@/components/ContactForm";
import TrackedLink from "@/components/TrackedLink";
import { BOOKING_URL, EMAIL, LINKEDIN_URL } from "@/lib/site";
import { getEssays } from "@/lib/substack";
import Image from "next/image";

// The sequence a buyer cannot see when there is no price on the page: what
// the note starts, and when the number arrives.
const steps = [
  "You send the note, or book the call.",
  "I reply within two business days with a few questions.",
  "A 20-minute call to pick the right package.",
  "A fixed quote in writing, before anything starts.",
  "We start on a Monday.",
];

export default async function Contact() {
  const [latest] = await getEssays();
  return (
    <section id="start" className="scroll-mt-20 border-t border-rule px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
      <div className="mx-auto max-w-[960px]">
        <p className="label mb-8">Start here</p>

        <h2 className="display mb-7 max-w-[16ch] text-[clamp(2.2rem,4.4vw,3.6rem)]">
          Tell me where you are. I&apos;ll tell you which door.
        </h2>

        <p className="measure mb-8 text-base leading-[1.68] text-muted">
          No marketing hire yet, or a marketer and no engine: say which in the
          note. I&apos;ll reply within two business days with a few questions
          and, if it looks like a fit, what I&apos;d propose and what it costs.
          Fixed scope and a fixed end date either way, and the plan is yours
          whether or not we build it together.{" "}
          <a href="/#doors" className="border-b border-accent pb-px text-ink transition-colors hover:text-accent">
            The two ways in
          </a>
          .
        </p>

        {BOOKING_URL && (
          <p className="mb-11 max-w-2xl border-t border-rule pt-6 text-[15px] leading-[1.7] text-muted">
            Rather talk first?{" "}
            <TrackedLink
              event="book_call_click"
              place="start"
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-accent pb-px text-ink transition-colors hover:text-accent"
            >
              Book a 20-minute call
            </TrackedLink>
            . Or write a few lines below and I&apos;ll reply within two business
            days.
          </p>
        )}

        <div className="grid items-start gap-10 md:grid-cols-[1fr_220px] md:gap-14">
          <ContactForm latest={latest ? { title: latest.title, slug: latest.slug } : null} />

          <aside className="border-t border-rule pt-6 md:border-t-0 md:pt-0">
            <Image
              src="/neely-thomson.jpg"
              alt="Neely Thomson"
              width={800}
              height={800}
              sizes="(min-width: 768px) 220px, 140px"
              className="mb-6 aspect-[4/5] w-[140px] rounded-[3px] object-cover object-top md:w-full"
            />
            <p className="label mb-4">What happens next</p>
            <ol className="tnum">
              {steps.map((s, i) => (
                <li
                  key={s}
                  className="flex gap-3 border-t border-rule py-2.5 text-[13px] leading-[1.5] text-muted"
                >
                  <span className="shrink-0 text-accent">0{i + 1}</span>
                  <span>{s}</span>
                </li>
              ))}
            </ol>
          </aside>
        </div>

        <p className="mt-8 text-[13px] text-faint">
          Rather write an email?{" "}
          <TrackedLink
            event="email_click"
            place="start"
            href={`mailto:${EMAIL}`}
            className="border-b border-accent pb-px text-ink transition-colors hover:text-accent"
          >
            {EMAIL}
          </TrackedLink>
          . Prefer LinkedIn?{" "}
          <TrackedLink
            event="linkedin_click"
            place="start"
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-accent pb-px text-ink transition-colors hover:text-accent"
          >
            Message me there
          </TrackedLink>
          .
        </p>
      </div>
    </section>
  );
}
