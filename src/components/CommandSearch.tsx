
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { SearchResult as SearchResultComponent } from "@/components/SearchResult";
import { useCommandSearch, SearchResult } from "@/hooks/useCommandSearch";

// Create a singleton to access command search from anywhere
let openSearchFn: (() => void) | null = null;

export const openCommandSearch = () => {
  if (openSearchFn) {
    openSearchFn();
  }
};

const CommandSearch = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // Register open function
  useEffect(() => {
    openSearchFn = () => setOpen(true);
    return () => { openSearchFn = null; };
  }, []);

  // Initialize search hook
  const {
    isLoading,
    searchInput,
    setSearchInput,
    performSearch,
    pageResults,
    blogResults,
    tagResults
  } = useCommandSearch({ isOpen: open });

  // Handle search with debounce
  useEffect(() => {
    if (!open) return;
    
    const timerId = setTimeout(() => {
      performSearch(searchInput);
    }, 300);
    
    return () => clearTimeout(timerId);
  }, [searchInput, performSearch, open]);

  // Handle immediate search on Enter key
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      performSearch(searchInput);
    }
  };

  // Keyboard shortcut to open/close dialog
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

  // Handle search result selection
  const handleSelect = useCallback((result: SearchResult) => {
    // Track the search if analytics available
    if (window.gtag) {
      window.gtag('event', 'search_navigation', {
        search_term: searchInput,
        destination: result.url,
        result_type: result.type
      });
    }
    
    // Navigate and close dialog
    navigate(result.url);
    setOpen(false);
  }, [navigate, searchInput]);

  // Reset input when dialog closes
  useEffect(() => {
    if (!open) {
      const timer = setTimeout(() => {
        setSearchInput("");
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [open, setSearchInput]);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <Command className="rounded-lg border-none">
        <CommandInput 
          placeholder="Search pages, blog posts, and tags..." 
          value={searchInput}
          onValueChange={setSearchInput}
          onKeyDown={handleKeyDown}
        />
        <CommandList>
          {isLoading ? (
            <div className="py-6 text-center flex items-center justify-center">
              <Loader2 className="h-4 w-4 animate-spin mr-2" />
              <span className="text-sm text-muted-foreground">Searching...</span>
            </div>
          ) : pageResults.length === 0 && blogResults.length === 0 && tagResults.length === 0 ? (
            <CommandEmpty>
              {searchInput ? "No results found." : "Start typing to search..."}
            </CommandEmpty>
          ) : (
            <>
              {pageResults.length > 0 && (
                <CommandGroup heading="Pages">
                  {pageResults.map((result) => (
                    <SearchResultComponent 
                      key={`page-${result.id}`}
                      result={result} 
                      onSelect={handleSelect} 
                    />
                  ))}
                </CommandGroup>
              )}
              
              {pageResults.length > 0 && blogResults.length > 0 && (
                <CommandSeparator />
              )}
              
              {blogResults.length > 0 && (
                <CommandGroup heading="Blog Posts">
                  {blogResults.map((result) => (
                    <SearchResultComponent 
                      key={`blog-${result.id}`}
                      result={result} 
                      onSelect={handleSelect} 
                    />
                  ))}
                </CommandGroup>
              )}
              
              {(pageResults.length > 0 || blogResults.length > 0) && tagResults.length > 0 && (
                <CommandSeparator />
              )}
              
              {tagResults.length > 0 && (
                <CommandGroup heading="Tags">
                  {tagResults.map((result) => (
                    <SearchResultComponent 
                      key={`tag-${result.id}`}
                      result={result} 
                      onSelect={handleSelect} 
                    />
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
