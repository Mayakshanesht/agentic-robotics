import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import founderImg from "@/assets/hero/founder-presenting.jpeg";

export function FounderMoment() {
  return (
    <section className="relative py-28 lg:py-40 border-t border-border overflow-hidden">
      <div className="absolute -bottom-32 left-0 w-[480px] h-[480px] rounded-full bg-accent-green/10 blur-[150px] pointer-events-none" />
      <div className="section-container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="card-3d border-gradient overflow-hidden">
              <img
                src={founderImg}
                alt="CloudBee founder presenting Physical AI at a pitch event"
                className="w-full h-full object-cover aspect-[4/3]"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 left-6 px-4 py-2 rounded-xl bg-background/80 backdrop-blur border border-accent-blue/30">
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-accent-blue">On stage · Aachen</div>
              <div className="text-sm font-display font-semibold text-foreground">Pitching Physical AI</div>
            </div>
          </motion.div>

          {/* story */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-accent-green mb-5">
              Built in Aachen · Backed by RWTH & EXIST
            </div>
            <blockquote className="font-display font-bold text-2xl lg:text-4xl leading-[1.15] tracking-tight text-foreground">
              "Every factory has the work written down. We turn that knowledge into robots that
              <span className="text-gradient-green"> do the job — and get better at it.</span>"
            </blockquote>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-xl">
              CloudBee is a deep-tech spin-off out of RWTH Aachen, building the capability factory for
              physical AI. From a sentence to a self-improving fleet — that's the mission.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/team" className="btn-pilot">
                Meet the team <ArrowRight size={16} />
              </Link>
              <Link
                to="/research"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm border border-foreground/15 text-foreground hover:bg-foreground/5 transition-all"
              >
                Research & traction
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
