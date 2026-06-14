import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Award, Beaker, Building2, Briefcase, CheckCircle2, Cpu } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { HeroBackdrop } from "@/components/HeroBackdrop";

const credibility = [
  { icon: GraduationCap, title: "RWTH Aachen University", body: "Part of one of Europe's leading technical university ecosystems." },
  { icon: Beaker, title: "IGMR Institute", body: "Research collaboration with the Institute of Mechanism Theory, Machine Dynamics and Robotics — validating CloudBee's platform through pilot and research projects." },
  { icon: Award, title: "EXIST Grant", body: "Awarded the German federal startup grant — backing the research and validating commercial and technical potential." },
  { icon: Cpu, title: "WestAI Compute Grant", body: "Awarded GPU compute through the WestAI AI Service Center to train and validate our multimodal robot foundation models at scale." },
  { icon: Building2, title: "Collective Incubator", body: "Backed by a leading deep-tech incubator." },
  { icon: Briefcase, title: "Industrial Traction", body: "Letter of Intent with a leading automotive Tier 1 partner." },
];

export default function Research() {
  return (
    <PageShell
      title="Research & Traction — CloudBee Robotics"
      description="Grounded in science. Validated in the field. Collaborations with RWTH Aachen, IGMR Institute, EXIST grant, Collective Incubator, and industry partners."
      path="/research"
    >
      <section className="relative pt-32 lg:pt-40 pb-16 bg-hero-gradient overflow-hidden">
        <HeroBackdrop accent="green" />
        <div className="section-container relative z-10 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="text-xs font-mono uppercase tracking-wider text-accent-green mb-4">Research & Traction</div>
            <h1 className="font-display font-bold text-4xl lg:text-6xl leading-tight mb-5">
              Grounded in <span className="text-gradient-blue">Science.</span> <br />
              Validated in the <span className="text-gradient-green">Field.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="section-spacing border-t border-border">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {credibility.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="glass-card p-6 flex gap-4"
                >
                  <div className="w-11 h-11 rounded-lg bg-accent-blue/10 text-accent-blue flex items-center justify-center shrink-0">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-1.5 text-foreground">{c.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{c.body}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Pull quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto mt-16 text-center"
          >
            <div className="text-5xl text-accent-blue/40 mb-2 font-display leading-none">"</div>
            <p className="font-display text-xl lg:text-2xl text-foreground leading-relaxed">
              Our research collaboration with IGMR at RWTH Aachen gives us access to world-class robotics validation infrastructure and academic rigor at every stage.
            </p>
          </motion.blockquote>

          {/* Pilots Underway */}
          <div className="max-w-3xl mx-auto mt-16 glass-card p-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-accent-green/30 bg-accent-green/10 text-xs font-mono text-accent-green">
              <CheckCircle2 size={12} /> Pilots Underway
            </div>
            <h3 className="font-display font-bold text-2xl mb-3">Become a Pilot Partner</h3>
            <p className="text-muted-foreground mb-6">
              We are currently running functional pilots. If you're interested in becoming a pilot partner, reach out.
            </p>
            <Link to="/contact" className="btn-pilot">
              Become a Pilot Partner <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
