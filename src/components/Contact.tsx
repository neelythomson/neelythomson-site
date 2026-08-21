import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <section id="start" className="scroll-mt-20 border-t border-rule px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-24">
      <div className="mx-auto max-w-[960px]">
        <p className="label mb-8">Start here</p>

        <h2 className="display mb-7 max-w-[16ch] text-[clamp(2.2rem,4.4vw,3.6rem)]">
          Two weeks, $7,500, and you&apos;ll know what&apos;s broken.
        </h2>

        <p className="measure mb-11 text-base leading-[1.68] text-muted">
          The Diagnostic is the front door. Nobody should quote a 90-day build
          before looking at the business. It&apos;s credited in full toward The
          Marketing Engine, and if you&apos;d rather take the plan and run it
          yourself, that&apos;s a legitimate outcome.
        </p>

        <ContactForm />

        <p className="mt-8 text-[13px] text-faint">
          Prefer LinkedIn?{" "}
          <a
            href="https://linkedin.com/in/neelyconway"
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-accent pb-px text-ink transition-colors hover:text-accent"
          >
            Message me there
          </a>
          .
        </p>
      </div>
    </section>
  );
}
