import { motion } from "framer-motion";
import { Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DataInfrastructureSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Scalable Data <span className="text-blue-600">Infrastructure</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Establish a robust and scalable data infrastructure that supports your growing data needs and enables advanced analytics.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Cloud-based data warehousing solutions",
                "Data lake implementation and management",
                "Real-time data ingestion and processing",
                "Data governance and security best practices",
                "Infrastructure monitoring and optimization"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <Server className="h-3 w-3" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </motion.li>
              ))}
            </ul>
            
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
          
          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <img
              src="/images/data-infrastructure.webp"
              alt="Data Infrastructure"
              className="rounded-2xl shadow-lg max-w-full h-auto mx-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DataInfrastructureSection;
