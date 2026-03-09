import Layout from "@/components/Layout";
import ProductPageHero from "@/components/ProductPageHero";
import FeatureSection from "@/components/FeatureSection";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Phone, Bot, Moon, UserCheck, Calendar, Bell, Workflow, Clock, Headphones } from "lucide-react";

const features = [
  { icon: Bot, title: "AI Receptionist", description: "Natural-sounding AI answers calls, understands customer needs, and takes appropriate action—24/7." },
  { icon: Moon, title: "After-Hours Answering", description: "Never miss a call outside business hours. AI handles inquiries, takes messages, and books appointments." },
  { icon: UserCheck, title: "Lead Qualification", description: "AI asks qualifying questions to identify high-value leads. Priority alerts for urgent service requests." },
  { icon: Calendar, title: "Appointment Scheduling", description: "Customers can book directly with the AI. Real-time calendar availability and instant confirmations." },
  { icon: Bell, title: "Service Reminders", description: "Automated outbound calls for appointment reminders, follow-ups, and maintenance notifications." },
  { icon: Workflow, title: "Workflow Automation", description: "Connect voice interactions to your workflows. AI can create jobs, update records, and trigger actions." },
  { icon: Clock, title: "Reduced Hold Times", description: "AI handles routine inquiries instantly. Human agents focus on complex issues." },
  { icon: Headphones, title: "Call Transcription", description: "Every call is transcribed and searchable. Never miss important details from customer conversations." },
  { icon: Phone, title: "Call Routing", description: "Smart routing based on customer needs, agent skills, and availability. Reduce transfers and frustration." },
];

const capabilities = [
  "Answer frequently asked questions about services and pricing",
  "Book, reschedule, and cancel appointments",
  "Provide job status updates to customers",
  "Qualify leads and capture contact information",
  "Take messages and route urgent calls",
  "Send follow-up texts after calls",
];

const AIVoice = () => {
  return (
    <Layout>
      <ProductPageHero
        badge="AI Voice Automation"
        icon={Phone}
        title="Your AI-Powered"
        highlight="Phone System"
        description="AI receptionist, automated appointment scheduling, and intelligent call handling. Provide exceptional phone service without hiring more staff."
      />

      <FeatureSection
        badge="Capabilities"
        title="Enterprise phone features for"
        highlight="growing businesses"
        description="AI voice technology that sounds natural and handles real customer conversations."
        features={features}
        columns={3}
      />

      {/* What AI Can Do */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            badge="AI Capabilities"
            title="What Servinix AI Voice"
            highlight="can do"
            description="Our AI is trained specifically for service businesses and understands industry context."
          />
          <div className="max-w-2xl mx-auto">
            <ul className="space-y-4">
              {capabilities.map((capability, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-lg border border-border/50 bg-background"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-foreground">{capability}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-border/50 bg-card-gradient p-8 md:p-12 text-center"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                The cost of a <span className="text-gradient">missed call</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                The average service call is worth $150-500. Miss 5 calls a day and you're losing $750-2,500 daily. 
                Servinix AI Voice ensures every call is answered, every lead is captured, and every customer is helped.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4">
                  <div className="text-3xl font-bold text-gradient mb-2">24/7</div>
                  <p className="text-sm text-muted-foreground">Always available</p>
                </div>
                <div className="p-4">
                  <div className="text-3xl font-bold text-gradient mb-2">0</div>
                  <p className="text-sm text-muted-foreground">Missed calls</p>
                </div>
                <div className="p-4">
                  <div className="text-3xl font-bold text-gradient mb-2">$0</div>
                  <p className="text-sm text-muted-foreground">Additional staff cost</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection
        title="Never miss another"
        highlight="customer call"
        description="See how AI Voice can transform your phone operations."
      />
    </Layout>
  );
};

export default AIVoice;
