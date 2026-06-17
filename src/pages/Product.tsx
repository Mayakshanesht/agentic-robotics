import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Box, BrainCircuit, Network, Store, Wifi, MessageSquare, Boxes, PackageCheck, Workflow } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { ParticleBackground } from "@/components/ParticleBackground";
import { HeroBackdrop } from "@/components/HeroBackdrop";
import { DemoVideo } from "@/components/DemoVideo";
import dataforgeVideo from "@/assets/videos/dataforge.mp4.asset.json";
import modellabVideo from "@/assets/videos/modellab.mp4.asset.json";
import agentOsVideo from "@/assets/videos/agentOS.mp4.asset.json";

const pillars = [
  {
    icon: Workflow,
    color: "blue",
    title: "Capability Compiler",
    subtitle: "Process → Validated Capabilities",
    body: "Turns SOPs, instructions and demonstrations into a validated, multi-agent capability graph - grounded in your real workspace, safety-checked against hardware docs and regulations, and simulation-validated before deployment.",
    video: agentOsVideo.url,
  },
  {
    icon: Box,
    color: "blue",
    title: "DataForge",
    subtitle: "Synthetic Multimodal Experience",
    body: "Production-quality multimodal training data - vision, depth, tactile and force - in hours, not months. Stop collecting real-world data by hand.",
    video: dataforgeVideo.url,
  },
  {
    icon: BrainCircuit,
    color: "green",
    title: "ModelLab",
    subtitle: "Task Model Training & Validation",
    body: "Trains and validates the AI models that run your tasks - optimized for sim-to-real transfer and functional-safety validation.",
    video: modellabVideo.url,
  },
  {
    icon: Network,
    color: "blue",
    title: "AgenticOS",
    subtitle: "Autonomous Runtime & Orchestration",
    body: "The runtime that powers deployed robots - long-horizon planning, safe execution and continuous improvement. ROS 2-native, EU AI Act ready.",
    video: agentOsVideo.url,
  },
] as const;

const skillFlow = [
  { icon: Wifi, step: "01", title: "Connect Your Robot", body: "Plug any humanoid, arm or AMR into CloudBee Robotics over the internet. ROS 2 native." },
  { icon: MessageSquare, step: "02", title: "Describe the Task", body: "Natural language in. AgenticOS scopes the task and triggers the pipeline." },
  { icon: Boxes, step: "03", title: "We Generate & Train", body: "DataForge synthesizes data; ModelLab trains and validates the policy." },
  { icon: PackageCheck, step: "04", title: "Download as ROS 2 Skill", body: "Pushed directly to your robot with safety contracts, ready to run." },
];



const steps = [
  "Describe your task in natural language",
  "DataForge generates synthetic training worlds",
  "Multimodal data is collected at scale",
  "ModelLab trains and validates robot policies",
  "AgenticOS deploys and orchestrates live execution",
  "Continuous learning feeds back into the loop",
];

export default function Product() {
  return (
    <PageShell
      title="Product - CloudBee Robotics"
      description="The autonomous OS for agentic physical AI. DataForge, ModelLab, and AgenticOS - one modular platform from synthetic data to deployed intelligence."
      path="/product"
    >
      {/* Hero */}
      <section className="relative pt-32 lg:pt-40 pb-20 overflow-hidden bg-hero-gradient">
        <ParticleBackground density={35} />
        <HeroBackdrop accent="blue" />
        <div className="section-container relative z-10 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="text-xs font-mono uppercase tracking-wider text-accent-blue mb-4">The Product</div>
            <h1 className="font-display font-bold text-4xl lg:text-6xl leading-tight mb-5">
              The Autonomous OS for <span className="text-gradient-blue">Physical AI</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A unified, modular system that takes any robot from task description to deployed intelligence - in a couple of days.
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
                CloudBee Robotics is an open platform. Customers can onboard any humanoid, robotic arm, or mobile robot quickly - define tasks, generate training data, train custom policies, and deploy them to production from a single integrated environment.
              </p>
            </div>

            <div className="glass-card p-6 space-y-2">
              {[
                { label: "Custom Skills / Tasks", color: "accent-green", sub: "Application layer" },
                { label: "DataForge · ModelLab · AgenticOS", color: "accent-blue", sub: "Intelligence layer" },
                { label: "Hardware · Humanoids · Arms · AMRs", color: "muted-foreground", sub: "Physical layer" },
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
                  {"video" in p && p.video ? (
                    <div className="relative rounded-2xl overflow-hidden border border-accent-blue/30 shadow-2xl shadow-accent-blue/10 bg-surface max-w-md mx-auto aspect-video">
                      <DemoVideo src={p.video} label={`${p.title} demo`} />
                      <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2 py-1 rounded-full bg-background/80 backdrop-blur text-[10px] font-mono uppercase tracking-wider text-accent-green border border-accent-green/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
                        Live demo
                      </div>
                      <div className="absolute inset-x-0 bottom-0 z-10 p-2.5 pr-14 bg-gradient-to-t from-background/90 to-transparent text-[11px] font-mono text-foreground/90 pointer-events-none">
                        {p.title} · multimodal synthetic capture
                      </div>
                    </div>
                  ) : (
                    <div className="glass-card p-10 aspect-square max-w-md mx-auto flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-mesh opacity-60" />
                      <Icon size={120} className={`${accent} opacity-70 relative`} strokeWidth={1.2} />
                    </div>
                  )}
                </div>

              </motion.div>
            </div>
          );
        })}
      </section>

      {/* Skill Store */}
      <section className="section-spacing border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-50" />
        <div className="section-container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-5 rounded-full border border-accent-green/30 bg-accent-green/10 text-xs font-mono text-accent-green">
              <Store size={12} /> The Future · Skill Store for Robots
            </div>
            <h2 className="font-display font-bold text-3xl lg:text-5xl mb-4 leading-tight">
              Connect your robot. Ask for a task.{" "}
              <span className="text-gradient-blue">Get a skill.</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              A closed loop from task prompt to a downloadable, safety-validated ROS 2 skill running on your robot.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {skillFlow.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="glass-card p-6 relative"
                >
                  <div className="absolute top-4 right-4 text-[10px] font-mono text-accent-blue/50">{f.step}</div>
                  <div className="w-11 h-11 rounded-lg bg-accent-blue/10 text-accent-blue flex items-center justify-center mb-4">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display font-semibold text-base mb-2 text-foreground">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>


      {/* Technical brief — gated under NDA */}
      <section className="section-spacing border-t border-border">
        <div className="section-container">
          <div className="card-3d border-gradient p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 max-w-5xl mx-auto">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-accent-blue mb-2">Under NDA</div>
              <h3 className="font-display font-bold text-2xl lg:text-3xl">Want the architecture and benchmarks?</h3>
              <p className="text-muted-foreground mt-2 max-w-xl">
                The deep technical brief - system design, evaluation results and integration details - is shared with serious partners and investors under NDA.
              </p>
            </div>
            <Link to="/contact?interest=Partnership" className="btn-pilot shrink-0">
              Request technical brief <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-spacing">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl lg:text-4xl mb-3">
              How It <span className="text-gradient-blue">Works</span>
            </h2>
            <p className="text-muted-foreground">From task spec to deployed autonomy - in one continuous loop.</p>
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
            <Link to="/solution" className="btn-pilot">
              See Solutions <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
