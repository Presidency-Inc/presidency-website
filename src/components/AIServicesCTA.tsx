
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const AIServicesCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-lg text-blue-200 mb-10">
            Connect with our AI experts to discuss how our services can enhance efficiency, 
            drive innovation, and create competitive advantages for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-900 hover:bg-white/90 px-8">
              Schedule Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8">
              Explore Case Studies
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIServicesCTA;
