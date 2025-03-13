
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";

const products = [
  {
    id: "01",
    title: "AI Full Stack with",
    highlight: "Presidency Leapfrog",
    description: "Use AI to innovate, automate, and gain an edge in your market.",
    label: "Full Stack AI",
    link: "/products/leapfrog"
  },
  {
    id: "02",
    title: "Streamline DataOps with",
    highlight: "Presidency OmniFlow",
    description: "Make smarter decisions by harnessing the power of your data",
    label: "Data Operations"
  },
  {
    id: "03",
    title: "App & Cloud Modernization with",
    highlight: "Kube8r",
    description: "Extend your teams with AI experts to lead in technology and innovation.",
    label: "Extended Teams"
  }
];

const ProductsSection = () => {
  const isMobile = useIsMobile();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row md:items-center mb-8 md:mb-12 gap-8 md:gap-12">
            {!isMobile && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="w-48 h-48 md:w-[400px] md:h-[400px] flex-shrink-0 mx-auto md:mx-0"
              >
                <img 
                  src="/lovable-uploads/9a89c7f7-03ea-407a-8eba-c305270a84d9.png" 
                  alt="Binary Globe" 
                  className="w-full h-full object-contain"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
              </motion.div>
            )}
            
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Discover the Power of{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                  Innovation
                </span>{" "}
                <span className="block md:inline">with Our Products</span>
              </h2>
              
              <p className="text-gray-400 text-base md:text-lg mt-4 md:mt-6 max-w-2xl mx-auto md:mx-0">
                Our aim is to deliver products of unparalleled quality, providing significant cost benefits and outstanding value. With our customer-first approach, it's clear why our customers adore our products.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {products.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: Number(product.id) * 0.1 }}
                className="bg-zinc-900/50 rounded-xl p-4 md:p-6 hover:bg-zinc-900/70 transition-colors"
              >
                <h3 className="text-lg md:text-xl text-white mb-2">
                  {product.title}{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                    {product.highlight}
                  </span>
                </h3>
                <p className="text-gray-400 mb-4 md:mb-6 text-sm md:text-base">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500 font-mono">
                    {product.label}
                  </span>
                  {product.link ? (
                    <Link 
                      to={product.link} 
                      onClick={handleScrollToTop}
                      className="p-1.5 bg-zinc-800 rounded-md group"
                    >
                      <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors" />
                    </Link>
                  ) : (
                    <button className="p-1.5 bg-zinc-800 rounded-md group">
                      <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors" />
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
