
import React, { useState } from "react";
import PageLayout from "../components/Layout/PageLayout";
import SectionHeader from "../components/UI/SectionHeader";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ServiceItemProps {
  title: string;
  description: string;
  image: string;
  isExpanded: boolean;
  onToggle: () => void;
}

const ServiceItem: React.FC<ServiceItemProps> = ({
  title,
  description,
  image,
  isExpanded,
  onToggle,
}) => {
  return (
    <div className="mb-6 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
      <div
        className="flex items-center justify-between p-4 cursor-pointer bg-white"
        onClick={onToggle}
      >
        <h3 className="text-xl font-medium">{title}</h3>
        <button className="text-gray-500">
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>
      
      {isExpanded && (
        <div className="p-4 bg-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-700">{description}</p>
            </div>
            <div>
              <img
                src={image}
                alt={title}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

interface ServiceCategoryProps {
  title: string;
  services: {
    title: string;
    description: string;
    image: string;
  }[];
}

const ServiceCategory: React.FC<ServiceCategoryProps> = ({ title, services }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">{title}</h2>
      <div>
        {services.map((service, index) => (
          <ServiceItem
            key={index}
            title={service.title}
            description={service.description}
            image={service.image}
            isExpanded={expandedIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const photographyServices = [
    {
      title: "Event Photography",
      description: "Our event photography service captures the energy, emotions, and memorable moments of your gatherings. From corporate events to private celebrations, we document the essence of your occasion with a keen eye for detail and storytelling. Our approach is unobtrusive yet thorough, ensuring we capture both the big moments and the small interactions that make your event special.",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    },
    {
      title: "Commercial Product Photography",
      description: "Showcase your products in their best light with our commercial product photography services. We create clean, attractive, and professional images that highlight your product's features and appeal to your target audience. Our studio setup includes professional lighting and backdrops, and we can also arrange for on-location shoots to place your products in context.",
      image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      title: "Portrait Photography",
      description: "Our portrait photography captures the personality, character, and essence of individuals and groups. Whether for professional headshots, family portraits, or creative personal projects, we work with you to create images that reflect your unique identity. Our photographers are skilled at making subjects comfortable in front of the camera, resulting in natural and authentic portraits.",
      image: "https://images.unsplash.com/photo-1508216310976-c518daae0cdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    },
    {
      title: "Wedding Photography",
      description: "We understand that your wedding day is one of life's most significant moments. Our wedding photography service is designed to document the emotions, details, and atmosphere of your special day. From preparation to celebration, we create a visual narrative that tells the unique story of your love and commitment, providing you with timeless memories to treasure for generations.",
      image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      title: "Photo Tour Experiences",
      description: "Join us for unique photo tour experiences that combine travel, exploration, and photography. Whether you're a beginner wanting to learn more about photography or an experienced photographer seeking to capture iconic locations, our guided tours provide opportunities to improve your skills while discovering beautiful locations. Our photographers offer on-the-spot guidance and tips to help you capture stunning images.",
      image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80",
    },
    {
      title: "Food & Beverage Photography",
      description: "Our food and beverage photography service showcases culinary creations in their most appetizing light. For restaurants, food brands, or publications, we create images that highlight the colors, textures, and presentation of dishes and drinks. Our technical expertise ensures that food looks fresh and appealing, capturing the essence of each culinary creation.",
      image: "https://images.unsplash.com/photo-1556608284-13e09be38667?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      title: "Fashion Photography",
      description: "Our fashion photography service brings clothing, accessories, and style to life through creative visual storytelling. Working with designers, retailers, and models, we create images that showcase fashion items while conveying mood, lifestyle, and brand identity. From studio shoots to on-location editorial work, our approach combines technical expertise with artistic vision.",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ];

  const videographyServices = [
    {
      title: "Corporate Films",
      description: "Our corporate film service creates professional video content that communicates your company's message, values, and story. From company profiles and promotional videos to internal communications and training materials, we develop content that engages viewers while achieving your business objectives. Our team handles all aspects of production, from concept development to final delivery.",
      image: "https://images.unsplash.com/photo-1532800783378-1bed60adaf58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      title: "Documentaries",
      description: "Our documentary service creates compelling non-fiction narratives on a wide range of subjects. Whether you're looking to document a social issue, explore a cultural phenomenon, or preserve personal or community histories, our team brings storytelling skills and technical expertise to your project. We handle research, interviews, filming, and post-production to create engaging documentaries of any length.",
      image: "https://images.unsplash.com/photo-1579966349284-259ff342ebb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      title: "Wedding Films",
      description: "Our wedding films capture the joy, emotion, and atmosphere of your special day through beautiful, cinematic storytelling. Going beyond simple documentation, we create a narrative that reflects your unique love story and the significance of your celebration. From preparation through ceremony to reception, our videographers capture both planned moments and spontaneous emotions.",
      image: "https://images.unsplash.com/photo-1607861716497-e65ab29fc7ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    },
    {
      title: "Promotional Videos",
      description: "Our promotional video service creates engaging, persuasive content that showcases your products, services, or events. Designed to generate interest and drive action, these videos are crafted with your marketing goals and target audience in mind. We focus on creating concise, visually appealing content that communicates your unique selling points and motivates viewers to respond.",
      image: "https://images.unsplash.com/photo-1620122303620-1f903d5afa36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1333&q=80",
    },
    {
      title: "Short Films",
      description: "Our short film service brings creative narratives to life through cinematic storytelling. Whether you're developing a fiction project, music video, or experimental piece, our team provides the expertise needed to transform your vision into compelling visual content. We offer comprehensive production support, from script development and casting to filming and post-production.",
      image: "https://images.unsplash.com/photo-1634157703702-3c124b455499?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    },
  ];

  return (
    <PageLayout title="Services">
      {/* Page Header */}
      <div className="page-header">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive range of photography and videography services designed to meet your visual storytelling needs.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-16">
        <div className="container-custom">
          <SectionHeader
            title="What We Offer"
            subtitle="Discover our complete range of photography and videography services. Click on each service to learn more about how we can bring your vision to life."
          />

          <ServiceCategory title="Photography Services" services={photographyServices} />
          <ServiceCategory title="Videography Services" services={videographyServices} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to Bring Your Vision to Life?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project needs and how our team can help create the perfect visual content for your occasion.
          </p>
          <a href="/contact" className="btn-primary">
            Get in Touch
          </a>
        </div>
      </section>
    </PageLayout>
  );
};

export default Services;
