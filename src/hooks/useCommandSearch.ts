
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

interface UseCommandSearchResult {
  isLoading: boolean;
  searchInput: string;
  setSearchInput: (value: string) => void;
  searchResults: SearchResult[];
  performSearch: (query: string) => Promise<void>;
  pageResults: SearchResult[];
  blogResults: SearchResult[];
  tagResults: SearchResult[];
}

export const useCommandSearch = ({ isOpen }: UseCommandSearchProps): UseCommandSearchResult => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [tags, setTags] = useState<SearchResult[]>([]);
  const [hasInitialized, setHasInitialized] = useState(false);

  // Fetch tags once when component mounts
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
          setTags(formattedTags);
        }
      } catch (error) {
        console.error('Error fetching tags:', error);
      }
    };

    fetchTags();
  }, []);

  // Initialize with default results when first opened
  useEffect(() => {
    if (isOpen && !hasInitialized) {
      performSearch("");
      setHasInitialized(true);
    }
  }, [isOpen]);

  // Search function
  const performSearch = useCallback(async (query: string) => {
    // Don't run if dialog is closed
    if (!isOpen) return;
    
    setIsLoading(true);
    
    try {
      // Always include default pages if no query
      const filteredPages = query.trim() === ""
        ? staticPages.slice(0, 5)
        : staticPages.filter(page => 
            page.title.toLowerCase().includes(query.toLowerCase()));
      
      // Filter tags
      const filteredTags = query.trim() === ""
        ? []
        : tags.filter(tag => 
            tag.title.toLowerCase().includes(query.toLowerCase()));
      
      // Search blog posts only if we have a query
      let blogResults: SearchResult[] = [];
      
      if (query.trim() !== "") {
        const { data, error } = await supabase
          .from('blog_posts')
          .select('id, title, description, slug')
          .or(`title.ilike.%${query}%,description.ilike.%${query}%`)
          .limit(5);
        
        if (!error && data) {
          blogResults = data.map(post => ({
            id: post.id,
            title: post.title,
            description: post.description,
            url: `/blog/${post.slug}`,
            type: 'blog' as const
          }));
        } else if (error) {
          console.error('Error searching blog posts:', error);
        }
      }
      
      // Set all results (only if dialog is still open)
      if (isOpen) {
        const allResults = [...filteredPages, ...blogResults, ...filteredTags];
        setSearchResults(allResults);
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Search error:', error);
      // If error, just show default pages
      if (isOpen) {
        setSearchResults(staticPages.slice(0, 5));
        setIsLoading(false);
      }
    }
  }, [isOpen, tags]);

  // Group results by type
  const pageResults = searchResults.filter(r => r.type === 'page');
  const blogResults = searchResults.filter(r => r.type === 'blog');
  const tagResults = searchResults.filter(r => r.type === 'tag');

  return {
    isLoading,
    searchInput,
    setSearchInput,
    searchResults,
    performSearch,
    pageResults,
    blogResults,
    tagResults
  };
};
