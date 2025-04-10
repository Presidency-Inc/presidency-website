import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const CareerHero = () => {
  const [stars, setStars] = useState<Array<{ x: number; y: number; size: number; opacity: number; speed: number }>>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Generate initial stars
  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      const count = window.innerWidth < 768 ? 100 : 200;
      
      for (let i = 0; i < count; i++) {
        newStars.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.8 + 0.2,
          speed: Math.random() * 0.05 + 0.01
        });
      }
      
      setStars(newStars);
    };
    
    generateStars();
    
    const handleResize = () => {
      generateStars();
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Animate stars
  useEffect(() => {
    if (!canvasRef.current || stars.length === 0) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    let animationFrameId: number;
    let starsPositions = [...stars]; // Create a copy of stars to avoid state updates in the render loop
    
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw stars without updating state in the render loop
      starsPositions = starsPositions.map(star => {
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        
        return {
          ...star,
          y: (star.y + star.speed) % canvas.height
        };
      });
      
      animationFrameId = requestAnimationFrame(render);
    };
    
    render();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [stars]);
  
  const handleScrollToJobs = () => {
    const jobSection = document.querySelector('.job-listings');
    if (jobSection) {
      jobSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="relative h-[calc(100vh-4rem)] flex items-center overflow-hidden bg-gradient-to-b from-[#01070e] to-[#0a1a2d]">
      {/* Animated stars canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0"
      />
      
      {/* Blue gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a1a2d]/50 z-0"></div>
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 md:space-y-8"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
            Join us to build the <span className="bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">future</span> of <span className="bg-gradient-to-r from-blue-300 to-indigo-200 bg-clip-text text-transparent">AI, Data & Cloud</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-blue-100 max-w-2xl">
            We're building innovative solutions that leverage cutting-edge AI, robust data engineering, and cloud technologies to transform businesses and industries.
          </p>
          
          <p className="text-base sm:text-lg text-blue-200 max-w-2xl">
            Join a team of passionate experts where your skills will contribute to exciting projects with real-world impact. Be part of our mission to deliver exceptional value through technological excellence.
          </p>
          
          <div className="pt-4 md:pt-8">
            <Button 
              onClick={handleScrollToJobs}
              size="lg"
              className="bg-white text-[#0a1a2d] hover:bg-blue-100 transition-colors group"
            >
              Check out open positions
              <ArrowDown className="ml-2 h-5 w-5 group-hover:animate-bounce" />
            </Button>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative elements - glowing orbs */}
      <div className="absolute top-1/4 right-[10%] w-32 h-32 rounded-full bg-blue-500 opacity-20 blur-3xl"></div>
      <div className="absolute bottom-1/3 left-[15%] w-40 h-40 rounded-full bg-indigo-500 opacity-10 blur-3xl"></div>
      <div className="absolute top-2/3 right-[20%] w-24 h-24 rounded-full bg-blue-300 opacity-15 blur-2xl"></div>
    </div>
  );
};

export default CareerHero;
