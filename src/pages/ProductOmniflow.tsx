
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

const ProductOmniflow = () => {
  return (
    <main className="min-h-screen bg-white">
      <StatusBar />
      <Navbar />
      <ScrollProgress />
      <Hero />
      <OmniflowFeatures />
      <EnterpriseETLSection />
      <EnterpriseIntegrationsSection />
      <AnySourceTargetSection />
      <OmniLangSection />
      <OmniflowCTA />
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default ProductOmniflow;
