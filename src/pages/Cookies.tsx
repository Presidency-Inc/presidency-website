
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import StatusBar from "@/components/StatusBar";
import ScrollProgress from "@/components/ScrollProgress";

const Cookies = () => {
  return (
    <>
      <Helmet>
        <title>Cookies Policy | Presidency Solutions</title>
        <meta name="description" content="Learn about how Presidency Solutions uses cookies and similar technologies on our website." />
        <meta name="keywords" content="cookies policy, privacy, data protection, presidency solutions" />
        <meta property="og:title" content="Cookies Policy | Presidency Solutions" />
        <meta property="og:description" content="Learn about how Presidency Solutions uses cookies and similar technologies on our website." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/cookies" />
        <meta property="og:image" content="/lovable-uploads/16521bca-3a39-4376-8e26-15995aa57549.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cookies Policy | Presidency Solutions" />
        <meta name="twitter:description" content="Learn about how Presidency Solutions uses cookies and similar technologies on our website." />
        <meta name="twitter:image" content="/lovable-uploads/16521bca-3a39-4376-8e26-15995aa57549.png" />
      </Helmet>
      <ScrollToTop />
      <StatusBar />
      <Navbar />
      <ScrollProgress />
      
      <main className="pt-24 min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
            <h1 className="text-3xl font-bold mb-6">Cookies Policy</h1>
            <p className="text-gray-700 mb-6">Last updated: March 18, 2025</p>
            
            <div className="prose max-w-none">
              <h2 className="text-xl font-semibold mt-8 mb-4">What Are Cookies</h2>
              <p>Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners.</p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">How We Use Cookies</h2>
              <p>We use cookies for various purposes including:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Ensuring the website functions properly</li>
                <li>Understanding how you use our website</li>
                <li>Enhancing your user experience</li>
                <li>Personalizing your experience based on your preferences</li>
                <li>Providing relevant marketing communications</li>
                <li>Analyzing our website performance and functionality</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">Types of Cookies We Use</h2>
              
              <h3 className="text-lg font-semibold mt-6 mb-3">Essential Cookies</h3>
              <p>These cookies are necessary for the website to function and cannot be switched off. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in, or filling in forms.</p>
              
              <h3 className="text-lg font-semibold mt-6 mb-3">Performance Cookies</h3>
              <p>These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.</p>
              
              <h3 className="text-lg font-semibold mt-6 mb-3">Functional Cookies</h3>
              <p>These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.</p>
              
              <h3 className="text-lg font-semibold mt-6 mb-3">Targeting Cookies</h3>
              <p>These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.</p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">Managing Cookies</h2>
              <p>Most web browsers allow you to manage your cookie preferences. You can set your browser to refuse cookies, or to alert you when cookies are being sent. The Help function within your browser should tell you how.</p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">Changes to Our Cookies Policy</h2>
              <p>We may update our Cookies Policy from time to time. Any changes will be posted on this page and, where appropriate, notified to you.</p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">Contact Us</h2>
              <p>If you have any questions about our Cookies Policy, please contact us at:</p>
              <p className="mb-6">Email: support@presidencysolutions.com</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Cookies;
