
import React from 'react';
import { Routes as RouterRoutes, Route } from 'react-router-dom';
import Index from './pages/Index';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Careers from './pages/Careers';
import Cookies from './pages/Cookies';
import DatabricksInterestForm from './pages/DatabricksInterestForm';
import GetStarted from './pages/GetStarted';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Privacy from './pages/Privacy';
import ProductInterestForm from './pages/ProductInterestForm';
import ProductKube8r from './pages/ProductKube8r';
import ProductLeapfrog from './pages/ProductLeapfrog';
import ProductOmniflow from './pages/ProductOmniflow';
import ServicesAI from './pages/ServicesAI';
import ServicesData from './pages/ServicesData';
import ServicesDatabricks from './pages/ServicesDatabricks';
import ServicesInterestForm from './pages/ServicesInterestForm';
import Sitemap from './pages/Sitemap';
import Talent from './pages/Talent';
import TalentInterestForm from './pages/TalentInterestForm';
import TalentNearshore from './pages/TalentNearshore';
import Terms from './pages/Terms';
import BookACall from './pages/BookACall';
import Admin from './pages/Admin';

const Routes = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogPost />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/cookies" element={<Cookies />} />
      <Route path="/databricks-interest" element={<DatabricksInterestForm />} />
      <Route path="/get-started" element={<GetStarted />} />
      <Route path="/login" element={<Login />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/product-interest" element={<ProductInterestForm />} />
      <Route path="/products/kube8r" element={<ProductKube8r />} />
      <Route path="/products/leapfrog" element={<ProductLeapfrog />} />
      <Route path="/products/omniflow" element={<ProductOmniflow />} />
      <Route path="/services/ai" element={<ServicesAI />} />
      <Route path="/services/data" element={<ServicesData />} />
      <Route path="/services/databricks" element={<ServicesDatabricks />} />
      <Route path="/services-interest" element={<ServicesInterestForm />} />
      <Route path="/sitemap" element={<Sitemap />} />
      <Route path="/talent" element={<Talent />} />
      <Route path="/talent-interest" element={<TalentInterestForm />} />
      <Route path="/talent/nearshore" element={<TalentNearshore />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/book-a-call" element={<BookACall />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="*" element={<NotFound />} />
    </RouterRoutes>
  );
};

export default Routes;
