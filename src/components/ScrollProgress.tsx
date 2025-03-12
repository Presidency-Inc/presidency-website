
import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

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
    <div className="fixed top-16 left-0 right-0 z-30">
      <Progress value={scrollProgress} className="h-1 rounded-none bg-transparent" 
        indicatorClassName="bg-[#1a46e5]" />
    </div>
  );
};

export default ScrollProgress;
