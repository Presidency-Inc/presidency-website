import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import StatusBar from "@/components/StatusBar";
import ScrollProgress from "@/components/ScrollProgress";
import { Link } from "react-router-dom";
import SitemapViewer from "@/components/SitemapViewer";

const Sitemap = () => {
  return (
    <>
      <Helmet>
        <title>Sitemap | Presidency Solutions</title>
        <meta name="description" content="Navigate through all pages of Presidency Solutions. Find our services, products, company information, and resources in one place." />
        <meta name="keywords" content="sitemap, presidency solutions sitemap, website navigation, site index" />
        <meta property="og:title" content="Sitemap | Presidency Solutions" />
        <meta property="og:description" content="Navigate through all pages of Presidency Solutions. Find our services, products, company information, and resources in one place." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/sitemap" />
        <meta property="og:image" content="/lovable-uploads/2b4e222c-4468-46fe-8613-555cefe4eac4.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/lovable-uploads/2b4e222c-4468-46fe-8613-555cefe4eac4.png" />
        <link rel="canonical" href="https://presidencysolutions.com/sitemap" />
      </Helmet>
      <ScrollToTop />
      <StatusBar />
      <Navbar />
      <ScrollProgress />
      
      <main className="pt-24 min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Sitemap</h1>
          
          <div className="mb-8 text-center">
            <p className="text-gray-600 max-w-3xl mx-auto">
              Welcome to our sitemap. This page provides a complete overview of all pages available on the Presidency Solutions website.
              For search engines, our <a href="/sitemap.xml" className="text-blue-600 hover:text-blue-800">XML sitemap</a> is also available.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Services Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b pb-2">Services</h2>
              <ul className="space-y-2">
                <li><Link to="/services/ai" className="text-blue-600 hover:text-blue-800">Artificial Intelligence</Link></li>
                <li><Link to="/services/data" className="text-blue-600 hover:text-blue-800">Data Engineering</Link></li>
                <li><Link to="/services/databricks" className="text-blue-600 hover:text-blue-800">Databricks Solutions</Link></li>
                <li><Link to="/products/kube8r" className="text-blue-600 hover:text-blue-800">Cloud Modernization</Link></li>
                <li><Link to="/services-interest-form" className="text-blue-600 hover:text-blue-800">Services Interest Form</Link></li>
              </ul>
            </div>
            
            {/* Products Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b pb-2">Products</h2>
              <ul className="space-y-2">
                <li><Link to="/products/leapfrog" className="text-blue-600 hover:text-blue-800">Leapfrog</Link></li>
                <li><Link to="/products/omniflow" className="text-blue-600 hover:text-blue-800">Omniflow</Link></li>
                <li><Link to="/products/kube8r" className="text-blue-600 hover:text-blue-800">Kube8r</Link></li>
                <li><Link to="/product-interest-form" className="text-blue-600 hover:text-blue-800">Product Interest Form</Link></li>
              </ul>
            </div>
            
            {/* Talent Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b pb-2">Talent</h2>
              <ul className="space-y-2">
                <li><Link to="/talent" className="text-blue-600 hover:text-blue-800">Talent Solutions</Link></li>
                <li><Link to="/talent/nearshore" className="text-blue-600 hover:text-blue-800">Nearshore</Link></li>
                <li><Link to="/talent-interest-form" className="text-blue-600 hover:text-blue-800">Talent Interest Form</Link></li>
                <li><Link to="/careers" className="text-blue-600 hover:text-blue-800">Careers at Presidency</Link></li>
              </ul>
            </div>
            
            {/* Company Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b pb-2">Company</h2>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-blue-600 hover:text-blue-800">About</Link></li>
                <li><Link to="/careers" className="text-blue-600 hover:text-blue-800">Careers</Link></li>
                <li><Link to="/book-a-call" className="text-blue-600 hover:text-blue-800">Contact</Link></li>
                <li><Link to="/admin" className="text-blue-600 hover:text-blue-800">Admin Login</Link></li>
              </ul>
            </div>
            
            {/* Resources Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b pb-2">Resources</h2>
              <ul className="space-y-2">
                <li><Link to="/blog" className="text-blue-600 hover:text-blue-800">Blog & Media</Link></li>
                <li><Link to="/get-started" className="text-blue-600 hover:text-blue-800">Get Started Guide</Link></li>
              </ul>
            </div>
            
            {/* Interest Forms */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b pb-2">Interest Forms</h2>
              <ul className="space-y-2">
                <li><Link to="/services-interest-form" className="text-blue-600 hover:text-blue-800">Services Interest Form</Link></li>
                <li><Link to="/product-interest-form" className="text-blue-600 hover:text-blue-800">Product Interest Form</Link></li>
                <li><Link to="/databricks-interest-form" className="text-blue-600 hover:text-blue-800">Databricks Interest Form</Link></li>
                <li><Link to="/talent-interest-form" className="text-blue-600 hover:text-blue-800">Talent Interest Form</Link></li>
              </ul>
            </div>
            
            {/* Call to Action */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b pb-2">Get Started</h2>
              <ul className="space-y-2">
                <li><Link to="/get-started" className="text-blue-600 hover:text-blue-800">Get Started</Link></li>
                <li><Link to="/book-a-call" className="text-blue-600 hover:text-blue-800">Book a Call</Link></li>
              </ul>
            </div>
            
            {/* Legal */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b pb-2">Legal</h2>
              <ul className="space-y-2">
                <li><Link to="/terms" className="text-blue-600 hover:text-blue-800">Terms of Service</Link></li>
                <li><Link to="/privacy" className="text-blue-600 hover:text-blue-800">Privacy Policy</Link></li>
                <li><Link to="/cookies" className="text-blue-600 hover:text-blue-800">Cookies Policy</Link></li>
                <li><Link to="/sitemap" className="text-blue-600 hover:text-blue-800">Sitemap</Link></li>
              </ul>
            </div>
          </div>
          
          {/* XML Sitemap Viewer */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">XML Sitemap</h2>
            <SitemapViewer />
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Sitemap;
