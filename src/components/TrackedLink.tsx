"use client";

import type { AnchorHTMLAttributes } from "react";
import { track, type EventName } from "@/lib/track";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  event: EventName;
  place: string;
  label?: string;
};

// An <a> that reports a conversion event on click. Everything else about it
// is a normal link, so it works without JavaScript and keeps its href for
// crawlers.
export default function TrackedLink({ event, place, label, onClick, children, ...rest }: Props) {
  return (
    <a
      {...rest}
      onClick={(e) => {
        track(event, label ? { place, label } : { place });
        onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}
