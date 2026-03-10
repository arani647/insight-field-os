import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="mt-16 lg:mt-24 max-w-5xl mx-auto">
            <div className="rounded-xl border border-border/50 overflow-hidden glow-primary">
              <img src={heroDashboard} alt="Servinix platform dashboard" className="w-full h-auto" loading="eager" width={1920} height={1080} />
            </div>
          </motion.div>
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
