
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import StatusBar from "@/components/StatusBar";
import ScrollProgress from "@/components/ScrollProgress";
import { usePageMetadata } from "@/hooks/usePageMetadata";

const BookACall = () => {
  const { metadata } = usePageMetadata("/book-a-call");
  
  // Extract string values for metadata to avoid Symbol conversion issues
  const title = metadata?.title || "Book a Call | Presidency Solutions";
  const description = metadata?.description || "Schedule a consultation with our AI and data engineering experts to discuss your business needs and how we can help you maximize your impact.";
  const ogType = metadata?.og_type || "website";
  const ogUrl = metadata?.fullUrl || `${window.location.origin}/book-a-call`;
  const ogImage = metadata?.image_url || `${window.location.origin}/lovable-uploads/16521bca-3a39-4376-8e26-15995aa57549.png`;
  const twitterCard = metadata?.twitter_card || "summary_large_image";
  
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="consultation, book a call, expert consultation, AI consultation, data engineering consultation" />
        
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content={ogType} />
        <meta property="og:url" content={ogUrl} />
        <meta property="og:image" content={ogImage} />
        
        <meta name="twitter:card" content={twitterCard} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
      </Helmet>
      <ScrollToTop />
      <StatusBar />
      <Navbar />
      <ScrollProgress />
      
      <main className="pt-24 min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Book a Call With Our Team</h1>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe 
              frameBorder="0" 
              width="100%" 
              height="720" 
              src="https://meet.brevo.com/presidency/borderless?l=intro"
              title="Booking Calendar"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default BookACall;
