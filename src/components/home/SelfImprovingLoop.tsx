import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Video, UploadCloud, Boxes, Brain, Rocket } from "lucide-react";

const phases = [
  { icon: Video, label: "Record", desc: "Edge buffers failure episodes" },
  { icon: UploadCloud, label: "Upload", desc: "Stream data to DataForge" },
  { icon: Boxes, label: "DataForge", desc: "Synthesize corrective episodes" },
  { icon: Brain, label: "Retrain", desc: "Model Lab improves the policy" },
  { icon: Rocket, label: "OTA Push", desc: "New model deployed to the fleet" },
];

const RADIUS = 150;

export function SelfImprovingLoop() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % phases.length), 1600);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative py-28 lg:py-40 border-t border-border overflow-hidden">
      <div className="absolute inset-0 aurora opacity-40 pointer-events-none" />
      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-accent-green mb-4">
            Self-Improving Loop
          </div>
          <h2 className="font-display font-bold text-4xl lg:text-6xl leading-[1.02] tracking-tight">
            Robots that get better{" "}
            <span className="text-gradient-green">on their own.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Every deployment runs a continuous OTA improvement cycle. Failures become training
            data, policies are retrained automatically, and better models are pushed back to the
            fleet — no engineer in the loop.
          </p>
        </motion.div>

        <div className="hidden sm:block relative mx-auto w-[420px] h-[420px]">
          {/* rotating conic ring */}
          <div className="absolute inset-0 rounded-full conic-halo opacity-25 blur-md" />
          <div className="absolute inset-6 rounded-full border border-dashed border-accent-blue/20" />

          {/* center hub */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full card-3d border-gradient flex flex-col items-center justify-center text-center">
              <span className="font-display font-bold text-2xl text-gradient-green">∞</span>
              <span className="text-[9px] font-mono uppercase tracking-[0.18em] text-muted-foreground mt-1">
                Autonomous
              </span>
            </div>
          </div>

          {/* phase nodes around the circle */}
          {phases.map((p, i) => {
            const angle = (i / phases.length) * Math.PI * 2 - Math.PI / 2;
            const x = Math.cos(angle) * RADIUS;
            const y = Math.sin(angle) * RADIUS;
            const isActive = i === active;
            return (
              <motion.div
                key={p.label}
                className="absolute top-1/2 left-1/2 w-24"
                style={{ x, y, translateX: "-50%", translateY: "-50%" }}
              >
                <motion.div
                  animate={{
                    scale: isActive ? 1.12 : 1,
                    borderColor: isActive ? "hsl(158 84% 52% / 0.7)" : "hsl(220 28% 16%)",
                  }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center gap-1.5 rounded-2xl border bg-surface/70 backdrop-blur px-2 py-3 text-center"
                >
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                      isActive ? "bg-accent-green/20 text-accent-green" : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    <p.icon size={16} />
                  </div>
                  <div className="text-[11px] font-display font-semibold text-foreground leading-none">
                    {p.label}
                  </div>
                  <div className="text-[9px] text-muted-foreground leading-tight">{p.desc}</div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* mobile — vertical stepper (radial layout overflows narrow screens) */}
        <div className="sm:hidden max-w-sm mx-auto">
          <div className="relative">
            <span className="absolute left-[18px] top-3 bottom-3 w-px bg-gradient-to-b from-accent-blue via-accent-green to-accent-blue opacity-40" />
            <div className="space-y-3">
              {phases.map((p, i) => {
                const isActive = i === active;
                return (
                  <div key={p.label} className="flex items-center gap-3 relative">
                    <div className={`shrink-0 w-9 h-9 rounded-xl flex items-center justify-center ring-4 ring-background z-10 transition-colors ${isActive ? "bg-accent-green/20 text-accent-green" : "bg-secondary text-muted-foreground"}`}>
                      <p.icon size={16} />
                    </div>
                    <div className={`flex-1 rounded-xl border px-3.5 py-2.5 transition-colors ${isActive ? "border-accent-green/50 bg-accent-green/5" : "border-border bg-surface/40"}`}>
                      <div className="text-sm font-display font-semibold text-foreground">{p.label}</div>
                      <div className="text-xs text-muted-foreground">{p.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-14 sm:mt-16 flex flex-wrap justify-center gap-3">
          {["Edge", "6G Real-Time", "Cloud"].map((m) => (
            <span key={m} className="px-4 py-1.5 rounded-full border border-accent-green/30 bg-accent-green/5 text-sm font-mono uppercase tracking-wider text-accent-green">
              {m}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
