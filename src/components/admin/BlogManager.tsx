import { useEffect, useState } from "react";
import { Plus, Pencil, Trash2, X } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  cover_image_url: string | null;
  published: boolean;
  public_marketing_approved: boolean;
  created_at: string;
}

const empty: Omit<BlogPost, "id" | "created_at"> = {
  slug: "", title: "", excerpt: "", content: "",
  category: "Announcement", cover_image_url: "", published: false, public_marketing_approved: false,
};

export function BlogManager() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [editing, setEditing] = useState<BlogPost | null>(null);
  const [form, setForm] = useState(empty);
  const [showForm, setShowForm] = useState(false);
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();

  const fetch = async () => {
    const { data } = await supabase.from("blog_posts").select("*").order("created_at", { ascending: false });
    setPosts((data as BlogPost[]) || []);
  };
  useEffect(() => { fetch(); }, []);

  const openNew = () => { setEditing(null); setForm(empty); setShowForm(true); };
  const openEdit = (p: BlogPost) => {
    setEditing(p);
    setForm({ slug: p.slug, title: p.title, excerpt: p.excerpt, content: p.content, category: p.category, cover_image_url: p.cover_image_url || "", published: p.published, public_marketing_approved: p.public_marketing_approved === true });
    setShowForm(true);
  };

  const slugify = (s: string) => s.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").slice(0, 80);

  // Editing public material invalidates its previous confidentiality review.
  const updateContent = (field: "title" | "slug" | "category" | "cover_image_url" | "excerpt" | "content", value: string) => {
    setForm((current) => ({ ...current, [field]: value, public_marketing_approved: false }));
  };

  const save = async () => {
    if (form.published && !form.public_marketing_approved) {
      toast({ title: "Public review required", description: "Review the copy and image for proprietary technology and customer confidentiality before publishing.", variant: "destructive" });
      return;
    }
    setSaving(true);
    const payload = { ...form, slug: form.slug || slugify(form.title), cover_image_url: form.cover_image_url || null };
    const { error } = editing
      ? await supabase.from("blog_posts").update(payload).eq("id", editing.id)
      : await supabase.from("blog_posts").insert(payload);
    setSaving(false);
    if (error) { toast({ title: "Save failed", description: error.message, variant: "destructive" }); return; }
    toast({ title: form.published ? "Post published" : "Draft saved" });
    setShowForm(false); fetch();
  };

  const remove = async (id: string) => {
    if (!confirm("Delete this post?")) return;
    const { error } = await supabase.from("blog_posts").delete().eq("id", id);
    if (error) { toast({ title: "Delete failed", variant: "destructive" }); return; }
    fetch();
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <p className="text-sm text-muted-foreground">{posts.length} posts in database</p>
        <Button size="sm" onClick={openNew}><Plus className="w-4 h-4 mr-2" /> New Post</Button>
      </div>

      <p className="rounded-lg border border-border bg-muted/30 p-4 text-sm text-muted-foreground">
        Publish marketing and company news only. Keep proprietary technology, internal procedures, customer names,
        logos, identifying images, and confidential pilot results out of public posts. Review the title, summary,
        article, URL, and cover image before approving. Existing posts remain hidden until this review is recorded.
      </p>

      {showForm && (
        <div className="glass-card p-6 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-display font-semibold">{editing ? "Edit Post" : "New Post"}</h3>
            <Button variant="ghost" size="sm" onClick={() => setShowForm(false)}><X className="w-4 h-4" /></Button>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            <div>
              <Label>Title</Label>
              <Input value={form.title} onChange={(e) => updateContent("title", e.target.value)} />
            </div>
            <div>
              <Label>Slug (URL)</Label>
              <Input value={form.slug} placeholder="auto from title" onChange={(e) => updateContent("slug", e.target.value)} />
            </div>
            <div>
              <Label>Category</Label>
              <Input value={form.category} onChange={(e) => updateContent("category", e.target.value)} />
            </div>
            <div>
              <Label>Cover Image URL (optional)</Label>
              <Input value={form.cover_image_url || ""} onChange={(e) => updateContent("cover_image_url", e.target.value)} />
            </div>
          </div>
          <div>
            <Label>Excerpt (short summary)</Label>
            <Textarea rows={2} value={form.excerpt} onChange={(e) => updateContent("excerpt", e.target.value)} />
          </div>
          <div>
            <Label>Content (full post)</Label>
            <Textarea rows={10} value={form.content} onChange={(e) => updateContent("content", e.target.value)} />
          </div>
          <div className="flex items-start gap-2">
            <input
              id="public-review"
              type="checkbox"
              className="mt-1"
              checked={form.public_marketing_approved}
              onChange={(e) => setForm({ ...form, public_marketing_approved: e.target.checked })}
            />
            <div>
              <Label htmlFor="public-review" className="cursor-pointer">Reviewed for public marketing</Label>
              <p className="mt-1 text-xs text-muted-foreground">
                I reviewed all copy and imagery. This post contains no proprietary technology, internal procedures,
                customer names or logos, identifying images, or confidential customer results. Editing the post
                clears this approval and requires a fresh review.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <input id="pub" type="checkbox" checked={form.published} onChange={(e) => setForm({ ...form, published: e.target.checked })} />
            <Label htmlFor="pub" className="cursor-pointer">Publish after public review</Label>
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setShowForm(false)}>Cancel</Button>
            <Button onClick={save} disabled={saving || !form.title || !form.excerpt || !form.content || (form.published && !form.public_marketing_approved)}>
              {saving ? "Saving..." : form.published ? "Publish" : "Save draft"}
            </Button>
          </div>
        </div>
      )}

      <div className="space-y-3">
        {posts.map((p) => (
          <div key={p.id} className="glass-card p-4 flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono uppercase text-accent-blue">{p.category}</span>
                {!p.published && <span className="text-xs font-mono px-2 py-0.5 rounded bg-muted text-muted-foreground">draft</span>}
                {p.published && !p.public_marketing_approved && <span className="text-xs font-mono px-2 py-0.5 rounded bg-muted text-muted-foreground">awaiting public review</span>}
              </div>
              <h4 className="font-display font-semibold text-foreground truncate">{p.title}</h4>
              <p className="text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
              <p className="text-xs text-muted-foreground mt-1 font-mono">/blog/{p.slug}</p>
            </div>
            <div className="flex gap-1 shrink-0">
              <Button variant="ghost" size="sm" onClick={() => openEdit(p)}><Pencil className="w-4 h-4" /></Button>
              <Button variant="ghost" size="sm" className="text-destructive" onClick={() => remove(p.id)}><Trash2 className="w-4 h-4" /></Button>
            </div>
          </div>
        ))}
        {posts.length === 0 && (
          <div className="glass-card p-12 text-center text-muted-foreground text-sm">No posts yet. Click "New Post" to add one.</div>
        )}
      </div>
    </div>
  );
}
