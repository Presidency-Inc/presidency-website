
import Navbar from "@/components/Navbar";
import Hero from "@/components/LeapfrogHero";
import StatusBar from "@/components/StatusBar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import LeapfrogFeatures from "@/components/LeapfrogFeatures";
import FullStackAISection from "@/components/FullStackAISection";
import ContextProtocolSection from "@/components/ContextProtocolSection";
import MultiChannelSection from "@/components/MultiChannelSection";
import BusinessLogicSection from "@/components/BusinessLogicSection";
import LLMsSection from "@/components/LLMsSection";
import LeapfrogCTA from "@/components/LeapfrogCTA";

const ProductLeapfrog = () => {
  return (
    <main className="min-h-screen bg-white">
      <StatusBar />
      <Navbar />
      <ScrollProgress />
      <Hero />
      <LeapfrogFeatures />
      <FullStackAISection />
      <ContextProtocolSection />
      <MultiChannelSection />
      <BusinessLogicSection />
      <LLMsSection />
      <LeapfrogCTA />
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default ProductLeapfrog;
