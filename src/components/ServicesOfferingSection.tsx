
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Implementation & Migration",
    description: "Seamlessly migrate to Databricks or optimize your existing implementation with our expertise.",
    features: [
      "Platform architecture design and implementation",
      "Migration from legacy systems or other cloud platforms",
      "Data integration and workflow optimization",
      "Custom accelerators implementation"
    ]
  },
  {
    title: "Advanced Analytics & ML",
    description: "Unlock the full potential of your data with our advanced analytics and machine learning services.",
    features: [
      "End-to-end ML pipelines with MLflow integration",
      "Custom model development and optimization",
      "Advanced analytics solutions for complex business problems",
      "Real-time analytics implementation"
    ]
  },
  {
    title: "Managed Services & Support",
    description: "Keep your Databricks environment running optimally with our comprehensive managed services.",
    features: [
      "24/7 monitoring and support",
      "Performance optimization and tuning",
      "Security audits and compliance checks",
      "Regular health checks and preventative maintenance"
    ]
  }
];

const ServicesOfferingSection = () => {
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
            Databricks Services Offerings
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600"
          >
            Comprehensive services to maximize your Databricks investment with our proprietary accelerators
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col"
            >
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto p-6 pt-0">
                <Button variant="outline" className="w-full justify-between">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOfferingSection;
