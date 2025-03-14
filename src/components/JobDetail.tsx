
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { Loader2, DownloadCloud, User, MapPin, Mail, Trash2, AlertCircle } from "lucide-react";
import { marked } from "marked";
import { Job } from "./JobList";
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

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
  const [applicantToDelete, setApplicantToDelete] = useState<Applicant | null>(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

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
      setJob(data as Job);
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

  const handleDeleteApplicant = (applicant: Applicant) => {
    setApplicantToDelete(applicant);
    setIsDeleteDialogOpen(true);
  };

  const confirmDeleteApplicant = async () => {
    if (!applicantToDelete) return;
    
    try {
      setIsDeleting(true);
      
      // First delete the resume from storage
      const { error: storageError } = await supabase.storage
        .from("resumes")
        .remove([applicantToDelete.resume_url]);
      
      if (storageError) {
        console.error("Error deleting resume:", storageError);
        // Continue with deleting the applicant record even if resume deletion fails
      }
      
      // Then delete the applicant record
      const { error } = await supabase
        .from("job_applicants")
        .delete()
        .eq("id", applicantToDelete.id);
      
      if (error) throw error;
      
      // Update the applicants list
      setApplicants(applicants.filter(a => a.id !== applicantToDelete.id));
      
      toast({
        title: "Applicant deleted",
        description: `${applicantToDelete.name}'s application has been deleted.`,
      });
      
      setIsDeleteDialogOpen(false);
      setApplicantToDelete(null);
    } catch (error: any) {
      console.error("Error deleting applicant:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to delete applicant",
        variant: "destructive",
      });
    } finally {
      setIsDeleting(false);
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
            <div className="mt-1">
              <span className="text-muted-foreground">{job.department}</span>
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
                  <div className="flex items-center gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => downloadResume(applicant.resume_url, applicant.name)}
                      className="flex items-center"
                    >
                      <DownloadCloud className="mr-2 h-4 w-4" />
                      Resume
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDeleteApplicant(applicant)}
                      className="flex items-center text-destructive hover:text-destructive"
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center">
              <AlertCircle className="mr-2 h-5 w-5 text-destructive" />
              Delete Applicant
            </AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete {applicantToDelete?.name}'s application? 
              This action cannot be undone and will permanently remove their data and resume.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isDeleting}>Cancel</AlertDialogCancel>
            <AlertDialogAction 
              onClick={confirmDeleteApplicant}
              disabled={isDeleting}
              className="bg-destructive hover:bg-destructive/90"
            >
              {isDeleting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Deleting...
                </>
              ) : (
                "Delete"
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default JobDetail;
