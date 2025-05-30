
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { marked } from "marked";
import { ArrowLeft } from "lucide-react";
import { Blog, Tag } from "./BlogForm";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Configure marked for proper rendering of headings and line breaks
marked.setOptions({
  breaks: true,     // Enable line breaks
  gfm: true,        // Enable GitHub Flavored Markdown
});

interface BlogDetailProps {
  blogId: string;
  onBack: () => void;
}

interface Author {
  id: string;
  name: string;
  avatar_url: string | null;
  title: string | null;
}

const BlogDetail = ({ blogId, onBack }: BlogDetailProps) => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [renderedContent, setRenderedContent] = useState("");
  const [author, setAuthor] = useState<Author | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const { data, error } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('id', blogId)
          .single();

        if (error) {
          console.error('Error fetching blog post:', error);
          return;
        }

        if (data) {
          // Fetch tags for this blog post
          const { data: tagsData, error: tagsError } = await supabase
            .from('blog_posts_tags')
            .select('tag_id')
            .eq('blog_post_id', data.id);
          
          let tags: Tag[] = [];
          
          if (!tagsError && tagsData.length > 0) {
            const tagIds = tagsData.map(t => t.tag_id);
            
            const { data: tagsInfo, error: tagsInfoError } = await supabase
              .from('blog_tags')
              .select('*')
              .in('id', tagIds);
            
            if (!tagsInfoError) {
              tags = tagsInfo as Tag[];
            }
          }

          const blogWithTags = { ...data, tags };
          setBlog(blogWithTags);
          
          // Fetch author information
          const { data: authorData, error: authorError } = await supabase
            .from('user_profiles')
            .select('id, name, avatar_url, title')
            .eq('id', data.created_by)
            .single();
          
          if (!authorError && authorData) {
            setAuthor(authorData);
          }
          
          // Process markdown with marked using a custom renderer
          const renderer = new marked.Renderer();
          // Ensure headers get proper HTML tags
          renderer.heading = (text, level) => {
            return `<h${level} class="mt-6 mb-4 font-bold">${text}</h${level}>`;
          };
          
          // Enhance paragraph rendering for better spacing
          renderer.paragraph = (text) => {
            return `<p class="mb-4">${text}</p>`;
          };
          
          const rendered = marked.parse(data.content, {
            renderer: renderer
          });
          setRenderedContent(rendered as string);
        }
      } catch (error) {
        console.error('Error fetching blog post:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [blogId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-8 h-8 border-t-2 border-b-2 border-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium text-gray-900">Blog post not found</h3>
        <Button onClick={onBack} variant="outline" className="mt-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to List
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Button onClick={onBack} variant="outline" size="sm" className="flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to List
        </Button>
        <a 
          href={`/blog/${blog?.slug}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm text-blue-600 hover:underline"
        >
          View on site
        </a>
      </div>

      <div className="space-y-4">
        <div className="rounded-lg overflow-hidden">
          <img 
            src={blog?.banner_image} 
            alt={blog?.title} 
            className="w-full h-64 object-cover"
          />
        </div>

        <div className="flex flex-wrap gap-2 my-4">
          {blog?.tags?.map((tag) => (
            <span key={tag.id} className="px-3 py-1 rounded-full bg-blue-100 text-sm">
              {tag.name}
            </span>
          ))}
        </div>

        <h1 className="text-3xl font-bold">{blog?.title}</h1>
        
        {author && (
          <div className="flex items-center space-x-3 my-4">
            <Avatar className="h-10 w-10">
              <AvatarImage src={author.avatar_url || ''} alt={author.name} />
              <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium text-gray-900">{author.name}</p>
              {author.title && <p className="text-sm text-gray-500">{author.title}</p>}
            </div>
          </div>
        )}
        
        <div className="flex items-center text-sm text-gray-500">
          <span>{blog?.created_at && new Date(blog.created_at).toLocaleDateString()}</span>
          <span className="mx-2">•</span>
          <span>Slug: {blog?.slug}</span>
        </div>

        <div className="prose prose-headings:font-bold prose-headings:mt-6 prose-headings:mb-4 prose-p:mb-4 max-w-none">
          <div dangerouslySetInnerHTML={{ __html: renderedContent }} />
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
