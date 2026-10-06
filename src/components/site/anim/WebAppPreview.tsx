import { motion, useReducedMotion } from "framer-motion";

const steps = ["Reading your cell", "Generating training data", "Adapting the model", "Ready to deploy"];
const TYPED = "Pick the part from the tray and place it in the fixture";

/** A mock of the self-serve app: type the task, watch it build the skill. */
export function WebAppPreview() {
  const reduce = useReducedMotion();
  const cycle = { duration: 9, repeat: Infinity, ease: "easeInOut" as const };

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-[var(--shadow-card)]">
      <div className="flex items-center gap-2 border-b border-border bg-[#F8FAFC] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="ml-3 text-xs text-muted-foreground">CloudBee web app · preview</span>
      </div>

      <div className="p-6">
        <div className="text-[13px] font-bold uppercase tracking-[3px] text-primary">Describe the task</div>
        <div className="mt-3 flex min-h-[48px] items-center rounded-xl border border-border bg-[#F8FAFC] px-4 py-3 text-[15px] text-[#13233B]">
          {reduce ? (
            TYPED
          ) : (
            <motion.span
              className="overflow-hidden whitespace-nowrap"
              initial={{ width: 0 }}
              animate={{ width: ["0%", "100%", "100%", "100%"] }}
              transition={{ ...cycle, times: [0, 0.3, 0.9, 1] }}
            >
              {TYPED}
            </motion.span>
          )}
          <motion.span
            aria-hidden
            className="ml-0.5 inline-block h-5 w-[2px] bg-primary"
            animate={reduce ? undefined : { opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </div>

        <div className="mt-6 space-y-3">
          {steps.map((s, i) => {
            const start = 0.34 + i * 0.13;
            return (
              <div key={s} className="flex items-center gap-3">
                <motion.span
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 text-[11px] font-bold"
                  initial={{ borderColor: "#E2E8F0", color: "#5B6B85" }}
                  animate={
                    reduce
                      ? undefined
                      : {
                          borderColor: ["#E2E8F0", "#E2E8F0", "#0D9488", "#0D9488", "#E2E8F0"],
                          color: ["#5B6B85", "#5B6B85", "#0D9488", "#0D9488", "#5B6B85"],
                        }
                  }
                  transition={{ ...cycle, times: [0, start, start + 0.06, 0.92, 1] }}
                >
                  {i + 1}
                </motion.span>
                <span className="text-[15px] text-[#13233B]">{s}</span>
                <div className="ml-auto h-1.5 w-28 overflow-hidden rounded-full bg-secondary">
                  <motion.div
                    className="h-full rounded-full bg-primary"
                    initial={{ width: "0%" }}
                    animate={reduce ? { width: "100%" } : { width: ["0%", "0%", "100%", "100%", "0%"] }}
                    transition={{ ...cycle, times: [0, start, start + 0.1, 0.92, 1] }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <motion.div
          className="mt-6 flex items-center justify-between rounded-xl border border-primary/30 bg-secondary px-4 py-3"
          initial={{ opacity: reduce ? 1 : 0 }}
          animate={reduce ? undefined : { opacity: [0, 0, 1, 1, 0] }}
          transition={{ ...cycle, times: [0, 0.85, 0.9, 0.95, 1] }}
        >
          <span className="text-sm font-semibold text-foreground">Skill ready for your robot</span>
          <span className="rounded-full bg-primary px-4 py-1.5 text-xs font-bold text-white">Deploy</span>
        </motion.div>
      </div>
    </div>
  );
}
