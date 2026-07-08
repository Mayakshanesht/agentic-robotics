import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function FinalStatement() {
  return (
    <section className="relative py-40 lg:py-56 border-t border-border overflow-hidden">
      <div className="absolute inset-0 aurora opacity-70 pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-[0.06] pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full conic-halo opacity-20 blur-[100px] pointer-events-none" />

      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[10px] font-mono uppercase tracking-[0.35em] text-accent-blue mb-8"
        >
          Our vision · The AWS of Robotics
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="font-display font-bold mx-auto max-w-4xl text-5xl sm:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tight"
        >
          Describe the task.{" "}
          <span className="text-gradient-green">Get a deployed robot.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-8 mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed"
        >
          In ten years, ordering a robot capability will be as easy as spinning up a server.
          We're building the infrastructure to make that ordinary.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/contact" className="btn-pilot text-base px-8 py-4">
            Book a demo <ArrowRight size={16} />
          </Link>
          <Link
            to="/request-access"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-sm border border-foreground/15 text-foreground hover:bg-foreground/5 transition-all"
          >
            Request early access
          </Link>
        </motion.div>

        <div className="mt-10 text-xs font-mono text-muted-foreground">
          mayur.waghchoure@cloudbeerobotics.com · Aachen, Germany
        </div>
      </div>
    </section>
  );
}
