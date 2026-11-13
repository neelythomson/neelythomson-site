"use client";

import { useState } from "react";
import data from "@/data/posting-scorecard.json";

// Copies the example posting on /scorecard as plain text, so a founder can
// paste it into a document and fill in the brackets.
export default function CopyPosting() {
  const [done, setDone] = useState(false);
  const text = [
    data.model.title,
    "",
    data.model.intro,
    "",
    ...data.model.parts.flatMap((p) => [p.h, p.t, ""]),
  ].join("\n");

  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setDone(true);
          setTimeout(() => setDone(false), 2500);
        } catch {
          setDone(false);
        }
      }}
      className="rounded-sm bg-ink px-[22px] py-[13px] text-sm font-medium text-bg transition-colors hover:bg-accent"
    >
      {done ? "Copied" : "Copy the example posting"}
    </button>
  );
}
