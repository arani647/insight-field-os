import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroDashboard from "@/assets/hero-dashboard.png";
import {
  MapPin, Wrench, MessageSquare, Brain, ArrowRight,
  Zap, Eye, TrendingUp, Shield, Clock, Users,
  Building2, Thermometer, Droplets, Bug, Trees,
  Check, HelpCircle } from
"lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger } from
"@/components/ui/accordion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 }
  })
};

const features = [
{ icon: MapPin, title: "GPS Tracking & Dashcams", description: "Real-time visibility into every vehicle and asset. AI dashcams, driver safety scores, and route optimization.", link: "/gps-tracking" },
{ icon: Wrench, title: "Field Service Management", description: "Schedule, dispatch, and manage jobs from one place. From work orders to invoicing—streamlined.", link: "/field-service" },
{ icon: MessageSquare, title: "AI Employee", description: "Your autonomous AI employee that responds, schedules, and sells—24/7, just like your best rep.", link: "/ai-employee" },
{ icon: Brain, title: "Reviews & Marketing", description: "Automated review collection, text marketing campaigns, and reputation management on autopilot.", link: "/reviews" }];


const stats = [
{ value: "40%", label: "Less manual work" },
{ value: "3x", label: "Faster response time" },
{ value: "99.9%", label: "Platform uptime" },
{ value: "2hrs", label: "Saved per tech per day" }];


const benefits = [
{ icon: Eye, title: "Complete Visibility", description: "See every vehicle, technician, and job in real time across your entire operation." },
{ icon: Zap, title: "Intelligent Automation", description: "AI handles scheduling conflicts, customer follow-ups, and routine decisions automatically." },
{ icon: TrendingUp, title: "Accelerated Growth", description: "Close more jobs, improve reviews, and scale without adding back-office overhead." },
{ icon: Shield, title: "Enterprise-Grade, SMB-Friendly", description: "Advanced technology without enterprise cost, contracts, or complexity." },
{ icon: Clock, title: "Dispatch to Completion", description: "End-to-end workflow from job assignment to completion to customer follow-up." },
{ icon: Users, title: "Team Accountability", description: "Track performance, ensure quality, and empower your team with better data." }];


const industries = [
{ icon: Thermometer, name: "HVAC" },
{ icon: Droplets, name: "Plumbing" },
{ icon: Zap, name: "Electrical" },
{ icon: Trees, name: "Landscaping" },
{ icon: Bug, name: "Pest Control" },
{ icon: Building2, name: "Cleaning" }];


const testimonials = [
{
  quote: "Servinix replaced three different tools we were using. Now everything is in one place and actually talks to each other.",
  author: "Mike R.",
  role: "Owner, Comfort Air HVAC"
},
{
  quote: "The AI missed-call text back alone has probably saved us $10,000 in leads we would have lost.",
  author: "Sarah T.",
  role: "Operations Manager, ProPlumb"
},
{
  quote: "Our techs save at least 2 hours a day with the optimized routing and mobile app.",
  author: "James K.",
  role: "Dispatch Manager, Green Lawn Care"
}];


const faqs = [
{
  question: "What makes Servinix different from other FSM tools?",
  answer: "Servinix is AI-native from the ground up. While other tools bolt on AI features, our platform is built around intelligent automation. Plus, we combine fleet tracking, FSM, and customer communication in one platform—most competitors only do one of these."
},
{
  question: "How long does implementation take?",
  answer: "Most customers are fully operational within 1-2 weeks. Our onboarding team handles data migration, training, and configuration. We don't leave you to figure it out alone."
},
{
  question: "Do I need to buy GPS hardware?",
  answer: "Not necessarily. Our mobile app provides GPS tracking, or you can use third-party hardware trackers. We support both approaches."
},
{
  question: "Can Servinix integrate with my existing tools?",
  answer: "Yes, we integrate with popular accounting software (QuickBooks, Xero), payment processors, and other business tools. Professional and Enterprise plans include API access for custom integrations."
},
{
  question: "Is there a contract?",
  answer: "No long-term contracts required. All plans are month-to-month. We earn your business every month."
}];


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



            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground leading-[1.1] tracking-tight">
              
              Run Your Service Business on{" "}
              <span className="text-gradient">One AI-Native Platform</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-amber-400">
              Servinix combines fleet tracking, field service management, and AI customer communication into a single operational platform.
            </motion.p>




            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              
              <Link to="/contact">
                <Button variant="hero" size="lg" className="text-base px-8 py-6">
                  Book Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/platform">
                <Button variant="hero-outline" size="lg" className="text-base px-8 py-6 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10">
                  See Platform
                </Button>
              </Link>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }} className="mt-16 lg:mt-24 max-w-5xl mx-auto">
            
            <div className="rounded-xl border border-border/50 overflow-hidden glow-primary">
              <img src={heroDashboard} alt="Servinix platform dashboard showing fleet tracking and job management" className="w-full h-auto" loading="eager" fetchPriority="high" width={1920} height={1080} sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 1024px" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border/50 bg-card">
        <div className="container mx-auto px-4 py-16 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => <motion.div key={stat.label} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
                <div className="font-heading text-3xl md:text-4xl font-bold text-gradient">{stat.value}</div>
                <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading badge="Platform" title="Everything your service business needs," highlight="unified." description="Stop juggling disconnected tools. Servinix brings fleet tracking, job management, and customer communication into one intelligent platform." />
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {features.map((feature, i) => <motion.a key={feature.title} href={feature.link} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="group rounded-xl border border-border/50 bg-card-gradient p-8 hover:border-primary/30 transition-all duration-300 hover:glow-primary block">
              
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-5">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.a>
            )}
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
            description="Enterprise-grade visibility, automation, and intelligence—without enterprise cost, contracts, or complexity." />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, i) =>
            <motion.div key={benefit.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <benefit.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            badge="Industries"
            title="Purpose-built for"
            highlight="service businesses"
            description="From HVAC to pest control, Servinix is designed for the unique needs of field service operations." />
          
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {industries.map((industry, i) =>
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-3 px-5 py-3 rounded-full border border-border/50 bg-card hover:border-primary/30 transition-colors">
              
                <industry.icon className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-foreground">{industry.name}</span>
              </motion.div>
            )}
          </div>
          <div className="text-center mt-8">
            <Link to="/industries" className="text-sm text-primary hover:underline">
              See all industries →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            badge="Testimonials"
            title="Trusted by service businesses"
            highlight="nationwide"
            description="See what our customers say about transforming their operations with Servinix." />
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, i) =>
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-xl border border-border/50 bg-background">
              
                <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </motion.div>
            )}
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
            description="Everything you need to know about Servinix." />
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, i) =>
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-border/50 rounded-xl px-6 bg-card">
                
                  <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              )}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 relative overflow-hidden bg-card">
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
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button variant="hero" size="lg" className="text-base px-10 py-6">
                  Book Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button variant="outline" size="lg" className="text-base px-10 py-6">
                  View Pricing
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>);

};

export default Index;