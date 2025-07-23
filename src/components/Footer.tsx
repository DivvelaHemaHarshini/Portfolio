import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Divvela Hema Harshini</h3>
            <p className="text-gray-400">AI/ML Enthusiastic & Full-Stack Developer</p>
          </div>

          <div className="flex items-center space-x-6">
            <p className="text-gray-400 text-sm flex items-center">
              Made with <Heart size={16} className="mx-1 text-red-500" /> and Code 
            </p>
            <button
              onClick={scrollToTop}
              className="p-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Divvela Hema Harshini. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;