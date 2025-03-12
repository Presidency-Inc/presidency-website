
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const stories = [
  {
    quote: "The proprietary accelerators implemented by Presidency's team helped us achieve a 4x improvement in our ETL processing speeds while reducing our compute costs by 35%.",
    author: "CTO, Fortune 500 Financial Services Company",
    industry: "Financial Services"
  },
  {
    quote: "We were struggling with Databricks scaling issues until Presidency's team implemented their custom solutions. Now our data pipelines run seamlessly with minimal maintenance.",
    author: "VP of Data Engineering, E-commerce Leader",
    industry: "E-commerce"
  },
  {
    quote: "The enhanced Unity Catalog solution provided us with the governance and security capabilities we needed to meet our regulatory requirements, going far beyond what native Databricks offers.",
    author: "CISO, Healthcare Technology Provider",
    industry: "Healthcare"
  }
];

const SuccessStoriesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Success Stories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600"
          >
            See how our clients have transformed their Databricks environments with our proprietary solutions
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <div className="mb-4 text-purple-600">
                <Quote className="w-8 h-8" />
              </div>
              <p className="text-gray-700 mb-6 italic">"{story.quote}"</p>
              <div>
                <p className="font-semibold text-gray-900">{story.author}</p>
                <p className="text-sm text-gray-500">{story.industry}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
