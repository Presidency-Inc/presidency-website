
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Globe } from "lucide-react";

const NearshoreCTA = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-br from-blue-900 to-indigo-800 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 800 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <circle
              key={i}
              cx={100 + i * 100}
              cy={400}
              r={20 + Math.random() * 80}
              fill="none"
              stroke="white"
              strokeWidth="1"
            />
          ))}
          {Array.from({ length: 8 }).map((_, i) => (
            <circle
              key={i + 8}
              cx={400}
              cy={100 + i * 100}
              r={20 + Math.random() * 80}
              fill="none"
              stroke="white"
              strokeWidth="1"
            />
          ))}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm mb-6">
              <Globe className="h-8 w-8 text-blue-300" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to leverage nearshore talent for your next project?
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Get the best of both worlds with high-quality engineering talent in your time zone at competitive rates.
            </p>
            <div className="flex justify-center">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                Nearshore Your Development
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NearshoreCTA;
