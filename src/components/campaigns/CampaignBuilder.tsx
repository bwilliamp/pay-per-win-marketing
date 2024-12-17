import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Facebook, Instagram, Twitter, Globe } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export const CampaignBuilder = () => {
  const { toast } = useToast();
  const [campaignData, setCampaignData] = useState({
    title: "",
    description: "",
    budget: "",
    platform: "",
    targetAudience: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCampaignData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Campaign Data:", campaignData);
    toast({
      title: "Campaign Created",
      description: "Your campaign has been successfully created!",
    });
  };

  const generateAICampaign = () => {
    toast({
      title: "AI Generation Started",
      description: "Generating campaign content using AI...",
    });
    // AI generation logic would go here
  };

  return (
    <div className="min-h-screen bg-dark">
      <Navigation />
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-4xl font-bold text-white mb-8">Campaign Builder</h1>
        
        {/* Manual Campaign Creation Form */}
        <Card className="bg-dark-muted border-gold/20 mb-8">
          <CardHeader>
            <CardTitle className="text-gold">Create Campaign</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Campaign Title"
                  name="title"
                  value={campaignData.title}
                  onChange={handleInputChange}
                  className="bg-dark border-gold/20 text-white"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Campaign Description"
                  name="description"
                  value={campaignData.description}
                  onChange={handleInputChange}
                  className="bg-dark border-gold/20 text-white min-h-[100px]"
                />
              </div>
              <div>
                <Input
                  placeholder="Budget (USD)"
                  name="budget"
                  type="number"
                  value={campaignData.budget}
                  onChange={handleInputChange}
                  className="bg-dark border-gold/20 text-white"
                />
              </div>
              <div>
                <Input
                  placeholder="Target Audience"
                  name="targetAudience"
                  value={campaignData.targetAudience}
                  onChange={handleInputChange}
                  className="bg-dark border-gold/20 text-white"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full border-gold text-gold hover:bg-gold hover:text-dark"
                variant="outline"
              >
                Create Campaign
              </Button>
            </form>
          </CardContent>
        </Card>
        
        {/* AI Content Generator */}
        <Card className="bg-dark-muted border-gold/20 mb-8">
          <CardHeader>
            <CardTitle className="text-gold">AI Content Generator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col space-y-2">
              <Textarea 
                placeholder="Describe your product or service for AI generation..."
                className="bg-dark border-gold/20 text-white min-h-[100px]"
              />
              <Button 
                onClick={generateAICampaign}
                variant="outline" 
                className="border-gold text-gold hover:bg-gold hover:text-dark"
              >
                Generate Campaign with AI
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Platform Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-dark-muted border-gold/20">
            <CardHeader className="flex flex-row items-center space-x-2">
              <Facebook className="h-6 w-6 text-gold" />
              <CardTitle className="text-gold">Facebook Ads</CardTitle>
            </CardHeader>
            <CardContent>
              <Button 
                className="w-full border-gold text-gold hover:bg-gold hover:text-dark" 
                variant="outline"
                onClick={() => setCampaignData(prev => ({ ...prev, platform: 'facebook' }))}
              >
                Select Platform
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-dark-muted border-gold/20">
            <CardHeader className="flex flex-row items-center space-x-2">
              <Globe className="h-6 w-6 text-gold" />
              <CardTitle className="text-gold">Google Ads</CardTitle>
            </CardHeader>
            <CardContent>
              <Button 
                className="w-full border-gold text-gold hover:bg-gold hover:text-dark" 
                variant="outline"
                onClick={() => setCampaignData(prev => ({ ...prev, platform: 'google' }))}
              >
                Select Platform
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-dark-muted border-gold/20">
            <CardHeader className="flex flex-row items-center space-x-2">
              <Instagram className="h-6 w-6 text-gold" />
              <CardTitle className="text-gold">Instagram Ads</CardTitle>
            </CardHeader>
            <CardContent>
              <Button 
                className="w-full border-gold text-gold hover:bg-gold hover:text-dark" 
                variant="outline"
                onClick={() => setCampaignData(prev => ({ ...prev, platform: 'instagram' }))}
              >
                Select Platform
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};