import { motion } from "framer-motion";

const generates = [
  "Validation Scenarios",
  "Safety Constraints",
  "Failure Modes",
  "Recovery Paths",
  "Compliance Rules",
  "Safety Audits",
];

const flow = ["Capability Graph", "Safety Graph", "Validation Graph", "Synthetic Experience", "Deployment"];

export function SafetyValidation() {
  return (
    <section className="relative py-28 lg:py-36 border-t border-border">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14"
        >
          <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-accent-blue mb-4">
            Safety & Validation
          </div>
          <h2 className="font-display font-bold text-4xl lg:text-6xl leading-[1.02] tracking-tight">
            Build safer capabilities{" "}
            <span className="text-gradient-blue">before deployment.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Engineering review before autonomy. Every capability is paired with the scenarios that prove it works — and the constraints that prove it's safe.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="rounded-2xl border border-border bg-surface/40 p-8">
            <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-muted-foreground mb-5">
              The platform generates
            </div>
            <ul className="grid sm:grid-cols-2 gap-2">
              {generates.map((g, i) => (
                <motion.li
                  key={g}
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-background/60 border border-border/60 font-display text-base text-foreground/90"
                >
                  <span className="w-1 h-1 rounded-full bg-accent-blue" />
                  {g}
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-accent-blue/30 bg-accent-blue/[0.04] p-8">
            <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-accent-blue mb-6">
              Flow
            </div>
            <ol className="space-y-3">
              {flow.map((f, i) => (
                <li key={f} className="flex items-center gap-4">
                  <span className="shrink-0 w-8 h-8 rounded-full border border-accent-blue/40 text-accent-blue flex items-center justify-center text-[10px] font-mono">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-lg text-foreground">{f}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
