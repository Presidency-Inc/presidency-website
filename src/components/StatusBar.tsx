
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { useEffect, useState } from "react";
import { fetchData } from "@/utils/secureApiClient";

interface BannerSettings {
  id: string;
  title: string;
  link_name: string;
  link_url: string;
  updated_at?: string;
  updated_by?: string;
}

const StatusBar = () => {
  const isMobile = useIsMobile();
  const [bannerSettings, setBannerSettings] = useState<BannerSettings>({
    id: "",
    title: "Join FREE AI Solutions Webinar: Maximize Enterprise Impact - June 15-16, 2023",
    link_name: "Register Now",
    link_url: "/register"
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBannerSettings = async () => {
      try {
        setLoading(true);
        const response = await fetchData<BannerSettings>('banner_settings');

        if (response.error) {
          console.error('Error fetching banner settings:', response.error);
          return;
        }

        if (response.data) {
          setBannerSettings(response.data);
        }
      } catch (error) {
        console.error('Error fetching banner settings:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBannerSettings();
  }, []);
  
  if (isMobile) return null;
  
  return (
    <div className={`fixed top-0 left-0 right-0 z-50 bg-[#1a46e5] text-white py-2`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center md:justify-between">
        <div className="flex items-center text-sm">
          <span className="hidden md:inline">
            {bannerSettings.title}
          </span>
          <span className="md:hidden">
            {bannerSettings.title.length > 30 
              ? `${bannerSettings.title.substring(0, 30)}...` 
              : bannerSettings.title}
          </span>
          <Link to={bannerSettings.link_url} className="flex items-center ml-2 font-medium hover:underline">
            {bannerSettings.link_name}
            <ArrowRight className="ml-1 h-3 w-3" />
          </Link>
        </div>
        <div className="hidden md:flex space-x-6 text-sm">
          <Link to="/blog" className="hover:underline">Blog</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/contact-us" className="hover:underline">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
