
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import StatusBar from "@/components/StatusBar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import TalentHero from "@/components/TalentHero";
import TalentFeatures from "@/components/TalentFeatures";
import TalentCTA from "@/components/TalentCTA";
import HiringProcessSection from "@/components/HiringProcessSection";
import EngineerTypesSection from "@/components/EngineerTypesSection";
import { useIsMobile } from "@/hooks/use-mobile";

const Talent = () => {
  const isMobile = useIsMobile();
  
  // Apply mobile-specific CSS class to the body when on mobile
  useEffect(() => {
    if (isMobile) {
      document.body.classList.add('mobile-talent-layout');
    } else {
      document.body.classList.remove('mobile-talent-layout');
    }
    
    return () => {
      document.body.classList.remove('mobile-talent-layout');
    };
  }, [isMobile]);
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-white" id="top">
      <StatusBar />
      <Navbar />
      <ScrollProgress />
      <TalentHero />
      <TalentFeatures />
      <div id="engineer-types" className="mobile-section">
        <EngineerTypesSection />
      </div>
      <div id="hiring-process" className="mobile-section">
        <HiringProcessSection />
      </div>
      <TalentCTA />
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default Talent;
