import { motion } from "framer-motion";
import { Award, GraduationCap, CheckCircle2 } from "lucide-react";

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
            <div className="flex items-start gap-3">
              <Award size={20} className="text-accent-green mt-0.5 shrink-0" />
              <div>
                <div className="text-sm font-display font-semibold text-foreground">EXIST Research Transfer Grant — Secured</div>
                <div className="text-xs text-muted-foreground mt-0.5">German Federal Ministry funding to build CloudBee Robotics from RWTH Aachen.</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 size={20} className="text-accent-blue mt-0.5 shrink-0" />
              <div>
                <div className="text-sm font-display font-semibold text-foreground">RWTH Ideation Program — Completed</div>
                <div className="text-xs text-muted-foreground mt-0.5">Full validation cycle through RWTH Innovation, from problem-fit to halftime to graduation.</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <GraduationCap size={20} className="text-accent-green mt-0.5 shrink-0" />
              <div>
                <div className="text-sm font-display font-semibold text-foreground">Academic Mentor: Prof. Dr. Bastian Leibe</div>
                <div className="text-xs text-muted-foreground mt-0.5">Computer Vision Group, RWTH Aachen — world-class research backing.</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
