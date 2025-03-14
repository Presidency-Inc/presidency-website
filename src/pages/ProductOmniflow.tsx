
import Navbar from "@/components/Navbar";
import Hero from "@/components/OmniflowHero";
import StatusBar from "@/components/StatusBar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import OmniflowFeatures from "@/components/OmniflowFeatures";
import EnterpriseETLSection from "@/components/EnterpriseETLSection";
import EnterpriseIntegrationsSection from "@/components/EnterpriseIntegrationsSection";
import AnySourceTargetSection from "@/components/AnySourceTargetSection";
import OmniLangSection from "@/components/OmniLangSection";
import OmniflowCTA from "@/components/OmniflowCTA";
import OmniflowFeaturesSelector from "@/components/OmniflowFeaturesSelector";
import { useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const ProductOmniflow = () => {
  const isMobile = useIsMobile();
  
  // Apply mobile-specific CSS class to the body when on mobile
  useEffect(() => {
    if (isMobile) {
      document.body.classList.add('mobile-omniflow-layout');
    } else {
      document.body.classList.remove('mobile-omniflow-layout');
    }
    
    return () => {
      document.body.classList.remove('mobile-omniflow-layout');
    };
  }, [isMobile]);

  return (
    <main className="min-h-screen bg-white">
      <StatusBar />
      <Navbar />
      <ScrollProgress />
      <Hero />
      <OmniflowFeaturesSelector />
      <OmniflowFeatures />
      <div id="enterprise-etl" className="mobile-section">
        <EnterpriseETLSection />
      </div>
      <div id="source-target" className="mobile-section">
        <EnterpriseIntegrationsSection />
      </div>
      <div id="multimodal-data" className="mobile-section">
        <AnySourceTargetSection />
      </div>
      <div id="governance" className="mobile-section">
        <OmniLangSection />
      </div>
      <OmniflowCTA />
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default ProductOmniflow;
