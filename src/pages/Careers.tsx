
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Job } from "@/components/JobList";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from "@/components/ui/dialog";
import { Loader2, MapPin, Mail, User, UploadCloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { marked } from "marked";
import { toast } from "@/components/ui/use-toast";

const CareerPage = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [viewJobModalOpen, setViewJobModalOpen] = useState(false);
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  
  // Application form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [resume, setResume] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("job_postings")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setJobs(data || []);
    } catch (error: any) {
      console.error("Error fetching jobs:", error);
      toast({
        title: "Error",
        description: "Failed to load job postings",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleViewJob = (job: Job) => {
    setSelectedJob(job);
    setViewJobModalOpen(true);
  };

  const handleApplyNow = () => {
    setViewJobModalOpen(false);
    setApplyModalOpen(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      // Only accept PDF, DOC, DOCX files
      const fileType = file.type;
      if (
        fileType === "application/pdf" || 
        fileType === "application/msword" || 
        fileType === "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      ) {
        setResume(file);
      } else {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF, DOC, or DOCX file",
          variant: "destructive",
        });
      }
    }
  };

  const handleSubmitApplication = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedJob) return;
    if (!name || !email || !resume) {
      toast({
        title: "Missing required fields",
        description: "Please fill out all fields and upload a resume",
        variant: "destructive",
      });
      return;
    }

    try {
      setSubmitting(true);
      
      // Upload resume to Supabase Storage
      const timestamp = new Date().getTime();
      const fileExt = resume.name.split('.').pop();
      const filePath = `${timestamp}-${name.replace(/\s+/g, '_')}.${fileExt}`;
      
      const { error: uploadError } = await supabase.storage
        .from('resumes')
        .upload(filePath, resume);

      if (uploadError) throw uploadError;

      // Save applicant data to database
      const { error: applicationError } = await supabase
        .from('job_applicants')
        .insert({
          job_id: selectedJob.id,
          name,
          email,
          resume_url: filePath,
        });

      if (applicationError) throw applicationError;

      // Success
      toast({
        title: "Application submitted",
        description: "Your application has been submitted successfully",
      });
      
      // Reset form
      setName("");
      setEmail("");
      setResume(null);
      setApplyModalOpen(false);
    } catch (error: any) {
      console.error("Error submitting application:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to submit application",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Join Our Team
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
              Discover exciting opportunities and be part of something great.
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : jobs.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-gray-500">No job openings available at this time.</p>
              <p className="mt-2 text-gray-400">Check back later for new opportunities.</p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {jobs.map((job) => (
                <div 
                  key={job.id} 
                  className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="p-6">
                    <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
                    <div className="flex items-center text-gray-500 mb-4">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{job.location}</span>
                    </div>
                    <p className="text-gray-600 mb-6 line-clamp-3">
                      {job.description.replace(/#{1,6}\s|[*_~`]|\[.*\]\(.*\)/g, '').substring(0, 150)}...
                    </p>
                    <Button 
                      onClick={() => handleViewJob(job)} 
                      className="w-full"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />

      {/* View Job Details Modal */}
      <Dialog open={viewJobModalOpen} onOpenChange={setViewJobModalOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedJob && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedJob.title}</DialogTitle>
                <DialogDescription>
                  <div className="flex items-center gap-2 mt-1">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{selectedJob.location}</span>
                  </div>
                  <div className="mt-2">
                    Posted on {new Date(selectedJob.created_at).toLocaleDateString()}
                  </div>
                </DialogDescription>
              </DialogHeader>
              <div 
                className="prose prose-sm max-w-none mt-4"
                dangerouslySetInnerHTML={{ __html: marked.parse(selectedJob.description) }}
              />
              <div className="mt-6 flex justify-end">
                <Button onClick={handleApplyNow}>
                  Apply Now
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Apply for Job Modal */}
      <Dialog open={applyModalOpen} onOpenChange={setApplyModalOpen}>
        <DialogContent className="max-w-md">
          {selectedJob && (
            <>
              <DialogHeader>
                <DialogTitle>Apply for {selectedJob.title}</DialogTitle>
                <DialogDescription>
                  Fill out the form below to submit your application
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmitApplication} className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="name">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2" />
                      Full Name
                    </div>
                  </Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-2" />
                      Email Address
                    </div>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="resume">
                    <div className="flex items-center">
                      <UploadCloud className="h-4 w-4 mr-2" />
                      Resume
                    </div>
                  </Label>
                  <div className="border-2 border-dashed rounded-md px-6 py-8 border-gray-300 hover:border-gray-400 transition-colors">
                    <div className="text-center">
                      <UploadCloud className="mx-auto h-12 w-12 text-gray-300" />
                      <div className="mt-2">
                        <label
                          htmlFor="resume-upload"
                          className="cursor-pointer text-primary hover:text-primary/80"
                        >
                          <span>Upload a file</span>
                          <Input
                            id="resume-upload"
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
                            className="sr-only"
                          />
                        </label>
                        <p className="text-xs text-muted-foreground mt-1">
                          PDF, DOC, or DOCX up to 10MB
                        </p>
                      </div>
                    </div>
                    {resume && (
                      <div className="mt-2 text-center text-sm text-muted-foreground">
                        Selected: {resume.name}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex justify-end gap-2 mt-6">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setApplyModalOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={submitting}
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Submit Application"
                    )}
                  </Button>
                </div>
              </form>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CareerPage;
