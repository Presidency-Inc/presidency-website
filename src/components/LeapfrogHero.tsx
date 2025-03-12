
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const LeapfrogHero = () => {
  return (
    <div className="relative pt-16 md:pt-24 min-h-[50vh] flex items-center justify-center overflow-hidden">
      {/* New Pattern Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-blue-50 z-0">
        <svg
          className="absolute inset-0 w-full h-full opacity-30"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 1200 600"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="grid-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#818cf8" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#a5b4fc" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          {/* Grid Pattern */}
          <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="url(#grid-gradient)"
              strokeWidth="1"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
        <motion.div 
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-4 leading-tight">
            Presidency Leapfrog
          </h1>
          
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              AI Enabled Full Stack
            </span>
          </h2>

          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Accelerate your business transformation and innovation with our comprehensive solutions.
          </p>

          <div>
            <Button variant="default" size="lg" className="bg-[#1a46e5] text-white hover:bg-[#1a46e5]/90">
              GET STARTED
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LeapfrogHero;
