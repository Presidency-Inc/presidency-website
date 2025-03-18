
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AcceleratorsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Our Proprietary Accelerators
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600"
          >
            Overcome Databricks' inherent limitations and achieve unprecedented performance with our custom-built accelerators
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6"
          >
            <Button 
              variant="default" 
              size="lg" 
              className="bg-[#1a46e5] text-white hover:bg-[#1a46e5]/90"
              asChild
            >
              <Link to="/databricks-interest-form">
                Talk to an expert
                <MessageSquare className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <Tabs defaultValue="etl" className="w-full">
            <TabsList className="w-full max-w-2xl mx-auto grid grid-cols-3 mb-8">
              <TabsTrigger value="etl" className="text-sm md:text-base">ETL Accelerator</TabsTrigger>
              <TabsTrigger value="ml" className="text-sm md:text-base">ML Accelerator</TabsTrigger>
              <TabsTrigger value="unity" className="text-sm md:text-base">Unity Enhancer</TabsTrigger>
            </TabsList>
            
            <TabsContent value="etl" className="mt-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Accelerate Your ETL Pipelines</h3>
                  <p className="text-gray-600 mb-6">
                    Our ETL Accelerator optimizes your Databricks workflows, delivering 3-5x performance improvements over standard implementations while reducing compute costs by up to 40%.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Advanced partitioning strategies that outperform Databricks defaults",
                      "Memory-optimized execution plans that reduce shuffle operations",
                      "Smart caching algorithms that minimize redundant computations",
                      "Auto-scaling that adapts to workload patterns in real-time"
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-purple-50 p-6 rounded-xl order-1 lg:order-2">
                  <div className="aspect-video rounded-lg bg-gray-800 flex items-center justify-center">
                    <div className="text-center p-4">
                      <div className="text-3xl font-bold text-purple-400 mb-2">3-5x</div>
                      <div className="text-white">Faster ETL Processing</div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="ml" className="mt-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Streamline ML Workflows</h3>
                  <p className="text-gray-600 mb-6">
                    Our ML Accelerator transforms how you develop, deploy, and manage machine learning models on Databricks, reducing time-to-production by up to 60%.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Automated feature engineering that simplifies model development",
                      "Enhanced model registry with advanced versioning capabilities",
                      "Distributed hyperparameter tuning at scale",
                      "Seamless production deployment with monitoring and feedback loops"
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-purple-50 p-6 rounded-xl order-1 lg:order-2">
                  <div className="aspect-video rounded-lg bg-gray-800 flex items-center justify-center">
                    <div className="text-center p-4">
                      <div className="text-3xl font-bold text-purple-400 mb-2">60%</div>
                      <div className="text-white">Faster Time-to-Production</div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="unity" className="mt-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Enhanced Data Governance</h3>
                  <p className="text-gray-600 mb-6">
                    Our Unity Catalog Enhancer extends Databricks' native capabilities with enterprise-grade data governance, lineage tracking, and security features.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Advanced column-level security beyond Databricks' row-level controls",
                      "Comprehensive data lineage tracking across the entire data lifecycle",
                      "Automated compliance reporting for regulatory requirements",
                      "Enhanced metadata management with custom taxonomy support"
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-purple-50 p-6 rounded-xl order-1 lg:order-2">
                  <div className="aspect-video rounded-lg bg-gray-800 flex items-center justify-center">
                    <div className="text-center p-4">
                      <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
                      <div className="text-white">Regulatory Compliance</div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default AcceleratorsSection;
