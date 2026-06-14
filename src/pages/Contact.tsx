import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { Mail, MapPin, Globe, Send, Loader2, CheckCircle2, Linkedin } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { HeroBackdrop } from "@/components/HeroBackdrop";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  company: z.string().trim().max(150).optional().or(z.literal("")),
  email: z.string().trim().email("Invalid email").max(255),
  interest: z.enum(["Pilot Program", "Partnership", "Investment", "Research Collaboration", "Other"]),
  message: z.string().trim().min(10, "Please add a bit more detail").max(2000),
});

const interests = ["Pilot Program", "Partnership", "Investment", "Research Collaboration", "Other"] as const;
const linkedInUrl = "https://www.linkedin.com/company/cloudbeerobotics/";

export default function Contact() {
  const [form, setForm] = useState({ name: "", company: "", email: "", interest: "Pilot Program", message: "" });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      const first = Object.values(parsed.error.flatten().fieldErrors)[0]?.[0];
      toast.error(first ?? "Please review the form");
      return;
    }
    setLoading(true);
    try {
      const { error } = await supabase.from("contact_inquiries").insert({
        name: parsed.data.name,
        company: parsed.data.company || null,
        email: parsed.data.email,
        interest: parsed.data.interest,
        message: parsed.data.message,
      });
      if (error) throw error;
      // Best-effort email notification (won't block UX if not configured)
      supabase.functions.invoke("send-contact-email", { body: parsed.data }).catch(() => {});
      setDone(true);
      toast.success("Message sent. We'll be in touch shortly.");
      setForm({ name: "", company: "", email: "", interest: "Pilot Program", message: "" });
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : "Failed to send. Please email info@cloudbeerobotics.de directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageShell
      title="Contact — CloudBee Robotics"
      description="Get in touch with CloudBee Robotics. Pilot partnerships, research collaboration, and investment inquiries welcome."
      path="/contact"
    >
      <section className="relative pt-32 lg:pt-40 pb-16 bg-hero-gradient overflow-hidden">
        <HeroBackdrop accent="violet" />
        <div className="section-container relative z-10 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="text-xs font-mono uppercase tracking-wider text-accent-blue mb-4">Contact</div>
            <h1 className="font-display font-bold text-4xl lg:text-6xl leading-tight mb-5">
              Let's <span className="text-gradient-blue">Build Together.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Whether you're looking to run a pilot, explore a partnership, or just want to learn more — we'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-spacing border-t border-border">
        <div className="section-container">
          <div className="grid lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
            {/* Contact details */}
            <div className="lg:col-span-2 space-y-6">
              <div className="glass-card p-6">
                <h3 className="font-display font-semibold text-lg mb-5 text-foreground">Reach Out</h3>
                <div className="space-y-4 text-sm">
                  <a href="mailto:info@cloudbeerobotics.de" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                    <Mail size={16} className="text-accent-blue" />
                    info@cloudbeerobotics.de
                  </a>
                  <a href="mailto:mayurwaghchoure1995@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                    <Mail size={16} className="text-accent-green" />
                    <span>
                      mayurwaghchoure1995@gmail.com
                      <span className="block text-xs text-muted-foreground/70 font-mono">Founder & CEO — Mayur Waghchoure</span>
                    </span>
                  </a>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Globe size={16} className="text-accent-blue" />
                    cloudbeerobotics.de
                  </div>
                  <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                    <Linkedin size={16} className="text-accent-blue" />
                    CloudBee Robotics on LinkedIn
                  </a>
                  <a
                    href="https://www.google.com/maps/place/Collective+Incubator/@50.7850548,6.1073097,17z/data=!4m6!3m5!1s0x47c09b20c34800b5:0x40128dcd06f393a0!8m2!3d50.7856865!4d6.1087014"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <MapPin size={16} className="text-accent-blue mt-0.5 shrink-0" />
                    <span>
                      Collective Incubator<br />
                      Jülicher Str. 209q-s<br />
                      52070 Aachen, Germany
                      <span className="block text-xs text-accent-blue/80 font-mono mt-1">Open in Google Maps →</span>
                    </span>
                  </a>
                </div>
              </div>

              <div className="glass-card p-6">
                <h3 className="font-display font-semibold text-base mb-2 text-foreground">Want to talk?</h3>
                <p className="text-sm text-muted-foreground">
                  Interested in a 20–30 min intro call? Reach out and let's schedule something.
                </p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={submit} className="lg:col-span-3 glass-card p-7 space-y-5">
              {done ? (
                <div className="py-12 text-center">
                  <CheckCircle2 size={48} className="text-accent-green mx-auto mb-4" />
                  <h3 className="font-display font-bold text-xl mb-2">Message sent.</h3>
                  <p className="text-muted-foreground text-sm">We'll get back to you within a few business days.</p>
                  <button type="button" onClick={() => setDone(false)} className="mt-6 text-accent-blue text-sm font-semibold">
                    Send another
                  </button>
                </div>
              ) : (
                <>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Name *">
                      <input required type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="input-base" />
                    </Field>
                    <Field label="Company / Organization">
                      <input type="text" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="input-base" />
                    </Field>
                  </div>
                  <Field label="Email *">
                    <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="input-base" />
                  </Field>
                  <Field label="Interest *">
                    <select value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })} className="input-base">
                      {interests.map((i) => <option key={i} value={i}>{i}</option>)}
                    </select>
                  </Field>
                  <Field label="Message *">
                    <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="input-base resize-y" placeholder="Tell us about your use case, robot platform, or what you'd like to explore..." />
                  </Field>
                  <button type="submit" disabled={loading} className="btn-pilot w-full sm:w-auto disabled:opacity-60">
                    {loading ? <><Loader2 size={16} className="animate-spin" /> Sending…</> : <><Send size={16} /> Send Message</>}
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </section>

      <style>{`
        .input-base {
          width: 100%;
          background: hsl(var(--surface));
          border: 1px solid hsl(var(--border));
          border-radius: 0.5rem;
          padding: 0.65rem 0.85rem;
          font-size: 0.9rem;
          color: hsl(var(--foreground));
          transition: border-color .2s, box-shadow .2s;
        }
        .input-base:focus {
          outline: none;
          border-color: hsl(var(--accent-blue));
          box-shadow: 0 0 0 3px hsl(var(--accent-blue) / 0.15);
        }
      `}</style>
    </PageShell>
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
