
import { motion } from "framer-motion";
import { Database, Globe, ArrowRightLeft, Code } from "lucide-react";

const features = [
  {
    icon: <Database className="w-8 h-8" />,
    title: "Enterprise ETL",
    description: "The ETL system simplifies data integration by automating tasks, providing teams with consistent, usable data."
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Enterprise Integrations",
    description: "Connect this agent to databases, cloud services like AWS or Azure, and platforms like Google BigQuery or Snowflake."
  },
  {
    icon: <ArrowRightLeft className="w-8 h-8" />,
    title: "Any Source to Any Target",
    description: "From DBs, Streaming, APIs to basic filesystems, you can configure your ETL source and targets with ease."
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "OmniLang Transformation",
    description: "Expand the solution space of your migration problems by using OmniLang transformation language."
  }
];

const OmniflowFeatures = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-indigo-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-indigo-600">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OmniflowFeatures;
