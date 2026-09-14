import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { HeroBackdrop } from "@/components/HeroBackdrop";
import { JobApplicationDialog } from "@/components/JobApplicationDialog";
import {
  SupervisorCallout,
  ThesisProgramDetails,
  ThesisQuestion,
  ThesisSkills,
  ThesisTimeline,
} from "@/components/careers/ThesisProgram";
import { THESIS_CONTACT_EMAIL, theses, thesisDates, thesisRole } from "@/data/theses";

export default function ThesisDetail() {
  const { slug } = useParams();
  const [applying, setApplying] = useState(false);
  const thesis = theses.find((t) => t.slug === slug);

  if (!thesis) return <Navigate to="/careers" replace />;

  const otherTheses = theses.filter((t) => t.slug !== thesis.slug);

  return (
    <PageShell
      title={`Master's Thesis: ${thesis.title} - CloudBee Robotics`}
      description={`External master's thesis at CloudBee Robotics in Aachen, ${thesisDates.start} – ${thesisDates.end}. ${thesis.focus}. Applications until ${thesisDates.applicationsClose}.`}
      path={`/careers/${thesis.slug}`}
    >
      <section className="relative pt-32 lg:pt-40 pb-14 bg-hero-gradient overflow-hidden">
        <HeroBackdrop accent="blue" />
        <div className="section-container relative z-10 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link
              to="/careers"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft size={14} /> All open positions
            </Link>
            <div className="text-xs font-mono uppercase tracking-wider text-accent-green mb-4">
              Master's Thesis · Topic {thesis.number} of {theses.length}
            </div>
            <h1 className="font-display font-bold text-3xl lg:text-5xl leading-tight mb-4">{thesis.title}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">{thesis.focus}</p>
            <div className="mt-6 flex flex-wrap gap-2 text-xs font-mono">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border bg-surface/60 text-muted-foreground">
                <MapPin size={12} className="text-accent-blue" /> Aachen · on-site
              </span>
              {[`${thesisDates.start} – ${thesisDates.end}`, "No salary", `Applications until ${thesisDates.applicationsClose}`].map(
                (chip) => (
                  <span key={chip} className="px-3 py-1.5 rounded-md border border-border bg-surface/60 text-muted-foreground">
                    {chip}
                  </span>
                ),
              )}
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
              <button onClick={() => setApplying(true)} className="btn-pilot">
                Apply for this thesis
              </button>
              <span className="text-xs text-muted-foreground">
                Then email your CV and transcript to{" "}
                <a href={`mailto:${THESIS_CONTACT_EMAIL}`} className="text-accent-blue hover:underline break-all">
                  {THESIS_CONTACT_EMAIL}
                </a>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-spacing border-t border-border">
        <div className="section-container max-w-4xl space-y-8">
          <div className="space-y-4">
            {thesis.intro.map((para) => (
              <p key={para.slice(0, 40)} className="text-base text-muted-foreground leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          <ThesisQuestion question={thesis.question} />

          <div className="glass-card p-6 lg:p-7">
            <ThesisSkills thesis={thesis} />
          </div>

          <SupervisorCallout />
          <ThesisTimeline />
          <ThesisProgramDetails />

          <div className="glass-card p-6 lg:p-8 border-accent-green/40">
            <h2 className="font-display font-bold text-2xl text-foreground">Ready to apply?</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Applications close {thesisDates.applicationsClose} and are reviewed as they arrive.
            </p>
            <button onClick={() => setApplying(true)} className="btn-pilot mt-5">
              Apply for this thesis
            </button>
            <div className="mt-6 pt-5 border-t border-border">
              <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">Other thesis topics</div>
              <ul className="space-y-2">
                {otherTheses.map((t) => (
                  <li key={t.slug}>
                    <Link
                      to={`/careers/${t.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-blue hover:gap-2 transition-all"
                    >
                      Topic {t.number} · {t.title} <ArrowRight size={14} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <JobApplicationDialog
        role={thesisRole(thesis)}
        open={applying}
        onClose={() => setApplying(false)}
        variant="thesis"
      />
    </PageShell>
  );
}
