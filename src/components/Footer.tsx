import logo from "@/assets/logo.png";

const footerLinks = {
  product: [
    { label: "Technology", href: "#technology" },
    { label: "Use Cases", href: "#use-cases" },
    { label: "Platform", href: "#platform" },
  ],
  company: [
    { label: "Team", href: "#team" },
    { label: "Beta Program", href: "#platform" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="section-container py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <img src={logo} alt="CloudBee Robotics" className="h-10 w-auto mb-4" />
            <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
              Agentic Physical AI Infrastructure for Real-World Robots. 
              From simulation to deployment, we power the next generation of intelligent robotics.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CloudBee Robotics. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built in Aachen, Germany
          </p>
        </div>
      </div>
    </footer>
  );
}
