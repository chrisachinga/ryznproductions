
import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, title }) => {
  useEffect(() => {
    // Update the document title
    document.title = title ? `${title} | Ryzn Production` : "Ryzn Production";
    
    // Scroll to top on page change
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <div className="flex flex-col min-h-screen dark:bg-ryzn-black dark:text-white transition-colors duration-300">
      <Navbar />
      <main className="flex-grow pt-28 md:pt-32 px-4 md:px-6">{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
