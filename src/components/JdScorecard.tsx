"use client";

import { useState } from "react";
import { track } from "@/lib/track";
import StartCta from "@/components/StartCta";

export const SCORECARD = [
  "The posting names the one number the role owns, and it is pipeline or revenue rather than MQLs or awareness.",
  "It says who the role reports to and who sets the marketing budget.",
  "It describes the systems the role runs (CRM, automation, scoring, routing, the scoreboard) rather than the assets it produces.",
  "The headcount under the role is stated, and it was set after deciding what AI now covers.",
  "It names the AI tools already in the stack and who owns them today.",
  "It says what the first ninety days are for, and the answer is something other than \"assess.\"",
  "It names the regulations the function operates under and who signs off on a claim before it ships.",
  "It asks for evidence that a function the candidate built kept running after they left.",
  "A written definition of a qualified lead, agreed by sales, exists before the hire.",
  "The sales leader has read the posting and agreed to it.",
];

function read(score: number) {
  if (score >= 8) return { t: "Hire.", b: "The function is defined. The search is the right next step, and the Diagnostic would mostly confirm what you already know." };
  if (score >= 5) return { t: "Fix the posting first.", b: "The role is half-defined. A two-week Diagnostic during the search closes the gaps, and the posting that comes out of it attracts a different candidate." };
  return { t: "Build the function first.", b: "Whoever you hire into this posting will spend their first quarter building what they should have inherited. Do that work before they start." };
}

export default function JdScorecard() {
  const [checked, setChecked] = useState<boolean[]>(() => SCORECARD.map(() => false));
  const score = checked.filter(Boolean).length;
  const touched = checked.some(Boolean);
  const r = read(score);

  return (
    <div>
      <ol className="mt-11">
        {SCORECARD.map((q, i) => (
          <li key={q} className={`${i === 0 ? "" : "border-t border-rule"}`}>
            <label className="grid cursor-pointer gap-3 py-5 md:grid-cols-[170px_1fr] md:gap-10">
              <span className="label pt-1 tnum">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex items-start gap-4">
                <input
                  type="checkbox"
                  checked={checked[i]}
                  onChange={() =>
                    setChecked((c) => c.map((v, j) => (j === i ? !v : v)))
                  }
                  className="mt-[5px] h-4 w-4 shrink-0 cursor-pointer appearance-none rounded-[2px] border border-faint bg-white transition-colors checked:border-accent checked:bg-accent"
                  aria-label={`Question ${i + 1}`}
                />
                <span className="max-w-[62ch] text-[15px] leading-[1.7] text-muted">{q}</span>
              </span>
            </label>
          </li>
        ))}
      </ol>

      <div className="mt-10 grid gap-6 border-t border-rule pt-8 md:grid-cols-[170px_1fr] md:gap-10" aria-live="polite">
        <p className="display tnum text-[clamp(2.6rem,6vw,4rem)] leading-none">
          {score}
          <span className="text-[0.4em] text-faint">/10</span>
        </p>
        <div>
          <h3 className="display-xs mb-2 text-[21px]">{touched ? r.t : "Score your posting."}</h3>
          <p className="max-w-[62ch] text-[15px] leading-[1.7] text-muted">
            {touched
              ? r.b
              : "Tick each line that is true of the posting as it reads today. Eight or more and the search is the right next step. Four or fewer and the first hire is a system, not a person."}
          </p>
          {touched && score < 8 && (
            <>
              <p className="mt-4 max-w-[62ch] text-[15px] leading-[1.7] text-muted">
                The{" "}
                <a href="/diagnostic" className="border-b border-accent pb-px text-ink transition-colors hover:text-accent">
                  Diagnostic
                </a>{" "}
                settles the unticked lines in two weeks, and the fee is
                credited toward the build if there is one.
              </p>
              <StartCta place="before-you-hire-scorecard" className="mt-6" />
            </>
          )}
          <p className="mt-6 text-[13.5px] text-muted">
            <a
              href="/before-you-hire/marketing-leader-posting-scorecard.pdf"
              onClick={() => track("scorecard_pdf", { place: "before-you-hire" })}
              className="border-b border-accent pb-px text-ink transition-colors hover:text-accent"
            >
              Download the scorecard as a one-page PDF
            </a>
            {" "}to mark up with your sales leader.
          </p>
        </div>
      </div>
    </div>
  );
}
