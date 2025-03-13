
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

const ProductLeapfrog = () => {
  return (
    <main className="min-h-screen bg-white">
      <StatusBar />
      <Navbar />
      <ScrollProgress />
      <Hero />
      <MultiChannelSection />
      <div id="multi-channel-experience">
        <MultiChannelExperienceSection />
      </div>
      <div id="context-protocol">
        <ContextProtocolSection />
      </div>
      <div id="business-logic">
        <BusinessLogicSection />
      </div>
      <div id="ai-operations">
        <AIOperationsSection />
      </div>
      <div id="llms">
        <LLMsSection />
      </div>
      <LeapfrogCTA />
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default ProductLeapfrog;
