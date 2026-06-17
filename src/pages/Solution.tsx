import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Bot, Cpu, Wrench, Truck, Factory, Car, HeartPulse, Database, CheckCircle2 } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { HeroBackdrop } from "@/components/HeroBackdrop";
import { DemoVideo } from "@/components/DemoVideo";

const HumanoidScene = lazy(() => import("@/components/three/HumanoidScene"));
import dataforgeVideo from "@/assets/videos/dataforge.mp4.asset.json";
import agentOsVideo from "@/assets/videos/agentOS.mp4.asset.json";
import modellabVideo from "@/assets/videos/modellab.mp4.asset.json";

const hardware = [
  {
    icon: Bot,
    name: "Humanoids",
    body: "Unitree G1 and other humanoid platforms - onboarded via ROS 2 for rapid task development and autonomous deployment.",
    tags: ["Unitree G1", "Bipedal", "Whole-body control"],
  },
  {
    icon: Wrench,
    name: "Robotic Arms",
    body: "Universal Robots cobots, Franka research arms, and production 6/7-DoF manipulators - pick-and-place, assembly, tool-use, inspection.",
    tags: ["UR Cobots", "Franka", "6/7-DoF"],
  },
  {
    icon: Truck,
    name: "AMRs",
    body: "Autonomous mobile robots for intralogistics, warehousing, and factory floor automation - long-horizon planning with safety constraints.",
    tags: ["Logistics", "Indoor", "Outdoor"],
  },
];

const supported = [
  { name: "Universal Robots", sub: "Collaborative arms (UR3e / UR5e / UR10e / UR20)" },
  { name: "Franka Robotics", sub: "Franka Research 3 / FR3 manipulators" },
  { name: "Unitree G1", sub: "Humanoid whole-body control" },
];

const industries = [
  { icon: Car, name: "Automotive & Mobility", body: "Body shops, assembly cells, kitting, and quality inspection running CloudBee Robotics AgenticOS with safety-constrained policies." },
  { icon: Factory, name: "Industrial Manufacturing", body: "Flexible automation that adapts to new SKUs in days, not months - without retooling the line." },
  { icon: Truck, name: "Logistics & Warehousing", body: "Pick, pack, sort, and move - heterogeneous fleets coordinated through one autonomous OS." },
  { icon: Bot, name: "Humanoid Robotics", body: "Robotic foundation models tuned per platform, deployable as drop-in ROS 2 skills." },
  { icon: HeartPulse, name: "Healthcare & Assisted Living", body: "Safe, explainable behavior for service-grade physical assistance in regulated environments." },
  { icon: Database, name: "Computer Vision & AI R&D", body: "DataForge synthetic data is reusable for perception, detection, and model training far beyond robotics." },
];

const solutionReels = [
  { src: dataforgeVideo.url, label: "DataForge", caption: "Synthetic experience at scale - cover the long tail." },
  { src: modellabVideo.url, label: "ModelLab", caption: "Task models, trained & validated on multimodal data." },
  { src: agentOsVideo.url, label: "AgenticOS", caption: "Autonomous execution with built-in recovery." },
];


export default function Solution() {
  return (
    <PageShell
      title="Solutions - CloudBee Robotics"
      description="Hardware-agnostic solutions for humanoids, robotic arms, and AMRs - across automotive, manufacturing, logistics, healthcare, and AI R&D."
      path="/solution"
    >
      <section className="relative pt-32 lg:pt-40 pb-16 lg:pb-24 bg-hero-gradient overflow-hidden">
        <HeroBackdrop accent="green" />

        {/* humanoid 3D - right side on large screens */}
        <div className="hidden lg:block absolute inset-y-0 right-0 w-[46%] pointer-events-none">
          <Suspense fallback={null}>
            <HumanoidScene className="w-full h-full opacity-95 [mask-image:radial-gradient(closest-side,#000_72%,transparent)]" />
          </Suspense>
        </div>

        <div className="section-container relative z-10">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-wider text-accent-blue mb-4">Solutions</div>
            <h1 className="font-display font-bold text-4xl lg:text-6xl leading-tight mb-5">
              Bring Your Hardware. <br /> <span className="text-gradient-blue">We Bring the Intelligence.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              One OS across humanoids, robotic arms, and AMRs - deployed across automotive, manufacturing, logistics, healthcare, and AI research.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solution videos */}
      <section className="section-spacing border-t border-border bg-surface/30">
        <div className="section-container">
          <div className="max-w-3xl mb-10">
            <div className="text-xs font-mono uppercase tracking-wider text-accent-blue mb-3">The Stack in Motion</div>
            <h2 className="font-display font-bold text-3xl lg:text-4xl">One OS, three layers - working live.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {solutionReels.map((r, i) => (
              <motion.div
                key={r.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="relative rounded-xl overflow-hidden border border-border bg-surface aspect-[16/10]"
              >
                <DemoVideo src={r.src} label={r.label} />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-background/70 backdrop-blur text-[10px] font-mono uppercase tracking-wider text-accent-green border border-accent-green/30">
                  <span className="w-1 h-1 rounded-full bg-accent-green animate-pulse" /> {r.label}
                </div>
                <div className="absolute left-4 right-14 bottom-4 z-10 text-sm font-display font-semibold text-foreground pointer-events-none">{r.caption}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported robots */}
      <section className="section-spacing border-t border-border">
        <div className="section-container">
          <div className="max-w-3xl mb-10">
            <div className="text-xs font-mono uppercase tracking-wider text-accent-green mb-3">Supported Robots</div>
            <h2 className="font-display font-bold text-3xl lg:text-4xl">Out-of-the-box support for leading platforms.</h2>
            <p className="text-muted-foreground mt-3">Day-one support for Universal Robots cobots, Franka research arms, and the Unitree G1 humanoid - with more platforms onboarded continuously.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {supported.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.45 }}
                className="glass-card p-6 flex items-start gap-3"
              >
                <CheckCircle2 className="text-accent-green shrink-0 mt-0.5" size={20} />
                <div>
                  <div className="font-display font-semibold text-foreground">{s.name}</div>
                  <div className="text-xs font-mono text-muted-foreground mt-1">{s.sub}</div>
                </div>
              </motion.div>
            ))}
          </div>
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
