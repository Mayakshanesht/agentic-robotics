import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, ExternalLink } from "lucide-react";
import { news, blogPosts } from "@/data/blog";
import pitchIncubator from "@/assets/hero/pitch-incubator.jpeg";
import teamWorkshop from "@/assets/hero/team-workshop.jpeg";
import physicalAiTalk from "@/assets/hero/physical-ai-talk.jpeg";
import founderPresenting from "@/assets/hero/founder-presenting.jpeg";
import robotHumanoid from "@/assets/hero/robot-humanoid.jpg";
import robotArm from "@/assets/hero/robot-arm.jpg";

// Pair each news/blog item with an image from existing assets.
const newsImages: Record<string, { src: string; position?: string }> = {
  "CloudBee Robotics Awarded EXIST Funding": { src: pitchIncubator, position: "center 25%" },
  "Deloitte Problem-Solution Fit Program Begins": { src: founderPresenting, position: "center 20%" },
  "Successfully Completed Deloitte Program": { src: teamWorkshop, position: "center 20%" },
  "RWTH Innovation Ideation Program Completed": { src: physicalAiTalk, position: "center center" },
};

const blogImages: Record<string, { src: string; position?: string }> = {
  "Why Physical AI Needs 4D Synthetic Data": { src: robotArm },
  "The Sim-to-Real Gap: Solved": { src: robotHumanoid, position: "center 30%" },
  "Introducing CloudBee Robotics Platform": { src: pitchIncubator, position: "center 25%" },
};

export function HomeNews() {
  const featuredNews = news.slice(0, 3);
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <section className="section-spacing border-t border-border bg-surface/30" id="news">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="flex items-end justify-between flex-wrap gap-4 mb-10"
        >
          <div className="max-w-xl">
            <div className="text-xs font-mono uppercase tracking-wider text-accent-blue mb-3">News & Updates</div>
            <h2 className="font-display font-bold text-3xl lg:text-4xl">
              The latest from <span className="text-gradient-blue">CloudBee.</span>
            </h2>
          </div>
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-accent-blue hover:gap-3 transition-all">
            View all <ArrowRight size={14} />
          </Link>
        </motion.div>

        {/* Announcements */}
        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {featuredNews.map((item, i) => {
            const img = newsImages[item.title];
            return (
              <motion.a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="glass-card overflow-hidden group flex flex-col"
              >
                {img && (
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={img.src}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ objectPosition: img.position ?? "center center" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                    <span className="absolute top-3 right-3 text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-full border border-accent-green/40 bg-accent-green/15 backdrop-blur text-accent-green">
                      {item.highlight}
                    </span>
                  </div>
                )}
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-display font-semibold text-base mb-2 text-foreground group-hover:text-accent-blue transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">{item.description}</p>
                  <div className="mt-auto flex items-center justify-between pt-3 border-t border-border">
                    <span className="text-xs text-muted-foreground inline-flex items-center gap-1.5">
                      <Calendar size={12} /> {item.date}
                    </span>
                    <ExternalLink size={14} className="text-accent-blue opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Blog posts */}
        <div className="grid md:grid-cols-3 gap-5">
          {featuredPosts.map((post, i) => {
            const img = blogImages[post.title];
            return (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <Link to={post.slug} className="block glass-card overflow-hidden group h-full flex flex-col">
                  {img && (
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={img.src}
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        style={{ objectPosition: img.position ?? "center center" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/20 to-transparent" />
                      <span className="absolute top-3 left-3 text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-full border border-accent-blue/40 bg-background/70 backdrop-blur text-accent-blue">
                        {post.category}
                      </span>
                    </div>
                  )}
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="font-display font-semibold text-base mb-2 text-foreground group-hover:text-accent-blue transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="mt-auto flex items-center justify-between pt-3 border-t border-border">
                      <span className="text-xs text-muted-foreground inline-flex items-center gap-1.5">
                        <Calendar size={12} /> {post.date}
                      </span>
                      <ArrowRight size={14} className="text-accent-blue opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
