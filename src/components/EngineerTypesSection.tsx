
import { motion } from "framer-motion";
import { Brain, Database, Code, Server, BarChart, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

const engineerTypes = [
  {
    icon: <Brain className="h-10 w-10" />,
    title: "AI Engineers",
    skills: ["Machine Learning", "Neural Networks", "Model Development", "AI Application Design"],
    description: "Specialists who design, build and optimize artificial intelligence systems and applications."
  },
  {
    icon: <Database className="h-10 w-10" />,
    title: "Data Engineers",
    skills: ["ETL Pipelines", "Data Warehousing", "Big Data", "Data Modeling"],
    description: "Experts who build and maintain the infrastructure needed for optimal data generation and analysis."
  },
  {
    icon: <Code className="h-10 w-10" />,
    title: "Full Stack AI Developers",
    skills: ["Frontend/Backend", "API Integration", "AI Model Deployment", "Application Development"],
    description: "Developers who can build complete AI applications from frontend interfaces to backend model integration."
  },
  {
    icon: <BarChart className="h-10 w-10" />,
    title: "Data Scientists",
    skills: ["Statistical Analysis", "Predictive Modeling", "Python/R", "Business Intelligence"],
    description: "Analytical experts who extract insights and value from complex data using statistical methods."
  },
  {
    icon: <Server className="h-10 w-10" />,
    title: "MLOps Engineers",
    skills: ["CI/CD for ML", "Model Monitoring", "Deployment Automation", "ML Infrastructure"],
    description: "Specialists who bridge the gap between machine learning development and production-ready systems."
  },
  {
    icon: <Cpu className="h-10 w-10" />,
    title: "AI Infrastructure Engineers",
    skills: ["GPU Optimization", "Distributed Computing", "Cloud AI Services", "High-Performance Computing"],
    description: "Engineers who design and maintain the specialized infrastructure that powers AI applications."
  }
];

const EngineerTypesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Specialized Talent Pool
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access a wide range of AI and data engineering expertise for any project requirement
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {engineerTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow p-6 flex flex-col h-full"
            >
              <div className="mb-6">
                <div className="bg-purple-100 rounded-lg w-16 h-16 flex items-center justify-center text-purple-600 mb-4">
                  {type.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{type.title}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
              </div>
              
              <div className="mt-auto">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">KEY SKILLS:</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {type.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="w-full border-purple-200 text-purple-700 hover:bg-purple-50">
                  Learn More
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineerTypesSection;
