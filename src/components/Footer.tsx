import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";
import { LogoBadge } from "@/components/Navbar";
import { CONTACT_EMAIL } from "@/data/company";

const linkedInUrl = "https://www.linkedin.com/company/cloudbeerobotics/";

const explore = [
  { to: "/team", label: "Team" },
  { to: "/careers", label: "Careers" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

const backedBy = [
  { name: "EXIST", url: "https://www.exist.de" },
  { name: "WestAI", url: "https://westai.de" },
  { name: "Collective Incubator", url: "https://www.collective-incubator.de" },
  { name: "RWTH Aachen University", url: "https://www.rwth-aachen.de" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="section-container py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="max-w-sm">
            <Link to="/" className="mb-4 inline-block" aria-label="CloudBee Robotics - home">
              <LogoBadge className="h-9" />
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">CloudBee Robotics · Aachen, Germany</p>
            <a
              href="https://www.google.com/maps/place/Collective+Incubator/@50.7850548,6.1073097,17z/data=!4m6!3m5!1s0x47c09b20c34800b5:0x40128dcd06f393a0!8m2!3d50.7856865!4d6.1087014"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block text-sm leading-relaxed text-muted-foreground transition-colors hover:text-primary"
            >
              Collective Incubator, Aachen
              <br />
              Jülicher Str. 209q-s
              <br />
              52070 Aachen, Germany
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="mt-3 block text-sm font-medium text-primary hover:underline">
              {CONTACT_EMAIL}
            </a>
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CloudBee Robotics on LinkedIn"
              className="mt-5 inline-flex rounded-md border border-border p-2 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <Linkedin size={16} />
            </a>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-foreground">Explore</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {explore.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="transition-colors hover:text-primary">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-foreground">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/impressum" className="transition-colors hover:text-primary">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="transition-colors hover:text-primary">
                  Datenschutz (Privacy Notice)
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-8">
          <div className="mb-3 text-[13px] font-bold uppercase tracking-[3px] text-primary">Backed by</div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {backedBy.map((b) => (
              <a key={b.name} href={b.url} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">
                {b.name}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row">
          <div>© 2026 CloudBee Robotics</div>
          <div>Built in Aachen, Germany</div>
        </div>
      </div>
    </footer>
  );
}
