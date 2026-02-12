import React from 'react';
import AnimatedWords from '../../components/AnimatedWords/AnimatedWords';

const PortfolioSection = () => {
  const logos = [
    { src: "/amazon 1.png", alt: "Amazon" },
    { src: "/2 1.png", alt: "Nike" },
    { src: "/2 2.png", alt: "Buffalo Burger" },
    { src: "/2 3.png", alt: "Brave" },
    { src: "/2 5.png", alt: "Carrefour" },
    { src: "/2 4.png", alt: "Zezeeta" },
    { src: "/2 6.png", alt: "Logo" },
    { src: "/2 7.png", alt: "Burger King" },
    { src: "/2 8.png", alt: "Logo" },
    { src: "/2 9.png", alt: "Logo" },
    { src: "/amazon 2.png", alt: "Amazon" },
  ];
  
  return (
    <section className="w-full py-16 mt-20 bg-white">
  {/* Section Title */}
  <div className="text-center mb-12">
  <div className="font-lexend font-bold relative inline-block 
  text-[48px] sm:text-[64px] md:text-[96px]">

  <span className="relative inline-block">
    O
    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    
      <svg
      className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 text-yellow-400"
    
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    </span>
  </span>
  <AnimatedWords
    text="ur Customers"
    as="span"
    className="inline"
  />
</div>
  </div>

  {/* Black strip with logos */}
<div className="w-full bg-black py-6 mt-20 overflow-hidden">
  
  {/* Scrolling logos - smooth continuous */}
  <div className="flex gap-10 logo-scroll">
    {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
      <img
        key={i}
        src={logo.src}
        alt={logo.alt}
        className="h-12 md:h-16 object-contain flex-shrink-0"
      />
    ))}
  </div>

</div>

    
 
</section>
  );
};

export default PortfolioSection;

