import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Boxes, Video, Glasses, Eye, Box, Activity, Hand, BrainCircuit, ArrowRight, Check } from "lucide-react";

const sensors = [
  { icon: Eye, label: "Vision" },
  { icon: Box, label: "Depth" },
  { icon: Activity, label: "Force" },
  { icon: Hand, label: "Touch" },
];

/** Synthetic path: scenario tiles "multiply" + multimodal sensor chips pulse. */
function SyntheticAnim() {
  return (
    <div className="relative h-40 rounded-xl border border-accent-blue/20 bg-background/40 p-4 flex flex-col justify-between overflow-hidden">
      <div className="grid grid-cols-6 gap-1.5">
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.div
            key={i}
            className="aspect-square rounded-[3px] bg-accent-blue/60"
            animate={{ opacity: [0.15, 0.9, 0.15], scale: [0.85, 1, 0.85] }}
            transition={{ duration: 2.2, repeat: Infinity, delay: (i % 9) * 0.18, ease: "easeInOut" }}
          />
        ))}
      </div>
      <div className="flex flex-wrap gap-1.5">
        {sensors.map((s, i) => (
          <motion.span
            key={s.label}
            className="inline-flex items-center gap-1 text-[9px] font-mono px-1.5 py-0.5 rounded-full border border-accent-blue/30 bg-accent-blue/10 text-accent-blue"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.25 }}
          >
            <s.icon size={9} /> {s.label}
          </motion.span>
        ))}
      </div>
      <span className="absolute top-3 right-3 text-[10px] font-mono text-accent-blue/80">at scale</span>
    </div>
  );
}

/** Video path: a demo frame -> a robot trajectory draws across it. */
function VideoAnim() {
  return (
    <div className="relative h-40 rounded-xl border border-accent-green/20 bg-background/40 overflow-hidden flex items-center justify-center">
      <svg viewBox="0 0 240 130" className="w-full h-full">
        <rect x="14" y="14" width="212" height="102" rx="8" fill="none" stroke="hsl(var(--border))" strokeWidth="1.5" />
        {/* play glyph */}
        <circle cx="40" cy="40" r="10" fill="#34e0a1" fillOpacity="0.15" stroke="#34e0a1" strokeWidth="1.2" />
        <path d="M37 36 L45 40 L37 44 Z" fill="#34e0a1" />
        {/* trajectory drawing across the "frame" */}
        <motion.path
          d="M40 95 C 90 95, 110 40, 150 50 S 210 95, 215 60"
          fill="none"
          stroke="#34e0a1"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0.3 }}
          animate={{ pathLength: [0, 1, 1], opacity: [0.3, 1, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* waypoints */}
        {[[40, 95], [150, 50], [215, 60]].map(([x, y], i) => (
          <motion.circle
            key={i}
            cx={x}
            cy={y}
            r="3"
            fill="#34e0a1"
            animate={{ scale: [0.6, 1.1, 0.6], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.4 }}
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
          />
        ))}
      </svg>
      <span className="absolute top-3 right-3 text-[10px] font-mono text-accent-green/80">demo → trajectories</span>
    </div>
  );
}

/** Teleop path: VR headset + controllers tracing motion -> scaled into episodes. */
function TeleopAnim() {
  return (
    <div className="relative h-40 rounded-xl border border-violet-500/20 bg-background/40 overflow-hidden flex items-center justify-center">
      <svg viewBox="0 0 240 130" className="w-full h-full">
        {/* VR headset */}
        <rect x="86" y="22" width="68" height="30" rx="12" fill="#8b5cf6" fillOpacity="0.15" stroke="#8b5cf6" strokeWidth="1.4" />
        <circle cx="104" cy="37" r="6" fill="#8b5cf6" fillOpacity="0.5" />
        <circle cx="136" cy="37" r="6" fill="#8b5cf6" fillOpacity="0.5" />
        {/* two controllers tracing motion */}
        <motion.circle r="5" fill="#c4b5fd"
          animate={{ cx: [70, 60, 78, 70], cy: [90, 76, 82, 90] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
        <motion.circle r="5" fill="#c4b5fd"
          animate={{ cx: [170, 182, 162, 170], cy: [90, 78, 84, 90] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
        {/* demos scaled into episodes */}
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.rect key={i} x={92 + i * 12} width="7" rx="1.5" y={106} height="16" fill="#34e0a1"
            style={{ transformBox: "fill-box", transformOrigin: "bottom" }}
            animate={{ scaleY: [0.25, 1, 0.25], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.18 }} />
        ))}
      </svg>
      <span className="absolute top-3 right-3 text-[10px] font-mono text-violet-500/80">demos → dataset</span>
    </div>
  );
}

const toneIcon: Record<string, string> = {
  blue: "bg-accent-blue/10 text-accent-blue",
  green: "bg-accent-green/10 text-accent-green",
  violet: "bg-violet-500/10 text-violet-300",
};
const toneText: Record<string, string> = {
  blue: "text-accent-blue",
  green: "text-accent-green",
  violet: "text-violet-300",
};

const paths = [
  {
    icon: Boxes,
    tone: "blue",
    title: "Synthetic multimodal data",
    body: "From your task and a video of the scene, generate multimodal experience — vision, depth, force and touch — at scale in simulation.",
    anim: <SyntheticAnim />,
  },
  {
    icon: Video,
    tone: "green",
    title: "Video demonstration",
    body: "Show the task once on video. We map it to robot trajectories and multiply it into training data.",
    anim: <VideoAnim />,
  },
  {
    icon: Glasses,
    tone: "violet",
    title: "Teleoperation (VR & arm)",
    body: "Teleoperate the robot in VR (Meta Quest) or with a physical arm to record real demonstrations - then scale them into a full dataset.",
    anim: <TeleopAnim />,
  },
];

export function OnboardingPaths() {
  return (
    <section className="relative py-28 lg:py-40 border-t border-border overflow-hidden">
      <div className="absolute inset-0 aurora opacity-30 pointer-events-none" />
      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-accent-blue mb-4">
            Onboarding · DataForge × ModelLab
          </div>
          <h2 className="font-display font-bold text-4xl lg:text-6xl leading-[1.0] tracking-tight">
            Teach the task{" "}
            <span className="text-gradient-blue">your way.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Generate experience from your scene, show the task on video, or teleoperate a few
            demonstrations. DataForge turns any of them into contact-rich training data, and ModelLab
            trains the model that runs the task.
          </p>
        </motion.div>

        {/* data paths */}
        <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
          {paths.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="card-3d border-gradient p-6 lg:p-7"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${toneIcon[p.tone]}`}>
                  <p.icon size={20} />
                </div>
                <div className={`text-[10px] font-mono uppercase tracking-[0.2em] ${toneText[p.tone]}`}>
                  Data path {i + 1}
                </div>
              </div>
              <h3 className="font-display font-bold text-xl lg:text-2xl text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{p.body}</p>
              {p.anim}
            </motion.div>
          ))}
        </div>

        {/* flow to training + deploy */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-6 card-3d border-gradient p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="inline-flex items-center gap-2 font-display font-semibold text-foreground">
              <BrainCircuit size={18} className="text-violet-400" /> Train multimodal AI models
            </span>
            <ArrowRight size={16} className="text-muted-foreground/50" />
            <span className="inline-flex items-center gap-1.5 text-foreground/85">
              <Check size={15} className="text-accent-green" /> Safety-validated
            </span>
            <ArrowRight size={16} className="text-muted-foreground/50" />
            <span className="inline-flex items-center gap-1.5 text-foreground/85">
              <Check size={15} className="text-accent-green" /> Deployed to your fleet
            </span>
          </div>
          <Link to="/contact" className="btn-pilot shrink-0">
            Onboard your robot <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
