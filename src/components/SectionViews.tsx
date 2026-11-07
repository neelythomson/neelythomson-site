"use client";

import { useEffect } from "react";
import { track } from "@/lib/track";

// Fires section_view once per section per page view, so GA4 can show how far
// down the homepage people get (Situation, Packages, the form) without a
// scroll-percentage proxy. Pass the ids to watch.
export default function SectionViews({ ids }: { ids: string[] }) {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const seen = new Set<string>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const id = (e.target as HTMLElement).id;
          if (e.isIntersecting && !seen.has(id)) {
            seen.add(id);
            track("section_view", { section: id });
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.25 },
    );
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    }
    return () => io.disconnect();
  }, [ids]);
  return null;
}
