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

type SearchResult = {
  id: string;
  title: string;
  description?: string;
  url: string;
  type: 'page' | 'blog' | 'tag';
  iconName?: string;
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
    fetchTags();
  }, []);

  useEffect(() => {
    if (searchQuery.trim().length > 1) {
      searchBlogPosts();
    } else {
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
      }
    } catch (error) {
      console.error('Error fetching tags:', error);
    }
  };

  const searchBlogPosts = async () => {
    if (searchQuery.trim().length <= 1) return;
    
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('id, title, description, slug')
        .or(`title.ilike.%${searchQuery}%,description.ilike.%${searchQuery}%`)
        .limit(5);
      
      if (error) {
        console.error('Error searching blog posts:', error);
        return;
      }

      const filteredPages = pages.filter(page => 
        page.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      const filteredTags = tags.filter(tag => 
        tag.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      const blogResults = data ? data.map(post => ({
        id: post.id,
        title: post.title,
        description: post.description,
        url: `/blog/${post.slug}`,
        type: 'blog' as const
      })) : [];
      
      setResults([...filteredPages, ...blogResults, ...filteredTags]);
      
    } catch (error) {
      console.error('Error searching blog posts:', error);
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

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed top-24 right-4 z-50 flex h-8 w-8 items-center justify-center rounded-md border border-input bg-white shadow-sm transition-all hover:bg-accent sm:right-6 md:top-28"
        aria-label="Search"
      >
        <Search className="h-4 w-4" />
      </button>
      
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command className="rounded-lg border shadow-md">
          <div className="flex items-center border-b px-3">
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <CommandInput
              placeholder="Search pages, blog posts, and tags..."
              value={searchQuery}
              onValueChange={setSearchQuery}
              className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
          <CommandList>
            <CommandEmpty>
              {loading ? (
                <div className="flex items-center justify-center py-6">
                  <div className="h-5 w-5 animate-spin rounded-full border-t-2 border-blue-500"></div>
                  <span className="ml-2 text-sm text-muted-foreground">Searching...</span>
                </div>
              ) : (
                <p className="p-4 text-center text-sm">No results found.</p>
              )}
            </CommandEmpty>
            
            {results.length > 0 && (
              <>
                {results.filter(r => r.type === 'page').length > 0 && (
                  <CommandGroup heading="Pages">
                    {results
                      .filter(result => result.type === 'page')
                      .map(result => (
                        <CommandItem
                          key={result.id}
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
                
                {results.filter(r => r.type === 'blog').length > 0 && (
                  <>
                    <CommandSeparator />
                    <CommandGroup heading="Blog Posts">
                      {results
                        .filter(result => result.type === 'blog')
                        .map(result => (
                          <CommandItem
                            key={result.id}
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
                
                {results.filter(r => r.type === 'tag').length > 0 && (
                  <>
                    <CommandSeparator />
                    <CommandGroup heading="Tags">
                      {results
                        .filter(result => result.type === 'tag')
                        .map(result => (
                          <CommandItem
                            key={result.id}
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
            )}
            
            {searchQuery.length <= 1 && (
              <div className="py-6 text-center text-sm">
                <p className="text-muted-foreground">Start typing to search...</p>
                <p className="mt-2 text-xs text-muted-foreground">
                  Search for pages, blog posts, or tags
                </p>
              </div>
            )}
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  );
};

export default CommandSearch;
