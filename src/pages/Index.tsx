import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { ArrowRight, ArrowUpCircle, Bot, ChartBarIcon, Target, Vault, DollarSign, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
                Pay Only When You Profit
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                The first AI-powered marketing agency that charges based on performance.
                No results, no fees.
              </p>
              <Button className="bg-gold hover:bg-gold-muted text-dark text-lg px-8 py-6">
                Start Scaling with ScaleVault <ArrowRight className="ml-2" />
              </Button>
            </div>
            <div className="flex-1 relative">
              <div className="relative w-full h-64 md:h-96">
                <Vault className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 text-gold" />
                <ArrowUpCircle className="absolute top-1/4 right-1/4 w-16 h-16 text-gold animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-dark-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">
            We Don't Get Paid Unless You Profit
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            ScaleVault combines AI-powered marketing automation with a revolutionary pay-for-performance model.
            Your success is our success - literally.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            How ScaleVault Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-12 h-12 text-gold" />,
                title: "Personalized Onboarding",
                description: "Custom-tailored marketing strategies based on your business goals and target audience."
              },
              {
                icon: <Bot className="w-12 h-12 text-gold" />,
                title: "AI-Powered Ad Creation",
                description: "Our AI generates high-converting ad copy and creative assets automatically."
              },
              {
                icon: <ChartBarIcon className="w-12 h-12 text-gold" />,
                title: "Revenue Tracking",
                description: "Real-time dashboard showing your campaign performance and ROI."
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-dark border-gold/20 hover:border-gold/40 transition-colors">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-dark-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            Success Stories
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "ScaleVault helped us achieve 300% ROI in our first month.",
                author: "Sarah J.",
                company: "E-commerce Store Owner"
              },
              {
                quote: "The AI-generated ads outperformed our manual campaigns by 2x.",
                author: "Michael R.",
                company: "SaaS Founder"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-dark border-gold/20">
                <CardContent className="pt-6">
                  <Star className="w-8 h-8 text-gold mb-4" />
                  <p className="text-lg mb-4">{testimonial.quote}</p>
                  <p className="text-gold font-bold">{testimonial.author}</p>
                  <p className="text-gray-400">{testimonial.company}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">
            Simple, Performance-Based Pricing
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Only pay a percentage of the revenue we generate for your business.
          </p>
          
          <Card className="max-w-md mx-auto bg-dark border-gold">
            <CardHeader>
              <CardTitle className="text-2xl text-white">
                Pay-Per-Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center mb-4">
                <DollarSign className="w-12 h-12 text-gold" />
              </div>
              <ul className="text-left space-y-4 mb-8">
                <li className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-gold mr-2" />
                  No upfront fees
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-gold mr-2" />
                  Pay only when you profit
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-gold mr-2" />
                  Performance-based commission
                </li>
              </ul>
              <Button className="w-full bg-gold hover:bg-gold-muted text-dark">
                Get Started Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-dark-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">
            Ready to Scale Your Business?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Join hundreds of businesses that are already growing with ScaleVault's
            risk-free marketing solutions.
          </p>
          <Button className="bg-gold hover:bg-gold-muted text-dark text-lg px-8 py-6">
            Claim Your Free Ad Assessment <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-dark border-t border-gold/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-gold font-bold text-lg mb-4">ScaleVault</h3>
              <p className="text-gray-400">
                AI-powered marketing with performance-based pricing.
              </p>
            </div>
            <div>
              <h3 className="text-gold font-bold text-lg mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/privacy" className="text-gray-400 hover:text-gold">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="text-gray-400 hover:text-gold">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-gold font-bold text-lg mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:hello@scalevault.ai" className="text-gray-400 hover:text-gold">
                    hello@scalevault.ai
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-gold font-bold text-lg mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-gold">
                  Twitter
                </a>
                <a href="#" className="text-gray-400 hover:text-gold">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gold/20 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} ScaleVault. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
