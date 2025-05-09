import React, { useState, useMemo } from "react";
import PageLayout from "@/components/layout/PageLayout";
import SectionHeader from "@/components/ui/SectionHeader";
import { Share2, Image as ImageIcon } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import imageData from "@/data/images.json";

type CategorySlug =
  | "all"
  | "potrait-photography"
  | "documentary-photography"
  | "event-photography"
  | "wedding-photography"
  | "product-photography"
  | "food-photography"
  | "fashion-photography"
  | "travel-photography"
  | "sports-photography"
  | "ryzn-photography";

type MediaType = "all" | "photos";

interface TransformedGalleryItem {
  id: string;
  type: "photo";
  category: CategorySlug;
  title: string;
  src: string;
  width?: number;
  height?: number;
}

const Gallery: React.FC = () => {
  const [activeMediaType, setActiveMediaType] = useState<MediaType>("all");
  const [activeCategory, setActiveCategory] = useState<CategorySlug>("all");
  const { toast } = useToast();

  const galleryItems: TransformedGalleryItem[] = useMemo(() => {
    const items: TransformedGalleryItem[] = [];
    imageData.categories.forEach(category => {
      category.images.forEach((image, index) => {
        items.push({
          id: `${category.slug}-${index}`,
          type: "photo",
          category: category.slug as CategorySlug,
          title: image.alt || `${category.title} - Photo ${index + 1}`,
          src: image.src,
          width: image.width,
          height: image.height,
        });
      });
    });
    return items;
  }, []);

  const availableCategories = useMemo(() => {
    return [{ title: "All Categories", slug: "all" }, ...imageData.categories];
  }, []);

  const filteredItems = useMemo(() => {
    return galleryItems.filter(item => {
      const mediaTypeMatch = activeMediaType === "all" || item.type === activeMediaType;
      const categoryMatch = activeCategory === "all" || item.category === activeCategory;
      return mediaTypeMatch && categoryMatch;
    });
  }, [galleryItems, activeMediaType, activeCategory]);

  const handleShare = (item: TransformedGalleryItem) => {
    const shareUrl = window.location.href;
    if (navigator.share) {
      navigator.share({
        title: `Ryzn Production - ${item.title}`,
        text: `Check out this amazing photo by Ryzn Production: "${item.title}"`,
        url: shareUrl,
      }).catch((error) => console.error('Error sharing', error));
    } else {
      navigator.clipboard.writeText(shareUrl)
        .then(() => {
          toast({
            title: "Link copied!",
            description: "Gallery link has been copied to clipboard",
          });
        })
        .catch(err => {
          console.error('Could not copy text: ', err);
          toast({
            title: "Copy failed",
            description: "Could not copy link to clipboard.",
            variant: "destructive",
          });
        });
    }
  };

  return (
    <PageLayout title="Gallery">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionHeader
          title="Our Gallery"
          subtitle="Explore our collection of professional photography projects"
          centered={true}
          className="mb-12"
        />

        {/* Filter Controls */}
        <div className="flex flex-col items-center gap-6 mb-12">

          {/* Category Filter */}
          <div className="w-full overflow-x-auto">
            <div className="flex w-max gap-2 bg-gray-100 p-1.5 rounded-full shadow-sm mx-auto sm:mx-0">
              {availableCategories.map(category => (
                <button
                  key={category.slug}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                    activeCategory === category.slug ? 'bg-white shadow-sm text-gray-900' : 'text-gray-600 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveCategory(category.slug as CategorySlug)}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="group relative rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl bg-white"
            >
              <div className="relative aspect-[4/3]">
                <img
                  src={item.src}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4 bg-white">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">{item.title}</h3>
                    <p className="text-sm text-gray-500 capitalize mt-1">
                      {availableCategories.find(cat => cat.slug === item.category)?.title || item.category}
                    </p>
                  </div>
                  <button
                    onClick={() => handleShare(item)}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors flex-shrink-0"
                    aria-label={`Share ${item.title}`}
                  >
                    <Share2 size={20} className="text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-gray-50 rounded-lg">
            <p className="text-lg text-gray-500">No items found for the selected filters.</p>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default Gallery;
