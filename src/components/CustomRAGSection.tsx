
import { motion } from "framer-motion";
import { Database, Search, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

const stepItems = [
  {
    icon: <Database className="h-6 w-6" />,
    title: "Data Ingestion",
    description: "Process and transform your data from multiple sources"
  },
  {
    icon: <Search className="h-6 w-6" />,
    title: "Retrieval Pipeline",
    description: "Build efficient query and retrieval mechanisms"
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Content Generation",
    description: "Generate accurate responses based on retrieved context"
  }
];

const CustomRAGSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Custom <span className="text-indigo-600">RAG</span> Development
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Leverage your organization's knowledge with custom Retrieval Augmented Generation systems that enhance LLM capabilities with your proprietary data.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {stepItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <div className={cn(
                "w-12 h-12 flex items-center justify-center rounded-lg mb-4",
                "bg-indigo-100 text-indigo-600"
              )}>
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl p-8 text-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Benefits of Custom RAG</h3>
              <ul className="space-y-3">
                {[
                  "Enhanced accuracy with domain-specific knowledge",
                  "Reduced hallucinations and misinformation",
                  "Secure handling of proprietary information",
                  "Ability to reason over your enterprise data",
                  "Customizable retrieval strategies for your use case"
                ].map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 + (index * 0.1) }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <svg className="h-5 w-5 flex-shrink-0 mt-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <div className="ml-2 text-sm opacity-80">RAG Query Flow</div>
                </div>
                <div className="space-y-3 font-mono text-sm">
                  <div className="bg-white/5 p-2 rounded"># User query processing</div>
                  <div className="bg-white/5 p-2 rounded">{">"} Embedding generation</div>
                  <div className="bg-white/5 p-2 rounded">{">"} Vector search</div>
                  <div className="bg-white/5 p-2 rounded">{">"} Context retrieval</div>
                  <div className="bg-white/5 p-2 rounded">{">"} Response generation</div>
                  <div className="mt-3 p-2 border border-white/20 rounded">
                    Response: Based on your enterprise data, the Q3 forecast shows...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomRAGSection;
