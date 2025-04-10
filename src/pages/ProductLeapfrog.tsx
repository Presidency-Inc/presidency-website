
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
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { Helmet } from "react-helmet";

const ProductLeapfrog = () => {
  const isMobile = useIsMobile();
  const { metadata } = usePageMetadata("/products/leapfrog");
  
  // Extract string values for metadata to avoid Symbol conversion issues
  const title = String(metadata?.title || "Leapfrog | AI Orchestration Platform");
  const description = String(metadata?.description || "Leapfrog is an AI orchestration platform that enables multichannel experiences with consistent context and business logic across interactions.");
  const ogType = String(metadata?.og_type || "website");
  const ogUrl = String(metadata?.fullUrl || `${window.location.origin}/products/leapfrog`);
  const ogImage = String(metadata?.image_url || `${window.location.origin}/lovable-uploads/16521bca-3a39-4376-8e26-15995aa57549.png`);
  const twitterCard = String(metadata?.twitter_card || "summary_large_image");
  
  // Apply mobile-specific CSS class to the body when on mobile
  useEffect(() => {
    if (isMobile) {
      document.body.classList.add('mobile-leapfrog-layout');
    } else {
      document.body.classList.remove('mobile-leapfrog-layout');
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
      document.body.classList.remove('mobile-leapfrog-layout');
    };
  }, [isMobile, title, description, ogType, ogUrl, ogImage, twitterCard]);
  
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="AI orchestration, multichannel experience, business logic, context protocol, AI operations" />
        
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content={ogType} />
        <meta property="og:url" content={ogUrl} />
        <meta property="og:image" content={ogImage} />
        
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
