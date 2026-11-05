"use client";

import { useEffect, useState } from "react";
import { track } from "@/lib/track";

// A bottom bar on phones only. It appears once the reader has scrolled past
// the hero and disappears while the enquiry form is on screen, so it never
// covers the thing it points to.
export default function StickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const start = document.getElementById("start");
    let formVisible = false;
    let pastHero = false;

    const update = () => setShow(pastHero && !formVisible);

    const onScroll = () => {
      pastHero = window.scrollY > window.innerHeight * 0.9;
      update();
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    let io: IntersectionObserver | undefined;
    if (start && "IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          formVisible = entries[0].isIntersecting;
          update();
        },
        { rootMargin: "0px 0px -20% 0px" },
      );
      io.observe(start);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      io?.disconnect();
    };
  }, []);

  return (
    <div
      aria-hidden={!show}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-rule bg-bg/95 px-6 py-3 backdrop-blur transition-transform duration-200 md:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "max(12px, env(safe-area-inset-bottom))" }}
    >
      <a
        href="#start"
        tabIndex={show ? 0 : -1}
        onClick={() => track("diagnostic_cta_click", { place: "sticky" })}
        className="flex items-center justify-between rounded-sm bg-ink px-[18px] py-[13px] text-sm font-medium text-bg"
      >
        <span>Start the conversation</span>
        <span className="text-white/70">Two ways in &rarr;</span>
      </a>
    </div>
  );
}
