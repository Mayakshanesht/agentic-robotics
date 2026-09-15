import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Flag, Lock, TrendingUp } from "lucide-react";
import { CONTACT_EMAIL, preSeedMilestones, preSeedUseOfFunds } from "@/data/company";

const deckMailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Pre-seed — deck request, CloudBee Robotics")}`;

export function PreSeed() {
  return (
    <section id="investors" className="relative py-24 lg:py-32 border-t border-border overflow-hidden scroll-mt-20">
      <div className="absolute -top-32 right-0 w-[520px] h-[520px] rounded-full bg-violet-500/10 blur-[140px] pointer-events-none" />
      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/40 bg-violet-500/10 mb-6">
            <TrendingUp size={13} className="text-violet-500" />
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-violet-600">For investors · Raising pre-seed</span>
          </div>
          <h2 className="font-display font-bold text-4xl lg:text-5xl leading-[1.03] tracking-tight">
            We're raising a pre-seed round{" "}
            <span className="text-gradient-blue">to turn pilots into deployments.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            CloudBee Robotics is EXIST-funded, has a WestAI compute grant, its own hardware lab and pilots running on four
            robot platforms. The pre-seed round funds the step from pilot to paid deployment.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="mb-4 text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground">What the round funds</div>
            <div className="grid gap-4 sm:grid-cols-2">
              {preSeedUseOfFunds.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="card-3d p-6"
                >
                  <div className="font-mono text-xs text-violet-600">0{i + 1}</div>
                  <h3 className="mt-2 font-display font-semibold text-lg text-foreground leading-snug">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card-3d border-gradient flex flex-col p-7"
          >
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-accent-green">
              <Flag size={12} /> Milestones it unlocks
            </div>
            <ul className="mt-4 space-y-3">
              {preSeedMilestones.map((m) => (
                <li key={m} className="flex gap-3 text-sm text-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-green" />
                  {m}
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-xl border border-border bg-surface/60 p-4 text-sm text-muted-foreground leading-relaxed">
              <div className="mb-1.5 flex items-center gap-1.5 font-semibold text-foreground">
                <Lock size={13} /> Shared under NDA
              </div>
              Round size and terms, financials, pilot results and the technical brief are shared with investors on request.
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <a href={deckMailto} className="btn-pilot w-full justify-center py-3">
                Request the deck <ArrowRight size={16} />
              </a>
              <Link
                to="/contact?interest=Investment"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-foreground/15 px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-foreground/5"
              >
                Talk to the founder
              </Link>
              <div className="text-center text-xs font-mono text-muted-foreground">{CONTACT_EMAIL}</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
