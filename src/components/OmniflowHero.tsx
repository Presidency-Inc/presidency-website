
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const OmniflowHero = () => {
  return (
    <div className="relative pt-16 md:pt-24 min-h-[50vh] flex items-center justify-center overflow-hidden">
      {/* Pattern Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50 z-0">
        <svg
          className="absolute inset-0 w-full h-full opacity-30"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 1200 600"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#14b8a6" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#0d9488" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          {/* Flow Pattern */}
          <pattern id="flow-pattern" width="100" height="100" patternUnits="userSpaceOnUse">
            <path
              d="M 0,50 C 20,20 40,0 50,0 C 60,0 80,20 100,50 C 120,80 140,100 150,100 C 160,100 180,80 200,50"
              fill="none"
              stroke="url(#flow-gradient)"
              strokeWidth="2"
              transform="translate(0,0)"
            />
            <path
              d="M 0,50 C 20,20 40,0 50,0 C 60,0 80,20 100,50 C 120,80 140,100 150,100 C 160,100 180,80 200,50"
              fill="none"
              stroke="url(#flow-gradient)"
              strokeWidth="2"
              transform="translate(-100,25)"
            />
            <path
              d="M 0,50 C 20,20 40,0 50,0 C 60,0 80,20 100,50 C 120,80 140,100 150,100 C 160,100 180,80 200,50"
              fill="none"
              stroke="url(#flow-gradient)"
              strokeWidth="2"
              transform="translate(0,50)"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#flow-pattern)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
        <motion.div 
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4 leading-tight">
            Presidency Omniflow
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 leading-tight">
            <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
              A premier ETL Orchestration System
            </span>
          </h2>

          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            that enables a data flow from any source to any target
          </p>

          <div>
            <Button variant="default" size="lg" className="bg-emerald-600 text-white hover:bg-emerald-700">
              EXPLORE OMNIFLOW
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OmniflowHero;
