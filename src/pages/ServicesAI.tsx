
import Navbar from "@/components/Navbar";
import Hero from "@/components/AIServicesHero";
import StatusBar from "@/components/StatusBar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import FullStackAISection from "@/components/FullStackAIEngineeringSection";
import CustomRAGSection from "@/components/CustomRAGSection";
import AgentDevelopmentSection from "@/components/AgentDevelopmentSection";
import VoiceAISection from "@/components/VoiceAISection";
import ModelFinetuningSection from "@/components/ModelFinetuningSection";
import AIServicesCTA from "@/components/AIServicesCTA";
import LogoMarquee from "@/components/LogoMarquee";
import { useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const ServicesAI = () => {
  const isMobile = useIsMobile();
  
  // Apply mobile-specific CSS class to the body when on mobile
  useEffect(() => {
    if (isMobile) {
      document.body.classList.add('mobile-ai-services-layout');
    } else {
      document.body.classList.remove('mobile-ai-services-layout');
    }
    
    return () => {
      document.body.classList.remove('mobile-ai-services-layout');
    };
  }, [isMobile]);
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <main className="min-h-screen bg-white">
      <StatusBar />
      <Navbar />
      <ScrollProgress />
      <Hero />
      <LogoMarquee />
      <div id="full-stack-ai-engineering" className="mobile-section">
        <FullStackAISection />
      </div>
      <div id="custom-rag-development" className="mobile-section">
        <CustomRAGSection />
      </div>
      <div id="agent-development" className="mobile-section">
        <AgentDevelopmentSection />
      </div>
      <div id="voice-ai-development" className="mobile-section">
        <VoiceAISection />
      </div>
      <div id="model-finetuning" className="mobile-section">
        <ModelFinetuningSection />
      </div>
      <AIServicesCTA />
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default ServicesAI;
