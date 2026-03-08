import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card">
      <div className="container mx-auto px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-primary-foreground">N</span>
              </div>
              <span className="font-heading text-xl font-bold text-foreground">Newco</span>
            </Link>
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
            <h4 className="font-heading text-sm font-semibold text-foreground mb-4">Get Started</h4>
            <ul className="space-y-3">
              {["Request a Demo", "Sign In"].map((item) => (
                <li key={item}>
                  <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Newco. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-xs text-muted-foreground hover:text-primary cursor-pointer transition-colors">Privacy</span>
            <span className="text-xs text-muted-foreground hover:text-primary cursor-pointer transition-colors">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
