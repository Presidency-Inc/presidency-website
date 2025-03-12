
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Logo Column */}
          <div className="flex flex-col">
            <div className="text-xl font-semibold mb-8">Presidency</div>
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

          {/* Products Column */}
          <div>
            <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">Products</h3>
            <ul className="space-y-3">
              <li><a href="#leapfrog" className="text-gray-300 hover:text-white text-sm">Leapfrog</a></li>
              <li><a href="#omniflow" className="text-gray-300 hover:text-white text-sm">OmniFlow</a></li>
              <li><a href="#kube8r" className="text-gray-300 hover:text-white text-sm">Kube8r</a></li>
              <li><a href="#ai-full-stack" className="text-gray-300 hover:text-white text-sm">AI Full Stack</a></li>
              <li><a href="#enterprise-etl" className="text-gray-300 hover:text-white text-sm">Enterprise ETL</a></li>
              <li><a href="#lakehouse" className="text-gray-300 hover:text-white text-sm">Lakehouse</a></li>
              <li><a href="#bare-metal" className="text-gray-300 hover:text-white text-sm">Bare-metal to Cloud</a></li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="#ai" className="text-gray-300 hover:text-white text-sm">Artificial Intelligence</a></li>
              <li><a href="#data-engineering" className="text-gray-300 hover:text-white text-sm">Data Engineering</a></li>
              <li><a href="#databricks" className="text-gray-300 hover:text-white text-sm">Databricks Solutions</a></li>
              <li><a href="#cloud" className="text-gray-300 hover:text-white text-sm">Cloud Modernization</a></li>
              <li><a href="#full-stack-ai" className="text-gray-300 hover:text-white text-sm">Full Stack AI Engineering</a></li>
              <li><a href="#enterprise-etl" className="text-gray-300 hover:text-white text-sm">Enterprise ETL</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-300 hover:text-white text-sm">About</a></li>
              <li><a href="#careers" className="text-gray-300 hover:text-white text-sm">Careers</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white text-sm">Contact</a></li>
              <li><a href="#partners" className="text-gray-300 hover:text-white text-sm">Partner Portal</a></li>
              <li><a href="#press" className="text-gray-300 hover:text-white text-sm">Press</a></li>
              <li><a href="#security" className="text-gray-300 hover:text-white text-sm">Security</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#docs" className="text-gray-300 hover:text-white text-sm">Documentation</a></li>
              <li><a href="#help" className="text-gray-300 hover:text-white text-sm">Help Center</a></li>
              <li><a href="#blog" className="text-gray-300 hover:text-white text-sm">Blog</a></li>
              <li><a href="#extended-teams" className="text-gray-300 hover:text-white text-sm">Extended Teams</a></li>
              <li><a href="#legal" className="text-gray-300 hover:text-white text-sm">Legal</a></li>
              <li><a href="#privacy" className="text-gray-300 hover:text-white text-sm">Privacy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Presidency Solutions. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#terms" className="text-gray-400 hover:text-white text-sm">Terms</a>
            <a href="#privacy" className="text-gray-400 hover:text-white text-sm">Privacy</a>
            <a href="#cookies" className="text-gray-400 hover:text-white text-sm">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
