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

  // const categories = [
  //   {
  //     title: "Event Photography",
  //     image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
  //     slug: "event-photography",
  //   },
  //   {
  //     title: "Photo Tour Experiences",
  //     image: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  //     slug: "photo-tour-experiences",
  //   },
  //   {
  //     title: "Documentary Photography",
  //     image: "https://images.unsplash.com/photo-1604954967536-c8875cd14593?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  //     slug: "documentary-photography",
  //   },
  //   {
  //     title: "Product Photography",
  //     image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  //     slug: "product-photography",
  //   },
  //   {
  //     title: "Portrait Photography",
  //     image: "https://images.unsplash.com/photo-1528475775637-ed767f76e6b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  //     slug: "portrait-photography",
  //   },
  //   {
  //     title: "Wedding Photography",
  //     image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  //     slug: "wedding-photography",
  //   },
  // ];

  const portfolioItems = [
    {
      title: "Corporate Event Highlights",
      image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      category: "Event Photography",
    },
    {
      title: "Beach Wedding Film",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      category: "Wedding Videography",
      isVideo: true,
    },
    {
      title: "Luxury Watch Collection",
      image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
      category: "Product Photography",
    },
    {
      title: "Safari Documentary",
      image: "https://images.unsplash.com/photo-1504197832061-98356e3dcdcf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      category: "Documentary",
      isVideo: true,
    },
    {
      title: "Fashion Editorial",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
      category: "Fashion Photography",
    },
    {
      title: "Restaurant Promo",
      image: "https://images.unsplash.com/photo-1579887829494-26396d2057ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      category: "Commercial",
      isVideo: true,
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

      {/* Portfolio Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            title="Our Portfolio"
            subtitle="A selection of our best work spanning photography and videography projects."
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, index) => (
              <PortfolioItem
                key={index}
                title={item.title}
                image={item.image}
                category={item.category}
                isVideo={item.isVideo}
              />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/services" className="btn-primary">
              View All Work
            </Link>
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
