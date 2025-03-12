
import { motion } from "framer-motion";
import { Atom, Expand, GitBranch, Sparkle } from "lucide-react";

const features = [
  {
    icon: <Atom className="w-8 h-8" />,
    title: "Context Protocol",
    description: "Integrate with any dataset and optimize it for AI use."
  },
  {
    icon: <Expand className="w-8 h-8" />,
    title: "Multi Channel Experience",
    description: "Provide seamless cross-platform experiences on web, iOS, Android, desktops, voice, and beyond."
  },
  {
    icon: <GitBranch className="w-8 h-8" />,
    title: "Business Logic & Orchestration",
    description: "Integrate your business logic and AI with the appropriate data, tools, and command sequences."
  },
  {
    icon: <Sparkle className="w-8 h-8" />,
    title: "LLMs & Finetunes",
    description: "Use Frontier models or deploy your preferred LLM locally or on the cloud. Fine-tune them to align with your business logic."
  }
];

const LeapfrogFeatures = () => {
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
              <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-blue-600">
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

export default LeapfrogFeatures;
