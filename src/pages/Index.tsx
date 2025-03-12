
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatusBar from "@/components/StatusBar";
import LogoMarquee from "@/components/LogoMarquee";
import FeaturesSection from "@/components/FeaturesSection";
import TabsSection from "@/components/TabsSection";
import ProductsSection from "@/components/ProductsSection";
import ExtendedTeamsSection from "@/components/ExtendedTeamsSection";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import ChatButton from "@/components/ChatButton";

const Index = () => {
  return (
    <main className="min-h-screen bg-white">
      <StatusBar />
      <Navbar />
      <ScrollProgress />
      <Hero />
      <LogoMarquee />
      <FeaturesSection />
      <TabsSection />
      <ProductsSection />
      <ExtendedTeamsSection />
      <Footer />
      <ScrollToTop />
      <ChatButton />
    </main>
  );
};

export default Index;
