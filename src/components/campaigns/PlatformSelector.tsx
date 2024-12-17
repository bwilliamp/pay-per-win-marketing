import { Check } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter, Globe } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface Platform {
  id: string;
  name: string;
  icon: any;
  connected: boolean;
}

interface PlatformSelectorProps {
  selectedPlatform: string;
  onPlatformChange: (value: string) => void;
}

export const PlatformSelector = ({ selectedPlatform, onPlatformChange }: PlatformSelectorProps) => {
  const { toast } = useToast();
  
  const platforms: Platform[] = [
    { id: 'facebook', name: 'Facebook Ads', icon: Facebook, connected: false },
    { id: 'instagram', name: 'Instagram Ads', icon: Instagram, connected: false },
    { id: 'twitter', name: 'Twitter Ads', icon: Twitter, connected: false },
    { id: 'google', name: 'Google Ads', icon: Globe, connected: false },
  ];

  const connectPlatform = (platformId: string) => {
    console.log(`Connecting to ${platformId}`);
    toast({
      title: "Connecting Account",
      description: `Redirecting to ${platformId} for authentication...`,
    });
  };

  return (
    <div className="flex gap-2 items-center">
      <Select onValueChange={onPlatformChange} value={selectedPlatform}>
        <SelectTrigger className="bg-dark border-gold/20 text-white flex-1">
          <SelectValue placeholder="Select Platform" />
        </SelectTrigger>
        <SelectContent className="bg-dark border-gold/20">
          {platforms.map((platform) => (
            <SelectItem 
              key={platform.id} 
              value={platform.id}
              className={`text-white hover:bg-gold/20 ${!platform.connected && 'opacity-50'}`}
              disabled={!platform.connected}
            >
              <div className="flex items-center gap-2">
                <platform.icon className="h-4 w-4" />
                {platform.name}
                {platform.connected && <Check className="h-4 w-4 ml-auto" />}
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button
        onClick={() => connectPlatform(selectedPlatform || platforms[0].id)}
        variant="outline"
        className="border-gold text-gold hover:bg-gold hover:text-dark whitespace-nowrap"
      >
        Connect Account
      </Button>
    </div>
  );
};