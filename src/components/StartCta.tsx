import TrackedLink from "@/components/TrackedLink";
import { BOOKING_URL } from "@/lib/site";

// The one closing call to action every page ends on: the same button label
// everywhere, pointing at the same form, with the 20-minute call one click
// away. Keeps the label and the booking link from drifting page to page.
export default function StartCta({
  label = "Start the conversation",
  place,
  className = "",
}: {
  label?: string;
  place: string;
  className?: string;
}) {
  return (
    <div className={`flex flex-wrap items-center gap-x-7 gap-y-4 ${className}`}>
      <TrackedLink
        event="diagnostic_cta_click"
        place={place}
        label={label}
        href="/#start"
        className="rounded-sm bg-ink px-[22px] py-[13px] text-sm font-medium text-bg transition-colors hover:bg-accent"
      >
        {label} &nbsp;&rarr;
      </TrackedLink>
      {BOOKING_URL && (
        <TrackedLink
          event="book_call_click"
          place={place}
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="border-b border-accent pb-0.5 text-sm font-medium text-ink transition-colors hover:text-accent"
        >
          Or book a 20-minute call
        </TrackedLink>
      )}
    </div>
  );
}
