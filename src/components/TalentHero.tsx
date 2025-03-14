
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const TalentHero = () => {
  return (
    <section className="relative pt-40 pb-20 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/public/lovable-uploads/aeec63a9-b351-48eb-9182-6c8e04b32c08.png" 
          alt="Abstract digital art with blue and purple hues" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
              Hire <span className="bg-gradient-to-r from-blue-300 to-indigo-200 bg-clip-text text-transparent">AI & Data Engineers</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Extend your team with top-tier AI and data engineering talent, fully vetted and ready to hit the ground running on your most critical projects.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white border-none">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TalentHero;
