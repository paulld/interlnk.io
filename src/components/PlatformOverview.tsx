import { Card, CardContent } from "@/components/ui/card";
import { Truck, Package, Zap, Shield, BarChart3, Globe } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Real-Time Orchestration",
    description: "Instantly coordinate across all your logistics partners with our intelligent routing engine."
  },
  {
    icon: Globe,
    title: "Universal Connectivity",
    description: "Seamlessly integrate with 3PLs, carriers, WMS, OMS, and marketplaces through a single API."
  },
  {
    icon: BarChart3,
    title: "Unified Analytics",
    description: "Get complete visibility into your supply chain performance with enterprise-grade reporting."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption and SOC 2 compliance ensure your data is always protected."
  },
  {
    icon: Package,
    title: "Order Intelligence",
    description: "Smart order routing and optimization across your entire fulfillment network."
  },
  {
    icon: Truck,
    title: "Carrier Management",
    description: "Manage all your shipping partners from one dashboard with automated rate shopping."
  }
];

const PlatformOverview = () => {
  return (
    <section id="platform" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            One Platform, Infinite Possibilities
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interlnk sits above your entire logistics ecosystem, orchestrating every touchpoint 
            to deliver seamless, intelligent fulfillment operations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="card-shadow hover:shadow-enterprise transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformOverview;