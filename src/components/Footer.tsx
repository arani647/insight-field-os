import { Link } from "react-router-dom";
import ServinixLogo from "./ServinixLogo";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card">
      <div className="container mx-auto px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <ServinixLogo />
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              The next-generation operating system for service businesses.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground mb-4">Platform</h4>
            <ul className="space-y-3">
              {["Fleet GPS Tracking", "Field Service Management", "Customer Communication", "AI Assistants"].map((item) => (
                <li key={item}>
                  <Link to="/features" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {[
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {[
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Servinix. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-xs text-muted-foreground hover:text-primary transition-colors">Privacy</Link>
            <Link to="/terms" className="text-xs text-muted-foreground hover:text-primary transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
