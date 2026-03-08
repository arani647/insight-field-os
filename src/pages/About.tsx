import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Rocket, Heart } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We believe every service business deserves access to the same operational technology that powers the Fortune 500.",
  },
  {
    icon: Rocket,
    title: "Innovation-First",
    description: "We don't build incremental improvements on legacy software. We rethink how service operations should work from the ground up.",
  },
  {
    icon: Heart,
    title: "Customer-Obsessed",
    description: "Our customers operate in the real world—on job sites, in trucks, at customers' homes. We build for their reality.",
  },
];

const About = () => {
  return (
    <Layout>
      <section className="relative overflow-hidden bg-hero-gradient pt-20 pb-24 lg:pt-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 left-1/3 h-80 w-80 rounded-full bg-primary/10 blur-[120px]" />
        </div>
        <div className="container relative mx-auto px-4 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block mb-6 px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
              About Us
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1]">
              Building the future of{" "}
              <span className="text-gradient">service operations</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Newco is building the next-generation operating system for service businesses—unifying fleet GPS tracking, field service management, and customer communication into one AI-native platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
                The problem we're solving
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Service businesses—plumbers, HVAC companies, landscapers, electricians, pest control operators—run the physical world. Yet they're stuck stitching together disconnected point solutions that weren't designed to work together.
                </p>
                <p>
                  One tool for fleet tracking. Another for scheduling. Another for customer messaging. None of them talk to each other, and none of them are truly intelligent.
                </p>
                <p>
                  Newco changes that. We built a single, unified platform with an intelligent layer of AI assistants that actively manage conversations, automate workflows, surface insights, and help teams make better decisions—from dispatch to job completion to customer follow-up.
                </p>
                <p>
                  Our goal: deliver enterprise-grade functionality—visibility, automation, and intelligence—without enterprise cost, contracts, or complexity. Making advanced operational technology accessible to every service business.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-16"
          >
            What drives us
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="rounded-xl border border-border/50 bg-card-gradient p-8 text-center"
              >
                <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-lg bg-primary/10 text-primary mb-5">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
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
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Join us in transforming <span className="text-gradient">service operations</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
            We're always looking for talented people who want to build the future of work for service businesses.
          </p>
          <div className="mt-10">
            <Link to="/contact">
              <Button variant="hero" size="lg" className="text-base px-10 py-6">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
