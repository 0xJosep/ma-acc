// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const scrollToFooter = () => {
    const footer = document.querySelector('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full bg-white px-4 md:px-6 py-4 ">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        {/* Left side with logo */}
        <div>
          <img 
            src="/images/ma_acc_black.png" 
            alt="Moroccan Acceleration" 
            className="h-8 w-auto"
          />
        </div>

        {/* Right side with buttons */}
        <div className="flex gap-6">
          <Link 
            to="/articles" 
            className="px-6 py-2 text-black border border-black rounded-lg hover:bg-black hover:text-white transition-all duration-300"
          >
            Articles
          </Link>
          <Link 
            to="/manifesto" 
            className="px-6 py-2 text-black border border-black rounded-lg hover:bg-black hover:text-white transition-all duration-300"
          >
            Manifesto
          </Link>
          <button 
            onClick={scrollToFooter}
            className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-all duration-300"
          >
            Join Us
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;