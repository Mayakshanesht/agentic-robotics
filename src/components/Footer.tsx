import { Link } from "react-router-dom";
import { Linkedin, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const footerLinks = {
  product: [
    { label: "Platform", href: "/platform" },
    { label: "Technology", href: "/technology" },
    { label: "Use Cases", href: "/use-cases" },
  ],
  company: [
    { label: "Team", href: "/team" },
    { label: "Blog", href: "/blog" },
    { label: "Request Access", href: "/request-access" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="section-container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <img src={logo} alt="CloudBee Robotics" className="h-10 w-auto mb-4 invert" />
            <p className="text-background/70 text-sm max-w-sm mb-4">
              Infrastructure for Agentic Physical AI. From simulation to real deployment.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://linkedin.com" className="w-9 h-9 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="mailto:contact@cloudbee-robotics.com" className="w-9 h-9 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-background/70 hover:text-background">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-background/70 hover:text-background">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pt-6 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="flex items-center gap-2 text-background/60 text-sm">
            <MapPin className="w-4 h-4" />
            <span>Aachen, Germany</span>
          </div>
          <p className="text-background/50 text-sm">© {new Date().getFullYear()} CloudBee Robotics</p>
        </div>
      </div>
    </footer>
  );
}
