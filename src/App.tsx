
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
