import { motion } from "framer-motion";
import { Quote, Target, Telescope } from "lucide-react";

export function MissionVision() {
  return (
    <section className="section-spacing border-t border-border">
      <div className="section-container">
        {/* Motto */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <Quote className="text-accent-blue/50 mx-auto mb-5" size={28} />
          <p className="font-display font-medium text-2xl lg:text-4xl leading-tight tracking-tight">
            <span className="text-foreground">Any robot.</span>{" "}
            <span className="text-muted-foreground">Any task.</span>{" "}
            <span className="text-gradient-blue">One operating system.</span>
          </p>
          <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/70 mt-5">
            Our motto
          </div>
        </motion.div>

        {/* Mission + Vision */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 relative overflow-hidden"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent-blue to-sky-400" />
            <div className="w-12 h-12 rounded-xl bg-accent-blue/10 text-accent-blue flex items-center justify-center mb-5">
              <Target size={22} />
            </div>
            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-accent-blue mb-2">Mission</div>
            <h3 className="font-display font-bold text-2xl mb-4 text-foreground">What we are building today.</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Replace months of teleoperation with synthetic 4D data, explainable VLA models, and an agentic ROS 2 runtime - for any humanoid, arm, or AMR.
            </p>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="glass-card p-8 relative overflow-hidden"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent-green to-emerald-400" />
            <div className="w-12 h-12 rounded-xl bg-accent-green/10 text-accent-green flex items-center justify-center mb-5">
              <Telescope size={22} />
            </div>
            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-accent-green mb-2">Vision</div>
            <h3 className="font-display font-bold text-2xl mb-4 text-foreground">A skill economy for physical intelligence.</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Every robot - in every factory, lab, and home - downloading new skills from the internet the way software does today. Europe leading a safe, explainable, hardware-agnostic infrastructure layer for embodied AI.
            </p>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
