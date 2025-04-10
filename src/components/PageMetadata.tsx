
import { Helmet } from "react-helmet";
import { useEffect } from "react";

interface PageMetadataProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: string;
  twitterCard?: string;
  children?: React.ReactNode;
}

const PageMetadata = ({
  title,
  description,
  image,
  url,
  type = "website",
  twitterCard = "summary_large_image",
  children,
}: PageMetadataProps) => {
  const origin = window.location.origin;
  const currentUrl = url ? `${origin}${url.startsWith('/') ? '' : '/'}${url}` : window.location.href;
  
  // Ensure image is an absolute URL with improved handling
  const imageUrl = image ? (
    image.startsWith('http') ? image : `${origin}${image.startsWith('/') ? '' : '/'}${image}`
  ) : `${origin}/lovable-uploads/16521bca-3a39-4376-8e26-15995aa57549.png`;

  // Helper function to detect if we're in a prerender context
  const isPrerenderContext = () => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    const botPatterns = ['bot', 'googlebot', 'prerender', 'headless', 'lighthouse'];
    return botPatterns.some(pattern => userAgent.includes(pattern)) || 
           Boolean(window.__PRERENDER_STATUS) ||
           Boolean((window as any).__PRERENDER_INJECTED);
  };

  // Use useEffect to set prerenderReady to true when metadata is loaded
  useEffect(() => {
    const isPrerender = isPrerenderContext();
    
    if (isPrerender) {
      console.log('🤖 Bot/Prerender detected in PageMetadata component');
      console.log('🔍 Metadata being served:', { title, description, imageUrl, currentUrl });
    }
    
    if (typeof window !== 'undefined' && window.prerenderReady === false) {
      console.log('⚙️ PageMetadata: Setting prerenderReady to true soon');
      
      // Set a timeout to ensure images have time to load
      setTimeout(() => {
        console.log('✅ PageMetadata: Now setting prerenderReady to true');
        window.prerenderReady = true;
        
        // Add additional logging for debugging
        if (isPrerender) {
          console.log('📊 Final state before prerender completion:', {
            documentTitle: document.title,
            metaTags: Array.from(document.querySelectorAll('meta')).map(meta => ({
              name: meta.getAttribute('name') || meta.getAttribute('property'),
              content: meta.getAttribute('content')
            })),
            imageLoaded: Boolean(imageUrl),
            prerenderReady: window.prerenderReady
          });
        }
      }, 2000);
    }
  }, [title, description, imageUrl, currentUrl]);

  return (
    <Helmet>
      {/* Basic metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph metadata */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Presidency Solutions" />
      
      {/* Twitter card metadata */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />
      
      {/* Enhanced Prerender specific meta tags */}
      <meta name="prerender-status-code" content="200" />
      <meta name="prerender-detection" content="Prerender.io integration active" />
      <meta name="prerender-header" content="X-Prerender-Processed: true" />
      <meta name="fragment" content="!" />
      
      {/* Additional indicators for crawlers */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Allow for additional custom meta tags */}
      {children}
    </Helmet>
  );
};

export default PageMetadata;
