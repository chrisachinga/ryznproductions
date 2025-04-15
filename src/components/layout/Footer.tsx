import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-ryzn-black text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 lg:col-span-2">
            <img
              src="/branding/logo-white.png"
              alt="Ryzn Production"
              className="h-14 mb-4"
            />
            <p className="text-gray-300 mb-6 max-w-md">
              Capturing emotions and creating timeless memories through the art of visual storytelling.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=100068942935662&mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/ryznproduction?igsh=b2xyaWdrZnl4MmJu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.tiktok.com/@ryznproduction?_t=ZM-8vPygiqvZX3&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current"
                >
                  <path d="M19.321 5.562a5.124 5.124 0 0 1-3.515-1.376 5.121 5.121 0 0 1-1.503-3.6v-.458H10.89v13.144c0 1.011-.814 1.834-1.825 1.839a1.84 1.84 0 0 1-1.84-1.839c0-1.016.824-1.84 1.84-1.84.208 0 .415.035.613.104v-3.438c-.198-.027-.399-.04-.599-.04-2.483 0-4.5 2.017-4.5 4.5s2.017 4.5 4.5 4.5 4.5-2.017 4.5-4.5V8.198a8.97 8.97 0 0 0 5.743 2.057v-3.38a5.126 5.126 0 0 1-1.001-1.313z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">
                <span className="block">Mombasa, Kenya</span>
              </li>
              <li className="text-gray-300">
                <a href="tel:+254718494355" className="hover:text-white transition-colors">
                  +254 718 494 355
                </a>
              </li>
              <li className="text-gray-300">
                <a href="mailto:wafulasimiyu2018@gmail.com" className="hover:text-white transition-colors">
                  wafulasimiyu2018@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Ryzn Photography || Built & Designed by{" "}
            <a
              href="https://chrisdevcode.co.ke" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
            >
              ChrisDevCode Technologies
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
