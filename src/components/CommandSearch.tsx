
import { useEffect, useState, useRef } from "react";
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
  CommandShortcut,
} from "@/components/ui/command";
import { useToast } from "@/components/ui/use-toast";
import {
  Search,
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
  Home
} from "lucide-react";
import { DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";

type SearchResult = {
  id: string;
  title: string;
  description?: string;
  url: string;
  type: 'page' | 'blog' | 'tag';
  iconName?: string;
};

// Create a singleton pattern to access the command search from anywhere
let openSearchFn: (() => void) | null = null;

export const openCommandSearch = () => {
  if (openSearchFn) {
    openSearchFn();
  }
};

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
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [tags, setTags] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Register the open function with our singleton
  useEffect(() => {
    console.log("[DEBUG] Initializing CommandSearch component");
    openSearchFn = () => {
      console.log("[DEBUG] openSearchFn called - opening dialog");
      setOpen(true);
    };
    
    return () => {
      openSearchFn = null;
    };
  }, []);

  // Fetch tags once when component mounts
  useEffect(() => {
    fetchTags();
  }, []);

  // Set initial results and handle dialog open/close
  useEffect(() => {
    console.log("[DEBUG] Dialog open state changed:", open);
    if (open) {
      // Show initial results when dialog opens
      if (searchQuery.trim() === "") {
        const initialResults = pages.slice(0, 5);
        console.log("[DEBUG] Setting initial results:", initialResults.length);
        setResults(initialResults);
        setLoading(false);
      }
    } else {
      // Reset search when dialog closes
      setSearchQuery("");
      setResults([]);
    }
  }, [open]);

  // Handle search query changes with debounce
  useEffect(() => {
    console.log("[DEBUG] searchQuery changed:", searchQuery, "| open:", open, "| current results:", results.length);
    
    // Clear any existing timeout
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    // Don't search if modal is closed
    if (!open) {
      console.log("[DEBUG] Dialog is closed, skipping search");
      return;
    }

    // For empty queries, show initial results
    if (searchQuery.trim() === "") {
      const initialResults = pages.slice(0, 5);
      console.log("[DEBUG] Empty query, showing initial results:", initialResults.length);
      setResults(initialResults);
      setLoading(false);
      return;
    }
    
    // Set loading state immediately for non-empty queries
    console.log("[DEBUG] Non-empty query, setting loading state");
    setLoading(true);
    
    // Debounce search to prevent too many requests
    searchTimeoutRef.current = setTimeout(() => {
      console.log("[DEBUG] Debounce timeout reached, performing search");
      searchResults();
    }, 300);

    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, [searchQuery, open]);

  // Keyboard shortcut to open/close search
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

  const fetchTags = async () => {
    try {
      console.log("[DEBUG] Fetching tags from Supabase");
      const { data, error } = await supabase.from('blog_tags').select('*');
      
      if (error) {
        console.error('[ERROR] Error fetching tags:', error);
        return;
      }

      if (data) {
        const formattedTags = data.map(tag => ({
          id: tag.id,
          title: tag.name,
          url: `/blog?tag=${tag.id}`,
          type: 'tag' as const
        }));
        console.log("[DEBUG] Tags fetched successfully:", formattedTags.length);
        setTags(formattedTags);
      }
    } catch (error) {
      console.error('[ERROR] Error fetching tags:', error);
    }
  };

  const searchBlogPosts = async () => {
    if (searchQuery.trim().length === 0) return [];
    
    try {
      console.log("[DEBUG] Searching blog posts with query:", searchQuery);
      const { data, error } = await supabase
        .from('blog_posts')
        .select('id, title, description, slug')
        .or(`title.ilike.%${searchQuery}%,description.ilike.%${searchQuery}%`)
        .limit(5);
      
      if (error) {
        console.error('[ERROR] Error searching blog posts:', error);
        return [];
      }
      
      const blogResults = data ? data.map(post => ({
        id: post.id,
        title: post.title,
        description: post.description,
        url: `/blog/${post.slug}`,
        type: 'blog' as const
      })) : [];
      
      console.log("[DEBUG] Blog posts search results:", blogResults.length);
      return blogResults;
      
    } catch (error) {
      console.error('[ERROR] Error searching blog posts:', error);
      return [];
    }
  };

  const searchResults = async () => {
    console.log("[DEBUG] Starting search with query:", searchQuery);
    setLoading(true);
    
    try {
      // Filter pages based on search query
      const filteredPages = pages.filter(page => 
        page.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      // Filter tags based on search query
      const filteredTags = tags.filter(tag => 
        tag.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      // Get blog posts matching search query
      const blogResults = await searchBlogPosts();
      
      // Combine all results
      const combinedResults = [...filteredPages, ...blogResults, ...filteredTags];
      
      console.log('[DEBUG] Search query:', searchQuery);
      console.log('[DEBUG] Pages results:', filteredPages.length);
      console.log('[DEBUG] Tags results:', filteredTags.length);
      console.log('[DEBUG] Blog results:', blogResults.length);
      console.log('[DEBUG] Combined results:', combinedResults.length);
      
      // Important: This must run even if search returns nothing
      console.log("[DEBUG] Setting results state with combinedResults:", combinedResults.length);
      setResults(combinedResults);
    } catch (error) {
      console.error('[ERROR] Error searching:', error);
      // Set empty results to prevent stale results from showing
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSelect = (result: SearchResult) => {
    console.log("[DEBUG] Result selected:", result.title, result.url);
    setOpen(false);
    navigate(result.url);
    
    if (window.gtag) {
      window.gtag('event', 'search_navigation', {
        search_term: searchQuery,
        destination: result.url,
        result_type: result.type
      });
    }
    
    setSearchQuery("");
  };

  const getIconComponent = (iconName: string) => {
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
      Calendar: <Calendar className="mr-2 h-4 w-4" />,
      Package: <Package className="mr-2 h-4 w-4" />,
      PanelLeft: <PanelLeft className="mr-2 h-4 w-4" />
    };

    return iconMap[iconName] || <PanelLeft className="mr-2 h-4 w-4" />;
  };

  const renderIcon = (result: SearchResult) => {
    switch (result.type) {
      case 'blog':
        return <FileText className="mr-2 h-4 w-4" />;
      case 'tag':
        return <Tag className="mr-2 h-4 w-4" />;
      case 'page':
        if (result.iconName) {
          return getIconComponent(result.iconName);
        }
        if (result.url.includes('/products')) {
          return <Package className="mr-2 h-4 w-4" />;
        } else if (result.url.includes('/services')) {
          return <Laptop className="mr-2 h-4 w-4" />;
        } else if (result.url.includes('/talent')) {
          return <Users className="mr-2 h-4 w-4" />;
        } else if (result.url.includes('/blog')) {
          return <BookOpen className="mr-2 h-4 w-4" />;
        } else if (result.url === '/') {
          return <PanelLeft className="mr-2 h-4 w-4" />;
        }
        return <PanelLeft className="mr-2 h-4 w-4" />;
    }
  };

  // This function will group and display the search results
  const renderResults = () => {
    console.log("[DEBUG] renderResults called with", results.length, "results");
    
    // If no results, return null (will be handled by CommandEmpty component)
    if (results.length === 0) {
      console.log("[DEBUG] No results to render");
      return null;
    }
    
    const pageResults = results.filter(result => result.type === 'page');
    const blogResults = results.filter(result => result.type === 'blog');
    const tagResults = results.filter(result => result.type === 'tag');

    console.log("[DEBUG] Filtered for rendering - pages:", pageResults.length, "blogs:", blogResults.length, "tags:", tagResults.length);

    return (
      <>
        {pageResults.length > 0 && (
          <CommandGroup heading="Pages">
            {pageResults.map(result => (
              <CommandItem
                key={`page-${result.id}`}
                onSelect={() => handleSelect(result)}
                className="flex items-center justify-between py-2"
              >
                <div className="flex items-center">
                  {renderIcon(result)}
                  <span>{result.title}</span>
                </div>
                <ArrowRight className="h-3 w-3 text-muted-foreground" />
              </CommandItem>
            ))}
          </CommandGroup>
        )}
        
        {pageResults.length > 0 && blogResults.length > 0 && <CommandSeparator />}
        
        {blogResults.length > 0 && (
          <CommandGroup heading="Blog Posts">
            {blogResults.map(result => (
              <CommandItem
                key={`blog-${result.id}`}
                onSelect={() => handleSelect(result)}
                className="flex items-center justify-between py-2"
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
        
        {(pageResults.length > 0 || blogResults.length > 0) && tagResults.length > 0 && <CommandSeparator />}
        
        {tagResults.length > 0 && (
          <CommandGroup heading="Tags">
            {tagResults.map(result => (
              <CommandItem
                key={`tag-${result.id}`}
                onSelect={() => handleSelect(result)}
                className="flex items-center justify-between py-2"
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
    );
  };

  // Debug render
  console.log("[DEBUG] Rendering CommandSearch component - Dialog open:", open, "| Results:", results.length, "| Loading:", loading);

  return (
    <CommandDialog open={open} onOpenChange={setOpen} className="overflow-visible">
      <DialogTitle className="sr-only">Search</DialogTitle>
      <DialogDescription className="sr-only">
        Search for pages, blog posts, and tags
      </DialogDescription>
      <Command className="rounded-lg border shadow-md">
        <CommandInput
          placeholder="Search pages, blog posts, and tags..."
          value={searchQuery}
          onValueChange={(value) => {
            console.log("[DEBUG] CommandInput value changed to:", value);
            setSearchQuery(value);
          }}
          autoFocus
        />
        <CommandList className="max-h-[70vh] overflow-y-auto">
          {loading ? (
            <div className="p-4">
              <Skeleton className="h-8 w-full mb-2" />
              <Skeleton className="h-8 w-full mb-2" />
              <Skeleton className="h-8 w-full" />
            </div>
          ) : (
            <>
              {/* Added explicit debugging message for UI rendering */}
              {console.log("[DEBUG] Rendering", results.length, "results in CommandList")}
              
              {searchQuery.trim().length > 0 && results.length === 0 ? (
                <CommandEmpty>No results found.</CommandEmpty>
              ) : searchQuery.trim().length === 0 && results.length === 0 ? (
                <div className="py-6 text-center text-sm">
                  <p className="text-muted-foreground">Start typing to search...</p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Search for pages, blog posts, or tags
                  </p>
                </div>
              ) : (
                renderResults()
              )}
            </>
          )}
        </CommandList>
      </Command>
    </CommandDialog>
  );
};

export default CommandSearch;
