import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter, Globe } from "lucide-react";
import { Navigation } from "@/components/Navigation";

export const CampaignBuilder = () => {
  return (
    <div className="min-h-screen bg-dark">
      <Navigation />
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-4xl font-bold text-white mb-8">Campaign Builder</h1>
        
        {/* AI Content Generator */}
        <Card className="bg-dark-muted border-gold/20 mb-8">
          <CardHeader>
            <CardTitle className="text-gold">AI Content Generator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col space-y-2">
              <Input 
                placeholder="Enter your product or service description"
                className="bg-dark border-gold/20 text-white"
              />
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-dark">
                  Generate Ad Copy
                </Button>
                <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-dark">
                  Create Blog Post
                </Button>
                <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-dark">
                  Social Media Posts
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Platform Campaigns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-dark-muted border-gold/20">
            <CardHeader className="flex flex-row items-center space-x-2">
              <Facebook className="h-6 w-6 text-gold" />
              <CardTitle className="text-gold">Facebook Ads</CardTitle>
            </CardHeader>
            <CardContent>
              <Button className="w-full border-gold text-gold hover:bg-gold hover:text-dark" variant="outline">
                Create Campaign
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-dark-muted border-gold/20">
            <CardHeader className="flex flex-row items-center space-x-2">
              <Globe className="h-6 w-6 text-gold" />
              <CardTitle className="text-gold">Google Ads</CardTitle>
            </CardHeader>
            <CardContent>
              <Button className="w-full border-gold text-gold hover:bg-gold hover:text-dark" variant="outline">
                Create Campaign
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-dark-muted border-gold/20">
            <CardHeader className="flex flex-row items-center space-x-2">
              <Instagram className="h-6 w-6 text-gold" />
              <CardTitle className="text-gold">Instagram Ads</CardTitle>
            </CardHeader>
            <CardContent>
              <Button className="w-full border-gold text-gold hover:bg-gold hover:text-dark" variant="outline">
                Create Campaign
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};