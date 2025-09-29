import { useEffect, useRef } from 'react';

// Import all logo images
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
import logo13 from '@/assets/logos/13.png';

const LogoCarousel = () => {
  const logos = [
    logo1, logo2, logo3, logo4, logo5, logo6,
    logo7, logo8, logo10, logo11, logo12, logo13
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollWidth = scrollContainer.scrollWidth;
    const clientWidth = scrollContainer.clientWidth;
    let scrollPosition = 0;

    const scroll = () => {
      scrollPosition += 1;
      if (scrollPosition >= scrollWidth - clientWidth) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-background via-muted/30 to-background py-8">
      <div 
        ref={scrollRef}
        className="flex gap-8 items-center whitespace-nowrap overflow-hidden"
        style={{ 
          maskImage: 'linear-gradient(90deg, transparent, white 20%, white 80%, transparent)',
          WebkitMaskImage: 'linear-gradient(90deg, transparent, white 20%, white 80%, transparent)'
        }}
      >
        {/* Duplicate logos for seamless loop */}
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-24 h-16 sm:w-32 sm:h-20 bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center"
          >
            <img
              src={logo}
              alt={`Company logo ${(index % logos.length) + 1}`}
              className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;