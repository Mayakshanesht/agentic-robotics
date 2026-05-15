import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Rocket, Brain, FlaskConical, Wrench, Globe2 } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { JobApplicationDialog } from "@/components/JobApplicationDialog";

const values = [
  { icon: FlaskConical, title: "Research-first", body: "We work at the frontier, not behind it." },
  { icon: Wrench, title: "Build to ship", body: "Research that doesn't deploy doesn't count." },
  { icon: Globe2, title: "Europe's physical AI hub", body: "Deep roots in Aachen's tech ecosystem." },
];

export default function Careers() {
  const [openRole, setOpenRole] = useState<string | null>(null);

  return (
    <PageShell
      title="Careers — CloudBee Robotics"
      description="Join the team building the future of physical AI. Open roles for AI Engineers and Research Scientists in Aachen, Germany. EXIST grant supported."
      path="/careers"
    >
      <section className="relative pt-32 lg:pt-40 pb-16 bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="section-container relative z-10 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="text-xs font-mono uppercase tracking-wider text-accent-blue mb-4">Careers</div>
            <h1 className="font-display font-bold text-4xl lg:text-6xl leading-tight mb-5">
              Join the Team Building the <span className="text-gradient-blue">Future of Physical AI</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mb-6">
              CloudBee is an early-stage deep-tech startup. We're looking for exceptional people who want to do the most important work of their careers.
            </p>
            <div className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground px-3 py-2 rounded-md border border-border bg-surface/60">
              <MapPin size={14} className="text-accent-blue" />
              Aachen, Germany · EXIST Grant Supported · RWTH Aachen Ecosystem
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-spacing border-t border-border">
        <div className="section-container max-w-5xl">
          <h2 className="font-display font-bold text-2xl lg:text-3xl mb-8">Open Roles</h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 lg:p-10 mb-6 border-accent-blue/40 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 px-3 py-1 text-xs font-mono uppercase tracking-wider bg-accent-blue text-primary-foreground rounded-bl-lg">
              Featured
            </div>

            <div className="flex items-start gap-4 mb-2">
              <Rocket className="text-accent-blue mt-1" size={22} />
              <div>
                <h3 className="font-display font-bold text-2xl lg:text-3xl text-foreground">
                  Research Scientist / Founding AI Engineer
                </h3>
                <div className="text-sm text-muted-foreground mt-1">Agentic AI & Robotics</div>
                <div className="text-xs font-mono text-muted-foreground mt-2">
                  Aachen, Germany · EU-based preferred · Full-time
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-6 text-sm text-muted-foreground leading-relaxed">
              <p>
                CloudBee Robotics is developing next-generation agentic physical AI systems at the intersection of robotics, synthetic data generation, embodied AI, and robotic foundation models. We are looking for a highly motivated Research Scientist / Founding AI Engineer to join our early core team.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-display font-semibold text-foreground mb-2">Areas of Work</h4>
                  <ul className="space-y-1.5 list-disc list-inside marker:text-accent-blue">
                    <li>Agentic AI & embodied intelligence</li>
                    <li>Robotic foundation models</li>
                    <li>Synthetic data generation</li>
                    <li>World models & video generation</li>
                    <li>NVIDIA Isaac Sim / Omniverse</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground mb-2">Preferred Background</h4>
                  <ul className="space-y-1.5 list-disc list-inside marker:text-accent-blue">
                    <li>PhD (ongoing/completed) in AI, Robotics, ML, CV — or strong industry experience</li>
                    <li>Experience with generative AI, multimodal systems, or robotics simulation</li>
                    <li>Strong engineering mindset</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground mb-2">What We Offer</h4>
                  <ul className="space-y-1.5 list-disc list-inside marker:text-accent-green">
                    <li>Founding team membership</li>
                    <li>Compensation aligned with EXIST norms</li>
                    <li>Meaningful equity participation</li>
                    <li>Research-driven environment</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-6 border-t border-border">
              <button onClick={() => setOpenRole("Research Scientist / Founding AI Engineer")} className="btn-pilot">
                Apply Now
              </button>
              <div className="text-xs text-muted-foreground">
                Candidates based in Europe/Germany or willing to relocate to Aachen strongly preferred.
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8"
          >
            <div className="flex items-start gap-4 mb-3">
              <Brain className="text-accent-green mt-1" size={20} />
              <div>
                <h3 className="font-display font-bold text-xl text-foreground">Open Application</h3>
                <p className="text-sm text-muted-foreground mt-2 max-w-2xl">
                  Don't see a role that fits? We're always interested in exceptional people. Send us your profile.
                </p>
              </div>
            </div>
            <button onClick={() => setOpenRole("Open Application")} className="inline-flex items-center gap-2 mt-4 text-accent-blue font-semibold hover:gap-3 transition-all">
              Submit Open Application →
            </button>
          </motion.div>
        </div>
      </section>

      <section className="section-spacing bg-surface/40 border-t border-border">
        <div className="section-container max-w-5xl">
          <div className="grid md:grid-cols-3 gap-5">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="glass-card p-6"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent-blue/10 text-accent-blue flex items-center justify-center mb-4">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-display font-semibold text-base mb-2 text-foreground">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <JobApplicationDialog
        role={openRole ?? ""}
        open={!!openRole}
        onClose={() => setOpenRole(null)}
      />
    </PageShell>
  );
}
