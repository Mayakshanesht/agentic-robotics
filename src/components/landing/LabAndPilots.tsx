import { motion, useReducedMotion } from "framer-motion";
import { Building2 } from "lucide-react";
import { PhotoSlot } from "@/components/PhotoSlot";
import { LAB_PHOTO, milestones, pilotRobots, type RobotShape } from "@/data/company";
import incubatorStage from "@/assets/hero/pitch-incubator.jpeg";

const ART = { fill: "none", stroke: "hsl(var(--accent-blue))", strokeWidth: 2.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
const JOINT = { fill: "hsl(var(--background))", stroke: "hsl(var(--accent-blue))", strokeWidth: 2 };

/** One arm: base, shoulder link, forearm and gripper, gently moving. */
function ArmStroke({ reduce, delay = 0 }: { reduce: boolean | null; delay?: number }) {
  const sway = (from: number, to: number) =>
    reduce ? undefined : { rotate: [from, to, from], transition: { duration: 4, repeat: Infinity, ease: "easeInOut" as const, delay } };
  return (
    <>
      <rect x="44" y="98" width="32" height="9" rx="3" {...ART} />
      <motion.g style={{ transformBox: "view-box", transformOrigin: "60px 98px" }} animate={sway(-6, 8)}>
        <path d="M60 98 L60 66" {...ART} />
        <motion.g style={{ transformBox: "view-box", transformOrigin: "60px 66px" }} animate={sway(8, -14)}>
          <path d="M60 66 L82 48" {...ART} />
          <path d="M82 48 L92 44 M82 48 L88 37" {...ART} />
          <circle cx="82" cy="48" r="3.5" {...JOINT} />
        </motion.g>
        <circle cx="60" cy="66" r="4" {...JOINT} />
      </motion.g>
    </>
  );
}

function RobotLineArt({ shape }: { shape: RobotShape }) {
  const reduce = useReducedMotion();
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-accent-blue/10 via-background to-accent-green/10">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <svg viewBox="0 0 120 120" className="relative h-3/5 w-3/5" aria-hidden>
        {shape === "humanoid" && (
          <>
            <circle cx="60" cy="20" r="9" {...ART} />
            <rect x="47" y="33" width="26" height="36" rx="8" {...ART} />
            <motion.path
              d="M47 38 L35 56 L31 74"
              {...ART}
              style={{ transformBox: "view-box", transformOrigin: "47px 38px" }}
              animate={reduce ? undefined : { rotate: [0, -16, 0] }}
              transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
            />
            <path d="M73 38 L85 56 L89 74" {...ART} />
            <path d="M54 69 L51 94 L49 110 M66 69 L69 94 L71 110" {...ART} />
          </>
        )}
        {shape === "arm" && <ArmStroke reduce={reduce} />}
        {shape === "bimanual" && (
          <>
            <g transform="translate(-34 0)">
              <ArmStroke reduce={reduce} />
            </g>
            <g transform="translate(154 0) scale(-1 1)">
              <ArmStroke reduce={reduce} delay={0.6} />
            </g>
          </>
        )}
      </svg>
    </div>
  );
}

export function LabAndPilots() {
  return (
    <section id="pilots" className="relative py-24 lg:py-32 border-t border-border bg-surface/30 overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 grid-bg opacity-[0.05] pointer-events-none" />
      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-accent-blue mb-4">Traction · Pilots &amp; lab</div>
          <h2 className="font-display font-bold text-4xl lg:text-5xl leading-[1.03] tracking-tight">
            Running on real robots —{" "}
            <span className="text-gradient-blue">in our own lab and with customers.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Pilots are running with industrial customers on four robot platforms. Our own hardware lab at the Collective
            Incubator in Aachen lets us collect data and validate capabilities in-house. Customer names are shared under NDA.
          </p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-[1.1fr_1fr] lg:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative min-h-[320px] overflow-hidden rounded-3xl border border-border"
          >
            <PhotoSlot
              src={LAB_PHOTO}
              alt="CloudBee Robotics hardware lab at the Collective Incubator, Aachen"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              fallback={
                <img
                  src={incubatorStage}
                  alt="CloudBee Robotics presenting at the Collective Incubator, Aachen"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
              }
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
              <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-accent-green/40 bg-background/80 px-2.5 py-1 backdrop-blur">
                <Building2 size={12} className="text-accent-green" />
                <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-accent-green">Own hardware lab</span>
              </div>
              <div className="font-display font-bold text-2xl text-foreground">Collective Incubator, Aachen</div>
              <p className="mt-1 max-w-md text-sm text-foreground/80">
                Where we collect demonstrations, run adapted models on real hardware and validate before a pilot deployment.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {pilotRobots.map((r, i) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-background sm:aspect-square"
              >
                <PhotoSlot
                  src={r.photo}
                  alt={`${r.name} used in CloudBee Robotics pilots`}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  fallback={<RobotLineArt shape={r.shape} />}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-background/85 px-2 py-0.5 backdrop-blur">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-green" />
                  <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-accent-green">In pilots</span>
                </div>
                <div className="absolute inset-x-3 bottom-3">
                  <div className="font-display font-semibold text-foreground">{r.name}</div>
                  <div className="text-[11px] font-mono text-muted-foreground">{r.kind}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative mt-14">
          <div className="absolute inset-x-0 top-[7px] hidden h-px bg-gradient-to-r from-accent-blue/40 via-accent-blue/40 to-accent-green lg:block" />
          <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-7 lg:gap-4">
            {milestones.map((m, i) => {
              const now = m.date === "Now";
              return (
                <motion.li
                  key={m.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="relative lg:pt-7"
                >
                  <span
                    className={`absolute left-0 top-0 hidden h-3.5 w-3.5 rounded-full border-2 border-background lg:block ${now ? "bg-accent-green" : "bg-accent-blue"}`}
                  />
                  <div className={`text-[10px] font-mono uppercase tracking-[0.2em] ${now ? "text-accent-green" : "text-accent-blue"}`}>
                    {m.date}
                  </div>
                  <div className="mt-1 text-sm leading-snug text-foreground">{m.title}</div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
