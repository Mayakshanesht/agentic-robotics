import { motion } from "framer-motion";

const models = [
  { t: "Vision-Language-Action Models", d: "End-to-end perception → action grounded in capability graphs." },
  { t: "World Models", d: "Predictive models for planning, simulation and recovery." },
  { t: "RL Policies", d: "Reward-shaped policies trained on validation scenarios." },
  { t: "IL Policies", d: "Imitation from demonstrations and teleoperation." },
  { t: "Reward Models", d: "Learned objectives aligned with safety and validation." },
];

export function MultimodalLearning() {
  return (
    <section className="relative py-28 lg:py-36 border-t border-border bg-surface/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14"
        >
          <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-accent-blue mb-4">
            Multimodal Learning
          </div>
          <h2 className="font-display font-bold text-4xl lg:text-6xl leading-[1.02] tracking-tight">
            Train physical{" "}
            <span className="text-gradient-blue">foundation models.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Combine real experience and synthetic experience. Train VLA, world, RL, IL and reward models in a single curriculum.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {models.map((m, i) => (
            <motion.div
              key={m.t}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-border bg-background/60 p-6"
            >
              <div className="font-display font-semibold text-lg text-foreground">{m.t}</div>
              <div className="text-sm text-muted-foreground mt-2 leading-relaxed">{m.d}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm font-mono uppercase tracking-[0.2em] text-muted-foreground">
          <span className="text-foreground/80">Real Experience</span>
          <span className="text-accent-blue">+</span>
          <span className="text-foreground/80">Synthetic Experience</span>
          <span className="text-accent-blue">→</span>
          <span className="text-foreground">One Curriculum</span>
        </div>
      </div>
    </section>
  );
}
