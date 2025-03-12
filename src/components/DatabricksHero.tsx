import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const DatabricksHero = () => {
  return (
    <section className="bg-gradient-to-br from-orange-900 via-amber-800 to-orange-800 pt-40 pb-8 md:pt-40 md:pb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Databricks Services <span className="text-orange-300">Reimagined</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto lg:mx-0">
              Our proprietary accelerators overcome Databricks' inherent limitations, enabling faster, more efficient data processing jobs. Accelerate your data workflows and enhance performance like never before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white border-none">
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Schedule a Consultation
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg blur opacity-50"></div>
              <div className="relative bg-black/40 backdrop-blur-sm p-8 rounded-lg border border-orange-500/30">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-orange-900/50 p-4 rounded-lg">
                    <h3 className="text-lg font-medium text-white mb-2">Accelerated ETL</h3>
                    <p className="text-gray-300 text-sm">3-5x faster processing</p>
                  </div>
                  <div className="bg-amber-800/50 p-4 rounded-lg">
                    <h3 className="text-lg font-medium text-white mb-2">Cost Efficiency</h3>
                    <p className="text-gray-300 text-sm">30-40% reduction</p>
                  </div>
                  <div className="bg-amber-800/50 p-4 rounded-lg">
                    <h3 className="text-lg font-medium text-white mb-2">Advanced ML Ops</h3>
                    <p className="text-gray-300 text-sm">Streamlined deployment</p>
                  </div>
                  <div className="bg-orange-900/50 p-4 rounded-lg">
                    <h3 className="text-lg font-medium text-white mb-2">Unity Catalog+</h3>
                    <p className="text-gray-300 text-sm">Enhanced governance</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DatabricksHero;
