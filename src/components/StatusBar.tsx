
import { ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const StatusBar = () => {
  const isMobile = useIsMobile();
  const location = useLocation();
  const isProductsActive = location.pathname.startsWith('/products/');
  const isServicesActive = location.pathname.startsWith('/services/') && location.pathname !== '/services/databricks';
  const isDatabricksActive = location.pathname === '/services/databricks';
  const hasActiveNav = isProductsActive || isServicesActive || isDatabricksActive;
  
  if (isMobile) return null;
  
  return (
    <div className={`fixed top-0 left-0 right-0 z-50 bg-[#1a46e5] text-white py-2`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center md:justify-between">
        <div className="flex items-center text-sm">
          <span className="hidden md:inline">
            Join FREE AI Solutions Webinar: Maximize Enterprise Impact - June 15-16, 2023
          </span>
          <span className="md:hidden">FREE AI Webinar: June 15-16</span>
          <Link to="/register" className="flex items-center ml-2 font-medium hover:underline">
            Register Now
            <ArrowRight className="ml-1 h-3 w-3" />
          </Link>
        </div>
        <div className="hidden md:flex space-x-6 text-sm">
          <Link to="/blog" className="hover:underline">Blog</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/contact" className="hover:underline">Contact Sales</Link>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
