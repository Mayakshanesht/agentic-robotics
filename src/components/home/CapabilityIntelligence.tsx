import { motion } from "framer-motion";

const contributions = ["Process Knowledge", "Failure Modes", "Recovery Strategies", "Validation Results", "Safety Audits", "Execution Intelligence"];
const compounds = ["Capability Intelligence", "Safety Intelligence", "Validation Intelligence", "Execution Intelligence"];

export function CapabilityIntelligence() {
  return (
    <section className="relative py-28 lg:py-40 border-t border-border bg-surface/30 overflow-hidden">
      <div className="absolute -top-40 right-0 w-[560px] h-[560px] rounded-full bg-accent-blue/10 blur-[160px] pointer-events-none" />
      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-accent-blue mb-4">
            The Moat
          </div>
          <h2 className="font-display font-bold text-4xl lg:text-6xl leading-[1.02] tracking-tight">
            A capability graph that{" "}
            <span className="text-gradient-blue">grows with every deployment.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-border bg-background/60 p-8">
            <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-muted-foreground mb-5">
              Every deployment contributes
            </div>
            <ul className="space-y-2">
              {contributions.map((c) => (
                <li key={c} className="flex items-center gap-3 py-2.5 border-b border-border/40 last:border-0 font-display text-base text-foreground/90">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" /> {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-accent-blue/30 bg-accent-blue/[0.04] p-8">
            <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-accent-blue mb-5">
              Compounds into
            </div>
            <ul className="space-y-3">
              {compounds.map((c) => (
                <li key={c} className="font-display font-semibold text-xl lg:text-2xl text-foreground">{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
