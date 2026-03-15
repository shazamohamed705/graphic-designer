import React from 'react';
import AnimatedWords from '../../components/AnimatedWords/AnimatedWords';

const DesignToolsSection = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-2 sm:space-y-3">
          <AnimatedWords
            text='"Tools of the Trade, Skills for the Market."'
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-black"
          />
          <AnimatedWords
            text="We don't just teach software we teach you how to use"
            as="p"
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-black"
          />
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black">
            (
            <AnimatedWords
              text="Photoshop"
              as="span"
              className="inline"
              style={{ 
                backgroundImage: 'linear-gradient(to right, #D7AD01, #FADD64)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}
            />
            <span className="text-black"> & </span>
            <AnimatedWords
              text="Illustrator"
              as="span"
              className="inline"
              style={{ 
                backgroundImage: 'linear-gradient(to right, #D7AD01, #FADD64)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}
            />
            <span className="text-black"> & </span>
            <AnimatedWords
              text="Indesign"
              as="span"
              className="inline"
              style={{ 
                backgroundImage: 'linear-gradient(to right, #D7AD01, #FADD64)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}
            />
            )
          </div>
          <AnimatedWords
            text="to deliver world-class results that clients are eager to pay for."
            as="p"
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-black leading-relaxed"
          />
        </div>
      </div>
    </section>
  );
};

export default DesignToolsSection;

