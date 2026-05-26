import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Bot, Cpu, Wrench, Truck, Factory, Car, HeartPulse, Database } from "lucide-react";
import { PageShell } from "@/components/PageShell";

const hardware = [
  {
    icon: Bot,
    name: "Humanoids",
    body: "Unitree, Figure, and custom humanoid platforms — onboarded via ROS 2 for rapid task development and autonomous deployment.",
    tags: ["Unitree", "Figure", "Bipedal"],
  },
  {
    icon: Wrench,
    name: "Robotic Arms",
    body: "From low-cost SO-101 prototyping to production 6/7-DoF arms (UR, Franka, KUKA) — pick-and-place, assembly, tool-use, quality inspection.",
    tags: ["UR", "Franka", "KUKA", "SO-101"],
  },
  {
    icon: Truck,
    name: "AMRs",
    body: "Autonomous mobile robots for intralogistics, warehousing, and factory floor automation — long-horizon planning with safety constraints.",
    tags: ["Logistics", "Indoor", "Outdoor"],
  },
];

const industries = [
  { icon: Car, name: "Automotive & Mobility", body: "Body shops, assembly cells, kitting, and quality inspection running CloudBee AgentOS with safety-constrained policies." },
  { icon: Factory, name: "Industrial Manufacturing", body: "Flexible automation that adapts to new SKUs in days, not months — without retooling the line." },
  { icon: Truck, name: "Logistics & Warehousing", body: "Pick, pack, sort, and move — heterogeneous fleets coordinated through one autonomous OS." },
  { icon: Bot, name: "Humanoid Robotics", body: "Robotic foundation models tuned per platform, deployable as drop-in ROS 2 skills." },
  { icon: HeartPulse, name: "Healthcare & Assisted Living", body: "Safe, explainable behavior for service-grade physical assistance in regulated environments." },
  { icon: Database, name: "Computer Vision & AI R&D", body: "DataForge synthetic 4D data is reusable for perception, detection, and foundation-model training far beyond robotics." },
];

export default function Solution() {
  return (
    <PageShell
      title="Solutions — CloudBee Robotics"
      description="Hardware-agnostic solutions for humanoids, robotic arms, and AMRs — across automotive, manufacturing, logistics, healthcare, and AI R&D."
      path="/solution"
    >
      <section className="relative pt-32 lg:pt-40 pb-16 bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="section-container relative z-10 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="text-xs font-mono uppercase tracking-wider text-accent-blue mb-4">Solutions</div>
            <h1 className="font-display font-bold text-4xl lg:text-6xl leading-tight mb-5">
              Bring Your Hardware. <br /> <span className="text-gradient-blue">We Bring the Intelligence.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              One OS across humanoids, robotic arms, and AMRs — deployed across automotive, manufacturing, logistics, healthcare, and AI research.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hardware coverage */}
      <section className="section-spacing border-t border-border">
        <div className="section-container">
          <div className="max-w-3xl mb-10">
            <div className="text-xs font-mono uppercase tracking-wider text-accent-green mb-3">Hardware</div>
            <h2 className="font-display font-bold text-3xl lg:text-4xl">One platform. Any robot.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {hardware.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="glass-card p-7"
                >
                  <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center text-accent-blue mb-5">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display font-bold text-xl mb-2 text-foreground">{p.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.body}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-[10px] font-mono px-2 py-1 rounded-full border border-border text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-spacing border-t border-border bg-surface/30">
        <div className="section-container">
          <div className="max-w-3xl mb-10">
            <div className="text-xs font-mono uppercase tracking-wider text-accent-blue mb-3">Industries</div>
            <h2 className="font-display font-bold text-3xl lg:text-4xl">Built for real-world deployments.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((it, i) => {
              const Icon = it.icon;
              return (
                <motion.div
                  key={it.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.45 }}
                  className="glass-card p-6"
                >
                  <div className="w-11 h-11 rounded-lg bg-accent-blue/10 text-accent-blue flex items-center justify-center mb-4">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display font-semibold text-base mb-1.5 text-foreground">{it.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{it.body}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-14 max-w-3xl mx-auto text-center glass-card p-8">
            <h3 className="font-display font-semibold text-xl mb-3">Using a different robot or industry?</h3>
            <p className="text-muted-foreground mb-6">
              We onboard custom hardware via ROS 2 and shape pilots around your operational reality.
            </p>
            <Link to="/contact" className="btn-pilot">
              Talk to Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
