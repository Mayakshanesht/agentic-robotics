import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, ExternalLink, Trophy, Rocket, Target } from "lucide-react";

const news = [
  {
    icon: Rocket,
    title: "Deloitte Problem-Solution Fit Program Begins",
    date: "September 2025",
    description: "Excited to announce CloudBee Robotics has been selected for the Deloitte Problem-Solution Fit program. Beginning our journey to validate and refine our agentic physical AI infrastructure.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7386834347191848960",
    highlight: "Program Start",
  },
  {
    icon: Trophy,
    title: "Successfully Completed Deloitte Program",
    date: "December 2025",
    description: "Proud to share that we've successfully completed the Deloitte Problem-Solution Fit program. Strong validation of our problem definition and solution direction for physical AI infrastructure.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7418516640637624320",
    highlight: "Milestone Achieved",
  },
  {
    icon: Target,
    title: "RWTH Ideation Program Halftime Pitch",
    date: "January 2026",
    description: "Delivered our halftime pitch at the RWTH Innovation Ideation Program. Great feedback on our progress and market positioning for scalable robotics infrastructure.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7422690213560229888",
    highlight: "In Progress",
  },
];

export function NewsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-spacing relative overflow-hidden" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Latest Updates
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6 text-foreground">
            News & <span className="text-gradient-teal">Milestones</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Follow our journey as we build the future of agentic physical AI.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-card border border-border rounded-2xl p-8 h-full hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                {/* Highlight badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                    {item.highlight}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                  <span className="text-muted-foreground text-xs flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.date}
                  </span>
                  <span className="text-primary text-xs font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Read on LinkedIn
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
