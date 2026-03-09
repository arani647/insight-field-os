import Layout from "@/components/Layout";
import ProductPageHero from "@/components/ProductPageHero";
import FeatureSection from "@/components/FeatureSection";
import CTASection from "@/components/CTASection";
import { MapPin, Navigation, Route, Clock, Fuel, AlertTriangle, Smartphone, BarChart3, Shield } from "lucide-react";

const features = [
  { icon: Navigation, title: "Live Vehicle Tracking", description: "See exact locations of all vehicles in real-time with 10-second refresh rates. Never wonder where your team is." },
  { icon: Route, title: "Route History", description: "Review complete route history for any vehicle. Analyze driving patterns and optimize service territories." },
  { icon: Clock, title: "ETA Visibility", description: "Provide customers with accurate arrival times. Automatically update ETAs based on traffic and job completion." },
  { icon: Fuel, title: "Fuel & Mileage Tracking", description: "Monitor fuel consumption and mileage across your fleet. Identify inefficiencies and reduce costs." },
  { icon: AlertTriangle, title: "Driver Behavior Insights", description: "Track speeding, harsh braking, and idling. Improve safety and reduce vehicle wear." },
  { icon: Smartphone, title: "Mobile App", description: "Technicians check in and out of jobs via mobile app. GPS automatically logs arrival and departure times." },
  { icon: BarChart3, title: "Fleet Analytics", description: "Comprehensive dashboards showing utilization, efficiency, and performance metrics for your entire fleet." },
  { icon: Shield, title: "Geofencing", description: "Set up geographic boundaries and receive alerts when vehicles enter or exit designated areas." },
  { icon: MapPin, title: "Dispatch Awareness", description: "Dispatch knows exactly where every technician is, enabling smarter job assignments and faster response times." },
];

const FleetGPS = () => {
  return (
    <Layout>
      <ProductPageHero
        badge="Fleet GPS Tracking"
        icon={MapPin}
        title="Know Where Your Team Is,"
        highlight="Always"
        description="Real-time GPS tracking for your entire fleet. Optimize routes, improve accountability, and reduce fuel costs with complete visibility."
      />

      <FeatureSection
        badge="Capabilities"
        title="Complete fleet visibility"
        highlight="at your fingertips"
        description="Enterprise-grade GPS tracking designed specifically for service businesses."
        features={features}
        columns={3}
      />

      {/* Integration Note */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Integrated with <span className="text-gradient">Job Management</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Fleet GPS isn't a separate system—it's built into the Servinix platform. When a technician arrives at a job site, their location automatically updates the job status. Dispatchers see real-time positions alongside job details.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl border border-border/50 bg-background">
                <div className="text-3xl font-bold text-gradient mb-2">40%</div>
                <p className="text-sm text-muted-foreground">Reduction in windshield time</p>
              </div>
              <div className="p-6 rounded-xl border border-border/50 bg-background">
                <div className="text-3xl font-bold text-gradient mb-2">25%</div>
                <p className="text-sm text-muted-foreground">Fuel cost savings</p>
              </div>
              <div className="p-6 rounded-xl border border-border/50 bg-background">
                <div className="text-3xl font-bold text-gradient mb-2">2hrs</div>
                <p className="text-sm text-muted-foreground">Saved per tech daily</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Get complete visibility into your"
        highlight="fleet operations"
        description="See how Fleet GPS tracking integrates with the full Servinix platform."
      />
    </Layout>
  );
};

export default FleetGPS;
