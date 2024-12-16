import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, ChartBarIcon, Target, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Features = () => {
  const features = [
    {
      icon: <Target className="w-12 h-12 text-gold" />,
      title: "Smart Campaign Targeting",
      description: "AI-powered audience targeting that continuously optimizes for the highest ROI.",
      benefits: [
        "Automated audience segmentation",
        "Real-time optimization",
        "Predictive analytics"
      ]
    },
    {
      icon: <Bot className="w-12 h-12 text-gold" />,
      title: "AI Content Generation",
      description: "Generate high-converting ad copy and creative assets in seconds.",
      benefits: [
        "Multi-variant testing",
        "Brand voice customization",
        "Automatic A/B testing"
      ]
    },
    {
      icon: <ChartBarIcon className="w-12 h-12 text-gold" />,
      title: "Performance Analytics",
      description: "Comprehensive reporting dashboard with actionable insights.",
      benefits: [
        "Real-time ROI tracking",
        "Custom report builder",
        "Revenue attribution"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-dark text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text text-center">
            Features That Drive Growth
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-12">
            Our AI-powered platform combines cutting-edge technology with performance-based pricing
            to ensure your success.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-dark-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-dark border-gold/20 hover:border-gold/40 transition-colors">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 mb-6">{feature.description}</p>
                  <ul className="space-y-3 text-gray-300">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center">
                        <ArrowRight className="w-4 h-4 text-gold mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
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
            Ready to Experience These Features?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Start your journey with ScaleVault today and only pay when you see results.
          </p>
          <Button className="bg-gold hover:bg-gold-muted text-dark text-lg px-8 py-6">
            Get Started Now <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Features;