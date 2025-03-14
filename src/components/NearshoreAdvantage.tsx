
import { motion } from "framer-motion";
import { Shield, Clock, CreditCard } from "lucide-react";

const advantages = [
  {
    icon: <Shield className="w-12 h-12" />,
    title: "IP Protection",
    description: "Breathe Easy knowing that your IP is protected under NAFTA LAWS"
  },
  {
    icon: <Clock className="w-12 h-12" />,
    title: "Same Timezone",
    description: "No late night or early morning meetings with offshore teams"
  },
  {
    icon: <CreditCard className="w-12 h-12" />,
    title: "US Invoicing & Payroll",
    description: "Work billed in the US and paid in the US. Say goodbye to cross border gruntwork"
  }
];

const NearshoreAdvantage = () => {
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
            nearshore advantage
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mt-2"
          >
            Why Nearshore?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Choosing nearshore models offers significant advantages in terms of time zone alignment for easier communication, cultural similarities for better teamwork, and cost-effectiveness. It strikes a balance between offshore savings and onshore quality, making it an appealing choice for businesses.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
      </div>
    </section>
  );
};

export default NearshoreAdvantage;
