import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const tiers = [
  {
    name: "Starter",
    description: "For small teams getting started",
    price: "$99",
    period: "/month",
    highlight: false,
    features: [
      "Up to 5 users",
      "Fleet GPS tracking (10 vehicles)",
      "Basic scheduling & dispatch",
      "Customer SMS messaging",
      "Mobile app for technicians",
      "Email support",
    ],
    cta: "Start Free Trial",
  },
  {
    name: "Growth",
    description: "For growing service businesses",
    price: "$299",
    period: "/month",
    highlight: true,
    features: [
      "Up to 25 users",
      "Fleet GPS tracking (50 vehicles)",
      "Advanced scheduling & dispatch",
      "Unified inbox & missed call text back",
      "AI-suggested responses",
      "Review management",
      "Work order management",
      "Invoicing & payments",
      "Priority support",
    ],
    cta: "Start Free Trial",
  },
  {
    name: "Professional",
    description: "For established operations",
    price: "$599",
    period: "/month",
    highlight: false,
    features: [
      "Up to 100 users",
      "Unlimited fleet tracking",
      "AI voice receptionist",
      "After-hours AI answering",
      "Automated workflows",
      "Advanced analytics",
      "API access",
      "Custom integrations",
      "Dedicated success manager",
    ],
    cta: "Start Free Trial",
  },
  {
    name: "Enterprise",
    description: "For large organizations",
    price: "Custom",
    period: "",
    highlight: false,
    features: [
      "Unlimited users",
      "Unlimited fleet tracking",
      "Full AI voice & automation suite",
      "Custom AI training",
      "White-label options",
      "SLA guarantees",
      "On-premise deployment options",
      "Dedicated support team",
      "Custom development",
    ],
    cta: "Contact Sales",
  },
];

const faqs = [
  {
    question: "Can I switch plans later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle. If you upgrade mid-cycle, we'll prorate the difference.",
  },
  {
    question: "Is there a free trial?",
    answer: "Yes, all plans include a 14-day free trial with full access to features. No credit card required to start.",
  },
  {
    question: "What's included in fleet tracking?",
    answer: "Fleet tracking includes real-time GPS location, route history, driver behavior monitoring, geofencing, and ETA updates. Hardware trackers can be purchased separately or you can use our mobile app for tracking.",
  },
  {
    question: "How does AI voice pricing work?",
    answer: "AI voice minutes are included based on your plan. Starter includes 100 minutes/month, Growth includes 500 minutes, and Professional includes 2,000 minutes. Additional minutes are available at competitive rates.",
  },
  {
    question: "Do you offer discounts for annual billing?",
    answer: "Yes, annual billing saves you 20% compared to monthly billing. Contact us for details.",
  },
  {
    question: "What tools does Servinix replace?",
    answer: "Servinix can replace your fleet tracking subscription, field service software, customer communication tools, review management, and AI phone answering services. Most customers consolidate 3-5 separate subscriptions.",
  },
  {
    question: "Is there a contract?",
    answer: "No long-term contracts required. All plans are month-to-month with annual options available for additional savings.",
  },
  {
    question: "How quickly can we get started?",
    answer: "Most customers are fully operational within 1-2 weeks. Our onboarding team helps with data migration, training, and configuration.",
  },
];

const Pricing = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-gradient">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
        </div>
        <div className="container relative mx-auto px-4 pt-20 pb-16 lg:px-8 lg:pt-32 lg:pb-24">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.1] tracking-tight"
            >
              Simple, Transparent <span className="text-gradient">Pricing</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto"
            >
              Replace multiple subscriptions with one unified platform. Start free, scale as you grow.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-2xl border p-8 ${
                  tier.highlight
                    ? "border-primary bg-card-gradient glow-primary relative"
                    : "border-border/50 bg-card"
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="font-heading text-xl font-semibold text-foreground">{tier.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{tier.description}</p>
                </div>
                <div className="mb-6">
                  <span className="font-heading text-4xl font-bold text-foreground">{tier.price}</span>
                  <span className="text-muted-foreground">{tier.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="block">
                  <Button
                    variant={tier.highlight ? "hero" : "outline"}
                    className="w-full"
                  >
                    {tier.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Replace Multiple Tools */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeading
              badge="Value"
              title="Replace multiple tools with"
              highlight="one platform"
              description="Most service businesses pay for 3-5 separate software subscriptions. Servinix consolidates them all."
            />
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="p-6 rounded-xl border border-border/50 bg-background">
                <div className="text-2xl font-bold text-foreground line-through opacity-50 mb-1">$200-400</div>
                <p className="text-sm text-muted-foreground">Fleet tracking software</p>
              </div>
              <div className="p-6 rounded-xl border border-border/50 bg-background">
                <div className="text-2xl font-bold text-foreground line-through opacity-50 mb-1">$150-500</div>
                <p className="text-sm text-muted-foreground">Field service software</p>
              </div>
              <div className="p-6 rounded-xl border border-border/50 bg-background">
                <div className="text-2xl font-bold text-foreground line-through opacity-50 mb-1">$100-300</div>
                <p className="text-sm text-muted-foreground">Communication tools</p>
              </div>
            </div>
            <div className="mt-8 p-6 rounded-xl border border-primary/30 bg-primary/5">
              <p className="text-muted-foreground mb-2">Servinix replaces all of the above</p>
              <div className="text-3xl font-bold text-gradient">Starting at $99/month</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            badge="FAQ"
            title="Frequently asked"
            highlight="questions"
            description="Everything you need to know about Servinix pricing and plans."
          />
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border border-border/50 rounded-xl px-6 bg-card"
                >
                  <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to get started?
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
              Start your 14-day free trial today. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button variant="hero" size="lg" className="text-base px-10 py-6">
                  Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="text-base px-10 py-6">
                  Talk to Sales
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
