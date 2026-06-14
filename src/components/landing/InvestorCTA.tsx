import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TrendingUp, ArrowRight } from "lucide-react";

const points = [
  "€multi-trillion physical-AI market forming now",
  "Deep-tech moat: capability compiler + self-improving loop",
  "RWTH-backed, EXIST-funded, early industrial LOIs",
];

export function InvestorCTA() {
  return (
    <section className="relative py-24 lg:py-32 border-t border-border overflow-hidden">
      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="card-3d border-gradient p-10 lg:p-14 relative overflow-hidden"
        >
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-violet-500/15 blur-3xl pointer-events-none" />
          <div className="relative grid lg:grid-cols-5 gap-10 items-center">
            <div className="lg:col-span-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/40 bg-violet-500/10 mb-6">
                <TrendingUp size={13} className="text-violet-300" />
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-violet-300">For Investors</span>
              </div>
              <h2 className="font-display font-bold text-3xl lg:text-5xl leading-[1.05] tracking-tight">
                Backing the layer that puts{" "}
                <span className="text-gradient-blue">robots to work.</span>
              </h2>
              <ul className="mt-7 space-y-2.5">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm lg:text-base text-foreground/85">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-2 flex flex-col gap-3">
              <Link
                to="/contact?interest=Investment"
                className="btn-pilot text-base px-7 py-3.5 w-full justify-center"
              >
                Talk to us <ArrowRight size={16} />
              </Link>
              <a
                href="mailto:info@cloudbeerobotics.de?subject=Investment%20Interest%20%E2%80%94%20CloudBee%20Robotics"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm border border-foreground/15 text-foreground hover:bg-foreground/5 transition-all w-full"
              >
                Request the deck
              </a>
              <div className="text-xs font-mono text-muted-foreground text-center mt-2">
                info@cloudbeerobotics.de · Aachen, DE
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
