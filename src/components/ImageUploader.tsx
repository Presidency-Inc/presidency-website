
import React, { useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Image, ImagePlus, Crop, Check, X, Trash } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import ReactCrop, { type Crop as CropType } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface ImageUploaderProps {
  initialValue: string;
  onChange: (value: string) => void;
  aspectRatio?: number;
}

const ImageUploader = ({ initialValue, onChange, aspectRatio = 1.91 }: ImageUploaderProps) => {
  const [image, setImage] = useState<string | null>(initialValue || null);
  const [isUploading, setIsUploading] = useState(false);
  const [cropDialogOpen, setCropDialogOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [crop, setCrop] = useState<CropType>({
    unit: '%',
    width: 100,
    height: 100,
    x: 0,
    y: 0,
  });
  const imageRef = useRef<HTMLImageElement | null>(null);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      
      // Create a preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
        setCropDialogOpen(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCropComplete = (crop: CropType) => {
    setCrop(crop);
  };

  const getCroppedImg = useCallback(async () => {
    if (!imageRef.current || !crop.width || !crop.height) return null;
    
    const image = imageRef.current;
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx = canvas.getContext('2d');
    
    const pixelRatio = window.devicePixelRatio;
    
    // Set canvas size to the cropped area dimensions
    canvas.width = crop.width * scaleX;
    canvas.height = crop.height * scaleY;
    
    if (ctx) {
      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      ctx.imageSmoothingQuality = 'high';
      
      ctx.drawImage(
        image,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        crop.width * scaleX,
        crop.height * scaleY
      );
    }
    
    // Convert canvas to dataURL
    return canvas.toDataURL('image/jpeg', 0.95);
  }, [crop]);

  const handleCropCancel = () => {
    setCropDialogOpen(false);
    setPreviewUrl(null);
    setSelectedFile(null);
  };

  const handleCropApply = async () => {
    try {
      const croppedImageBase64 = await getCroppedImg();
      if (!croppedImageBase64) return;
      
      setIsUploading(true);
      setCropDialogOpen(false);
      
      // Store the cropped image as a base64 string to be used directly
      // We'll save it to the database when the form is submitted
      setImage(croppedImageBase64);
      onChange(croppedImageBase64);
      
      toast({
        title: 'Image processed',
        description: 'Your image has been cropped and is ready to be saved.'
      });
      
    } catch (error) {
      console.error('Crop error:', error);
      toast({
        title: 'Error processing image',
        description: 'Failed to process the cropped image.',
        variant: 'destructive'
      });
    } finally {
      setIsUploading(false);
      setPreviewUrl(null);
      setSelectedFile(null);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    onChange('');
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value;
    setImage(url);
    onChange(url);
  };

  return (
    <div className="space-y-4">
      {image ? (
        <div className="border rounded-md overflow-hidden">
          <AspectRatio ratio={aspectRatio}>
            <img 
              src={image} 
              alt="Uploaded preview" 
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/placeholder.svg';
              }}
            />
          </AspectRatio>
          <div className="flex justify-between items-center p-2 bg-muted/20">
            <div className="text-xs text-muted-foreground truncate max-w-[180px]">
              {image.startsWith('data:image') ? 'Cropped image' : image.split('/').pop()}
            </div>
            <div className="flex space-x-2">
              {!image.startsWith('data:image') && (
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => {
                    navigator.clipboard.writeText(image);
                    toast({
                      title: 'URL copied',
                      description: 'Image URL copied to clipboard.'
                    });
                  }}
                >
                  Copy URL
                </Button>
              )}
              <Button 
                size="sm" 
                variant="destructive"
                onClick={handleRemoveImage}
              >
                <Trash className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="border border-dashed rounded-md p-8 text-center">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="rounded-full bg-primary/10 p-3">
              <ImagePlus className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium">
                Drag and drop or click to upload
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Recommended size: 1200×630 pixels (1.91:1 ratio)
              </p>
            </div>
            <Input 
              id="image-upload" 
              type="file" 
              accept="image/*" 
              className="hidden" 
              onChange={handleImageSelect}
              disabled={isUploading}
            />
            <Label
              htmlFor="image-upload"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 cursor-pointer"
            >
              {isUploading ? 'Processing...' : 'Select image'}
            </Label>
            <div className="text-xs text-muted-foreground mt-2">
              or enter image URL:
            </div>
            <Input 
              type="text" 
              placeholder="https://example.com/image.jpg"
              className="w-full mt-2" 
              onChange={handleUrlChange}
              disabled={isUploading}
            />
          </div>
        </div>
      )}

      <Dialog open={cropDialogOpen} onOpenChange={setCropDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Crop Image</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            {previewUrl && (
              <div className="border rounded overflow-auto max-h-[60vh]">
                <ReactCrop
                  crop={crop}
                  onChange={c => setCrop(c)}
                  onComplete={handleCropComplete}
                  aspect={aspectRatio}
                >
                  <img
                    ref={imageRef}
                    src={previewUrl}
                    alt="Crop preview"
                    style={{ maxWidth: '100%' }}
                  />
                </ReactCrop>
              </div>
            )}
            <div className="flex justify-between">
              <Button variant="outline" onClick={handleCropCancel}>
                <X className="mr-2 h-4 w-4" />
                Cancel
              </Button>
              <Button onClick={handleCropApply}>
                <Check className="mr-2 h-4 w-4" />
                Apply Crop
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ImageUploader;
