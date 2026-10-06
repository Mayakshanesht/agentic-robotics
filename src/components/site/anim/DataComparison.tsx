import { motion, useReducedMotion } from "framer-motion";

const TEAL = "#0D9488";
const DARK_TEAL = "#0F766E";
const AMBER = "#B45309";
const MUTED = "#5B6B85";
const LINE = "#E2E8F0";
const CYCLE = 6;

/** Shared 6s timeline: approach, contact, outcome, reset. */
const loop = { duration: CYCLE, repeat: Infinity, ease: "easeInOut" as const, times: [0, 0.3, 0.5, 0.75, 1] };

function Panel({
  title,
  tone,
  children,
  verdict,
}: {
  title: string;
  tone: "amber" | "teal";
  children: React.ReactNode;
  verdict: string;
}) {
  const colour = tone === "amber" ? AMBER : TEAL;
  return (
    <div className="rounded-2xl border border-border bg-white p-5 shadow-[var(--shadow-card)]">
      <div className="flex items-center justify-between">
        <div className="text-[13px] font-bold uppercase tracking-[3px]" style={{ color: colour }}>
          {title}
        </div>
        <div className="text-sm font-semibold" style={{ color: colour }}>
          {verdict}
        </div>
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}

function Scene({ slips, reduce }: { slips: boolean; reduce: boolean | null }) {
  const colour = slips ? AMBER : TEAL;
  // gripper comes down, closes, then either the part slips away or is carried up
  const gripperY = reduce ? 44 : [10, 44, 44, 44, 10];
  const partY = slips ? [86, 86, 86, 104, 86] : [86, 86, 86, 52, 86];
  const partX = slips ? [96, 96, 96, 126, 96] : [96, 96, 96, 96, 96];
  const partRotate = slips ? [0, 0, 0, 28, 0] : [0, 0, 0, 0, 0];

  return (
    <svg viewBox="0 0 200 150" className="h-full w-full" aria-hidden>
      <rect x="8" y="8" width="184" height="134" rx="10" fill="#F8FAFC" stroke={LINE} />
      <line x1="8" y1="112" x2="192" y2="112" stroke={LINE} strokeWidth="2" />
      <motion.g animate={reduce ? undefined : { y: gripperY }} transition={loop} initial={{ y: 10 }}>
        <rect x="88" y="18" width="24" height="10" rx="3" fill={DARK_TEAL} />
        <motion.rect
          x="84"
          y="28"
          width="6"
          height="18"
          rx="2"
          fill={DARK_TEAL}
          animate={reduce ? undefined : { x: [84, 84, 90, 90, 84] }}
          transition={loop}
        />
        <motion.rect
          x="110"
          y="28"
          width="6"
          height="18"
          rx="2"
          fill={DARK_TEAL}
          animate={reduce ? undefined : { x: [110, 110, 104, 104, 110] }}
          transition={loop}
        />
      </motion.g>
      <motion.rect
        width="26"
        height="26"
        rx="4"
        fill={colour}
        fillOpacity="0.25"
        stroke={colour}
        strokeWidth="2"
        initial={{ x: 96, y: 86, rotate: 0 }}
        animate={reduce ? undefined : { x: partX, y: partY, rotate: partRotate }}
        transition={loop}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {!reduce && (
        <motion.text
          x="100"
          y="136"
          fontSize="11"
          fontWeight="700"
          textAnchor="middle"
          fill={colour}
          animate={{ opacity: [0, 0, 0, 1, 0] }}
          transition={loop}
        >
          {slips ? "part slips" : "grip holds"}
        </motion.text>
      )}
    </svg>
  );
}

function Signal({ label, colour, active, reduce }: { label: string; colour: string; active: boolean; reduce: boolean | null }) {
  const path = "M0 12 L28 12 L34 12 L40 4 L52 4 L58 10 L120 10";
  return (
    <div className="flex items-center gap-3">
      <span className="w-16 shrink-0 text-xs font-semibold" style={{ color: active ? colour : MUTED }}>
        {label}
      </span>
      <svg viewBox="0 0 120 20" className="h-5 flex-1" aria-hidden>
        {active ? (
          <motion.path
            d={path}
            fill="none"
            stroke={colour}
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: reduce ? 1 : 0 }}
            animate={reduce ? undefined : { pathLength: [0, 1, 1, 1, 0] }}
            transition={loop}
          />
        ) : (
          <>
            <line x1="0" y1="12" x2="120" y2="12" stroke={LINE} strokeWidth="2" strokeDasharray="3 4" />
            <text x="60" y="9" fontSize="8" textAnchor="middle" fill={MUTED}>
              no signal
            </text>
          </>
        )}
      </svg>
    </div>
  );
}

export function DataComparison() {
  const reduce = useReducedMotion();
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <Panel title="Vision only" tone="amber" verdict="misses contact">
        <div className="mx-auto h-48 max-w-[300px]">
          <Scene slips reduce={reduce} />
        </div>
        <div className="mt-4 space-y-2">
          <Signal label="Camera" colour={AMBER} active reduce={reduce} />
          <Signal label="Force" colour={AMBER} active={false} reduce={reduce} />
          <Signal label="Touch" colour={AMBER} active={false} reduce={reduce} />
        </div>
      </Panel>

      <Panel title="With touch and force" tone="teal" verdict="catches contact">
        <div className="mx-auto h-48 max-w-[300px]">
          <Scene slips={false} reduce={reduce} />
        </div>
        <div className="mt-4 space-y-2">
          <Signal label="Camera" colour={TEAL} active reduce={reduce} />
          <Signal label="Force" colour={TEAL} active reduce={reduce} />
          <Signal label="Touch" colour={TEAL} active reduce={reduce} />
        </div>
      </Panel>
    </div>
  );
}
