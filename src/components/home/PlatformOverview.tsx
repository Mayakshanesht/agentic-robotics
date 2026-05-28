import { motion } from "framer-motion";
import { ArrowRight, Cpu, Database, BrainCircuit } from "lucide-react";
import { Link } from "react-router-dom";
import demoVideo from "@/assets/hero/humanoid-pallet.mp4";
type Card = {
  icon: typeof Cpu;
  sub: string;
  title: string;
  body: string;
  features: string[];
  badge: string;
  cta: { label: string; to: string };
  accent: "orange" | "blue" | "green";
  /** Optional inline visual: video src or "open" for ModelLab open-state placeholder */
  media?: { kind: "video"; src: string; caption: string } | { kind: "open"; caption: string };
};

const cards: Card[] = [
  {
    icon: Cpu,
    sub: "The Wedge · Entry Product",
    title: "AgentOS",
    body: "Autonomous runtime that plans and executes long-horizon robot tasks with world-state reasoning, safety contracts, and automatic re-planning.",
    features: [
      "Task Reasoning Nodes — hardware-agnostic policy units",
      "World-state memory across multi-step tasks",
      "Neuro-symbolic safety · EU AI Act auditable",
      "One-click ROS 2 deployment to any compatible robot",
    ],
    badge: "Available Now",
    cta: { label: "Request Demo", to: "/contact" },
    accent: "orange",
    media: { kind: "video", src: demoVideo, caption: "Humanoid · palletize · AgentOS runtime" },
  },
  {
    icon: Database,
    sub: "Synthetic Data Generation",
    title: "DataForge",
    body: "Turn a natural-language task into a full 4D synthetic training environment — multimodal, auto-annotated, reusable beyond robotics.",
    features: [
      "Text-to-4D world · physics-accurate scenarios",
      "RGB · Depth · Tactile · F/T · LiDAR · proprioception",
      "Domain randomization for robust sim-to-real",
      "Auto-annotated — zero manual labeling",
    ],
    badge: "v0.1 · MVP",
    cta: { label: "Learn More", to: "/product" },
    accent: "blue",
    media: { kind: "video", src: demoVideo, caption: "Synthetic 4D scenario · multimodal capture" },
  },
  {
    icon: BrainCircuit,
    sub: "VLA & World Model Training",
    title: "ModelLab",
    body: "Train explainable Vision-Language-Action and world models on your multimodal data. Engineered for functional safety and validation.",
    features: [
      "Explainable, traceable decisions",
      "LoRA fine-tuning · parameter-efficient",
      "Multimodal token integration",
      "Continuous learning from every deployment",
    ],
    badge: "Open · In R&D",
    cta: { label: "Join Waitlist", to: "/contact" },
    accent: "green",
    media: { kind: "open", caption: "Open research · join the waitlist" },
  },
];

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
            One autonomous OS. Three integrated layers — from a task description all the way to a deployed robot policy.
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
