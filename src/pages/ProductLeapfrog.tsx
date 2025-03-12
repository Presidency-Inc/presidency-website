
import Navbar from "@/components/Navbar";
import Hero from "@/components/LeapfrogHero";
import StatusBar from "@/components/StatusBar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import LeapfrogFeatures from "@/components/LeapfrogFeatures";

const ProductLeapfrog = () => {
  return (
    <main className="min-h-screen bg-white">
      <StatusBar />
      <Navbar />
      <ScrollProgress />
      <Hero />
      <LeapfrogFeatures />
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default ProductLeapfrog;
