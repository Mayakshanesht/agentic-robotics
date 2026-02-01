import { Link } from "react-router-dom";
import { Linkedin, Mail, MapPin } from "lucide-react";
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
          {/* Brand & Mission */}
          <div className="md:col-span-2">
            <Link to="/">
              <img src={logo} alt="CloudBee Robotics" className="h-10 w-auto mb-4 invert" />
            </Link>
            <p className="text-background/80 text-sm max-w-sm mb-6 leading-relaxed">
              Infrastructure for Agentic Physical AI — from synthetic worlds to real robots.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-background/70 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>Aachen, Germany</span>
              </div>
              <div className="flex items-center gap-3 text-background/70 text-sm">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:mayur@cloudbee-robotics.com" className="hover:text-background transition-colors">
                  mayur@cloudbee-robotics.com
                </a>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3">
              <a 
                href="https://linkedin.com/company/cloudbee-robotics" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="mailto:mayur@cloudbee-robotics.com" 
                className="w-9 h-9 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold mb-4 text-background">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href} 
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4 text-background">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href} 
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} CloudBee Robotics GmbH. All rights reserved.
          </p>
          <p className="text-background/40 text-xs">
            Contact: Mayur Waghchoure, CEO
          </p>
        </div>
      </div>
    </footer>
  );
}
