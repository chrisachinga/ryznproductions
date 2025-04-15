
import React, { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import SectionHeader from "@/components/ui/SectionHeader";
import { Share2, Image, Video } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

type MediaType = "all" | "photos" | "videos";
type Category = "all" | "events" | "portraits" | "weddings" | "commercial" | "fashion";

interface GalleryItem {
  id: string;
  type: "photo" | "video";
  category: string;
  title: string;
  src: string;
  thumbnail?: string;
}

const Gallery: React.FC = () => {
  const [activeMediaType, setActiveMediaType] = useState<MediaType>("all");
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const { toast } = useToast();
  
  // Sample gallery data
  const galleryItems: GalleryItem[] = [
    {
      id: "1",
      type: "photo",
      category: "events",
      title: "Corporate Event",
      src: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop",
    },
    {
      id: "2",
      type: "photo",
      category: "portraits",
      title: "Professional Portrait",
      src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
    },
    {
      id: "3",
      type: "photo",
      category: "weddings",
      title: "Beach Wedding",
      src: "https://images.unsplash.com/photo-1525328437458-0c4d4db7cab4?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: "4",
      type: "video",
      category: "weddings",
      title: "Wedding Highlight",
      src: "https://player.vimeo.com/video/174002381",
      thumbnail: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=1974&auto=format&fit=crop",
    },
    {
      id: "5",
      type: "photo",
      category: "commercial",
      title: "Product Photography",
      src: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1968&auto=format&fit=crop",
    },
    {
      id: "6",
      type: "video",
      category: "commercial",
      title: "Brand Story",
      src: "https://player.vimeo.com/video/219637096",
      thumbnail: "https://images.unsplash.com/photo-1551817958-c5b51e7b4a33?q=80&w=1974&auto=format&fit=crop",
    },
    {
      id: "7",
      type: "photo",
      category: "fashion",
      title: "Fashion Editorial",
      src: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=2073&auto=format&fit=crop",
    },
    {
      id: "8",
      type: "photo",
      category: "events",
      title: "Music Festival",
      src: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: "9",
      type: "video",
      category: "events",
      title: "Festival Highlights",
      src: "https://player.vimeo.com/video/162435044",
      thumbnail: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  const filteredItems = galleryItems.filter(item => {
    const mediaTypeMatch = activeMediaType === "all" || 
      (activeMediaType === "photos" && item.type === "photo") || 
      (activeMediaType === "videos" && item.type === "video");
    
    const categoryMatch = activeCategory === "all" || item.category === activeCategory;
    
    return mediaTypeMatch && categoryMatch;
  });

  const handleShare = (item: GalleryItem) => {
    if (navigator.share) {
      navigator.share({
        title: `Ryzn Production - ${item.title}`,
        text: `Check out this amazing ${item.type} by Ryzn Production: ${item.title}`,
        url: window.location.href,
      })
      .catch((error) => console.log('Error sharing', error));
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href)
        .then(() => {
          toast({
            title: "Link copied!",
            description: "Gallery link has been copied to clipboard",
          });
        })
        .catch(err => {
          console.error('Could not copy text: ', err);
        });
    }
  };

  return (
    <PageLayout title="Gallery">
      <div className="container mx-auto px-4 py-8">
        <SectionHeader 
          title="Our Gallery" 
          subtitle="Explore our collection of professional photography and videography projects" 
          centered={true} 
        />
        
        {/* Filter Controls */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
          <div className="bg-gray-100 p-1 rounded-full inline-flex justify-center">
            <button 
              className={`px-4 py-2 rounded-full text-sm ${activeMediaType === 'all' ? 'bg-white shadow-sm' : ''}`}
              onClick={() => setActiveMediaType('all')}
            >
              All
            </button>
            <button 
              className={`px-4 py-2 rounded-full text-sm flex items-center gap-1 ${activeMediaType === 'photos' ? 'bg-white shadow-sm' : ''}`}
              onClick={() => setActiveMediaType('photos')}
            >
              <Image size={16} /> Photos
            </button>
            <button 
              className={`px-4 py-2 rounded-full text-sm flex items-center gap-1 ${activeMediaType === 'videos' ? 'bg-white shadow-sm' : ''}`}
              onClick={() => setActiveMediaType('videos')}
            >
              <Video size={16} /> Videos
            </button>
          </div>
          
          <div className="bg-gray-100 p-1 rounded-full inline-flex justify-center overflow-x-auto md:overflow-visible">
            <button 
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${activeCategory === 'all' ? 'bg-white shadow-sm' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              All Categories
            </button>
            <button 
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${activeCategory === 'events' ? 'bg-white shadow-sm' : ''}`}
              onClick={() => setActiveCategory('events')}
            >
              Events
            </button>
            <button 
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${activeCategory === 'portraits' ? 'bg-white shadow-sm' : ''}`}
              onClick={() => setActiveCategory('portraits')}
            >
              Portraits
            </button>
            <button 
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${activeCategory === 'weddings' ? 'bg-white shadow-sm' : ''}`}
              onClick={() => setActiveCategory('weddings')}
            >
              Weddings
            </button>
            <button 
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${activeCategory === 'commercial' ? 'bg-white shadow-sm' : ''}`}
              onClick={() => setActiveCategory('commercial')}
            >
              Commercial
            </button>
            <button 
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${activeCategory === 'fashion' ? 'bg-white shadow-sm' : ''}`}
              onClick={() => setActiveCategory('fashion')}
            >
              Fashion
            </button>
          </div>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="group relative rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl bg-white">
              {item.type === 'photo' ? (
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full h-64 md:h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="relative w-full h-64 md:h-72">
                  <img 
                    src={item.thumbnail} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <Video className="text-white w-16 h-16" />
                  </div>
                </div>
              )}
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-medium">{item.title}</h3>
                    <p className="text-sm text-gray-500 capitalize">{item.category}</p>
                  </div>
                  <button 
                    onClick={() => handleShare(item)} 
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="Share this item"
                  >
                    <Share2 size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-500">No items found. Try changing your filters.</p>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default Gallery;
