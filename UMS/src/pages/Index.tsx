
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import NIRFRankings from "@/components/NIRFRankings";
import Recognitions from "@/components/Recognitions";
import PlacementsSection from "@/components/PlacementsSection";
import ResearchInnovation from "@/components/ResearchInnovation";
import CampusLife from "@/components/CampusLife";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <NIRFRankings />
      <Recognitions />
      <PlacementsSection />
      <ResearchInnovation />
      <CampusLife />
      <Footer />
    </div>
  );
};

export default Index;
