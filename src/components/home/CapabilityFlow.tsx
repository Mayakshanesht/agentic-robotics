import { motion } from "framer-motion";
import { MessageSquare, Sparkles, BrainCircuit, Rocket, RefreshCcw, ArrowRight } from "lucide-react";

const steps = [
  { icon: MessageSquare, label: "Capability Request", sub: "Describe the task", icon_cls: "text-accent-blue", bg_cls: "bg-accent-blue/10" },
  { icon: Sparkles, label: "Synthetic Experience", sub: "Multimodal 4D worlds", icon_cls: "text-accent-blue", bg_cls: "bg-accent-blue/10" },
  { icon: BrainCircuit, label: "Training", sub: "Foundation models · VLA", icon_cls: "text-orange-accent", bg_cls: "bg-orange-accent/10" },
  { icon: Rocket, label: "Deployment", sub: "ROS 2 capability", icon_cls: "text-accent-green", bg_cls: "bg-accent-green/10" },
  { icon: RefreshCcw, label: "Continuous Improvement", sub: "Closed-loop learning", icon_cls: "text-accent-green", bg_cls: "bg-accent-green/10" },
];

export function CapabilityFlow() {
  return (
    <section className="section-spacing border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-60 pointer-events-none" />
      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full text-[10px] font-mono uppercase tracking-wider border border-accent-blue/30 bg-accent-blue/5 text-accent-blue">
            How it works
          </div>
          <h2 className="font-display font-bold text-3xl lg:text-5xl mb-4">
            From a task description to a{" "}
            <span className="text-gradient-blue">deployed capability.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            One closed loop. Five stages. Every deployment makes the next one stronger.
          </p>
        </motion.div>

        <div className="relative">
          {/* connecting line on desktop */}
          <div className="hidden lg:block absolute top-12 left-[6%] right-[6%] h-px bg-gradient-to-r from-accent-blue/40 via-orange-accent/40 to-accent-green/40" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-3">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className={`relative w-24 h-24 rounded-2xl bg-background border border-border shadow-md flex items-center justify-center mb-4 group hover:-translate-y-1 transition-transform`}>
                    <div className={`absolute inset-0 rounded-2xl ${s.bg_cls} opacity-0 group-hover:opacity-100 transition-opacity`} />
                    <Icon className={`${s.icon_cls} relative z-10`} size={36} />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-foreground text-background text-[10px] font-mono font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                  <div className="font-display font-semibold text-sm text-foreground mb-1">{s.label}</div>
                  <div className="text-[11px] font-mono text-muted-foreground">{s.sub}</div>
                  {i < steps.length - 1 && (
                    <ArrowRight className="hidden lg:block absolute top-10 -right-4 text-muted-foreground/40" size={16} />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
