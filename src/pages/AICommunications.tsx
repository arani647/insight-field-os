import Layout from "@/components/Layout";
import ProductPageHero from "@/components/ProductPageHero";
import FeatureSection from "@/components/FeatureSection";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { MessageSquare, Inbox, Phone, Star, Bell, Users, Bot, Clock, Send } from "lucide-react";

const features = [
  { icon: Inbox, title: "Unified Inbox", description: "All customer communication in one place. SMS, missed calls, reviews, and team messages in a single view." },
  { icon: MessageSquare, title: "Two-Way SMS", description: "Send and receive text messages with customers. Automated appointment confirmations and reminders." },
  { icon: Phone, title: "Missed Call Text Back", description: "Never lose a lead. Automatically text customers back when you miss their call." },
  { icon: Star, title: "Review Requests", description: "Automatically request reviews after job completion. Boost your online reputation on autopilot." },
  { icon: Bell, title: "Customer Follow-Ups", description: "AI-powered follow-up sequences for quotes, estimates, and service reminders." },
  { icon: Users, title: "Team Messaging", description: "Internal team chat integrated with job context. Coordinate without switching apps." },
  { icon: Bot, title: "AI Responses", description: "AI suggests responses based on conversation context. Reply faster with intelligent assistance." },
  { icon: Clock, title: "Scheduled Messages", description: "Schedule texts for optimal delivery times. Batch send appointment reminders." },
  { icon: Send, title: "Broadcast Messaging", description: "Send promotions or updates to customer segments. Personalized mass communication." },
];

const stats = [
  { value: "98%", label: "Open rate on SMS" },
  { value: "3min", label: "Average response time" },
  { value: "45%", label: "More reviews collected" },
  { value: "60%", label: "Fewer missed leads" },
];

const AICommunications = () => {
  return (
    <Layout>
      <ProductPageHero
        badge="AI Communications"
        icon={MessageSquare}
        title="Never Miss a Customer"
        highlight="Conversation"
        description="Unified inbox, automated SMS, review management, and AI-powered follow-ups. Keep every customer engaged without the manual work."
      />

      {/* Stats */}
      <section className="border-b border-border/50 bg-card">
        <div className="container mx-auto px-4 py-16 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-heading text-3xl md:text-4xl font-bold text-gradient">{stat.value}</div>
                <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FeatureSection
        badge="Features"
        title="Customer communication,"
        highlight="automated"
        description="Stop switching between apps. Manage all customer touchpoints from one intelligent platform."
        features={features}
        columns={3}
      />

      {/* Use Cases */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            badge="Use Cases"
            title="How service businesses use"
            highlight="AI Communications"
            description="Real workflows that save hours every day."
          />
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-xl border border-border/50 bg-background"
            >
              <h4 className="font-heading text-xl font-semibold text-foreground mb-4">Missed Call Text Back</h4>
              <p className="text-muted-foreground mb-4">
                Customer calls while your team is on jobs. Instead of going to voicemail, they receive an instant text: "Thanks for calling [Company]. We're on a job right now but will call you back within 30 minutes. Need service today? Reply YES."
              </p>
              <p className="text-sm text-primary font-medium">Result: 60% fewer lost leads</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-xl border border-border/50 bg-background"
            >
              <h4 className="font-heading text-xl font-semibold text-foreground mb-4">Automated Review Collection</h4>
              <p className="text-muted-foreground mb-4">
                After every completed job, customers receive a text asking about their experience. Happy customers are directed to Google Reviews. Concerns are flagged for follow-up before they become negative reviews.
              </p>
              <p className="text-sm text-primary font-medium">Result: 3x more 5-star reviews</p>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection
        title="Transform your customer"
        highlight="communication"
        description="See how AI Communications can help you respond faster and convert more leads."
      />
    </Layout>
  );
};

export default AICommunications;
