
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { Loader2, DownloadCloud, User, MapPin, Mail } from "lucide-react";
import { marked } from "marked";
import { Job } from "./JobList";

interface JobDetailProps {
  jobId: string;
  onBack: () => void;
}

interface Applicant {
  id: string;
  name: string;
  email: string;
  resume_url: string;
  submitted_at: string;
}

const JobDetail = ({ jobId, onBack }: JobDetailProps) => {
  const [job, setJob] = useState<Job | null>(null);
  const [applicants, setApplicants] = useState<Applicant[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingApplicants, setLoadingApplicants] = useState(true);

  useEffect(() => {
    fetchJobDetails();
    fetchApplicants();
  }, [jobId]);

  const fetchJobDetails = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("job_postings")
        .select("*")
        .eq("id", jobId)
        .single();

      if (error) throw error;
      setJob(data);
    } catch (error: any) {
      console.error("Error fetching job details:", error);
      toast({
        title: "Error",
        description: "Failed to load job details",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchApplicants = async () => {
    try {
      setLoadingApplicants(true);
      const { data, error } = await supabase
        .from("job_applicants")
        .select("*")
        .eq("job_id", jobId)
        .order("submitted_at", { ascending: false });

      if (error) throw error;
      setApplicants(data || []);
    } catch (error: any) {
      console.error("Error fetching applicants:", error);
      toast({
        title: "Error",
        description: "Failed to load applicants",
        variant: "destructive",
      });
    } finally {
      setLoadingApplicants(false);
    }
  };

  const downloadResume = async (resumeUrl: string, applicantName: string) => {
    try {
      const { data, error } = await supabase.storage
        .from("resumes")
        .download(resumeUrl);

      if (error) throw error;

      // Create a download link
      const url = window.URL.createObjectURL(data);
      const a = document.createElement("a");
      a.href = url;
      
      // Extract file extension from the URL
      const fileExtension = resumeUrl.split('.').pop() || 'pdf';
      a.download = `${applicantName.replace(/\s+/g, '_')}_resume.${fileExtension}`;
      
      document.body.appendChild(a);
      a.click();
      
      // Cleanup
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error: any) {
      console.error("Error downloading resume:", error);
      toast({
        title: "Download failed",
        description: error.message || "Failed to download resume",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-10">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!job) {
    return (
      <div className="text-center py-10">
        <p className="text-muted-foreground">Job not found</p>
        <Button onClick={onBack} variant="outline" className="mt-4">
          Back to Job Listings
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Button onClick={onBack} variant="outline">
        Back to Job Listings
      </Button>
      
      <Card>
        <CardHeader>
          <CardTitle>{job.title}</CardTitle>
          <CardDescription>
            <div className="flex items-center gap-2 mt-1">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span>{job.location}</span>
            </div>
            <div className="mt-2">
              Posted on {new Date(job.created_at).toLocaleDateString()} 
              {job.updated_at !== job.created_at && 
                ` • Updated on ${new Date(job.updated_at).toLocaleDateString()}`}
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div 
            className="prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: marked.parse(job.description) }}
          />
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <User className="mr-2 h-5 w-5" />
            Applicants
          </CardTitle>
          <CardDescription>
            {applicants.length} {applicants.length === 1 ? 'person' : 'people'} applied for this position
          </CardDescription>
        </CardHeader>
        <CardContent>
          {loadingApplicants ? (
            <div className="flex justify-center items-center py-6">
              <Loader2 className="h-6 w-6 animate-spin text-primary" />
            </div>
          ) : applicants.length === 0 ? (
            <div className="text-center py-6 text-muted-foreground">
              No applicants yet
            </div>
          ) : (
            <div className="space-y-4">
              {applicants.map((applicant) => (
                <div 
                  key={applicant.id}
                  className="flex items-center justify-between border p-4 rounded-lg"
                >
                  <div>
                    <div className="font-medium">{applicant.name}</div>
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <Mail className="mr-1 h-3 w-3" />
                      {applicant.email || "No email provided"}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      Applied on {new Date(applicant.submitted_at).toLocaleDateString()}
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => downloadResume(applicant.resume_url, applicant.name)}
                    className="flex items-center"
                  >
                    <DownloadCloud className="mr-2 h-4 w-4" />
                    Resume
                  </Button>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default JobDetail;
