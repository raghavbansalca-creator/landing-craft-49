import React from 'react';

// Import all the logos
import logo1 from '@/assets/logos/1.png';
import logo2 from '@/assets/logos/2.png';
import logo3 from '@/assets/logos/3.png';
import logo4 from '@/assets/logos/4.png';
import logo5 from '@/assets/logos/5.png';
import logo6 from '@/assets/logos/6.png';
import logo7 from '@/assets/logos/7.png';
import logo8 from '@/assets/logos/8.png';
import logo10 from '@/assets/logos/10.png';
import logo11 from '@/assets/logos/11.png';
import logo12 from '@/assets/logos/12.png';

const logos = [
  logo1, logo2, logo3, logo4, logo5, logo6,
  logo7, logo8, logo10, logo11, logo12
];

const LogoCarousel = () => {
  return (
    <div className="mb-16">
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll">
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div 
              key={`first-${index}`}
              className="flex-shrink-0 w-32 h-20 mx-8 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img 
                src={logo} 
                alt={`Company logo ${index + 1}`}
                className="max-w-full max-h-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index) => (
            <div 
              key={`second-${index}`}
              className="flex-shrink-0 w-32 h-20 mx-8 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img 
                src={logo} 
                alt={`Company logo ${index + 1}`}
                className="max-w-full max-h-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
        
        {/* Gradient overlays for fade effect */}
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};

export default LogoCarousel;