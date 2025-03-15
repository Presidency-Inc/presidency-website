
import Navbar from "@/components/Navbar";
import Hero from "@/components/Kube8rHero";
import StatusBar from "@/components/StatusBar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import BareMetalToCloudSection from "@/components/BareMetalToCloudSection";
import AppStackModernizationSection from "@/components/AppStackModernizationSection";
import Kube8rCTA from "@/components/Kube8rCTA";
import LogoMarquee from "@/components/LogoMarquee";
import { useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const ProductKube8r = () => {
  const isMobile = useIsMobile();
  
  // Apply mobile-specific CSS class to the body when on mobile
  useEffect(() => {
    if (isMobile) {
      document.body.classList.add('mobile-kube8r-layout');
    } else {
      document.body.classList.remove('mobile-kube8r-layout');
    }
    
    return () => {
      document.body.classList.remove('mobile-kube8r-layout');
    };
  }, [isMobile]);
  
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <StatusBar />
      <Navbar />
      <ScrollProgress />
      <Hero />
      <LogoMarquee />
      <div id="bare-metal" className="mobile-section">
        <BareMetalToCloudSection />
      </div>
      <div id="app-stack" className="mobile-section">
        <AppStackModernizationSection />
      </div>
      <Kube8rCTA />
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default ProductKube8r;
