
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Form, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormControl, 
  FormMessage 
} from "@/components/ui/form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileImage, Plus, Save, Trash } from "lucide-react";
import { marked } from "marked";

interface BlogFormProps {
  initialData?: Blog;
  onSuccess: () => void;
  onCancel: () => void;
}

export interface Tag {
  id: string;
  name: string;
}

export interface Blog {
  id: string;
  title: string;
  slug: string;
  description: string;
  banner_image: string;
  content: string;
  created_by: string;
  created_at: string;
  updated_at: string;
  tags?: Tag[];
}

// Configure marked for proper rendering of headings and line breaks
marked.setOptions({
  breaks: true,     // Enable line breaks
  gfm: true,        // Enable GitHub Flavored Markdown
});

const BlogForm = ({ initialData, onSuccess, onCancel }: BlogFormProps) => {
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState<string>("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [availableTags, setAvailableTags] = useState<Tag[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [newTagName, setNewTagName] = useState("");

  const isEditing = !!initialData?.id;

  const form = useForm({
    defaultValues: {
      title: initialData?.title || "",
      slug: initialData?.slug || "",
      description: initialData?.description || "",
      content: initialData?.content || "",
    }
  });

  const { watch } = form;
  const content = watch("content");

  useEffect(() => {
    // Use a custom renderer to ensure proper heading rendering
    const renderer = new marked.Renderer();
    
    // Ensure headers get proper HTML tags with appropriate styling
    renderer.heading = (text, level) => {
      return `<h${level} class="mt-6 mb-4 font-bold">${text}</h${level}>`;
    };
    
    // Enhance paragraph rendering for better spacing
    renderer.paragraph = (text) => {
      return `<p class="mb-4">${text}</p>`;
    };
    
    const rendered = marked.parse(content || "", {
      renderer: renderer
    });
    
    setPreview(rendered as string);
  }, [content]);

  useEffect(() => {
    const fetchTags = async () => {
      const { data, error } = await supabase
        .from('blog_tags')
        .select('*')
        .order('name');

      if (error) {
        console.error('Error fetching tags:', error);
        return;
      }

      if (data) {
        setAvailableTags(data);
      }
    };

    fetchTags();

    if (isEditing && initialData?.id) {
      const fetchPostTags = async () => {
        const { data, error } = await supabase
          .from('blog_posts_tags')
          .select('tag_id')
          .eq('blog_post_id', initialData.id);

        if (error) {
          console.error('Error fetching post tags:', error);
          return;
        }

        if (data) {
          setSelectedTags(data.map(item => item.tag_id));
        }
      };

      fetchPostTags();
    }

    if (isEditing && initialData?.banner_image) {
      setImagePreview(initialData.banner_image);
    }
  }, [isEditing, initialData]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTagToggle = (tagId: string) => {
    setSelectedTags(prev => 
      prev.includes(tagId) 
        ? prev.filter(id => id !== tagId)
        : [...prev, tagId]
    );
  };

  const handleAddTag = async () => {
    if (!newTagName.trim()) return;

    try {
      const { data, error } = await supabase
        .from('blog_tags')
        .insert({ name: newTagName.trim() })
        .select()
        .single();

      if (error) {
        toast({
          title: "Error",
          description: `Failed to add tag: ${error.message}`,
          variant: "destructive",
        });
        return;
      }

      if (data) {
        setAvailableTags(prev => [...prev, data]);
        setSelectedTags(prev => [...prev, data.id]);
        setNewTagName("");
      }
    } catch (error) {
      console.error('Error adding tag:', error);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    form.setValue("title", title);
    
    if (!isEditing || !form.getValues("slug")) {
      form.setValue("slug", generateSlug(title));
    }
  };

  const uploadBannerImage = async (file: File): Promise<string | null> => {
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      
      const { error: uploadError } = await supabase.storage
        .from('blog_images')
        .upload(fileName, file, {
          upsert: true
        });

      if (uploadError) {
        console.error('Error uploading image:', uploadError);
        toast({
          title: "Upload Error",
          description: `Failed to upload image: ${uploadError.message}`,
          variant: "destructive",
        });
        return null;
      }

      const { data } = supabase.storage.from('blog_images').getPublicUrl(fileName);
      return data.publicUrl;
    } catch (error) {
      console.error('Error uploading image:', error);
      return null;
    }
  };

  const handleSubmit = async (data: any) => {
    if (!imageFile && !imagePreview) {
      toast({
        title: "Missing Image",
        description: "Please upload a banner image for the blog post.",
        variant: "destructive",
      });
      return;
    }

    try {
      setLoading(true);
      
      let bannerImageUrl = initialData?.banner_image || "";
      if (imageFile) {
        const uploadedUrl = await uploadBannerImage(imageFile);
        if (!uploadedUrl) return;
        bannerImageUrl = uploadedUrl;
      }

      const { data: userData } = await supabase.auth.getUser();
      if (!userData.user) {
        toast({
          title: "Authentication Error",
          description: "You must be logged in to create or edit blog posts.",
          variant: "destructive",
        });
        return;
      }

      const blogData = {
        title: data.title,
        slug: data.slug,
        description: data.description,
        content: data.content,
        banner_image: bannerImageUrl,
        updated_at: new Date().toISOString(),
      };

      let blogId: string;

      if (isEditing) {
        const { error: updateError } = await supabase
          .from('blog_posts')
          .update(blogData)
          .eq('id', initialData.id);

        if (updateError) {
          throw updateError;
        }
        
        blogId = initialData.id;
      } else {
        const { data: newPost, error: insertError } = await supabase
          .from('blog_posts')
          .insert({
            ...blogData,
            created_by: userData.user.id,
          })
          .select()
          .single();

        if (insertError || !newPost) {
          throw insertError || new Error("Failed to create blog post");
        }
        
        blogId = newPost.id;
      }

      if (isEditing) {
        await supabase
          .from('blog_posts_tags')
          .delete()
          .eq('blog_post_id', blogId);
      }

      if (selectedTags.length > 0) {
        const tagRelations = selectedTags.map(tagId => ({
          blog_post_id: blogId,
          tag_id: tagId
        }));

        const { error: tagsError } = await supabase
          .from('blog_posts_tags')
          .insert(tagRelations);

        if (tagsError) {
          console.error('Error adding tags:', tagsError);
        }
      }

      toast({
        title: isEditing ? "Blog Post Updated" : "Blog Post Created",
        description: `Your blog post has been ${isEditing ? 'updated' : 'created'} successfully.`,
      });
      
      onSuccess();
    } catch (error: any) {
      console.error('Error saving blog post:', error);
      toast({
        title: "Error",
        description: `Failed to ${isEditing ? 'update' : 'create'} blog post: ${error.message}`,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchTags = async () => {
      const { data, error } = await supabase
        .from('blog_tags')
        .select('*')
        .order('name');

      if (error) {
        console.error('Error fetching tags:', error);
        return;
      }

      if (data) {
        setAvailableTags(data);
      }
    };

    fetchTags();

    if (isEditing && initialData?.id) {
      const fetchPostTags = async () => {
        const { data, error } = await supabase
          .from('blog_posts_tags')
          .select('tag_id')
          .eq('blog_post_id', initialData.id);

        if (error) {
          console.error('Error fetching post tags:', error);
          return;
        }

        if (data) {
          setSelectedTags(data.map(item => item.tag_id));
        }
      };

      fetchPostTags();
    }

    if (isEditing && initialData?.banner_image) {
      setImagePreview(initialData.banner_image);
    }
  }, [isEditing, initialData]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input {...field} onChange={handleTitleChange} placeholder="Blog post title" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="slug"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Slug</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="url-friendly-slug" />
                  </FormControl>
                  <FormMessage />
                  <p className="text-xs text-gray-500">This will be the URL of your blog post: /blog/your-slug</p>
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
                      rows={3}
                      placeholder="A short description of your post (used for previews and SEO)"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-2">
              <Label htmlFor="banner-image">Banner Image</Label>
              <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-gray-400 transition-colors">
                {imagePreview ? (
                  <div className="relative w-full">
                    <img src={imagePreview} alt="Banner preview" className="rounded-md object-cover aspect-square w-full" />
                    <Button 
                      type="button" 
                      variant="destructive"
                      size="sm"
                      className="absolute top-2 right-2"
                      onClick={() => {
                        setImagePreview(null);
                        setImageFile(null);
                      }}
                    >
                      <Trash size={16} />
                    </Button>
                  </div>
                ) : (
                  <div className="text-center">
                    <FileImage className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="mt-2">
                      <Label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-medium text-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 hover:text-primary-dark"
                      >
                        <span>Upload an image</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                          accept="image/*"
                          onChange={handleImageChange}
                        />
                      </Label>
                      <p className="text-xs text-gray-500">Square dimensions recommended</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label>Tags</Label>
              <div className="border rounded-lg p-4 space-y-4">
                <div className="flex flex-wrap gap-2">
                  {availableTags.map(tag => (
                    <Button
                      key={tag.id}
                      type="button"
                      size="sm"
                      variant={selectedTags.includes(tag.id) ? "default" : "outline"}
                      onClick={() => handleTagToggle(tag.id)}
                    >
                      {tag.name}
                    </Button>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    value={newTagName}
                    onChange={(e) => setNewTagName(e.target.value)}
                    placeholder="New tag name"
                    className="flex-1"
                  />
                  <Button 
                    type="button"
                    onClick={handleAddTag}
                    disabled={!newTagName.trim()}
                  >
                    <Plus size={16} />
                    Add
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Content (Markdown)</FormLabel>
                  <Tabs defaultValue="write" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="write">Write</TabsTrigger>
                      <TabsTrigger value="preview">Preview</TabsTrigger>
                    </TabsList>
                    <TabsContent value="write" className="border rounded-md">
                      <FormControl>
                        <Textarea
                          {...field}
                          rows={20}
                          placeholder="Write your content in markdown format"
                          className="min-h-[400px] font-mono"
                        />
                      </FormControl>
                    </TabsContent>
                    <TabsContent value="preview" className="border rounded-md p-4 min-h-[400px] prose prose-headings:font-bold prose-headings:mt-6 prose-headings:mb-4 prose-p:mb-4 max-w-none overflow-auto">
                      <div dangerouslySetInnerHTML={{ __html: preview }} />
                    </TabsContent>
                  </Tabs>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="flex justify-end space-x-2">
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit" disabled={loading}>
            {loading ? (
              <div className="flex items-center">
                <div className="w-4 h-4 mr-2 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
                {isEditing ? "Updating..." : "Creating..."}
              </div>
            ) : (
              <div className="flex items-center">
                <Save className="mr-2 h-4 w-4" />
                {isEditing ? "Update Post" : "Create Post"}
              </div>
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default BlogForm;
