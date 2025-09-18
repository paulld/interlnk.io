import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PlatformOverview from "@/components/PlatformOverview";
import IntegrationsShowcase from "@/components/IntegrationsShowcase";
import TrustSection from "@/components/TrustSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <PlatformOverview />
        <IntegrationsShowcase />
        <TrustSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;