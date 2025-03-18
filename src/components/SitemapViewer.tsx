
import React, { useEffect, useState } from 'react';
import { Download, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const SitemapViewer: React.FC = () => {
  const [sitemapContent, setSitemapContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [schemaMarkup, setSchemaMarkup] = useState<string>('');
  const [activeTab, setActiveTab] = useState<string>('sitemap');

  useEffect(() => {
    const fetchSitemap = async () => {
      try {
        setLoading(true);
        const response = await fetch('/sitemap.xml');
        if (!response.ok) {
          throw new Error(`Failed to fetch sitemap: ${response.status}`);
        }
        const text = await response.text();
        setSitemapContent(text);
        setError(null);
        
        // Generate schema markup after sitemap is loaded
        generateSchemaMarkup();
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
        console.error('Error fetching sitemap:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchSitemap();
  }, []);

  const generateSchemaMarkup = () => {
    // Website schema markup (for all pages)
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Presidency Solutions",
      "url": "https://presidencysolutions.com/",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://presidencysolutions.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    };

    // Organization schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Presidency Solutions",
      "url": "https://presidencysolutions.com/",
      "logo": "https://presidencysolutions.com/lovable-uploads/2b4e222c-4468-46fe-8613-555cefe4eac4.png",
      "description": "Presidency Solutions helps organizations maximize their impact with AI, Data Engineering, Databricks Solutions, Cloud Modernization, and Talent Solutions.",
      "sameAs": [
        "https://www.linkedin.com/company/presidency-solutions/",
        "https://twitter.com/presidencytech"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "United States"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "email": "support@presidencysolutions.com"
      }
    };

    // Home page schema
    const homePageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "url": "https://presidencysolutions.com/",
      "name": "Presidency Solutions | AI, Data Engineering & Cloud Modernization",
      "description": "Presidency Solutions helps organizations maximize their impact with AI, Data Engineering, Databricks Solutions, Cloud Modernization, and Talent Solutions.",
      "isPartOf": {
        "@id": "https://presidencysolutions.com/#website"
      }
    };

    // Service pages schema
    const servicesSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "provider": {
        "@type": "Organization",
        "name": "Presidency Solutions"
      },
      "serviceType": "AI and Data Engineering Services",
      "areaServed": "Worldwide",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "AI and Data Engineering Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Services",
              "url": "https://presidencysolutions.com/services/ai",
              "description": "Enterprise AI implementation, custom model development, and AI strategy consulting"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Data Engineering",
              "url": "https://presidencysolutions.com/services/data",
              "description": "Data pipeline development, ETL solutions, and data infrastructure modernization"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Databricks Solutions",
              "url": "https://presidencysolutions.com/services/databricks",
              "description": "Databricks implementation, optimization, and managed services"
            }
          }
        ]
      }
    };

    // Product pages schema
    const productsSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Product",
            "name": "Leapfrog",
            "description": "AI platform for automation and intelligence",
            "url": "https://presidencysolutions.com/products/leapfrog",
            "brand": {
              "@type": "Brand",
              "name": "Presidency Solutions"
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Product",
            "name": "Omniflow",
            "description": "Data transformation and workflow automation",
            "url": "https://presidencysolutions.com/products/omniflow",
            "brand": {
              "@type": "Brand",
              "name": "Presidency Solutions"
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "Product",
            "name": "Kube8r",
            "description": "Cloud modernization platform",
            "url": "https://presidencysolutions.com/products/kube8r",
            "brand": {
              "@type": "Brand",
              "name": "Presidency Solutions"
            }
          }
        }
      ]
    };

    // Blog schema
    const blogSchema = {
      "@context": "https://schema.org",
      "@type": "Blog",
      "url": "https://presidencysolutions.com/blog",
      "name": "Blog | Presidency Solutions",
      "description": "Stories and insights on AI adoption, industry shifts, and real-world impact from Presidency Solutions.",
      "publisher": {
        "@type": "Organization",
        "name": "Presidency Solutions",
        "logo": {
          "@type": "ImageObject",
          "url": "https://presidencysolutions.com/lovable-uploads/2b4e222c-4468-46fe-8613-555cefe4eac4.png"
        }
      }
    };

    // About page schema
    const aboutSchema = {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "url": "https://presidencysolutions.com/about",
      "name": "About Presidency Solutions | AI & Data Engineering Experts",
      "description": "Learn about Presidency Solutions, a leading technology company empowering organizations to maximize their impact with AI, Data Engineering, and Cloud Modernization solutions.",
      "publisher": {
        "@type": "Organization",
        "name": "Presidency Solutions"
      }
    };

    // Careers page schema
    const careersSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "url": "https://presidencysolutions.com/careers",
      "name": "Careers | Presidency Solutions",
      "description": "Join our team at Presidency Solutions and help organizations maximize their impact with AI and data engineering. Explore exciting career opportunities.",
      "publisher": {
        "@type": "Organization",
        "name": "Presidency Solutions"
      }
    };

    // Talent page schema
    const talentSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "url": "https://presidencysolutions.com/talent",
      "name": "Talent Solutions | Presidency Solutions",
      "description": "Access top-tier AI, data, and cloud engineering talent to help your organization succeed. Our expert staffing solutions connect you with the right professionals.",
      "publisher": {
        "@type": "Organization",
        "name": "Presidency Solutions"
      }
    };

    // Generate schemaMarkup with proper formatting
    const allSchemas = [
      websiteSchema,
      organizationSchema,
      homePageSchema,
      servicesSchema,
      productsSchema,
      blogSchema,
      aboutSchema,
      careersSchema,
      talentSchema
    ];

    const formattedSchemas = allSchemas.map(schema => 
      `<script type="application/ld+json">\n${JSON.stringify(schema, null, 2)}\n</script>`
    ).join('\n\n');

    setSchemaMarkup(formattedSchemas);
  };

  const downloadFile = (content: string, filename: string, contentType: string) => {
    const blob = new Blob([content], { type: contentType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const downloadSitemap = () => {
    downloadFile(sitemapContent, 'sitemap.xml', 'application/xml');
  };

  const downloadSchema = () => {
    downloadFile(schemaMarkup, 'schema-markup.html', 'text/html');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="mb-4 w-full">
          <TabsTrigger value="sitemap" className="flex-1">Sitemap XML</TabsTrigger>
          <TabsTrigger value="schema" className="flex-1">Schema Markup</TabsTrigger>
        </TabsList>
        
        <TabsContent value="sitemap" className="mt-2">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Sitemap XML Preview</h2>
          
          {loading && <p className="text-gray-500">Loading sitemap...</p>}
          
          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-md text-red-600 mb-4">
              <h3 className="font-medium">Error loading sitemap</h3>
              <p>{error}</p>
            </div>
          )}
          
          {!loading && !error && (
            <div className="relative">
              <pre className="bg-gray-50 p-4 rounded-md overflow-x-auto text-sm text-gray-800 border border-gray-200 max-h-[500px]">
                {sitemapContent}
              </pre>
              <div className="absolute top-2 right-2 flex gap-2">
                <Button 
                  size="sm"
                  variant="outline"
                  className="inline-flex items-center px-2.5 py-1.5 text-xs font-medium rounded"
                  onClick={downloadSitemap}
                >
                  <Download className="h-3.5 w-3.5 mr-1" />
                  Download
                </Button>
                <Button 
                  size="sm"
                  className="inline-flex items-center px-2.5 py-1.5 text-xs font-medium rounded text-blue-700 bg-blue-100 hover:bg-blue-200"
                  asChild
                >
                  <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer">
                    Open in new tab
                  </a>
                </Button>
              </div>
            </div>
          )}
          
          <div className="mt-4">
            <p className="text-sm text-gray-600">
              This tab shows the raw XML content of your sitemap. If there are any XML errors, they will be displayed in the browser when opening the sitemap directly.
            </p>
          </div>
        </TabsContent>
        
        <TabsContent value="schema" className="mt-2">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Schema Markup</h2>
          
          {loading ? (
            <p className="text-gray-500">Generating schema markup...</p>
          ) : (
            <>
              <div className="mb-4">
                <p className="text-sm text-gray-600">
                  Schema markup helps search engines understand your website content better, potentially improving search results and enabling rich snippets.
                </p>
              </div>
              
              <div className="relative">
                <pre className="bg-gray-50 p-4 rounded-md overflow-x-auto text-sm text-gray-800 border border-gray-200 max-h-[500px]">
                  {schemaMarkup}
                </pre>
                <div className="absolute top-2 right-2">
                  <Button 
                    size="sm"
                    variant="outline"
                    className="inline-flex items-center px-2.5 py-1.5 text-xs font-medium rounded"
                    onClick={downloadSchema}
                  >
                    <Download className="h-3.5 w-3.5 mr-1" />
                    Download
                  </Button>
                </div>
              </div>
              
              <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-md">
                <h3 className="font-medium text-blue-800 mb-2">Implementation Instructions</h3>
                <ol className="list-decimal ml-5 text-sm text-blue-700">
                  <li className="mb-1">Copy the schema markup above.</li>
                  <li className="mb-1">Add it to the <code>&lt;head&gt;</code> section of your HTML pages.</li>
                  <li className="mb-1">For page-specific schema, add only the relevant markup to that page.</li>
                  <li className="mb-1">Test your schema with <a href="https://validator.schema.org/" target="_blank" rel="noopener noreferrer" className="underline">Schema.org Validator</a> or <a href="https://search.google.com/test/rich-results" target="_blank" rel="noopener noreferrer" className="underline">Google's Rich Results Test</a>.</li>
                </ol>
              </div>
            </>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SitemapViewer;
