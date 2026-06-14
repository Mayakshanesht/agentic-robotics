import { motion } from "framer-motion";
import { Radio, Cloud, Cpu, Zap, Activity } from "lucide-react";

const specs = [
  { icon: Zap, label: "Sub-ms URLLC", desc: "Ultra-reliable low-latency control loop closes in real time." },
  { icon: Activity, label: "eMBB Telemetry", desc: "High-bandwidth multimodal sensor streams — vision, force, tactile." },
  { icon: Cpu, label: "Edge ↔ Cloud", desc: "Inference splits dynamically between on-device and the cloud brain." },
];

export function SixGNervousSystem() {
  return (
    <section id="6g" className="relative py-28 lg:py-40 border-t border-border overflow-hidden">
      <div className="absolute -top-20 right-0 w-[520px] h-[520px] rounded-full bg-violet-500/10 blur-[150px] pointer-events-none" />

      <div className="section-container relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/40 bg-violet-500/10 backdrop-blur mb-6">
              <Radio size={13} className="text-violet-400" />
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-violet-300">
                6G Nervous System
              </span>
            </div>
            <h2 className="font-display font-bold text-4xl lg:text-6xl leading-[1.02] tracking-tight">
              A <span className="text-gradient-blue">6G nervous system</span> for
              real-time robot intelligence.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              CloudBee streams multimodal sensor data over a 6G bearer (eMBB + URLLC) so the
              self-improving loop runs live — failures are captured, analyzed and corrected in
              real time instead of waiting for batch uploads.
            </p>

            <div className="mt-10 space-y-4">
              {specs.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="shrink-0 w-10 h-10 rounded-xl border border-violet-500/30 bg-violet-500/10 flex items-center justify-center">
                    <s.icon size={18} className="text-violet-300" />
                  </div>
                  <div>
                    <div className="font-display font-semibold text-foreground">{s.label}</div>
                    <div className="text-sm text-muted-foreground">{s.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Animated transmission diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative card-3d border-gradient p-8 aspect-square flex items-center justify-center"
          >
            <svg viewBox="0 0 400 400" className="w-full h-full">
              {/* connecting beams */}
              {[
                { d: "M 80 320 C 160 320, 200 200, 320 80", c: "#3aa0ff" },
                { d: "M 80 320 C 200 300, 240 160, 320 80", c: "#8b5cf6" },
                { d: "M 80 320 C 120 240, 260 240, 320 80", c: "#34e0a1" },
              ].map((b, i) => (
                <g key={i}>
                  <path d={b.d} fill="none" stroke={b.c} strokeOpacity="0.18" strokeWidth="2" />
                  <path
                    d={b.d}
                    fill="none"
                    stroke={b.c}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeDasharray="6 220"
                    style={{ animation: `dash-flow ${2.4 + i * 0.5}s linear infinite` }}
                  />
                </g>
              ))}

              {/* edge / robot node */}
              <circle cx="80" cy="320" r="34" fill="#0A0F1E" stroke="#3aa0ff" strokeOpacity="0.5" strokeWidth="1.5" />
              <circle cx="80" cy="320" r="34" fill="#3aa0ff" fillOpacity="0.08" className="animate-glow-pulse" />

              {/* cloud node */}
              <circle cx="320" cy="80" r="38" fill="#0A0F1E" stroke="#8b5cf6" strokeOpacity="0.5" strokeWidth="1.5" />
              <circle cx="320" cy="80" r="38" fill="#8b5cf6" fillOpacity="0.08" className="animate-glow-pulse" />
            </svg>

            {/* overlay icons + labels */}
            <div className="absolute left-[10%] bottom-[14%] flex flex-col items-center gap-1 -translate-x-1/2 translate-y-1/2">
              <Cpu size={20} className="text-accent-blue" />
              <span className="text-[9px] font-mono uppercase tracking-widest text-muted-foreground">Edge Robot</span>
            </div>
            <div className="absolute right-[8%] top-[10%] flex flex-col items-center gap-1 translate-x-1/2 -translate-y-1/2">
              <Cloud size={22} className="text-violet-300" />
              <span className="text-[9px] font-mono uppercase tracking-widest text-muted-foreground">Cloud Brain</span>
            </div>
            <div className="absolute top-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-background/70 backdrop-blur border border-violet-500/30 text-[10px] font-mono uppercase tracking-[0.2em] text-violet-300">
              6G · eMBB + URLLC
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
