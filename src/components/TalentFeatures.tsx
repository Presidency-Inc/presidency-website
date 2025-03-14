
import { motion } from "framer-motion";
import { UserCheck, Globe, Clock, Shield, CreditCard, Users } from "lucide-react";

const features = [
  {
    icon: <UserCheck className="w-8 h-8" />,
    title: "Pre-vetted Talent",
    description: "Access a pool of rigorously screened AI & data engineers with proven experience in enterprise projects."
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "US-Based Operations",
    description: "US invoicing and payroll with nearshore talent that aligns with your timezone and business practices."
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Rapid Deployment",
    description: "Get the exact engineering talent you need within days, not months, to accelerate your projects."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "IP Protection",
    description: "Your intellectual property remains secure with comprehensive legal protection under US law."
  },
  {
    icon: <CreditCard className="w-8 h-8" />,
    title: "Flexible Engagement",
    description: "Scale your team up or down as needed with flexible contracts and no long-term commitments."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Team Integration",
    description: "Engineers who seamlessly integrate with your existing teams, tools, and development processes."
  }
];

const TalentFeatures = () => {
  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900"
          >
            Get an Extended Engineering Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Get access to top-tier AI and data engineering talent without the traditional hiring hassles
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
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

export default TalentFeatures;
