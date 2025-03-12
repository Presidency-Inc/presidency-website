
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

      {/* Full-width mega dropdown for Products */}
      {productsOpen && (
        <div className="absolute left-0 right-0 bg-white shadow-lg border-b border-gray-200 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-4 gap-8">
              <div className="col-span-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Featured Products</h3>
                <ul className="space-y-4">
                  <li>
                    <a href="#droplets" className="flex items-start group">
                      <div>
                        <h4 className="font-medium text-gray-900 group-hover:text-blue-600">Droplets</h4>
                        <p className="text-sm text-gray-600">Scalable virtual machines</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#kubernetes" className="flex items-start group">
                      <div>
                        <h4 className="font-medium text-gray-900 group-hover:text-blue-600">Kubernetes</h4>
                        <p className="text-sm text-gray-600">Scale more effectively</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#ai-ml" className="flex items-start group">
                      <div>
                        <h4 className="font-medium text-gray-900 group-hover:text-blue-600">AI / ML</h4>
                        <p className="text-sm text-gray-600">Build and scale AI models</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#app-platform" className="flex items-start group">
                      <div>
                        <h4 className="font-medium text-gray-900 group-hover:text-blue-600">App Platform</h4>
                        <p className="text-sm text-gray-600">Get apps to market faster</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-span-1">
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Compute</h3>
                <ul className="space-y-3">
                  <li><a href="#droplets" className="text-gray-600 hover:text-blue-600">Droplets</a></li>
                  <li><a href="#kubernetes" className="text-gray-600 hover:text-blue-600">Kubernetes</a></li>
                  <li><a href="#cpu-optimized" className="text-gray-600 hover:text-blue-600">CPU-Optimized Droplets</a></li>
                  <li><a href="#functions" className="text-gray-600 hover:text-blue-600">Functions</a></li>
                  <li><a href="#app-platform" className="text-gray-600 hover:text-blue-600">App Platform</a></li>
                </ul>
              </div>

              <div className="col-span-1">
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Networking</h3>
                <ul className="space-y-3">
                  <li><a href="#vpc" className="text-gray-600 hover:text-blue-600">Virtual Private Cloud (VPC)</a></li>
                  <li><a href="#firewalls" className="text-gray-600 hover:text-blue-600">Cloud Firewalls</a></li>
                  <li><a href="#balancers" className="text-gray-600 hover:text-blue-600">Load Balancers</a></li>
                  <li><a href="#dns" className="text-gray-600 hover:text-blue-600">DNS</a></li>
                  <li><a href="#ddos" className="text-gray-600 hover:text-blue-600">DDoS Protection</a></li>
                </ul>
              </div>

              <div className="col-span-1">
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Storage</h3>
                <ul className="space-y-3">
                  <li><a href="#spaces" className="text-gray-600 hover:text-blue-600">Spaces Object Storage</a></li>
                  <li><a href="#volumes" className="text-gray-600 hover:text-blue-600">Volume Block Storage</a></li>
                </ul>

                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mt-6 mb-4">Developer Tools</h3>
                <ul className="space-y-3">
                  <li><a href="#api" className="text-gray-600 hover:text-blue-600">API</a></li>
                  <li><a href="#cli" className="text-gray-600 hover:text-blue-600">CLI</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Full-width mega dropdown for Services */}
      {servicesOpen && (
        <div className="absolute left-0 right-0 bg-white shadow-lg border-b border-gray-200 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-4 gap-8">
              <div className="col-span-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Services</h3>
                <ul className="space-y-4">
                  <li>
                    <a href="#consulting" className="flex items-start group">
                      <div>
                        <h4 className="font-medium text-gray-900 group-hover:text-blue-600">Consulting</h4>
                        <p className="text-sm text-gray-600">Expert guidance for your business</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#implementation" className="flex items-start group">
                      <div>
                        <h4 className="font-medium text-gray-900 group-hover:text-blue-600">Implementation</h4>
                        <p className="text-sm text-gray-600">Seamless deployment solutions</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#training" className="flex items-start group">
                      <div>
                        <h4 className="font-medium text-gray-900 group-hover:text-blue-600">Training</h4>
                        <p className="text-sm text-gray-600">Skill development programs</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#support" className="flex items-start group">
                      <div>
                        <h4 className="font-medium text-gray-900 group-hover:text-blue-600">Support</h4>
                        <p className="text-sm text-gray-600">24/7 technical assistance</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-span-1">
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Managed Databases</h3>
                <ul className="space-y-3">
                  <li><a href="#mongodb" className="text-gray-600 hover:text-blue-600">MongoDB</a></li>
                  <li><a href="#kafka" className="text-gray-600 hover:text-blue-600">Kafka</a></li>
                  <li><a href="#mysql" className="text-gray-600 hover:text-blue-600">MySQL</a></li>
                  <li><a href="#postgresql" className="text-gray-600 hover:text-blue-600">PostgreSQL</a></li>
                  <li><a href="#caching" className="text-gray-600 hover:text-blue-600">Caching</a></li>
                </ul>
              </div>

              <div className="col-span-1">
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">AI Solutions</h3>
                <ul className="space-y-3">
                  <li><a href="#gpu-droplets" className="text-gray-600 hover:text-blue-600">GPU Droplets</a></li>
                  <li><a href="#one-click" className="text-gray-600 hover:text-blue-600">1-Click Models</a></li>
                  <li><a href="#genai-platform" className="text-gray-600 hover:text-blue-600">GenAI Platform</a></li>
                  <li><a href="#bare-metal" className="text-gray-600 hover:text-blue-600">Bare Metal GPUs</a></li>
                </ul>
              </div>

              <div className="col-span-1">
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Cloud Hosting</h3>
                <ul className="space-y-3">
                  <li><a href="#cloudways" className="text-gray-600 hover:text-blue-600">Cloudways</a></li>
                </ul>
                
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mt-6 mb-4">Backups & Recovery</h3>
                <ul className="space-y-3">
                  <li><a href="#backups" className="text-gray-600 hover:text-blue-600">Backups</a></li>
                  <li><a href="#snapshots" className="text-gray-600 hover:text-blue-600">Snapshots</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
