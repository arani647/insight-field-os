import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import FeatureSection from "@/components/FeatureSection";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Wrench, Calendar, ClipboardList, Users, Smartphone, FileText, RefreshCw, CreditCard, Bell, ArrowRight, Megaphone, DollarSign, CheckCircle2, Truck, MapPin, Camera, Route, Clock, Navigation } from "lucide-react";

const features = [
  { icon: Calendar, title: "Smart Scheduling", description: "Drag-and-drop scheduling with AI-powered suggestions. Optimize technician schedules based on skills, location, and availability." },
  { icon: Users, title: "Intelligent Dispatch", description: "Assign the right technician to every job. AI considers traffic, skill requirements, and current workload." },
  { icon: ClipboardList, title: "Work Orders", description: "Create, assign, and track work orders from creation to completion. Attach photos, notes, and customer signatures." },
  { icon: Smartphone, title: "Mobile Workflows", description: "Technicians manage their day from a mobile app. Check in, add notes, capture photos, and collect signatures on-site." },
  { icon: Bell, title: "Job Status Visibility", description: "Real-time status updates as jobs progress. Know when techs arrive, complete work, and need support." },
  { icon: RefreshCw, title: "Recurring Services", description: "Set up maintenance contracts and recurring appointments. Automatic scheduling and reminders." },
  { icon: FileText, title: "Estimates & Proposals", description: "Create professional estimates on-site. Convert approved estimates to work orders with one click." },
  { icon: CreditCard, title: "Invoicing & Payments", description: "Generate invoices automatically upon job completion. Accept payments in the field or send payment links." },
  { icon: Wrench, title: "Inventory & Parts", description: "Track parts usage per job. Manage truck inventory and automate reordering." },
];

const subPages = [
  {
    icon: Megaphone,
    title: "Get Noticed",
    description: "Build your online presence, earn trust with professional branding, and make it easy for customers to find and choose you over competitors.",
    link: "/field-service/get-noticed",
  },
  {
    icon: DollarSign,
    title: "Get Paid Faster",
    description: "Accept payments online, in-person, or automatically. Stop chasing checks and get paid 4x faster with seamless invoicing and payment collection.",
    link: "/field-service/get-paid",
  },
];

const workflowSteps = [
  { step: "1", title: "Customer Request", description: "Call, text, or online booking creates a job in the system" },
  { step: "2", title: "Smart Assignment", description: "AI assigns the optimal technician based on multiple factors" },
  { step: "3", title: "Tech Notification", description: "Technician receives job details on mobile app" },
  { step: "4", title: "On-Site Work", description: "Check in, complete work, capture notes and photos" },
  { step: "5", title: "Job Completion", description: "Customer signs, invoice generates, payment collected" },
  { step: "6", title: "Follow-Up", description: "Automated review request and rebooking suggestions" },
];

const FieldService = () => {
  return (
    <Layout>
      <section className="relative overflow-hidden bg-hero-gradient">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-primary/5 blur-[100px]" />
        </div>
        <div className="container relative mx-auto px-4 pt-20 pb-16 lg:px-8 lg:pt-32 lg:pb-24">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                <Wrench className="h-4 w-4" />
                Field Service Management
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.1] tracking-tight"
            >
              Field Service Management — Built for the <span className="text-gradient">AI Era</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg md:text-xl font-medium text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed"
            >
              Most field service software was built before AI. Servinix combines scheduling, dispatch, and job management with an AI Service Assistant and real-time fleet intelligence.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-4 text-base text-primary-foreground/60 max-w-2xl mx-auto leading-relaxed"
            >
              Platforms like Jobber, Housecall Pro, and ServiceTitan help manage jobs, technicians, and invoices. Servinix goes further — bringing AI automation, vehicle telemetry, and customer communication into one operational platform.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/contact">
                <Button variant="hero" size="lg" className="text-base px-8 py-6">
                  Book Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/platform">
                <Button variant="hero-outline" size="lg" className="text-base px-8 py-6 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10">
                  See Platform Overview
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Everything You Expect */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            badge="Core Capabilities"
            title="Everything You Expect from"
            highlight="Modern Field Service Software"
            description=""
          />
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Calendar, title: "Scheduling and Dispatch", description: "Schedule jobs, assign technicians, and manage daily routes from a unified dispatch board." },
              { icon: ClipboardList, title: "Job Tracking", description: "Track every job from estimate to completion with real-time status updates." },
              { icon: FileText, title: "Estimates and Invoices", description: "Create professional quotes, convert them into jobs, and generate invoices automatically." },
              { icon: Users, title: "Customer Management", description: "Maintain complete customer records, job history, and service notes in one system." },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: (j: number) => ({ opacity: 1, y: 0, transition: { delay: j * 0.1, duration: 0.5 } }),
                }}
                className="group rounded-xl border border-border/50 bg-card-gradient p-8 hover:border-primary/30 transition-all duration-300 hover:glow-primary"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-5">
                  <card.icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <FeatureSection
        badge="Features"
        title="Everything you need to"
        highlight="run your operations"
        description="Purpose-built for home and field service businesses."
        features={features}
        columns={3}
      />

      {/* Why Traditional FSM Falls Short */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <SectionHeading
              badge="The Difference"
              title="Why Traditional Field Service Software"
              highlight="Falls Short"
              description="Most field service platforms were designed to manage workflows like scheduling jobs, sending invoices, and dispatching technicians. While tools like Jobber help service businesses quote, schedule, manage jobs, and get paid, they were not originally designed as AI-native operational systems."
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid md:grid-cols-2 gap-6 mb-12"
            >
              {/* Traditional Column */}
              <div className="rounded-2xl border border-border/50 bg-card p-8 md:p-10">
                <h3 className="font-heading text-xl font-semibold text-muted-foreground mb-6">Traditional FSM Software</h3>
                <ul className="space-y-4">
                  {[
                    "Built for scheduling and invoicing",
                    "Limited automation",
                    "No unified AI assistant",
                    "Separate fleet tracking tools",
                    "No integrated vehicle telemetry",
                    "Requires multiple software systems",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-muted-foreground/40 shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Servinix Column */}
              <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8 md:p-10 glow-primary">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                  Servinix <span className="text-gradient">AI-Native</span> Platform
                </h3>
                <ul className="space-y-4">
                  {[
                    "AI Service Assistant built into operations",
                    "Automated scheduling and communication",
                    "Real-time technician visibility",
                    "Integrated fleet GPS and vehicle telemetry",
                    "Signal-based automation",
                    "One platform instead of multiple tools",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-lg font-medium text-gradient"
            >
              Servinix was designed from day one as an AI-native operational platform for service businesses.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Sub-pages */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            badge="Solutions"
            title="Grow your business,"
            highlight="your way"
            description="Specialized solutions to help you get noticed and get paid faster."
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {subPages.map((page, i) => (
              <motion.div
                key={page.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={page.link}
                  className="group block rounded-xl border border-border/50 bg-background p-8 hover:border-primary/30 transition-all duration-300 hover:glow-primary h-full"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary mb-6">
                    <page.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {page.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{page.description}</p>
                  <span className="inline-flex items-center text-sm text-primary font-medium">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            badge="Workflow"
            title="From request to"
            highlight="revenue"
            description="See how a job flows through Servinix from initial customer contact to payment and follow-up."
          />
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workflowSteps.map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative p-6 rounded-xl border border-border/50 bg-card"
                >
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </div>
                  <h4 className="font-heading font-semibold text-foreground mb-2 pt-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Streamline your field"
        highlight="operations"
        description="See how Servinix FSM can reduce manual work and improve job completion rates."
      />
    </Layout>
  );
};

export default FieldService;
