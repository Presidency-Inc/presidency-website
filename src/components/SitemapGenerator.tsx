
import React, { useEffect } from 'react';

interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

interface SitemapGeneratorProps {
  baseUrl: string;
  urls: SitemapUrl[];
}

const SitemapGenerator: React.FC<SitemapGeneratorProps> = ({ baseUrl, urls }) => {
  useEffect(() => {
    const generateXmlSitemap = () => {
      let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
      xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
      
      urls.forEach(url => {
        xml += '  <url>\n';
        xml += `    <loc>${baseUrl}${url.loc}</loc>\n`;
        if (url.lastmod) {
          xml += `    <lastmod>${url.lastmod}</lastmod>\n`;
        }
        if (url.changefreq) {
          xml += `    <changefreq>${url.changefreq}</changefreq>\n`;
        }
        if (url.priority !== undefined) {
          xml += `    <priority>${url.priority}</priority>\n`;
        }
        xml += '  </url>\n';
      });
      
      xml += '</urlset>';
      
      // For development purposes, log to console
      console.log('Generated XML Sitemap:', xml);
      
      // In a real production environment, you would write this to a file
      const blob = new Blob([xml], { type: 'text/xml' });
      const url = URL.createObjectURL(blob);
      
      // Create download link (for development)
      const a = document.createElement('a');
      a.href = url;
      a.download = 'sitemap.xml';
      a.click();
      
      URL.revokeObjectURL(url);
    };
    
    generateXmlSitemap();
  }, [baseUrl, urls]);
  
  return null;
};

export default SitemapGenerator;
