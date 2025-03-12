
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed left-8 p-4 rounded-full bg-[#1a46e5] text-white shadow-lg hover:bg-[#1a46e5]/90 transition-all mt-48"
      aria-label="Scroll to top"
    >
      <ArrowUp size={32} />
    </button>
  );
};

export default ScrollToTop;
