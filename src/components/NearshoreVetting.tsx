
import { motion } from "framer-motion";

const vettingSteps = [
  {
    title: "AI/GPT Vetting",
    description: "A thorough technical assessment powered by GPT-4 filters candidates' expertise"
  },
  {
    title: "Screening",
    description: "Candidates have a half-hour discussion with our hiring team."
  },
  {
    title: "1-2 Technical Interviews",
    description: "One or two advanced technical evaluations are led by our senior engineers."
  },
  {
    title: "Soft Skills Interview",
    description: "Following the technical evaluations, we conduct an interview focusing on interpersonal skills, evaluating communication, enthusiasm, and attitude."
  }
];

const NearshoreVetting = () => {
  return (
    <section className="py-16 md:py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-blue-600 font-semibold uppercase"
          >
            how we hire
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mt-2"
          >
            Vetting Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Every engineer who enters our talent pool undergoes a GPT-assessment, participates in 2-3 technical interviews, and completes a soft-skills interview.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {vettingSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-8"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full mb-6 text-xl font-bold">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NearshoreVetting;
