import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import heroDashboard from "@/assets/hero-dashboard.png";
import { ArrowRight } from "lucide-react";

const HomeBelowFold = lazy(() => import("@/components/HomeBelowFold"));

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
            <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground leading-[1.1] tracking-tight animate-hero-fade-up [animation-delay:100ms]">
              Run Your Service Business on{" "}
              <span className="text-gradient">One AI-Native Platform</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-amber-400 animate-hero-fade-up [animation-delay:200ms]">
              Servinix combines fleet tracking, field service management, and AI customer communication into a single operational platform.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-hero-fade-up [animation-delay:300ms]">
              <Link to="/contact">
                <Button variant="hero" size="lg" className="text-base px-8 py-6">
                  Book Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/product">
                <Button variant="hero-outline" size="lg" className="text-base px-8 py-6 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10">
                  See Product
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-16 lg:mt-24 max-w-5xl mx-auto animate-hero-fade-up [animation-delay:500ms]">
            <div className="rounded-xl border border-border/50 overflow-hidden glow-primary">
              <img src={heroDashboard} alt="Servinix platform dashboard showing fleet tracking and job management" className="w-full h-auto" loading="eager" fetchPriority="high" width={1920} height={1080} sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 1024px" />
            </div>
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="min-h-[200px]" />}>
        <HomeBelowFold />
      </Suspense>
    </Layout>
  );
};

export default Index;
