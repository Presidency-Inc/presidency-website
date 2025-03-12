
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const products = [
  {
    id: "01",
    title: "AI Full Stack with",
    highlight: "Presidency Leapfrog",
    description: "Use AI to innovate, automate, and gain an edge in your market.",
    label: "Full Stack AI"
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
  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-5xl font-bold text-white mb-6">
            Discover the Power of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Innovation
            </span>{" "}
            with Our Products
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-3xl">
            Our aim is to deliver products of unparalleled quality, providing significant cost benefits and outstanding value. With our customer-first approach, it's clear why our customers adore our products.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: Number(product.id) * 0.1 }}
                className="bg-zinc-900/50 rounded-xl p-6 hover:bg-zinc-900/70 transition-colors"
              >
                <h3 className="text-xl text-white mb-2">
                  {product.title}{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                    {product.highlight}
                  </span>
                </h3>
                <p className="text-gray-400 mb-6 text-sm">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500 font-mono">
                    {product.label}
                  </span>
                  <button className="p-1.5 bg-zinc-800 rounded-md group">
                    <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors" />
                  </button>
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
