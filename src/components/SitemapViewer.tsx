
import React, { useEffect, useState } from 'react';

const SitemapViewer: React.FC = () => {
  const [sitemapContent, setSitemapContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
        console.error('Error fetching sitemap:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchSitemap();
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
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
          <pre className="bg-gray-50 p-4 rounded-md overflow-x-auto text-sm text-gray-800 border border-gray-200">
            {sitemapContent}
          </pre>
          <div className="absolute top-2 right-2">
            <a 
              href="/sitemap.xml" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-2.5 py-1.5 text-xs font-medium rounded text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Open in new tab
            </a>
          </div>
        </div>
      )}
      
      <div className="mt-4">
        <p className="text-sm text-gray-600">
          This component shows the raw XML content of your sitemap. If there are any XML errors, they will be displayed in the browser when opening the sitemap directly.
        </p>
      </div>
    </div>
  );
};

export default SitemapViewer;
