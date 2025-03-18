import { motion } from "framer-motion";
import { Brain, Bot, Database, PenTool } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ModelFinetuningSection = () => {
  return (
    <section className="py-16 md:py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
              
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Fine-tuning Process</h3>
              
              <div className="space-y-6">
                {[
                  {
                    icon: <Database className="h-6 w-6 text-blue-600" />,
                    title: "Data Preparation",
                    description: "Collect and clean data specific to your business domain and use cases"
                  },
                  {
                    icon: <PenTool className="h-6 w-6 text-blue-600" />,
                    title: "Model Selection",
                    description: "Choose the most suitable foundation model for your specific requirements"
                  },
                  {
                    icon: <Brain className="h-6 w-6 text-blue-600" />,
                    title: "Training & Optimization",
                    description: "Iteratively train the model on your data and optimize for performance"
                  },
                  {
                    icon: <Bot className="h-6 w-6 text-blue-600" />,
                    title: "Evaluation & Deployment",
                    description: "Rigorously test model quality and deploy to your infrastructure"
                  }
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <div className="bg-blue-100 p-3 rounded-lg text-blue-600 flex-shrink-0">
                      {step.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{step.title}</h4>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-100">
                <h4 className="font-semibold mb-4">Typical Improvements</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">73%</div>
                    <div className="text-sm text-gray-600">Accuracy Increase</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">89%</div>
                    <div className="text-sm text-gray-600">Domain Relevance</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Business Focused <span className="text-blue-600">Model Fine-tuning</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Enhance AI model performance and relevance by fine-tuning them specifically for your industry, business processes, and unique challenges.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-2 text-blue-700">Industry-Specific Knowledge</h3>
                <p className="text-gray-600">
                  Optimize models with domain-specific terminology, regulations, and best practices from your industry.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-2 text-blue-700">Company Data Integration</h3>
                <p className="text-gray-600">
                  Incorporate your proprietary data and business rules for more accurate and relevant AI responses.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-2 text-blue-700">Task Optimization</h3>
                <p className="text-gray-600">
                  Fine-tune models for specific tasks like content generation, classification, or data extraction.
                </p>
              </div>
            </div>
            
            <Button className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
              <Link to="/services-interest-form">
                Talk to an Expert
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ModelFinetuningSection;
