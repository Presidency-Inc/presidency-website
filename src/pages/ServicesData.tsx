
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
import { useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const ServicesData = () => {
  const isMobile = useIsMobile();
  
  // Apply mobile-specific CSS class to the body when on mobile
  useEffect(() => {
    if (isMobile) {
      document.body.classList.add('mobile-data-services-layout');
    } else {
      document.body.classList.remove('mobile-data-services-layout');
    }
    
    return () => {
      document.body.classList.remove('mobile-data-services-layout');
    };
  }, [isMobile]);
  
  return (
    <main className="min-h-screen bg-white">
      <StatusBar />
      <Navbar />
      <ScrollProgress />
      <DataServicesHero />
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
