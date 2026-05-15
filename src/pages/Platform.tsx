import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Box, BrainCircuit, Network, Layers } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { ParticleBackground } from "@/components/ParticleBackground";

const pillars = [
  {
    icon: Box,
    color: "blue",
    title: "DataForge",
    subtitle: "Synthetic Multimodal World Generation",
    body: "Most robotics teams spend 6–12 months collecting training data manually — at costs of €100k to €300k per task. DataForge eliminates this by programmatically generating high-fidelity 4D simulation worlds with multimodal sensor streams including vision, depth, tactile, force, LiDAR, and proprioception. The result: production-quality training data in hours, not months.",
  },
  {
    icon: BrainCircuit,
    color: "green",
    title: "ModelLab",
    subtitle: "VLA & World Model Training",
    body: "ModelLab provides a fine-tuning and evaluation environment for Vision-Language-Action (VLA) models and world models — optimized for sim-to-real transfer. Teams can iterate on robot behavior rapidly, test generalization across scenarios, and ship robust policies without brittle, task-specific engineering.",
  },
  {
    icon: Network,
    color: "blue",
    title: "AgentOS",
    subtitle: "Autonomous Runtime & Orchestration",
    body: "AgentOS is the autonomous runtime that powers deployed robots. It handles long-horizon task planning, environment understanding, skill library management, working memory, and safety-constrained execution — all in a composable, ROS2-compatible architecture. Built with EU AI Act compliance in mind from day one.",
  },
];

const steps = [
  "Describe your task in natural language",
  "DataForge generates synthetic training worlds",
  "Multimodal data is collected at scale",
  "ModelLab trains and validates robot policies",
  "AgentOS deploys and orchestrates live execution",
  "Continuous learning feeds back into the loop",
];

export default function Platform() {
  return (
    <PageShell
      title="Platform — CloudBee Robotics"
      description="The infrastructure layer for physical AI. A unified, modular system to bring any robotic hardware to production-grade autonomous capability."
      path="/platform"
    >
      {/* Hero */}
      <section className="relative pt-32 lg:pt-40 pb-20 overflow-hidden bg-hero-gradient">
        <ParticleBackground density={35} />
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="section-container relative z-10 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="text-xs font-mono uppercase tracking-wider text-accent-blue mb-4">The Platform</div>
            <h1 className="font-display font-bold text-4xl lg:text-6xl leading-tight mb-5">
              The Infrastructure Layer for <span className="text-gradient-blue">Physical AI</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A unified, modular system designed to bring any robotic hardware to production-grade autonomous capability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision */}
      <section className="section-spacing border-t border-border">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display font-bold text-3xl lg:text-4xl mb-5">
                We're Building a <span className="text-gradient-blue">Platform</span>, Not Just a Product.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                CloudBee is designed as an open platform — customers can onboard any humanoid or robotic hardware quickly for their custom use case. Whether you're working with leading humanoid platforms or industrial arms, CloudBee's software layer allows your team to define tasks, generate training data, train custom robot policies, and deploy them to production — all from a single integrated environment.
              </p>
            </div>

            {/* OS stack diagram */}
            <div className="glass-card p-6 space-y-2">
              {[
                { label: "Custom Skills / Tasks", color: "accent-green", sub: "Application layer" },
                { label: "CloudBee Platform · DataForge · ModelLab · AgentOS", color: "accent-blue", sub: "Intelligence layer" },
                { label: "Hardware · Humanoids · Arms · Mobile Robots", color: "muted-foreground", sub: "Physical layer" },
              ].map((row) => (
                <div key={row.label} className="rounded-lg border border-border bg-surface/60 px-4 py-4">
                  <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">{row.sub}</div>
                  <div className={`font-display font-semibold text-${row.color}`}>{row.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pillars deep dive */}
      <section className="border-t border-border bg-surface/30">
        {pillars.map((p, i) => {
          const Icon = p.icon;
          const reverse = i % 2 === 1;
          const accent = p.color === "blue" ? "text-accent-blue" : "text-accent-green";
          return (
            <div key={p.title} className="section-container py-20 lg:py-28 border-b border-border last:border-0">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${reverse ? "lg:grid-flow-dense" : ""}`}
              >
                <div className={reverse ? "lg:col-start-2" : ""}>
                  <div className={`inline-flex w-12 h-12 rounded-lg bg-surface items-center justify-center mb-5 ${accent}`}>
                    <Icon size={22} />
                  </div>
                  <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">{p.subtitle}</div>
                  <h3 className="font-display font-bold text-3xl lg:text-4xl mb-4">{p.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{p.body}</p>
                </div>
                <div className={reverse ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <div className="glass-card p-10 aspect-square max-w-md mx-auto flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-mesh opacity-60" />
                    <Icon size={120} className={`${accent} opacity-70 relative`} strokeWidth={1.2} />
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </section>

      {/* How it works */}
      <section className="section-spacing">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl lg:text-4xl mb-3">
              How It <span className="text-gradient-blue">Works</span>
            </h2>
            <p className="text-muted-foreground">From task spec to deployed autonomy — in one continuous loop.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {steps.map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="glass-card p-5 flex gap-4"
              >
                <div className="font-display font-bold text-accent-blue text-2xl shrink-0 font-mono">
                  0{i + 1}
                </div>
                <div className="text-sm text-foreground leading-snug">{s}</div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/contact" className="btn-pilot">
              Request a Pilot <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
