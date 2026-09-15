import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MessageSquare } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { HeroBackdrop } from "@/components/HeroBackdrop";
import { PricingSteps } from "@/components/landing/BusinessModel";

export default function Pricing() {
  return (
    <PageShell
      title="Pricing - CloudBee Robotics"
      description="Free to start, usage to build, subscription to run: a free pilot demo, DataForge and ModelLab billed by GPU credits used, and AgenticOS and KineBridge as a per-robot annual subscription."
      path="/pricing"
    >
      <section className="relative pt-32 lg:pt-40 pb-16 bg-hero-gradient overflow-hidden">
        <HeroBackdrop accent="blue" />
        <div className="section-container relative z-10 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="text-xs font-mono uppercase tracking-wider text-accent-blue mb-4">Business model · How customers pay</div>
            <h1 className="font-display font-bold text-4xl lg:text-6xl leading-tight mb-5">
              Free to start. <span className="text-gradient-blue">Usage to build, subscription to run.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Customers begin with a free pilot demo, pay for the GPU credits they use while building data and models, and
              subscribe per robot once capabilities run on their hardware. Rates are shared on request.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-spacing border-t border-border bg-surface/30">
        <div className="section-container">
          <PricingSteps />
        </div>
      </section>

      <section className="section-spacing border-t border-border">
        <div className="section-container">
          <div className="card-3d border-gradient mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 p-8 lg:flex-row lg:items-center lg:p-10">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-blue/10 text-accent-blue">
                <MessageSquare size={22} />
              </div>
              <div>
                <h2 className="font-display font-bold text-2xl lg:text-3xl">Rates are shared on request.</h2>
                <p className="mt-2 max-w-xl text-muted-foreground">
                  Tell us about your task, your robots and your work cell, and we'll come back with a proposal.
                </p>
              </div>
            </div>
            <Link to="/contact" className="btn-pilot shrink-0">
              Contact us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
