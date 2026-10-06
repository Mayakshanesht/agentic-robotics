import { motion, useReducedMotion } from "framer-motion";

const TEAL = "#0D9488";
const AMBER = "#B45309";

const rows = [
  { label: "Time to a first skill", today: "6-18 months", ours: "about 2 weeks", todayWidth: "100%", oursWidth: "12%" },
  { label: "People on your side", today: "an R&D team", ours: "1 engineer", todayWidth: "100%", oursWidth: "20%" },
  { label: "Cost per task", today: "€100k+", ours: "1/4 to 1/2", todayWidth: "100%", oursWidth: "35%" },
];

/** Side-by-side bars: the status quo against our pilot targets. */
export function FasterCheaper() {
  const reduce = useReducedMotion();
  return (
    <div className="rounded-2xl border border-border bg-white p-6 shadow-[var(--shadow-card)] lg:p-8">
      <div className="space-y-7">
        {rows.map((r, i) => (
          <div key={r.label}>
            <div className="mb-3 text-sm font-semibold text-foreground">{r.label}</div>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="w-24 shrink-0 text-xs font-semibold" style={{ color: AMBER }}>
                  Today
                </span>
                <div className="h-7 flex-1 overflow-hidden rounded-full bg-[#B45309]/10">
                  <motion.div
                    className="flex h-full items-center justify-end rounded-full pr-3 text-xs font-bold text-white"
                    style={{ background: AMBER }}
                    initial={{ width: reduce ? r.todayWidth : 0 }}
                    whileInView={{ width: r.todayWidth }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, delay: i * 0.12, ease: "easeOut" }}
                  >
                    {r.today}
                  </motion.div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-24 shrink-0 text-xs font-semibold" style={{ color: TEAL }}>
                  With CloudBee
                </span>
                <div className="h-7 flex-1 overflow-hidden rounded-full bg-secondary">
                  <motion.div
                    className="flex h-full items-center rounded-full pl-3 text-xs font-bold text-white"
                    style={{ background: TEAL, minWidth: "7rem" }}
                    initial={{ width: reduce ? r.oursWidth : 0 }}
                    whileInView={{ width: r.oursWidth }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, delay: 0.25 + i * 0.12, ease: "easeOut" }}
                  >
                    {r.ours}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm text-muted-foreground">
        Typical figures from industrial robot projects; CloudBee figures are targets for our pilot programme.
      </p>
    </div>
  );
}
