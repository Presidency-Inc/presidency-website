
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const NearshoreCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-indigo-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to leverage nearshore talent advantage?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-8">
            Connect with our team to discuss your nearshore engineering needs. We'll help you build the right team for your specific requirements.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/talent-interest-form">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 w-full sm:w-auto">
                Request Talent Information
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            
            <Link to="/book-a-call">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                Schedule a Consultation
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NearshoreCTA;
