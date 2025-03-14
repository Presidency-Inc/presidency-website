
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import StatusBar from "@/components/StatusBar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import NearshoreHero from "@/components/NearshoreHero";
import NearshoreAdvantage from "@/components/NearshoreAdvantage";
import NearshoreTeams from "@/components/NearshoreTeams";
import NearshoreVetting from "@/components/NearshoreVetting";
import NearshoreProcess from "@/components/NearshoreProcess";
import NearshoreCTA from "@/components/NearshoreCTA";
import { useIsMobile } from "@/hooks/use-mobile";

const TalentNearshore = () => {
  const isMobile = useIsMobile();
  
  // Apply mobile-specific CSS class to the body when on mobile
  useEffect(() => {
    if (isMobile) {
      document.body.classList.add('mobile-talent-nearshore-layout');
    } else {
      document.body.classList.remove('mobile-talent-nearshore-layout');
    }
    
    return () => {
      document.body.classList.remove('mobile-talent-nearshore-layout');
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
      <NearshoreHero />
      <div id="advantages" className="mobile-section">
        <NearshoreAdvantage />
      </div>
      <div id="teams" className="mobile-section">
        <NearshoreTeams />
      </div>
      <div id="vetting" className="mobile-section">
        <NearshoreVetting />
      </div>
      <div id="process" className="mobile-section">
        <NearshoreProcess />
      </div>
      <NearshoreCTA />
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default TalentNearshore;
