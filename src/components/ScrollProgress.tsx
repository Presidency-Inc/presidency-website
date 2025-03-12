
import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { useIsMobile } from "@/hooks/use-mobile";

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    
    // Initial calculation
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`fixed ${isMobile ? 'top-16' : 'top-24'} left-0 right-0 z-30`}>
      <Progress value={scrollProgress} className="h-1 rounded-none bg-transparent" 
        indicatorClassName="bg-[#1a46e5]" />
    </div>
  );
};

export default ScrollProgress;
