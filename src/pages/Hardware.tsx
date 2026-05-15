import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Bot, Cpu, Wrench } from "lucide-react";
import { PageShell } from "@/components/PageShell";

const partners = [
  {
    icon: Bot,
    name: "Unitree Robotics",
    body: "Unitree's humanoid and quadruped platforms can be onboarded to CloudBee's platform for rapid task development and autonomous deployment.",
    tags: ["Humanoid", "Quadruped"],
  },
  {
    icon: Cpu,
    name: "Figure AI",
    body: "Figure's humanoid robots paired with CloudBee's AgentOS and ModelLab enable enterprise-grade physical AI deployments.",
    tags: ["Humanoid", "Enterprise"],
  },
  {
    icon: Wrench,
    name: "SO-101 Robotic Arm",
    body: "Low-cost open-source manipulator widely used by research labs and pilot programs. CloudBee uses SO-101 for fast prototyping of pick-and-place, assembly, and tool-use skills before scaling to industrial-grade arms.",
    tags: ["Manipulator", "Prototype Platform"],
  },
  {
    icon: Bot,
    name: "Industrial Arms (UR, Franka, KUKA)",
    body: "Production-grade 6/7-DoF arms onboarded via ROS2 for automotive cells, kitting, and quality inspection — running CloudBee AgentOS with safety-constrained policies.",
    tags: ["Industrial", "Automotive"],
  },
];

export default function Hardware() {
  return (
    <PageShell
      title="Hardware Partners — CloudBee Robotics"
      description="Hardware-agnostic infrastructure for physical AI. Onboard leading robotic platforms — humanoids, arms, mobile robots — via ROS2."
      path="/hardware"
    >
      <section className="relative pt-32 lg:pt-40 pb-16 bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="section-container relative z-10 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="text-xs font-mono uppercase tracking-wider text-accent-blue mb-4">Hardware Partners</div>
            <h1 className="font-display font-bold text-4xl lg:text-6xl leading-tight mb-5">
              Bring Your Hardware. <br /> <span className="text-gradient-blue">We Bring the Intelligence.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              CloudBee is hardware-agnostic. Our platform is designed to onboard leading robotic hardware quickly — so you can focus on building capabilities, not integrations.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-spacing border-t border-border">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {partners.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="glass-card p-8"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-surface flex items-center justify-center text-accent-blue">
                      <Icon size={26} />
                    </div>
                    <div className="flex gap-2">
                      {p.tags.map((t) => (
                        <span key={t} className="text-xs font-mono px-2 py-1 rounded-full border border-border text-muted-foreground">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-2xl mb-3 text-foreground">{p.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-16 max-w-3xl mx-auto text-center glass-card p-8">
            <h3 className="font-display font-semibold text-xl mb-3">Using a different robot platform?</h3>
            <p className="text-muted-foreground mb-6">
              We support custom hardware onboarding through ROS2 integration.
            </p>
            <Link to="/contact" className="btn-pilot">
              Talk to Us About Your Hardware <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
