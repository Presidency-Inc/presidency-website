
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Globe, Clock, Shield, ArrowRight, MapPin } from "lucide-react";

const NearshoreAdvantageSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nearshore Engineering Excellence
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Access top-tier engineering talent across Latin America, working in your timezone at competitive rates while maintaining the highest standards of quality and security.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 mr-4">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Faster Onboarding</h3>
                  <p className="text-gray-600">Start in days, not months</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 mr-4">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">IP Protection</h3>
                  <p className="text-gray-600">Secure and compliant</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 mr-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Same Timezone</h3>
                  <p className="text-gray-600">Seamless collaboration</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 mr-4">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Cost Efficient</h3>
                  <p className="text-gray-600">30-40% reduction</p>
                </div>
              </div>
            </div>
            
            <Link to="/talent/nearshore">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Explore Nearshore Options
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src="/public/lovable-uploads/233f0859-da00-47f9-a7a1-f3a9ece35328.png" 
                alt="Engineers collaborating across countries" 
                className="w-full h-80 object-cover object-center"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Top Latin American Talent</h3>
                <p className="text-gray-600 mb-6">
                  Our rigorous vetting process ensures you work with only the top 3% of tech talent across Latin America, offering world-class skills at competitive rates.
                </p>
                <div className="flex items-center text-blue-600">
                  <Link to="/talent/nearshore" className="inline-flex items-center font-medium hover:underline">
                    Learn about our vetting process
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NearshoreAdvantageSection;
