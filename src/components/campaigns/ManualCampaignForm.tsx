import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PlatformSelector } from "./PlatformSelector";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

export const ManualCampaignForm = () => {
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

  return (
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
        <PlatformSelector
          selectedPlatform={campaignData.platform}
          onPlatformChange={handlePlatformChange}
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
  );
};