import { motion } from "framer-motion";
import { GitBranch } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PipelineDevelopmentSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/pipeline-development.svg"
              alt="Pipeline Development"
              className="rounded-xl shadow-lg"
            />
          </motion.div>
          
          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Pipeline <span className="text-blue-600">Development</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Build robust data pipelines that ensure smooth and reliable data flow throughout your infrastructure.
            </p>
            
            {/* Update the CTA button */}
            <div className="mt-8">
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white" 
                asChild
              >
                <Link to="/services-interest-form">
                  Talk to an Expert
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PipelineDevelopmentSection;
