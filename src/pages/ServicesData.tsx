
import Navbar from "@/components/Navbar";
import StatusBar from "@/components/StatusBar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import DataServicesHero from "@/components/DataServicesHero";
import EnterpriseETLSection from "@/components/EnterpriseETLSection";
import PipelineDevelopmentSection from "@/components/PipelineDevelopmentSection";
import DataInfrastructureSection from "@/components/DataInfrastructureSection";
import DatabricksServicesSection from "@/components/DatabricksServicesSection";
import DataServicesCTA from "@/components/DataServicesCTA";
import LogoMarquee from "@/components/LogoMarquee";
import { useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { Helmet } from "react-helmet";

const ServicesData = () => {
  const isMobile = useIsMobile();
  const { metadata } = usePageMetadata("/services/data");
  
  // Extract string values for metadata to avoid Symbol conversion issues
  const title = String(metadata?.title || "Data Engineering Services | Presidency Solutions");
  const description = String(metadata?.description || "Our data engineering services help organizations build scalable data pipelines, implement enterprise ETL solutions, and modernize data infrastructure.");
  const ogType = String(metadata?.og_type || "website");
  const ogUrl = String(metadata?.fullUrl || `${window.location.origin}/services/data`);
  const ogImage = String(metadata?.image_url || `${window.location.origin}/lovable-uploads/16521bca-3a39-4376-8e26-15995aa57549.png`);
  const twitterCard = String(metadata?.twitter_card || "summary_large_image");
  
  // Apply mobile-specific CSS class to the body when on mobile
  useEffect(() => {
    if (isMobile) {
      document.body.classList.add('mobile-data-services-layout');
    } else {
      document.body.classList.remove('mobile-data-services-layout');
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
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    return () => {
      document.body.classList.remove('mobile-data-services-layout');
    };
  }, [isMobile, title, description, ogType, ogUrl, ogImage, twitterCard]);
  
  return (
    <main className="min-h-screen bg-white overflow-x-hidden" id="top">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="data engineering, ETL solutions, data pipelines, data infrastructure, Databricks services" />
        
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
      <DataServicesHero />
      <LogoMarquee />
      <div id="enterprise-etl" className="mobile-section">
        <EnterpriseETLSection />
      </div>
      <div id="pipeline-development" className="mobile-section">
        <PipelineDevelopmentSection />
      </div>
      <div id="data-infrastructure" className="mobile-section">
        <DataInfrastructureSection />
      </div>
      <div id="databricks-services" className="mobile-section">
        <DatabricksServicesSection />
      </div>
      <DataServicesCTA />
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default ServicesData;
