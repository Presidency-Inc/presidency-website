
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Globe, Clock, Shield, ArrowRight } from "lucide-react";

const advantages = [
  {
    icon: <Shield className="w-10 h-10" />,
    title: "IP Protection",
    description: "Your intellectual property is fully protected under NAFTA laws, providing security and peace of mind."
  },
  {
    icon: <Clock className="w-10 h-10" />,
    title: "Same Timezone Collaboration",
    description: "Work with talent in your timezone for real-time communication and seamless integration with your team."
  },
  {
    icon: <Globe className="w-10 h-10" />,
    title: "Cultural Alignment",
    description: "Engineers who understand your business culture, ensuring smooth collaboration and effective teamwork."
  }
];

const NearshoreAdvantageSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-blue-600 font-semibold uppercase"
          >
            nearshore advantage
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mt-2"
          >
            Why Choose Nearshore Talent?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Nearshore talent provides the perfect balance between quality and cost, combining the advantages of local collaboration with competitive rates.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-8 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6 mx-auto">
                {advantage.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                {advantage.title}
              </h3>
              <p className="text-gray-600">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <Link to="/talent/nearshore">
            <Button size="lg" variant="default" className="bg-blue-600 hover:bg-blue-700 text-white">
              Explore Nearshore Options
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default NearshoreAdvantageSection;
