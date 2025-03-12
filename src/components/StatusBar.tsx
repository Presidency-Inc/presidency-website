
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const StatusBar = () => {
  return (
    <div className="bg-[#1a46e5] text-white py-2 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-center md:justify-between">
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
          <Link to="/docs" className="hover:underline">Docs</Link>
          <Link to="/support" className="hover:underline">Get Support</Link>
          <Link to="/contact" className="hover:underline">Contact Sales</Link>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
