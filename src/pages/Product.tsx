import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Bot, Lock, Eye, ShieldCheck } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { ParticleBackground } from "@/components/ParticleBackground";
import { HeroBackdrop } from "@/components/HeroBackdrop";
import { DemoVideo } from "@/components/DemoVideo";
import { HardwareBus, SafetyChecks } from "@/components/landing/PipelineAnimations";
import { pilotRobots, products, safetyLayer, type ProductKey } from "@/data/company";
import videoToMotionVideo from "@/assets/videos/capability-compiler.mp4.asset.json";
import modellabVideo from "@/assets/videos/modellab.mp4.asset.json";
import realRobotDemo from "@/assets/videos/cloudbee-demo.mp4.asset.json";

type Detail = {
  problem: string;
  inputs: string[];
  outputs: string[];
  video?: { src: string; caption: string };
};

const details: Record<ProductKey, Detail> = {
  dataforge: {
    problem: "Teleoperation scales with human hours, and most robot datasets carry no force or touch — the signals contact-rich tasks depend on.",
    inputs: ["Task description", "Video of your scene", "A few video demonstrations"],
    outputs: ["Simulation of your work cell", "4D multimodal dataset with force and tactile channels"],
    video: { src: videoToMotionVideo.url, caption: "Human video → tracked 3D object motion" },
  },
  modellab: {
    problem: "Open foundation models see camera and language. Your robot has its own sensors, actuators and compute budget.",
    inputs: ["Your dataset", "Your robot's sensors, actuators and compute"],
    outputs: ["An adapted model for your robot and task", "Validated before it reaches hardware"],
    video: { src: modellabVideo.url, caption: "Policy rollout in simulation" },
  },
  agenticos: {
    problem: "Long tasks fail mid-way. Without recovery, one slipped grasp stops the cell until an engineer steps in.",
    inputs: ["Your task", "Validated capabilities"],
    outputs: ["Long-horizon execution on real robots", "Closed-loop recovery when a step fails"],
    video: { src: realRobotDemo.url, caption: "Real hardware · one task across several arms" },
  },
  kinebridge: {
    problem: "Every new robot or sensor means another custom integration before any useful work starts.",
    inputs: ["Your robots", "Your sensors"],
    outputs: ["One interface across all of them", "One-click deployment of validated capabilities"],
  },
};

const pilotSteps = [
  { title: "Scope the work cell", body: "We agree the task, the robot and what success looks like." },
  { title: "Capture the scene", body: "A video of the work cell and a few demonstrations of the task." },
  { title: "Data and model", body: "DataForge generates the dataset; ModelLab adapts the model to your robot." },
  { title: "Validate in simulation", body: "Safety analysis, generated test cases and verification before hardware." },
  { title: "Deploy and run", body: "KineBridge deploys to your robot; AgenticOS runs it and recovers from failures." },
];

const publicVsNda = {
  public: ["What each product does", "What you receive in a pilot", "The robot platforms we run on"],
  nda: ["System architecture and methods", "Datasets, models and benchmarks", "Pilot results and customer names"],
};

function ListBlock({ label, items, tone }: { label: string; items: string[]; tone: "blue" | "green" }) {
  const dot = tone === "blue" ? "bg-accent-blue" : "bg-accent-green";
  const text = tone === "blue" ? "text-accent-blue" : "text-accent-green";
  return (
    <div>
      <div className={`mb-2 text-[10px] font-mono uppercase tracking-[0.22em] ${text}`}>{label}</div>
      <ul className="space-y-1.5 text-sm text-foreground/85">
        {items.map((it) => (
          <li key={it} className="flex gap-2">
            <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${dot}`} />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Product() {
  return (
    <PageShell
      title="Product - CloudBee Robotics"
      description="DataForge, ModelLab with Copilot, AgenticOS and KineBridge: contact-rich manipulation data, adapted foundation models, self-recovering execution and one hardware standard for any robot."
      path="/product"
    >
      {/* Hero */}
      <section className="relative pt-32 lg:pt-40 pb-20 overflow-hidden bg-hero-gradient">
        <ParticleBackground density={35} />
        <HeroBackdrop accent="blue" />
        <div className="section-container relative z-10 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="text-xs font-mono uppercase tracking-wider text-accent-blue mb-4">
              The Capability Factory for Physical AI · Product
            </div>
            <h1 className="font-display font-bold text-4xl lg:text-6xl leading-tight mb-5">
              Four products for robots that <span className="text-gradient-blue">handle contact.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Data, models, execution and hardware — each usable on its own, built to work together, with safety validation
              before anything reaches a real robot.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {products.map((p) => (
                <a
                  key={p.key}
                  href={`#${p.key}`}
                  className="rounded-full border border-border bg-background/70 px-3.5 py-1.5 text-sm font-medium text-foreground backdrop-blur transition-colors hover:border-accent-blue/50 hover:text-accent-blue"
                >
                  {p.name}
                </a>
              ))}
              <a
                href="#safety"
                className="rounded-full border border-accent-green/40 bg-accent-green/5 px-3.5 py-1.5 text-sm font-medium text-accent-green transition-colors hover:bg-accent-green/10"
              >
                {safetyLayer.name}
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link to="/contact?interest=Pilot%20Program" className="btn-pilot">
                Start a pilot <ArrowRight size={16} />
              </Link>
              <Link to="/contact?interest=Partnership" className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-blue hover:gap-2 transition-all">
                Request the technical brief <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product deep dives */}
      <section className="border-t border-border bg-surface/30">
        {products.map((p, i) => {
          const d = details[p.key];
          const reverse = i % 2 === 1;
          return (
            <div key={p.key} id={p.key} className="section-container py-20 lg:py-28 border-b border-border last:border-0 scroll-mt-20">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14"
              >
                <div className={reverse ? "lg:order-2" : ""}>
                  <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                    0{i + 1} · {p.tagline}
                  </div>
                  <h2 className="mt-2 font-display font-bold text-3xl lg:text-4xl text-foreground">
                    {p.name}
                    {p.key === "modellab" && <span className="ml-3 align-middle text-sm font-mono text-accent-green">+ Copilot</span>}
                  </h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{p.summary}</p>
                  <div className="mt-5 rounded-xl border-l-2 border-orange-accent bg-background/70 px-4 py-3 text-sm text-foreground/85 leading-relaxed">
                    <span className="font-semibold text-foreground">The problem. </span>
                    {d.problem}
                  </div>
                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    <ListBlock label="What goes in" items={d.inputs} tone="blue" />
                    <ListBlock label="What comes out" items={d.outputs} tone="green" />
                  </div>
                  <div className="mt-6">
                    <ListBlock label="You get" items={p.youGet} tone="green" />
                  </div>
                </div>

                <div className={reverse ? "lg:order-1" : ""}>
                  {d.video ? (
                    <div className="relative mx-auto aspect-video overflow-hidden rounded-2xl border border-accent-blue/30 bg-surface shadow-2xl shadow-accent-blue/10">
                      <DemoVideo src={d.video.src} label={`${p.name} — ${d.video.caption}`} />
                      <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-background/90 to-transparent p-3 pr-14 text-[11px] font-mono text-foreground/90 pointer-events-none">
                        {p.name} · {d.video.caption}
                      </div>
                    </div>
                  ) : (
                    <div className="glass-card p-6 lg:p-8">
                      <div className="h-44 lg:h-56">
                        <HardwareBus />
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {pilotRobots.map((r) => (
                          <span key={r.name} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1 text-xs text-foreground">
                            <Bot size={12} className="text-accent-blue" /> {r.name}
                          </span>
                        ))}
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-accent-blue/50 px-3 py-1 text-xs text-accent-blue">
                          + your robot
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          );
        })}
      </section>

      {/* Safety & validation */}
      <section id="safety" className="section-spacing border-t border-border scroll-mt-20">
        <div className="section-container">
          <div className="card-3d border-gradient mx-auto max-w-5xl p-8 lg:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex max-w-xl items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-green/15 text-accent-green">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-accent-green">Across every product</div>
                  <h2 className="mt-1 font-display font-bold text-2xl lg:text-3xl">{safetyLayer.name}</h2>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{safetyLayer.summary}</p>
                </div>
              </div>
              <SafetyChecks items={safetyLayer.items} />
            </div>
          </div>
        </div>
      </section>

      {/* How a pilot works */}
      <section className="section-spacing border-t border-border bg-surface/30">
        <div className="section-container">
          <div className="mb-12 max-w-3xl">
            <div className="text-xs font-mono uppercase tracking-wider text-accent-blue mb-3">How a pilot works</div>
            <h2 className="font-display font-bold text-3xl lg:text-4xl">
              From your work cell to a <span className="text-gradient-blue">running capability.</span>
            </h2>
          </div>
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {pilotSteps.map((s, i) => (
              <motion.li
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.45 }}
                className="glass-card p-5"
              >
                <div className="font-mono text-2xl font-bold text-accent-blue">0{i + 1}</div>
                <h3 className="mt-2 font-display font-semibold text-foreground">{s.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              </motion.li>
            ))}
          </ol>
          <div className="mt-10">
            <Link to="/contact?interest=Pilot%20Program" className="btn-pilot">
              Start a pilot <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Public vs NDA */}
      <section className="section-spacing border-t border-border">
        <div className="section-container">
          <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
            <div className="glass-card p-7">
              <div className="flex items-center gap-2 font-display font-semibold text-lg text-foreground">
                <Eye size={18} className="text-accent-blue" /> Shared openly
              </div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {publicVsNda.public.map((it) => (
                  <li key={it} className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-blue" />{it}</li>
                ))}
              </ul>
            </div>
            <div className="card-3d border-gradient p-7">
              <div className="flex items-center gap-2 font-display font-semibold text-lg text-foreground">
                <Lock size={18} className="text-accent-green" /> Shared under NDA
              </div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {publicVsNda.nda.map((it) => (
                  <li key={it} className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-green" />{it}</li>
                ))}
              </ul>
              <Link to="/contact?interest=Partnership" className="btn-pilot mt-6">
                Request the technical brief <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
