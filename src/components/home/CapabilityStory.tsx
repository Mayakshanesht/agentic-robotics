import { motion } from "framer-motion";

const steps = [
  { t: "Industrial Process", d: "Real work in warehouses, factories and lines." },
  { t: "Capability Graph", d: "Decompose work into reusable, composable capabilities." },
  { t: "Safety Graph", d: "Constraints, hazards and engineering review - before training." },
  { t: "Validation Graph", d: "Scenarios, edge cases and acceptance tests, generated." },
  { t: "Multimodal Synthetic Experience", d: "Training-ready experience across modalities." },
  { t: "Foundation Models", d: "VLA, world, RL, IL and reward models - trained together." },
  { t: "Autonomous Systems", d: "Plan, execute, verify and recover at runtime." },
  { t: "Continuous Improvement", d: "Every deployment makes the next one better." },
  { t: "Capability Intelligence", d: "A graph that compounds with every workflow." },
];

export function CapabilityStory() {
  return (
    <section className="relative py-28 lg:py-40 border-t border-border overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-50 pointer-events-none" />
      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-20"
        >
          <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-accent-blue mb-4">
            The Story
          </div>
          <h2 className="font-display font-bold text-4xl lg:text-6xl leading-[1.02] tracking-tight">
            From process to{" "}
            <span className="text-gradient-blue">capability intelligence.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            One continuous pipeline. Every layer builds on the one before - and feeds the next deployment.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* vertical line */}
          <div
            className="absolute left-[19px] top-2 bottom-2 w-px"
            style={{ background: "linear-gradient(180deg, hsl(var(--accent-blue)) 0%, hsl(var(--accent-green)) 100%)", opacity: 0.35 }}
          />
          <ol className="space-y-10">
            {steps.map((s, i) => (
              <motion.li
                key={s.t}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="relative pl-16"
              >
                <div className="absolute left-0 top-1.5 w-10 h-10 rounded-full border border-accent-blue/40 bg-background flex items-center justify-center text-[11px] font-mono text-accent-blue">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="font-display font-semibold text-xl lg:text-2xl text-foreground">{s.t}</div>
                <div className="mt-1 text-muted-foreground text-sm lg:text-base max-w-xl">{s.d}</div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
