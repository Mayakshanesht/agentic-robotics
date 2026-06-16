import { motion } from "framer-motion";

const pains = [
  "Collecting Data",
  "Teleoperating Robots",
  "Building Simulators",
  "Training Models",
  "Validating Edge Cases",
  "Auditing Safety",
  "Recovering From Failures",
];

const reasons = [
  { t: "Validation is incomplete", d: "Edge cases surface only after deployment." },
  { t: "Safety is not systematic", d: "Constraints get bolted on instead of designed in." },
  { t: "Capabilities don't compose", d: "Every workflow starts from scratch." },
];

export function ProblemAdvantage() {
  return (
    <section className="relative py-28 lg:py-40 border-t border-border bg-surface/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14"
        >
          <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-accent-blue mb-4">
            The Problem
          </div>
          <h2 className="font-display font-bold text-4xl lg:text-6xl leading-[1.02] tracking-tight">
            Physical AI development is{" "}
            <span className="text-gradient-blue">broken.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Teams spend months on the same loop - and most deployments still fail at the last mile.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-muted-foreground mb-5">
              Months spent on
            </div>
            <ul className="space-y-2">
              {pains.map((p, i) => (
                <motion.li
                  key={p}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="flex items-center gap-3 py-3 border-b border-border/60 font-display text-lg lg:text-xl text-foreground/85"
                >
                  <span className="text-muted-foreground/50 text-xs font-mono">{String(i + 1).padStart(2, "0")}</span>
                  {p}
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-accent-blue mb-5">
              Why most deployments fail
            </div>
            <div className="space-y-3">
              {reasons.map((r, i) => (
                <motion.div
                  key={r.t}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="rounded-xl border border-border bg-background/60 p-6"
                >
                  <div className="font-display font-semibold text-lg text-foreground">{r.t}</div>
                  <div className="text-sm text-muted-foreground mt-1">{r.d}</div>
                </motion.div>
              ))}
              <div className="rounded-xl border border-accent-blue/30 bg-accent-blue/[0.05] p-6 mt-2">
                <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-accent-blue mb-2">CloudBee's answer</div>
                <div className="font-display text-lg text-foreground">
                  Engineer capabilities before generating experience. Validate before deployment. Improve with every run.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
