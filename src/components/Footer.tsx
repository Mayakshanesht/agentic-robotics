import { Link } from "react-router-dom";
import { Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  const linkedInUrl = "https://www.linkedin.com/company/cloudbeerobotics/";

  return (
    <footer className="border-t border-border bg-background">
      <div className="section-container py-14">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2 max-w-sm">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <img src={logo} alt="CloudBee Robotics" className="h-8 w-auto" />
              <span className="font-display font-bold text-lg">CloudBee Robotics</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The Autonomous OS powering the next generation of embodied intelligence.
            </p>
            <div className="flex gap-3 mt-5">
              <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" aria-label="CloudBee Robotics on LinkedIn" className="p-2 rounded-md border border-border text-muted-foreground hover:text-accent-blue hover:border-accent-blue/40 transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="#" aria-label="Twitter" className="p-2 rounded-md border border-border text-muted-foreground hover:text-accent-blue hover:border-accent-blue/40 transition-colors">
                <Twitter size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm text-foreground mb-3">Explore</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/product" className="hover:text-foreground">Product</Link></li>
              <li><Link to="/solution" className="hover:text-foreground">Solution</Link></li>
              <li><Link to="/research" className="hover:text-foreground">Research</Link></li>
              <li><Link to="/team" className="hover:text-foreground">Team</Link></li>
              <li><Link to="/careers" className="hover:text-foreground">Careers</Link></li>
              <li><Link to="/blog" className="hover:text-foreground">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm text-foreground mb-3">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/impressum" className="hover:text-foreground">Impressum</Link></li>
              <li><a href="#" className="hover:text-foreground">Privacy Policy</a></li>
            </ul>
            <div className="mt-5 text-xs text-muted-foreground leading-relaxed">
              <div>info@cloudbeerobotics.de</div>
              <a
                href="https://www.google.com/maps/place/Collective+Incubator/@50.7850548,6.1073097,17z/data=!4m6!3m5!1s0x47c09b20c34800b5:0x40128dcd06f393a0!8m2!3d50.7856865!4d6.1087014"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-2 hover:text-foreground transition-colors"
              >
                Collective Incubator<br />
                Jülicher Str. 209q-s<br />
                52070 Aachen, Germany
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground mb-4">Backed by</div>
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-foreground/80">
            <span>Collective Incubator</span>
            <span className="text-muted-foreground/40">·</span>
            <span>EXIST Funding</span>
            <span className="text-muted-foreground/40">·</span>
            <span>RWTH Aachen University</span>
            <span className="text-muted-foreground/40">·</span>
            <span>RWTH International Academy</span>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© 2026 CloudBee Robotics GmbH (i.G.). All rights reserved.</div>
          <div className="font-mono">Built at RWTH Aachen · Collective Incubator, Aachen, Germany</div>
        </div>
      </div>
    </footer>
  );
}
