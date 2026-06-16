import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Factory, FlaskConical, Check, ArrowRight, Car, Truck, HeartPulse, Cpu, Boxes,
} from "lucide-react";

const audiences = [
  {
    icon: Factory,
    tone: "blue" as const,
    eyebrow: "For industry & operators",
    title: "Onboard new robots faster, cheaper, and cleanly.",
    body: "Put robots to work without building an in-house robotics or AI team. You bring the hardware and the task; we deliver a safety-validated, deployable capability.",
    points: [
      "Days, not months, to deploy a new task",
      "No robotics or AI experts required on your side",
      "Safety-validated before it ever runs",
      "Lower cost to automate, hardware-agnostic (ROS 2)",
    ],
    cta: { label: "Book a demo", to: "/contact" },
  },
  {
    icon: FlaskConical,
    tone: "green" as const,
    eyebrow: "For research labs & universities",
    title: "Bring your research out of the lab and into the field.",
    body: "We partner with research groups to turn cutting-edge robotics and AI research into real-world, deployable systems - and to push the science forward together.",
    points: [
      "Joint research projects and field pilots",
      "Synthetic experience and compute for experiments",
      "A clear path from paper to real-world validation",
      "Co-authored publications (e.g. our IGMR collaboration)",
    ],
    cta: { label: "Start a collaboration", to: "/contact?interest=Research%20Collaboration" },
  },
];

const industries = [
  { icon: Car, label: "Automotive" },
  { icon: Factory, label: "Manufacturing" },
  { icon: Truck, label: "Logistics & Warehousing" },
  { icon: HeartPulse, label: "Healthcare" },
  { icon: Cpu, label: "AI Research" },
  { icon: Boxes, label: "Robotics OEMs" },
];

export function WhoWeServe() {
  return (
    <section className="relative py-28 lg:py-40 border-t border-border overflow-hidden bg-surface/30">
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
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-foreground/80">Who we serve · B2B</span>
          </div>
          <h2 className="font-display font-bold text-4xl lg:text-6xl leading-[1.0] tracking-tight">
            We put robots to work -{" "}
            <span className="text-gradient-blue">so your team doesn't have to be roboticists.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            CloudBee Robotics is a B2B platform. We help industrial teams adopt robots without the cost
            and complexity of an in-house robotics lab - and we collaborate with research groups to
            bring their work to the field.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-5 lg:gap-6">
          {audiences.map((a, i) => (
            <motion.div
              key={a.eyebrow}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="card-3d border-gradient p-7 lg:p-8 flex flex-col"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${a.tone === "blue" ? "bg-accent-blue/10 text-accent-blue" : "bg-accent-green/10 text-accent-green"}`}>
                <a.icon size={22} />
              </div>
              <div className={`text-[10px] font-mono uppercase tracking-[0.22em] mb-2 ${a.tone === "blue" ? "text-accent-blue" : "text-accent-green"}`}>
                {a.eyebrow}
              </div>
              <h3 className="font-display font-bold text-2xl lg:text-3xl text-foreground leading-tight">{a.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{a.body}</p>
              <ul className="mt-5 space-y-2.5 flex-1">
                {a.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-foreground/90">
                    <Check size={16} className={`shrink-0 mt-0.5 ${a.tone === "blue" ? "text-accent-blue" : "text-accent-green"}`} />
                    {p}
                  </li>
                ))}
              </ul>
              <Link to={a.cta.to} className="btn-pilot mt-7 self-start">
                {a.cta.label} <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* industries */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground mb-4">Working across</div>
          <div className="flex flex-wrap gap-2.5">
            {industries.map((ind) => (
              <span key={ind.label} className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-border bg-background/40 text-sm text-foreground/85">
                <ind.icon size={14} className="text-accent-blue" /> {ind.label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
