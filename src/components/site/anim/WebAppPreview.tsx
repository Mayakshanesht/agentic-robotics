import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";

const TYPED = "Pick the part from the bin and place it in the tray.";
const ways = ["Your task", "Your robot", "Your priorities"];
const builds = ["Agree the goal", "Review the scope", "Run a focused pilot", "Review next steps"];

/** An illustration of the customer journey. */
export function WebAppPreview() {
  const reduce = useReducedMotion();
  const cycle = { duration: 10, repeat: Infinity, ease: "easeInOut" as const };

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-[var(--shadow-card)]">
      <div className="flex items-center gap-2 border-b border-border bg-[#F8FAFC] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#5EB8AE]" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="ml-2 text-sm font-semibold text-foreground">Your pilot journey</span>
        <span className="ml-auto rounded-full bg-foreground px-3 py-1 text-[11px] font-bold text-white">
          Work with us
        </span>
      </div>

      <div className="space-y-6 p-6">
        <div>
          <div className="text-[13px] font-bold uppercase tracking-[3px] text-primary">1 · Describe the task</div>
          <div className="mt-3 flex min-h-[52px] items-center rounded-xl border border-border bg-[#F8FAFC] px-4 py-3 text-[15px] italic text-[#13233B]">
            {reduce ? (
              `"${TYPED}"`
            ) : (
              <motion.span
                className="overflow-hidden whitespace-nowrap"
                initial={{ width: 0 }}
                animate={{ width: ["0%", "100%", "100%", "100%"] }}
                transition={{ ...cycle, times: [0, 0.28, 0.92, 1] }}
              >
                "{TYPED}"
              </motion.span>
            )}
            <motion.span
              aria-hidden
              className="ml-0.5 inline-block h-5 w-[2px] shrink-0 bg-primary"
              animate={reduce ? undefined : { opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </div>
        </div>

        <div>
          <div className="text-[13px] font-bold uppercase tracking-[3px] text-primary">
            2 · Bring your context
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {ways.map((w, i) => (
              <motion.span
                key={w}
                className="rounded-full border border-border px-4 py-2 text-sm font-medium text-[#13233B]"
                initial={{ backgroundColor: "#FFFFFF", borderColor: "#E2E8F0" }}
                animate={
                  reduce
                    ? undefined
                    : {
                        backgroundColor: ["#FFFFFF", "#FFFFFF", "#E6F5F3", "#E6F5F3", "#FFFFFF"],
                        borderColor: ["#E2E8F0", "#E2E8F0", "#0D9488", "#0D9488", "#E2E8F0"],
                      }
                }
                transition={{ ...cycle, times: [0, 0.3 + i * 0.04, 0.37 + i * 0.04, 0.92, 1] }}
              >
                {w}
              </motion.span>
            ))}
          </div>
        </div>

        <div>
          <div className="text-[13px] font-bold uppercase tracking-[3px] text-primary">3 · Work with our team</div>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {builds.map((b, i) => {
              const start = 0.45 + i * 0.09;
              return (
                <motion.div
                  key={b}
                  className="flex items-center gap-2 rounded-xl border border-border bg-[#F8FAFC] px-3 py-2.5 text-[15px] text-[#13233B]"
                  initial={{ opacity: reduce ? 1 : 0.35 }}
                  animate={reduce ? undefined : { opacity: [0.35, 0.35, 1, 1, 0.35] }}
                  transition={{ ...cycle, times: [0, start, start + 0.05, 0.92, 1] }}
                >
                  <motion.span
                    className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white"
                    initial={{ scale: reduce ? 1 : 0.5 }}
                    animate={reduce ? undefined : { scale: [0.5, 0.5, 1, 1, 0.5] }}
                    transition={{ ...cycle, times: [0, start, start + 0.05, 0.92, 1] }}
                  >
                    <Check size={12} strokeWidth={3} />
                  </motion.span>
                  {b}
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="flex items-center justify-between gap-4">
          <span className="text-xs italic text-muted-foreground">An illustration of the pilot journey</span>
          <motion.span
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-white"
            initial={{ opacity: reduce ? 1 : 0.35 }}
            animate={reduce ? undefined : { opacity: [0.35, 0.35, 1, 1, 0.35] }}
            transition={{ ...cycle, times: [0, 0.82, 0.87, 0.95, 1] }}
          >
            Explore a pilot →
          </motion.span>
        </div>
      </div>
    </div>
  );
}
