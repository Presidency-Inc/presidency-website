
import Navbar from "@/components/Navbar";
import Hero from "@/components/OmniflowHero";
import StatusBar from "@/components/StatusBar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import EnterpriseETLSection from "@/components/EnterpriseETLSection";
import EnterpriseIntegrationsSection from "@/components/EnterpriseIntegrationsSection";
import AnySourceTargetSection from "@/components/AnySourceTargetSection";
import OmniLangSection from "@/components/OmniLangSection";
import OmniflowCTA from "@/components/OmniflowCTA";
import OmniflowFeaturesSelector from "@/components/OmniflowFeaturesSelector";
import LogoMarquee from "@/components/LogoMarquee";
import { useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { Helmet } from "react-helmet";

const ProductOmniflow = () => {
  const isMobile = useIsMobile();
  const { metadata } = usePageMetadata("/products/omniflow");
  
  // Extract string values for metadata to avoid Symbol conversion issues
  const title = String(metadata?.title || "Omniflow | Enterprise Data Integration Platform");
  const description = String(metadata?.description || "Omniflow is an enterprise-grade ETL platform that enables seamless data integration from any source to any target with powerful governance features.");
  const ogType = String(metadata?.og_type || "website");
  const ogUrl = String(metadata?.fullUrl || `${window.location.origin}/products/omniflow`);
  const ogImage = String(metadata?.image_url || `${window.location.origin}/lovable-uploads/16521bca-3a39-4376-8e26-15995aa57549.png`);
  const twitterCard = String(metadata?.twitter_card || "summary_large_image");
  
  // Apply mobile-specific CSS class to the body when on mobile
  useEffect(() => {
    if (isMobile) {
      document.body.classList.add('mobile-omniflow-layout');
    } else {
      document.body.classList.remove('mobile-omniflow-layout');
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
      document.body.classList.remove('mobile-omniflow-layout');
    };
  }, [isMobile, title, description, ogType, ogUrl, ogImage, twitterCard]);

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="ETL platform, data integration, enterprise data, data governance, Omniflow" />
        
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
      <OmniflowFeaturesSelector />
      <div id="enterprise-etl" className="mobile-section">
        <EnterpriseETLSection />
      </div>
      <div id="source-target" className="mobile-section">
        <EnterpriseIntegrationsSection />
      </div>
      <div id="multimodal-data" className="mobile-section">
        <AnySourceTargetSection showContactCTA={true} />
      </div>
      <div id="governance" className="mobile-section">
        <OmniLangSection showContactCTA={true} />
      </div>
      <OmniflowCTA />
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default ProductOmniflow;
