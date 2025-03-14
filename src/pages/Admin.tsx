
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
import { User, FileText, Newspaper, Flag } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Admin = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getSession();
      
      if (!data.session) {
        navigate("/login");
        return;
      }
      
      setUser(data.session.user);
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
  }, [navigate]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Sign out successful",
      description: "You have been signed out.",
    });
    navigate("/");
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
                    <CardHeader>
                      <CardTitle>Your Profile</CardTitle>
                      <CardDescription>Manage your profile information here.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">Profile management content will go here.</p>
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
