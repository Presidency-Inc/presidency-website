
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
import SuccessStoriesSection from "@/components/SuccessStoriesSection";
import DatabricksCTA from "@/components/DatabricksCTA";

const ServicesDatabricks = () => {
  return (
    <main className="min-h-screen bg-white">
      <StatusBar />
      <Navbar />
      <ScrollProgress />
      <DatabricksHero />
      <DatabricksFeatures />
      <AcceleratorsSection />
      <ServicesOfferingSection />
      <ExpertiseSection />
      <SuccessStoriesSection />
      <DatabricksCTA />
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default ServicesDatabricks;
