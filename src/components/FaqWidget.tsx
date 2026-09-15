import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown, HelpCircle, Mail, X } from "lucide-react";
import { CONTACT_EMAIL, pilotRobots, pricingModel, products } from "@/data/company";

type Faq = { q: string; a: ReactNode; cta?: { label: string; to: string } };

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-2 space-y-1.5">
      {items.map((it) => (
        <li key={it} className="flex gap-2">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-blue" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

const robotNames = pilotRobots.map((r) => r.name);
const robotsText = `${robotNames.slice(0, -1).join(", ")} and ${robotNames[robotNames.length - 1]}`;

/** Fixed answers only — nothing is generated, so nothing can be invented or leaked. Facts come from src/data/company.ts. */
const faqs: Faq[] = [
  {
    q: "What does CloudBee Robotics do?",
    a: "We help industrial teams automate contact-rich manipulation — tasks decided by force and touch, not just vision. You generate a 4D replica of your own work cell and synthetic data on it, adapt and train foundation models for your robot, and run them on a self-recovering agentic OS.",
    cta: { label: "See the platform", to: "/product" },
  },
  {
    q: "What are the four products?",
    a: <Bullets items={products.map((p) => `${p.name}${p.key === "modellab" ? " + Copilot" : ""} — ${p.tagline}`)} />,
    cta: { label: "Explore the products", to: "/product" },
  },
  {
    q: "How do customers pay?",
    a: (
      <>
        <Bullets items={pricingModel.map((p) => `${p.title}: ${p.billing}`)} />
        <p className="mt-2">Rates are shared on request.</p>
      </>
    ),
    cta: { label: "See pricing", to: "/pricing" },
  },
  {
    q: "Can I try it before committing?",
    a: "Yes. We start with a free pilot demo on a small task similar to yours.",
    cta: { label: "Get a free pilot demo", to: "/contact?interest=Pilot%20Program" },
  },
  {
    q: "Which robots do you work with?",
    a: `Our pilots run on ${robotsText}. Other robots and sensors connect through KineBridge, our hardware standard.`,
    cta: { label: "How KineBridge works", to: "/product" },
  },
  {
    q: "What do you share under NDA?",
    a: "System architecture and methods, datasets, models and benchmarks, pilot results and customer names are shared with partners and investors under NDA.",
    cta: { label: "Request the technical brief", to: "/contact?interest=Partnership" },
  },
  {
    q: "Are you raising investment?",
    a: "Yes — we're raising a pre-seed round to turn pilots into paid deployments. The deck, round details and financials are shared on request.",
    cta: { label: "For investors", to: "/#investors" },
  },
  {
    q: "Where are you based, and who backs you?",
    a: "Aachen, Germany. CloudBee Robotics is an EXIST-funded start-up project at RWTH Aachen, with its own hardware lab at the Collective Incubator and a WestAI compute grant.",
  },
  {
    q: "Do you offer jobs or thesis positions?",
    a: "Yes — open roles and master's thesis positions are listed on our careers page.",
    cta: { label: "See careers", to: "/careers" },
  },
  {
    q: "How do I contact you?",
    a: `Email ${CONTACT_EMAIL} or use the contact form.`,
    cta: { label: "Open the contact form", to: "/contact" },
  },
];

export function FaqWidget() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<number | null>(0);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        onClick={() => setOpen(true)}
        aria-label="Open frequently asked questions"
        aria-expanded={open}
        className="fixed bottom-4 right-4 z-50 flex h-12 items-center gap-2 rounded-full bg-primary pl-4 pr-5 text-primary-foreground shadow-lg transition-colors hover:bg-primary/90 sm:bottom-6 sm:right-6 sm:h-14"
      >
        <HelpCircle className="h-5 w-5" />
        <span className="text-sm font-semibold">FAQ</span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-label="Frequently asked questions"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-4 right-4 z-50 flex max-h-[min(640px,calc(100vh-2rem))] w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl sm:bottom-6 sm:right-6 sm:w-[400px]"
          >
            <div className="flex items-center justify-between border-b border-border bg-muted/30 px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <HelpCircle className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">Questions about CloudBee Robotics</h3>
                  <p className="text-xs text-muted-foreground">Quick answers from our team</p>
                </div>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Close FAQ" className="text-muted-foreground transition-colors hover:text-foreground">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-2 py-1">
              {faqs.map((f, i) => {
                const isOpen = active === i;
                return (
                  <div key={f.q} className="border-b border-border/60 last:border-0">
                    <button
                      onClick={() => setActive(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-3 px-3 py-3 text-left text-sm font-semibold text-foreground transition-colors hover:text-accent-blue"
                    >
                      {f.q}
                      <ChevronDown size={16} className={`shrink-0 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="px-3 pb-4 text-sm leading-relaxed text-muted-foreground">
                            <div>{f.a}</div>
                            {f.cta && (
                              <Link
                                to={f.cta.to}
                                onClick={() => setOpen(false)}
                                className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-blue transition-all hover:gap-2"
                              >
                                {f.cta.label} <ArrowRight size={14} />
                              </Link>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-between gap-3 border-t border-border bg-muted/30 px-4 py-3 text-xs">
              <span className="text-muted-foreground">Didn't find your answer?</span>
              <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-1.5 font-semibold text-accent-blue hover:underline">
                <Mail size={13} /> Email us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
