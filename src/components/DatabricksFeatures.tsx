
import { motion } from "framer-motion";
import { Rocket, Zap, Shield, Users, Database, GraduationCap } from "lucide-react";

const features = [
  {
    icon: <Rocket className="w-6 h-6 md:w-8 md:h-8" />,
    title: "Proprietary Accelerators",
    description: "Overcome Databricks limitations with our custom accelerators designed for maximum performance and efficiency."
  },
  {
    icon: <Database className="w-6 h-6 md:w-8 md:h-8" />,
    title: "AI Pipelines for Databricks",
    description: "End-to-end ML/AI pipelines built on Databricks to operationalize your machine learning workflows and models."
  },
  {
    icon: <Zap className="w-6 h-6 md:w-8 md:h-8" />,
    title: "Performance Optimization",
    description: "Advanced tuning and optimization services to maximize the performance of your Databricks investments."
  },
  {
    icon: <Shield className="w-6 h-6 md:w-8 md:h-8" />,
    title: "Enterprise Security",
    description: "Enhanced security frameworks that extend Databricks' capabilities with enterprise-grade protection."
  },
  {
    icon: <Users className="w-6 h-6 md:w-8 md:h-8" />,
    title: "Expert Team",
    description: "Certified Databricks professionals with real-world experience solving complex data challenges."
  },
  {
    icon: <GraduationCap className="w-6 h-6 md:w-8 md:h-8" />,
    title: "Nearshore Databricks Talent",
    description: "Access skilled Databricks engineers in nearshore locations for cost-effective team extension with timezone alignment."
  }
];

const DatabricksFeatures = () => {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-white p-4 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-blue-50 w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mb-3 md:mb-4 text-blue-600">
                {feature.icon}
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DatabricksFeatures;
