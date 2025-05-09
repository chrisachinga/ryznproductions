import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import HeroSlider from "@/components/ui/HeroSlider";
import CategoryCard from "@/components/ui/CategoryCard";
import PortfolioItem from "@/components/ui/PortfolioItem";
import SectionHeader from "@/components/ui/SectionHeader";
import { Link } from "react-router-dom";

import data from "@/data/images.json";

const Home: React.FC = () => {

  const categories = data.categories.map((category) => ({
    title: category.title,
    image: category.banner.src,
    slug: category.slug,
  }));
  
  const heroSlides = [
    {
      image: "/gallery/weddings/0.jpg",
      title: "You imagine, we create!",
      subtitle: "Capturing emotions through the art of visual storytelling",
    },
    {
      image: "/gallery/documentary/1.jpg",
      title: "Every moment deserves to be remembered",
      subtitle: "Professional photography and videography services",
    },
    {
      image: "/gallery/events/0.jpg",
      title: "Bringing your vision to life",
      subtitle: "Expertly crafted visuals for every occasion",
    },
    {
      image: "/gallery/fashion/0.jpg",
      title: "Creating timeless memories",
      subtitle: "Artistic photography that stands the test of time",
    },
    {
      image: "/gallery/weddings/0.jpg",
      title: "Your story, our passion",
      subtitle: "Let us help you tell your unique story",
    },
  ];

  return (
    <PageLayout title="Home">
      {/* Hero Section */}
      <section className="relative">
        <HeroSlider slides={heroSlides} />
      </section>

      {/* Gallery Categories Section */}
      <section className="py-20">
        <div className="container-custom">
          <SectionHeader
            title="Our Gallery"
            subtitle="Explore our diverse collection of visual storytelling across different categories."
            centered
          />
          <div className="gallery-grid">
            {categories.map((category, index) => (
              <CategoryCard
                key={index}
                title={category.title}
                image={category.image}
                slug={category.slug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeader
              title="Your Moments, Perfectly Captured"
              centered
            />
            <p className="text-lg mb-8">
              At Ryzn Production, we believe in the power of visual storytelling to preserve memories, evoke emotions, and inspire action. Our dedicated team brings technical expertise and creative vision to every project, ensuring your special moments are captured with authenticity and artistic excellence.
            </p>
            <Link to="/contact" className="btn-primary">
              BOOK NOW
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Home;
