
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import StatusBar from "@/components/StatusBar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import DatabricksHero from "@/components/DatabricksHero";
import DatabricksFeatures from "@/components/DatabricksFeatures";
import AcceleratorsSection from "@/components/AcceleratorsSection";
import ServicesOfferingSection from "@/components/ServicesOfferingSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import DatabricksCTA from "@/components/DatabricksCTA";
import LogoMarquee from "@/components/LogoMarquee";

const ServicesDatabricks = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-white overflow-x-hidden" id="top">
      <StatusBar />
      <Navbar />
      <ScrollProgress />
      <DatabricksHero />
      <LogoMarquee />
      <DatabricksFeatures />
      <AcceleratorsSection />
      <ServicesOfferingSection />
      <ExpertiseSection />
      <DatabricksCTA />
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default ServicesDatabricks;
