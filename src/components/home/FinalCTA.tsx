import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const bullets = [
  "Onboarding select pilot partners",
  "Hardware-agnostic via ROS2",
  "Safety-constrained by design",
];

export function FinalCTA() {
  return (
    <section className="relative section-spacing overflow-hidden border-t border-border">
      <div className="absolute inset-0 bg-mesh opacity-90" />
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div
        className="absolute inset-x-0 -top-1/2 h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, hsl(196 100% 47% / 0.18) 0%, transparent 60%)" }}
      />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card max-w-5xl mx-auto p-10 lg:p-14 relative overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-accent-blue/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-accent-green/10 blur-3xl pointer-events-none" />

          <div className="relative grid lg:grid-cols-5 gap-10 items-center">
            <div className="lg:col-span-3">
              <div className="text-xs font-mono uppercase tracking-wider text-accent-blue mb-4">
                Pilot Program · 2026
              </div>
              <h2 className="font-display font-bold text-3xl lg:text-5xl leading-tight mb-5">
                Ready to deploy <br className="hidden lg:block" />
                <span className="text-gradient-blue">autonomous intelligence?</span>
              </h2>
              <p className="text-muted-foreground text-base lg:text-lg max-w-xl">
                Whether you're scaling a fleet of humanoids or automating an industrial line — we work
                directly with select partners to ship production-grade autonomy.
              </p>
              <ul className="mt-6 space-y-2">
                {bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle2 size={16} className="text-accent-green shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2 flex flex-col gap-3">
              <Link to="/contact" className="btn-pilot text-base px-7 py-3.5 w-full">
                Apply for a Pilot <ArrowRight size={16} />
              </Link>
              <Link
                to="/product"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm border border-accent-blue/40 text-foreground hover:bg-accent-blue/10 hover:border-accent-blue/70 transition-all w-full"
              >
                Explore the Platform
              </Link>
              <div className="mt-3 text-xs font-mono text-muted-foreground text-center">
                info@cloudbeerobotics.de · Aachen, DE
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
