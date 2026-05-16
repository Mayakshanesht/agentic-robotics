import { motion } from "framer-motion";
import { Zap, TrendingDown, Target, Cpu } from "lucide-react";

const items = [
  {
    icon: Zap,
    metric: "60–80% Faster",
    title: "Weeks to deploy",
    body: "Versus 6–12 months for traditional teleoperation-driven pipelines.",
    color: "text-accent-blue",
  },
  {
    icon: TrendingDown,
    metric: "Lower Cost",
    title: "Fraction of R&D",
    body: "Synthetic 4D data and shared infrastructure replace bespoke per-task engineering.",
    color: "text-accent-green",
  },
  {
    icon: Target,
    metric: "Reliable",
    title: "Proven sim-to-real",
    body: "Multimodal training and safety-constrained runtimes — engineered for production, not demos.",
    color: "text-accent-blue",
  },
  {
    icon: Cpu,
    metric: "Hardware Agnostic",
    title: "Any robot",
    body: "Unitree, Figure, Boston Dynamics, or custom platforms — one operating system across them all.",
    color: "text-accent-green",
  },
];

export function WhyCloudBee() {
  return (
    <section className="section-spacing border-t border-border">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full text-[10px] font-mono uppercase tracking-wider border border-accent-blue/30 bg-accent-blue/5 text-accent-blue">
            Why CloudBee
          </div>
          <h2 className="font-display font-bold text-3xl lg:text-5xl mb-4">
            Built for <span className="text-gradient-blue">Speed, Scale, and Safety.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            The first truly hardware-agnostic platform for agentic robotics.
            Bring your humanoid — we'll bring the intelligence.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.metric}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="glass-card p-6"
              >
                <div className={`w-10 h-10 rounded-lg bg-surface flex items-center justify-center mb-4 ${it.color}`}>
                  <Icon size={20} />
                </div>
                <div className={`font-display font-bold text-xl mb-1 ${it.color}`}>{it.metric}</div>
                <div className="text-sm font-semibold text-foreground mb-2">{it.title}</div>
                <p className="text-xs text-muted-foreground leading-relaxed">{it.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
