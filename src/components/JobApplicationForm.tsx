
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, Upload } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Job } from "./JobList";

interface JobApplicationFormProps {
  job: Job | null;
  isOpen: boolean;
  onClose: () => void;
}

interface ApplicationFormValues {
  name: string;
  email: string;
  phone: string;
  coverLetter: string;
  resume: File | null;
}

const JobApplicationForm = ({ job, isOpen, onClose }: JobApplicationFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const form = useForm<ApplicationFormValues>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      coverLetter: "",
      resume: null,
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setResumeFile(file);
    form.setValue("resume", file);
  };

  const onSubmit = async (values: ApplicationFormValues) => {
    if (!job) return;
    if (!resumeFile) {
      toast({
        title: "Resume required",
        description: "Please upload your resume to apply for this position.",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsSubmitting(true);

      // 1. Upload resume to Supabase storage
      const fileExt = resumeFile.name.split('.').pop();
      const filePath = `${Date.now()}_${values.name.replace(/\s+/g, '_')}.${fileExt}`;
      
      const { error: uploadError, data: uploadData } = await supabase.storage
        .from('resumes')
        .upload(filePath, resumeFile);

      if (uploadError) throw uploadError;

      // 2. Store application in database
      const { error } = await supabase
        .from("job_applicants")
        .insert({
          job_id: job.id,
          name: values.name,
          email: values.email,
          phone: values.phone,
          cover_letter: values.coverLetter,
          resume_url: filePath,
          submitted_at: new Date().toISOString(),
        });

      if (error) throw error;
      
      form.reset();
      setResumeFile(null);
      
      toast({
        title: "Application submitted",
        description: "Your application has been submitted successfully. We'll be in touch soon!",
      });
      
      onClose();
    } catch (error: any) {
      console.error("Error submitting application:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to submit your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md md:max-w-lg">
        <DialogHeader>
          <DialogTitle>Apply for {job?.title}</DialogTitle>
          <DialogDescription>
            Fill out the form below to apply for this position at Presidency Solutions.
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              rules={{ required: "Name is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="John Doe" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              rules={{ 
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} type="email" placeholder="john.doe@example.com" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="+1 (123) 456-7890" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="coverLetter"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cover Letter</FormLabel>
                  <FormControl>
                    <Textarea 
                      {...field} 
                      placeholder="Tell us why you're interested in this position and what makes you a good fit..."
                      className="min-h-[100px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="resume"
              rules={{ required: "Resume is required" }}
              render={({ field: { onChange, ...field } }) => (
                <FormItem>
                  <FormLabel>Resume</FormLabel>
                  <div className="flex flex-col gap-2">
                    <Input
                      id="resume"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="cursor-pointer"
                    />
                    {resumeFile && (
                      <p className="text-sm text-muted-foreground">
                        {resumeFile.name} ({Math.round(resumeFile.size / 1024)} KB)
                      </p>
                    )}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="pt-4">
              <Button
                type="submit"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Upload className="mr-2 h-4 w-4" />
                    Submit Application
                  </>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default JobApplicationForm;
