import { motion, useReducedMotion } from "framer-motion";

const TEAL = "#0D9488";
const AMBER = "#B45309";
const INK = "#13233B";
const LINE = "#E2E8F0";
const MUTED = "#5B6B85";

const loop = (duration: number, delay = 0) =>
  ({ duration, delay, repeat: Infinity, ease: "easeInOut" } as const);

/**
 * What the data is: four signals from one run, laid out against time, with the
 * moment of contact marked. Vision keeps going; touch and force only exist
 * from the instant the hand arrives.
 */
export function SignalLanes() {
  const reduce = useReducedMotion();
  const lanes = [
    { label: "camera", y: 26, color: TEAL },
    { label: "depth", y: 46, color: TEAL },
    { label: "touch", y: 66, color: AMBER },
    { label: "force", y: 86, color: AMBER },
  ];

  return (
    <svg viewBox="0 0 220 110" className="h-full w-full" aria-hidden>
      {/* time axis */}
      <line x1="46" y1="99" x2="212" y2="99" stroke={LINE} strokeWidth="1" />
      <text x="46" y="108" fontSize="6" fill={MUTED}>
        one run, start to finish
      </text>

      {lanes.map((l) => (
        <g key={l.label}>
          <text x="42" y={l.y + 2} fontSize="7" textAnchor="end" fill={MUTED}>
            {l.label}
          </text>
          <line x1="46" y1={l.y} x2="212" y2={l.y} stroke={LINE} strokeWidth="0.75" />
        </g>
      ))}

      {/* contact marker */}
      <line x1="132" y1="16" x2="132" y2="96" stroke={AMBER} strokeWidth="0.75" strokeDasharray="3 3" />
      <text x="134" y="14" fontSize="6.5" fill={AMBER} fontWeight="700">
        contact
      </text>

      {/* camera and depth: present the whole way through */}
      <motion.path
        d="M46 26 C 70 22, 92 30, 116 24 S 160 30, 212 25"
        fill="none"
        stroke={TEAL}
        strokeWidth="1.6"
        strokeLinecap="round"
        initial={{ pathLength: reduce ? 1 : 0 }}
        animate={reduce ? undefined : { pathLength: [0, 1, 1, 0] }}
        transition={loop(6)}
      />
      <motion.path
        d="M46 46 C 74 50, 96 42, 120 47 S 166 44, 212 46"
        fill="none"
        stroke={TEAL}
        strokeWidth="1.6"
        strokeLinecap="round"
        initial={{ pathLength: reduce ? 1 : 0 }}
        animate={reduce ? undefined : { pathLength: [0, 1, 1, 0] }}
        transition={loop(6, 0.1)}
      />

      {/* touch: flat, then pads firing after contact */}
      <line x1="46" y1="66" x2="132" y2="66" stroke={LINE} strokeWidth="1.6" strokeLinecap="round" />
      {Array.from({ length: 9 }).map((_, i) => (
        <motion.rect
          key={i}
          x={136 + i * 8}
          y="60"
          width="6"
          height="11"
          rx="1.5"
          fill={AMBER}
          initial={{ opacity: reduce ? 0.75 : 0 }}
          animate={reduce ? undefined : { opacity: [0, 0, 0.95, 0.45, 0] }}
          transition={{ ...loop(6), times: [0, 0.45, 0.55 + i * 0.01, 0.8, 1] }}
        />
      ))}

      {/* force: nothing, then a step that has to be held */}
      <line x1="46" y1="86" x2="132" y2="86" stroke={LINE} strokeWidth="1.6" strokeLinecap="round" />
      <motion.path
        d="M132 86 C 140 86, 142 74, 150 74 L 196 74 C 204 74, 206 86, 212 86"
        fill="none"
        stroke={AMBER}
        strokeWidth="1.8"
        strokeLinecap="round"
        initial={{ pathLength: reduce ? 1 : 0 }}
        animate={reduce ? undefined : { pathLength: [0, 0, 1, 1, 0] }}
        transition={{ ...loop(6), times: [0, 0.45, 0.68, 0.85, 1] }}
      />

      {/* the moment being read */}
      {!reduce && (
        <motion.line
          y1="16"
          y2="96"
          stroke={INK}
          strokeWidth="0.75"
          strokeOpacity="0.45"
          initial={{ x1: 46, x2: 46 }}
          animate={{ x1: [46, 212], x2: [46, 212] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
      )}
    </svg>
  );
}

/** One phone video of a cell, turned into a room, turned into many rooms. */
export function OneVideoMany() {
  const reduce = useReducedMotion();
  const tiles = Array.from({ length: 9 }).map((_, i) => ({
    x: 128 + (i % 3) * 29,
    y: 24 + Math.floor(i / 3) * 24,
    delay: (i % 3) * 0.12 + Math.floor(i / 3) * 0.2,
  }));

  return (
    <svg viewBox="0 0 220 110" className="h-full w-full" aria-hidden>
      {/* the phone */}
      <rect x="12" y="22" width="34" height="62" rx="6" fill="#F8FAFC" stroke={LINE} strokeWidth="1.5" />
      <rect x="16" y="28" width="26" height="46" rx="2" fill="#E6F5F3" />
      <path d="M20 62 L28 50 L34 58 L38 54 L38 74 L20 74 Z" fill={TEAL} fillOpacity="0.5" />
      <circle cx="29" cy="40" r="3.5" fill={TEAL} fillOpacity="0.6" />
      <motion.rect
        x="16"
        y="28"
        width="26"
        height="3"
        fill={TEAL}
        fillOpacity="0.85"
        initial={{ y: reduce ? 50 : 28 }}
        animate={reduce ? undefined : { y: [28, 71, 28] }}
        transition={loop(5)}
      />
      <text x="29" y="94" fontSize="7" textAnchor="middle" fill={MUTED}>
        one video
      </text>

      {/* the twin */}
      <motion.g
        initial={{ opacity: reduce ? 1 : 0.25 }}
        animate={reduce ? undefined : { opacity: [0.25, 1, 1, 0.25] }}
        transition={loop(5)}
      >
        <path d="M62 70 L86 58 L110 70 L86 82 Z" fill={TEAL} fillOpacity="0.14" stroke={TEAL} strokeWidth="1.2" />
        <path d="M62 70 L62 50 L86 38 L110 50 L110 70" fill="none" stroke={TEAL} strokeWidth="1.2" />
        <path d="M86 38 L86 58" stroke={TEAL} strokeWidth="1" strokeOpacity="0.6" />
        <rect x="74" y="54" width="10" height="7" rx="1" fill={TEAL} fillOpacity="0.5" />
      </motion.g>
      <text x="86" y="94" fontSize="7" textAnchor="middle" fill={MUTED}>
        its twin
      </text>

      {/* the variations */}
      {tiles.map((t, i) => (
        <motion.g
          key={i}
          initial={{ opacity: reduce ? 1 : 0 }}
          animate={reduce ? undefined : { opacity: [0, 1, 1, 0] }}
          transition={{ ...loop(5), delay: 0.6 + t.delay }}
        >
          <rect x={t.x} y={t.y} width="25" height="20" rx="2.5" fill="#F8FAFC" stroke={TEAL} strokeWidth="0.9" />
          <rect x={t.x + 4} y={t.y + 11} width="17" height="5" rx="1" fill={TEAL} fillOpacity={0.2 + (i % 3) * 0.22} />
          <circle cx={t.x + 7 + (i % 3) * 5} cy={t.y + 7} r="2.2" fill={TEAL} fillOpacity="0.75" />
        </motion.g>
      ))}
      <text x="172" y="94" fontSize="7" textAnchor="middle" fill={MUTED}>
        thousands of runs
      </text>

      {/* flow */}
      <path d="M50 53 L58 53" stroke={TEAL} strokeWidth="1.2" markerEnd="" />
      <path d="M114 53 L124 53" stroke={TEAL} strokeWidth="1.2" />
      <path d="M56 50 L60 53 L56 56 Z" fill={TEAL} />
      <path d="M122 50 L126 53 L122 56 Z" fill={TEAL} />
    </svg>
  );
}

/** Your data in, a skill that runs on your robot out. */
export function SkillOnRobot() {
  const reduce = useReducedMotion();
  return (
    <svg viewBox="0 0 220 110" className="h-full w-full" aria-hidden>
      {/* dataset */}
      {[0, 1, 2].map((i) => (
        <rect
          key={i}
          x={14}
          y={34 + i * 12}
          width="42"
          height="9"
          rx="2"
          fill={TEAL}
          fillOpacity={0.2 + i * 0.16}
          stroke={TEAL}
          strokeWidth="0.8"
        />
      ))}
      <text x="35" y="86" fontSize="7" textAnchor="middle" fill={MUTED}>
        your data
      </text>

      {/* the skill */}
      <rect x="80" y="30" width="54" height="42" rx="9" fill="#E6F5F3" stroke={TEAL} strokeWidth="1.5" />
      <text x="107" y="48" fontSize="7.5" textAnchor="middle" fill={INK} fontWeight="700">
        your
      </text>
      <text x="107" y="58" fontSize="7.5" textAnchor="middle" fill={INK} fontWeight="700">
        skill
      </text>
      <text x="107" y="86" fontSize="7" textAnchor="middle" fill={MUTED}>
        built for your cell
      </text>

      {/* data flowing in */}
      {[0, 1, 2].map((i) => (
        <motion.circle
          key={i}
          cy={39 + i * 12}
          r="2.2"
          fill={TEAL}
          initial={{ cx: reduce ? 70 : 58 }}
          animate={reduce ? undefined : { cx: [58, 78], opacity: [0, 1, 0] }}
          transition={{ ...loop(2.6), delay: i * 0.25 }}
        />
      ))}

      {/* the robot, and the part that ends up where it belongs */}
      <path d="M160 72 L160 52 L186 44" fill="none" stroke={INK} strokeWidth="2.4" strokeLinecap="round" />
      <rect x="152" y="72" width="16" height="7" rx="2" fill={INK} />
      <motion.g
        initial={{ x: reduce ? 0 : 0 }}
        animate={reduce ? undefined : { x: [0, 10, 10, 0], y: [0, 6, 6, 0] }}
        transition={loop(2.6)}
      >
        <rect x="182" y="40" width="9" height="9" rx="1.5" fill={AMBER} />
      </motion.g>
      <rect x="192" y="60" width="20" height="5" rx="1.5" fill={TEAL} fillOpacity="0.3" stroke={TEAL} strokeWidth="0.8" />
      <motion.path
        d="M196 50 L200 54 L208 45"
        fill="none"
        stroke={TEAL}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ opacity: reduce ? 1 : 0 }}
        animate={reduce ? undefined : { opacity: [0, 0, 1, 0] }}
        transition={{ ...loop(2.6), times: [0, 0.55, 0.75, 1] }}
      />
      <text x="186" y="86" fontSize="7" textAnchor="middle" fill={MUTED}>
        a skill that runs
      </text>
    </svg>
  );
}
