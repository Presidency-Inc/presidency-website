
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-xl font-semibold text-gray-900">Presidency</span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-gray-700 hover:text-gray-900 transition-colors">Products</a>
            <a href="#services" className="text-gray-700 hover:text-gray-900 transition-colors">Services</a>
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
