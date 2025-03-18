
import { X, Code, Database, Users, ArrowRight } from "lucide-react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface GetStartedOverlayProps {
  open: boolean;
  onClose: () => void;
}

const GetStartedOverlay = ({ open, onClose }: GetStartedOverlayProps) => {
  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent side="right" className="p-0 m-0 max-w-none w-full">
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 text-white p-2 rounded-md hover:bg-white/10"
          >
            <X className="h-6 w-6" />
          </button>
          
          <div className="max-w-7xl mx-auto w-full">
            <h1 className="text-white text-4xl md:text-5xl font-bold text-center mb-12 mt-12">
              How would you like to transform your business?
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="bg-gray-900/60 border-gray-800 text-white">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-8 mt-6">
                    <Code className="h-12 w-12 text-white" />
                  </div>
                  <div className="text-sm text-gray-400 mb-2">For enterprises and startups</div>
                  <h2 className="text-2xl font-bold mb-4">I need AI solutions for business implementation</h2>
                  <p className="text-gray-300 mb-8 flex-grow">
                    Utilize Presidency's innovative AI technologies to streamline your operations, 
                    enhance automation processes, and optimize your cloud infrastructure for 
                    maximum efficiency and growth.
                  </p>
                  <Link to="/services-interest-form" className="inline-flex items-center text-white hover:underline mt-auto">
                    Connect with a specialist <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-900/60 border-gray-800 text-white">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-8 mt-6">
                    <Database className="h-12 w-12 text-white" />
                  </div>
                  <div className="text-sm text-gray-400 mb-2">For AI companies and research teams</div>
                  <h2 className="text-2xl font-bold mb-4">I need AI model development & optimization</h2>
                  <p className="text-gray-300 mb-8 flex-grow">
                    Enhance your foundation model research and improve large language model 
                    performance with our expertise in reasoning, coding, and multimodal 
                    capabilities through our specialized AI advancement techniques.
                  </p>
                  <Link to="/services/ai" className="inline-flex items-center text-white hover:underline mt-auto">
                    Request a model evaluation <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-900/60 border-gray-800 text-white">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-8 mt-6">
                    <Users className="h-12 w-12 text-white" />
                  </div>
                  <div className="text-sm text-gray-400 mb-2">For enterprises and startups</div>
                  <h2 className="text-2xl font-bold mb-4">I need expert AI talent for key projects</h2>
                  <p className="text-gray-300 mb-8 flex-grow">
                    Gain access to our network of exceptional AI professionals through our 
                    thorough vetting process—experienced specialists ready to accelerate 
                    your company's AI initiatives and drive innovation.
                  </p>
                  <Link to="/talent" className="inline-flex items-center text-white hover:underline mt-auto">
                    Begin talent acquisition <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default GetStartedOverlay;
