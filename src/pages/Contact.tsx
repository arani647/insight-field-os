import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Thanks! We'll be in touch shortly.");
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <Layout>
      <section className="relative overflow-hidden bg-hero-gradient pt-20 pb-24 lg:pt-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 right-1/3 h-80 w-80 rounded-full bg-primary/10 blur-[120px]" />
        </div>
        <div className="container relative mx-auto px-4 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block mb-6 px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
              Contact
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1]">
              Let's talk about your{" "}
              <span className="text-gradient">business</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Request a personalized demo or get in touch with our team.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-2xl font-bold text-foreground mb-8">
                Request a Demo
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-foreground">First Name</Label>
                    <Input id="firstName" placeholder="John" required className="bg-card border-border" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-foreground">Last Name</Label>
                    <Input id="lastName" placeholder="Smith" required className="bg-card border-border" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Work Email</Label>
                  <Input id="email" type="email" placeholder="john@company.com" required className="bg-card border-border" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-foreground">Company Name</Label>
                  <Input id="company" placeholder="Acme Services" required className="bg-card border-border" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fleet" className="text-foreground">Fleet Size</Label>
                  <Input id="fleet" placeholder="e.g. 10-50 vehicles" className="bg-card border-border" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Message (optional)</Label>
                  <Textarea id="message" placeholder="Tell us about your business..." rows={4} className="bg-card border-border" />
                </div>
                <Button variant="hero" size="lg" className="w-full text-base py-6" disabled={loading}>
                  {loading ? "Submitting..." : "Request Demo"} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:pt-12"
            >
              <h2 className="font-heading text-2xl font-bold text-foreground mb-8">
                Get in Touch
              </h2>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-semibold text-foreground">Email</h3>
                    <p className="text-sm text-muted-foreground mt-1">hello@servinix.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-semibold text-foreground">Phone</h3>
                    <p className="text-sm text-muted-foreground mt-1">Contact us for details</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-semibold text-foreground">Headquarters</h3>
                    <p className="text-sm text-muted-foreground mt-1">United States</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 rounded-xl border border-border/50 bg-card-gradient p-8">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                  What to expect
                </h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">1.</span>
                    We'll reach out within 24 hours
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">2.</span>
                    A personalized demo of the Newco platform
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">3.</span>
                    Custom pricing based on your business needs
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
