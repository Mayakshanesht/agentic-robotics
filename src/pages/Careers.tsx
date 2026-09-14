import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, Rocket, Brain, FlaskConical, Wrench, Globe2, ChevronDown } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { HeroBackdrop } from "@/components/HeroBackdrop";
import { JobApplicationDialog } from "@/components/JobApplicationDialog";
import {
  SupervisorCallout,
  ThesisProgramDetails,
  ThesisQuestion,
  ThesisSkills,
  ThesisTimeline,
} from "@/components/careers/ThesisProgram";
import { theses, thesisDates, thesisRole } from "@/data/theses";

const values = [
  { icon: FlaskConical, title: "Research-first", body: "We work at the frontier, not behind it." },
  { icon: Wrench, title: "Build to ship", body: "Research that doesn't deploy doesn't count." },
  { icon: Globe2, title: "Europe's physical AI hub", body: "Deep roots in Aachen's tech ecosystem." },
];

export default function Careers() {
  const [openRole, setOpenRole] = useState<string | null>(null);
  const [details, setDetails] = useState<Record<string, boolean>>({});
  const toggle = (k: string) => setDetails((d) => ({ ...d, [k]: !d[k] }));
  const isThesisApplication = theses.some((t) => thesisRole(t) === openRole);

  return (
    <PageShell
      title="Careers - CloudBee Robotics"
      description="Join CloudBee Robotics - build the autonomous OS for embodied AI from Aachen, Germany. EXIST funded, RWTH-backed."
      path="/careers"
    >
      <section className="relative pt-32 lg:pt-40 pb-16 bg-hero-gradient overflow-hidden">
        <HeroBackdrop accent="blue" />
        <div className="section-container relative z-10 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="text-xs font-mono uppercase tracking-wider text-accent-blue mb-4">Careers</div>
            <h1 className="font-display font-bold text-4xl lg:text-6xl leading-tight mb-5">
              Join the team building the <span className="text-gradient-blue">future of physical AI.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              We're a small, senior team shipping a real product - synthetic 4D data, explainable VLA models, and an agentic runtime that deploys to any humanoid, arm, or AMR.
            </p>
            <div className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground px-3 py-2 mt-6 rounded-md border border-border bg-surface/60">
              <MapPin size={14} className="text-accent-blue" />
              Aachen, Germany · EXIST Supported · RWTH Aachen Ecosystem
            </div>
          </motion.div>
        </div>
      </section>

      {/* Open roles */}
      <section className="section-spacing border-t border-border">
        <div className="section-container max-w-5xl">
          <div className="max-w-3xl mb-10">
            <div className="text-xs font-mono uppercase tracking-wider text-accent-green mb-3">Open Roles</div>
            <h2 className="font-display font-bold text-3xl lg:text-4xl">We hire engineers who ship.</h2>
          </div>

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
            <button onClick={() => toggle("rs")} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-blue hover:gap-2 transition-all">
              {details.rs ? "Hide details" : "View details"}
              <ChevronDown size={15} className={`transition-transform ${details.rs ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence initial={false}>
              {details.rs && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
                  className="mt-4 text-sm text-muted-foreground leading-relaxed overflow-hidden"
                >
                  Join our core team at the intersection of robotics, synthetic data, embodied AI, and robotic foundation models. PhD-level or strong industry experience in generative AI, multimodal systems, or robotics simulation.
                </motion.p>
              )}
            </AnimatePresence>
            <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-6 border-t border-border">
              <button onClick={() => setOpenRole("Research Scientist / Founding AI Engineer")} className="btn-pilot">
                Apply Now
              </button>
              <div className="text-xs text-muted-foreground">
                Candidates based in Europe/Germany or willing to relocate strongly preferred.
              </div>
            </div>
          </motion.div>

          {/* Master's thesis positions */}
          <div className="mb-6 space-y-4">
            <div className="rounded-2xl border border-accent-green/30 bg-accent-green/5 p-6 lg:p-7">
              <div className="text-xs font-mono uppercase tracking-wider text-accent-green mb-3">
                Master's Theses at CloudBee Robotics
              </div>
              <h3 className="font-display font-bold text-2xl lg:text-3xl text-foreground leading-snug">
                We are opening three master's thesis positions.
              </h3>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-3xl">
                These are not internships with a thesis attached. Each one is built around a question the field has not
                answered — chosen because we need the answer ourselves, and framed so that a negative result is still a
                result worth publishing.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs font-mono">
                {[
                  "Three positions",
                  "Aachen · on-site",
                  `${thesisDates.start} – ${thesisDates.end}`,
                  `Applications until ${thesisDates.applicationsClose}`,
                ].map((chip) => (
                  <span key={chip} className="px-3 py-1.5 rounded-md border border-border bg-surface/60 text-muted-foreground">
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            <SupervisorCallout />

            {theses.map((t) => (
              <motion.div
                key={t.slug}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="glass-card p-6 lg:p-7"
              >
                <div className="flex items-start gap-4">
                  <FlaskConical className="text-accent-green mt-1 shrink-0" size={20} />
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-mono uppercase tracking-wider text-accent-green mb-1.5">
                      Topic {t.number}
                    </div>
                    <h3 className="font-display font-bold text-lg lg:text-xl text-foreground leading-snug">
                      <Link to={`/careers/${t.slug}`} className="hover:text-accent-green transition-colors">
                        {t.title}
                      </Link>
                    </h3>
                    <div className="text-sm text-muted-foreground mt-1">{t.focus}</div>
                    <div className="text-xs font-mono text-muted-foreground mt-2">
                      External master's thesis · No salary · 6 months · Full time · Aachen
                    </div>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  {t.intro.map((para) => (
                    <p key={para.slice(0, 40)} className="text-sm text-muted-foreground leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>

                <div className="mt-5">
                  <ThesisQuestion question={t.question} />
                </div>

                <button
                  onClick={() => toggle(t.slug)}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-green hover:gap-2 transition-all"
                >
                  {details[t.slug] ? "Hide requirements" : "What you should bring"}
                  <ChevronDown size={15} className={`transition-transform ${details[t.slug] ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence initial={false}>
                  {details[t.slug] && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4">
                        <ThesisSkills thesis={t} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 pt-5 border-t border-border">
                  <button onClick={() => setOpenRole(thesisRole(t))} className="btn-pilot">
                    Apply for Topic {t.number}
                  </button>
                  <Link
                    to={`/careers/${t.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-blue hover:gap-2 transition-all"
                  >
                    Full description <ArrowRight size={14} />
                  </Link>
                  <span className="text-xs text-muted-foreground">
                    Applications close {thesisDates.applicationsClose}
                  </span>
                </div>
              </motion.div>
            ))}

            <ThesisTimeline />
            <ThesisProgramDetails />
          </div>

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
                  Don't see a role that fits? We're always interested in exceptional people - simulation, embedded, full-stack, or research backgrounds welcome.
                </p>
              </div>
            </div>
            <button onClick={() => setOpenRole("Open Application")} className="inline-flex items-center gap-2 mt-4 text-accent-blue font-semibold hover:gap-3 transition-all">
              Submit Open Application <ArrowRight size={14} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-spacing border-t border-border bg-surface/30">
        <div className="section-container max-w-5xl">
          <div className="max-w-3xl mb-10">
            <div className="text-xs font-mono uppercase tracking-wider text-accent-blue mb-3">How we work</div>
            <h2 className="font-display font-bold text-3xl lg:text-4xl">A small team, a shipping culture.</h2>
          </div>
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
        variant={isThesisApplication ? "thesis" : "job"}
      />
    </PageShell>
  );
}
