import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const Pricing = () => {
  const pricingTiers = [
    {
      name: "Starter",
      description: "Perfect for small businesses just getting started",
      price: "5%",
      features: [
        "Pay only when you profit",
        "Basic AI campaign optimization",
        "Standard reporting dashboard",
        "Email support",
        "Up to $10k monthly ad spend"
      ]
    },
    {
      name: "Growth",
      description: "Ideal for growing businesses seeking scale",
      price: "7%",
      featured: true,
      features: [
        "All Starter features",
        "Advanced AI optimization",
        "Priority support",
        "Custom reporting",
        "Up to $50k monthly ad spend",
        "Dedicated account manager"
      ]
    },
    {
      name: "Enterprise",
      description: "For large-scale operations requiring custom solutions",
      price: "Custom",
      features: [
        "All Growth features",
        "Custom AI model training",
        "24/7 premium support",
        "API access",
        "Unlimited ad spend",
        "Custom integrations"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-dark text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Simple, Performance-Based Pricing
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Only pay a percentage of the revenue we generate. No upfront fees, no hidden costs.
            Your success is our success.
          </p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-20 bg-dark-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card 
                key={index} 
                className={`bg-dark relative ${
                  tier.featured 
                    ? 'border-gold scale-105 md:scale-110' 
                    : 'border-gold/20 hover:border-gold/40'
                } transition-all duration-300`}
              >
                {tier.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-dark px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl text-white mb-2">{tier.name}</CardTitle>
                  <p className="text-gray-400">{tier.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gold">{tier.price}</span>
                    {tier.price !== "Custom" && (
                      <span className="text-gray-400 ml-2">of revenue</span>
                    )}
                  </div>
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-gold mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${
                      tier.featured 
                        ? 'bg-gold hover:bg-gold-muted text-dark' 
                        : 'border-gold text-gold hover:bg-gold hover:text-dark'
                    }`}
                    variant={tier.featured ? 'default' : 'outline'}
                  >
                    Get Started <ArrowRight className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How does performance-based pricing work?",
                answer: "We only charge a percentage of the additional revenue we generate for your business. If we don't increase your revenue, you don't pay anything."
              },
              {
                question: "Is there a minimum commitment period?",
                answer: "No, you can cancel anytime. We believe in earning your business every month through results."
              },
              {
                question: "How do you track revenue attribution?",
                answer: "We use advanced tracking systems to accurately measure the revenue generated from our campaigns, ensuring transparent and accurate billing."
              },
              {
                question: "Can I upgrade or downgrade my plan?",
                answer: "Yes, you can change your plan at any time to match your business needs and growth trajectory."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-dark-muted p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gold">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;