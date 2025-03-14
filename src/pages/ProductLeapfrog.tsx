
import Navbar from "@/components/Navbar";
import Hero from "@/components/LeapfrogHero";
import StatusBar from "@/components/StatusBar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import MultiChannelSection from "@/components/MultiChannelSection";
import MultiChannelExperienceSection from "@/components/MultiChannelExperienceSection";
import ContextProtocolSection from "@/components/ContextProtocolSection";
import BusinessLogicSection from "@/components/BusinessLogicSection";
import AIOperationsSection from "@/components/AIOperationsSection";
import LLMsSection from "@/components/LLMsSection";
import LeapfrogCTA from "@/components/LeapfrogCTA";
import LogoMarquee from "@/components/LogoMarquee";
import { useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const ProductLeapfrog = () => {
  const isMobile = useIsMobile();
  
  // Apply mobile-specific CSS class to the body when on mobile
  useEffect(() => {
    if (isMobile) {
      document.body.classList.add('mobile-leapfrog-layout');
    } else {
      document.body.classList.remove('mobile-leapfrog-layout');
    }
    
    return () => {
      document.body.classList.remove('mobile-leapfrog-layout');
    };
  }, [isMobile]);
  
  return (
    <main className="min-h-screen bg-white">
      <StatusBar />
      <Navbar />
      <ScrollProgress />
      <Hero />
      <LogoMarquee />
      <MultiChannelSection />
      <div id="multi-channel-experience" className="mobile-section">
        <MultiChannelExperienceSection />
      </div>
      <div id="context-protocol" className="mobile-section">
        <ContextProtocolSection />
      </div>
      <div id="business-logic" className="mobile-section">
        <BusinessLogicSection />
      </div>
      <div id="ai-operations" className="mobile-section">
        <AIOperationsSection />
      </div>
      <div id="llms" className="mobile-section">
        <LLMsSection />
      </div>
      <LeapfrogCTA />
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default ProductLeapfrog;
