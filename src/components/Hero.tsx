
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Wave Pattern Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 z-0">
        <svg
          className="absolute inset-0 w-full h-full opacity-30"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1a46e5" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#6366f1" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#818cf8" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          {/* Wave Lines */}
          {Array.from({ length: 20 }).map((_, i) => (
            <path
              key={i}
              d={`M0,${40 + i * 40} C300,${10 + i * 40} 600,${60 + i * 40} 1200,${30 + i * 40} V800 H0 Z`}
              fill="none"
              stroke="url(#wave-gradient)"
              strokeWidth="1.5"
            />
          ))}
        </svg>
      </div>

      {/* New Hero Image - Top Left Prismatic Crystal */}
      <div className="absolute top-0 left-0 z-10 w-28 sm:w-32 md:w-40 lg:w-48 pointer-events-none">
        <img 
          src="/lovable-uploads/3d61ba69-c1e5-4d40-980d-e8aec7ee6a1b.png" 
          alt="Prismatic crystal top" 
          className="w-full h-auto"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </div>

      {/* Hero Image - Prismatic Crystal - STICKY WITHIN HERO SECTION */}
      <div className="absolute bottom-0 right-0 z-10 w-28 sm:w-32 md:w-40 lg:w-48 pointer-events-none">
        <img 
          src="/lovable-uploads/3505d22d-17d9-44da-99ac-94f3b9cde259.png" 
          alt="Prismatic crystal" 
          className="w-full h-auto"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
        <motion.div 
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-2 leading-tight">
            Maximize Impact with
          </h1>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              AI + Data
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Presidency Solutions seeks to present exceptional solutions and resources that today's technical and financial decision makers appreciate.
          </p>

          <div>
            <Button variant="default" size="lg" className="bg-[#1a46e5] text-white hover:bg-[#1a46e5]/90">
              GET SOLUTIONS
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
