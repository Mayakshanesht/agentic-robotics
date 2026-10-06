import { motion, useReducedMotion } from "framer-motion";

const TEAL = "#0D9488";
const AMBER = "#B45309";
const INK = "#13233B";
const MUTED = "#5B6B85";
const RING = "#CBD5E1";

/** Stations on the ring, from the top, clockwise. */
export const LOOP_STATIONS = [
  { key: "runs", label: "It runs", sub: "on your line" },
  { key: "notices", label: "It notices", sub: "what changed" },
  { key: "data", label: "The data", sub: "is corrected" },
  { key: "model", label: "The model", sub: "is corrected" },
];

const anchorFor = (i: number) => (i === 1 ? "start" : i === 3 ? "end" : "middle");
const offsetFor = (i: number) => {
  if (i === 0) return { dx: 0, dy: -30 };
  if (i === 1) return { dx: 24, dy: -4 };
  if (i === 2) return { dx: 0, dy: 38 };
  return { dx: -24, dy: -4 };
};

/**
 * The loop itself: a token going round four stations for as long as the skill
 * is in service. `labels` is dropped on narrow screens, where the list beside
 * it names the stations and SVG text would be too small to read.
 */
export function ImproveLoop({ step, lap, labels = true }: { step: number; lap: number; labels?: boolean }) {
  const reduce = useReducedMotion();
  const cx = labels ? 260 : 180;
  const cy = 180;
  const r = labels ? 112 : 126;
  const viewBox = labels ? "0 0 520 372" : "0 0 360 372";
  const circumference = 2 * Math.PI * r;

  const pos = (i: number) => {
    const a = (-90 + i * 90) * (Math.PI / 180);
    return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
  };

  return (
    <svg
      viewBox={viewBox}
      className="h-full w-full"
      role="img"
      aria-label="The loop: the skill runs on your line, it notices what changed, the data is corrected in your twin, the model is corrected, and the skill goes back on the robot"
    >
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={RING} strokeWidth="1.5" strokeDasharray="4 6" />

      {/* how far round this lap has come */}
      <motion.circle
        cx={cx}
        cy={cy}
        r={r}
        fill="none"
        stroke={TEAL}
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray={circumference}
        transform={`rotate(-90 ${cx} ${cy})`}
        initial={false}
        animate={{ strokeDashoffset: circumference * (1 - ((step + 1) % 4 || 4) / 4) }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
      />

      <circle cx={cx} cy={cy} r={labels ? 56 : 62} fill="#FFFFFF" stroke={RING} strokeWidth="1" />
      <text x={cx} y={cy - 14} fontSize="13" textAnchor="middle" fill={MUTED}>
        lap
      </text>
      <text x={cx} y={cy + 12} fontSize="28" fontWeight="800" textAnchor="middle" fill={INK}>
        {lap + 1}
      </text>
      <text x={cx} y={cy + 32} fontSize="11" textAnchor="middle" fill={MUTED}>
        and counting
      </text>

      {LOOP_STATIONS.map((s, i) => {
        const p = pos(i);
        const active = i === step;
        const off = offsetFor(i);
        return (
          <g key={s.key}>
            <motion.circle
              cx={p.x}
              cy={p.y}
              fill={active ? TEAL : "#FFFFFF"}
              stroke={active ? TEAL : RING}
              strokeWidth="2"
              initial={false}
              animate={{ r: active ? 14 : 10 }}
              transition={{ duration: 0.4 }}
            />
            <text
              x={p.x}
              y={p.y + 4}
              fontSize="11"
              fontWeight="800"
              textAnchor="middle"
              fill={active ? "#FFFFFF" : i === 1 ? AMBER : MUTED}
            >
              {i + 1}
            </text>
            {labels && (
              <>
                <text
                  x={p.x + off.dx}
                  y={p.y + off.dy}
                  fontSize="13.5"
                  fontWeight="700"
                  textAnchor={anchorFor(i)}
                  fill={active ? INK : MUTED}
                >
                  {s.label}
                </text>
                <text x={p.x + off.dx} y={p.y + off.dy + 14} fontSize="12" textAnchor={anchorFor(i)} fill={MUTED}>
                  {s.sub}
                </text>
              </>
            )}
          </g>
        );
      })}

      {/* the token, carried round by a group that keeps rotating forward */}
      <motion.g
        // transform-box must be the view box, or the origin resolves against the token's own bounds
        style={{ transformBox: "view-box", transformOrigin: `${cx}px ${cy}px` }}
        initial={false}
        animate={{ rotate: reduce ? 0 : lap * 90 }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
      >
        <circle cx={cx} cy={cy - r} r="22" fill={TEAL} fillOpacity="0.12" />
        <circle cx={cx} cy={cy - r} r="21" fill="none" stroke={TEAL} strokeWidth="2" strokeOpacity="0.7" />
      </motion.g>
    </svg>
  );
}
