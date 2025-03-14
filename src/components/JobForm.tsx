
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface JobFormProps {
  onSuccess: () => void;
  initialData?: {
    id: string;
    title: string;
    description: string;
    location: string;
    department: string;
  };
}

interface JobFormValues {
  title: string;
  description: string;
  location: string;
  department: string;
}

const DEPARTMENTS = [
  "Engineering",
  "Design",
  "Product",
  "Marketing",
  "Sales",
  "Customer Support",
  "Operations",
  "Human Resources",
  "Finance",
  "Legal",
  "General"
];

const JobForm = ({ onSuccess, initialData }: JobFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isEditing = !!initialData;

  const form = useForm<JobFormValues>({
    defaultValues: {
      title: initialData?.title || "",
      description: initialData?.description || "",
      location: initialData?.location || "Remote",
      department: initialData?.department || "General",
    },
  });

  const onSubmit = async (values: JobFormValues) => {
    try {
      setIsSubmitting(true);
      
      if (isEditing) {
        const { error } = await supabase
          .from("job_postings")
          .update({
            title: values.title,
            description: values.description,
            location: values.location,
            department: values.department,
            updated_at: new Date().toISOString(),
          })
          .eq("id", initialData.id);

        if (error) throw error;
        
        toast({
          title: "Job updated",
          description: "The job posting has been updated successfully.",
        });
      } else {
        const { error } = await supabase
          .from("job_postings")
          .insert({
            title: values.title,
            description: values.description,
            location: values.location,
            department: values.department,
            created_by: (await supabase.auth.getUser()).data.user?.id,
          });

        if (error) throw error;
        
        toast({
          title: "Job created",
          description: "The job posting has been created successfully.",
        });
      }
      
      form.reset();
      onSuccess();
    } catch (error: any) {
      console.error("Error submitting job form:", error);
      toast({
        title: "Error",
        description: error.message || "There was an error saving the job posting.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Job Title</FormLabel>
              <FormControl>
                <Input {...field} placeholder="e.g. Senior React Developer" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="department"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Department</FormLabel>
              <Select 
                onValueChange={field.onChange} 
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a department" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {DEPARTMENTS.map((dept) => (
                    <SelectItem key={dept} value={dept}>
                      {dept}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Input {...field} placeholder="e.g. Remote, New York, London" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Job Description (Markdown)</FormLabel>
              <FormControl>
                <Textarea 
                  {...field} 
                  placeholder="Describe the job position using markdown..." 
                  className="min-h-[200px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button
          type="submit"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {isEditing ? "Updating..." : "Creating..."}
            </>
          ) : (
            isEditing ? "Update Job Posting" : "Create Job Posting"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default JobForm;
