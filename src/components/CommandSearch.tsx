
import { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  FileText,
  Laptop,
  Users,
  PanelLeft,
  BookOpen,
  Tag,
  ArrowRight,
  Package,
  Building2,
  Brain,
  Database,
  Zap,
  Rabbit,
  Network,
  Box,
  MapPin,
  Briefcase,
  MessageSquare,
  Calendar,
  Home,
  Loader2
} from "lucide-react";

type SearchResult = {
  id: string;
  title: string;
  description?: string;
  url: string;
  type: 'page' | 'blog' | 'tag';
  iconName?: string;
};

// Create a singleton to access command search from anywhere
let openSearchFn: (() => void) | null = null;

export const openCommandSearch = () => {
  if (openSearchFn) {
    openSearchFn();
  }
};

// Define static pages for search
const pages: SearchResult[] = [
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

const CommandSearch = () => {
  const [open, setOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [tags, setTags] = useState<SearchResult[]>([]);
  const navigate = useNavigate();
  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const initialLoadDone = useRef(false);

  // Register open function
  useEffect(() => {
    openSearchFn = () => setOpen(true);
    return () => { openSearchFn = null; };
  }, []);

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

  // Keyboard shortcut
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  // Search function
  const performSearch = useCallback(async (query: string) => {
    if (!open) return;
    
    console.log("Performing search for:", query);
    setIsLoading(true);
    
    try {
      // Always include default pages if no query
      const filteredPages = query.trim() === ""
        ? pages.slice(0, 5)
        : pages.filter(page => 
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
      
      // Set all results
      const allResults = [...filteredPages, ...blogResults, ...filteredTags];
      console.log("Search results:", allResults);
      setSearchResults(allResults);
    } catch (error) {
      console.error('Search error:', error);
      // If error, just show default pages
      setSearchResults(pages.slice(0, 5));
    } finally {
      setIsLoading(false);
    }
  }, [open, tags]);

  // Handle input change
  const handleInputChange = (value: string) => {
    setSearchInput(value);
    
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }
    
    searchTimeoutRef.current = setTimeout(() => {
      performSearch(value);
    }, 300);
  };

  // When opening, load initial results
  useEffect(() => {
    if (open && !initialLoadDone.current) {
      performSearch("");
      initialLoadDone.current = true;
    } else if (!open) {
      // Reset when closed
      initialLoadDone.current = false;
      setSearchInput("");
    }
  }, [open, performSearch]);

  const handleSelect = useCallback((result: SearchResult) => {
    // Track the search if analytics available
    if (window.gtag) {
      window.gtag('event', 'search_navigation', {
        search_term: searchInput,
        destination: result.url,
        result_type: result.type
      });
    }
    
    // Navigate after dialog is closed
    navigate(result.url);
    
    // Close dialog after a slight delay to ensure user sees their selection
    setTimeout(() => {
      setOpen(false);
    }, 100);
  }, [navigate, searchInput]);

  // Get icon for search result
  const getIcon = (result: SearchResult) => {
    const iconMap: Record<string, React.ReactNode> = {
      Home: <Home className="mr-2 h-4 w-4" />,
      Building2: <Building2 className="mr-2 h-4 w-4" />,
      Brain: <Brain className="mr-2 h-4 w-4" />,
      Database: <Database className="mr-2 h-4 w-4" />,
      Zap: <Zap className="mr-2 h-4 w-4" />,
      Rabbit: <Rabbit className="mr-2 h-4 w-4" />,
      Network: <Network className="mr-2 h-4 w-4" />,
      Box: <Box className="mr-2 h-4 w-4" />,
      Users: <Users className="mr-2 h-4 w-4" />,
      MapPin: <MapPin className="mr-2 h-4 w-4" />,
      Briefcase: <Briefcase className="mr-2 h-4 w-4" />,
      BookOpen: <BookOpen className="mr-2 h-4 w-4" />,
      MessageSquare: <MessageSquare className="mr-2 h-4 w-4" />,
      Calendar: <Calendar className="mr-2 h-4 w-4" />
    };

    switch (result.type) {
      case 'blog':
        return <FileText className="mr-2 h-4 w-4" />;
      case 'tag':
        return <Tag className="mr-2 h-4 w-4" />;
      case 'page':
        if (result.iconName && iconMap[result.iconName]) {
          return iconMap[result.iconName];
        }
        if (result.url.includes('/products')) {
          return <Package className="mr-2 h-4 w-4" />;
        } 
        if (result.url.includes('/services')) {
          return <Laptop className="mr-2 h-4 w-4" />;
        }
        return <PanelLeft className="mr-2 h-4 w-4" />;
    }
  };

  // Group results by type
  const groupedResults = () => {
    const pageResults = searchResults.filter(r => r.type === 'page');
    const blogResults = searchResults.filter(r => r.type === 'blog');
    const tagResults = searchResults.filter(r => r.type === 'tag');
    
    return { pageResults, blogResults, tagResults };
  };

  const { pageResults, blogResults, tagResults } = groupedResults();

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <Command className="rounded-lg border-none">
        <CommandInput 
          placeholder="Search pages, blog posts, and tags..." 
          value={searchInput}
          onValueChange={handleInputChange}
        />
        <CommandList>
          {isLoading ? (
            <div className="py-6 text-center flex items-center justify-center">
              <Loader2 className="h-4 w-4 animate-spin mr-2" />
              <span className="text-sm text-muted-foreground">Searching...</span>
            </div>
          ) : searchResults.length === 0 ? (
            <CommandEmpty>
              {searchInput ? "No results found." : "Start typing to search..."}
            </CommandEmpty>
          ) : (
            <>
              {pageResults.length > 0 && (
                <CommandGroup heading="Pages">
                  {pageResults.map((result) => (
                    <CommandItem
                      key={`page-${result.id}`}
                      onSelect={() => handleSelect(result)}
                      className="flex cursor-pointer items-center justify-between w-full"
                    >
                      <div className="flex items-center">
                        {getIcon(result)}
                        <span>{result.title}</span>
                      </div>
                      <ArrowRight className="h-3 w-3 text-muted-foreground" />
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}
              
              {pageResults.length > 0 && blogResults.length > 0 && (
                <CommandSeparator />
              )}
              
              {blogResults.length > 0 && (
                <CommandGroup heading="Blog Posts">
                  {blogResults.map((result) => (
                    <CommandItem
                      key={`blog-${result.id}`}
                      onSelect={() => handleSelect(result)}
                      className="flex cursor-pointer items-center justify-between w-full"
                    >
                      <div className="flex items-center">
                        <FileText className="mr-2 h-4 w-4" />
                        <div className="flex flex-col">
                          <span>{result.title}</span>
                          {result.description && (
                            <span className="text-xs text-muted-foreground line-clamp-1">
                              {result.description}
                            </span>
                          )}
                        </div>
                      </div>
                      <ArrowRight className="h-3 w-3 text-muted-foreground" />
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}
              
              {(pageResults.length > 0 || blogResults.length > 0) && tagResults.length > 0 && (
                <CommandSeparator />
              )}
              
              {tagResults.length > 0 && (
                <CommandGroup heading="Tags">
                  {tagResults.map((result) => (
                    <CommandItem
                      key={`tag-${result.id}`}
                      onSelect={() => handleSelect(result)}
                      className="flex cursor-pointer items-center justify-between w-full"
                    >
                      <div className="flex items-center">
                        <Tag className="mr-2 h-4 w-4" />
                        <span>{result.title}</span>
                      </div>
                      <ArrowRight className="h-3 w-3 text-muted-foreground" />
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}
            </>
          )}
        </CommandList>
      </Command>
    </CommandDialog>
  );
};

export default CommandSearch;
