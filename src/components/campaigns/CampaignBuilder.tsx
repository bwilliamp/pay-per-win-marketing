import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { ManualCampaignForm } from "./ManualCampaignForm";

export const CampaignBuilder = () => {
  return (
    <div className="min-h-screen bg-dark">
      <Navigation />
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-4xl font-bold text-white mb-8">Campaign Builder</h1>
        
        {/* Manual Campaign Creation Form */}
        <Card className="bg-dark-muted border-gold/20">
          <CardHeader>
            <CardTitle className="text-gold">Create Campaign</CardTitle>
          </CardHeader>
          <CardContent>
            <ManualCampaignForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};