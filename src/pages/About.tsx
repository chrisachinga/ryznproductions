
import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import SectionHeader from "@/components/ui/SectionHeader";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image, bio }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-48 h-48 rounded-full overflow-hidden mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-gray-600 mb-3">{role}</p>
      <p className="text-center">{bio}</p>
    </div>
  );
};

const About: React.FC = () => {
  const teamMembers = [
    {
      name: "Kevin Wafula",
      role: "Lead Photographer & Founder",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      bio: "Visual artist with a focus on event coverage & brand storytelling. Kevin's eye for detail and composition creates compelling visual narratives.",
    },
    {
      name: "Brian Otieno",
      role: "Senior Photographer",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      bio: "Captures real moments and builds narratives. Brian's documentary approach brings authenticity and emotion to every project.",
    },
    {
      name: "Arnold Frank",
      role: "Photographer & Videographer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      bio: "Photographer/videographer revealing the unseen with artistic depth. Arnold combines technical mastery with creative vision.",
    },
  ];

  return (
    <PageLayout title="About Us">
      {/* Page Header */}
      <div className="page-header">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get to know the team behind Ryzn Production and our approach to visual storytelling.
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader title="Our Story" />
              <p className="text-lg mb-6">
                Founded with a passion for visual storytelling, Ryzn Production brings together talented photographers and videographers committed to capturing moments that matter. We believe in the power of images to preserve memories, convey emotions, and communicate messages that transcend words.
              </p>
              <p className="text-lg">
                Based in Mombasa, Kenya, our team combines local knowledge with global perspectives, creating visual content that resonates with diverse audiences. Whether documenting personal celebrations, corporate events, or creative projects, we approach each assignment with dedication, creativity, and technical excellence.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Team working together"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom text-center">
          <SectionHeader
            title="Our Vision"
            subtitle="At Ryzn Production, we strive to create visual content that transcends ordinary documentation, evoking emotion and telling compelling stories through the art of photography and videography."
            centered
          />
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-6">
              We believe that great visual content does more than just record what happened—it captures emotions, preserves memories, and communicates messages that words alone cannot express. Our vision is to be recognized for our artistic excellence, technical expertise, and ability to translate our clients' ideas into powerful visual narratives.
            </p>
            <p className="text-lg">
              With every project, we aim to exceed expectations by delivering images and videos that not only meet technical standards but also connect on an emotional level with viewers. We're committed to continuous improvement, staying current with evolving technologies and techniques while maintaining our focus on the fundamental elements of visual storytelling.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-16">
        <div className="container-custom">
          <SectionHeader
            title="Why Work With Us"
            subtitle="Choose Ryzn Production for your visual content needs and experience the difference that passion, expertise, and dedication can make."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Skilled & Passionate Team</h3>
              <p>Our photographers and videographers bring both technical expertise and creative vision to every project.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Top-Tier Equipment</h3>
              <p>We invest in professional-grade cameras, lenses, lighting, and accessories to ensure exceptional quality.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Custom Approach</h3>
              <p>We tailor our services to meet your specific needs and vision, never using a one-size-fits-all approach.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence in Execution</h3>
              <p>From planning through delivery, we maintain high standards at every stage of the creative process.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            title="Meet the Team"
            subtitle="Get to know the talented professionals behind Ryzn Production."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                role={member.role}
                image={member.image}
                bio={member.bio}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-ryzn-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-semibold mb-4">Let's Create Together</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Ready to bring your vision to life? We'd love to hear about your project and discuss how we can help.
          </p>
          <a href="/contact" className="bg-white text-ryzn-black px-6 py-3 rounded-md uppercase tracking-wider text-sm font-medium transition-all hover:bg-opacity-90">
            Contact Us
          </a>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
