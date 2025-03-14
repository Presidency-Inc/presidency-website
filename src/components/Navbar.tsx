import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, ChevronUp, X, ArrowLeft, Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import Logo from "./Logo";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [productsOpen, setProductsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null);
  const isMobile = useIsMobile();
  const navRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  
  const isProductsActive = location.pathname.startsWith('/products/');
  const isServicesActive = location.pathname.startsWith('/services/') && location.pathname !== '/services/databricks';
  const isDatabricksActive = location.pathname === '/services/databricks';
  const isTalentActive = location.pathname.startsWith('/talent');

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
    setMobileMenuOpen(false);
    setMobileSubmenuOpen(null);
    
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleNavigateToOmniflowSection = (sectionId: string) => {
    navigate('/products/omniflow');
    setProductsOpen(false);
    setServicesOpen(false);
    setMobileMenuOpen(false);
    setMobileSubmenuOpen(null);
    
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleNavigateToKube8rSection = (sectionId: string) => {
    navigate('/products/kube8r');
    setProductsOpen(false);
    setServicesOpen(false);
    setMobileMenuOpen(false);
    setMobileSubmenuOpen(null);
    
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
    setMobileMenuOpen(false);
    setMobileSubmenuOpen(null);
    
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleNavigateToOmniflowTop = () => {
    navigate('/products/omniflow');
    setProductsOpen(false);
    setServicesOpen(false);
    setMobileMenuOpen(false);
    setMobileSubmenuOpen(null);
    
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleNavigateToKube8rTop = () => {
    navigate('/products/kube8r');
    setProductsOpen(false);
    setServicesOpen(false);
    setMobileMenuOpen(false);
    setMobileSubmenuOpen(null);
    
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleNavigateToDataSection = (sectionId: string) => {
    navigate('/services/data');
    setProductsOpen(false);
    setServicesOpen(false);
    setMobileMenuOpen(false);
    setMobileSubmenuOpen(null);
    
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleNavigateToDataTop = () => {
    navigate('/services/data');
    setProductsOpen(false);
    setServicesOpen(false);
    setMobileMenuOpen(false);
    setMobileSubmenuOpen(null);
    
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleNavigateToAISection = (sectionId: string) => {
    navigate('/services/ai');
    setProductsOpen(false);
    setServicesOpen(false);
    setMobileMenuOpen(false);
    setMobileSubmenuOpen(null);
    
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleNavigateToAITop = () => {
    navigate('/services/ai');
    setProductsOpen(false);
    setServicesOpen(false);
    setMobileMenuOpen(false);
    setMobileSubmenuOpen(null);
    
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
                  productsOpen || isProductsActive
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
                  servicesOpen || isServicesActive
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
            
            <Link 
              to="/services/databricks" 
              className={`transition-colors ${
                isDatabricksActive 
                  ? "text-gray-900 font-medium bg-gray-100 px-3 py-1 rounded-md" 
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              Databricks
            </Link>
            <Link 
              to="/talent" 
              className={`transition-colors ${
                isTalentActive 
                  ? "text-gray-900 font-medium bg-gray-100 px-3 py-1 rounded-md" 
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              Need Talent?
            </Link>
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
                      onClick={handleNavigateToTop}
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
                      onClick={handleNavigateToOmniflowTop}
                    >
                      <div>
                        <h4 className="font-medium text-gray-900 group-hover:text-blue-600">OmniFlow</h4>
                        <p className="text-sm text-gray-600">Agentic ETL orchestration</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/products/kube8r"
                      className="flex items-start group"
                      onClick={handleNavigateToKube8rTop}
                    >
                      <div>
                        <h4 className="font-medium text-gray-900 group-hover:text-blue-600">Kube8r</h4>
                        <p className="text-sm text-gray-600">Cloud and app modernization</p>
                      </div>
                    </Link>
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
                  <li><button onClick={() => handleNavigateToOmniflowSection('enterprise-etl')} className="text-gray-600 hover:text-blue-600">Enterprise ETL Framework</button></li>
                  <li><button onClick={() => handleNavigateToOmniflowSection('source-target')} className="text-gray-600 hover:text-blue-600">Source & Target Integrations</button></li>
                  <li><button onClick={() => handleNavigateToOmniflowSection('multimodal-data')} className="text-gray-600 hover:text-blue-600">Multimodal Data Pipelines</button></li>
                  <li><button onClick={() => handleNavigateToOmniflowSection('governance')} className="text-gray-600 hover:text-blue-600">Governance & Observability</button></li>
                </ul>
              </div>

              <div className="col-span-1">
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Modernization</h3>
                <ul className="space-y-3">
                  <li><button onClick={() => handleNavigateToKube8rSection('bare-metal')} className="text-gray-600 hover:text-blue-600">Bare-metal to Cloud</button></li>
                  <li><button onClick={() => handleNavigateToKube8rSection('app-stack')} className="text-gray-600 hover:text-blue-600">App-stack Modernization</button></li>
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
                    <Link to="/services/ai" className="flex items-start group" onClick={handleNavigateToAITop}>
                      <div>
                        <h4 className="font-medium text-gray-900 group-hover:text-blue-600">Artificial Intelligence</h4>
                        <p className="text-sm text-gray-600">Enhanced efficiency for your business</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/data" className="flex items-start group" onClick={handleNavigateToDataTop}>
                      <div>
                        <h4 className="font-medium text-gray-900 group-hover:text-blue-600">Data Engineering</h4>
                        <p className="text-sm text-gray-600">Optimize your data operations</p>
                      </div>
                    </Link>
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
                    <Link
                      to="/products/kube8r"
                      className="flex items-start group"
                      onClick={() => setServicesOpen(false)}
                    >
                      <div>
                        <h4 className="font-medium text-gray-900 group-hover:text-blue-600">Cloud Modernization</h4>
                        <p className="text-sm text-gray-600">Upgrade your infrastructure</p>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-span-1">
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">AI</h3>
                <ul className="space-y-3">
                  <li><button onClick={() => handleNavigateToAISection('full-stack-ai-engineering')} className="text-gray-600 hover:text-blue-600 text-left">Full Stack AI Engineering</button></li>
                  <li><button onClick={() => handleNavigateToAISection('custom-rag-development')} className="text-gray-600 hover:text-blue-600 text-left">Custom RAG Development</button></li>
                  <li><button onClick={() => handleNavigateToAISection('agent-development')} className="text-gray-600 hover:text-blue-600 text-left">Agent Development</button></li>
                  <li><button onClick={() => handleNavigateToAISection('voice-ai-development')} className="text-gray-600 hover:text-blue-600 text-left">Voice AI Development</button></li>
                  <li><button onClick={() => handleNavigateToAISection('model-finetuning')} className="text-gray-600 hover:text-blue-600 text-left">Business Focused Model Finetuning</button></li>
                </ul>
              </div>

              <div className="col-span-1">
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Data</h3>
                <ul className="space-y-3">
                  <li><button onClick={() => handleNavigateToDataSection('enterprise-etl')} className="text-gray-600 hover:text-blue-600 text-left">Enterprise ETL</button></li>
                  <li><button onClick={() => handleNavigateToDataSection('pipeline-development')} className="text-gray-600 hover:text-blue-600 text-left">Pipeline Development</button></li>
                  <li><button onClick={() => handleNavigateToDataSection('data-infrastructure')} className="text-gray-600 hover:text-blue-600 text-left">Data Infrastructure Setup</button></li>
                  <li><Link to="/services/databricks" className="text-gray-600 hover:text-blue-600" onClick={() => setServicesOpen(false)}>Databricks Services</Link></li>
                </ul>
              </div>

              <div className="col-span-1">
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mt-6 mb-4">TALENT</h3>
                <ul className="space-y-3">
                  <li><Link to="/talent" className="text-gray-600 hover:text-blue-600">Extended Teams</Link></li>
                  <li><Link to="/talent/nearshore" className="text-gray-600 hover:text-blue-600">Nearshore</Link></li>
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
                    <Logo onClick={() => {
                      scrollToTop();
                      setMobileMenuOpen(false);
                    }} />
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
                      className={`flex items-center justify-between w-full py-4 text-left 
                        ${isProductsActive ? "text-blue-600 font-medium" : "text-gray-900 font-medium"}`}
                    >
                      Products
                      <ChevronDown className={`h-5 w-5 ${isProductsActive ? "text-blue-600" : "text-gray-500"}`} />
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={toggleServices}
                      className={`flex items-center justify-between w-full py-4 text-left 
                        ${isServicesActive ? "text-blue-600 font-medium" : "text-gray-900 font-medium"}`}
                    >
                      Services
                      <ChevronDown className={`h-5 w-5 ${isServicesActive ? "text-blue-600" : "text-gray-500"}`} />
                    </button>
                  </li>
                  <li>
                    <Link 
                      to="/services/databricks" 
                      className={`block py-4 ${isDatabricksActive ? "text-blue-600" : "text-gray-900"} font-medium`}
                    >
                      Databricks
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/talent" 
                      className={`block py-4 ${isTalentActive ? "text-blue-600" : "text-gray-900"} font-medium`}
                    >
                      Need Talent?
                    </Link>
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
                        onClick={handleNavigateToTop}
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
                      <Link
                        to="/products/kube8r"
                        className="block py-2"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setMobileSubmenuOpen(null);
                        }}
                      >
                        <span className="font-medium text-gray-900">Kube8r</span>
                        <p className="text-sm text-gray-600">Cloud and app modernization</p>
                      </Link>
                    </li>
                  </ul>
                  
                  <h3 className="font-bold text-gray-900 mt-6 mb-3">AI</h3>
                  <ul className="space-y-3">
                    <li>
                      <button 
                        onClick={() => {
                          handleNavigateToTop();
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
                        }}
                        className="block py-2 text-gray-900 text-left w-full"
                      >
                        Model Hosting & Finetuning
                      </button>
                    </li>
                  </ul>
                  
                  <h3 className="font-bold text-gray-900 mt-6 mb-3">Data</h3>
                  <ul className="space-y-3">
                    <li><button onClick={() => handleNavigateToOmniflowSection('enterprise-etl')} className="block py-2 text-gray-900 text-left w-full">Enterprise ETL Framework</button></li>
                    <li><button onClick={() => handleNavigateToOmniflowSection('source-target')} className="block py-2 text-gray-900 text-left w-full">Source & Target Integrations</button></li>
                    <li><button onClick={() => handleNavigateToOmniflowSection('multimodal-data')} className="block py-2 text-gray-900 text-left w-full">Multimodal Data Pipelines</button></li>
                    <li><button onClick={() => handleNavigateToOmniflowSection('governance')} className="block py-2 text-gray-900 text-left w-full">Governance & Observability</button></li>
                  </ul>
                  
                  <h3 className="font-bold text-gray-900 mt-6 mb-3">Modernization</h3>
                  <ul className="space-y-3 mb-6">
                    <li><button onClick={() => handleNavigateToKube8rSection('bare-metal')} className="block py-2 text-gray-900 text-left w-full">Bare-metal to Cloud</button></li>
                    <li><button onClick={() => handleNavigateToKube8rSection('app-stack')} className="block py-2 text-gray-900 text-left w-full">App-stack Modernization</button></li>
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
                      <Link to="/services/ai" className="block py-2" onClick={handleNavigateToAITop}>
                        <span className="font-medium text-gray-900">Artificial Intelligence</span>
                        <p className="text-sm text-gray-600">Enhanced efficiency for your business</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/data" className="block py-2" onClick={handleNavigateToDataTop}>
                        <span className="font-medium text-gray-900">Data Engineering</span>
                        <p className="text-sm text-gray-600">Optimize your data operations</p>
                      </Link>
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
                      <Link
                        to="/products/kube8r"
                        className="block py-2"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setMobileSubmenuOpen(null);
                        }}
                      >
                        <span className="font-medium text-gray-900">Cloud Modernization</span>
                        <p className="text-sm text-gray-600">Upgrade your infrastructure</p>
                      </Link>
                    </li>
                  </ul>
                  
                  <h3 className="font-bold text-gray-900 mt-6 mb-3">AI</h3>
                  <ul className="space-y-3">
                    <li><button onClick={() => handleNavigateToAISection('full-stack-ai-engineering')} className="block py-2 text-gray-900 text-left w-full">Full Stack AI Engineering</button></li>
                    <li><button onClick={() => handleNavigateToAISection('custom-rag-development')} className="block py-2 text-gray-900 text-left w-full">Custom RAG Development</button></li>
                    <li><button onClick={() => handleNavigateToAISection('agent-development')} className="block py-2 text-gray-900 text-left w-full">Agent Development</button></li>
                    <li><button onClick={() => handleNavigateToAISection('voice-ai-development')} className="block py-2 text-gray-900 text-left w-full">Voice AI Development</button></li>
                    <li><button onClick={() => handleNavigateToAISection('model-finetuning')} className="block py-2 text-gray-900 text-left w-full">Business Focused Model Finetuning</button></li>
                  </ul>
                  
                  <h3 className="font-bold text-gray-900 mt-6 mb-3">Data</h3>
                  <ul className="space-y-3">
                    <li><button onClick={() => handleNavigateToDataSection('enterprise-etl')} className="block py-2 text-gray-900 text-left w-full">Enterprise ETL</button></li>
                    <li><button onClick={() => handleNavigateToDataSection('pipeline-development')} className="block py-2 text-gray-900 text-left w-full">Pipeline Development</button></li>
                    <li><button onClick={() => handleNavigateToDataSection('data-infrastructure')} className="block py-2 text-gray-900 text-left w-full">Data Infrastructure Setup</button></li>
                    <li><Link to="/services/databricks" className="block py-2 text-gray-900" onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileSubmenuOpen(null);
                    }}>Databricks Services</Link></li>
                  </ul>
                  
                  <h3 className="font-bold text-gray-900 mt-6 mb-3">Talent</h3>
                  <ul className="space-y-3 mb-6">
                    <li>
                      <Link 
                        to="/talent" 
                        className="block py-2 text-gray-900"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setMobileSubmenuOpen(null);
                        }}
                      >
                        Extended Teams
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/talent/nearshore" 
                        className="block py-2 text-gray-900"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setMobileSubmenuOpen(null);
                        }}
                      >
                        Nearshore
                      </Link>
                    </li>
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
