
import { motion } from "framer-motion";
import { Database, Code, BarChart3, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DatabricksServicesSection = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Databricks <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Maximize your Databricks investment with our specialized consulting and implementation services for data, ML, and AI workflows.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 mb-10">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 p-2 rounded-lg text-blue-600 mr-4">
                  <Database className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900 mb-1">Lakehouse Architecture</h3>
                  <p className="text-gray-600">Design and implement modern data lakehouse solutions</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 p-2 rounded-lg text-blue-600 mr-4">
                  <Code className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900 mb-1">Delta Lake Optimization</h3>
                  <p className="text-gray-600">Leverage Delta Lake for reliable data lakes at scale</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 p-2 rounded-lg text-blue-600 mr-4">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900 mb-1">MLflow Integration</h3>
                  <p className="text-gray-600">Track experiments and manage models with MLflow</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 p-2 rounded-lg text-blue-600 mr-4">
                  <Terminal className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900 mb-1">Workflow Automation</h3>
                  <p className="text-gray-600">Orchestrate complex data processing with Databricks Jobs</p>
                </div>
              </div>
            </div>
            
            <Button 
              variant="default" 
              size="lg" 
              className="bg-[#1a46e5] text-white hover:bg-[#1a46e5]/90"
              asChild
            >
              <Link to="/services/databricks#top">See Databricks Solutions</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DatabricksServicesSection;
