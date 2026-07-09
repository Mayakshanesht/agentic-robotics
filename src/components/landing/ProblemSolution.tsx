import { motion } from "framer-motion";
import { ArrowRight, Clock, Workflow, ShieldCheck, Boxes, Rocket, RefreshCw, Sparkles, Newspaper } from "lucide-react";
import { Link } from "react-router-dom";
import founderKeynote from "@/assets/founder-keynote.jpeg.asset.json";
import ideationPitch from "@/assets/ideation-pitch.jpg";

const hardWay = [
  { icon: Clock, t: "Months collecting real-world data" },
  { icon: Workflow, t: "Hand-teleoperating every new task" },
  { icon: Boxes, t: "Bespoke simulators, no reuse" },
  { icon: RefreshCw, t: "Endless retraining, brittle policies" },
  { icon: ShieldCheck, t: "Safety bolted on at the end" },
];

const cloudbeeWay = [
  { icon: Workflow, t: "Capabilities compiled from your process" },
  { icon: Boxes, t: "Multimodal synthetic experience at scale" },
  { icon: ShieldCheck, t: "Safety-validated in closed-loop sim" },
  { icon: Rocket, t: "One-click deploy on ROS 2, any robot" },
  { icon: RefreshCw, t: "Self-improves autonomously in the field" },
];

const news = [
  {
    tag: "Live · Nov 2026",
    title: "Meet us at founders.festival",
    body: "CloudBee Robotics has a booth — come see live capability compilation and talk Physical AI with the founders.",
    href: "https://www.linkedin.com/posts/mayur-waghchoure_founders-startup-week-share-7478130538252484609-KSGr/",
    color: "text-accent-green",
  },
  {
    tag: "RWTH Ideation",
    title: "Pitched CloudBee at RWTH Innovation",
    body: "Founder Mayur Waghchoure presented CloudBee's Capability Factory to the RWTH Aachen innovation community.",
    href: "https://www.rwth-innovation.de/",
    color: "text-accent-blue",
  },
];

export function ProblemSolution() {
  return (
    <section className="relative py-24 lg:py-36 border-t border-border overflow-hidden bg-gradient-to-b from-background via-surface/40 to-background">
      <div className="absolute inset-0 grid-bg opacity-[0.05] pointer-events-none" />
      <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full bg-accent-blue/[0.07] blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[400px] rounded-full bg-accent-green/[0.06] blur-[140px] pointer-events-none" />

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14"
        >
          <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-accent-blue mb-4">
            <Sparkles size={12} /> The Problem · The Solution
          </div>
          <h2 className="font-display font-bold text-4xl lg:text-6xl leading-[1.0] tracking-tight">
            Physical AI is still built{" "}
            <span className="text-gradient-orange">the hard way.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Teams burn months on the same broken loop — data collection, teleop, bespoke sims,
            retraining, then safety at the end. CloudBee Robotics collapses that into one
            continuous, self-improving pipeline.
          </p>
        </motion.div>

        {/* Split comparison — modern card design */}
        <div className="grid lg:grid-cols-2 gap-5 lg:gap-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl border border-border bg-background/60 backdrop-blur-sm p-7 lg:p-9 overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-destructive/40 to-transparent" />
            <div className="flex items-baseline justify-between mb-8">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-[0.28em] text-destructive/80 mb-2">Status quo</div>
                <div className="font-display font-bold text-2xl text-foreground/90">The hard way</div>
              </div>
              <div className="text-[10px] font-mono text-muted-foreground">6–18 months</div>
            </div>
            <ul className="space-y-2.5">
              {hardWay.map((p, i) => (
                <motion.li
                  key={p.t}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl border border-border/60 bg-surface/30"
                >
                  <span className="shrink-0 w-8 h-8 rounded-lg bg-destructive/10 text-destructive/70 flex items-center justify-center">
                    <p.icon size={14} />
                  </span>
                  <span className="text-sm text-muted-foreground line-through decoration-destructive/30">{p.t}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-3xl border border-accent-blue/25 bg-gradient-to-br from-accent-blue/[0.06] via-background/70 to-accent-green/[0.06] backdrop-blur-sm p-7 lg:p-9 overflow-hidden shadow-[0_30px_80px_-40px_hsl(var(--accent-blue)/0.35)]"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-green/60 to-transparent" />
            <div className="flex items-baseline justify-between mb-8">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-[0.28em] text-accent-green mb-2">The CloudBee way</div>
                <div className="font-display font-bold text-2xl text-foreground">The Capability Factory</div>
              </div>
              <div className="text-[10px] font-mono text-accent-blue">3–4 weeks · 1 engineer</div>
            </div>
            <ul className="space-y-2.5 relative">
              <span className="absolute left-[15px] top-4 bottom-4 w-px bg-gradient-to-b from-accent-blue via-accent-green to-accent-blue opacity-30" />
              {cloudbeeWay.map((s, i) => (
                <motion.li
                  key={s.t}
                  initial={{ opacity: 0, x: 8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.06 }}
                  className="flex items-center gap-3 relative"
                >
                  <span className="shrink-0 w-8 h-8 rounded-lg bg-accent-green/15 text-accent-green flex items-center justify-center ring-4 ring-background z-10">
                    <s.icon size={14} />
                  </span>
                  <span className="text-sm font-medium text-foreground">{s.t}</span>
                </motion.li>
              ))}
            </ul>
            <div className="mt-7 pt-6 border-t border-border/60 flex items-center justify-between gap-4">
              <div className="text-xs text-muted-foreground">5× cheaper · deployed in weeks</div>
              <Link to="/product" className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-blue hover:gap-2 transition-all">
                See how it works <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Founder + News strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-[1.15fr_1fr] gap-6 rounded-3xl border border-border bg-background/70 backdrop-blur-sm p-4 lg:p-5 overflow-hidden"
        >
          {/* Founder image */}
          <div className="relative aspect-[16/10] lg:aspect-auto rounded-2xl overflow-hidden group">
            <img
              src={founderKeynote.url}
              alt="CloudBee Robotics founder presenting keynote"
              className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-7">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent-blue/20 border border-accent-blue/40 backdrop-blur-md mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse" />
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-accent-blue">On stage</span>
              </div>
              <div className="font-display font-semibold text-lg lg:text-xl text-foreground">
                Building Europe's Physical AI infrastructure
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                Mayur Waghchoure · Founder & CEO · CloudBee Robotics
              </div>
            </div>
          </div>

          {/* News list */}
          <div className="flex flex-col p-3 lg:p-5">
            <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.28em] text-accent-green mb-5">
              <Newspaper size={12} /> Newsroom
            </div>
            <div className="flex flex-col gap-3">
              {news.map((n, i) => (
                <motion.a
                  key={n.title}
                  href={n.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                  className="group rounded-2xl border border-border/70 bg-surface/40 p-4 lg:p-5 hover:border-accent-blue/40 hover:bg-surface/70 transition-all"
                >
                  <div className={`text-[10px] font-mono uppercase tracking-[0.22em] text-${n.color} mb-1.5`}>
                    {n.tag}
                  </div>
                  <div className="font-display font-semibold text-base text-foreground group-hover:text-accent-blue transition-colors">
                    {n.title}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                    {n.body}
                  </div>
                  <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-accent-blue">
                    Read more <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
