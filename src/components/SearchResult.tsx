
import React from "react";
import { ArrowRight, FileText, Tag, Laptop, PanelLeft, Package, Building2, Brain, Database, Zap, Rabbit, Network, Box, MapPin, Briefcase, MessageSquare, Calendar, Home, BookOpen, Users } from "lucide-react";
import { CommandItem } from "@/components/ui/command";
import { SearchResult as SearchResultType } from "@/hooks/useCommandSearch";

interface SearchResultProps {
  result: SearchResultType;
  onSelect: (result: SearchResultType) => void;
}

export const SearchResult = ({ result, onSelect }: SearchResultProps) => {
  const getIcon = () => {
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

  return (
    <CommandItem
      key={`${result.type}-${result.id}`}
      onSelect={() => onSelect(result)}
      className="flex cursor-pointer items-center justify-between w-full"
    >
      <div className="flex items-center">
        {getIcon()}
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
  );
};
