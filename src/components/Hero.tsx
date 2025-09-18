import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-logistics.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero opacity-85" />
      
      {/* Content */}
      <div className="relative container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl">
          <h1 className="text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 fade-in-up">
            The 4PL Platform
            <span className="block text-secondary">That Connects Everything</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-primary-foreground/90 mb-8 max-w-3xl fade-in-up-delay-1">
            Interlnk orchestrates your entire e-commerce logistics ecosystem. One platform, 
            infinite connections, total visibility.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12 fade-in-up-delay-2">
            <Button size="lg" className="enterprise-button">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="hero-outline-button">
              Watch Demo
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 fade-in-up-delay-2">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-success" />
              <span className="text-primary-foreground/80">Enterprise-grade security</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-success" />
              <span className="text-primary-foreground/80">99.9% uptime SLA</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-success" />
              <span className="text-primary-foreground/80">SOC 2 compliant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;