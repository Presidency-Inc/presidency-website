
import { useState, useEffect } from "react";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { fetchData, updateRecord } from "@/utils/secureApiClient";

interface BannerSettings {
  id: string;
  title: string;
  link_name: string;
  link_url: string;
  updated_at?: string;
  updated_by?: string;
}

const BannerForm = () => {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [settings, setSettings] = useState<BannerSettings | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    link_name: "",
    link_url: ""
  });

  useEffect(() => {
    const fetchBannerSettings = async () => {
      try {
        setLoading(true);
        const response = await fetchData<BannerSettings>('banner_settings');

        if (response.error) {
          console.error('Error fetching banner settings:', response.error);
          toast({
            title: "Error",
            description: "Failed to load banner settings. Please try again.",
            variant: "destructive",
          });
          return;
        }

        if (response.data) {
          const bannerData: BannerSettings = response.data;
          
          setSettings(bannerData);
          setFormData({
            title: bannerData.title,
            link_name: bannerData.link_name,
            link_url: bannerData.link_url
          });
        }
      } catch (error) {
        console.error('Error fetching banner settings:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBannerSettings();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!settings) return;

    try {
      setSaving(true);
      
      const response = await updateRecord('banner_settings', settings.id, {
        title: formData.title,
        link_name: formData.link_name,
        link_url: formData.link_url,
      });

      if (response.error) {
        console.error('Error updating banner settings:', response.error);
        toast({
          title: "Error",
          description: "Failed to update banner settings. Please try again.",
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Success",
        description: "Banner settings updated successfully.",
      });
    } catch (error) {
      console.error('Error updating banner settings:', error);
      toast({
        title: "Error",
        description: "Failed to update banner settings. Please try again.",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="text-center py-6">Loading...</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title">Banner Title</Label>
          <Input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter banner title"
            required
          />
          <p className="text-sm text-gray-500">
            This will be displayed in the blue banner. Mobile devices will show a truncated version.
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="link_name">Link Text</Label>
          <Input
            id="link_name"
            name="link_name"
            value={formData.link_name}
            onChange={handleChange}
            placeholder="Enter link text"
            required
          />
          <p className="text-sm text-gray-500">
            This is the text for the call-to-action link.
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="link_url">Link URL</Label>
          <Input
            id="link_url"
            name="link_url"
            value={formData.link_url}
            onChange={handleChange}
            placeholder="Enter link URL"
            required
          />
          <p className="text-sm text-gray-500">
            Enter a full URL (https://...) or a relative path (/page).
          </p>
        </div>
      </div>

      <Button 
        type="submit" 
        className="w-full"
        disabled={saving}
      >
        {saving ? "Saving..." : "Save Banner Settings"}
      </Button>
    </form>
  );
};

export default BannerForm;
