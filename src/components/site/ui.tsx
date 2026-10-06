import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Kicker({ children }: { children: ReactNode }) {
  return <div className="text-[13px] font-bold uppercase tracking-[3px] text-primary">{children}</div>;
}

export function FadeUp({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Section({ id, children, className = "" }: { id?: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 lg:py-28 ${className}`}>
      <div className="section-container">{children}</div>
    </section>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-2xl border border-border bg-white shadow-[var(--shadow-card)] ${className}`}>{children}</div>;
}
