import { motion } from "framer-motion";
import { Eye, Box, Activity, Hand, Check, X } from "lucide-react";

/**
 * Illustrative, IP-safe animation: a vision-only VLA "predicts success" and
 * drops the part (no physical grounding), while a model trained on multimodal
 * experience (vision + depth + force + touch) builds a physics-aware latent
 * world model and actually holds on. Conceptual only — no methods revealed.
 */

const T = [0, 0.22, 0.42, 0.68, 0.86, 1];
const loop = { duration: 5.5, times: T, repeat: Infinity, ease: "easeInOut" as const };

const RED = "#f87171";
const GREEN = "#34e0a1";
const BLUE = "#3aa0ff";
const NEUTRAL = "#6b7a90";

function Scene({ mode }: { mode: "vision" | "multimodal" }) {
  const ok = mode === "multimodal";
  // cube vertical motion: multimodal lifts with the gripper, vision slips & falls
  const cubeY = ok ? [0, 0, 0, -52, -52, -52] : [0, 0, 0, 26, 40, 40];
  const cubeRot = ok ? [0, 0, 0, 0, 0, 0] : [0, 0, 0, 16, 30, 30];
  const cubeFill = ok
    ? [NEUTRAL, NEUTRAL, BLUE, GREEN, GREEN, GREEN]
    : [NEUTRAL, NEUTRAL, NEUTRAL, NEUTRAL, RED, RED];

  return (
    <svg viewBox="0 0 160 190" className="w-full h-full">
      {/* floor */}
      <line x1="20" y1="150" x2="140" y2="150" stroke="hsl(var(--border))" strokeWidth="1.5" />
      {[40, 70, 100].map((x) => (
        <line key={x} x1={x} y1="150" x2={x - 8} y2="158" stroke="hsl(var(--border))" strokeWidth="1" opacity="0.5" />
      ))}

      {/* predicted-success ghost (vision-only): model thinks the cube went up */}
      {!ok && (
        <motion.rect
          x={72} y={112} width={16} height={16} rx={2}
          fill="none" stroke={NEUTRAL} strokeDasharray="3 3" strokeWidth="1.5"
          animate={{ y: [112, 112, 112, 60, 60, 60], opacity: [0, 0, 0.2, 0.7, 0.7, 0] }}
          transition={loop}
        />
      )}

      {/* the part */}
      <motion.rect
        width={16} height={16} rx={2}
        x={72} y={112}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
        animate={{ y: cubeY, rotate: cubeRot, fill: cubeFill }}
        transition={loop}
      />

      {/* gripper */}
      <motion.g animate={{ y: [0, 55, 55, 0, 0, 0] }} transition={loop}>
        <rect x={76} y={8} width={8} height={34} rx={2} fill={ok ? GREEN : RED} opacity={0.85} />
        <rect x={62} y={40} width={36} height={7} rx={3} fill={ok ? GREEN : RED} opacity={0.85} />
        <motion.g animate={{ x: [-13, -13, -4, -4, -4, -13] }} transition={loop}>
          <rect x={77} y={46} width={6} height={26} rx={2} fill="#aab4c6" />
        </motion.g>
        <motion.g animate={{ x: [13, 13, 4, 4, 4, 13] }} transition={loop}>
          <rect x={77} y={46} width={6} height={26} rx={2} fill="#aab4c6" />
        </motion.g>
      </motion.g>

      {/* multimodal: force / tactile feedback bars that engage at grasp */}
      {ok &&
        [0, 1, 2].map((i) => (
          <motion.rect
            key={i}
            x={120 + i * 8}
            width={5}
            rx={1.5}
            fill={GREEN}
            style={{ transformBox: "fill-box", transformOrigin: "bottom" }}
            y={96}
            height={34}
            animate={{ scaleY: [0.08, 0.08, 1, 0.85, 0.9, 0.08], opacity: [0.3, 0.3, 1, 1, 1, 0.3] }}
            transition={{ ...loop }}
          />
        ))}

      {/* result badge */}
      <motion.g
        animate={{ opacity: [0, 0, 0, 0, 1, 1] }}
        transition={loop}
        transform={`translate(${ok ? 30 : 30}, 24)`}
      >
        <circle cx="0" cy="0" r="11" fill={ok ? GREEN : RED} fillOpacity="0.18" stroke={ok ? GREEN : RED} strokeWidth="1.5" />
      </motion.g>
    </svg>
  );
}

function Panel({ mode }: { mode: "vision" | "multimodal" }) {
  const ok = mode === "multimodal";
  const modalities = [
    { icon: Eye, label: "Vision", on: true },
    { icon: Box, label: "Depth", on: ok },
    { icon: Activity, label: "Force", on: ok },
    { icon: Hand, label: "Touch", on: ok },
  ];
  return (
    <div className={`rounded-3xl border p-6 lg:p-7 relative overflow-hidden ${ok ? "border-accent-green/30 bg-accent-green/[0.04]" : "border-destructive/25 bg-destructive/[0.04]"}`}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className={`text-[10px] font-mono uppercase tracking-[0.22em] ${ok ? "text-accent-green" : "text-destructive/90"}`}>
            {ok ? "CloudBee Multimodal" : "Vision-only VLA"}
          </div>
          <div className="font-display font-semibold text-foreground mt-0.5">
            {ok ? "Understands physics → holds on" : "Predicts success → drops it"}
          </div>
        </div>
        <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${ok ? "bg-accent-green/15 text-accent-green" : "bg-destructive/15 text-destructive"}`}>
          {ok ? <Check size={16} /> : <X size={16} />}
        </span>
      </div>

      <div className="aspect-[4/3] rounded-2xl bg-background/40 border border-border/60">
        <Scene mode={mode} />
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        {modalities.map((m) => (
          <span
            key={m.label}
            className={`inline-flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-1 rounded-full border transition-colors ${
              m.on
                ? ok
                  ? "border-accent-green/40 bg-accent-green/10 text-accent-green"
                  : "border-accent-blue/40 bg-accent-blue/10 text-accent-blue"
                : "border-border bg-surface/40 text-muted-foreground/50 line-through"
            }`}
          >
            <m.icon size={11} /> {m.label}
          </span>
        ))}
      </div>
    </div>
  );
}

export function PhysicsGrounding() {
  return (
    <section className="relative py-28 lg:py-40 border-t border-border overflow-hidden">
      <div className="absolute inset-0 aurora opacity-40 pointer-events-none" />
      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14"
        >
          <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-accent-blue mb-4">
            DataForge × ModelLab
          </div>
          <h2 className="font-display font-bold text-4xl lg:text-6xl leading-[1.0] tracking-tight">
            Vision alone can't feel physics.{" "}
            <span className="text-gradient-green">Multimodal experience can.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            A vision-only model predicts success and drops the part. By learning from multimodal
            experience - vision, depth, force and touch - CloudBee's models build a physics-aware
            latent world model, so they actually hold on.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
          <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <Panel mode="vision" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <Panel mode="multimodal" />
          </motion.div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {["Physics-grounded", "Latent world model", "Better VLAs", "Sim-to-real"].map((t) => (
              <span key={t} className="text-[11px] font-mono uppercase tracking-[0.12em] text-foreground/75 px-2.5 py-1 rounded-full border border-border bg-surface/40">
                {t}
              </span>
            ))}
          </div>
          <span className="text-xs font-mono text-muted-foreground/70">Illustrative concept</span>
        </div>
      </div>
    </section>
  );
}
