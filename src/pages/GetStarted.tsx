import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Target, Bot, ChartBarIcon } from "lucide-react";

const GetStarted = () => {
  const steps = [
    {
      icon: <Target className="w-12 h-12 text-gold" />,
      title: "Define Your Goals",
      description: "Tell us about your business objectives and target audience.",
      action: "Set Goals",
    },
    {
      icon: <Bot className="w-12 h-12 text-gold" />,
      title: "AI Configuration",
      description: "Our AI analyzes your goals and configures optimal marketing strategies.",
      action: "Configure AI",
    },
    {
      icon: <ChartBarIcon className="w-12 h-12 text-gold" />,
      title: "Launch Campaign",
      description: "Review and launch your AI-optimized marketing campaigns.",
      action: "Launch Now",
    },
  ];

  return (
    <div className="min-h-screen bg-dark text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <Rocket className="w-16 h-16 text-gold mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Start Your AI Marketing Journey
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Follow these simple steps to launch your first AI-powered marketing campaign
            and start seeing results within days.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-dark-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="bg-dark border-gold/20 hover:border-gold/40 transition-colors">
                <CardHeader>
                  <div className="mb-4">{step.icon}</div>
                  <CardTitle className="text-xl text-white">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-400">{step.description}</p>
                  <Button 
                    className="w-full bg-dark border-gold text-gold hover:bg-gold hover:text-dark transition-colors"
                    variant="outline"
                  >
                    {step.action} <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">
            Ready to Transform Your Marketing?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Join hundreds of businesses already using ScaleVault's AI-powered marketing platform.
          </p>
          <Button className="bg-gold hover:bg-gold-muted text-dark text-lg px-8 py-6">
            Start Free Trial <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default GetStarted;