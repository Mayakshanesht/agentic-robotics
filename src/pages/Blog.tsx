import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, ExternalLink } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { blogPosts as staticPosts, news } from "@/data/blog";
import { supabase } from "@/integrations/supabase/client";

type Post = { slug: string; title: string; excerpt: string; date: string; category: string };

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>(staticPosts);

  useEffect(() => {
    (async () => {
      const { data } = await supabase
        .from("blog_posts")
        .select("slug, title, excerpt, category, created_at")
        .eq("published", true)
        .order("created_at", { ascending: false });
      if (data && data.length) {
        const dbPosts: Post[] = data.map((p) => ({
          slug: `/blog/${p.slug}`,
          title: p.title,
          excerpt: p.excerpt,
          category: p.category,
          date: new Date(p.created_at).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }),
        }));
        // Merge DB posts first, then static ones (de-duped by slug)
        const seen = new Set(dbPosts.map((p) => p.slug));
        setPosts([...dbPosts, ...staticPosts.filter((p) => !seen.has(p.slug))]);
      }
    })();
  }, []);
  return (
    <PageShell
      title="Blog & News — CloudBee Robotics"
      description="Technical insights, research updates, and milestones from CloudBee Robotics."
      path="/blog"
    >
      <section className="relative pt-32 lg:pt-40 pb-16 bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="section-container relative z-10 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="text-xs font-mono uppercase tracking-wider text-accent-blue mb-4">Blog & News</div>
            <h1 className="font-display font-bold text-4xl lg:text-6xl leading-tight mb-5">
              Notes from the <span className="text-gradient-blue">frontier.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Technical insights, research updates, and milestones from CloudBee Robotics.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-spacing border-t border-border">
        <div className="section-container">
          <div className="flex items-baseline justify-between mb-10">
            <h2 className="font-display font-bold text-2xl lg:text-3xl">Blog</h2>
            <span className="text-xs font-mono text-muted-foreground">{posts.length} posts</span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <Link to={post.slug} className="block glass-card p-6 h-full group">
                  <div className="text-xs font-mono uppercase tracking-wider text-accent-blue mb-3">
                    {post.category}
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-3 text-foreground group-hover:text-accent-blue transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-xs text-muted-foreground inline-flex items-center gap-1.5">
                      <Calendar size={12} /> {post.date}
                    </span>
                    <ArrowRight size={14} className="text-accent-blue opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section className="section-spacing border-t border-border bg-surface/30">
        <div className="section-container">
          <div className="flex items-baseline justify-between mb-10">
            <h2 className="font-display font-bold text-2xl lg:text-3xl">Announcements</h2>
            <span className="text-xs font-mono text-muted-foreground">{news.length} updates</span>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {news.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.title}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="glass-card p-6 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-11 h-11 rounded-lg bg-accent-blue/10 text-accent-blue flex items-center justify-center">
                      <Icon size={20} />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-full border border-accent-green/30 bg-accent-green/10 text-accent-green">
                      {item.highlight}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-base mb-2 text-foreground group-hover:text-accent-blue transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-xs text-muted-foreground inline-flex items-center gap-1.5">
                      <Calendar size={12} /> {item.date}
                    </span>
                    <ExternalLink size={14} className="text-accent-blue opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>
                  {item.credit && <div className="text-[10px] text-muted-foreground/60 mt-2">{item.credit}</div>}
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
