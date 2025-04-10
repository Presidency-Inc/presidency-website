
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatusBar from "@/components/StatusBar";
import ScrollProgress from "@/components/ScrollProgress";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { marked } from "marked";
import { Blog, Tag } from "@/components/BlogForm";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

marked.setOptions({
  breaks: true,
  gfm: true,
});

interface Author {
  id: string;
  name: string;
  avatar_url: string | null;
  title: string | null;
}

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [renderedContent, setRenderedContent] = useState("");
  const [relatedPosts, setRelatedPosts] = useState<Blog[]>([]);
  const [author, setAuthor] = useState<Author | null>(null);
  
  const currentUrl = `${window.location.origin}/blog/${slug}`;

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;
      
      setLoading(true);
      
      try {
        const { data, error } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('slug', slug)
          .single();

        if (error) {
          console.error('Error fetching blog post:', error);
          navigate('/blog');
          return;
        }

        if (data) {
          const { data: tagsData } = await supabase
            .from('blog_posts_tags')
            .select('tag_id')
            .eq('blog_post_id', data.id);
          
          let tags: Tag[] = [];
          let tagIds: string[] = [];
          
          if (tagsData && tagsData.length > 0) {
            tagIds = tagsData.map(t => t.tag_id);
            
            const { data: tagsInfo } = await supabase
              .from('blog_tags')
              .select('*')
              .in('id', tagIds);
            
            if (tagsInfo) {
              tags = tagsInfo as Tag[];
            }
          }

          const blogWithTags = { ...data, tags };
          setPost(blogWithTags);
          
          const { data: authorData, error: authorError } = await supabase
            .from('user_profiles')
            .select('id, name, avatar_url, title')
            .eq('id', data.created_by)
            .single();
          
          if (!authorError && authorData) {
            setAuthor(authorData);
          }
          
          const renderer = new marked.Renderer();
          
          renderer.heading = (text, level) => {
            return `<h${level} class="mt-6 mb-4 font-bold">${text}</h${level}>`;
          };
          
          renderer.paragraph = (text) => {
            return `<p class="mb-4">${text}</p>`;
          };
          
          const rendered = marked.parse(data.content, {
            renderer: renderer
          });
          
          setRenderedContent(rendered as string);

          if (tagIds.length > 0) {
            fetchRelatedPosts(data.id, tagIds);
          }
          
          // Set the document title immediately to avoid flashes
          document.title = `${data.title} | Presidency Solutions`;
        }
      } catch (error) {
        console.error('Error fetching blog post:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug, navigate]);

  const fetchRelatedPosts = async (currentPostId: string, tagIds: string[]) => {
    try {
      const { data: postTagRelations } = await supabase
        .from('blog_posts_tags')
        .select('blog_post_id')
        .in('tag_id', tagIds)
        .neq('blog_post_id', currentPostId);

      if (postTagRelations && postTagRelations.length > 0) {
        const relatedPostIds = [...new Set(postTagRelations.map(item => item.blog_post_id))].slice(0, 3);
        
        const { data: relatedPostsData } = await supabase
          .from('blog_posts')
          .select('*')
          .in('id', relatedPostIds)
          .limit(3);
        
        if (relatedPostsData) {
          setRelatedPosts(relatedPostsData);
        }
      }
    } catch (error) {
      console.error('Error fetching related posts:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <StatusBar />
        <Navbar />
        <main className="flex-grow flex items-center justify-center mt-16 md:mt-24">
          <div className="w-12 h-12 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <StatusBar />
        <Navbar />
        <main className="flex-grow flex items-center justify-center mt-16 md:mt-24">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Blog post not found</h2>
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link to="/blog">Back to Blog</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{post?.title} | Presidency Solutions</title>
        <meta name="description" content={post?.description} />
        <meta name="keywords" content={post?.tags?.map(tag => tag.name).join(', ')} />
        <meta property="og:type" content="article" key="og:type" />
        <meta property="og:title" content={post?.title} key="og:title" />
        <meta property="og:description" content={post?.description} key="og:description" />
        <meta property="og:image" content={post?.banner_image} key="og:image" />
        <meta property="og:url" content={currentUrl} key="og:url" />
        <meta property="og:site_name" content="Presidency Solutions" key="og:site_name" />
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content={post?.title} key="twitter:title" />
        <meta name="twitter:description" content={post?.description} key="twitter:description" />
        <meta name="twitter:image" content={post?.banner_image} key="twitter:image" />
      </Helmet>
      
      <StatusBar />
      <Navbar />
      <ScrollProgress />
      
      <main className="flex-grow bg-gradient-to-br from-white to-blue-50 py-16 mt-16 md:mt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Button variant="outline" asChild>
              <Link to="/blog" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>
          
          <article>
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-4">{post?.title}</h1>
              
              {author && (
                <div className="flex items-center space-x-3 mb-6">
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
              
              <div className="flex items-center text-gray-500 mb-6">
                <time dateTime={post?.created_at}>
                  {post?.created_at && new Date(post.created_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {post?.tags?.map(tag => (
                  <Link 
                    key={tag.id}
                    to={`/blog?tag=${tag.id}`} 
                    className="px-3 py-1 bg-blue-100 hover:bg-blue-200 rounded-full text-sm transition"
                  >
                    {tag.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="mb-10">
              {post?.banner_image && (
                <img 
                  src={post.banner_image} 
                  alt={post.title} 
                  className="w-full h-auto rounded-lg object-cover max-h-[500px]"
                />
              )}
            </div>
            
            <div className="prose prose-lg prose-headings:font-bold prose-headings:mt-6 prose-headings:mb-4 prose-p:mb-4 max-w-none">
              <div dangerouslySetInnerHTML={{ __html: renderedContent }} />
            </div>
          </article>
          
          {relatedPosts.length > 0 && (
            <div className="mt-16 pt-8 border-t">
              <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map(relatedPost => (
                  <Link 
                    key={relatedPost.id} 
                    to={`/blog/${relatedPost.slug}`}
                    className="group"
                  >
                    <div className="overflow-hidden rounded-lg aspect-[4/3] mb-3">
                      <img 
                        src={relatedPost.banner_image} 
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                      />
                    </div>
                    <h3 className="font-semibold group-hover:text-blue-600 transition">{relatedPost.title}</h3>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPostPage;
