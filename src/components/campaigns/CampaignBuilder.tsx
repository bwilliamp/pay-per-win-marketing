import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Facebook, Instagram, Twitter, Globe, Link as LinkIcon } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const CampaignBuilder = () => {
  const { toast } = useToast();
  const [campaignData, setCampaignData] = useState({
    title: "",
    description: "",
    budget: "",
    platform: "",
    targetAudience: "",
  });

  const platforms = [
    { id: 'facebook', name: 'Facebook Ads', icon: Facebook },
    { id: 'instagram', name: 'Instagram Ads', icon: Instagram },
    { id: 'twitter', name: 'Twitter Ads', icon: Twitter },
    { id: 'google', name: 'Google Ads', icon: Globe },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCampaignData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePlatformChange = (value: string) => {
    setCampaignData((prev) => ({
      ...prev,
      platform: value,
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

  const connectPlatform = (platformId: string) => {
    console.log(`Connecting to ${platformId}`);
    toast({
      title: "Connecting Account",
      description: `Redirecting to ${platformId} for authentication...`,
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
              <div>
                <Select onValueChange={handlePlatformChange} value={campaignData.platform}>
                  <SelectTrigger className="bg-dark border-gold/20 text-white">
                    <SelectValue placeholder="Select Platform" />
                  </SelectTrigger>
                  <SelectContent className="bg-dark border-gold/20">
                    {platforms.map((platform) => (
                      <SelectItem 
                        key={platform.id} 
                        value={platform.id}
                        className="text-white hover:bg-gold/20"
                      >
                        <div className="flex items-center gap-2">
                          <platform.icon className="h-4 w-4" />
                          {platform.name}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
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

        {/* Platform Connections */}
        <Card className="bg-dark-muted border-gold/20">
          <CardHeader>
            <CardTitle className="text-gold">Connect Platforms</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {platforms.map((platform) => (
                <Button
                  key={platform.id}
                  onClick={() => connectPlatform(platform.id)}
                  variant="outline"
                  className="w-full border-gold text-gold hover:bg-gold hover:text-dark flex items-center justify-center gap-2"
                >
                  <platform.icon className="h-4 w-4" />
                  <LinkIcon className="h-4 w-4" />
                  Connect {platform.name}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};