
import { motion } from "framer-motion";
import { Atom, Expand, GitBranch, Sparkle, Layers, Terminal, Database, Workflow, Cpu, Server } from "lucide-react";

const features = [
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Full Stack AI Framework",
    description: "A comprehensive framework for building and deploying AI-powered applications across the entire technology stack."
  },
  {
    icon: <Expand className="w-8 h-8" />,
    title: "Multi Channel Experience",
    description: "Provide seamless cross-platform experiences on web, iOS, Android, desktops, voice, and beyond."
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Context Management System",
    description: "Efficiently manage and utilize contextual information to enhance AI interactions and decision-making processes."
  },
  {
    icon: <Workflow className="w-8 h-8" />,
    title: "Business Logic Orchestration",
    description: "Integrate your business logic and AI with the appropriate data, tools, and command sequences."
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "AIOps Platform",
    description: "Streamline AI operations with automated monitoring, scaling, and management of AI infrastructure."
  },
  {
    icon: <Server className="w-8 h-8" />,
    title: "Model Hosting & Finetuning",
    description: "Deploy models in the cloud or on-premises and fine-tune them to meet your specific business requirements."
  }
];

const LeapfrogFeatures = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
