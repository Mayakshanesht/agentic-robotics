import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const failures = [
  "Manual teleoperation",
  "Long deployment cycles",
  "Fragmented tooling",
  "Missing multimodal data",
  "Poor sim-to-real transfer",
  "Expensive retraining",
];

const advantages = [
  "Task-to-robot automation",
  "Synthetic multimodal data",
  "Continuous learning",
  "Agentic runtime",
  "Safety-first deployment",
  "Faster iteration",
];

export function ProblemAdvantage() {
  return (
    <section className="section-spacing border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-30 pointer-events-none" />
      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-accent-blue mb-3">
            Problem vs Advantage
          </div>
          <h2 className="font-display font-bold text-3xl lg:text-5xl">
            The old way breaks.{" "}
            <span className="text-gradient-blue">CloudBee closes the loop.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Problem column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="relative rounded-2xl border border-destructive/20 bg-background/60 backdrop-blur p-7 lg:p-9"
          >
            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-destructive/90 mb-2">
              Without CloudBee
            </div>
            <h3 className="font-display font-bold text-2xl lg:text-3xl mb-6 text-foreground">
              Why robotics development fails.
            </h3>
            <ul className="space-y-3">
              {failures.map((f, i) => (
                <motion.li
                  key={f}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="flex items-start gap-3 text-sm text-foreground/80"
                >
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-destructive/15 text-destructive flex items-center justify-center shrink-0">
                    <X size={12} strokeWidth={3} />
                  </span>
                  <span>{f}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Advantage column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="relative rounded-2xl border border-accent-green/30 bg-background/70 backdrop-blur p-7 lg:p-9 overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-accent-green/15 blur-3xl pointer-events-none" />
            <div className="relative">
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-accent-green mb-2">
                With CloudBee
              </div>
              <h3 className="font-display font-bold text-2xl lg:text-3xl mb-6 text-foreground">
                Why teams choose CloudBee.
              </h3>
              <ul className="space-y-3">
                {advantages.map((a, i) => (
                  <motion.li
                    key={a}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    className="flex items-start gap-3 text-sm text-foreground"
                  >
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-accent-green/15 text-accent-green flex items-center justify-center shrink-0">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span>{a}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
