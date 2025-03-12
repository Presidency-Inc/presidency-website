
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatusBar from "@/components/StatusBar";

const Index = () => {
  return (
    <main className="min-h-screen bg-white pt-28">
      <StatusBar />
      <Navbar />
      <Hero />
    </main>
  );
};

export default Index;
