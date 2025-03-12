
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

const Navbar = () => {
  const [productsOpen, setProductsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleProducts = () => {
    setProductsOpen(!productsOpen);
    if (servicesOpen) setServicesOpen(false);
  };

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
    if (productsOpen) setProductsOpen(false);
  };

  return (
    <nav className="fixed top-10 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-xl font-semibold text-gray-900">Presidency</span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {/* Products Dropdown */}
            <div className="relative">
              <button 
                onClick={toggleProducts}
                className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
              >
                Products
                {productsOpen ? (
                  <ChevronUp className="ml-1 h-4 w-4" />
                ) : (
                  <ChevronDown className="ml-1 h-4 w-4" />
                )}
              </button>
              
              {productsOpen && (
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg z-50 py-2">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <h3 className="font-medium text-gray-900">Featured Products</h3>
                  </div>
                  <a href="#data-analytics" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Data Analytics
                  </a>
                  <a href="#ai-solutions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    AI Solutions
                  </a>
                  <a href="#cloud-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Cloud Services
                  </a>
                  <a href="#development-tools" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Development Tools
                  </a>
                </div>
              )}
            </div>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button 
                onClick={toggleServices}
                className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
              >
                Services
                {servicesOpen ? (
                  <ChevronUp className="ml-1 h-4 w-4" />
                ) : (
                  <ChevronDown className="ml-1 h-4 w-4" />
                )}
              </button>
              
              {servicesOpen && (
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg z-50 py-2">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <h3 className="font-medium text-gray-900">Our Services</h3>
                  </div>
                  <a href="#consulting" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Consulting
                  </a>
                  <a href="#implementation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Implementation
                  </a>
                  <a href="#training" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Training
                  </a>
                  <a href="#support" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Support
                  </a>
                </div>
              )}
            </div>
            
            <a href="#databricks" className="text-gray-700 hover:text-gray-900 transition-colors">Databricks</a>
            <a href="#teams" className="text-gray-700 hover:text-gray-900 transition-colors">Extended Teams</a>
            <a href="#careers" className="text-gray-700 hover:text-gray-900 transition-colors">Careers</a>
          </div>

          <Button variant="default" className="hidden md:inline-flex items-center bg-black text-white hover:bg-gray-800">
            GET SOLUTIONS
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
