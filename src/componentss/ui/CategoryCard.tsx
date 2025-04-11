
import React from "react";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  title: string;
  image: string;
  slug: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, image, slug }) => {
  return (
    <Link
      to={`/category/${slug}`}
      className="group overflow-hidden relative rounded-lg aspect-square shadow-md transition-all duration-300 hover:shadow-xl"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
        <h3 className="text-white text-xl md:text-2xl font-medium">{title}</h3>
      </div>
    </Link>
  );
};

export default CategoryCard;
