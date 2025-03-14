
import { motion } from "framer-motion";

const processSteps = [
  {
    title: "Tell us your Requirements",
    description: "Share your Talent needs and requirements"
  },
  {
    title: "Get Recommendations",
    description: "Receive tailored engineer profiles suited to your needs"
  },
  {
    title: "Interview Engineers",
    description: "Engage in one-on-one discussions with potential candidates."
  },
  {
    title: "Choose",
    description: "Select the best engineer for your company"
  }
];

const NearshoreProcess = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-blue-600 font-semibold uppercase"
          >
            nearshore is simple
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mt-2"
          >
            How it works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Offshore is dead, and Onshore is expensive. Qualified Talent that is in the Same Timezone fills in the gap that Offshore & Onshore have left. Nearshore can work with all three engagement models: Remote, On-site & Hybrid
          </motion.p>
        </div>
        
        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-16 left-[calc(12.5%-8px)] right-[calc(12.5%-8px)] h-1 bg-blue-200"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                className="text-center relative"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full mx-auto mb-6 text-xl font-bold relative z-10">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NearshoreProcess;
