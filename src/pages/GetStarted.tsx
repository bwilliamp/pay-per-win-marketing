import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Input } from "@/components/ui/input";

const GetStarted = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="min-h-screen bg-dark text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <Rocket className="w-16 h-16 text-gold mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Get Started with MarketAI
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Login to access your AI-powered marketing dashboard
          </p>

          <Card className="max-w-md mx-auto bg-dark border-gold">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Login</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="email"
                    placeholder="demo@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-dark-muted text-white border-gold/20"
                  />
                </div>
                <div>
                  <Input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-dark-muted text-white border-gold/20"
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-gold hover:bg-gold-muted text-dark"
                  disabled={isLoading}
                >
                  {isLoading ? "Logging in..." : "Login"}
                </Button>
                <p className="text-sm text-gray-400 text-center mt-4">
                  Use demo@example.com / password to login
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default GetStarted;