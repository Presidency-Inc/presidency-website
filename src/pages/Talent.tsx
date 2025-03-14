
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
import NearshoreAdvantageSection from "@/components/NearshoreAdvantageSection";
import LogoMarquee from "@/components/LogoMarquee";
import { useIsMobile } from "@/hooks/use-mobile";

const Talent = () => {
  const isMobile = useIsMobile();
  
  // Preload critical assets when component is mounted
  useEffect(() => {
    // Preload the hero image at the page level
    const preloadHeroImage = () => {
      const imageUrl = "/lovable-uploads/aeec63a9-b351-48eb-9182-6c8e04b32c08.png";
      
      // Add preload link to document head
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = imageUrl;
      link.fetchpriority = "high";
      document.head.appendChild(link);
    };
    
    preloadHeroImage();
    
    // Apply mobile-specific CSS class to the body when on mobile
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
      <LogoMarquee />
      <TalentFeatures />
      <div id="engineer-types" className="mobile-section">
        <EngineerTypesSection />
      </div>
      <div id="hiring-process" className="mobile-section">
        <HiringProcessSection />
      </div>
      <div id="nearshore-advantage" className="mobile-section">
        <NearshoreAdvantageSection />
      </div>
      <TalentCTA />
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default Talent;
