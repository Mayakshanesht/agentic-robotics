import { useState } from "react";
import { z } from "zod";
import { Loader2, Send, CheckCircle2, X, Mail } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { GdprConsent } from "@/components/GdprConsent";
import { THESIS_CONTACT_EMAIL, thesisDates } from "@/data/theses";

const jobSchema = z.object({
  full_name: z.string().trim().min(2, "Name is required").max(120),
  email: z.string().trim().email("Valid email required").max(255),
  location: z.string().trim().max(120).optional().or(z.literal("")),
  linkedin: z.string().trim().url("Must be a valid URL").max(255).optional().or(z.literal("")),
  portfolio: z.string().trim().url("Must be a valid URL").max(255).optional().or(z.literal("")),
  cover_letter: z.string().trim().min(40, "Tell us a bit more (40+ chars)").max(4000),
});

// Thesis answers are folded into cover_letter, so keep its limit well under the 4000 the table/email accept.
const thesisSchema = jobSchema.extend({
  university: z.string().trim().min(2, "Tell us your university and master's programme").max(160),
  portfolio: z.string().trim().url("Link something you have built (a valid URL)").max(255),
  supervisor_status: z.string().min(1, "Tell us whether you have a potential supervisor"),
  supervisor_name: z.string().trim().max(160).optional().or(z.literal("")),
  earliest_start: z.string().min(1, "Choose your earliest start date"),
  cover_letter: z.string().trim().min(40, "Tell us a bit more (40+ chars)").max(2500),
});

const SUPERVISOR_OPTIONS = [
  "Yes — a professor has agreed to supervise",
  "In discussion with a professor",
  "Not yet — I need the topic proposal",
];

const START_OPTIONS = [thesisDates.start, "December 2026", "January 2027", "Later — by agreement"];

const EMPTY_FORM = {
  full_name: "", email: "", location: "", linkedin: "", portfolio: "", cover_letter: "",
  university: "", supervisor_status: "", supervisor_name: "", earliest_start: "",
};

type FormState = typeof EMPTY_FORM;

const firstError = (error: z.ZodError) =>
  Object.values(error.flatten().fieldErrors)[0]?.[0] ?? "Please review the form";

const toApplication = (d: z.infer<typeof jobSchema>, coverLetter = d.cover_letter) => ({
  full_name: d.full_name,
  email: d.email,
  location: d.location || null,
  linkedin: d.linkedin || null,
  portfolio: d.portfolio || null,
  cover_letter: coverLetter,
});

function buildApplication(form: FormState, isThesis: boolean) {
  if (!isThesis) {
    const parsed = jobSchema.safeParse(form);
    return parsed.success ? { data: toApplication(parsed.data) } : { error: firstError(parsed.error) };
  }
  const parsed = thesisSchema.safeParse(form);
  if (!parsed.success) return { error: firstError(parsed.error) };
  const d = parsed.data;
  const supervisor = d.supervisor_name ? `${d.supervisor_status} (${d.supervisor_name})` : d.supervisor_status;
  return {
    data: toApplication(
      d,
      [
        `University & programme: ${d.university}`,
        `Potential supervisor: ${supervisor}`,
        `Earliest start: ${d.earliest_start}`,
        "",
        "Why this topic:",
        d.cover_letter,
      ].join("\n"),
    ),
  };
}

interface Props {
  role: string;
  open: boolean;
  onClose: () => void;
  /** "thesis" also asks for university, supervisor and start date, then follows up for CV + transcript by email. */
  variant?: "job" | "thesis";
}

export function JobApplicationDialog({ role, open, onClose, variant = "job" }: Props) {
  const isThesis = variant === "thesis";
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [gdpr, setGdpr] = useState(false);

  if (!open) return null;

  const set = (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm({ ...form, [key]: e.target.value });

  // Start fresh after a successful submission so the next role can be applied for; keep unsent drafts.
  const close = () => {
    if (done) {
      setDone(false);
      setForm(EMPTY_FORM);
      setGdpr(false);
    }
    onClose();
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!gdpr) {
      toast.error("Please accept the data-processing notice (GDPR) to continue.");
      return;
    }
    const result = buildApplication(form, isThesis);
    if (!result.data) {
      toast.error(result.error);
      return;
    }
    setLoading(true);
    try {
      const application = { role, ...result.data };
      const { error } = await supabase.from("job_applications").insert(application);
      if (error) throw error;
      // Best-effort email notification (won't block UX if not configured)
      supabase.functions
        .invoke("send-application-email", { body: application })
        .catch(() => {});
      setDone(true);
      toast.success("Application submitted. Thank you!");
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : "Failed to submit");
    } finally {
      setLoading(false);
    }
  };

  const documentsMailto = `mailto:${THESIS_CONTACT_EMAIL}?subject=${encodeURIComponent(
    `CV & transcript — ${role} — ${form.full_name}`,
  )}&body=${encodeURIComponent(
    `Hello,\n\nplease find my CV and transcript attached for the application I submitted on the website.\n\nBest regards,\n${form.full_name}`,
  )}`;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm" onClick={close}>
      <div
        className="glass-card max-w-2xl w-full p-7 max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={close} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground" aria-label="Close">
          <X size={20} />
        </button>

        {done ? (
          <div className="py-10 text-center">
            <CheckCircle2 size={48} className="text-accent-green mx-auto mb-4" />
            <h3 className="font-display font-bold text-2xl mb-2">Application received</h3>
            {isThesis ? (
              <>
                <p className="text-muted-foreground text-sm mb-5 max-w-md mx-auto">
                  One more step: email us your <strong className="text-foreground">CV and transcript</strong> so we can
                  review your application.
                </p>
                <a href={documentsMailto} className="btn-pilot">
                  <Mail size={16} /> Email CV &amp; transcript
                </a>
                <p className="text-xs text-muted-foreground mt-2 mb-6">{THESIS_CONTACT_EMAIL}</p>
                <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
                  And if you have not yet,{" "}
                  <strong className="text-foreground">start talking to professors at your university now</strong> — the
                  thesis is registered with your examination office during {thesisDates.registration}.
                </p>
                <button onClick={close} className="text-sm font-semibold text-accent-blue hover:underline">Close</button>
              </>
            ) : (
              <>
                <p className="text-muted-foreground text-sm mb-6">We review every application and will get back to you within 1-2 weeks.</p>
                <button onClick={close} className="btn-pilot">Close</button>
              </>
            )}
          </div>
        ) : (
          <>
            <div className="text-xs font-mono uppercase tracking-wider text-accent-blue mb-2">
              {isThesis ? "Apply · Master's thesis" : "Apply"}
            </div>
            <h3 className="font-display font-bold text-2xl mb-1">{role}</h3>
            <p className="text-sm text-muted-foreground mb-6">
              {isThesis
                ? `External master's thesis · ${thesisDates.start} – ${thesisDates.end} · Aachen`
                : "Aachen, Germany · Full-time"}
            </p>

            <form onSubmit={submit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Full name *">
                  <input required className="input-base" value={form.full_name} onChange={set("full_name")} />
                </Field>
                <Field label="Email *">
                  <input required type="email" className="input-base" value={form.email} onChange={set("email")} />
                </Field>
                {isThesis && (
                  <Field label="University & master's programme *" className="sm:col-span-2">
                    <input required className="input-base" placeholder="e.g. RWTH Aachen · M.Sc. Computer Science" value={form.university} onChange={set("university")} />
                  </Field>
                )}
                <Field label="Location">
                  <input className="input-base" placeholder="City, Country" value={form.location} onChange={set("location")} />
                </Field>
                <Field label="LinkedIn">
                  <input className="input-base" placeholder="https://linkedin.com/in/…" value={form.linkedin} onChange={set("linkedin")} />
                </Field>
              </div>
              <Field label={isThesis ? "Something you have built *" : "Portfolio / GitHub / Google Scholar"}>
                <input
                  required={isThesis}
                  className="input-base"
                  placeholder={isThesis ? "Repository, project report or paper — https://…" : "https://…"}
                  value={form.portfolio}
                  onChange={set("portfolio")}
                />
              </Field>
              {isThesis && (
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Potential supervisor? *">
                    <select required className="input-base" value={form.supervisor_status} onChange={set("supervisor_status")}>
                      <option value="" disabled>Choose…</option>
                      {SUPERVISOR_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                    </select>
                  </Field>
                  <Field label="Earliest start *">
                    <select required className="input-base" value={form.earliest_start} onChange={set("earliest_start")}>
                      <option value="" disabled>Choose…</option>
                      {START_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                    </select>
                  </Field>
                  <Field label="Professor & chair, if known" className="sm:col-span-2">
                    <input className="input-base" placeholder="e.g. Prof. … · Chair of …" value={form.supervisor_name} onChange={set("supervisor_name")} />
                  </Field>
                </div>
              )}
              <Field label={isThesis ? "Why this topic, and which side of it do you come from? *" : "Why you, why CloudBee Robotics? *"}>
                <textarea
                  required
                  rows={isThesis ? 5 : 6}
                  className="input-base resize-y"
                  placeholder={
                    isThesis
                      ? "Two or three sentences are enough. Tell us what you would expect to learn, too."
                      : "Tell us about your background and what excites you about physical AI…"
                  }
                  value={form.cover_letter}
                  onChange={set("cover_letter")}
                />
              </Field>
              {isThesis && (
                <div className="rounded-lg border border-accent-blue/30 bg-accent-blue/5 p-4 text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Then email your CV and transcript</strong> to{" "}
                  <a href={`mailto:${THESIS_CONTACT_EMAIL}`} className="text-accent-blue hover:underline break-all">
                    {THESIS_CONTACT_EMAIL}
                  </a>
                  . We show you a pre-filled email right after you submit.
                </div>
              )}
              <div className="pt-1">
                <GdprConsent checked={gdpr} onChange={setGdpr} />
              </div>
              <button type="submit" disabled={loading || !gdpr} className="btn-pilot w-full disabled:opacity-60">
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

function Field({ label, className = "", children }: { label: string; className?: string; children: React.ReactNode }) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1.5">{label}</span>
      {children}
    </label>
  );
}
