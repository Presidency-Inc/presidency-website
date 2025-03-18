
import { useState, useCallback, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

export type SearchResultType = 'page' | 'blog' | 'tag';

export interface SearchResult {
  id: string;
  title: string;
  description?: string;
  url: string;
  type: SearchResultType;
  iconName?: string;
}

// Define static pages for search
const staticPages: SearchResult[] = [
  { id: 'home', title: 'Home', url: '/', type: 'page', iconName: 'Home' },
  { id: 'about', title: 'About Us', url: '/about', type: 'page', iconName: 'Building2' },
  { id: 'services-ai', title: 'AI Services', url: '/services/ai', type: 'page', iconName: 'Brain' },
  { id: 'services-data', title: 'Data Services', url: '/services/data', type: 'page', iconName: 'Database' },
  { id: 'services-databricks', title: 'Databricks Services', url: '/services/databricks', type: 'page', iconName: 'Zap' },
  { id: 'product-leapfrog', title: 'Leapfrog Product', url: '/products/leapfrog', type: 'page', iconName: 'Rabbit' },
  { id: 'product-omniflow', title: 'Omniflow Product', url: '/products/omniflow', type: 'page', iconName: 'Network' },
  { id: 'product-kube8r', title: 'Kube8r Product', url: '/products/kube8r', type: 'page', iconName: 'Box' },
  { id: 'talent', title: 'Talent Solutions', url: '/talent', type: 'page', iconName: 'Users' },
  { id: 'talent-nearshore', title: 'Nearshore Talent', url: '/talent/nearshore', type: 'page', iconName: 'MapPin' },
  { id: 'careers', title: 'Careers', url: '/careers', type: 'page', iconName: 'Briefcase' },
  { id: 'blog', title: 'Blog', url: '/blog', type: 'page', iconName: 'BookOpen' },
  { id: 'contact', title: 'Contact', url: '/get-started', type: 'page', iconName: 'MessageSquare' },
  { id: 'book-call', title: 'Book a Call', url: '/book-a-call', type: 'page', iconName: 'Calendar' },
];

interface UseCommandSearchProps {
  isOpen: boolean;
}

export const useCommandSearch = ({ isOpen }: UseCommandSearchProps) => {
  const [searchInput, setSearchInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [pageResults, setPageResults] = useState<SearchResult[]>([]);
  const [blogResults, setBlogResults] = useState<SearchResult[]>([]);
  const [tagResults, setTagResults] = useState<SearchResult[]>([]);
  const [allTags, setAllTags] = useState<SearchResult[]>([]);

  // Fetch tags once
  useEffect(() => {
    const fetchTags = async () => {
      try {
        const { data, error } = await supabase.from('blog_tags').select('*');
        
        if (error) {
          console.error('Error fetching tags:', error);
          return;
        }

        if (data) {
          const formattedTags = data.map(tag => ({
            id: tag.id,
            title: tag.name,
            url: `/blog?tag=${tag.id}`,
            type: 'tag' as const
          }));
          setAllTags(formattedTags);
        }
      } catch (error) {
        console.error('Error fetching tags:', error);
      }
    };

    fetchTags();
  }, []);

  // Initialize with default page results when dialog opens
  useEffect(() => {
    if (isOpen) {
      setPageResults(staticPages.slice(0, 5));
      // Reset blog and tag results when dialog opens
      setBlogResults([]);
      setTagResults([]);
    }
  }, [isOpen]);

  // Search function
  const performSearch = useCallback(async (query: string) => {
    // Don't search if dialog is closed
    if (!isOpen) return;
    
    setIsLoading(true);
    
    try {
      // Filter pages
      const filteredPages = query.trim() === ""
        ? staticPages.slice(0, 5)
        : staticPages.filter(page => 
            page.title.toLowerCase().includes(query.toLowerCase()));
      
      // Filter tags
      const filteredTags = query.trim() === ""
        ? []
        : allTags.filter(tag => 
            tag.title.toLowerCase().includes(query.toLowerCase()));
      
      // Set initial results immediately
      setPageResults(filteredPages);
      setTagResults(filteredTags);
      
      // Only search blogs if we have a query
      if (query.trim() !== "") {
        const { data, error } = await supabase
          .from('blog_posts')
          .select('id, title, description, slug')
          .or(`title.ilike.%${query}%,description.ilike.%${query}%`)
          .limit(5);
        
        // Only update blog results if the dialog is still open
        if (isOpen) {
          if (!error && data) {
            const formattedBlogResults = data.map(post => ({
              id: post.id,
              title: post.title,
              description: post.description,
              url: `/blog/${post.slug}`,
              type: 'blog' as const
            }));
            setBlogResults(formattedBlogResults);
          } else if (error) {
            console.error('Error searching blog posts:', error);
            setBlogResults([]);
          }
        }
      } else {
        // Clear blog results if query is empty
        setBlogResults([]);
      }
    } catch (error) {
      console.error('Search error:', error);
      // Show default results on error
      setPageResults(staticPages.slice(0, 5));
      setBlogResults([]);
      setTagResults([]);
    } finally {
      if (isOpen) {
        setIsLoading(false);
      }
    }
  }, [isOpen, allTags]);

  return {
    isLoading,
    searchInput,
    setSearchInput,
    performSearch,
    pageResults,
    blogResults,
    tagResults
  };
};
