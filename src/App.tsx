
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CommandSearch from "./components/CommandSearch";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProductLeapfrog from "./pages/ProductLeapfrog";
import ProductOmniflow from "./pages/ProductOmniflow";
import ProductKube8r from "./pages/ProductKube8r";
import ServicesDatabricks from "./pages/ServicesDatabricks";
import ServicesAI from "./pages/ServicesAI";
import ServicesData from "./pages/ServicesData";
import Talent from "./pages/Talent";
import TalentNearshore from "./pages/TalentNearshore";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import ServicesInterestForm from "./pages/ServicesInterestForm";
import ProductInterestForm from "./pages/ProductInterestForm";
import DatabricksInterestForm from "./pages/DatabricksInterestForm";
import TalentInterestForm from "./pages/TalentInterestForm";
import GetStarted from "./pages/GetStarted";
import BookACall from "./pages/BookACall";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Sitemap from "./pages/Sitemap";
import Cookies from "./pages/Cookies";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CommandSearch />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products/leapfrog" element={<ProductLeapfrog />} />
          <Route path="/products/omniflow" element={<ProductOmniflow />} />
          <Route path="/products/kube8r" element={<ProductKube8r />} />
          <Route path="/services/databricks" element={<ServicesDatabricks />} />
          <Route path="/services/ai" element={<ServicesAI />} />
          <Route path="/services/data" element={<ServicesData />} />
          <Route path="/talent" element={<Talent />} />
          <Route path="/talent/nearshore" element={<TalentNearshore />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/services-interest-form" element={<ServicesInterestForm />} />
          <Route path="/product-interest-form" element={<ProductInterestForm />} />
          <Route path="/databricks-interest-form" element={<DatabricksInterestForm />} />
          <Route path="/talent-interest-form" element={<TalentInterestForm />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/book-a-call" element={<BookACall />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
