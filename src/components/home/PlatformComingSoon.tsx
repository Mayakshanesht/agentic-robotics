import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const pipeline = [
  { name: "Capability Compiler", desc: "Natural language → validated capability graph", color: "from-accent-blue to-violet-500" },
  { name: "DataForge", desc: "Physics-accurate synthetic experience at scale", color: "from-cyan-400 to-accent-blue" },
  { name: "Model Lab", desc: "Train & evaluate multimodal foundation policies", color: "from-violet-500 to-fuchsia-500" },
  { name: "Agentic OS", desc: "Coordinate multi-robot fleets that self-improve", color: "from-orange-accent to-amber-400" },
  { name: "Deploy", desc: "Edge or cloud - OTA self-improving loop", color: "from-accent-green to-emerald-400" },
];

export function PlatformComingSoon() {
  return (
    <section id="platform" className="relative py-28 lg:py-40 border-t border-border overflow-hidden">
      <div className="absolute inset-0 aurora opacity-60 pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-[0.08] pointer-events-none" />

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent-green/40 bg-accent-green/10 backdrop-blur mb-6">
            <Sparkles size={13} className="text-accent-green" />
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-accent-green">
              Cloud Platform · Coming Soon
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl lg:text-6xl leading-[1.02] tracking-tight">
            The full platform,{" "}
            <span className="text-gradient-mixed">in your browser.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            We're releasing the CloudBee Robotics cloud platform for teams to onboard new robots
            in days, not months - type a task, generate synthetic experience, train policies
            and deploy a self-improving fleet end-to-end. No infrastructure to build.
          </p>
        </motion.div>

        {/* Animated pipeline */}
        <div className="relative">
          <div className="grid md:grid-cols-5 gap-4">
            {pipeline.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-3d border-gradient relative p-6 group"
              >
                <div className="text-[10px] font-mono text-muted-foreground mb-3">
                  STAGE {i + 1}
                </div>
                <div className={`h-1 w-10 rounded-full bg-gradient-to-r ${p.color} mb-4`} />
                <div className="font-display font-semibold text-base lg:text-lg text-foreground leading-tight">
                  {p.name}
                </div>
                <div className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  {p.desc}
                </div>
                {i < pipeline.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 z-10 text-accent-blue/50">
                    <ArrowRight size={18} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Waitlist CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 text-center"
        >
          <Link to="/request-access" className="btn-pilot text-base px-7 py-3.5">
            Request Early Access <ArrowRight size={16} />
          </Link>
          <span className="text-sm text-muted-foreground font-mono">
            Private beta · Onboarding pilot teams now
          </span>
        </motion.div>
      </div>
    </section>
  );
}
