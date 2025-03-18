
import { motion } from "framer-motion";
import { Code, Network, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import StatusBar from "@/components/StatusBar";
import ScrollToTop from "@/components/ScrollToTop";
import { useEffect } from "react";

const GetStarted = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const optionCards = [
    {
      id: 1,
      icon: <Code className="h-12 w-12 text-white" />,
      forText: "For enterprises and startups",
      title: "I need AI solutions for real-world implementation",
      description: "Leverage Turing Intelligence capabilities to integrate AI into your operations, enhance automation, and optimize cloud migration for scalable impact.",
      cta: "Talk to an expert",
      link: "/services-interest-form"
    },
    {
      id: 2,
      icon: <Network className="h-12 w-12 text-white" />,
      forText: "For LLM companies and research organizations",
      title: "I need AI model training & post-training optimization",
      description: "Advance foundation model research and improve LLM reasoning, coding, and multimodal capabilities with Turing AGI Advancement.",
      cta: "Get a model assessment",
      link: "/services-interest-form"
    },
    {
      id: 3,
      icon: <Users className="h-12 w-12 text-white" />,
      forText: "For enterprises and startups",
      title: "I need top AI talent for mission-critical projects",
      description: "Access a global network of elite AI professionals through Turing Jobs—vetted experts ready to accelerate your AI initiatives.",
      cta: "Start hiring talent",
      link: "/talent"
    }
  ];

  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <StatusBar />
      <Navbar />
      
      <section className="relative py-20 min-h-[calc(100vh-120px)] flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              How do you want to innovate?
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {optionCards.map((card, index) => (
              <motion.div
                key={card.id}
                className="relative bg-zinc-900 rounded-xl overflow-hidden p-8 flex flex-col h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <div className="mb-6">{card.icon}</div>
                <div className="text-gray-400 text-sm mb-4">{card.forText}</div>
                <h3 className="text-2xl text-white mb-4">{card.title}</h3>
                <p className="text-gray-400 text-sm mb-8 flex-grow">{card.description}</p>
                <div className="mt-auto">
                  <Link to={card.link} className="group inline-flex items-center text-white hover:text-purple-400 transition-colors">
                    <span className="mr-2">{card.cta}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default GetStarted;
