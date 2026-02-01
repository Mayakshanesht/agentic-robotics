import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, ExternalLink, Trophy, Rocket, Target, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const news = [
  {
    icon: Rocket,
    type: "news",
    title: "Deloitte Problem-Solution Fit Program Begins",
    date: "September 2025",
    description: "CloudBee Robotics selected for the Deloitte Problem-Solution Fit program to validate our agentic physical AI infrastructure.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7386834347191848960",
    highlight: "Program Start",
  },
  {
    icon: Trophy,
    type: "news",
    title: "Successfully Completed Deloitte Program",
    date: "December 2025",
    description: "Strong validation of our problem definition and solution direction for physical AI infrastructure.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7418516640637624320",
    highlight: "Milestone",
  },
  {
    icon: Target,
    type: "news",
    title: "RWTH Ideation Program Halftime Pitch",
    date: "January 2026",
    description: "Delivered our halftime pitch at the RWTH Innovation Ideation Program with great feedback on market positioning.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7422690213560229888",
    highlight: "In Progress",
    credit: "© RWTH Innovation GmbH",
  },
];

const blogPosts = [
  {
    title: "Why Physical AI Needs 4D Synthetic Data",
    excerpt: "Traditional approaches to robot training are hitting a wall. Here's why 4D world generation is the key.",
    date: "Jan 15, 2026",
    category: "Technology",
    slug: "/blog/why-physical-ai-needs-4d-synthetic-data",
  },
  {
    title: "The Sim-to-Real Gap: Solved",
    excerpt: "How world-aware AI models bridge the gap between simulation and real-world deployment.",
    date: "Jan 10, 2026",
    category: "Research",
    slug: "/blog/sim-to-real-gap-solved",
  },
];

export function NewsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-spacing relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Stay Updated
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6 text-foreground">
            Blog & <span className="text-gradient-teal">News</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Technical insights, research updates, and milestones from CloudBee Robotics.
          </p>
        </motion.div>

        {/* News Grid */}
        <div className="mb-16">
          <h3 className="font-display text-xl font-semibold mb-8 text-foreground">Latest News</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {news.map((item, index) => (
              <motion.a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-card border border-border rounded-2xl p-6 h-full hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                      {item.highlight}
                    </span>
                  </div>

                  <h4 className="font-display text-base font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-muted-foreground text-xs flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.date}
                    </span>
                    <ExternalLink className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  {item.credit && (
                    <p className="text-xs text-muted-foreground/60 mt-2">{item.credit}</p>
                  )}
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Blog Posts */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-display text-xl font-semibold text-foreground">From the Blog</h3>
            <Link to="/blog" className="text-primary text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
              View all posts <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts.map((post, index) => (
              <Link key={post.title} to={post.slug}>
                <motion.article
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="group bg-card border border-border rounded-2xl p-6 h-full hover:border-primary/30 transition-all duration-300"
                >
                  <span className="text-primary text-sm font-medium">{post.category}</span>
                  <h4 className="font-display text-lg font-semibold mt-2 mb-3 text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground text-xs flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {post.date}
                    </span>
                    <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
