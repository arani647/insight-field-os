import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import ProductPageHero from "@/components/ProductPageHero";
import FeatureSection from "@/components/FeatureSection";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import { Layers, MapPin, Calendar, MessageSquare, Brain, BarChart3, Link2, Zap, Shield, Users, Clock, TrendingUp } from "lucide-react";

const platformModules = [
  {
    icon: MapPin,
    title: "Fleet GPS Tracking",
    description: "Real-time vehicle location, route history, and driver behavior insights. Know where your team is at all times.",
    link: "/fleet-gps",
  },
  {
    icon: Calendar,
    title: "Field Service Management",
    description: "Schedule jobs, dispatch technicians, manage work orders, and track job progress from one unified dashboard.",
    link: "/field-service",
  },
  {
    icon: MessageSquare,
    title: "AI Communications",
    description: "Unified inbox for SMS, calls, and reviews. Automated follow-ups and missed-call text back.",
    link: "/ai-communications",
  },
  {
    icon: Brain,
    title: "AI Voice Automation",
    description: "AI receptionist, after-hours answering, lead qualification, and automated appointment scheduling.",
    link: "/ai-voice",
  },
];

const integrationBenefits = [
  { icon: Link2, title: "Unified Data", description: "All your operational data in one place. No more switching between apps or manual data entry." },
  { icon: Zap, title: "Automated Workflows", description: "When a job is completed, automatically trigger follow-ups, review requests, and invoicing." },
  { icon: BarChart3, title: "Real-Time Analytics", description: "See performance across fleet, jobs, and customer communication in unified dashboards." },
  { icon: Shield, title: "Enterprise Security", description: "Bank-grade encryption, SOC 2 compliance, and role-based access controls." },
  { icon: Clock, title: "Faster Operations", description: "Reduce manual work by 40% with automated dispatching, routing, and customer follow-ups." },
  { icon: Users, title: "Team Accountability", description: "Track technician performance, job completion rates, and customer satisfaction scores." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const Platform = () => {
  return (
    <Layout>
      <ProductPageHero
        badge="Platform"
        icon={Layers}
        title="One Platform to"
        highlight="Run Your Entire Operation"
        description="Servinix combines fleet tracking, field service management, and AI-powered customer communication into a single operational platform built for service businesses."
      />

      {/* Platform Modules */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            badge="Core Modules"
            title="Everything your service business needs,"
            highlight="unified."
            description="Four integrated modules that work together seamlessly to eliminate operational friction."
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {platformModules.map((module, i) => (
              <motion.a
                key={module.title}
                href={module.link}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group rounded-xl border border-border/50 bg-card-gradient p-8 hover:border-primary/30 transition-all duration-300 hover:glow-primary block"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary mb-6">
                  <module.icon className="h-7 w-7" />
                </div>
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {module.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{module.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            badge="Architecture"
            title="How Servinix"
            highlight="works together"
            description="Every module shares the same data layer, so updates in one area automatically reflect everywhere else."
          />
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-border/50 bg-background p-8 md:p-12"
            >
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-gradient mb-2">1</div>
                  <h4 className="font-heading font-semibold text-foreground mb-2">Job Created</h4>
                  <p className="text-sm text-muted-foreground">Customer books a service or you create a work order</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gradient mb-2">2</div>
                  <h4 className="font-heading font-semibold text-foreground mb-2">Smart Dispatch</h4>
                  <p className="text-sm text-muted-foreground">AI assigns the right tech based on location, skills, and availability</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gradient mb-2">3</div>
                  <h4 className="font-heading font-semibold text-foreground mb-2">Automated Follow-Up</h4>
                  <p className="text-sm text-muted-foreground">After completion, AI handles invoicing, reviews, and rebooking</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <FeatureSection
        badge="Benefits"
        title="Why choose an"
        highlight="integrated platform?"
        description="Stop paying for multiple tools that don't talk to each other."
        features={integrationBenefits}
        columns={3}
      />

      <CTASection
        title="Ready to unify your"
        highlight="operations?"
        description="See how Servinix can replace multiple tools with one AI-native platform."
      />
    </Layout>
  );
};

export default Platform;
