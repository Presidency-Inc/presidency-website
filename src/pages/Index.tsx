
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatusBar from "@/components/StatusBar";
import LogoMarquee from "@/components/LogoMarquee";

const Index = () => {
  return (
    <main className="min-h-screen bg-white pt-28">
      <StatusBar />
      <Navbar />
      <Hero />
      <LogoMarquee />
      {/* Add empty space to enable scrolling beyond the hero section */}
      <div className="py-64">{/* Content for the rest of the page */}</div>
    </main>
  );
};

export default Index;
