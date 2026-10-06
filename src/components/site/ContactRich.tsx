import { motion, useReducedMotion } from "framer-motion";
import { FadeUp, Kicker, Section } from "@/components/site/ui";

const TEAL = "#0D9488";
const AMBER = "#B45309";
const LINE = "#E2E8F0";
const loop = { duration: 5, repeat: Infinity, ease: "easeInOut" as const };

function Vision({ reduce }: { reduce: boolean | null }) {
  return (
    <svg viewBox="0 0 160 90" className="h-full w-full" aria-hidden>
      <rect x="4" y="4" width="152" height="82" rx="8" fill="#F8FAFC" stroke={LINE} />
      <rect x="62" y="40" width="34" height="34" rx="4" fill={TEAL} fillOpacity="0.2" stroke={TEAL} strokeWidth="2" />
      <motion.g
        initial={{ opacity: reduce ? 1 : 0 }}
        animate={reduce ? undefined : { opacity: [0, 1, 1, 0] }}
        transition={loop}
      >
        <rect x="56" y="34" width="46" height="46" rx="3" fill="none" stroke={TEAL} strokeWidth="1.5" strokeDasharray="5 4" />
        <line x1="79" y1="22" x2="79" y2="34" stroke={TEAL} strokeWidth="1.5" />
        <text x="79" y="18" fontSize="9" textAnchor="middle" fill={TEAL} fontWeight="700">
          x, y, z
        </text>
      </motion.g>
    </svg>
  );
}

function Touch({ reduce }: { reduce: boolean | null }) {
  return (
    <svg viewBox="0 0 160 90" className="h-full w-full" aria-hidden>
      <rect x="4" y="4" width="152" height="82" rx="8" fill="#F8FAFC" stroke={LINE} />
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.rect
          key={i}
          x={20 + i * 16}
          y="26"
          width="12"
          height="14"
          rx="2"
          fill={TEAL}
          initial={{ opacity: reduce ? 0.8 : 0.15 }}
          animate={reduce ? undefined : { opacity: [0.15, 0.9, 0.35, 0.15] }}
          transition={{ ...loop, delay: (i % 4) * 0.08 }}
        />
      ))}
      <motion.path
        d="M20 62 H60 L72 50 L86 70 L100 58 H140"
        fill="none"
        stroke={AMBER}
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: reduce ? 1 : 0 }}
        animate={reduce ? undefined : { pathLength: [0, 1, 1, 0] }}
        transition={loop}
      />
      <text x="80" y="84" fontSize="9" textAnchor="middle" fill={AMBER} fontWeight="700">
        slip detected
      </text>
    </svg>
  );
}

function Together({ reduce }: { reduce: boolean | null }) {
  return (
    <svg viewBox="0 0 160 90" className="h-full w-full" aria-hidden>
      <rect x="4" y="4" width="152" height="82" rx="8" fill="#F8FAFC" stroke={LINE} />
      <text x="22" y="26" fontSize="9" fill="#5B6B85">
        grip force
      </text>
      <rect x="22" y="32" width="116" height="14" rx="7" fill="#EEF2F6" />
      <motion.rect
        x="22"
        y="32"
        height="14"
        rx="7"
        fill={TEAL}
        initial={{ width: reduce ? 78 : 30 }}
        animate={reduce ? undefined : { width: [30, 30, 78, 78, 30] }}
        transition={{ ...loop, times: [0, 0.25, 0.45, 0.85, 1] }}
      />
      <motion.text
        x="80"
        y="68"
        fontSize="10"
        textAnchor="middle"
        fontWeight="700"
        fill={TEAL}
        initial={{ opacity: reduce ? 1 : 0 }}
        animate={reduce ? undefined : { opacity: [0, 0, 1, 1, 0] }}
        transition={{ ...loop, times: [0, 0.3, 0.5, 0.85, 1] }}
      >
        hold steady
      </motion.text>
    </svg>
  );
}

export function ContactRich() {
  const reduce = useReducedMotion();
  const cards = [
    {
      title: "Vision says where",
      body: "Cameras and depth tell the robot where the object is and how to approach it. That is where most robot data stops.",
      art: <Vision reduce={reduce} />,
    },
    {
      title: "Touch says how hard",
      body: "Contact tells the robot how firmly it is holding, and the moment the object starts to slip in its grip. A camera cannot see that.",
      art: <Touch reduce={reduce} />,
    },
    {
      title: "Together they say how much force to add",
      body: "Vision and touch read at the same instant tell the robot how much more to squeeze, and when to stop. That is what decides whether the task succeeds.",
      art: <Together reduce={reduce} />,
    },
  ];

  return (
    <Section id="contact-rich" className="border-t border-border">
      <FadeUp className="max-w-3xl">
        <Kicker>Contact-rich data</Kicker>
        <h2 className="mt-4 text-[2rem] font-extrabold leading-tight tracking-[-1px] lg:text-[2.5rem]">
          Why touch belongs in the data, not just vision.
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-[#13233B]">
          The tasks that matter in a factory are decided by contact. Training data that only carries pixels teaches a
          robot where things are, never how they feel.
        </p>
      </FadeUp>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {cards.map((c, i) => (
          <FadeUp key={c.title} delay={i * 0.08}>
            <div className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-[var(--shadow-card)]">
              <div className="h-28">{c.art}</div>
              <h3 className="mt-5 text-xl font-bold text-foreground">{c.title}</h3>
              <p className="mt-3 text-[17px] leading-relaxed text-[#13233B]">{c.body}</p>
            </div>
          </FadeUp>
        ))}
      </div>

      <FadeUp className="mt-8">
        <p className="max-w-3xl text-[17px] leading-relaxed text-[#13233B]">
          So we generate it: every run in your twin is recorded with vision, depth, touch and force at the same moment,
          thousands of runs at a time. That is the data a model needs to handle contact, and it scales with GPUs instead
          of with people.
        </p>
      </FadeUp>
    </Section>
  );
}
