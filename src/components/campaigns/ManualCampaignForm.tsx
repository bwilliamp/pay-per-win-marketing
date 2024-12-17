import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PlatformSelector } from "./PlatformSelector";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { Wand2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const ManualCampaignForm = () => {
  const { toast } = useToast();
  const [campaignData, setCampaignData] = useState({
    title: "",
    description: "",
    budget: "",
    platform: "",
    targetAudience: "",
  });
  const [aiPrompt, setAiPrompt] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

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

  const handleAiGenerate = () => {
    console.log("Generating with AI prompt:", aiPrompt);
    toast({
      title: "AI Generation Started",
      description: "Generating campaign content using AI...",
    });
    
    // Simulated AI response - in real implementation, this would come from the AI service
    setTimeout(() => {
      setCampaignData({
        title: "AI Generated Campaign",
        description: "This is an AI-generated campaign based on your prompt: " + aiPrompt,
        budget: "1000",
        platform: "facebook",
        targetAudience: "Digital marketing professionals",
      });
      setIsDialogOpen(false);
      toast({
        title: "AI Generation Complete",
        description: "Campaign fields have been filled with AI-generated content.",
      });
    }, 1500);
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
      <div className="flex justify-between items-center mb-4">
        <Input
          placeholder="Campaign Title"
          name="title"
          value={campaignData.title}
          onChange={handleInputChange}
          className="bg-dark border-gold/20 text-white flex-1 mr-2"
        />
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button
              type="button"
              variant="outline"
              className="border-gold text-gold hover:bg-gold hover:text-dark"
            >
              <Wand2 className="mr-2" />
              AI Magic
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-dark border-gold/20">
            <DialogHeader>
              <DialogTitle className="text-gold">AI Campaign Generator</DialogTitle>
              <DialogDescription className="text-white/70">
                Describe your product or service, and let AI help create your campaign.
              </DialogDescription>
            </DialogHeader>
            <Textarea
              value={aiPrompt}
              onChange={(e) => setAiPrompt(e.target.value)}
              placeholder="E.g., 'A premium coffee subscription service targeting young professionals...'"
              className="bg-dark border-gold/20 text-white min-h-[100px]"
            />
            <Button
              type="button"
              onClick={handleAiGenerate}
              variant="outline"
              className="border-gold text-gold hover:bg-gold hover:text-dark w-full"
            >
              Generate Campaign
            </Button>
          </DialogContent>
        </Dialog>
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