import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Users, Lightbulb, Rocket } from "lucide-react";

const values = [
  { icon: Target, title: "Operational Excellence", description: "We obsess over the details that make service businesses run smoothly. Every feature is designed to eliminate friction and improve outcomes." },
  { icon: Lightbulb, title: "AI-Native Thinking", description: "We don't bolt AI onto legacy software. Our platform is built from the ground up to leverage intelligent automation at every touchpoint." },
  { icon: Users, title: "Customer Partnership", description: "We succeed when our customers succeed. We work closely with service businesses to understand their challenges and build solutions that matter." },
  { icon: Rocket, title: "Continuous Innovation", description: "The field service industry is evolving. We're committed to staying ahead with new features, integrations, and capabilities." },
];

const team = [
  { name: "Alex Chen", role: "CEO & Co-Founder", bio: "Former operations leader at a national HVAC company. Built Servinix to solve problems he lived every day." },
  { name: "Sarah Martinez", role: "CTO & Co-Founder", bio: "Ex-Google engineer with deep expertise in AI and distributed systems. Leads our technical vision." },
  { name: "Mike Thompson", role: "VP of Product", bio: "15 years in field service software. Obsessed with building tools that technicians actually want to use." },
  { name: "Lisa Park", role: "VP of Customer Success", bio: "Former service business owner. Ensures every customer achieves their operational goals." },
];

const About = () => {
  return (
    <Layout>
      <section className="relative overflow-hidden bg-hero-gradient">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
        </div>
        <div className="container relative mx-auto px-4 pt-20 pb-16 lg:px-8 lg:pt-32 lg:pb-24">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.1] tracking-tight">
              About <span className="text-gradient">Servinix</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-6 text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto">
              We're building the AI-native operating system for field service businesses.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Field service businesses are the backbone of the economy. HVAC technicians, plumbers, electricians, and countless other professionals keep our homes and businesses running. Yet they're often stuck with fragmented, outdated software that creates more work instead of reducing it.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We started Servinix because we believe these businesses deserve better. They deserve a single platform that handles everything—from knowing where their trucks are to managing jobs to communicating with customers. And they deserve AI that actually helps, not just buzzwords.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our mission is to help service businesses operate more efficiently, grow more profitably, and deliver exceptional customer experiences—without adding complexity or overhead.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">Why We Built Servinix</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our founders came from the world of field service operations. They lived the pain of juggling multiple software subscriptions, manually moving data between systems, and missing customer calls because no one could answer.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                They saw that existing solutions were either too simple (basic scheduling tools) or too complex (enterprise systems that cost six figures and take months to implement). There was nothing in between for growing service businesses that needed power without complexity.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                So they built Servinix: an AI-native platform that combines fleet tracking, field service management, and customer communication into one unified system. It's powerful enough to run a 100-truck operation, but simple enough to set up in a week.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading badge="Values" title="What drives" highlight="our work" description="The principles that guide how we build products and serve customers." />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, i) => (
              <motion.div key={value.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0"><value.icon className="w-6 h-6" /></div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading badge="Team" title="Leadership" highlight="team" description="The people building the future of field service operations." />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, i) => (
              <motion.div key={member.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="w-24 h-24 rounded-full bg-muted mx-auto mb-4" />
                <h3 className="font-heading font-semibold text-foreground">{member.name}</h3>
                <div className="text-sm text-primary mb-3">{member.role}</div>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">Join us on the journey</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
              Whether you're a service business looking to modernize or a talented builder who wants to make an impact, we'd love to hear from you.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg" className="text-base px-10 py-6">Book a Demo <ArrowRight className="ml-2 h-4 w-4" /></Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
