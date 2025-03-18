
import { motion } from "framer-motion";
import { Code, Server, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const FullStackAIEngineeringSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Full Stack AI <span className="text-blue-600">Engineering</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Our full stack AI engineering services provide end-to-end solutions for developing, deploying, and scaling AI applications.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "AI architecture design and implementation",
                "Integration with existing systems and workflows",
                "Frontend and backend development for AI applications",
                "Cloud infrastructure setup and optimization",
                "Performance monitoring and continuous improvement"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <div className={cn(
                    "mt-1 flex h-5 w-5 items-center justify-center rounded-full",
                    "bg-blue-100 text-blue-600"
                  )}>
                    <div className="h-2 w-2 rounded-full bg-blue-600" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </motion.li>
              ))}
            </ul>
            <Button 
              variant="outline" 
              className="border-blue-600 text-blue-600 hover:bg-blue-50"
              asChild
            >
              <Link to="/services-interest-form">
                TALK TO AN EXPERT
              </Link>
            </Button>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl shadow-lg max-w-md mx-auto"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <Code className="h-10 w-10 text-blue-600 mb-3" />
                  <h3 className="font-semibold mb-2">Frontend</h3>
                  <p className="text-sm text-gray-600">Intuitive interfaces for AI interactions</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <Server className="h-10 w-10 text-blue-600 mb-3" />
                  <h3 className="font-semibold mb-2">Backend</h3>
                  <p className="text-sm text-gray-600">Robust APIs and services</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <Layers className="h-10 w-10 text-blue-600 mb-3" />
                  <h3 className="font-semibold mb-2">AI Models</h3>
                  <p className="text-sm text-gray-600">Custom model integration</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <svg className="h-10 w-10 text-blue-600 mb-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 8V15.75C21 17.5449 19.5449 19 17.75 19H6.25C4.45507 19 3 17.5449 3 15.75V8M21 8L12 3L3 8M21 8L12 13L3 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <h3 className="font-semibold mb-2">Infrastructure</h3>
                  <p className="text-sm text-gray-600">Scalable cloud solutions</p>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-blue-600 text-white p-3 rounded-xl shadow-lg text-sm font-medium">
                Full Stack AI
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FullStackAIEngineeringSection;
