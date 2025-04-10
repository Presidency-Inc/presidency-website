
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useForm } from "react-hook-form";
import { toast } from "@/components/ui/use-toast";
import { 
  Form, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormControl, 
  FormDescription,
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter,
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ImagePlus, Image, FileText, Twitter, Facebook, Globe, RefreshCw } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { PageMetadata } from "@/hooks/usePageMetadata";

interface OpenGraphFormProps {
  onSuccess?: () => void;
}

const OpenGraphForm = ({ onSuccess }: OpenGraphFormProps) => {
  const [pages, setPages] = useState<PageMetadata[]>([]);
  const [selectedPage, setSelectedPage] = useState<PageMetadata | null>(null);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [selectedTab, setSelectedTab] = useState('open-graph');
  
  const form = useForm<PageMetadata>({
    defaultValues: {
      title: "",
      description: "",
      image_url: "",
      og_type: "website",
      twitter_card: "summary_large_image",
    }
  });

  // Function to extract routes from the app
  const extractRoutes = () => {
    return [
      "/",
      "/products/leapfrog",
      "/products/omniflow",
      "/products/kube8r",
      "/services/databricks",
      "/services/ai",
      "/services/data",
      "/talent",
      "/talent/nearshore",
      "/careers",
      "/about",
      "/contact-us",
      "/privacy",
      "/terms",
      "/sitemap",
      "/cookies"
    ];
  };
  
  useEffect(() => {
    fetchPages();
  }, []);
  
  const fetchPages = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('page_metadata')
        .select('*')
        .order('route');
      
      if (error) {
        throw error;
      }
      
      // Check if we need to create any missing page metadata records
      if (data) {
        const existingRoutes = data.map((page: any) => page.route);
        const appRoutes = extractRoutes();
        
        const missingRoutes = appRoutes.filter(route => !existingRoutes.includes(route));
        
        // Create metadata for missing routes
        for (const route of missingRoutes) {
          await createDefaultMetadata(route);
        }
        
        // If we added routes, fetch again
        if (missingRoutes.length > 0) {
          fetchPages();
          return;
        }
        
        // Set pages
        setPages(data as PageMetadata[]);
        
        if (data.length > 0) {
          handlePageSelect(data[0] as PageMetadata);
        }
      }
    } catch (error) {
      console.error('Error fetching pages:', error);
      toast({
        title: "Error",
        description: "Could not load page metadata",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };
  
  const createDefaultMetadata = async (route: string) => {
    try {
      const title = route === '/' 
        ? "Presidency Solutions | AI & Data Engineering Experts" 
        : `${route.split("/").pop()?.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")} | Presidency Solutions`;
        
      const newMetadata = {
        route,
        title,
        description: "Presidency Solutions helps organizations maximize their impact with AI, Data Engineering, Databricks Solutions, Cloud Modernization, and Talent Solutions.",
        image_url: "/lovable-uploads/16521bca-3a39-4376-8e26-15995aa57549.png",
        og_type: "website",
        twitter_card: "summary_large_image"
      };
      
      const { error } = await supabase
        .from('page_metadata')
        .insert(newMetadata);
      
      if (error) {
        console.error('Error creating default metadata:', error);
      }
    } catch (error) {
      console.error('Error creating default metadata:', error);
    }
  };
  
  const handlePageSelect = (page: PageMetadata) => {
    setSelectedPage(page);
    form.reset({
      id: page.id,
      route: page.route,
      title: page.title,
      description: page.description,
      image_url: page.image_url,
      og_type: page.og_type || "website",
      twitter_card: page.twitter_card || "summary_large_image",
    });
    setImagePreview(page.image_url);
  };
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value;
    form.setValue('image_url', url);
    setImagePreview(url);
  };

  const onSubmit = async (data: PageMetadata) => {
    if (!selectedPage) return;
    
    setSaving(true);
    try {
      // Optimize save operation by only updating the necessary fields
      const updatedFields = {
        title: data.title,
        description: data.description,
        image_url: data.image_url,
        og_type: data.og_type,
        twitter_card: data.twitter_card,
        updated_at: new Date().toISOString(),
      };
      
      const { error } = await supabase
        .from('page_metadata')
        .update(updatedFields)
        .eq('id', selectedPage.id);
      
      if (error) {
        throw error;
      }
      
      // Update the local state to avoid unnecessary refetch
      const updatedPages = pages.map(page => {
        if (page.id === selectedPage.id) {
          return { ...page, ...updatedFields };
        }
        return page;
      });
      
      setPages(updatedPages);
      
      // Update selected page
      setSelectedPage({ ...selectedPage, ...updatedFields });
      
      toast({
        title: "Success",
        description: "Page metadata updated successfully",
      });
      
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error('Error updating page metadata:', error);
      toast({
        title: "Error",
        description: "Failed to update page metadata",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };
  
  const handleResetToDefaults = () => {
    if (!selectedPage) return;
    
    const defaultValues = {
      title: selectedPage.route === "/" 
        ? "Presidency Solutions | AI & Data Engineering Experts" 
        : `${selectedPage.route.split("/").pop()?.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")} | Presidency Solutions`,
      description: "Presidency Solutions helps organizations maximize their impact with AI, Data Engineering, Databricks Solutions, Cloud Modernization, and Talent Solutions.",
      image_url: "/lovable-uploads/16521bca-3a39-4376-8e26-15995aa57549.png",
      og_type: "website",
      twitter_card: "summary_large_image",
    };
    
    form.reset({ ...selectedPage, ...defaultValues });
    setImagePreview(defaultValues.image_url);
  };

  return (
    <TooltipProvider>
      <div>
        {loading ? (
          <div className="flex justify-center p-8">
            <div className="w-8 h-8 border-t-2 border-b-2 border-gray-900 rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow p-4">
                <h3 className="text-sm font-medium mb-4">Select Page</h3>
                <ScrollArea className="h-[400px]">
                  <div className="space-y-1">
                    {pages.map((page) => (
                      <Button
                        key={page.id}
                        variant={selectedPage?.id === page.id ? "default" : "ghost"}
                        className="w-full justify-start text-left"
                        onClick={() => handlePageSelect(page)}
                      >
                        <Globe className="mr-2 h-4 w-4" />
                        {page.route === "/" ? "Home Page" : page.route}
                      </Button>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </div>
            
            <div className="md:col-span-2">
              {selectedPage ? (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                      <span>{selectedPage.route === "/" ? "Home Page" : selectedPage.route}</span>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={handleResetToDefaults}
                            className="flex items-center gap-2"
                          >
                            <RefreshCw className="h-4 w-4" />
                            <span className="hidden sm:inline">Reset to Defaults</span>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Reset to default values</p>
                        </TooltipContent>
                      </Tooltip>
                    </CardTitle>
                    <CardDescription>
                      Configure Open Graph and Twitter Card metadata for this page
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Tabs 
                      defaultValue="open-graph" 
                      value={selectedTab}
                      onValueChange={setSelectedTab}
                    >
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="open-graph" className="flex items-center gap-2">
                          <Facebook className="h-4 w-4" />
                          Open Graph
                        </TabsTrigger>
                        <TabsTrigger value="twitter" className="flex items-center gap-2">
                          <Twitter className="h-4 w-4" />
                          Twitter Card
                        </TabsTrigger>
                      </TabsList>
                      
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-6">
                          <TabsContent value="open-graph">
                            <div className="space-y-6">
                              <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Title</FormLabel>
                                    <FormControl>
                                      <Input {...field} placeholder="Page title for Open Graph" />
                                    </FormControl>
                                    <FormDescription>
                                      This will be used for the og:title meta tag
                                    </FormDescription>
                                  </FormItem>
                                )}
                              />
                              
                              <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                      <Textarea 
                                        {...field} 
                                        placeholder="Page description for Open Graph"
                                        rows={3}
                                      />
                                    </FormControl>
                                    <FormDescription>
                                      This will be used for the og:description meta tag
                                    </FormDescription>
                                  </FormItem>
                                )}
                              />
                              
                              <FormField
                                control={form.control}
                                name="image_url"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Image URL</FormLabel>
                                    <FormControl>
                                      <div className="flex gap-2">
                                        <Input 
                                          {...field} 
                                          placeholder="URL for Open Graph image"
                                          onChange={(e) => handleImageChange(e)}
                                        />
                                      </div>
                                    </FormControl>
                                    <FormDescription>
                                      This will be used for the og:image meta tag. Use an absolute URL or a path like /lovable-uploads/image.png
                                    </FormDescription>
                                  </FormItem>
                                )}
                              />
                              
                              {imagePreview && (
                                <div className="mt-4">
                                  <p className="text-sm text-gray-500 mb-2">Image Preview:</p>
                                  <div className="border rounded-md overflow-hidden max-w-xs">
                                    <img 
                                      src={imagePreview.startsWith('http') ? imagePreview : imagePreview} 
                                      alt="Preview" 
                                      className="w-full h-auto"
                                      onError={(e) => {
                                        (e.target as HTMLImageElement).src = '/placeholder.svg';
                                      }}
                                    />
                                  </div>
                                </div>
                              )}
                              
                              <FormField
                                control={form.control}
                                name="og_type"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Content Type</FormLabel>
                                    <Select 
                                      onValueChange={field.onChange} 
                                      defaultValue={field.value}
                                      value={field.value}
                                    >
                                      <FormControl>
                                        <SelectTrigger>
                                          <SelectValue placeholder="Select content type" />
                                        </SelectTrigger>
                                      </FormControl>
                                      <SelectContent>
                                        <SelectItem value="website">Website</SelectItem>
                                        <SelectItem value="article">Article</SelectItem>
                                        <SelectItem value="product">Product</SelectItem>
                                        <SelectItem value="profile">Profile</SelectItem>
                                      </SelectContent>
                                    </Select>
                                    <FormDescription>
                                      This will be used for the og:type meta tag
                                    </FormDescription>
                                  </FormItem>
                                )}
                              />
                            </div>
                          </TabsContent>
                          
                          <TabsContent value="twitter">
                            <div className="space-y-6">
                              <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Title</FormLabel>
                                    <FormControl>
                                      <Input {...field} placeholder="Page title for Twitter Card" />
                                    </FormControl>
                                    <FormDescription>
                                      This will be used for the twitter:title meta tag
                                    </FormDescription>
                                  </FormItem>
                                )}
                              />
                              
                              <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                      <Textarea 
                                        {...field} 
                                        placeholder="Page description for Twitter Card"
                                        rows={3}
                                      />
                                    </FormControl>
                                    <FormDescription>
                                      This will be used for the twitter:description meta tag
                                    </FormDescription>
                                  </FormItem>
                                )}
                              />
                              
                              <FormField
                                control={form.control}
                                name="image_url"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Image URL</FormLabel>
                                    <FormControl>
                                      <div className="flex gap-2">
                                        <Input 
                                          {...field} 
                                          placeholder="URL for Twitter Card image"
                                          onChange={(e) => handleImageChange(e)}
                                        />
                                      </div>
                                    </FormControl>
                                    <FormDescription>
                                      This will be used for the twitter:image meta tag
                                    </FormDescription>
                                  </FormItem>
                                )}
                              />
                              
                              {imagePreview && (
                                <div className="mt-4">
                                  <p className="text-sm text-gray-500 mb-2">Image Preview:</p>
                                  <div className="border rounded-md overflow-hidden max-w-xs">
                                    <img 
                                      src={imagePreview.startsWith('http') ? imagePreview : imagePreview} 
                                      alt="Preview" 
                                      className="w-full h-auto"
                                      onError={(e) => {
                                        (e.target as HTMLImageElement).src = '/placeholder.svg';
                                      }}
                                    />
                                  </div>
                                </div>
                              )}
                              
                              <FormField
                                control={form.control}
                                name="twitter_card"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Card Type</FormLabel>
                                    <Select 
                                      onValueChange={field.onChange} 
                                      defaultValue={field.value}
                                      value={field.value}
                                    >
                                      <FormControl>
                                        <SelectTrigger>
                                          <SelectValue placeholder="Select card type" />
                                        </SelectTrigger>
                                      </FormControl>
                                      <SelectContent>
                                        <SelectItem value="summary">Summary</SelectItem>
                                        <SelectItem value="summary_large_image">Summary with Large Image</SelectItem>
                                        <SelectItem value="app">App</SelectItem>
                                        <SelectItem value="player">Player</SelectItem>
                                      </SelectContent>
                                    </Select>
                                    <FormDescription>
                                      This will be used for the twitter:card meta tag
                                    </FormDescription>
                                  </FormItem>
                                )}
                              />
                            </div>
                          </TabsContent>
                          
                          <CardFooter className="px-0 pb-0">
                            <Button 
                              type="submit" 
                              className="ml-auto"
                              disabled={saving}
                            >
                              {saving ? (
                                <>
                                  <span className="mr-2">Saving</span>
                                  <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                </>
                              ) : (
                                "Save Changes"
                              )}
                            </Button>
                          </CardFooter>
                        </form>
                      </Form>
                    </Tabs>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardContent className="p-8 text-center text-gray-500">
                    <p>Select a page to edit its metadata</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        )}
      </div>
    </TooltipProvider>
  );
};

export default OpenGraphForm;
