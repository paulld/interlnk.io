import { Card, CardContent } from "@/components/ui/card";
import { Star, TrendingUp, Clock, Users } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "$2.5B+",
    label: "Orders Processed"
  },
  {
    icon: Clock,
    value: "99.9%",
    label: "Uptime SLA"
  },
  {
    icon: Users,
    value: "500+",
    label: "Enterprise Clients"
  },
  {
    icon: Star,
    value: "4.9/5",
    label: "Customer Rating"
  }
];

const testimonials = [
  {
    quote: "Interlnk transformed our logistics operations. We went from managing 15 different vendor dashboards to one unified platform. Game changer.",
    author: "Sarah Chen",
    title: "VP of Operations",
    company: "TechCommerce Inc."
  },
  {
    quote: "The visibility and control we have now is incredible. Real-time tracking across all our 3PLs and carriers has reduced our customer service tickets by 60%.",
    author: "Michael Rodriguez",
    title: "Director of Fulfillment",
    company: "GlobalRetail Co."
  }
];

const TrustSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center card-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Testimonials */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join hundreds of companies who have transformed their logistics operations with Interlnk.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-shadow">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <blockquote className="text-lg text-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-muted-foreground">{testimonial.title}</div>
                  <div className="text-muted-foreground font-medium">{testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;