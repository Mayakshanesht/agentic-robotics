import { motion } from "framer-motion";
import { FileText, Sparkles, ShieldCheck, Rocket, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import capabilityVideo from "@/assets/videos/capability-compiler.mp4.asset.json";

const inputs = ["Text", "Video", "SOPs", "Demonstrations"];

const stages = [
  { icon: FileText, title: "Understands your process", body: "From documents, video, or a short demo." },
  { icon: Sparkles, title: "Compiles capabilities", body: "A structured graph the platform can act on." },
  { icon: ShieldCheck, title: "Validated for safety", body: "Every capability comes with a safety envelope." },
  { icon: Rocket, title: "Deployed & improving", body: "Runs on your hardware, learns from every shift." },
];

export function CapabilityCompilerFeature() {
  return (
    <section id="capability-compiler" className="relative py-24 lg:py-32 border-t border-border overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[720px] h-[720px] rounded-full bg-accent-blue/10 blur-[160px] pointer-events-none" />

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent-blue/40 bg-accent-blue/10 backdrop-blur mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-accent-blue">Flagship · Capability Compiler</span>
          </div>
          <h2 className="font-display font-bold text-4xl lg:text-6xl leading-[1.02] tracking-tight">
            Describe the work.{" "}
            <span className="text-gradient-blue">Get a working capability.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Turn any process into a safety-validated capability your robots can run — without writing custom code for every task.
          </p>
        </motion.div>

        {/* Video */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative mb-16 rounded-2xl overflow-hidden border border-border shadow-[0_30px_80px_-30px_hsl(210_90%_50%/0.35)] bg-surface"
        >
          <video
            src={capabilityVideo.url}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            controlsList="nodownload noremoteplayback noplaybackrate"
            disablePictureInPicture
            onContextMenu={(e) => e.preventDefault()}
            className="w-full h-auto aspect-video object-cover pointer-events-none select-none"
            aria-label="Capability Compiler demonstration"
          />
          <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur border border-accent-blue/30 text-[10px] font-mono uppercase tracking-[0.22em] text-accent-blue">
            <span className="w-1 h-1 rounded-full bg-accent-green animate-pulse" />
            Capability Compiler · Live
          </div>
        </motion.div>

        {/* input chips */}
        <div className="flex flex-wrap gap-2 mb-10">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground self-center mr-2">Works from</span>
          {inputs.map((c) => (
            <span key={c} className="px-3 py-1.5 rounded-full border border-border bg-surface/50 text-xs font-mono text-foreground/80">
              {c}
            </span>
          ))}
        </div>

        {/* stages */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stages.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="rounded-2xl border border-border bg-surface/40 p-5 hover:border-accent-blue/40 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl border border-accent-blue/30 bg-accent-blue/10 flex items-center justify-center text-accent-blue mb-4">
                <s.icon size={18} />
              </div>
              <div className="font-display font-semibold text-lg text-foreground leading-tight">{s.title}</div>
              <div className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.body}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-[0.2em] text-accent-blue hover:gap-3 transition-all"
          >
            See it on your process <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
