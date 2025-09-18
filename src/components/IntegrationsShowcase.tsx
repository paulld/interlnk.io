import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const integrationCategories = [
  {
    category: "3PL Partners",
    integrations: ["ShipBob", "Fulfillment by Amazon", "Red Stag", "ShipHero", "Flexe"],
    color: "bg-primary/10 text-primary"
  },
  {
    category: "Carriers",
    integrations: ["FedEx", "UPS", "DHL", "USPS", "OnTrac"],
    color: "bg-secondary/10 text-secondary-foreground"
  },
  {
    category: "E-commerce Platforms",
    integrations: ["Shopify", "BigCommerce", "WooCommerce", "Magento", "Amazon"],
    color: "bg-accent/10 text-accent-foreground"
  },
  {
    category: "Order Management",
    integrations: ["NetSuite", "SAP", "Oracle", "Brightpearl", "ChannelAdvisor"],
    color: "bg-success/10 text-success-foreground"
  }
];

const IntegrationsShowcase = () => {
  return (
    <section id="integrations" className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Connects With Everything You Use
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pre-built integrations with 200+ logistics partners, platforms, and systems. 
            If we don't have it, we'll build it.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {integrationCategories.map((category, index) => (
            <Card key={index} className="card-shadow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.integrations.map((integration, idx) => (
                    <Badge 
                      key={idx} 
                      variant="secondary" 
                      className={`${category.color} px-4 py-2 text-sm font-medium`}
                    >
                      {integration}
                    </Badge>
                  ))}
                  <Badge variant="outline" className="px-4 py-2 text-sm">
                    +{Math.floor(Math.random() * 20) + 10} more
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Don't see your integration? We build custom connections in 2-4 weeks.
          </p>
          <div className="flex justify-center">
            <Card className="bg-gradient-primary p-6 card-shadow">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-foreground mb-2">200+</div>
                <div className="text-primary-foreground/80">Active Integrations</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsShowcase;