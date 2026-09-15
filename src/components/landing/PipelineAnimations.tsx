import { motion, useReducedMotion } from "framer-motion";

// Animated colours need literal values (framer can't interpolate CSS variables); static ones use tokens.
const BLUE = "#0d7ff2";
const GREEN = "#1abc84";
const ORANGE = "#f97a1f";
const RED = "#ef4444";
const GREY = "#cbd5e1";
const LINE = "hsl(var(--border))";
const MUTED_TEXT = "hsl(var(--muted-foreground))";
const MONO = "JetBrains Mono, monospace";

function wave(seed: number, amp: number, width = 150, steps = 15) {
  const pts: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const x = (i / steps) * width;
    const y = Math.sin(i * (0.9 + seed * 0.35) + seed) * amp + Math.sin(i * 2.3 + seed * 2) * amp * 0.35;
    pts.push(`${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`);
  }
  return pts.join(" ");
}

function bezierPoints(p0: number[], p1: number[], p2: number[], p3: number[], n = 8) {
  const xs: number[] = [];
  const ys: number[] = [];
  for (let k = 0; k <= n; k++) {
    const t = k / n;
    const u = 1 - t;
    xs.push(u * u * u * p0[0] + 3 * u * u * t * p1[0] + 3 * u * t * t * p2[0] + t * t * t * p3[0]);
    ys.push(u * u * u * p0[1] + 3 * u * u * t * p1[1] + 3 * u * t * t * p2[1] + t * t * t * p3[1]);
  }
  return { xs, ys };
}

const streams = [
  { label: "Vision", color: BLUE, amp: 3.2 },
  { label: "Depth", color: "#0ea5e9", amp: 2.2 },
  { label: "Force", color: ORANGE, amp: 4 },
  { label: "Touch", color: GREEN, amp: 2.8 },
];

/** DataForge — four synchronised sensor streams recorded over time. */
export function ModalityStreams() {
  const reduce = useReducedMotion();
  const loop = { duration: 3.2, times: [0, 0.8, 1], repeat: Infinity, ease: "linear" as const };
  return (
    <svg viewBox="0 0 200 92" className="h-full w-full" aria-hidden>
      {streams.map((s, i) => {
        const y = 14 + i * 21;
        return (
          <g key={s.label}>
            <text x="0" y={y + 2.5} fontSize="7" fill={MUTED_TEXT} fontFamily={MONO}>{s.label}</text>
            <g transform={`translate(42 ${y})`}>
              <path d={wave(i + 1, s.amp)} fill="none" stroke={LINE} strokeWidth="1.2" />
              <motion.path
                d={wave(i + 1, s.amp)}
                fill="none"
                stroke={s.color}
                strokeWidth="1.6"
                strokeLinecap="round"
                initial={{ pathLength: reduce ? 1 : 0 }}
                animate={reduce ? undefined : { pathLength: [0, 1, 1] }}
                transition={loop}
              />
            </g>
          </g>
        );
      })}
      {!reduce && (
        <motion.line y1="4" y2="88" stroke={BLUE} strokeOpacity="0.35" strokeWidth="1" animate={{ x1: [42, 192, 192], x2: [42, 192, 192] }} transition={loop} />
      )}
    </svg>
  );
}

const sensors = ["RGB", "Depth", "F/T", "Tactile"];

/** ModelLab — robot-specific sensors plugged into a foundation model that adapts, then acts. */
export function AdapterAnim() {
  const reduce = useReducedMotion();
  return (
    <svg viewBox="0 0 200 92" className="h-full w-full" aria-hidden>
      {sensors.map((label, i) => {
        const y = 14 + i * 21;
        const { xs, ys } = bezierPoints([38, y], [60, y], [62, 46], [84, 46]);
        return (
          <g key={label}>
            <rect x="0" y={y - 7} width="38" height="14" rx="7" fill="hsl(var(--accent-blue) / 0.08)" stroke="hsl(var(--accent-blue) / 0.35)" />
            <text x="19" y={y + 2.5} fontSize="6.5" textAnchor="middle" fill={BLUE} fontFamily={MONO}>{label}</text>
            <path d={`M38 ${y} C 60 ${y}, 62 46, 84 46`} fill="none" stroke={LINE} strokeWidth="1" />
            {!reduce && (
              <motion.circle r="1.8" fill={BLUE} animate={{ cx: xs, cy: ys }} transition={{ duration: 1.6, repeat: Infinity, ease: "linear", delay: i * 0.3 }} />
            )}
          </g>
        );
      })}
      <rect x="84" y="20" width="64" height="52" rx="9" fill="hsl(var(--accent-green) / 0.08)" stroke="hsl(var(--accent-green) / 0.5)" />
      <text x="116" y="31" fontSize="6.5" textAnchor="middle" fill="hsl(var(--foreground))" fontWeight="600">Foundation model</text>
      {[0, 1, 2].map((j) => (
        <motion.rect
          key={j}
          x="94"
          y={38 + j * 9}
          width="44"
          height="5"
          rx="2.5"
          fill={GREEN}
          style={{ transformBox: "fill-box", transformOrigin: "left center" }}
          initial={{ scaleX: 0.7 }}
          animate={reduce ? undefined : { scaleX: [0.35, 1, 0.6] }}
          transition={{ duration: 2.4, repeat: Infinity, delay: j * 0.3, ease: "easeInOut" }}
        />
      ))}
      <path d="M148 46 H196 M191 42 L196 46 L191 50" fill="none" stroke={GREY} strokeWidth="1" />
      <text x="172" y="40" fontSize="6.5" textAnchor="middle" fill={MUTED_TEXT} fontFamily={MONO}>actions</text>
      {!reduce && <motion.circle r="2" cy="46" fill={GREEN} animate={{ cx: [148, 194] }} transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }} />}
    </svg>
  );
}

/** Safety & validation — checks tick through in sequence before anything reaches hardware. */
export function SafetyChecks({ items }: { items: string[] }) {
  const reduce = useReducedMotion();
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item, i) => (
        <li key={item} className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-sm text-foreground">
          <span className="flex h-4 w-4 items-center justify-center rounded-full border border-accent-green/50">
            <svg viewBox="0 0 12 12" className="h-3 w-3" aria-hidden>
              <motion.path
                d="M2.5 6.2 L5 8.5 L9.5 3.5"
                fill="none"
                stroke={GREEN}
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: reduce ? 1 : 0 }}
                animate={reduce ? undefined : { pathLength: [0, 0, 1, 1, 0] }}
                transition={{ duration: 4.5, times: [0, 0.15 + i * 0.2, 0.3 + i * 0.2, 0.9, 1], repeat: Infinity }}
              />
            </svg>
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

const steps = ["Plan", "Grasp", "Place", "Done"];

/** AgenticOS — a grasp slips, the failure is detected, the step is retried and the task completes. */
export function RecoveryLoop() {
  const reduce = useReducedMotion();
  const xs = [22, 78, 134, 190];
  const cycle = { duration: 5, repeat: Infinity, ease: "easeInOut" as const, times: [0, 0.2, 0.4, 0.55, 0.72, 1] };
  const g = xs[1];
  return (
    <svg viewBox="0 0 212 92" className="h-full w-full" aria-hidden>
      <line x1={xs[0]} y1="58" x2={xs[3]} y2="58" stroke={LINE} strokeWidth="1.5" />
      {steps.map((label, i) => (
        <g key={label}>
          <circle cx={xs[i]} cy="58" r="5" fill="hsl(var(--background))" stroke={GREY} strokeWidth="1.5" />
          <text x={xs[i]} y="78" fontSize="7" textAnchor="middle" fill={MUTED_TEXT} fontFamily={MONO}>{label}</text>
        </g>
      ))}
      <motion.path
        d={`M${g - 7} 52 C ${g - 20} 24, ${g + 20} 24, ${g + 7} 52`}
        fill="none"
        stroke={GREEN}
        strokeWidth="1.5"
        initial={{ pathLength: reduce ? 1 : 0 }}
        animate={reduce ? undefined : { pathLength: [0, 0, 0, 1, 1, 0] }}
        transition={cycle}
      />
      {!reduce && (
        <>
          <motion.text x={g} y="18" fontSize="7" textAnchor="middle" fill={RED} fontFamily={MONO} animate={{ opacity: [0, 0, 1, 0, 0, 0] }} transition={cycle}>
            slip detected
          </motion.text>
          <motion.text x={g} y="18" fontSize="7" textAnchor="middle" fill={GREEN} fontFamily={MONO} animate={{ opacity: [0, 0, 0, 1, 1, 0] }} transition={cycle}>
            recovered
          </motion.text>
          <motion.circle
            cy="58"
            r="4"
            animate={{ cx: [xs[0], g, g, g, xs[2], xs[3]], fill: [BLUE, BLUE, RED, ORANGE, GREEN, GREEN] }}
            transition={cycle}
          />
        </>
      )}
    </svg>
  );
}

const busNodes = ["G1", "H2", "OpenArm 2", "SO-101", "+ yours"];

/** KineBridge — one hardware standard, many robots and sensors on the same bus. */
export function HardwareBus() {
  const reduce = useReducedMotion();
  const xs = [22, 64, 106, 148, 190];
  return (
    <svg viewBox="0 0 212 92" className="h-full w-full" aria-hidden>
      <rect x="4" y="10" width="204" height="18" rx="9" fill="hsl(var(--accent-blue) / 0.08)" stroke="hsl(var(--accent-blue) / 0.4)" />
      <text x="106" y="22" fontSize="7" textAnchor="middle" fill={BLUE} fontFamily={MONO} letterSpacing="1.5">KINEBRIDGE</text>
      {busNodes.map((label, i) => (
        <g key={label}>
          <line x1={xs[i]} y1="28" x2={xs[i]} y2="54" stroke={GREY} strokeWidth="1.2" strokeDasharray={i === busNodes.length - 1 ? "2 2" : undefined} />
          <motion.circle
            cx={xs[i]}
            cy="60"
            r="6"
            fill={reduce ? GREEN : GREY}
            animate={reduce ? undefined : { fill: [GREY, GREEN, GREY] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.35 }}
          />
          <text x={xs[i]} y="80" fontSize="6.5" textAnchor="middle" fill={MUTED_TEXT} fontFamily={MONO}>{label}</text>
          {!reduce && (
            <motion.circle cx={xs[i]} r="1.8" fill={BLUE} animate={{ cy: [28, 54], opacity: [1, 0] }} transition={{ duration: 1.1, repeat: Infinity, delay: i * 0.35 }} />
          )}
        </g>
      ))}
    </svg>
  );
}
