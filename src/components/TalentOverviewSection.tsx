
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { UserCheck, Globe, Clock, ArrowRight } from "lucide-react";

const TalentOverviewSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Hire{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              AI/Data Talent
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Strengthen Your Team with Top AI & Data Talent
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Access pre-vetted AI and data engineers ready to accelerate your projects. Our talent network includes specialists across machine learning, data engineering, and cloud architecture.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-md mr-3">
                  <UserCheck className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Pre-vetted Experts</h3>
                  <p className="text-gray-600 text-sm">Rigorously screened talent</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-md mr-3">
                  <Clock className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Rapid Deployment</h3>
                  <p className="text-gray-600 text-sm">Start in days, not months</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-md mr-3">
                  <Globe className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Nearshore Options</h3>
                  <p className="text-gray-600 text-sm">Same timezone collaboration</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-md mr-3">
                  <UserCheck className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Flexible Engagement</h3>
                  <p className="text-gray-600 text-sm">Scale up or down as needed</p>
                </div>
              </div>
            </div>
            
            <Link to="/talent">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Explore Talent Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Engineers Specialize In:</h3>
              
              <ul className="space-y-4">
                {[
                  "Machine Learning & AI Development",
                  "Data Engineering & Analytics",
                  "Cloud Architecture & MLOps",
                  "Full-Stack Development",
                  "Computer Vision & NLP",
                  "DevOps & Infrastructure"
                ].map((specialty, idx) => (
                  <li key={idx} className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-blue-500 mr-3"></div>
                    <span className="text-gray-700">{specialty}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="text-gray-700 italic mb-2">
                  "The AI engineers we hired have been instrumental in accelerating our machine learning initiatives."
                </div>
                <div className="font-medium">— CTO, Enterprise SaaS Company</div>
              </div>
            </div>
            
            {/* Decorative background element */}
            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-blue-100 rounded-xl -z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TalentOverviewSection;
