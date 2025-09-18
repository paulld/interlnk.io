import { Card, CardContent } from "@/components/ui/card";

// Import company logos
import fedexLogo from "@/assets/logos/fedex-logo.png";
import upsLogo from "@/assets/logos/ups-logo.png";
import dhlLogo from "@/assets/logos/dhl-logo.png";
import uspsLogo from "@/assets/logos/usps-logo.png";
import ontracLogo from "@/assets/logos/ontrac-logo.png";
import shopifyLogo from "@/assets/logos/shopify-logo.png";
import amazonLogo from "@/assets/amazon-logo.png";
import bigCommerceLogo from "@/assets/logos/bigcommerce-logo.png";
import wooCommerceLogo from "@/assets/logos/woocommerce-logo.png";
import magentoLogo from "@/assets/logos/magento-logo.png";
import netSuiteLogo from "@/assets/logos/netsuite-logo.png";
import sapLogo from "@/assets/logos/sap-logo.png";
import oracleLogo from "@/assets/logos/oracle-logo.png";
import brightpearlLogo from "@/assets/logos/brightpearl-logo.png";
import channelAdvisorLogo from "@/assets/logos/channeladvisor-logo.png";
import shipBobLogo from "@/assets/logos/shipbob-logo.png";
import redstagLogo from "@/assets/logos/redstag-logo.png";
import shipheroLogo from "@/assets/logos/shiphero-logo.png";
import flexeLogo from "@/assets/logos/flexe-logo.png";

const integrationCategories = [
  {
    category: "3PL Partners",
    integrations: [
      { name: "ShipBob", logo: shipBobLogo },
      { name: "Fulfillment by Amazon", logo: amazonLogo },
      { name: "Red Stag", logo: redstagLogo },
      { name: "ShipHero", logo: shipheroLogo },
      { name: "Flexe", logo: flexeLogo }
    ],
    color: "bg-primary/10 text-primary"
  },
  {
    category: "Carriers",
    integrations: [
      { name: "FedEx", logo: fedexLogo },
      { name: "UPS", logo: upsLogo },
      { name: "DHL", logo: dhlLogo },
      { name: "USPS", logo: uspsLogo },
      { name: "OnTrac", logo: ontracLogo }
    ],
    color: "bg-secondary/10 text-secondary-foreground"
  },
  {
    category: "E-commerce Platforms",
    integrations: [
      { name: "Shopify", logo: shopifyLogo },
      { name: "BigCommerce", logo: bigCommerceLogo },
      { name: "WooCommerce", logo: wooCommerceLogo },
      { name: "Magento", logo: magentoLogo },
      { name: "Amazon", logo: amazonLogo }
    ],
    color: "bg-accent/10 text-accent-foreground"
  },
  {
    category: "Order Management",
    integrations: [
      { name: "NetSuite", logo: netSuiteLogo },
      { name: "SAP", logo: sapLogo },
      { name: "Oracle", logo: oracleLogo },
      { name: "Brightpearl", logo: brightpearlLogo },
      { name: "ChannelAdvisor", logo: channelAdvisorLogo }
    ],
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
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                  {category.integrations.map((integration, idx) => (
                    <div
                      key={idx}
                      className="group bg-white rounded-lg p-4 border border-border hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center min-h-[80px]"
                    >
                      <div className="flex items-center justify-center w-full h-full">
                        <img 
                          src={integration.logo} 
                          alt={`${integration.name} logo`}
                          className="max-h-10 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                        />
                      </div>
                    </div>
                  ))}
                  <div className="flex items-center justify-center p-4 border-2 border-dashed border-muted rounded-lg min-h-[80px]">
                    <span className="text-xs text-muted-foreground font-medium text-center">
                      +{Math.floor(Math.random() * 20) + 10} more
                    </span>
                  </div>
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