import { Navigation } from "@/components/Navigation";
import { DashboardContent } from "@/components/dashboard/DashboardContent";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-dark">
      <Navigation />
      <DashboardContent />
    </div>
  );
};

export default Dashboard;