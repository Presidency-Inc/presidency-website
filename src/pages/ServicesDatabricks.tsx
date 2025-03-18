
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
import { Helmet } from "react-helmet";

const ServicesDatabricks = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-white overflow-x-hidden" id="top">
      <Helmet>
        <title>Databricks Solutions | Presidency Solutions</title>
        <meta name="description" content="Maximize the power of Databricks with our expert solutions. We help enterprises implement, optimize, and scale their Databricks platform for AI and data workloads." />
        <meta name="keywords" content="Databricks solutions, Databricks consulting, data lakehouse, AI on Databricks, data engineering" />
        <meta property="og:title" content="Databricks Solutions | Presidency Solutions" />
        <meta property="og:description" content="Maximize the power of Databricks with our expert solutions. We help enterprises implement, optimize, and scale their Databricks platform for AI and data workloads." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/services/databricks" />
        <meta property="og:image" content="/lovable-uploads/2b4e222c-4468-46fe-8613-555cefe4eac4.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/lovable-uploads/2b4e222c-4468-46fe-8613-555cefe4eac4.png" />
      </Helmet>
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
