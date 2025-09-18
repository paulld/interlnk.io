import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Logistics?
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Join the leading brands who trust Interlnk to orchestrate their entire fulfillment ecosystem. 
            Get started in minutes, see results in days.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="bg-background/95 backdrop-blur-sm card-shadow">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Talk to Sales
              </h3>
              <p className="text-muted-foreground mb-6">
                Get a personalized demo and see how Interlnk can transform your operations.
              </p>
              <Button className="w-full enterprise-button">
                Schedule Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-background/95 backdrop-blur-sm card-shadow">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-secondary rounded-xl flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Free Trial
              </h3>
              <p className="text-muted-foreground mb-6">
                Experience the platform risk-free with our 30-day trial. No setup fees.
              </p>
              <Button variant="secondary" className="w-full">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-background/95 backdrop-blur-sm card-shadow">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                <ArrowRight className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Quick Setup
              </h3>
              <p className="text-muted-foreground mb-6">
                Get up and running in under 24 hours with our guided onboarding.
              </p>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-primary-foreground/80 mb-4">
            Questions? Email us at <a href="mailto:hello@interlnk.io" className="text-secondary hover:underline">hello@interlnk.io</a>
          </p>
          <p className="text-primary-foreground/60 text-sm">
            SOC 2 compliant • GDPR ready • 99.9% uptime SLA
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;