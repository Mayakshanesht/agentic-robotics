import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { DemoVideo } from "@/components/DemoVideo";
import demoVideo from "@/assets/videos/cloudbee-demo.mp4.asset.json";

const highlights = [
  {
    tag: "AgenticOS",
    title: "Long-horizon work, executed autonomously",
    body: "Complex multi-step tasks run end to end — with autonomous recovery when reality does not match the plan.",
  },
  {
    tag: "KineBridge",
    title: "Validated in simulation, deployed in one click",
    body: "Every capability is safety-assessed and validated before it ever touches your hardware.",
  },
];

export function AgenticDemoHighlight() {
  return (
    <section className="relative border-t border-border overflow-hidden py-24 lg:py-32">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[760px] h-[760px] rounded-full bg-accent-blue/10 blur-[170px] pointer-events-none" />
      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-accent-blue mb-4">
            Highlight · AgenticOS × KineBridge
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight">
            See a capability{" "}
            <span className="text-gradient-blue">run itself.</span>
          </h2>
          <p className="mt-5 text-base lg:text-lg text-muted-foreground max-w-2xl">
            From task request to validated execution on real hardware — one continuous loop.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl overflow-hidden border border-accent-blue/30 bg-surface shadow-[0_40px_100px_-40px_hsl(210_90%_50%/0.4)] aspect-video"
        >
          <DemoVideo src={demoVideo.url} label="CloudBee Robotics AgenticOS and KineBridge demo" />
          <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur border border-accent-green/30 text-[10px] font-mono uppercase tracking-[0.22em] text-accent-green">
            <span className="w-1 h-1 rounded-full bg-accent-green animate-pulse" />
            AgenticOS · KineBridge · Live
          </div>
        </motion.div>

        <div className="mt-10 grid sm:grid-cols-2 gap-5 lg:gap-6">
          {highlights.map((h, i) => (
            <motion.div
              key={h.tag}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-surface/40 p-7"
            >
              <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-accent-blue mb-3">
                {h.tag}
              </div>
              <h3 className="font-display font-semibold text-xl lg:text-2xl leading-tight">{h.title}</h3>
              <p className="mt-3 text-[15px] text-muted-foreground leading-relaxed">{h.body}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            to="/product"
            className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-[0.2em] text-accent-blue hover:gap-3 transition-all"
          >
            Explore the platform <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
