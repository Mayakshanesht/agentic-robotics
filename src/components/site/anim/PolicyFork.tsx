import { motion, useReducedMotion } from "framer-motion";

const TEAL = "#0D9488";
const AMBER = "#B45309";
const INK = "#13233B";
const LINE = "#CBD5E1";
const MUTED = "#5B6B85";

const UP = "M196 150 C 240 150, 250 86, 300 86";
const DOWN = "M196 150 C 240 150, 250 214, 300 214";
const JOIN_UP = "M392 86 C 430 86, 440 150, 468 150";
const JOIN_DOWN = "M392 214 C 430 214, 440 150, 468 150";

/** One video in; a twin; two kinds of policy out; one robot that does both. */
export function PolicyFork() {
  const reduce = useReducedMotion();
  const flow = { offsetDistance: ["0%", "100%"], opacity: [0, 1, 1, 0] };
  const flowT = (delay: number) => ({ duration: 2.6, delay, repeat: Infinity, ease: "easeInOut" as const });

  return (
    <svg viewBox="0 0 520 300" className="h-full w-full" role="img" aria-label="One video becomes a simulatable twin, which trains both a manipulation policy and a locomotion policy, which meet again on one robot">
      {/* one video */}
      <rect x="22" y="118" width="46" height="64" rx="7" fill="#F8FAFC" stroke={LINE} strokeWidth="1.5" />
      <rect x="28" y="126" width="34" height="44" rx="2" fill="#E6F5F3" />
      <path d="M32 162 L42 148 L50 158 L56 152 L56 170 L32 170 Z" fill={TEAL} fillOpacity="0.5" />
      <text x="45" y="196" fontSize="11" textAnchor="middle" fill={MUTED}>
        one video
      </text>

      <path d="M74 150 L96 150" stroke={LINE} strokeWidth="1.5" />
      <path d="M94 146 L100 150 L94 154 Z" fill={LINE} />

      {/* the twin */}
      <g>
        <path d="M106 168 L150 144 L196 168 L150 192 Z" fill={TEAL} fillOpacity="0.12" stroke={TEAL} strokeWidth="1.5" />
        <path d="M106 168 L106 128 L150 104 L196 128 L196 168" fill="none" stroke={TEAL} strokeWidth="1.5" />
        <path d="M150 104 L150 144" stroke={TEAL} strokeWidth="1" strokeOpacity="0.5" />
        <rect x="136" y="136" width="18" height="12" rx="1.5" fill={TEAL} fillOpacity="0.45" />
      </g>
      <text x="151" y="214" fontSize="11" textAnchor="middle" fill={MUTED}>
        a twin with physics
      </text>

      {/* branches */}
      <path d={UP} fill="none" stroke={LINE} strokeWidth="1.5" strokeDasharray="4 4" />
      <path d={DOWN} fill="none" stroke={LINE} strokeWidth="1.5" strokeDasharray="4 4" />

      {/* manipulation */}
      <rect x="298" y="58" width="98" height="56" rx="12" fill="#E6F5F3" stroke={TEAL} strokeWidth="1.5" />
      <text x="347" y="82" fontSize="12" fontWeight="700" textAnchor="middle" fill={INK}>
        manipulation
      </text>
      <text x="347" y="98" fontSize="10.5" textAnchor="middle" fill={MUTED}>
        from generated contact
      </text>

      {/* locomotion */}
      <rect x="298" y="186" width="98" height="56" rx="12" fill="#FEF3E2" stroke={AMBER} strokeWidth="1.5" />
      <text x="347" y="210" fontSize="12" fontWeight="700" textAnchor="middle" fill={INK}>
        locomotion
      </text>
      <text x="347" y="226" fontSize="10.5" textAnchor="middle" fill={MUTED}>
        learned by trying
      </text>

      {/* back together */}
      <path d={JOIN_UP} fill="none" stroke={LINE} strokeWidth="1.5" strokeDasharray="4 4" />
      <path d={JOIN_DOWN} fill="none" stroke={LINE} strokeWidth="1.5" strokeDasharray="4 4" />

      {/* one robot */}
      <circle cx="482" cy="124" r="9" fill={INK} />
      <rect x="473" y="136" width="18" height="26" rx="5" fill={INK} />
      <path d="M473 142 L462 154" stroke={INK} strokeWidth="3.5" strokeLinecap="round" />
      <path d="M491 142 L502 152" stroke={INK} strokeWidth="3.5" strokeLinecap="round" />
      <path d="M478 162 L476 184 M487 162 L489 184" stroke={INK} strokeWidth="3.5" strokeLinecap="round" />
      <text x="482" y="206" fontSize="11" textAnchor="middle" fill={MUTED}>
        one robot
      </text>

      {/* what travels along the branches */}
      {!reduce && (
        <>
          <motion.circle
            r="4"
            fill={TEAL}
            style={{ offsetPath: `path('${UP}')`, offsetRotate: "0deg" }}
            animate={flow}
            transition={flowT(0)}
          />
          <motion.circle
            r="4"
            fill={AMBER}
            style={{ offsetPath: `path('${DOWN}')`, offsetRotate: "0deg" }}
            animate={flow}
            transition={flowT(0.4)}
          />
          <motion.circle
            r="4"
            fill={TEAL}
            style={{ offsetPath: `path('${JOIN_UP}')`, offsetRotate: "0deg" }}
            animate={flow}
            transition={flowT(1.3)}
          />
          <motion.circle
            r="4"
            fill={AMBER}
            style={{ offsetPath: `path('${JOIN_DOWN}')`, offsetRotate: "0deg" }}
            animate={flow}
            transition={flowT(1.6)}
          />
        </>
      )}
    </svg>
  );
}
