
import { Helmet } from "react-helmet";

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
  const currentUrl = url ? `${origin}${url}` : window.location.href;
  
  // Ensure image is an absolute URL
  const imageUrl = image ? (
    image.startsWith('http') ? image : `${origin}${image.startsWith('/') ? '' : '/'}${image}`
  ) : `${origin}/lovable-uploads/16521bca-3a39-4376-8e26-15995aa57549.png`;

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
      
      {/* Allow for additional custom meta tags */}
      {children}
    </Helmet>
  );
};

export default PageMetadata;
