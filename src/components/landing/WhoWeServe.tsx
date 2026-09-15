import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight, Boxes, BrainCircuit, Car, Check, Cpu, Factory, FlaskConical, Network, Package, Plug,
} from "lucide-react";

const needs = [
  {
    icon: Boxes,
    product: "DataForge",
    title: "You need high-quality contact-rich manipulation data",
    body: "Your tasks are decided by force and touch, and teleoperating enough demonstrations is too slow and too expensive.",
    points: [
      "4D multimodal datasets for your work cell",
      "Built from your task, a scene video and a few demonstrations",
      "Force and tactile channels, not just pixels",
    ],
  },
  {
    icon: BrainCircuit,
    product: "ModelLab + Copilot",
    title: "You need a model that fits your robot",
    body: "Frontier foundation models don't support your sensors, actuators or on-robot compute out of the box.",
    points: [
      "Models adapted to your sensors and actuators",
      "Trained on data from your own work cell",
      "Sized for the compute on your robot",
    ],
  },
  {
    icon: Network,
    product: "AgenticOS + KineBridge",
    title: "You need robots that keep running",
    body: "Long tasks fail mid-way, and every new robot or sensor means another custom integration.",
    points: [
      "Closed-loop self-recovery when a step fails",
      "One hardware standard across robots and sensors",
      "One-click deployment of validated capabilities",
    ],
  },
];

const buyers = [
  { icon: Factory, label: "Manufacturing & assembly" },
  { icon: Car, label: "Automotive" },
  { icon: Plug, label: "System integrators" },
  { icon: Package, label: "Logistics & handling" },
  { icon: Cpu, label: "Robotics OEMs" },
  { icon: FlaskConical, label: "Research labs" },
];

export function WhoWeServe() {
  return (
    <section className="relative py-28 lg:py-36 border-t border-border overflow-hidden bg-surface/30">
      <div className="absolute inset-0 grid-bg opacity-[0.06] pointer-events-none" />
      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent-blue/30 bg-accent-blue/5 backdrop-blur mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-foreground/80">Who it's for · B2B</span>
          </div>
          <h2 className="font-display font-bold text-4xl lg:text-6xl leading-[1.0] tracking-tight">
            Built for teams whose robots{" "}
            <span className="text-gradient-blue">have to handle contact.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Industrial teams come to us when they need one or more of three things. Each maps to a product — and they
            work best together.
          </p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-3 lg:gap-6">
          {needs.map((n, i) => (
            <motion.div
              key={n.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="card-3d border-gradient flex flex-col p-7"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-blue/10 text-accent-blue">
                  <n.icon size={22} />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-accent-green">{n.product}</span>
              </div>
              <h3 className="font-display font-bold text-xl lg:text-2xl text-foreground leading-tight">{n.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{n.body}</p>
              <ul className="mt-5 flex-1 space-y-2.5">
                {n.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-foreground/90">
                    <Check size={16} className="mt-0.5 shrink-0 text-accent-green" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <div className="mb-4 text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground">Typical partners</div>
            <div className="flex flex-wrap gap-2.5">
              {buyers.map((b) => (
                <span key={b.label} className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-3.5 py-2 text-sm text-foreground/85">
                  <b.icon size={14} className="text-accent-blue" /> {b.label}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link to="/contact?interest=Pilot%20Program" className="btn-pilot">
              Start a pilot <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact?interest=Research%20Collaboration"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-blue hover:gap-2 transition-all"
            >
              Research collaboration <ArrowRight size={14} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
