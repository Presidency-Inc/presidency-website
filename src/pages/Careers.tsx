
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatusBar from "@/components/StatusBar";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import CareerHero from "@/components/CareerHero";
import HiringProcessSection from "@/components/HiringProcessSection";
import { motion } from "framer-motion";
import JobList from "@/components/JobList";
import { Helmet } from "react-helmet";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { Job } from "@/components/JobList";
import JobDetail from "@/components/JobDetail";
import JobApplicationForm from "@/components/JobApplicationForm";
import { Button } from "@/components/ui/button";

const Careers = () => {
  const { metadata } = usePageMetadata("/careers");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [viewMode, setViewMode] = useState<"list" | "detail">("list");
  const [isApplicationFormOpen, setIsApplicationFormOpen] = useState(false);
  
  // Extract string values for metadata to avoid Symbol conversion issues
  const title = String(metadata?.title || "Join Our Team | Presidency Solutions");
  const description = String(metadata?.description || "Explore career opportunities at Presidency Solutions. Join a team of passionate experts in AI, data engineering, and cloud solutions.");
  const ogType = String(metadata?.og_type || "website");
  const ogUrl = String(metadata?.fullUrl || `${window.location.origin}/careers`);
  const ogImage = String(metadata?.image_url || `${window.location.origin}/lovable-uploads/16521bca-3a39-4376-8e26-15995aa57549.png`);
  const twitterCard = String(metadata?.twitter_card || "summary_large_image");
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Pre-render meta tags for crawlers
    const head = document.querySelector('head');
    if (head) {
      const metaTags = [
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: ogType },
        { property: "og:url", content: ogUrl },
        { property: "og:image", content: ogImage },
        { name: "twitter:card", content: twitterCard },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: ogImage }
      ];
      
      // Remove any existing OG tags that might be dynamically added
      document.querySelectorAll('meta[property^="og:"], meta[name^="twitter:"]').forEach(tag => {
        if (!tag.hasAttribute('data-react-helmet')) {
          tag.remove();
        }
      });
      
      // Add meta tags server-side for crawlers
      metaTags.forEach(tagData => {
        const meta = document.createElement('meta');
        Object.entries(tagData).forEach(([attr, value]) => {
          meta.setAttribute(attr, value);
        });
        head.appendChild(meta);
      });
    }
  }, [title, description, ogType, ogUrl, ogImage, twitterCard]);

  const handleEditJob = (job: Job) => {
    setSelectedJob(job);
    console.log("Edit job:", job);
  };
  
  const handleViewJob = (job: Job) => {
    setSelectedJob(job);
    setViewMode("detail");
    window.scrollTo(0, 0);
  };

  const handleApplyToJob = (job: Job) => {
    setSelectedJob(job);
    setIsApplicationFormOpen(true);
  };

  const handleBackToList = () => {
    setViewMode("list");
    setSelectedJob(null);
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="careers, jobs, employment, hiring, AI jobs, data engineering jobs, cloud jobs" />
        
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content={ogType} />
        <meta property="og:url" content={ogUrl} />
        <meta property="og:image" content={ogImage} />
        
        <meta name="twitter:card" content={twitterCard} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
      </Helmet>
      
      <StatusBar />
      <Navbar />
      <ScrollProgress />
      
      <main className="min-h-screen bg-white">
        <CareerHero />
        
        <section className="py-16 md:py-24 bg-gray-50 job-listings">
          <div className="container mx-auto px-4">
            {viewMode === "list" ? (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="max-w-3xl mx-auto text-center mb-16"
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Open Positions</h2>
                  <p className="text-gray-600 text-lg mb-8">
                    Join our team of passionate experts who are transforming how organizations leverage AI and data to maximize their impact.
                  </p>
                </motion.div>
                
                <JobList 
                  onEdit={handleEditJob} 
                  onView={handleViewJob} 
                  onApply={handleApplyToJob}
                />
              </>
            ) : (
              <div className="max-w-4xl mx-auto">
                {selectedJob && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <Button 
                        onClick={handleBackToList} 
                        variant="outline"
                        className="mb-4"
                      >
                        Back to All Jobs
                      </Button>
                      
                      <Button 
                        onClick={() => setIsApplicationFormOpen(true)}
                        className="mb-4 bg-blue-600 hover:bg-blue-700"
                      >
                        Apply for This Position
                      </Button>
                    </div>
                    
                    <div className="bg-white p-8 rounded-lg shadow-md">
                      <h2 className="text-2xl font-bold mb-2">{selectedJob.title}</h2>
                      <div className="flex items-center mb-4 text-gray-600">
                        <span className="mr-4">{selectedJob.department}</span>
                        <span>{selectedJob.location}</span>
                      </div>
                      <div className="prose max-w-none" dangerouslySetInnerHTML={{ 
                        __html: selectedJob.description.replace(/\n/g, '<br>') 
                      }} />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
        
        <HiringProcessSection />

        <JobApplicationForm 
          job={selectedJob}
          isOpen={isApplicationFormOpen} 
          onClose={() => setIsApplicationFormOpen(false)} 
        />
      </main>
      
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Careers;
