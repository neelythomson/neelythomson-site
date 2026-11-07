import ContactForm from "@/components/ContactForm";
import TrackedLink from "@/components/TrackedLink";
import { BOOKING_URL, EMAIL, LINKEDIN_URL } from "@/lib/site";
import { getEssays } from "@/lib/substack";

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

        <div className="mb-12 border-t border-rule pt-7">
          <p className="label mb-5">What happens next</p>
          <ol className="grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((s, i) => (
              <li key={s} className="border-t border-rule pt-3">
                <span className="label block text-accent">0{i + 1}</span>
                <span className="mt-1.5 block text-[13px] leading-[1.5] text-muted">{s}</span>
              </li>
            ))}
          </ol>
        </div>

        <ContactForm latest={latest ? { title: latest.title, slug: latest.slug } : null} />

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
