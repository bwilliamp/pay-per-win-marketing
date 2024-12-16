import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { ArrowRight, BarChart, DollarSign, Target } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Pay Only When You Profit
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            The first AI-powered marketing agency that charges based on performance.
            No results, no fees.
          </p>
          <Button className="bg-gold hover:bg-gold-muted text-dark text-lg px-8 py-6">
            Start Your Risk-Free Campaign <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-dark-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            Why Choose MarketAI?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-12 h-12 text-gold" />,
                title: "AI-Powered Targeting",
                description: "Our AI analyzes your ideal customer profile and finds the perfect audience for your campaigns."
              },
              {
                icon: <BarChart className="w-12 h-12 text-gold" />,
                title: "Real-Time Analytics",
                description: "Track your campaign performance and ROI in real-time through our intuitive dashboard."
              },
              {
                icon: <DollarSign className="w-12 h-12 text-gold" />,
                title: "Pay Per Performance",
                description: "Only pay when we deliver results. No upfront fees, no risks, just pure performance."
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-dark p-6 rounded-lg border border-gold/20 hover:border-gold/40 transition-colors"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that are already growing with MarketAI's
            risk-free marketing solutions.
          </p>
          <Button className="bg-gold hover:bg-gold-muted text-dark text-lg px-8 py-6">
            Get Started Now <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;