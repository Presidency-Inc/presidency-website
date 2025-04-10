
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import StatusBar from "@/components/StatusBar";
import ScrollProgress from "@/components/ScrollProgress";

const BookACall = () => {
  return (
    <>
      <Helmet>
        <title>Book a Call | Presidency Solutions</title>
        <meta name="description" content="Schedule a consultation with our AI and data engineering experts to discuss your business needs and how we can help you maximize your impact." />
        <meta name="keywords" content="consultation, book a call, expert consultation, AI consultation, data engineering consultation" />
        <meta property="og:title" content="Book a Call | Presidency Solutions" />
        <meta property="og:description" content="Schedule a consultation with our AI and data engineering experts to discuss your business needs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/book-a-call" />
        <meta property="og:image" content="/lovable-uploads/16521bca-3a39-4376-8e26-15995aa57549.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Book a Call | Presidency Solutions" />
        <meta name="twitter:description" content="Schedule a consultation with our AI and data engineering experts to discuss your business needs." />
        <meta name="twitter:image" content="/lovable-uploads/16521bca-3a39-4376-8e26-15995aa57549.png" />
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
