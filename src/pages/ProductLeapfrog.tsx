
import Navbar from "@/components/Navbar";
import Hero from "@/components/LeapfrogHero";
import StatusBar from "@/components/StatusBar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import MultiChannelSection from "@/components/MultiChannelSection";
import ContextProtocolSection from "@/components/ContextProtocolSection";
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
      <MultiChannelSection />
      <ContextProtocolSection />
      <BusinessLogicSection />
      <LLMsSection />
      <LeapfrogCTA />
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default ProductLeapfrog;
