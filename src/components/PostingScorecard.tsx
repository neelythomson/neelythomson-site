"use client";

import { useState } from "react";
import { track } from "@/lib/track";
import data from "@/data/posting-scorecard.json";

// The standalone scorecard at /scorecard: the ten lines in two groups, a fix
// under every line that is not yet true, and a plain reading for each score
// band. No offer in here; the page it sits on carries one line about who
// made it.
function band(score: number) {
  if (score >= 8) return data.bands[0];
  if (score >= 5) return data.bands[1];
  return data.bands[2];
}

const groups = data.groups as Record<string, { label: string; note: string }>;

export default function PostingScorecard() {
  const [checked, setChecked] = useState<boolean[]>(() => data.items.map(() => false));
  const score = checked.filter(Boolean).length;
  const touched = checked.some(Boolean);
  const r = band(score);
  const open = data.items.length - score;

  return (
    <div>
      <ol className="mt-11">
        {data.items.map((it, i) => {
          const first = i === 0 || data.items[i - 1].group !== it.group;
          return (
            <li key={it.q}>
              {first && (
                <div className={`grid gap-1 pb-2 md:grid-cols-[170px_1fr] md:gap-10 ${i === 0 ? "" : "mt-6 border-t border-ink pt-9"}`}>
                  <span className="label text-ink">{groups[it.group].label}</span>
                  <span className="text-[13.5px] leading-[1.6] text-faint">{groups[it.group].note}</span>
                </div>
              )}
              <div className={`grid gap-3 py-6 md:grid-cols-[170px_1fr] md:gap-10 ${first ? "" : "border-t border-rule"}`}>
                <span className="label pt-1 tnum">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <label className="flex cursor-pointer items-start gap-4">
                    <input
                      type="checkbox"
                      checked={checked[i]}
                      onChange={() => setChecked((c) => c.map((v, j) => (j === i ? !v : v)))}
                      className="mt-[6px] h-4 w-4 shrink-0 cursor-pointer appearance-none rounded-[2px] border border-faint bg-white transition-colors checked:border-accent checked:bg-accent"
                      aria-label={`Line ${i + 1} is true`}
                    />
                    <span className={`max-w-[62ch] text-[16px] leading-[1.65] ${checked[i] ? "text-muted" : "text-ink"}`}>
                      {it.q}
                    </span>
                  </label>
                  {!checked[i] && (
                    <p className="mt-3 ml-8 max-w-[60ch] border-l border-accent pl-4 text-[14px] leading-[1.7] text-muted">
                      <span className="label mr-2">If not</span>
                      {it.fix}
                    </p>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ol>

      <div className="mt-8 grid gap-6 border-t border-ink pt-9 md:grid-cols-[170px_1fr] md:gap-10" aria-live="polite">
        <p className="display tnum text-[clamp(2.6rem,6vw,4rem)] leading-none">
          {score}
          <span className="text-[0.4em] text-faint">/10</span>
        </p>
        <div>
          <h2 className="display-xs mb-2 text-[21px]">{touched ? r.t : "Your score"}</h2>
          <p className="max-w-[62ch] text-[15px] leading-[1.7] text-muted">
            {touched
              ? r.b
              : "Tick each line that is true as things stand today. The note under every open line says what to change."}
          </p>
          {touched && open > 0 && (
            <p className="mt-3 max-w-[62ch] text-[15px] leading-[1.7] text-muted">
              {open === 1 ? "One line is" : `${open} lines are`} still open. Each has its fix written under it above.
            </p>
          )}
          <p className="mt-6 text-[13.5px] text-muted">
            <a
              href="/scorecard/marketing-leader-posting-scorecard.pdf"
              onClick={() => track("scorecard_pdf", { place: "scorecard" })}
              className="border-b border-accent pb-px text-ink transition-colors hover:text-accent"
            >
              Download the scorecard, the fixes and the example posting as a PDF
            </a>{" "}
            to mark up with your sales leader.
          </p>
        </div>
      </div>
    </div>
  );
}
