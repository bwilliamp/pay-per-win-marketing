import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartLine, Users, Activity, MessageSquare } from "lucide-react";

export const DashboardContent = () => {
  return (
    <div className="container mx-auto px-4 pt-24">
      <h1 className="text-4xl font-bold text-white mb-8">Welcome back!</h1>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="bg-dark-muted border-gold/20">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-gold text-sm font-medium">
              Total Campaigns
            </CardTitle>
            <ChartLine className="h-4 w-4 text-gold" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">12</div>
            <p className="text-xs text-gold/60">+2.5% from last month</p>
          </CardContent>
        </Card>

        <Card className="bg-dark-muted border-gold/20">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-gold text-sm font-medium">
              Active Users
            </CardTitle>
            <Users className="h-4 w-4 text-gold" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">1,234</div>
            <p className="text-xs text-gold/60">+12% from last month</p>
          </CardContent>
        </Card>

        <Card className="bg-dark-muted border-gold/20">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-gold text-sm font-medium">
              Engagement Rate
            </CardTitle>
            <Activity className="h-4 w-4 text-gold" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">8.2%</div>
            <p className="text-xs text-gold/60">+1.2% from last month</p>
          </CardContent>
        </Card>

        <Card className="bg-dark-muted border-gold/20">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-gold text-sm font-medium">
              Messages Sent
            </CardTitle>
            <MessageSquare className="h-4 w-4 text-gold" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">4,321</div>
            <p className="text-xs text-gold/60">+8.1% from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="bg-dark-muted border-gold/20">
        <CardHeader>
          <CardTitle className="text-gold">Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              "New campaign 'Summer Sale' created",
              "AI optimization completed for 'Brand Awareness'",
              "Weekly report generated",
              "Campaign 'Product Launch' reached target audience"
            ].map((activity, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 text-white/80 text-sm border-b border-gold/10 pb-2"
              >
                <div className="w-2 h-2 rounded-full bg-gold"></div>
                <span>{activity}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};