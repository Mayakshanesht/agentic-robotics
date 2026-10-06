import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { blogPosts as staticPosts } from "@/data/blog";
import { FadeUp, Kicker, Section } from "@/components/site/ui";

type Post = { title: string; excerpt: string; date: string; category: string; slug: string };

export function LatestPosts({ limit = 3 }: { limit?: number }) {
  const [posts, setPosts] = useState<Post[]>(staticPosts.slice(0, limit));

  useEffect(() => {
    (async () => {
      const { data } = await supabase
        .from("blog_posts")
        .select("title, excerpt, slug, category, created_at")
        .eq("published", true)
        .order("created_at", { ascending: false })
        .limit(limit);
      if (!data?.length) return;
      const dbPosts: Post[] = data.map((p) => ({
        title: p.title,
        excerpt: p.excerpt ?? "",
        date: new Date(p.created_at).toLocaleDateString("en-GB", { year: "numeric", month: "short", day: "numeric" }),
        category: p.category ?? "Update",
        slug: `/blog/${p.slug}`,
      }));
      const seen = new Set(dbPosts.map((p) => p.slug));
      setPosts([...dbPosts, ...staticPosts.filter((p) => !seen.has(p.slug))].slice(0, limit));
    })();
  }, [limit]);

  return (
    <Section id="blog" className="border-t border-border bg-white">
      <FadeUp className="flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-2xl">
          <Kicker>From the blog</Kicker>
          <h2 className="mt-4 text-[2rem] font-extrabold leading-tight tracking-[-1px] lg:text-[2.5rem]">
            What we are writing about.
          </h2>
        </div>
        <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2">
          All posts <ArrowRight size={14} />
        </Link>
      </FadeUp>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {posts.map((p, i) => (
          <FadeUp key={p.slug} delay={i * 0.07}>
            <Link
              to={p.slug}
              className="flex h-full flex-col rounded-2xl border border-border bg-[#F8FAFC] p-6 transition-colors hover:border-primary/40"
            >
              <div className="text-[13px] font-bold uppercase tracking-[3px] text-primary">{p.category}</div>
              <h3 className="mt-3 text-lg font-bold leading-snug text-foreground">{p.title}</h3>
              <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted-foreground">{p.excerpt}</p>
              <div className="mt-4 text-xs text-muted-foreground">{p.date}</div>
            </Link>
          </FadeUp>
        ))}
      </div>
    </Section>
  );
}
