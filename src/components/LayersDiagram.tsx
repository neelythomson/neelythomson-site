// The three layers against the thirteen weeks, drawn in hairlines. One
// picture of the thing every page otherwise explains in prose: the layers
// overlap, strategy starts first, the loop runs last and keeps running.
const rows = [
  { name: "The strategy layer", sub: "points it", from: 1, to: 5 },
  { name: "The operating system", sub: "runs it", from: 3, to: 10 },
  { name: "The optimization loop", sub: "makes it cheaper per opportunity", from: 6, to: 13, loop: true },
];

const W = 960;
const LABEL_W = 230;
const CHART_X = LABEL_W + 20;
const CHART_W = W - CHART_X - 20;
const WEEKS = 13;
const ROW_H = 54;
const TOP = 34;
const H = TOP + rows.length * ROW_H + 30;
const wk = (n: number) => CHART_X + ((n - 1) / WEEKS) * CHART_W;

export default function LayersDiagram({ className = "" }: { className?: string }) {
  return (
    <figure className={className}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-labelledby="layers-title"
        className="w-full"
        style={{ fontFamily: "var(--font-inter), ui-sans-serif, system-ui, sans-serif" }}
      >
        <title id="layers-title">
          The three layers across the ninety days: strategy weeks 1 to 5, operating system weeks 3 to 10, optimization loop weeks 6 to 13 and ongoing.
        </title>

        {/* week axis */}
        {Array.from({ length: WEEKS + 1 }, (_, i) => i + 1).map((n) => (
          <g key={n}>
            <line x1={wk(n)} y1={TOP - 6} x2={wk(n)} y2={H - 24} stroke="#e7e4de" strokeWidth={1} />
            {n <= WEEKS && (n === 1 || n % 2 === 0 || n === WEEKS) && (
              <text
                x={wk(n) + 3}
                y={TOP - 12}
                fontSize={10.5}
                letterSpacing={1.2}
                fill="#706c65"
                style={{ textTransform: "uppercase" }}
              >
                {n === 1 ? "WEEK 1" : n}
              </text>
            )}
          </g>
        ))}
        <text x={wk(WEEKS + 1) - 2} y={TOP - 12} fontSize={10.5} letterSpacing={1.2} fill="#b33a24" textAnchor="end">
          HANDOFF
        </text>

        {rows.map((r, i) => {
          const y = TOP + i * ROW_H;
          const mid = y + ROW_H / 2;
          const x1 = wk(r.from);
          const x2 = wk(r.to + 1);
          return (
            <g key={r.name}>
              <line x1={0} y1={y} x2={W} y2={y} stroke="#e7e4de" strokeWidth={1} />
              <text x={0} y={mid - 4} fontSize={13} fontWeight={500} fill="#1a1917">
                {r.name}
              </text>
              <text x={0} y={mid + 13} fontSize={12} fontStyle="italic" fill="#6b6862">
                {r.sub}
              </text>
              {/* the bar: a filled hairline band */}
              <rect x={x1} y={mid - 9} width={x2 - x1} height={18} fill="#1a1917" />
              <text x={x1 + 8} y={mid + 4} fontSize={10.5} letterSpacing={1.2} fill="#fbfaf8">
                WEEKS {r.from} TO {r.to}
              </text>
              {r.loop && (
                <>
                  {/* the loop keeps running past the handoff */}
                  <line x1={x2} y1={mid} x2={W - 4} y2={mid} stroke="#b33a24" strokeWidth={1.5} strokeDasharray="3 4" />
                  <path d={`M ${W - 10} ${mid - 4} L ${W - 3} ${mid} L ${W - 10} ${mid + 4}`} fill="none" stroke="#b33a24" strokeWidth={1.5} />
                </>
              )}
            </g>
          );
        })}
        <line x1={0} y1={TOP + rows.length * ROW_H} x2={W} y2={TOP + rows.length * ROW_H} stroke="#e7e4de" strokeWidth={1} />
        <text x={0} y={H - 4} fontSize={11} fill="#706c65">
          Built in order, overlapping. The loop keeps running after I leave; your team runs it on the Monday call.
        </text>
      </svg>
    </figure>
  );
}
