
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
import { User, FileText, Newspaper, Flag, Edit, Save } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";

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

      // For demo purposes - in a real app, this would fetch from a profiles table
      setProfile({
        name: data.session.user.email?.split('@')[0] || "User",
        title: "Team Member",
        bio: "This is my professional bio. I work at this company and contribute to various projects.",
        avatarUrl: "",
      });

      form.reset({
        name: data.session.user.email?.split('@')[0] || "User",
        title: "Team Member",
        bio: "This is my professional bio. I work at this company and contribute to various projects.",
        avatarUrl: "",
      });
      
      setLoading(false);
    };

    checkUser();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === "SIGNED_OUT") {
          navigate("/login");
        } else if (session) {
          setUser(session.user);
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [navigate, form]);

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
      // Cancel edit
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

  const handleProfileSubmit = (data: UserProfile) => {
    // In a real app, this would save to the database
    setProfile({
      ...data,
      avatarUrl: avatarPreview || profile.avatarUrl,
    });
    
    toast({
      title: "Profile updated",
      description: "Your profile has been updated successfully.",
    });
    
    setIsEditing(false);
    setAvatarFile(null);
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
                            
                            <Button type="submit" className="w-full flex items-center gap-2">
                              <Save className="h-4 w-4" />
                              Save Changes
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
                    <CardHeader>
                      <CardTitle>Job Postings</CardTitle>
                      <CardDescription>Manage job listings and applications.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">Job postings management content will go here.</p>
                    </CardContent>
                  </Card>
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
                      <CardDescription>Manage site-wide banner content.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">Banner management content will go here.</p>
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
