
import React from "react";
import LazyImage from "./LazyImage";

interface PortfolioItemProps {
  title: string;
  image: string;
  category: string;
  isVideo?: boolean;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  title,
  image,
  category,
  isVideo = false,
}) => {
  return (
    <div className="overflow-hidden rounded-lg group relative shadow-md">
      <div className="relative aspect-[4/5] overflow-hidden">
        <LazyImage
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
        {isVideo && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
              <div className="w-0 h-0 border-t-8 border-t-transparent border-l-14 border-l-white border-b-8 border-b-transparent ml-1"></div>
            </div>
          </div>
        )}
      </div>
      <div className="p-4">
        <span className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">
          {category}
        </span>
        <h3 className="text-lg font-medium mt-1">{title}</h3>
      </div>
    </div>
  );
};

export default PortfolioItem;
