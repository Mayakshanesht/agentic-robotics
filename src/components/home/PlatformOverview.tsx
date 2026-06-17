import { motion } from "framer-motion";
import { ArrowRight, Cpu, Database, BrainCircuit } from "lucide-react";
import { Link } from "react-router-dom";
import agentOsVideo from "@/assets/videos/agentOS.mp4.asset.json";
import dataforgeVideo from "@/assets/videos/dataforge.mp4.asset.json";
import modellabVideo from "@/assets/videos/modellab.mp4.asset.json";
type Card = {
  icon: typeof Cpu;
  sub: string;
  title: string;
  body: string;
  features: string[];
  badge: string;
  cta: { label: string; to: string };
  accent: "orange" | "blue" | "green";
  media?: { kind: "video"; src: string; caption: string; openTag?: string };
};

const cards: Card[] = [
  {
    icon: Cpu,
    sub: "Orchestration · Runtime",
    title: "AgenticOS",
    body: "Agentic ROS 2 runtime that plans, executes, and recovers long-horizon tasks across robot fleets - with safety contracts and continuous monitoring.",
    features: [
      "Robot orchestration & fleet management",
      "Agentic execution with world-state reasoning",
      "Continuous monitoring & re-planning",
      "Native ROS 2 deployment, any hardware",
    ],
    badge: "Available Now",
    cta: { label: "Schedule a Demo", to: "/contact" },
    accent: "orange",
    media: { kind: "video", src: agentOsVideo.url, caption: "AgenticOS · long-horizon execution with failure recovery" },
  },
  {
    icon: Database,
    sub: "Synthetic Experience Engine",
    title: "DataForge",
    body: "Turn a natural-language task into a multimodal 4D world - digital twins, randomized scenarios, sim-to-real ready.",
    features: [
      "Synthetic experience generation at scale",
      "Multimodal: RGB · Depth · Tactile · F/T · LiDAR",
      "Digital twin & scenario generation",
      "Sim-to-real transfer · domain randomization",
    ],
    badge: "v0.1 · MVP",
    cta: { label: "Learn More", to: "/product" },
    accent: "blue",
    media: { kind: "video", src: dataforgeVideo.url, caption: "DataForge · synthetic 4D scenario generation" },
  },
  {
    icon: BrainCircuit,
    sub: "Foundation Models · VLA",
    title: "ModelLab",
    body: "Adapt foundation models, train VLAs and world models on multimodal experience - explainable, evaluable, safety-aware.",
    features: [
      "Foundation model adaptation",
      "VLA & world model training",
      "Fine-tuning & evaluation pipelines",
      "Continuous learning from deployment",
    ],
    badge: "Open · In R&D",
    cta: { label: "Join Waitlist", to: "/contact" },
    accent: "green",
    media: { kind: "video", src: modellabVideo.url, caption: "ModelLab · multimodal model training", openTag: "Open · In R&D" },
  },
];


const accentMap = {
  orange: {
    bar: "from-orange-accent to-amber-400",
    glow: "bg-orange-accent/20",
    icon: "text-orange-accent bg-orange-accent/10",
    sub: "text-orange-accent",
    dot: "bg-orange-accent",
    badge: "bg-orange-accent/10 text-orange-accent border-orange-accent/30",
    link: "text-orange-accent",
  },
  blue: {
    bar: "from-accent-blue to-sky-400",
    glow: "bg-accent-blue/20",
    icon: "text-accent-blue bg-accent-blue/10",
    sub: "text-accent-blue",
    dot: "bg-accent-blue",
    badge: "bg-accent-blue/10 text-accent-blue border-accent-blue/30",
    link: "text-accent-blue",
  },
  green: {
    bar: "from-accent-green to-emerald-400",
    glow: "bg-accent-green/20",
    icon: "text-accent-green bg-accent-green/10",
    sub: "text-accent-green",
    dot: "bg-accent-green",
    badge: "bg-accent-green/10 text-accent-green border-accent-green/30",
    link: "text-accent-green",
  },
} as const;

export function PlatformOverview() {
  return (
    <section className="section-spacing relative bg-mesh" id="provide">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-5 rounded-full text-[10px] font-mono uppercase tracking-wider border border-accent-blue/30 bg-accent-blue/5 text-accent-blue">
            Our Platform
          </div>
          <h2 className="font-display font-bold text-3xl lg:text-5xl mb-4">
            What We <span className="text-gradient-blue">Provide</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            One autonomous OS. Three integrated layers - from a task description all the way to a deployed robot policy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => {
            const Icon = c.icon;
            const a = accentMap[c.accent];
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.1, duration: 0.55 }}
                className="group relative glass-card p-7 flex flex-col overflow-hidden hover:-translate-y-1 transition-transform duration-300"
              >
                {/* Top accent bar */}
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${a.bar}`} />
                {/* Soft radial glow */}
                <div
                  className={`pointer-events-none absolute -top-16 -right-16 w-56 h-56 rounded-full blur-3xl ${a.glow} opacity-70 group-hover:opacity-100 transition-opacity`}
                />

                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${a.icon}`}>
                  <Icon size={22} />
                </div>

                {c.media && (
                  <div className="relative rounded-lg overflow-hidden border border-border mb-5 aspect-[16/10] bg-surface">
                    <video
                      src={c.media.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                      aria-label={c.media.caption}
                    />
                    <div className="absolute top-2 left-2 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-background/80 backdrop-blur text-[9px] font-mono uppercase tracking-wider text-accent-green border border-accent-green/30">
                      <span className="w-1 h-1 rounded-full bg-accent-green animate-pulse" />
                      {c.media.openTag ?? "Live"}
                    </div>
                  </div>
                )}



                <div className={`text-[10px] font-mono uppercase tracking-wider mb-1.5 ${a.sub}`}>
                  {c.sub}
                </div>
                <h3 className="font-display font-bold text-2xl mb-3 text-foreground">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{c.body}</p>

                <ul className="space-y-2.5 mb-6 flex-1">
                  {c.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-foreground/85">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${a.dot}`} />
                      <span className="leading-snug">{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-4 border-t border-border/60">
                  <span className={`text-[10px] font-mono px-2 py-1 rounded-md border ${a.badge}`}>
                    {c.badge}
                  </span>
                  <Link
                    to={c.cta.to}
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold ${a.link} hover:gap-2.5 transition-all`}
                  >
                    {c.cta.label} <ArrowRight size={13} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link to="/product" className="inline-flex items-center gap-2 text-accent-blue font-semibold hover:gap-3 transition-all">
            See the full product <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
