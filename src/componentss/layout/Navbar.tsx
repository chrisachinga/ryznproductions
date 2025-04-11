
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white dark:bg-ryzn-black shadow-md py-3" 
          : "bg-white/80 dark:bg-ryzn-black/80 backdrop-blur-sm py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src="/lovable-uploads/74598f6b-6377-4da6-93b2-9bde1d386f66.png"
            alt="Ryzn Production"
            className="h-10 md:h-12"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className={`nav-link text-base font-medium transition-colors ${isActive("/") ? "text-black dark:text-white after:w-full" : "text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"}`}
          >
            Home
          </Link>
          <Link
            to="/gallery"
            className={`nav-link text-base font-medium transition-colors ${isActive("/gallery") ? "text-black dark:text-white after:w-full" : "text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"}`}
          >
            Gallery
          </Link>
          <Link
            to="/services"
            className={`nav-link text-base font-medium transition-colors ${isActive("/services") ? "text-black dark:text-white after:w-full" : "text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"}`}
          >
            Services
          </Link>
          <Link
            to="/about"
            className={`nav-link text-base font-medium transition-colors ${isActive("/about") ? "text-black dark:text-white after:w-full" : "text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"}`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`nav-link text-base font-medium transition-colors ${isActive("/contact") ? "text-black dark:text-white after:w-full" : "text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"}`}
          >
            Contact
          </Link>
          <div className="flex items-center space-x-3">
            <ThemeToggle />
            <Button className="bg-ryzn-black dark:bg-white hover:bg-ryzn-black/90 dark:hover:bg-white/90 text-white dark:text-ryzn-black rounded-md" asChild>
              <Link to="/contact">
                Book Now
              </Link>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Button and Theme Toggle */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-ryzn-black dark:text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden h-screen w-full bg-white dark:bg-ryzn-black fixed top-full left-0 animate-fade-in">
          <div className="container px-6 py-8 flex flex-col space-y-6">
            <Link
              to="/"
              className={`text-xl font-medium ${isActive("/") ? "text-black dark:text-white" : "text-gray-600 dark:text-gray-300"}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/gallery"
              className={`text-xl font-medium ${isActive("/gallery") ? "text-black dark:text-white" : "text-gray-600 dark:text-gray-300"}`}
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
            <Link
              to="/services"
              className={`text-xl font-medium ${isActive("/services") ? "text-black dark:text-white" : "text-gray-600 dark:text-gray-300"}`}
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/about"
              className={`text-xl font-medium ${isActive("/about") ? "text-black dark:text-white" : "text-gray-600 dark:text-gray-300"}`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`text-xl font-medium ${isActive("/contact") ? "text-black dark:text-white" : "text-gray-600 dark:text-gray-300"}`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/data-policy"
              className={`text-xl font-medium ${isActive("/data-policy") ? "text-black dark:text-white" : "text-gray-600 dark:text-gray-300"}`}
              onClick={() => setIsOpen(false)}
            >
              Data Policy
            </Link>
            <Button className="w-full bg-ryzn-black dark:bg-white hover:bg-ryzn-black/90 dark:hover:bg-white/90 text-white dark:text-ryzn-black" asChild>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
              >
                Book Now
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
