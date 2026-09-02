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
          Two weeks, a fixed fee, and a written plan at the end of it. If we go
          on to build, the fee comes off the price. If we don&apos;t, you still
          have the plan, and you&apos;re free to hand it to anyone you like.{" "}
          <a href="/diagnostic" className="border-b border-accent pb-px text-ink transition-colors hover:text-accent">
            Here&apos;s how the two weeks run
          </a>
          .
        </p>

        <ContactForm />

        <p className="mt-8 text-[13px] text-faint">
          Prefer LinkedIn?{" "}
          <a
            href="https://www.linkedin.com/in/neelythomson"
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
