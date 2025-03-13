import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, ChevronUp, X, ArrowLeft, Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import Logo from "./Logo";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [productsOpen, setProductsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null);
  const isMobile = useIsMobile();
  const navRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

  const handleNavigateToSection = (sectionId: string) => {
    navigate('/products/leapfrog');
    setProductsOpen(false);
    setServicesOpen(false);
    
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleNavigateToTop = () => {
    navigate('/products/leapfrog');
    setProductsOpen(false);
    setServicesOpen(false);
    
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setProductsOpen(false);
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav ref={navRef} className={`fixed ${isMobile ? 'top-0' : 'top-8'} left-0 right-0 z-40 bg-white border-b border-gray-100`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Logo onClick={scrollToTop} />
            <Link to="/" onClick={scrollToTop} className="ml-0.5">
              <span className="text-xl font-semibold text-gray-900">Presidency</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <button 
                onClick={toggleProducts}
                className={`flex items-center transition-colors ${
                  productsOpen 
                    ? "text-gray-900 bg-gray-100 px-3 py-1 rounded-md" 
                    : "text-gray-700 hover:text-gray-900"
                }`}
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
                className={`flex items-center transition-colors ${
                  servicesOpen 
                    ? "text-gray-900 bg-gray-100 px-3 py-1 rounded-md" 
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                Services
                {servicesOpen ? (
                  <ChevronUp className="ml-1 h-4 w-4" />
                ) : (
                  <ChevronDown className="ml-1 h-4 w-4" />
                )}
              </button>
            </div>
            
            <Link to="/services/databricks" className="text-gray-700 hover:text-gray-900 transition-colors">Databricks</Link>
            <a href="#teams" className="text-gray-700 hover:text-gray-900 transition-colors">Need Talent?</a>
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

      {!isMobile && productsOpen && (
        <div className="absolute left-0 right-0 bg-white shadow-lg border-b border-gray-200 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-4 gap-8">
              <div className="col-span-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Featured Products</h3>
                <ul className="space-y-4">
                  <li>
                    <Link 
                      to="/products/leapfrog" 
                      className="flex items-start group" 
                      onClick={() => setProductsOpen(false)}
                    >
                      <div>
                        <h4 className="font-medium text-gray-900 group-hover:text-blue-600">Leapfrog</h4>
                        <p className="text-sm text-gray-600">Artificial Intelligence Platform</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/products/omniflow"
                      className="flex items-start group"
                      onClick={() => setProductsOpen(false)}
                    >
                      <div>
                        <h4 className="font-medium text-gray-900 group-hover:text-blue-600">OmniFlow</h4>
                        <p className="text-sm text-gray-600">Agentic ETL orchestration</p>
                      </div>
                    </Link>
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
                  <li><button onClick={handleNavigateToTop} className="text-gray-600 hover:text-blue-600">Full Stack AI Framework</button></li>
                  <li><button onClick={() => handleNavigateToSection('multi-channel-experience')} className="text-gray-600 hover:text-blue-600">Multi Channel Experience</button></li>
                  <li><button onClick={() => handleNavigateToSection('context-protocol')} className="text-gray-600 hover:text-blue-600">Context Management System</button></li>
                  <li><button onClick={() => handleNavigateToSection('business-logic')} className="text-gray-600 hover:text-blue-600">Business Logic Orchestration</button></li>
                  <li><button onClick={() => handleNavigateToSection('ai-operations')} className="text-gray-600 hover:text-blue-600">AIOps Platform</button></li>
                  <li><button onClick={() => handleNavigateToSection('llms')} className="text-gray-600 hover:text-blue-600">Model Hosting & Finetuning</button></li>
                </ul>
              </div>

              <div className="col-span-1">
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Data</h3>
                <ul className="space-y-3">
                  <li><a href="#enterprise-etl" className="text-gray-600 hover:text-blue-600">Enterprise ETL Framework</a></li>
                  <li><a href="#integrations" className="text-gray-600 hover:text-blue-600">Source & Target Integrations</a></li>
                  <li><a href="#multimodal" className="text-gray-600 hover:text-blue-600">Multimodal Data Pipelines</a></li>
                  <li><a href="#governance" className="text-gray-600 hover:text-blue-600">Governance & Observability</a></li>
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
                    <a href="#ai" className="flex items-start group">
                      <div>
                        <h4 className="font-medium text-gray-900 group-hover:text-blue-600">Artificial Intelligence</h4>
                        <p className="text-sm text-gray-600">Enhanced efficiency for your business</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#data-engineering" className="flex items-start group">
                      <div>
                        <h4 className="font-medium text-gray-900 group-hover:text-blue-600">Data Engineering</h4>
                        <p className="text-sm text-gray-600">Optimize your data operations</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <Link
                      to="/services/databricks"
                      className="flex items-start group"
                      onClick={() => setServicesOpen(false)}
                    >
                      <div>
                        <h4 className="font-medium text-gray-900 group-hover:text-blue-600">Databricks Solutions</h4>
                        <p className="text-sm text-gray-600">Tailored databricks expertise</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <a href="#cloud" className="flex items-start group">
                      <div>
                        <h4 className="font-medium text-gray-900 group-hover:text-blue-600">Cloud Modernization</h4>
                        <p className="text-sm text-gray-600">Upgrade your infrastructure</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-span-1">
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">AI</h3>
                <ul className="space-y-3">
                  <li><a href="#full-stack-ai" className="text-gray-600 hover:text-blue-600">Full Stack AI Engineering</a></li>
                  <li><a href="#custom-rag" className="text-gray-600 hover:text-blue-600">Custom RAG Development</a></li>
                  <li><a href="#agent-development" className="text-gray-600 hover:text-blue-600">Agent Development</a></li>
                  <li><a href="#voice-ai" className="text-gray-600 hover:text-blue-600">Voice AI Development</a></li>
                  <li><a href="#model-finetuning" className="text-gray-600 hover:text-blue-600">Business Focused Model Finetuning</a></li>
                </ul>
              </div>

              <div className="col-span-1">
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Data</h3>
                <ul className="space-y-3">
                  <li><a href="#enterprise-etl" className="text-gray-600 hover:text-blue-600">Enterprise ETL</a></li>
                  <li><a href="#pipeline-development" className="text-gray-600 hover:text-blue-600">Pipeline Development</a></li>
                  <li><a href="#data-infrastructure" className="text-gray-600 hover:text-blue-600">Data Infrastructure Setup</a></li>
                  <li><Link to="/services/databricks" className="text-gray-600 hover:text-blue-600" onClick={() => setServicesOpen(false)}>Databricks Services</Link></li>
                </ul>
              </div>

              <div className="col-span-1">
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mt-6 mb-4">TALENT</h3>
                <ul className="space-y-3">
                  <li><a href="#extended-teams" className="text-gray-600 hover:text-blue-600">Extended Teams</a></li>
                  <li><a href="#nearshore" className="text-gray-600 hover:text-blue-600">Nearshore</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {isMobile && mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col h-screen w-full">
          {mobileSubmenuOpen === null ? (
            <div className="flex flex-col h-full">
              <div className="px-4 py-6 flex-1 overflow-y-auto">
                <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                  <div className="flex items-center gap-0.5">
                    <Logo />
                    <span className="text-xl font-semibold">Presidency</span>
                  </div>
                  <button onClick={toggleMobileMenu} className="p-2 text-gray-700">
                    <X className="h-6 w-6" />
                  </button>
                </div>
                
                <ul className="mt-6 divide-y divide-gray-100">
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
                    <Link to="/services/databricks" className="block py-4 text-gray-900 font-medium">
                      Databricks
                    </Link>
                  </li>
                  <li>
                    <a href="#teams" className="block py-4 text-gray-900 font-medium">
                      Need Talent?
                    </a>
                  </li>
                  <li>
                    <a href="#careers" className="block py-4 text-gray-900 font-medium">
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
              
              <div className="mt-auto p-4 border-t border-gray-100 bg-white sticky bottom-0">
                <Button variant="default" className="w-full bg-[#1a46e5] text-white hover:bg-[#1a46e5]/90">
                  GET SOLUTIONS
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ) : mobileSubmenuOpen === "products" ? (
            <div className="flex flex-col h-full">
              <div className="px-4 py-6 flex-1 overflow-y-auto">
                <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                  <button onClick={closeMobileSubmenu} className="flex items-center text-gray-700">
                    <ArrowLeft className="h-5 w-5 mr-2" />
                    Products
                  </button>
                  <button onClick={toggleMobileMenu} className="p-2 text-gray-700">
                    <X className="h-6 w-6" />
                  </button>
                </div>
                
                <div className="mt-6">
                  <h3 className="font-bold text-gray-900 mb-3">Featured Products</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link 
                        to="/products/leapfrog" 
                        className="block py-2"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setMobileSubmenuOpen(null);
                        }}
                      >
                        <span className="font-medium text-gray-900">Leapfrog</span>
                        <p className="text-sm text-gray-600">Artificial Intelligence Platform</p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products/omniflow"
                        className="block py-2"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setMobileSubmenuOpen(null);
                        }}
                      >
                        <span className="font-medium text-gray-900">OmniFlow</span>
                        <p className="text-sm text-gray-600">Agentic ETL orchestration</p>
                      </Link>
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
                    <li>
                      <button 
                        onClick={() => {
                          handleNavigateToTop();
                          setMobileMenuOpen(false);
                          setMobileSubmenuOpen(null);
                        }}
                        className="block py-2 text-gray-900 text-left w-full"
                      >
                        Full Stack AI Framework
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => {
                          handleNavigateToSection('multi-channel-experience');
                          setMobileMenuOpen(false);
                          setMobileSubmenuOpen(null);
                        }}
                        className="block py-2 text-gray-900 text-left w-full"
                      >
                        Multi Channel Experience
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => {
                          handleNavigateToSection('context-protocol');
                          setMobileMenuOpen(false);
                          setMobileSubmenuOpen(null);
                        }}
                        className="block py-2 text-gray-900 text-left w-full"
                      >
                        Context Management System
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => {
                          handleNavigateToSection('business-logic');
                          setMobileMenuOpen(false);
                          setMobileSubmenuOpen(null);
                        }}
                        className="block py-2 text-gray-900 text-left w-full"
                      >
                        Business Logic Orchestration
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => {
                          handleNavigateToSection('ai-operations');
                          setMobileMenuOpen(false);
                          setMobileSubmenuOpen(null);
                        }}
                        className="block py-2 text-gray-900 text-left w-full"
                      >
                        AIOps Platform
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => {
                          handleNavigateToSection('llms');
                          setMobileMenuOpen(false);
                          setMobileSubmenuOpen(null);
                        }}
                        className="block py-2 text-gray-900 text-left w-full"
                      >
                        Model Hosting & Finetuning
                      </button>
                    </li>
                  </ul>
                  
                  <h3 className="font-bold text-gray-900 mt-6 mb-3">Data</h3>
                  <ul className="space-y-3">
                    <li><a href="#enterprise-etl" className="block py-2 text-gray-900">Enterprise ETL Framework</a></li>
                    <li><a href="#integrations" className="block py-2 text-gray-900">Source & Target Integrations</a></li>
                    <li><a href="#multimodal" className="block py-2 text-gray-900">Multimodal Data Pipelines</a></li>
                    <li><a href="#governance" className="block py-2 text-gray-900">Governance & Observability</a></li>
                  </ul>
                  
                  <h3 className="font-bold text-gray-900 mt-6 mb-3">Modernization</h3>
                  <ul className="space-y-3 mb-6">
                    <li><a href="#bare-metal" className="block py-2 text-gray-900">Bare-metal to Cloud</a></li>
                    <li><a href="#app-stack" className="block py-2 text-gray-900">App-stack Modernization</a></li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-auto p-4 border-t border-gray-100 bg-white sticky bottom-0">
                <Button variant="default" className="w-full bg-[#1a46e5] text-white hover:bg-[#1a46e5]/90">
                  GET SOLUTIONS
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ) : mobileSubmenuOpen === "services" ? (
            <div className="flex flex-col h-full">
              <div className="px-4 py-6 flex-1 overflow-y-auto">
                <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                  <button onClick={closeMobileSubmenu} className="flex items-center text-gray-700">
                    <ArrowLeft className="h-5 w-5 mr-2" />
                    Services
                  </button>
                  <button onClick={toggleMobileMenu} className="p-2 text-gray-700">
                    <X className="h-6 w-6" />
                  </button>
                </div>
                
                <div className="mt-6">
                  <h3 className="font-bold text-gray-900 mb-3">Our Services</h3>
                  <ul className="space-y-3">
                    <li>
                      <a href="#ai" className="block py-2">
                        <span className="font-medium text-gray-900">Artificial Intelligence</span>
                        <p className="text-sm text-gray-600">Enhanced efficiency for your business</p>
                      </a>
                    </li>
                    <li>
                      <a href="#data-engineering" className="block py-2">
                        <span className="font-medium text-gray-900">Data Engineering</span>
                        <p className="text-sm text-gray-600">Optimize your data operations</p>
                      </a>
                    </li>
                    <li>
                      <Link
                        to="/services/databricks"
                        className="block py-2"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setMobileSubmenuOpen(null);
                        }}
                      >
                        <span className="font-medium text-gray-900">Databricks Solutions</span>
                        <p className="text-sm text-gray-600">Tailored databricks expertise</p>
                      </Link>
                    </li>
                    <li>
                      <a href="#cloud" className="block py-2">
                        <span className="font-medium text-gray-900">Cloud Modernization</span>
                        <p className="text-sm text-gray-600">Upgrade your infrastructure</p>
                      </a>
                    </li>
                  </ul>
                  
                  <h3 className="font-bold text-gray-900 mt-6 mb-3">AI</h3>
                  <ul className="space-y-3">
                    <li><a href="#full-stack-ai" className="block py-2 text-gray-900">Full Stack AI Engineering</a></li>
                    <li><a href="#custom-rag" className="block py-2 text-gray-900">Custom RAG Development</a></li>
                    <li><a href="#agent-development" className="block py-2 text-gray-900">Agent Development</a></li>
                    <li><a href="#voice-ai" className="block py-2 text-gray-900">Voice AI Development</a></li>
                    <li><a href="#model-finetuning" className="block py-2 text-gray-900">Business Focused Model Finetuning</a></li>
                  </ul>
                  
                  <h3 className="font-bold text-gray-900 mt-6 mb-3">Data</h3>
                  <ul className="space-y-3">
                    <li><a href="#enterprise-etl" className="block py-2 text-gray-900">Enterprise ETL</a></li>
                    <li><a href="#pipeline-development" className="block py-2 text-gray-900">Pipeline Development</a></li>
                    <li><a href="#data-infrastructure" className="block py-2 text-gray-900">Data Infrastructure Setup</a></li>
                    <li><Link to="/services/databricks" className="block py-2 text-gray-900" onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileSubmenuOpen(null);
                    }}>Databricks Services</Link></li>
                  </ul>
                  
                  <h3 className="font-bold text-gray-900 mt-6 mb-3">Talent</h3>
                  <ul className="space-y-3 mb-6">
                    <li><a href="#extended-teams" className="block py-2 text-gray-900">Extended Teams</a></li>
                    <li><a href="#nearshore" className="block py-2 text-gray-900">Nearshore</a></li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-auto p-4 border-t border-gray-100 bg-white sticky bottom-0">
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
