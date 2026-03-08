import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  MapPin, Wrench, MessageSquare, Brain, ArrowRight,
  Route, Bell, BarChart3, Calendar, FileText, Star, Bot, Workflow, Lightbulb,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const platformSections = [
  {
    icon: MapPin, title: "Fleet GPS Tracking",
    description: "Real-time location data for every vehicle and asset in your fleet. Optimize routes, monitor driver behavior, and reduce operational costs.",
    features: [
      { icon: Route, text: "Live vehicle tracking & route optimization" },
      { icon: Bell, text: "Geofencing alerts & driver scorecards" },
      { icon: BarChart3, text: "Fuel usage & maintenance analytics" },
    ],
  },
  {
    icon: Wrench, title: "Field Service Management",
    description: "End-to-end job management from scheduling and dispatch to completion and invoicing. Keep your team organized and customers happy.",
    features: [
      { icon: Calendar, text: "Smart scheduling & drag-drop dispatch" },
      { icon: FileText, text: "Digital work orders & invoicing" },
      { icon: BarChart3, text: "Technician performance tracking" },
    ],
  },
  {
    icon: MessageSquare, title: "Customer Communication",
    description: "A unified inbox that brings calls, texts, emails, and online reviews into one place. Never miss a lead or leave a customer waiting.",
    features: [
      { icon: Star, text: "Review management & reputation monitoring" },
      { icon: Bell, text: "Automated appointment reminders" },
      { icon: MessageSquare, text: "Two-way texting & webchat" },
    ],
  },
  {
    icon: Brain, title: "AI Assistants",
    description: "An intelligent layer that actively manages conversations, automates workflows, surfaces insights, and helps your team make better decisions.",
    features: [
      { icon: Bot, text: "AI-powered conversation management" },
      { icon: Workflow, text: "Automated workflow triggers & actions" },
      { icon: Lightbulb, text: "Predictive insights & recommendations" },
    ],
  },
];

const Features = () => {
  return (
    <Layout>
      <section className="relative overflow-hidden bg-hero-gradient pt-20 pb-24 lg:pt-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 right-1/4 h-80 w-80 rounded-full bg-primary/10 blur-[120px]" />
        </div>
        <div className="container relative mx-auto px-4 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block mb-6 px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
              Platform
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.1]">
              One platform. <span className="text-gradient">Every tool you need.</span>
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/70 max-w-2xl mx-auto">
              Replace your disconnected point solutions with one unified, AI-native operating system built for service businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {platformSections.map((section, idx) => (
        <section key={section.title} className={`py-24 lg:py-32 ${idx % 2 === 0 ? "" : "bg-card"}`}>
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-start gap-6 mb-10">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <section.icon className="h-7 w-7" />
                </div>
                <div>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">{section.title}</h2>
                  <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{section.description}</p>
                </div>
              </motion.div>
              <div className="grid md:grid-cols-3 gap-6 ml-0 md:ml-20">
                {section.features.map((feature, i) => (
                  <motion.div key={feature.text} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                    className="rounded-xl border border-border/50 bg-card-gradient p-6 hover:border-primary/30 transition-all">
                    <feature.icon className="h-5 w-5 text-primary mb-3" />
                    <p className="text-sm text-foreground font-medium">{feature.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-primary/10 blur-[150px]" />
        </div>
        <div className="container relative mx-auto px-4 lg:px-8 text-center">
          <SectionHeading title="See it in action." highlight="" description="Book a personalized demo and discover how Servinix can transform your operations." />
          <Link to="/contact">
            <Button variant="hero" size="lg" className="text-base px-10 py-6">
              Request a Demo <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Features;
