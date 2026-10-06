import { motion, useReducedMotion } from "framer-motion";

const TEAL = "#0D9488";
const DARK_TEAL = "#0F766E";
const LIGHT_TEAL = "#5EB8AE";
const MUTED = "#5B6B85";
const LINE = "#E2E8F0";

const inputs = ["Camera", "Touch", "Force", "Your gripper"];
const cycle = { duration: 7, repeat: Infinity, ease: "easeInOut" as const };

/** An open model is adapted to one cell: its inputs are rewired and the success meter climbs. */
export function ModelAdapts() {
  const reduce = useReducedMotion();
  const phase = { ...cycle, times: [0, 0.25, 0.55, 0.8, 1] };

  return (
    <div className="rounded-2xl border border-border bg-white p-6 shadow-[var(--shadow-card)]">
      <svg viewBox="0 0 420 200" className="w-full" aria-hidden>
        <text x="8" y="16" fontSize="11" fontWeight="700" fill={MUTED}>
          Your cell
        </text>
        {inputs.map((label, i) => {
          const y = 36 + i * 34;
          return (
            <g key={label}>
              <rect x="8" y={y - 12} width="96" height="24" rx="12" fill="#F8FAFC" stroke={LINE} />
              <text x="56" y={y + 4} fontSize="11" textAnchor="middle" fill={MUTED}>
                {label}
              </text>
              <path d={`M104 ${y} C 140 ${y}, 150 100, 182 100`} fill="none" stroke={LINE} strokeWidth="1.5" />
              {!reduce && (
                <motion.circle
                  r="3"
                  fill={TEAL}
                  initial={{ opacity: 0 }}
                  animate={{
                    cx: [104, 140, 182],
                    cy: [y, y + (100 - y) * 0.45, 100],
                    opacity: [0, 1, 0],
                  }}
                  transition={{ ...cycle, delay: i * 0.25 }}
                />
              )}
            </g>
          );
        })}

        <rect x="182" y="52" width="110" height="96" rx="14" fill="#E6F5F3" stroke={TEAL} strokeWidth="2" />
        <text x="237" y="74" fontSize="12" fontWeight="700" textAnchor="middle" fill={DARK_TEAL}>
          Open model
        </text>
        {[0, 1, 2].map((i) => (
          <motion.rect
            key={i}
            x="196"
            y={88 + i * 18}
            height="10"
            rx="5"
            fill={i === 2 ? LIGHT_TEAL : TEAL}
            initial={{ width: 36 }}
            animate={reduce ? undefined : { width: [36, 36, 82, 82, 36] }}
            transition={{ ...phase, delay: i * 0.12 }}
          />
        ))}
        {!reduce && (
          <motion.text
            x="237"
            y="162"
            fontSize="11"
            fontWeight="700"
            textAnchor="middle"
            fill={DARK_TEAL}
            animate={{ opacity: [0, 0, 1, 1, 0] }}
            transition={phase}
          >
            adapted to your cell
          </motion.text>
        )}

        <path d="M292 100 H 348" stroke={LINE} strokeWidth="1.5" />
        <path d="M342 95 L348 100 L342 105" fill="none" stroke={LINE} strokeWidth="1.5" />
        <text x="374" y="60" fontSize="11" fontWeight="700" textAnchor="middle" fill={MUTED}>
          Task success
        </text>
        <rect x="358" y="70" width="32" height="76" rx="8" fill="#F8FAFC" stroke={LINE} />
        <motion.rect
          x="362"
          width="24"
          rx="6"
          fill={TEAL}
          initial={{ height: 14, y: 128 }}
          animate={reduce ? undefined : { height: [14, 14, 66, 66, 14], y: [128, 128, 76, 76, 128] }}
          transition={phase}
        />
      </svg>
      <p className="mt-4 text-sm text-muted-foreground">
        We start from the best open robot model, then adapt it to your sensors, your gripper and your task, instead of
        training a new model from scratch.
      </p>
    </div>
  );
}
