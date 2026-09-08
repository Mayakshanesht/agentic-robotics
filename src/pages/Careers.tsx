import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, Rocket, Brain, FlaskConical, Wrench, Globe2, ChevronDown } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { HeroBackdrop } from "@/components/HeroBackdrop";
import { JobApplicationDialog } from "@/components/JobApplicationDialog";

const values = [
  { icon: FlaskConical, title: "Research-first", body: "We work at the frontier, not behind it." },
  { icon: Wrench, title: "Build to ship", body: "Research that doesn't deploy doesn't count." },
  { icon: Globe2, title: "Europe's physical AI hub", body: "Deep roots in Aachen's tech ecosystem." },
];

type ThesisRole = {
  id: string;
  label: string;
  title: string;
  focus: string;
  intro: string[];
  questions: string[];
  looking: string;
  required: string[];
  welcome: string;
  note: string;
};

const thesisRoles: ThesisRole[] = [
  {
    id: "th-video",
    label: "Topic 1",
    title: "From human video to bimanual robot manipulation",
    focus: "3D computer vision · task discovery · bimanual retargeting",
    intro: [
      "Teleoperation is the most expensive input in robot learning: it scales linearly with human hours and needs operator and robot in the same room. A video of a person doing the task carries much of the same information and costs nothing to record. The individual pieces are tractable — hand reconstruction, 6-DoF object tracking, physics-based refinement — but nobody has measured what the substitution is actually worth.",
      "There is a second question underneath it. A teleoperation log is shaped by the control interface: an operator driving one arm through a controller produces demonstrations in which two-handed coordination is partly an artefact of the interface rather than of the task. Human video has no such seam.",
      "You will recover two-handed motion, object trajectories and contact structure from video; discover the task's phase and contact structure; retarget it to a bimanual robot; and verify the result is physically executable.",
    ],
    questions: [
      "How many video-derived demonstrations equal one teleoperated demonstration?",
      "Does video preserve bimanual coordination and contact structure that teleoperation logs lose?",
    ],
    looking: "Demonstrated expertise in 3D computer vision and in task discovery.",
    required: [
      "Multi-view geometry and camera calibration",
      "6-DoF pose estimation and tracking",
      "Hand-object interaction reconstruction",
      "Temporal segmentation of continuous demonstrations into sub-tasks, contact phases and success conditions",
      "Robot kinematics — forward and inverse, joint- versus task-space",
    ],
    welcome: "Trajectory optimisation, motion planning and imitation learning are welcome.",
    note: "Show us something you have built in 3D vision — a repository, a project report, a paper.",
  },
  {
    id: "th-contact",
    label: "Topic 2",
    title: "Are simulated contact forces good enough to train on?",
    focus: "Contact mechanics · system identification · experimental work",
    intro: [
      "Simulated images transfer to real robots reasonably well. Simulated forces are another matter — friction is an approximation, contact stiffness is a solver setting, and sensor dynamics and mounting compliance usually go unmodelled entirely. There is no published error budget saying how wrong they are, or which assumption is responsible.",
      "There is a second question underneath, and it decides whether any of this scales: real robots carry different sensors in different places — a wrist sensor here, actuation-level force there, an instrumented fixture measuring the same contact from the opposite side.",
      "You will build the error budget from real measurements and identify what causes the discrepancy.",
    ],
    questions: [
      "How wrong are simulated contact forces, and which modelling assumption is responsible?",
      "Does a contact calibration identified for one sensor, in one location, transfer to a different sensor somewhere else?",
    ],
    looking: "Mechatronics and simulation expertise.",
    required: [
      "Rigid-body dynamics and contact mechanics",
      "System identification, parameter estimation or classical control",
      "Hands-on work with a physics engine, and an understanding of how its contact solver actually behaves",
      "Real experimental competence — building a rig, calibrating a sensor, designing a repeatable measurement protocol",
    ],
    welcome: "Force/torque sensing, impedance or admittance control, force-controlled assembly and ROS are all welcome.",
    note: "This is an experimental thesis. If you enjoy building rigs and chasing down a discrepancy, it is the right topic. If you prefer pure software, it is not.",
  },
  {
    id: "th-vla",
    label: "Topic 3",
    title: "Multimodal foundation models for robot manipulation",
    focus: "Vision-language-action models · sensor fusion · real-robot evaluation",
    intro: [
      "Strong pretrained vision-language-action models are openly available, so the hard part is no longer building one — it is making one work for a specific robot, sensor set and task. Almost all of them consume RGB, language and proprioception, yet the tasks that matter most in manufacturing are governed by contact, which a camera cannot see.",
      "You will extend a pretrained model to additional sensor modalities and compare fusion strategies.",
      "Evaluation is on real robots and by task success — not by validation loss, because models with near-identical loss curves have been shown to diverge sharply on hardware.",
    ],
    questions: [
      "Which sensor modalities actually improve contact-rich manipulation?",
      "How many real demonstrations can validated synthetic data replace?",
    ],
    looking: "Someone who has actually trained and deployed policies on real robots.",
    required: [
      "Hands-on projects with humanoids or robotic arms using robot foundation models",
      "Practical experience with the LeRobot ecosystem and SO-101-class arms — collecting demonstrations, fine-tuning a policy, running it on hardware and seeing it fail",
      "Strong PyTorch, including fine-tuning large models",
      "Familiarity with transformers, and ideally VLMs",
      "Genuine experimental discipline — controls, seeds, honest variance reporting",
    ],
    welcome: "",
    note: "A GitHub repository showing a policy you trained and ran on a real arm counts for more with us than a strong transcript alone.",
  },
];

const thesisRequirements = [
  "Enrolled master's student in computer science, robotics, mechanical or electrical engineering, mechatronics, control engineering or a related field",
  "Overall grade better than 2.0 (German scale) — send your transcript, we do read it",
  "You arrange your own academic supervision and register the thesis through your examination office",
  "Six months, full time, on-site in Aachen — candidates already in Aachen are preferred",
  "Strong Python; comfortable on Linux and with GPU workflows",
  "Working English. German is welcome but not required.",
];

const thesisOffer = [
  "An open research question with a measurable answer",
  "Real robots, real recorded data and a running system to start from",
  "GPU compute and a workspace in our lab",
  "A named technical supervisor and a scheduled weekly one-to-one",
  "A written topic exposé you can take to a prospective supervisor",
  "Support to publish — negative results are publishable results here",
  "A serious conversation about joining us afterwards if it goes well",
];


export default function Careers() {
  const [openRole, setOpenRole] = useState<string | null>(null);
  const [details, setDetails] = useState<Record<string, boolean>>({});
  const toggle = (k: string) => setDetails((d) => ({ ...d, [k]: !d[k] }));
  const isThesisApplication = openRole?.startsWith("Master's Thesis") ?? false;

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
          <div className="mb-6">
            <div className="rounded-2xl border border-accent-green/30 bg-accent-green/5 p-6 lg:p-7 mb-5">
              <div className="text-xs font-mono uppercase tracking-wider text-accent-green mb-3">
                Master's Thesis Positions · Robot Learning &amp; Physical AI
              </div>
              <h3 className="font-display font-bold text-2xl lg:text-3xl text-foreground leading-snug">
                Three open research questions. Real robots. Six months.
              </h3>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-3xl">
                We are offering three master's thesis topics to students who want to work on open research questions in
                robot learning, with real hardware, in a small team. These are{" "}
                <strong className="text-foreground">external theses (externe Abschlussarbeiten)</strong>: you bring the
                academic side — a professor at your own university who supervises and examines the topic, registered
                through your examination office. We bring the topic, the infrastructure, the data and weekly technical
                supervision.
              </p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-3xl">
                <strong className="text-foreground">These positions are unpaid.</strong> What you get instead is a
                research question nobody has answered yet, real robots to test it on, a working system rather than an
                empty repository, and people who will sit with you when the experiment misbehaves.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs font-mono">
                {[
                  "6 months · full time · on-site in Aachen",
                  "Applications until 20 September 2026",
                  "Start from 1 October 2026",
                ].map((t) => (
                  <span key={t} className="px-3 py-1.5 rounded-md border border-border bg-surface/60 text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              {thesisRoles.map((r) => (
                <motion.div
                  key={r.id}
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
                        {r.label}
                      </div>
                      <h3 className="font-display font-bold text-lg lg:text-xl text-foreground leading-snug">
                        {r.title}
                      </h3>
                      <div className="text-sm text-muted-foreground mt-1">{r.focus}</div>
                      <div className="text-xs font-mono text-muted-foreground mt-2">
                        External master's thesis · Unpaid · 6 months · Full time · Aachen
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => toggle(r.id)}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-green hover:gap-2 transition-all"
                  >
                    {details[r.id] ? "Hide details" : "View details"}
                    <ChevronDown size={15} className={`transition-transform ${details[r.id] ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {details[r.id] && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-5 space-y-3">
                          {r.intro.map((para) => (
                            <p key={para.slice(0, 40)} className="text-sm text-muted-foreground leading-relaxed">
                              {para}
                            </p>
                          ))}
                        </div>

                        <div className="mt-5 rounded-lg border-l-2 border-accent-green bg-surface/50 px-4 py-3">
                          <div className="text-xs font-mono uppercase tracking-wider text-accent-green mb-2">
                            The questions
                          </div>
                          <ul className="space-y-1.5">
                            {r.questions.map((q) => (
                              <li key={q} className="text-sm text-foreground/90 font-medium leading-relaxed">
                                {q}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-5">
                          <div className="text-xs font-mono uppercase tracking-wider text-accent-blue mb-2">
                            What we are looking for
                          </div>
                          <p className="text-sm text-foreground/90 mb-3">{r.looking}</p>
                          <ul className="space-y-1.5 text-sm text-foreground/85">
                            {r.required.map((q) => (
                              <li key={q} className="flex gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-blue shrink-0" />
                                <span>{q}</span>
                              </li>
                            ))}
                          </ul>
                          {r.welcome && (
                            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{r.welcome}</p>
                          )}
                        </div>

                        <div className="mt-5 rounded-lg border border-border bg-surface/50 p-4 text-sm text-muted-foreground leading-relaxed">
                          {r.note}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <div className="mt-6 flex flex-wrap items-center gap-4 pt-5 border-t border-border">
                    <button
                      onClick={() => setOpenRole(`Master's Thesis — ${r.title}`)}
                      className="btn-pilot"
                    >
                      Apply for {r.label}
                    </button>
                    <span className="text-xs text-muted-foreground">
                      GDPR-compliant application form · applications close 20 September 2026
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Shared terms for all three theses */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="glass-card p-6 lg:p-7 mt-4"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-accent-green mb-2">
                    Requirements for all three
                  </div>
                  <ul className="space-y-1.5 text-sm text-foreground/85">
                    {thesisRequirements.map((q) => (
                      <li key={q} className="flex gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-green shrink-0" />
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-accent-blue mb-2">What we offer</div>
                  <ul className="space-y-1.5 text-sm text-foreground/85">
                    {thesisOffer.map((q) => (
                      <li key={q} className="flex gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-blue shrink-0" />
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-border">
                <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
                  How to apply
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Apply through the form on this page and include: your CV and transcript; which topic interests you and
                  why, in two or three sentences; whether you already have a potential supervisor in mind and your
                  earliest start date; and a link to something you have built — a repository, a project report, a paper.
                  If you are unsure whether your background fits, apply anyway and tell us what you would need to learn.
                </p>
                <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
                  Your university supervises academically, registers and examines the thesis; we host and co-supervise. A
                  written agreement between you, your university and us covers supervision, intellectual property,
                  confidentiality, publication and site access, and is signed before you start. A confidentiality period
                  (Sperrvermerk) is agreed with your examiner. Safety induction is required before working with robot
                  hardware. Topic scope can be adjusted in agreement with your academic supervisor.
                </p>
              </div>
            </motion.div>
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
        {...(isThesisApplication
          ? {
              meta: "External master's thesis · Unpaid · 6 months · Full time · Aachen",
              promptLabel: "Why this topic, and what have you built? *",
              promptPlaceholder:
                "Why this topic interests you (2-3 sentences), whether you already have a potential supervisor, your earliest start date, and something you have built that is relevant…",
            }
          : {})}
      />
    </PageShell>
  );
}
