
import { motion } from "framer-motion";
import { Brain, Code, Server } from "lucide-react";

const teamOptions = [
  {
    icon: <Brain className="w-12 h-12" />,
    title: "AI & Data Engineering",
    description: "Designing and implementing intelligent systems and data-driven solutions"
  },
  {
    icon: <Code className="w-12 h-12" />,
    title: "Full Stack Engineering",
    description: "Crafting both front-end and back-end solutions"
  },
  {
    icon: <Server className="w-12 h-12" />,
    title: "Cloud & DevOps",
    description: "Managing and optimizing cloud infrastructure for peak performance & reducing TCO"
  }
];

const NearshoreTeams = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-blue-600 font-semibold uppercase">remote, hybrid or onsite</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
              Nearshore Extended Teams
            </h2>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Hire Your Team
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Our Nearshore teams in Mexico and Canada offer scalable technical resources tailored to your needs. They function as dedicated extensions of your internal teams, ensuring seamless integration and, if required, mirroring your technical environment.
            </p>
          </motion.div>
          
          <div className="space-y-6">
            {teamOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-blue-50 rounded-xl p-6 flex items-start gap-6"
              >
                <div className="bg-blue-100 rounded-lg p-3 text-blue-600">
                  {option.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {option.title}
                  </h3>
                  <p className="text-gray-600">
                    {option.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NearshoreTeams;
