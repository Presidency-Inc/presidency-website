
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Globe, Clock, Shield, ArrowRight, MapPin } from "lucide-react";

const NearshoreAdvantageSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Nearshore Engineering Excellence
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Access top-tier engineering talent across Latin America, working in your timezone at competitive rates while maintaining the highest standards of quality and security.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="flex flex-col items-center">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 mb-3">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Faster Onboarding</h3>
              <p className="text-gray-600">Start in days, not months</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 mb-3">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">IP Protection</h3>
              <p className="text-gray-600">Secure and compliant</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 mb-3">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Same Timezone</h3>
              <p className="text-gray-600">Seamless collaboration</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 mb-3">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Cost Efficient</h3>
              <p className="text-gray-600">30-40% reduction</p>
            </div>
          </div>
          
          <Link to="/talent/nearshore">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
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
