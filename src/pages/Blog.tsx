
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatusBar from "@/components/StatusBar";
import ScrollProgress from "@/components/ScrollProgress";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";
import { ArrowRight } from "lucide-react";
import { Blog, Tag } from "@/components/BlogForm";

const POSTS_PER_PAGE = 9;

const BlogPage = () => {
  const [posts, setPosts] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [allTags, setAllTags] = useState<Tag[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      let query = supabase
        .from('blog_posts')
        .select('*', { count: 'exact' });
      
      // Add tag filter if a tag is selected
      if (selectedTag) {
        const { data: postIds } = await supabase
          .from('blog_posts_tags')
          .select('blog_post_id')
          .eq('tag_id', selectedTag);
        
        if (postIds && postIds.length > 0) {
          const ids = postIds.map(item => item.blog_post_id);
          query = query.in('id', ids);
        } else {
          // No posts with this tag
          setPosts([]);
          setTotalCount(0);
          setLoading(false);
          return;
        }
      }
      
      // Get count for pagination
      const { count } = await query;
      setTotalCount(count || 0);
      
      // Fetch paginated posts
      const { data, error } = await query
        .order('created_at', { ascending: false })
        .range((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE - 1);

      if (error) {
        console.error('Error fetching posts:', error);
        return;
      }

      if (data) {
        // Fetch tags for each post
        const postsWithTags = await Promise.all(
          data.map(async (post) => {
            const { data: tagsData } = await supabase
              .from('blog_posts_tags')
              .select('tag_id')
              .eq('blog_post_id', post.id);
            
            if (!tagsData?.length) {
              return post;
            }

            const tagIds = tagsData.map(t => t.tag_id);
            
            const { data: tags } = await supabase
              .from('blog_tags')
              .select('*')
              .in('id', tagIds);
            
            return {
              ...post,
              tags: tags as Tag[] || []
            };
          })
        );

        setPosts(postsWithTags);
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchTags = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_tags')
        .select('*')
        .order('name');

      if (error) {
        console.error('Error fetching tags:', error);
        return;
      }

      if (data) {
        setAllTags(data);
      }
    } catch (error) {
      console.error('Error fetching tags:', error);
    }
  };

  useEffect(() => {
    fetchTags();
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [currentPage, selectedTag]);

  const handleTagSelect = (tagId: string | null) => {
    setSelectedTag(tagId);
    setCurrentPage(1); // Reset to first page when changing tag
  };

  const totalPages = Math.ceil(totalCount / POSTS_PER_PAGE);

  return (
    <div className="min-h-screen flex flex-col">
      <StatusBar />
      <Navbar />
      <ScrollProgress />
      
      <main className="flex-grow bg-gray-50 py-16 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Blog</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Insights, news, and perspectives from our team
            </p>
          </div>
          
          {allTags.length > 0 && (
            <div className="mb-8 flex justify-center flex-wrap gap-2">
              <Button
                variant={selectedTag === null ? "default" : "outline"}
                onClick={() => handleTagSelect(null)}
                className="rounded-full"
              >
                All Posts
              </Button>
              {allTags.map(tag => (
                <Button
                  key={tag.id}
                  variant={selectedTag === tag.id ? "default" : "outline"}
                  onClick={() => handleTagSelect(tag.id)}
                  className="rounded-full"
                >
                  {tag.name}
                </Button>
              ))}
            </div>
          )}

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="w-12 h-12 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
            </div>
          ) : posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Card key={post.id} className="overflow-hidden flex flex-col h-full">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={post.banner_image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {post.tags?.map(tag => (
                        <span 
                          key={tag.id} 
                          className="px-2 py-1 bg-gray-100 rounded-full text-xs"
                          onClick={() => handleTagSelect(tag.id)}
                        >
                          {tag.name}
                        </span>
                      ))}
                    </div>
                    <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-3">
                      {post.description}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="pt-0 flex justify-between items-center">
                    <div className="text-sm text-gray-500">
                      {new Date(post.created_at).toLocaleDateString()}
                    </div>
                    <Button variant="ghost" asChild>
                      <Link to={`/blog/${post.slug}`} className="flex items-center gap-1">
                        Read more
                        <ArrowRight size={16} />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">No blog posts found</h3>
              <p className="text-gray-600">
                {selectedTag 
                  ? "There are no posts with the selected tag." 
                  : "Check back soon for our latest updates."}
              </p>
              {selectedTag && (
                <Button 
                  variant="outline" 
                  onClick={() => handleTagSelect(null)} 
                  className="mt-4"
                >
                  View all posts
                </Button>
              )}
            </div>
          )}

          {totalPages > 1 && (
            <div className="mt-12">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious 
                      onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                      className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                    />
                  </PaginationItem>
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <PaginationItem key={page}>
                      <PaginationLink
                        isActive={currentPage === page}
                        onClick={() => setCurrentPage(page)}
                        className="cursor-pointer"
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  
                  <PaginationItem>
                    <PaginationNext 
                      onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                      className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPage;
