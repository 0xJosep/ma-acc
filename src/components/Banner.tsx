// src/components/Banner.tsx
import React from 'react';

const Banner: React.FC = () => {
  const moroccanRed = "#C1272D";
  const moroccanGreen = "#006233";

  return (
    <div className="w-full bg-black py-16 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          {/* Logo and Title */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mb-16">
            <img 
              src="/images/ma_acc_black.png" 
              alt="Moroccan Acceleration" 
              className="h-40 w-auto"
            />
            <div 
              className="flex flex-col items-center md:items-start text-4xl md:text-7xl leading-tight"
              style={{ 
                fontFamily: "'Century Schoolbook', serif",
                fontWeight: 'normal'
              }}
            >
              <span style={{ color: moroccanRed }}>Moroccan</span>
              <span className="text-white">
                <span style={{ color: moroccanGreen }}>Acc</span>elerationism
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="w-full max-w-4xl px-4">
            <p className="text-white text-center text-base md:text-xl" 
               style={{ fontFamily: "'Century Schoolbook', serif" }}>
              <span className="font-bold">ma/acc</span> is a decentralized community movement for Moroccans worldwide, 
              aimed at accelerating progress in Morocco through the collective involvement of both residents and diaspora.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;