import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroDashboard from "@/assets/hero-dashboard.png";
import {
  MapPin, Wrench, MessageSquare, Brain, ArrowRight,
  Zap, Eye, TrendingUp, Shield, Clock, Users,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const features = [
  { icon: MapPin, title: "Fleet GPS Tracking", description: "Real-time visibility into every vehicle and asset. Know where your team is, optimize routes, and reduce fuel costs." },
  { icon: Wrench, title: "Field Service Management", description: "Schedule, dispatch, and manage jobs from one place. From work orders to invoicing—streamlined." },
  { icon: MessageSquare, title: "Customer Communication", description: "Unified inbox for calls, texts, and reviews. Never miss a lead or leave a customer waiting." },
  { icon: Brain, title: "AI Assistants", description: "Intelligent agents that manage conversations, automate workflows, and surface insights in real time." },
];

const stats = [
  { value: "40%", label: "Less manual work" },
  { value: "3x", label: "Faster response time" },
  { value: "99.9%", label: "Platform uptime" },
  { value: "2hrs", label: "Saved per tech per day" },
];

const benefits = [
  { icon: Eye, title: "Complete Visibility", description: "See every vehicle, technician, and job in real time across your entire operation." },
  { icon: Zap, title: "Intelligent Automation", description: "AI handles scheduling conflicts, customer follow-ups, and routine decisions automatically." },
  { icon: TrendingUp, title: "Accelerated Growth", description: "Close more jobs, improve reviews, and scale without adding back-office overhead." },
  { icon: Shield, title: "Enterprise-Grade, SMB-Friendly", description: "Advanced technology without enterprise cost, contracts, or complexity." },
  { icon: Clock, title: "Dispatch to Completion", description: "End-to-end workflow from job assignment to completion to customer follow-up." },
  { icon: Users, title: "Team Accountability", description: "Track performance, ensure quality, and empower your team with better data." },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-gradient">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-primary/5 blur-[100px]" />
        </div>

        <div className="container relative mx-auto px-4 pt-20 pb-16 lg:px-8 lg:pt-32 lg:pb-24">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-block mb-6 px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                The AI-Native Platform for Service Businesses
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground leading-[1.1] tracking-tight"
            >
              One platform to{" "}
              <span className="text-gradient">run your entire</span>{" "}
              service business
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto leading-relaxed"
            >
              Unify fleet tracking, field service management, and customer communication
              with AI that actively manages your operations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/contact">
                <Button variant="hero" size="lg" className="text-base px-8 py-6">
                  Request a Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/features">
                <Button variant="hero-outline" size="lg" className="text-base px-8 py-6 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10">
                  Explore Platform
                </Button>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-16 lg:mt-24 max-w-5xl mx-auto"
          >
            <div className="rounded-xl border border-border/50 overflow-hidden glow-primary">
              <img src={heroDashboard} alt="Servinix platform dashboard showing fleet tracking and job management" className="w-full h-auto" loading="eager" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border/50 bg-card">
        <div className="container mx-auto px-4 py-16 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div key={stat.label} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
                <div className="font-heading text-3xl md:text-4xl font-bold text-gradient">{stat.value}</div>
                <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            badge="Platform"
            title="Everything your service business needs,"
            highlight="unified."
            description="Stop juggling disconnected tools. Servinix brings fleet tracking, job management, and customer communication into one intelligent platform."
          />
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {features.map((feature, i) => (
              <motion.div key={feature.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="group rounded-xl border border-border/50 bg-card-gradient p-8 hover:border-primary/30 transition-all duration-300 hover:glow-primary"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-5">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            badge="Why Servinix"
            title="Built for companies that operate in the"
            highlight="physical world."
            description="Enterprise-grade visibility, automation, and intelligence—without enterprise cost, contracts, or complexity."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, i) => (
              <motion.div key={benefit.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <benefit.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-primary/10 blur-[150px]" />
        </div>
        <div className="container relative mx-auto px-4 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Ready to transform your{" "}
              <span className="text-gradient">operations?</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
              See how Servinix can reduce manual work, improve accountability, and accelerate your growth.
            </p>
            <div className="mt-10">
              <Link to="/contact">
                <Button variant="hero" size="lg" className="text-base px-10 py-6">
                  Get Started Today <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
