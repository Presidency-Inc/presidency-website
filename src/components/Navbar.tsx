
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, ChevronUp, X, ArrowLeft, Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [productsOpen, setProductsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null);
  const isMobile = useIsMobile();

  const toggleProducts = () => {
    if (isMobile) {
      setMobileSubmenuOpen(mobileSubmenuOpen === "products" ? null : "products");
    } else {
      setProductsOpen(!productsOpen);
      if (servicesOpen) setServicesOpen(false);
    }
  };

  const toggleServices = () => {
    if (isMobile) {
      setMobileSubmenuOpen(mobileSubmenuOpen === "services" ? null : "services");
    } else {
      setServicesOpen(!servicesOpen);
      if (productsOpen) setProductsOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setMobileSubmenuOpen(null);
  };

  const closeMobileSubmenu = () => {
    setMobileSubmenuOpen(null);
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

          <div className="flex items-center">
            <Button variant="default" className="hidden md:inline-flex items-center bg-[#1a46e5] text-white hover:bg-[#1a46e5]/90">
              GET SOLUTIONS
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
            <button onClick={toggleMobileMenu} className="md:hidden p-2 text-gray-700">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Dropdowns */}
      {!isMobile && productsOpen && (
        <div className="absolute left-0 right-0 bg-white shadow-lg border-b border-gray-200 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-4 gap-8">
              <div className="col-span-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Featured Products</h3>
                <ul className="space-y-4">
                  <li>
                    <a href="#leapfrog" className="flex items-start group">
                      <div>
                        <h4 className="font-medium text-gray-900 group-hover:text-blue-600">Leapfrog</h4>
                        <p className="text-sm text-gray-600">AI enabled full stack</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#omniflow" className="flex items-start group">
                      <div>
                        <h4 className="font-medium text-gray-900 group-hover:text-blue-600">OmniFlow</h4>
                        <p className="text-sm text-gray-600">Agentic ETL orchestration</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#kube8r" className="flex items-start group">
                      <div>
                        <h4 className="font-medium text-gray-900 group-hover:text-blue-600">Kube8r</h4>
                        <p className="text-sm text-gray-600">Cloud and app modernization</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-span-1">
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">AI</h3>
                <ul className="space-y-3">
                  <li><a href="#ai-full-stack" className="text-gray-600 hover:text-blue-600">AI Full Stack</a></li>
                  <li><a href="#context-protocol" className="text-gray-600 hover:text-blue-600">Context Protocol</a></li>
                  <li><a href="#multi-channel" className="text-gray-600 hover:text-blue-600">Multi Channel Experience</a></li>
                  <li><a href="#business-logic" className="text-gray-600 hover:text-blue-600">Business Logic Orchestration</a></li>
                  <li><a href="#llms" className="text-gray-600 hover:text-blue-600">LLMs & Finetunes</a></li>
                </ul>
              </div>

              <div className="col-span-1">
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Data</h3>
                <ul className="space-y-3">
                  <li><a href="#enterprise-etl" className="text-gray-600 hover:text-blue-600">Enterprise ETL</a></li>
                  <li><a href="#lakehouse" className="text-gray-600 hover:text-blue-600">Lakehouse</a></li>
                  <li><a href="#integrations" className="text-gray-600 hover:text-blue-600">Integrations</a></li>
                </ul>
              </div>

              <div className="col-span-1">
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Modernization</h3>
                <ul className="space-y-3">
                  <li><a href="#bare-metal" className="text-gray-600 hover:text-blue-600">Bare-metal to Cloud</a></li>
                  <li><a href="#app-stack" className="text-gray-600 hover:text-blue-600">App-stack Modernization</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {!isMobile && servicesOpen && (
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

      {/* Mobile Menu */}
      {isMobile && mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 overflow-y-auto h-full w-full">
          {mobileSubmenuOpen === null ? (
            <div className="flex flex-col h-screen">
              <div className="px-4 py-6">
                <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                  <div className="text-xl font-semibold">Presidency</div>
                  <button onClick={toggleMobileMenu} className="p-2 text-gray-700">
                    <X className="h-6 w-6" />
                  </button>
                </div>
                
                <ul className="mt-6 divide-y divide-gray-100 overflow-y-auto">
                  <li>
                    <button 
                      onClick={toggleProducts}
                      className="flex items-center justify-between w-full py-4 text-left text-gray-900 font-medium"
                    >
                      Products
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={toggleServices}
                      className="flex items-center justify-between w-full py-4 text-left text-gray-900 font-medium"
                    >
                      Services
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    </button>
                  </li>
                  <li>
                    <a href="#databricks" className="block py-4 text-gray-900 font-medium">
                      Databricks
                    </a>
                  </li>
                  <li>
                    <a href="#teams" className="block py-4 text-gray-900 font-medium">
                      Extended Teams
                    </a>
                  </li>
                  <li>
                    <a href="#careers" className="block py-4 text-gray-900 font-medium">
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
              
              <div className="mt-auto sticky bottom-0 pt-6 border-t border-gray-100 px-4 py-6 bg-white pb-safe">
                <Button variant="default" className="w-full bg-[#1a46e5] text-white hover:bg-[#1a46e5]/90">
                  GET SOLUTIONS
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ) : mobileSubmenuOpen === "products" ? (
            <div className="flex flex-col h-screen">
              <div className="px-4 py-6">
                <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                  <button onClick={closeMobileSubmenu} className="flex items-center text-gray-700">
                    <ArrowLeft className="h-5 w-5 mr-2" />
                    Products
                  </button>
                  <button onClick={toggleMobileMenu} className="p-2 text-gray-700">
                    <X className="h-6 w-6" />
                  </button>
                </div>
                
                <div className="mt-6 overflow-y-auto">
                  <h3 className="font-bold text-gray-900 mb-3">Featured Products</h3>
                  <ul className="space-y-3">
                    <li>
                      <a href="#leapfrog" className="block py-2">
                        <span className="font-medium text-gray-900">Leapfrog</span>
                        <p className="text-sm text-gray-600">AI enabled full stack</p>
                      </a>
                    </li>
                    <li>
                      <a href="#omniflow" className="block py-2">
                        <span className="font-medium text-gray-900">OmniFlow</span>
                        <p className="text-sm text-gray-600">Agentic ETL orchestration</p>
                      </a>
                    </li>
                    <li>
                      <a href="#kube8r" className="block py-2">
                        <span className="font-medium text-gray-900">Kube8r</span>
                        <p className="text-sm text-gray-600">Cloud and app modernization</p>
                      </a>
                    </li>
                  </ul>
                  
                  <h3 className="font-bold text-gray-900 mt-6 mb-3">AI</h3>
                  <ul className="space-y-3">
                    <li><a href="#ai-full-stack" className="block py-2 text-gray-900">AI Full Stack</a></li>
                    <li><a href="#context-protocol" className="block py-2 text-gray-900">Context Protocol</a></li>
                    <li><a href="#multi-channel" className="block py-2 text-gray-900">Multi Channel Experience</a></li>
                    <li><a href="#business-logic" className="block py-2 text-gray-900">Business Logic Orchestration</a></li>
                    <li><a href="#llms" className="block py-2 text-gray-900">LLMs & Finetunes</a></li>
                  </ul>
                  
                  <h3 className="font-bold text-gray-900 mt-6 mb-3">Data</h3>
                  <ul className="space-y-3">
                    <li><a href="#enterprise-etl" className="block py-2 text-gray-900">Enterprise ETL</a></li>
                    <li><a href="#lakehouse" className="block py-2 text-gray-900">Lakehouse</a></li>
                    <li><a href="#integrations" className="block py-2 text-gray-900">Integrations</a></li>
                  </ul>
                  
                  <h3 className="font-bold text-gray-900 mt-6 mb-3">Modernization</h3>
                  <ul className="space-y-3 mb-8">
                    <li><a href="#bare-metal" className="block py-2 text-gray-900">Bare-metal to Cloud</a></li>
                    <li><a href="#app-stack" className="block py-2 text-gray-900">App-stack Modernization</a></li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-auto sticky bottom-0 pt-6 border-t border-gray-100 px-4 py-6 bg-white pb-safe">
                <Button variant="default" className="w-full bg-[#1a46e5] text-white hover:bg-[#1a46e5]/90">
                  GET SOLUTIONS
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ) : mobileSubmenuOpen === "services" ? (
            <div className="flex flex-col h-screen">
              <div className="px-4 py-6">
                <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                  <button onClick={closeMobileSubmenu} className="flex items-center text-gray-700">
                    <ArrowLeft className="h-5 w-5 mr-2" />
                    Services
                  </button>
                  <button onClick={toggleMobileMenu} className="p-2 text-gray-700">
                    <X className="h-6 w-6" />
                  </button>
                </div>
                
                <div className="mt-6 overflow-y-auto">
                  <h3 className="font-bold text-gray-900 mb-3">Our Services</h3>
                  <ul className="space-y-3">
                    <li>
                      <a href="#consulting" className="block py-2">
                        <span className="font-medium text-gray-900">Consulting</span>
                        <p className="text-sm text-gray-600">Expert guidance for your business</p>
                      </a>
                    </li>
                    <li>
                      <a href="#implementation" className="block py-2">
                        <span className="font-medium text-gray-900">Implementation</span>
                        <p className="text-sm text-gray-600">Seamless deployment solutions</p>
                      </a>
                    </li>
                    <li>
                      <a href="#training" className="block py-2">
                        <span className="font-medium text-gray-900">Training</span>
                        <p className="text-sm text-gray-600">Skill development programs</p>
                      </a>
                    </li>
                    <li>
                      <a href="#support" className="block py-2">
                        <span className="font-medium text-gray-900">Support</span>
                        <p className="text-sm text-gray-600">24/7 technical assistance</p>
                      </a>
                    </li>
                  </ul>
                  
                  <h3 className="font-bold text-gray-900 mt-6 mb-3">Managed Databases</h3>
                  <ul className="space-y-3">
                    <li><a href="#mongodb" className="block py-2 text-gray-900">MongoDB</a></li>
                    <li><a href="#kafka" className="block py-2 text-gray-900">Kafka</a></li>
                    <li><a href="#mysql" className="block py-2 text-gray-900">MySQL</a></li>
                    <li><a href="#postgresql" className="block py-2 text-gray-900">PostgreSQL</a></li>
                    <li><a href="#caching" className="block py-2 text-gray-900">Caching</a></li>
                  </ul>
                  
                  <h3 className="font-bold text-gray-900 mt-6 mb-3">AI Solutions</h3>
                  <ul className="space-y-3 mb-8">
                    <li><a href="#gpu-droplets" className="block py-2 text-gray-900">GPU Droplets</a></li>
                    <li><a href="#one-click" className="block py-2 text-gray-900">1-Click Models</a></li>
                    <li><a href="#genai-platform" className="block py-2 text-gray-900">GenAI Platform</a></li>
                    <li><a href="#bare-metal-gpus" className="block py-2 text-gray-900">Bare Metal GPUs</a></li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-auto sticky bottom-0 pt-6 border-t border-gray-100 px-4 py-6 bg-white pb-safe">
                <Button variant="default" className="w-full bg-[#1a46e5] text-white hover:bg-[#1a46e5]/90">
                  GET SOLUTIONS
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ) : null}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
