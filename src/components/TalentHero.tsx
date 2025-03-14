
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const TalentHero = () => {
  return (
    <section className="relative pt-40 pb-20 md:pt-40 md:pb-24 overflow-hidden">
      {/* Pattern Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 z-0">
        <svg
          className="absolute inset-0 w-full h-full opacity-30"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 1200 600"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="talent-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563eb" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          {/* Flow Pattern */}
          <pattern id="talent-pattern" width="100" height="100" patternUnits="userSpaceOnUse">
            <path
              d="M 0,50 C 20,20 40,0 50,0 C 60,0 80,20 100,50 C 120,80 140,100 150,100 C 160,100 180,80 200,50"
              fill="none"
              stroke="url(#talent-gradient)"
              strokeWidth="2"
              transform="translate(0,0)"
            />
            <path
              d="M 0,50 C 20,20 40,0 50,0 C 60,0 80,20 100,50 C 120,80 140,100 150,100 C 160,100 180,80 200,50"
              fill="none"
              stroke="url(#talent-gradient)"
              strokeWidth="2"
              transform="translate(-100,25)"
            />
            <path
              d="M 0,50 C 20,20 40,0 50,0 C 60,0 80,20 100,50 C 120,80 140,100 150,100 C 160,100 180,80 200,50"
              fill="none"
              stroke="url(#talent-gradient)"
              strokeWidth="2"
              transform="translate(0,50)"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#talent-pattern)" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Hire <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">AI & Data Engineers</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Extend your team with top-tier AI and data engineering talent, fully vetted and ready to hit the ground running on your most critical projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white border-none">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative rounded-lg overflow-hidden aspect-[4/3] shadow-lg">
              <img 
                src="/public/lovable-uploads/b6318c47-997e-4f8a-b6af-e30ecbc0a5b7.png" 
                alt="Abstract blue and purple digital art" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-600/20 mix-blend-overlay"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TalentHero;
