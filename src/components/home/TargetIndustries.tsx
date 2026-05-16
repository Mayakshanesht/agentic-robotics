import { motion } from "framer-motion";
import { Factory, Bot, HeartPulse, Car, Sparkles, Boxes, Cog, Database, Truck } from "lucide-react";

const hardware = [
  { icon: Bot, label: "Humanoids", desc: "Unitree, Figure, and other bipedal platforms." },
  { icon: Cog, label: "Robotic Arms", desc: "6-/7-DoF manipulators for cells and cobots." },
  { icon: Truck, label: "AMRs", desc: "Autonomous mobile robots for intralogistics." },
];

const industries = [
  { icon: Car, title: "Automotive & Mobility", body: "Robotic cells for assembly, kitting, and inline QA — including arm-based stations and AMR-fed lines." },
  { icon: Factory, title: "Industrial Manufacturing", body: "Automate complex assembly, material handling, and inspection across humanoids, arms, and AMRs." },
  { icon: Boxes, title: "Logistics & Warehousing", body: "AMR fleets and pick-and-place arms orchestrated through one autonomous runtime." },
  { icon: Bot, title: "Humanoid Robotics", body: "Onboard humanoids fast with custom skill stacks and safety constraints." },
  { icon: HeartPulse, title: "Healthcare & Assisted Living", body: "Reliable, safe robots — mobile and manipulator — in sensitive environments." },
  { icon: Database, title: "Computer Vision & AI R&D", body: "Reuse our 4D synthetic datasets for perception, detection, and foundation-model training beyond robotics." },
  { icon: Sparkles, title: "Service Robotics", body: "From task spec to live deployment, autonomously — across form factors." },
];

export function TargetIndustries() {
  return (
    <section className="section-spacing bg-surface/40 border-y border-border">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full text-[10px] font-mono uppercase tracking-wider border border-accent-blue/30 bg-accent-blue/5 text-accent-blue">
            Hardware & Industries
          </div>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-3">
            Built for <span className="text-gradient-blue">Real-World Deployments</span>
          </h2>
          <p className="text-muted-foreground text-base">
            One operating system across humanoids, robotic arms, and autonomous mobile robots — with datasets reusable for broader CV and AI work.
          </p>
        </motion.div>

        {/* Hardware coverage strip */}
        <div className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
          {hardware.map((h, i) => {
            const Icon = h.icon;
            return (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="glass-card p-5 flex items-start gap-3"
              >
                <div className="w-9 h-9 rounded-lg bg-accent-blue/10 text-accent-blue flex items-center justify-center shrink-0">
                  <Icon size={18} />
                </div>
                <div>
                  <div className="text-sm font-display font-semibold text-foreground">{h.label}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{h.desc}</div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Industries grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {industries.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="glass-card p-6"
              >
                <div className="w-10 h-10 rounded-lg bg-accent-green/10 text-accent-green flex items-center justify-center mb-4">
                  <Icon size={18} />
                </div>
                <h3 className="font-display font-semibold text-base mb-2 text-foreground">{it.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{it.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
