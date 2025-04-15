import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import data from "@/data/images.json";
import { useParams } from "react-router-dom";

const CategoryDetail = () => {
  const { slug } = useParams();
  const category = data.categories.find((cat) => cat.slug === slug);

  if (!category) {
    return <div className="p-8">Category not found</div>;
  }

  return (
    <PageLayout title="Category Details">
      <div className="p-8 max-w-6xl mx-auto">
        {/* Banner Section */}
        {category.banner && (
          <div className="mb-8">
            <img
              src={category.banner.src || "/fallback-image.jpg"}
              alt={category.banner.alt || "Banner image unavailable"}
              width={category.banner.width || 1400}
              height={category.banner.height || 600}
              className="w-full object-cover rounded-lg shadow"
              loading="eager" // Banner loads immediately
              srcSet={
                category.banner.src
                  ? `
                      ${category.banner.src}?w=800 800w,
                      ${category.banner.src}?w=1200 1200w,
                      ${category.banner.src}?w=1400 1400w
                    `
                  : ""
              }
              sizes="(max-width: 768px) 100vw, 1400px"
            />
            <p className="text-sm text-gray-600 mt-2">
              {category.banner.description}
            </p>
          </div>
        )}

        {/* Title and Description */}
        <h1 className="text-4xl font-bold mb-4">{category.title}</h1>
        <p className="text-lg text-gray-700 mb-8">{category.description}</p>

        {/* Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {category.images.map((image, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-lg overflow-hidden"
            >
              <img
                src={image.src || "/fallback-image.jpg"}
                alt={image.alt || "Image unavailable"}
                width={image.width || 1169}
                height={image.height || 780}
                className="w-full object-cover"
                loading="lazy" // Lazy load grid images
                srcSet={
                  image.src
                    ? `
                        ${image.src}?w=400 400w,
                        ${image.src}?w=800 800w,
                        ${image.src}?w=1169 1169w
                      `
                    : ""
                }
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
              <div className="p-4"></div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default CategoryDetail;