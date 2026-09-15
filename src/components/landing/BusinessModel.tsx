import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Cpu, Gift, Repeat } from "lucide-react";
import { pricingModel } from "@/data/company";

const icons = [Gift, Cpu, Repeat];

/** How customers pay — the model only. Rates are shared on request, never on the site. */
export function BusinessModel() {
  return (
    <section id="pricing" className="relative py-24 lg:py-32 border-t border-border bg-surface/30 overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 grid-bg opacity-[0.05] pointer-events-none" />
      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-accent-blue mb-4">Business model · How customers pay</div>
          <h2 className="font-display font-bold text-4xl lg:text-5xl leading-[1.03] tracking-tight">
            Free to start.{" "}
            <span className="text-gradient-blue">Usage to build, subscription to run.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Customers begin with a free pilot demo, pay for the GPU credits they use while building data and models, and
            subscribe per robot once capabilities run on their hardware. Rates are shared on request.
          </p>
        </motion.div>

        <div className="relative grid gap-5 lg:grid-cols-3">
          <div className="absolute inset-x-[16%] top-[52px] hidden h-px bg-gradient-to-r from-accent-green via-accent-blue to-violet-500 opacity-50 lg:block" />
          {pricingModel.map((p, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-3d relative flex flex-col p-7"
              >
                <div className="flex items-center justify-between">
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-blue/10 text-accent-blue ring-4 ring-background">
                    <Icon size={22} />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground">
                    0{i + 1} · {p.step}
                  </span>
                </div>
                <h3 className="mt-5 font-display font-bold text-2xl text-foreground">{p.title}</h3>
                <div className="mt-1 text-sm font-medium text-accent-blue">{p.scope}</div>
                <p className="mt-3 flex-1 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                <div className="mt-6 inline-flex self-start rounded-full border border-accent-green/40 bg-accent-green/10 px-3 py-1.5 text-xs font-mono text-accent-green">
                  {p.billing}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link to="/contact?interest=Pilot%20Program" className="btn-pilot">
            Get a free pilot demo <ArrowRight size={16} />
          </Link>
          <Link to="/contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-blue hover:gap-2 transition-all">
            Contact us for rates <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
