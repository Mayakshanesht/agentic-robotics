import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative section-spacing overflow-hidden border-t border-border">
      <div className="absolute inset-0 bg-mesh opacity-80" />
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-display font-bold text-3xl lg:text-5xl mb-4 leading-tight">
            Ready to deploy <span className="text-gradient-blue">autonomous intelligence?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We're onboarding select pilot partners now.
          </p>
          <Link to="/contact" className="btn-pilot text-base px-7 py-3">
            Apply for a Pilot <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
