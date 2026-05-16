import { motion } from "framer-motion";
import { Box, BrainCircuit, Network, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const pipeline = [
  "Task Prompt",
  "DataForge · 4D Synthetic Data",
  "ModelLab · Explainable VLA",
  "AgentOS · Long-Horizon Reasoning",
  "ROS 2 Skill Download",
];

const cards = [
  {
    icon: Box,
    title: "DataForge",
    subtitle: "Synthetic Multimodal 4D Data",
    body: "No teleoperation. We synthesize high-fidelity 4D scenarios — vision, tactile, force, LiDAR, proprioception — at scale. The same datasets are reusable for general computer vision and AI model development beyond robotics.",
    keywords: ["Isaac Sim", "Omniverse", "Multimodal 4D", "CV-ready Datasets"],
    color: "blue",
  },
  {
    icon: BrainCircuit,
    title: "ModelLab",
    subtitle: "Explainable, Safety-Validated VLA",
    body: "Train vision-language-action and world models built for functional safety. Decisions are traceable and validatable — engineered for certification and production, not demo videos.",
    keywords: ["Explainable AI", "Functional Safety", "Sim-to-Real", "Validation"],
    color: "green",
  },
  {
    icon: Network,
    title: "AgentOS",
    subtitle: "Long-Horizon Runtime · ROS 2 Skills",
    body: "Plan and execute long-horizon tasks with world-state memory and safety contracts. Policies ship as ROS 2 nodes — connect a robot, request a task, download a skill.",
    keywords: ["Agentic Planning", "World-State Memory", "ROS 2 Node", "Safe Execution"],
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
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-5 rounded-full text-[10px] font-mono uppercase tracking-wider border border-accent-blue/30 bg-accent-blue/5 text-accent-blue">
            The Autonomous OS for Robotics
          </div>
          <h2 className="font-display font-bold text-3xl lg:text-5xl mb-4">
            One platform, from <span className="text-gradient-blue">prompt to safe execution.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A 4D synthetic data engine, multimodal training stack, and an autonomous runtime —
            engineered with functional-safety guarantees so robots can solve complex, long-horizon tasks in the real world.
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
                <div className="flex flex-wrap gap-1.5">
                  {c.keywords.map((k) => (
                    <span key={k} className={`text-[10px] font-mono px-2 py-1 rounded-md border ${badgeBg}`}>
                      {k}
                    </span>
                  ))}
                </div>
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
