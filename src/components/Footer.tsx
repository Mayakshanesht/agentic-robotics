import { Link } from "react-router-dom";
import { Linkedin, Mail, MapPin, User } from "lucide-react";
import logo from "@/assets/logo.png";

const footerLinks = {
  product: [
    { label: "Technology", href: "/technology" },
    { label: "Platform", href: "/platform" },
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
    <footer className="bg-foreground text-background py-16">
      <div className="section-container">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2">
            <img src={logo} alt="CloudBee Robotics" className="h-10 w-auto mb-5 invert" />
            <p className="text-background/80 text-sm max-w-sm mb-6 leading-relaxed">
              Infrastructure for Agentic Physical AI
            </p>
            <Link 
              to="/request-access"
              className="inline-block px-6 py-3 bg-background text-foreground font-semibold rounded-xl hover:bg-background/90 transition-colors mb-6"
            >
              Request Access
            </Link>
            <div className="flex items-center gap-3">
              <a 
                href="https://linkedin.com/company/cloudbee-robotics" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:mayur@cloudbee-robotics.com" 
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-background/70 hover:text-background transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-background/70 hover:text-background transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-background/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-background/70 text-sm">
              <MapPin className="w-4 h-4" />
              <span>Aachen, Germany</span>
            </div>
            <div className="flex items-center gap-2 text-background/70 text-sm">
              <User className="w-4 h-4" />
              <span>Contact: Mayur Waghchoure</span>
            </div>
          </div>
          <p className="text-background/50 text-sm">© 2026 CloudBee Robotics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
