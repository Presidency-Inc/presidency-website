
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "react-router-dom";

const TalentHero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const bgImageUrl = "/lovable-uploads/aeec63a9-b351-48eb-9182-6c8e04b32c08.png";
  
  // Enhanced preloading with loading state tracking
  useEffect(() => {
    // Check if image is already in browser cache
    const cachedImage = new Image();
    cachedImage.src = bgImageUrl;
    
    // If image is already cached, it will load immediately
    if (cachedImage.complete) {
      setImageLoaded(true);
    } else {
      // If not cached, listen for the load event
      cachedImage.onload = () => setImageLoaded(true);
      
      // Add cache control hints
      cachedImage.setAttribute('fetchpriority', 'high');
      cachedImage.setAttribute('decoding', 'async');
      
      // Preload the image in the document head for faster subsequent loads
      const linkPreload = document.createElement('link');
      linkPreload.rel = 'preload';
      linkPreload.as = 'image';
      linkPreload.href = bgImageUrl;
      document.head.appendChild(linkPreload);
    }
    
    return () => {
      cachedImage.onload = null;
    };
  }, []);

  return (
    <section className="relative pt-40 pb-20 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background Image with Skeleton Fallback */}
      <div className="absolute inset-0 z-0">
        {!imageLoaded && (
          <Skeleton className="w-full h-full bg-gray-300" />
        )}
        <img 
          src={bgImageUrl}
          alt="Abstract digital art with blue and purple hues" 
          className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          onLoad={() => setImageLoaded(true)}
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
            <Link to="/talent-interest-form">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white border-none">
                Hire Talent
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TalentHero;
