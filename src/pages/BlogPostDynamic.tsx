import { useEffect, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

interface Post {
  title: string;
  category: string;
  content: string;
  cover_image_url: string | null;
  created_at: string;
}

export default function BlogPostDynamic() {
  const { slug } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    (async () => {
      if (!slug) return;
      const { data, error } = await supabase
        .from("blog_posts")
        .select("title, category, content, cover_image_url, created_at")
        .eq("slug", slug)
        .eq("published", true)
        .maybeSingle();
      if (error || !data) setNotFound(true);
      else setPost(data);
      setLoading(false);
    })();
  }, [slug]);

  if (notFound) return <Navigate to="/blog" replace />;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20">
        <article className="section-container max-w-3xl mx-auto">
          <Link to="/blog">
            <Button variant="ghost" className="mb-8 -ml-4">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
            </Button>
          </Link>
          {loading ? (
            <div className="text-muted-foreground">Loading...</div>
          ) : post ? (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="text-xs font-mono uppercase tracking-wider text-accent-blue">{post.category}</span>
              <h1 className="font-display text-3xl lg:text-4xl font-bold mt-2 mb-4">{post.title}</h1>
              <div className="flex items-center gap-2 text-muted-foreground text-sm mb-8">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.created_at).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</span>
              </div>
              {post.cover_image_url && (
                <img src={post.cover_image_url} alt={post.title} className="w-full rounded-xl mb-8 border border-border" />
              )}
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed whitespace-pre-wrap">
                {post.content}
              </div>
            </motion.div>
          ) : null}
        </article>
      </main>
      <Footer />
    </div>
  );
}
