
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
import { Helmet } from "react-helmet";
import { usePageMetadata } from "@/hooks/usePageMetadata";

const ServicesAI = () => {
  const isMobile = useIsMobile();
  const { metadata } = usePageMetadata("/services/ai");
  
  // Extract string values for metadata to avoid Symbol conversion issues
  const title = String(metadata?.title || "AI Engineering Services | Presidency Solutions");
  const description = String(metadata?.description || "Our AI engineering services help organizations build custom RAG systems, AI agents, LLM applications, and voice AI solutions.");
  const ogType = String(metadata?.og_type || "website");
  const ogUrl = String(metadata?.fullUrl || `${window.location.origin}/services/ai`);
  const ogImage = String(metadata?.image_url || `${window.location.origin}/lovable-uploads/16521bca-3a39-4376-8e26-15995aa57549.png`);
  const twitterCard = String(metadata?.twitter_card || "summary_large_image");
  
  // Apply mobile-specific CSS class to the body when on mobile
  useEffect(() => {
    if (isMobile) {
      document.body.classList.add('mobile-ai-services-layout');
    } else {
      document.body.classList.remove('mobile-ai-services-layout');
    }
    
    // Add meta tags to document head for crawlers
    const head = document.querySelector('head');
    if (head) {
      const metaTags = [
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: ogType },
        { property: "og:url", content: ogUrl },
        { property: "og:image", content: ogImage },
        { property: "og:locale", content: "en" },
        { name: "twitter:card", content: twitterCard },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: ogImage }
      ];
      
      // Remove any existing OG tags that might be dynamically added
      document.querySelectorAll('meta[property^="og:"], meta[name^="twitter:"]').forEach(tag => {
        if (!tag.hasAttribute('data-react-helmet')) {
          tag.remove();
        }
      });
      
      // Add meta tags
      metaTags.forEach(tagData => {
        const meta = document.createElement('meta');
        Object.entries(tagData).forEach(([attr, value]) => {
          meta.setAttribute(attr, value);
        });
        head.appendChild(meta);
      });
    }
    
    return () => {
      document.body.classList.remove('mobile-ai-services-layout');
    };
  }, [isMobile, title, description, ogType, ogUrl, ogImage, twitterCard]);
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="AI engineering, RAG systems, AI agents, LLM applications, voice AI" />
        
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content={ogType} />
        <meta property="og:url" content={ogUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:locale" content="en" />
        
        <meta name="twitter:card" content={twitterCard} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
      </Helmet>
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
