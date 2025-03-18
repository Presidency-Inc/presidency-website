import { useEffect, useState } from "react";
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
import { DialogTitle } from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";

type SearchResult = {
  id: string;
  title: string;
  description?: string;
  url: string;
  type: 'page' | 'blog' | 'tag';
  iconName?: string;
};

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
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    openSearchFn = () => setOpen(true);
    return () => {
      openSearchFn = null;
    };
  }, []);

  useEffect(() => {
    fetchTags();
  }, []);

  useEffect(() => {
    if (!open) {
      const timer = setTimeout(() => {
        setSearchQuery("");
        setResults([]);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [open]);

  useEffect(() => {
    if (searchQuery.length > 0) {
      searchResults();
    } else if (searchQuery.length === 0) {
      setResults([]);
    }
  }, [searchQuery]);

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
        console.log('Fetched tags:', formattedTags.length);
      }
    } catch (error) {
      console.error('Error fetching tags:', error);
    }
  };

  const searchBlogPosts = async () => {
    if (searchQuery.length === 0) return [];
    
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('id, title, description, slug')
        .or(`title.ilike.%${searchQuery}%,description.ilike.%${searchQuery}%`);
      
      if (error) {
        console.error('Error searching blog posts:', error);
        return [];
      }
      
      console.log('Blog search query:', searchQuery);
      console.log('Blog search results:', data?.length || 0);
      
      const blogResults = data ? data.map(post => ({
        id: post.id,
        title: post.title,
        description: post.description,
        url: `/blog/${post.slug}`,
        type: 'blog' as const
      })) : [];
      
      return blogResults;
      
    } catch (error) {
      console.error('Error searching blog posts:', error);
      return [];
    }
  };

  const searchResults = async () => {
    setLoading(true);
    
    try {
      console.log('Searching with query:', searchQuery);
      
      const filteredPages = pages.filter(page => 
        page.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      const filteredTags = tags.filter(tag => 
        tag.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      const blogResults = await searchBlogPosts();
      
      const combinedResults = [...filteredPages, ...blogResults, ...filteredTags];
      
      console.log('Search query:', searchQuery);
      console.log('Pages results:', filteredPages.length);
      console.log('Tags results:', filteredTags.length);
      console.log('Blog results:', blogResults.length);
      console.log('Combined results:', combinedResults.length);
      
      setResults(combinedResults);
    } catch (error) {
      console.error('Error searching:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSelect = (result: SearchResult) => {
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

  const renderSearchResults = () => {
    console.log('RENDER CHECK - Query:', searchQuery, 'Results:', results.length, 'Loading:', loading);
    
    if (loading) {
      return (
        <div className="flex items-center justify-center py-6">
          <div className="h-5 w-5 animate-spin rounded-full border-t-2 border-blue-500"></div>
          <span className="ml-2 text-sm text-muted-foreground">Searching...</span>
        </div>
      );
    }

    if (searchQuery.length === 0) {
      return (
        <div className="py-6 text-center text-sm">
          <p className="text-muted-foreground">Start typing to search...</p>
          <p className="mt-2 text-xs text-muted-foreground">
            Search for pages, blog posts, or tags
          </p>
        </div>
      );
    }

    if (results.length > 0) {
      const pageResults = results.filter(r => r.type === 'page');
      const blogResults = results.filter(r => r.type === 'blog');
      const tagResults = results.filter(r => r.type === 'tag');

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
          
          {blogResults.length > 0 && (
            <>
              {pageResults.length > 0 && <CommandSeparator />}
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
            </>
          )}
          
          {tagResults.length > 0 && (
            <>
              {(pageResults.length > 0 || blogResults.length > 0) && <CommandSeparator />}
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
            </>
          )}
        </>
      );
    }

    return (
      <CommandEmpty>
        <p className="p-4 text-center text-sm">No results found for "{searchQuery}".</p>
      </CommandEmpty>
    );
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <DialogTitle className="sr-only">Search</DialogTitle>
      <Command className="rounded-lg border shadow-md">
        <CommandInput
          placeholder="Search pages, blog posts, and tags..."
          value={searchQuery}
          onValueChange={setSearchQuery}
        />
        <CommandList className="max-h-[400px] overflow-y-auto">
          {renderSearchResults()}
        </CommandList>
      </Command>
    </CommandDialog>
  );
};

export default CommandSearch;
