import { useState } from "react";
import { z } from "zod";
import { Loader2, Send, CheckCircle2, X } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const schema = z.object({
  full_name: z.string().trim().min(2, "Name is required").max(120),
  email: z.string().trim().email("Valid email required").max(255),
  location: z.string().trim().max(120).optional().or(z.literal("")),
  linkedin: z.string().trim().url("Must be a valid URL").max(255).optional().or(z.literal("")),
  portfolio: z.string().trim().url("Must be a valid URL").max(255).optional().or(z.literal("")),
  cover_letter: z.string().trim().min(40, "Tell us a bit more (40+ chars)").max(4000),
});

interface Props {
  role: string;
  open: boolean;
  onClose: () => void;
}

export function JobApplicationDialog({ role, open, onClose }: Props) {
  const [form, setForm] = useState({
    full_name: "", email: "", location: "", linkedin: "", portfolio: "", cover_letter: "",
  });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  if (!open) return null;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(Object.values(parsed.error.flatten().fieldErrors)[0]?.[0] ?? "Please review the form");
      return;
    }
    setLoading(true);
    try {
      const { error } = await supabase.from("job_applications").insert({
        role,
        full_name: parsed.data.full_name,
        email: parsed.data.email,
        cover_letter: parsed.data.cover_letter,
        location: parsed.data.location || null,
        linkedin: parsed.data.linkedin || null,
        portfolio: parsed.data.portfolio || null,
      });
      if (error) throw error;
      setDone(true);
      toast.success("Application submitted. Thank you!");
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : "Failed to submit");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm" onClick={onClose}>
      <div
        className="glass-card max-w-2xl w-full p-7 max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground" aria-label="Close">
          <X size={20} />
        </button>

        {done ? (
          <div className="py-10 text-center">
            <CheckCircle2 size={48} className="text-accent-green mx-auto mb-4" />
            <h3 className="font-display font-bold text-2xl mb-2">Application received</h3>
            <p className="text-muted-foreground text-sm mb-6">We review every application and will get back to you within 1–2 weeks.</p>
            <button onClick={onClose} className="btn-pilot">Close</button>
          </div>
        ) : (
          <>
            <div className="text-xs font-mono uppercase tracking-wider text-accent-blue mb-2">Apply</div>
            <h3 className="font-display font-bold text-2xl mb-1">{role}</h3>
            <p className="text-sm text-muted-foreground mb-6">Aachen, Germany · Full-time</p>

            <form onSubmit={submit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Full name *">
                  <input required className="input-base" value={form.full_name} onChange={(e) => setForm({ ...form, full_name: e.target.value })} />
                </Field>
                <Field label="Email *">
                  <input required type="email" className="input-base" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </Field>
                <Field label="Location">
                  <input className="input-base" placeholder="City, Country" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} />
                </Field>
                <Field label="LinkedIn">
                  <input className="input-base" placeholder="https://linkedin.com/in/…" value={form.linkedin} onChange={(e) => setForm({ ...form, linkedin: e.target.value })} />
                </Field>
              </div>
              <Field label="Portfolio / GitHub / Google Scholar">
                <input className="input-base" placeholder="https://…" value={form.portfolio} onChange={(e) => setForm({ ...form, portfolio: e.target.value })} />
              </Field>
              <Field label="Why you, why CloudBee? *">
                <textarea required rows={6} className="input-base resize-y" placeholder="Tell us about your background and what excites you about physical AI…" value={form.cover_letter} onChange={(e) => setForm({ ...form, cover_letter: e.target.value })} />
              </Field>
              <button type="submit" disabled={loading} className="btn-pilot w-full disabled:opacity-60">
                {loading ? <><Loader2 size={16} className="animate-spin" /> Submitting…</> : <><Send size={16} /> Submit Application</>}
              </button>
              <p className="text-xs text-muted-foreground text-center">
                Applications are reviewed by the founding team.
              </p>
            </form>

            <style>{`
              .input-base {
                width: 100%;
                background: hsl(var(--surface));
                border: 1px solid hsl(var(--border));
                border-radius: 0.5rem;
                padding: 0.65rem 0.85rem;
                font-size: 0.9rem;
                color: hsl(var(--foreground));
              }
              .input-base:focus {
                outline: none;
                border-color: hsl(var(--accent-blue));
                box-shadow: 0 0 0 3px hsl(var(--accent-blue) / 0.15);
              }
            `}</style>
          </>
        )}
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1.5">{label}</span>
      {children}
    </label>
  );
}
