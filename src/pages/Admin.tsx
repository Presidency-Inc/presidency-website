import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatusBar from "@/components/StatusBar";
import ScrollProgress from "@/components/ScrollProgress";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { User, FileText, Newspaper, Flag, Edit, Save, Plus } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import JobList, { Job } from "@/components/JobList";
import JobForm from "@/components/JobForm";
import JobDetail from "@/components/JobDetail";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import BannerForm from "@/components/BannerForm";

interface UserProfile {
  name: string;
  title: string;
  bio: string;
  avatarUrl: string;
}

const Admin = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState<UserProfile>({
    name: "",
    title: "",
    bio: "",
    avatarUrl: "",
  });
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [savingProfile, setSavingProfile] = useState(false);
  
  const [jobView, setJobView] = useState<"list" | "create" | "edit" | "detail">("list");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isJobDialogOpen, setIsJobDialogOpen] = useState(false);
  
  const navigate = useNavigate();

  const form = useForm<UserProfile>({
    defaultValues: {
      name: "",
      title: "",
      bio: "",
      avatarUrl: "",
    },
  });

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getSession();
      
      if (!data.session) {
        navigate("/login");
        return;
      }
      
      setUser(data.session.user);
      await fetchUserProfile(data.session.user.id);
      
      setLoading(false);
    };

    checkUser();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === "SIGNED_OUT") {
          navigate("/login");
        } else if (session) {
          setUser(session.user);
          await fetchUserProfile(session.user.id);
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [navigate]);

  const fetchUserProfile = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from("user_profiles")
        .select("*")
        .eq("id", userId)
        .single();

      if (error) {
        console.error("Error fetching profile:", error);
        return;
      }

      if (data) {
        const profileData = {
          name: data.name || "",
          title: data.title || "",
          bio: data.bio || "",
          avatarUrl: data.avatar_url || "",
        };
        
        setProfile(profileData);
        form.reset(profileData);
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Sign out successful",
      description: "You have been signed out.",
    });
    navigate("/");
  };

  const handleEditToggle = () => {
    if (isEditing) {
      form.reset(profile);
      setAvatarPreview(null);
      setAvatarFile(null);
    }
    setIsEditing(!isEditing);
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAvatarFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadAvatar = async (userId: string, file: File): Promise<string | null> => {
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${userId}-${Date.now()}.${fileExt}`;
      
      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(fileName, file, {
          upsert: true
        });

      if (uploadError) {
        console.error('Error uploading avatar:', uploadError);
        toast({
          title: "Upload Error",
          description: `Failed to upload avatar: ${uploadError.message}`,
          variant: "destructive",
        });
        return null;
      }

      const { data } = supabase.storage.from('avatars').getPublicUrl(fileName);
      return data.publicUrl;
    } catch (error) {
      console.error('Error uploading avatar:', error);
      return null;
    }
  };

  const handleProfileSubmit = async (data: UserProfile) => {
    if (!user) return;
    
    try {
      setSavingProfile(true);
      
      let avatarUrl = profile.avatarUrl;
      if (avatarFile) {
        const uploadedUrl = await uploadAvatar(user.id, avatarFile);
        if (uploadedUrl) {
          avatarUrl = uploadedUrl;
        }
      }
      
      const { error } = await supabase
        .from('user_profiles')
        .upsert({
          id: user.id,
          name: data.name,
          title: data.title,
          bio: data.bio,
          avatar_url: avatarUrl,
          updated_at: new Date().toISOString(),
        });

      if (error) {
        console.error('Error saving profile:', error);
        toast({
          title: "Error",
          description: "There was an error saving your profile.",
          variant: "destructive",
        });
        return;
      }

      const updatedProfile = {
        ...data,
        avatarUrl: avatarUrl,
      };
      
      setProfile(updatedProfile);
      form.reset(updatedProfile);
      
      toast({
        title: "Profile updated",
        description: "Your profile has been updated successfully.",
      });
      
      setIsEditing(false);
      setAvatarFile(null);
      setAvatarPreview(null);
    } catch (error) {
      console.error('Error saving profile:', error);
      toast({
        title: "Error",
        description: "There was an error saving your profile.",
        variant: "destructive",
      });
    } finally {
      setSavingProfile(false);
    }
  };

  const handleCreateJob = () => {
    setJobView("create");
    setIsJobDialogOpen(true);
  };

  const handleEditJob = (job: Job) => {
    setSelectedJob(job);
    setJobView("edit");
    setIsJobDialogOpen(true);
  };

  const handleViewJob = (job: Job) => {
    setSelectedJob(job);
    setJobView("detail");
  };

  const handleJobFormSuccess = () => {
    setIsJobDialogOpen(false);
    setJobView("list");
    setSelectedJob(null);
  };

  const handleBackToList = () => {
    setJobView("list");
    setSelectedJob(null);
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <StatusBar />
      <Navbar />
      <ScrollProgress />
      <main className="flex-grow bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg p-6">
            <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Admin Dashboard
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Welcome, {user?.email}
                </p>
              </div>
              <Button onClick={handleSignOut} variant="outline">
                Sign out
              </Button>
            </div>
            
            <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
              <Tabs defaultValue="profile" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="profile" className="flex items-center gap-2">
                    <User size={16} />
                    <span>Your Profile</span>
                  </TabsTrigger>
                  <TabsTrigger value="jobs" className="flex items-center gap-2">
                    <FileText size={16} />
                    <span>Job Postings</span>
                  </TabsTrigger>
                  <TabsTrigger value="blog" className="flex items-center gap-2">
                    <Newspaper size={16} />
                    <span>Blog</span>
                  </TabsTrigger>
                  <TabsTrigger value="banner" className="flex items-center gap-2">
                    <Flag size={16} />
                    <span>Blue Banner</span>
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="profile" className="mt-6">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <div>
                        <CardTitle>Your Profile</CardTitle>
                        <CardDescription>Manage your profile information here.</CardDescription>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={handleEditToggle}
                        className="flex items-center gap-2"
                        disabled={savingProfile}
                      >
                        {isEditing ? (
                          <>
                            <Edit className="h-4 w-4" />
                            Cancel
                          </>
                        ) : (
                          <>
                            <Edit className="h-4 w-4" />
                            Edit Profile
                          </>
                        )}
                      </Button>
                    </CardHeader>
                    <CardContent>
                      {isEditing ? (
                        <Form {...form}>
                          <form onSubmit={form.handleSubmit(handleProfileSubmit)} className="space-y-6">
                            <div className="flex flex-col items-center mb-6">
                              <div className="relative">
                                <Avatar className="h-24 w-24">
                                  {avatarPreview ? (
                                    <AvatarImage src={avatarPreview} alt="Preview" />
                                  ) : profile.avatarUrl ? (
                                    <AvatarImage src={profile.avatarUrl} alt={profile.name} />
                                  ) : (
                                    <AvatarFallback className="text-lg">
                                      {profile.name?.charAt(0)?.toUpperCase() || "U"}
                                    </AvatarFallback>
                                  )}
                                </Avatar>
                                <Label 
                                  htmlFor="avatar-upload" 
                                  className="absolute bottom-0 right-0 bg-primary text-white p-1 rounded-full cursor-pointer"
                                >
                                  <Edit className="h-4 w-4" />
                                </Label>
                                <Input 
                                  id="avatar-upload" 
                                  type="file" 
                                  accept="image/*" 
                                  className="hidden" 
                                  onChange={handleAvatarChange}
                                />
                              </div>
                              <p className="text-xs text-gray-500 mt-2">Click the icon to upload a new image</p>
                            </div>
                            
                            <div className="space-y-4">
                              <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                      <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              
                              <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Title</FormLabel>
                                    <FormControl>
                                      <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              
                              <FormField
                                control={form.control}
                                name="bio"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Bio</FormLabel>
                                    <FormControl>
                                      <Textarea {...field} rows={4} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                            
                            <Button 
                              type="submit" 
                              className="w-full flex items-center gap-2"
                              disabled={savingProfile}
                            >
                              {savingProfile ? (
                                <>
                                  <div className="w-4 h-4 border-t-2 border-b-2 border-white rounded-full animate-spin" />
                                  Saving...
                                </>
                              ) : (
                                <>
                                  <Save className="h-4 w-4" />
                                  Save Changes
                                </>
                              )}
                            </Button>
                          </form>
                        </Form>
                      ) : (
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="flex flex-col items-center">
                            <Avatar className="h-24 w-24">
                              {profile.avatarUrl ? (
                                <AvatarImage src={profile.avatarUrl} alt={profile.name} />
                              ) : (
                                <AvatarFallback className="text-lg">
                                  {profile.name?.charAt(0)?.toUpperCase() || "U"}
                                </AvatarFallback>
                              )}
                            </Avatar>
                          </div>
                          <div className="flex-1 space-y-4">
                            <div>
                              <h3 className="text-xl font-semibold">{profile.name}</h3>
                              <p className="text-gray-500">{profile.title}</p>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-gray-500">Bio</h4>
                              <p className="mt-1">{profile.bio}</p>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-gray-500">Email</h4>
                              <p className="mt-1">{user?.email}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="jobs" className="mt-6">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <div>
                        <CardTitle>Job Postings</CardTitle>
                        <CardDescription>Manage job listings and applications.</CardDescription>
                      </div>
                      {jobView === "list" && (
                        <Button 
                          onClick={handleCreateJob}
                          className="flex items-center gap-2"
                        >
                          <Plus className="h-4 w-4" />
                          Create Job
                        </Button>
                      )}
                    </CardHeader>
                    <CardContent>
                      {jobView === "list" && (
                        <JobList 
                          onEdit={handleEditJob} 
                          onView={handleViewJob} 
                        />
                      )}
                      
                      {jobView === "detail" && selectedJob && (
                        <JobDetail 
                          jobId={selectedJob.id} 
                          onBack={handleBackToList} 
                        />
                      )}
                    </CardContent>
                  </Card>
                  
                  <Dialog open={isJobDialogOpen} onOpenChange={setIsJobDialogOpen}>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>
                          {jobView === "create" ? "Create New Job Posting" : "Edit Job Posting"}
                        </DialogTitle>
                      </DialogHeader>
                      <JobForm 
                        onSuccess={handleJobFormSuccess}
                        initialData={jobView === "edit" ? selectedJob : undefined}
                      />
                    </DialogContent>
                  </Dialog>
                </TabsContent>
                
                <TabsContent value="blog" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Blog</CardTitle>
                      <CardDescription>Manage blog posts and content.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">Blog management content will go here.</p>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="banner" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Blue Banner</CardTitle>
                      <CardDescription>Manage the content of the blue banner that appears at the top of the site.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <BannerForm />
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;
