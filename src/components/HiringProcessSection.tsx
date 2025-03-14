
import { motion } from "framer-motion";
import { 
  Search, UserCheck, CalendarCheck, Users, 
  Briefcase, FileCheck, BarChart, Handshake 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    icon: <Search className="h-6 w-6" />,
    title: "Requirements Analysis",
    description: "We analyze your specific needs to understand the exact skills and experience required."
  },
  {
    icon: <UserCheck className="h-6 w-6" />,
    title: "Talent Matching",
    description: "We match your requirements with pre-vetted candidates from our talent pool."
  },
  {
    icon: <CalendarCheck className="h-6 w-6" />,
    title: "Interview Process",
    description: "You interview and select the candidates that best fit your team and project needs."
  },
  {
    icon: <Briefcase className="h-6 w-6" />,
    title: "Onboarding",
    description: "We handle all paperwork and ensure a smooth integration with your team."
  }
];

const benefits = [
  {
    icon: <FileCheck className="h-6 w-6 text-purple-600" />,
    title: "Simple Contracts",
    description: "Straightforward agreements with clear terms and no hidden clauses."
  },
  {
    icon: <BarChart className="h-6 w-6 text-purple-600" />,
    title: "Performance Monitoring",
    description: "Regular check-ins and performance reviews to ensure alignment with your goals."
  },
  {
    icon: <Users className="h-6 w-6 text-purple-600" />,
    title: "Team Scaling",
    description: "Easily scale your team up or down based on project demands and changing requirements."
  },
  {
    icon: <Handshake className="h-6 w-6 text-purple-600" />,
    title: "Ongoing Support",
    description: "Continuous support from our management team to address any concerns or needs."
  }
];

const HiringProcessSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Streamlined Hiring Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial consultation to onboarding, we've optimized every step to get you the right talent, fast
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mb-4 z-10 relative">
                    {step.icon}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute top-8 left-16 w-full h-0.5 bg-purple-100 hidden lg:block"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center mb-10"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ongoing Partnership Benefits
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our relationship doesn't end after placement - we provide continuous support
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">{benefit.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HiringProcessSection;
