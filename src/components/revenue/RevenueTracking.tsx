import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { ShoppingBag, CreditCard, DollarSign, LineChart } from "lucide-react";

export const RevenueTracking = () => {
  return (
    <div className="min-h-screen bg-dark">
      <Navigation />
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-4xl font-bold text-white mb-8">Revenue Tracking</h1>

        {/* Revenue Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-dark-muted border-gold/20">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-gold text-sm font-medium">
                Total Revenue
              </CardTitle>
              <DollarSign className="h-4 w-4 text-gold" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">$24,567</div>
              <p className="text-xs text-gold/60">+15% from last month</p>
            </CardContent>
          </Card>

          <Card className="bg-dark-muted border-gold/20">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-gold text-sm font-medium">
                Average Order Value
              </CardTitle>
              <ShoppingBag className="h-4 w-4 text-gold" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">$85</div>
              <p className="text-xs text-gold/60">+5% from last month</p>
            </CardContent>
          </Card>

          <Card className="bg-dark-muted border-gold/20">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-gold text-sm font-medium">
                Total Orders
              </CardTitle>
              <CreditCard className="h-4 w-4 text-gold" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">289</div>
              <p className="text-xs text-gold/60">+8% from last month</p>
            </CardContent>
          </Card>
        </div>

        {/* Integration Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-dark-muted border-gold/20">
            <CardHeader>
              <CardTitle className="text-gold">Shopify</CardTitle>
            </CardHeader>
            <CardContent>
              <Button className="w-full border-gold text-gold hover:bg-gold hover:text-dark" variant="outline">
                Connect Shopify
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-dark-muted border-gold/20">
            <CardHeader>
              <CardTitle className="text-gold">Stripe</CardTitle>
            </CardHeader>
            <CardContent>
              <Button className="w-full border-gold text-gold hover:bg-gold hover:text-dark" variant="outline">
                Connect Stripe
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-dark-muted border-gold/20">
            <CardHeader>
              <CardTitle className="text-gold">PayPal</CardTitle>
            </CardHeader>
            <CardContent>
              <Button className="w-full border-gold text-gold hover:bg-gold hover:text-dark" variant="outline">
                Connect PayPal
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Custom Revenue Tracker */}
        <Card className="bg-dark-muted border-gold/20">
          <CardHeader className="flex flex-row items-center space-x-2">
            <LineChart className="h-6 w-6 text-gold" />
            <CardTitle className="text-gold">Custom Revenue Tracking</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white/80 mb-4">
              Don't use any of the platforms above? Track your revenue manually or integrate with your custom solution.
            </p>
            <Button className="border-gold text-gold hover:bg-gold hover:text-dark" variant="outline">
              Setup Custom Tracking
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};