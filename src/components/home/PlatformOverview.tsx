import { motion } from "framer-motion";
import { Box, BrainCircuit, Network, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const pipeline = [
  "Task Description",
  "Synthetic Worlds",
  "Multimodal Data",
  "VLA & World Models",
  "Task Reasoning",
  "Safe Execution",
  "ROS2 Deployment",
];

const cards = [
  {
    icon: Box,
    title: "DataForge",
    subtitle: "Synthetic Multimodal World Generation",
    body: "Generate high-fidelity 4D training scenarios at scale — no teleoperation required. Vision, tactile, force, LiDAR, proprioception and more.",
    badge: "60–80% lower data cost",
    color: "blue",
  },
  {
    icon: BrainCircuit,
    title: "ModelLab",
    subtitle: "VLA & World Model Training",
    body: "Fine-tune Vision-Language-Action models and world models with sim-to-real optimized pipelines for robust, generalizable robot behavior.",
    badge: "Sim-to-real optimized",
    color: "green",
  },
  {
    icon: Network,
    title: "AgentOS",
    subtitle: "Autonomous Runtime & Orchestration",
    body: "Deploy long-horizon task execution with world-state memory, task reasoning nodes, and safety-constrained policies. EU AI Act–ready by design.",
    badge: "Safety-first",
    color: "blue",
  },
];

export function PlatformOverview() {
  return (
    <section className="section-spacing relative bg-mesh">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h2 className="font-display font-bold text-3xl lg:text-5xl mb-4">
            One Platform. <span className="text-gradient-blue">End-to-End.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From synthetic world generation to live robot deployment — CloudBee connects the entire pipeline.
          </p>
        </motion.div>

        {/* Pipeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mb-6 overflow-x-auto pb-4"
        >
          <div className="flex items-center justify-start lg:justify-center gap-2 min-w-max px-2">
            {pipeline.map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <div className="px-3 py-2 rounded-lg border border-accent-blue/25 bg-surface/60 text-xs font-mono whitespace-nowrap text-foreground">
                  {step}
                </div>
                {i < pipeline.length - 1 && <ArrowRight size={14} className="text-accent-blue/60 shrink-0" />}
              </div>
            ))}
          </div>
          <div className="mt-3 text-center text-xs font-mono text-accent-green/80">
            ↻ Continuous Learning
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {cards.map((c, i) => {
            const Icon = c.icon;
            const accent = c.color === "blue" ? "text-accent-blue" : "text-accent-green";
            const badgeBg = c.color === "blue"
              ? "bg-accent-blue/10 text-accent-blue border-accent-blue/30"
              : "bg-accent-green/10 text-accent-green border-accent-green/30";
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="glass-card p-7 flex flex-col"
              >
                <div className={`w-11 h-11 rounded-lg bg-surface flex items-center justify-center mb-5 ${accent}`}>
                  <Icon size={22} />
                </div>
                <h3 className="font-display font-bold text-xl mb-1 text-foreground">{c.title}</h3>
                <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">
                  {c.subtitle}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{c.body}</p>
                <span className={`inline-block self-start text-xs font-semibold px-2.5 py-1 rounded-full border ${badgeBg}`}>
                  {c.badge}
                </span>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link to="/platform" className="inline-flex items-center gap-2 text-accent-blue font-semibold hover:gap-3 transition-all">
            See the full platform <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
