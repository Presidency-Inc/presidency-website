
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatusBar from "@/components/StatusBar";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import { Helmet } from "react-helmet";

const About = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <Helmet>
        <title>About Presidency Solutions | AI & Data Engineering Experts</title>
        <meta name="description" content="Learn about Presidency Solutions, a leading technology company empowering organizations to maximize their impact with AI, Data Engineering, and Cloud Modernization solutions." />
        <meta name="keywords" content="AI solutions, data engineering, cloud modernization, technology company, Presidency Solutions" />
        <meta property="og:title" content="About Presidency Solutions" />
        <meta property="og:description" content="Learn about Presidency Solutions, a leading technology company empowering organizations to maximize their impact with AI and Data Engineering." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/about" />
        <meta property="og:image" content="/lovable-uploads/2b4e222c-4468-46fe-8613-555cefe4eac4.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/lovable-uploads/2b4e222c-4468-46fe-8613-555cefe4eac4.png" />
      </Helmet>
      <StatusBar />
      <Navbar />
      <ScrollProgress />
      
      <div className="relative overflow-hidden">
        {/* Topographic contour lines background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute w-full h-full opacity-20"
            viewBox="0 0 1200 1200"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Creating multiple contour lines with varying paths */}
            {Array.from({ length: 20 }).map((_, i) => (
              <path
                key={i}
                d={`M0,${400 + i * 30 - Math.sin(i * 0.5) * 50} 
                   C300,${350 + i * 25 + Math.cos(i * 0.3) * 40} 
                   600,${450 + i * 20 - Math.sin(i * 0.4) * 60} 
                   900,${380 + i * 30 + Math.cos(i * 0.6) * 50} 
                   L1200,${420 + i * 25 - Math.sin(i * 0.5) * 30} 
                   L1200,1200 L0,1200 Z`}
                fill="none"
                stroke="#1a46e5"
                strokeWidth="1.5"
                strokeOpacity={0.8 - i * 0.02}
              />
            ))}
            {/* Additional cross contour lines */}
            {Array.from({ length: 15 }).map((_, i) => (
              <path
                key={`cross-${i}`}
                d={`M${100 + i * 80},0 
                   C${150 + i * 70 + Math.sin(i * 0.4) * 30},300 
                   ${50 + i * 90 - Math.cos(i * 0.5) * 40},600 
                   ${120 + i * 80 + Math.sin(i * 0.3) * 50},900 
                   L${80 + i * 85},1200`}
                fill="none"
                stroke="#1a46e5"
                strokeWidth="1.5"
                strokeOpacity={0.7 - i * 0.02}
              />
            ))}
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-x-12 gap-y-16">
            {/* Left column - Title and intro */}
            <div className="lg:col-span-2">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl md:text-6xl font-bold text-[#1a46e5] mb-12"
              >
                It's time to innovate.
              </motion.h1>
            </div>

            {/* Right column - Content */}
            <div className="lg:col-span-3 space-y-8 text-lg">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="leading-relaxed"
              >
                Presidency Solutions is a leading technology company that empowers organizations to maximize their impact with AI and Data. We seek to present exceptional solutions and resources that today's technical and financial decision makers appreciate.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="leading-relaxed"
              >
                We operate across multiple domains, including <span className="text-blue-600">AI</span>, <span className="text-blue-600">Data Engineering</span>, <span className="text-blue-600">Databricks Solutions</span>, <span className="text-blue-600">Cloud Modernization</span>, and <span className="text-blue-600">Talent Solutions</span>. Our innovative products like Leapfrog, Omniflow, and Kube8r help businesses transform their operations and customer experiences.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="leading-relaxed"
              >
                Respect for our clients and their business goals defines Presidency. Our team consists of industry veterans with expertise ranging from artificial intelligence to data engineering, cloud architecture to talent acquisition, providing entrepreneurs and enterprises with the technical foundation they need to succeed.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="leading-relaxed"
              >
                We aim to connect organizations with the right technology and talent. We have built a network of experts, including technical and executive talent, marketing and communications resources, and Fortune 500/Global 2000 companies. Our network reflects Presidency's commitment to helping our clients grow their businesses, and our operating teams provide access to expertise and insights across the entire spectrum of digital transformation.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="pt-4"
              >
                <Button 
                  className="bg-[#1a46e5] text-white hover:bg-[#1a46e5]/90"
                  size="lg"
                  asChild
                >
                  <Link to="/get-started">
                    Work with us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default About;
