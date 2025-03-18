
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatusBar from "@/components/StatusBar";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";

const About = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <StatusBar />
      <Navbar />
      <ScrollProgress />
      
      <div className="relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute w-full h-full opacity-10"
            viewBox="0 0 1000 1000"
            xmlns="http://www.w3.org/2000/svg"
          >
            {Array.from({ length: 10 }).map((_, i) => (
              <path
                key={i}
                d={`M0,${200 + i * 60} C200,${150 + i * 60} 300,${250 + i * 60} 500,${180 + i * 60} C700,${220 + i * 60} 800,${150 + i * 60} 1000,${250 + i * 60}`}
                fill="none"
                stroke="#1a46e5"
                strokeWidth="1"
              />
            ))}
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-x-12 gap-y-16">
            {/* Left column - Title and intro */}
            <div className="lg:col-span-2">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl md:text-6xl font-bold text-[#1a46e5] mb-12"
              >
                It's time to innovate.
              </motion.h1>
            </div>

            {/* Right column - Content */}
            <div className="lg:col-span-3 space-y-8 text-lg">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="leading-relaxed"
              >
                Presidency Solutions is a leading technology company that empowers organizations to maximize their impact with AI and Data. We seek to present exceptional solutions and resources that today's technical and financial decision makers appreciate.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="leading-relaxed"
              >
                We operate across multiple domains, including <span className="text-blue-600">AI</span>, <span className="text-blue-600">Data Engineering</span>, <span className="text-blue-600">Databricks Solutions</span>, <span className="text-blue-600">Cloud Modernization</span>, and <span className="text-blue-600">Talent Solutions</span>. Our innovative products like Leapfrog, Omniflow, and Kube8r help businesses transform their operations and customer experiences.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="leading-relaxed"
              >
                Respect for our clients and their business goals defines Presidency. Our team consists of industry veterans with expertise ranging from artificial intelligence to data engineering, cloud architecture to talent acquisition, providing entrepreneurs and enterprises with the technical foundation they need to succeed.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="leading-relaxed"
              >
                We aim to connect organizations with the right technology and talent. We have built a network of experts, including technical and executive talent, marketing and communications resources, and Fortune 500/Global 2000 companies. Our network reflects Presidency's commitment to helping our clients grow their businesses, and our operating teams provide access to expertise and insights across the entire spectrum of digital transformation.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="pt-4"
              >
                <Button 
                  className="bg-[#1a46e5] text-white hover:bg-[#1a46e5]/90"
                  size="lg"
                  asChild
                >
                  <Link to="/get-started">
                    Work with us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-center mb-16"
            >
              Our Leadership Team
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                {
                  name: "Alex Johnson",
                  role: "Chief Executive Officer",
                  bio: "With over 15 years of experience in AI and data engineering, Alex leads our company vision and strategy."
                },
                {
                  name: "Sarah Chen",
                  role: "Chief Technology Officer",
                  bio: "Sarah brings extensive expertise in cloud architectures and AI engineering, driving our product innovation."
                },
                {
                  name: "Michael Rodriguez",
                  role: "VP of Data Engineering",
                  bio: "Michael oversees our data engineering practice, bringing 12+ years of experience with enterprise data systems."
                },
                {
                  name: "Priya Patel",
                  role: "VP of AI Solutions",
                  bio: "Priya leads our AI initiatives, specializing in LLMs and generative AI applications for enterprises."
                },
                {
                  name: "David Kim",
                  role: "VP of Talent Solutions",
                  bio: "David manages our talent and nearshore operations, ensuring clients receive top-tier engineering support."
                },
                {
                  name: "Rachel Thompson",
                  role: "Chief Business Officer",
                  bio: "Rachel drives our business development, establishing partnerships with leading technology companies."
                }
              ].map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-sm p-8"
                >
                  <div className="w-20 h-20 bg-blue-100 rounded-full mb-6 flex items-center justify-center">
                    <span className="text-blue-600 text-2xl font-bold">{member.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-blue-600 mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-center mb-16"
            >
              Our Values
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Innovation",
                  description: "We constantly push the boundaries of what's possible with AI and data technologies."
                },
                {
                  title: "Excellence",
                  description: "We strive for excellence in everything we do, from code quality to client service."
                },
                {
                  title: "Collaboration",
                  description: "We believe in the power of teamwork, both internally and with our clients."
                },
                {
                  title: "Integrity",
                  description: "We operate with transparency and honesty in all our business relationships."
                },
                {
                  title: "Impact",
                  description: "We measure our success by the positive impact we have on our clients' businesses."
                },
                {
                  title: "Continuous Learning",
                  description: "We embrace change and continuously evolve our skills and knowledge."
                }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-8"
                >
                  <h3 className="text-xl font-bold mb-4 text-[#1a46e5]">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default About;
