
import { motion } from "framer-motion";
import { Trophy, Award, BadgeCheck } from "lucide-react";

const ExpertiseSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-gray-50 to-white"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block p-3 rounded-full bg-purple-100 text-purple-600 mb-4"
          >
            <Trophy className="w-6 h-6" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Unmatched Databricks Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600"
          >
            Our team combines deep Databricks knowledge with proprietary technologies to deliver solutions that exceed expectations
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-block p-3 rounded-full bg-purple-100 text-purple-600 mb-4">
              <BadgeCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Certified Experts</h3>
            <p className="text-gray-600">
              Our team includes certified Databricks architects, engineers, and data scientists with years of hands-on experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-block p-3 rounded-full bg-purple-100 text-purple-600 mb-4">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Industry Recognition</h3>
            <p className="text-gray-600">
              Recognized as a leading Databricks service provider with successful implementations across multiple industries.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-block p-3 rounded-full bg-purple-100 text-purple-600 mb-4">
              <Trophy className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Proprietary IP</h3>
            <p className="text-gray-600">
              We've developed exclusive accelerators and solutions that enhance Databricks capabilities and overcome platform limitations.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600">100+</div>
              <div className="text-gray-700 mt-2">Databricks Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600">50+</div>
              <div className="text-gray-700 mt-2">Certified Experts</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600">3-5x</div>
              <div className="text-gray-700 mt-2">Performance Boost</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600">40%</div>
              <div className="text-gray-700 mt-2">Cost Reduction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
