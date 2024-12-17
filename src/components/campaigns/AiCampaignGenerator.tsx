import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

export const AiCampaignGenerator = () => {
  const { toast } = useToast();

  const generateAICampaign = () => {
    toast({
      title: "AI Generation Started",
      description: "Generating campaign content using AI...",
    });
    // AI generation logic would go here
  };

  return (
    <div className="space-y-4">
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
    </div>
  );
};