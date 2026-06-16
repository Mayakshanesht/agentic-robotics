import { motion } from "framer-motion";
import { Award, CheckCircle2, Briefcase, Lightbulb } from "lucide-react";

const milestones = [
  {
    icon: Award,
    color: "text-accent-green",
    title: "EXIST Gründungsstipendium - Secured",
    desc: "German Federal Ministry funding - starting May 2026 - to build CloudBee Robotics from RWTH Aachen.",
  },
  {
    icon: Lightbulb,
    color: "text-accent-green",
    title: "RWTH Ideation Program - Completed (March 2026)",
    desc: "Graduated from RWTH Innovation Ideation - from problem-fit through halftime to final pitch.",
  },
  {
    icon: Briefcase,
    color: "text-accent-blue",
    title: "Deloitte Problem-Solution Fit - Completed",
    desc: "Full validation cycle with Deloitte: problem definition and solution direction signed off.",
  },
];

export function MilestoneBanner() {
  return (
    <section className="relative py-12 lg:py-14 border-y border-accent-green/20 bg-gradient-to-r from-accent-green/[0.04] via-accent-blue/[0.06] to-accent-green/[0.04] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10 justify-between"
        >
          <div className="flex items-center gap-3 shrink-0">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider border border-accent-green/40 bg-accent-green/10 text-accent-green">
              <CheckCircle2 size={12} /> New Milestones
            </span>
          </div>

          <div className="grid sm:grid-cols-3 gap-5 flex-1 w-full">
            {milestones.map((m) => {
              const Icon = m.icon;
              return (
                <div key={m.title} className="flex items-start gap-3">
                  <Icon size={20} className={`${m.color} mt-0.5 shrink-0`} />
                  <div>
                    <div className="text-sm font-display font-semibold text-foreground">{m.title}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{m.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
