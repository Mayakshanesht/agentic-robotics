import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown, HelpCircle, Mail, X } from "lucide-react";
import { CONTACT_EMAIL } from "@/data/company";

type Faq = { q: string; a: ReactNode; cta?: { label: string; to?: string; href?: string } };

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-2 space-y-1.5">
      {items.map((it) => (
        <li key={it} className="flex gap-2">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

/** Fixed answers only, outcome level: no internal module names, no pricing, no customer names. */
const faqs: Faq[] = [
  {
    q: "What does CloudBee Robotics do?",
    a: "You describe the task. We help build the skill for your robot, in your own work cell, so you do not need an R&D team of your own.",
    cta: { label: "How it works", to: "/#how-it-works" },
  },
  {
    q: "What do I need to get started?",
    a: "A task described in plain words. A phone video of your cell or a few demonstrations help, but are optional.",
  },
  {
    q: "How long does a first skill take?",
    a: "About 2 weeks for a pilot skill, with one engineer from your side. These are targets for our pilot programme, not guarantees.",
    cta: { label: "Book a pilot", href: `mailto:${CONTACT_EMAIL}?subject=Pilot%20request` },
  },
  {
    q: "Which robots do you support?",
    a: <Bullets items={["Robot arms", "Humanoids", "Dexterous hands"]} />,
  },
  {
    q: "What does it cost?",
    a: "We discuss commercial terms directly, based on your task and your robots. Start with a pilot and we will take it from there.",
    cta: { label: "Talk to us", href: `mailto:${CONTACT_EMAIL}?subject=Pilot%20request` },
  },
  {
    q: "What do you share under NDA?",
    a: "Technical detail, pilot results and anything commercial are shared with partners and investors under NDA.",
  },
  {
    q: "Are you raising investment?",
    a: "Yes, we are raising our pre-seed round. Investors can request our deck and a demo.",
    cta: { label: "For investors", to: "/#investors" },
  },
  {
    q: "Where are you based, and who backs you?",
    a: "Aachen, Germany. CloudBee Robotics is an RWTH Aachen spin-off, funded by an EXIST grant and a WestAI compute grant, with its own hardware lab at the Collective Incubator.",
  },
  {
    q: "Do you offer jobs or thesis positions?",
    a: "Open roles and master's thesis positions are listed on our careers page.",
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
                      className="flex w-full items-center justify-between gap-3 px-3 py-3 text-left text-sm font-semibold text-foreground transition-colors hover:text-primary"
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
                            {f.cta?.to && (
                              <Link
                                to={f.cta.to}
                                onClick={() => setOpen(false)}
                                className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all hover:gap-2"
                              >
                                {f.cta.label} <ArrowRight size={14} />
                              </Link>
                            )}
                            {f.cta?.href && (
                              <a
                                href={f.cta.href}
                                className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all hover:gap-2"
                              >
                                {f.cta.label} <ArrowRight size={14} />
                              </a>
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
              <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-1.5 font-semibold text-primary hover:underline">
                <Mail size={13} /> Email us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
