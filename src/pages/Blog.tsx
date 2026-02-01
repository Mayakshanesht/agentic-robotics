import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, ExternalLink, Trophy, Rocket, Target } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    title: "Why Physical AI Needs 4D Synthetic Data",
    excerpt: "Traditional approaches to robot training are hitting a wall. Here's why 4D world generation is the key to scalable robot intelligence.",
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
  {
    title: "Introducing CloudBee Robotics Platform",
    excerpt: "We're building the infrastructure for agentic physical AI. Here's our vision for the future of robotics.",
    date: "Jan 5, 2026",
    category: "Announcement",
    slug: "/blog/introducing-cloudbee-robotics",
  },
];

const news = [
  {
    icon: Rocket,
    title: "Deloitte Problem-Solution Fit Program Begins",
    date: "September 2025",
    description: "CloudBee Robotics selected for the Deloitte Problem-Solution Fit program.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7386834347191848960",
  },
  {
    icon: Trophy,
    title: "Successfully Completed Deloitte Program",
    date: "December 2025",
    description: "Strong validation of our problem definition and solution direction.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7418516640637624320",
  },
  {
    icon: Target,
    title: "RWTH Ideation Program Halftime Pitch",
    date: "January 2026",
    description: "Delivered our halftime pitch at the RWTH Innovation Ideation Program.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7422690213560229888",
    credit: "Photo credit: © RWTH Innovation GmbH",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="font-display text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              Blog & <span className="text-gradient-teal">News</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Technical insights, research updates, and milestones from CloudBee Robotics.
            </p>
          </motion.div>

          {/* Blog Posts */}
          <div className="mb-20">
            <h2 className="font-display text-2xl font-semibold mb-8 text-foreground">Blog Posts</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post, index) => (
                <Link key={post.title} to={post.slug}>
                  <motion.article
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group bg-card border border-border rounded-2xl p-6 h-full hover:border-primary/30 transition-all duration-300"
                  >
                    <span className="text-primary text-sm font-medium">{post.category}</span>
                    <h3 className="font-display text-xl font-semibold mt-2 mb-3 text-foreground group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
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

          {/* News */}
          <div>
            <h2 className="font-display text-2xl font-semibold mb-8 text-foreground">News & Milestones</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {news.map((item, index) => (
                <motion.a
                  key={item.title}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="group bg-card border border-border rounded-2xl p-6 h-full hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="font-display text-base font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                  <span className="text-muted-foreground text-xs flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {item.date}
                  </span>
                  {item.credit && (
                    <p className="text-xs text-muted-foreground/60 mt-2">{item.credit}</p>
                  )}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
