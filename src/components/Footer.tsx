
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Logo Column */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-8">
              <Logo onClick={scrollToTop} />
              <span className="text-xl font-semibold">Presidency</span>
            </div>
            <div className="flex space-x-4 mt-auto pt-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services/ai" onClick={scrollToTop} className="text-gray-300 hover:text-white text-sm">Artificial Intelligence</Link></li>
              <li><Link to="/services/data" onClick={scrollToTop} className="text-gray-300 hover:text-white text-sm">Data Engineering</Link></li>
              <li><Link to="/services/databricks" onClick={scrollToTop} className="text-gray-300 hover:text-white text-sm">Databricks Solutions</Link></li>
              <li><Link to="/products/kube8r" onClick={scrollToTop} className="text-gray-300 hover:text-white text-sm">Cloud Modernization</Link></li>
              <li><Link to="/talent" onClick={scrollToTop} className="text-gray-300 hover:text-white text-sm">Talent</Link></li>
              <li><Link to="/talent/nearshore" onClick={scrollToTop} className="text-gray-300 hover:text-white text-sm">Nearshore</Link></li>
            </ul>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">Products</h3>
            <ul className="space-y-3">
              <li><Link to="/products/leapfrog" onClick={scrollToTop} className="text-gray-300 hover:text-white text-sm">Leapfrog</Link></li>
              <li><Link to="/products/omniflow" onClick={scrollToTop} className="text-gray-300 hover:text-white text-sm">Omniflow</Link></li>
              <li><Link to="/products/kube8r" onClick={scrollToTop} className="text-gray-300 hover:text-white text-sm">Kube8r</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" onClick={scrollToTop} className="text-gray-300 hover:text-white text-sm">About</Link></li>
              <li><Link to="/careers" onClick={scrollToTop} className="text-gray-300 hover:text-white text-sm">Careers</Link></li>
              <li><Link to="/book-a-call" onClick={scrollToTop} className="text-gray-300 hover:text-white text-sm">Contact</Link></li>
              <li>
                <Link 
                  to="/admin" 
                  onClick={scrollToTop}
                  className="text-gray-300 hover:text-white text-sm"
                >
                  Admin Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="/blog" onClick={scrollToTop} className="text-gray-300 hover:text-white text-sm">Blog & Media</Link></li>
              <li><Link to="/privacy" onClick={scrollToTop} className="text-gray-300 hover:text-white text-sm">Privacy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Presidency Solutions. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link to="/terms" onClick={scrollToTop} className="text-gray-400 hover:text-white text-sm">Terms</Link>
            <Link to="/privacy" onClick={scrollToTop} className="text-gray-400 hover:text-white text-sm">Privacy</Link>
            <Link to="/cookies" onClick={scrollToTop} className="text-gray-400 hover:text-white text-sm">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
