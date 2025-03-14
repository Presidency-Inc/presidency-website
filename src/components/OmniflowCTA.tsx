
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

const OmniflowCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-50 to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 leading-tight mb-8">
            Ready to <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Transform Your Data Strategy?</span>
          </h2>
          
          <Button 
            size="lg"
            className="bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white shadow-lg"
          >
            Contact Sales
            <Mail className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default OmniflowCTA;
