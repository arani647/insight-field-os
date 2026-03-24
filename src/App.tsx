// Servinix App
import { lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";

const Toaster = lazy(() => import("@/components/ui/toaster").then(m => ({ default: m.Toaster })));
const Sonner = lazy(() => import("@/components/ui/sonner").then(m => ({ default: m.Toaster })));

const Product = lazy(() => import("./pages/Product"));
const GPSTracking = lazy(() => import("./pages/GPSTracking"));
const FieldService = lazy(() => import("./pages/FieldService"));
const FieldServiceGetNoticed = lazy(() => import("./pages/FieldServiceGetNoticed"));
const FieldServiceGetPaid = lazy(() => import("./pages/FieldServiceGetPaid"));
const AIEmployee = lazy(() => import("./pages/AIEmployee"));
const AIAssistant = lazy(() => import("./pages/AIAssistant"));
const Reviews = lazy(() => import("./pages/Reviews"));
const Phones = lazy(() => import("./pages/Phones"));
const TextMarketing = lazy(() => import("./pages/TextMarketing"));
const Industries = lazy(() => import("./pages/Industries"));
const Pricing = lazy(() => import("./pages/Pricing"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Suspense fallback={null}>
        <Toaster />
        <Sonner />
      </Suspense>
      <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/product" element={<Product />} />
            <Route path="/platform" element={<Product />} />
            <Route path="/gps-tracking" element={<GPSTracking />} />
            <Route path="/fleet-gps" element={<GPSTracking />} />
            <Route path="/field-service" element={<FieldService />} />
            <Route path="/field-service/get-noticed" element={<FieldServiceGetNoticed />} />
            <Route path="/field-service/get-paid" element={<FieldServiceGetPaid />} />
            <Route path="/ai-employee" element={<AIEmployee />} />
            <Route path="/ai-communications" element={<AIEmployee />} />
            <Route path="/ai-assistant" element={<AIAssistant />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/phones" element={<Phones />} />
            <Route path="/ai-voice" element={<Phones />} />
            <Route path="/text-marketing" element={<TextMarketing />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
