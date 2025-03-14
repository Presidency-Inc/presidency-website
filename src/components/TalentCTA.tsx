import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Users, ArrowRight } from "lucide-react";

const TalentCTA = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-br from-blue-900 to-indigo-800 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 800 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <circle
              key={i}
              cx={100 + i * 100}
              cy={400}
              r={20 + Math.random() * 80}
              fill="none"
              stroke="white"
              strokeWidth="1"
            />
          ))}
          {Array.from({ length: 8 }).map((_, i) => (
            <circle
              key={i + 8}
              cx={400}
              cy={100 + i * 100}
              r={20 + Math.random() * 80}
              fill="none"
              stroke="white"
              strokeWidth="1"
            />
          ))}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to strengthen your team with top AI & data talent?
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Whether you need a single engineer or a complete team, we can provide the expertise you need to accelerate your AI and data initiatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <div className="flex items-center mb-6">
                <Users className="h-10 w-10 mr-4 text-blue-300" />
                <h3 className="text-2xl font-bold">Our Talent Network</h3>
              </div>
              
              <ul className="space-y-4 mb-6">
                {[
                  "500+ vetted AI & data specialists",
                  "95% client satisfaction rate",
                  "Average 5+ years of experience",
                  "Projects across 12+ industries",
                  "Specialized in cutting-edge AI technologies"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-blue-400 mr-3"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="border-t border-white/20 pt-6 mt-6">
                <p className="italic text-blue-200">
                  "The AI engineers we hired through Presidency have been instrumental in accelerating our machine learning initiatives."
                </p>
                <p className="mt-2 font-semibold">— CTO, Enterprise SaaS Company</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TalentCTA;
