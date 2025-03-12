
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatusBar from "@/components/StatusBar";
import LogoMarquee from "@/components/LogoMarquee";
import FeaturesSection from "@/components/FeaturesSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-white">
      <StatusBar />
      <Navbar />
      <Hero />
      <LogoMarquee />
      <FeaturesSection />
      {/* Add empty space to enable scrolling beyond the hero section */}
      <div className="py-24">{/* Content for the rest of the page */}</div>
    </main>
  );
};

export default Index;
