
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const BookACall = () => {
  return (
    <>
      <Helmet>
        <title>Book a Call | Borderless AI</title>
        <meta name="description" content="Schedule a consultation with our experts" />
      </Helmet>
      <ScrollToTop />
      <Navbar />
      
      <main className="pt-16 min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
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
