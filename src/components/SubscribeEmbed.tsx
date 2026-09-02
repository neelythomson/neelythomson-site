import { SUBSTACK } from "@/lib/substack";

export default function SubscribeEmbed() {
  return (
    <>
      <iframe
        src={`${SUBSTACK}/embed`}
        width="480"
        height="150"
        loading="lazy"
        style={{ border: "1px solid var(--color-rule)", background: "transparent" }}
        title="Subscribe to Neely Thomson on Substack"
        scrolling="no"
        className="block max-w-full"
      />
      <noscript>
        <a
          href={`${SUBSTACK}/subscribe`}
          className="border-b border-accent pb-px text-ink"
          rel="noopener noreferrer"
        >
          Subscribe on Substack
        </a>
      </noscript>
    </>
  );
}
