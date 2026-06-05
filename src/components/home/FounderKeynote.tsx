import { motion } from "framer-motion";
import founderKeynote from "@/assets/founder-keynote.jpeg.asset.json";

export function FounderKeynote() {
  return (
    <section className="relative w-full overflow-hidden bg-background">
      <div className="relative w-full">
        <motion.img
          src={founderKeynote.url}
          alt="Mayur Waghchoure, Founder & CEO of CloudBee Robotics, presenting Infrastructure for Agentic Physical AI"
          initial={{ opacity: 0, scale: 1.02 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="w-full h-[60vh] lg:h-[80vh] object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/30 pointer-events-none" />

        <div className="absolute bottom-0 left-0 right-0">
          <div className="section-container pb-10 lg:pb-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background/60 backdrop-blur border border-accent-blue/30 text-[10px] font-mono uppercase tracking-[0.25em] text-accent-blue mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse" />
                Founder Keynote · Aachen
              </div>
              <h2 className="font-display font-bold text-3xl lg:text-5xl leading-tight text-foreground mb-3">
                Building the infrastructure for{" "}
                <span className="text-gradient-blue">agentic physical AI.</span>
              </h2>
              <p className="text-base lg:text-lg text-foreground/80 max-w-2xl">
                Mayur Waghchoure, Founder &amp; CEO of CloudBee Robotics, presenting the company's mission to ship the autonomous OS powering the next generation of intelligent robots.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
