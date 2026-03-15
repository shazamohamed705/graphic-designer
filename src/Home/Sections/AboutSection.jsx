import React from 'react';
import AnimatedWords from '../../components/AnimatedWords/AnimatedWords';
import AnimatedLetters from '../../components/AnimatedLetters/AnimatedLetters';

const AboutSection = () => {
  return (
    <section 
      className="w-full bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Main Title */}
        <AnimatedWords 
          text="Why has our platform become the number one destination for elite designers in the Gulf and the Arab world?"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-12 sm:mb-16 text-center leading-tight pb-4"
          style={{ 
            backgroundImage: 'linear-gradient(to right, #BD8800 0%, #BD8800 40%, #E6B800 50%, #BD8800 60%, #9C6B00 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent'
          }}
        />
        
        {/* Content Sections */}
        <div className="space-y-8 sm:space-y-12">
          {/* First Point */}
          <div className="text-center">
            <p className="text-lg sm:text-xl md:text-4xl text-black font-medium mb-3">
              Because we don't just offer a training course; we give you the secret formula for professional and financial success.
            </p>
            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-black-400 mx-auto" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>

          {/* Second Point */}
          <div className="text-center">
            <p className="text-lg sm:text-xl md:text-4xl text-black font-medium mb-3">
              We develop professional designers who are ready to enter the market with confidence and turn their skills into real, sustainable income.
            </p>
            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-400 mx-auto" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>

          {/* Third Point */}
          <div className="text-center">
            <p className="text-lg sm:text-xl md:text-4xl text-black font-medium">
              Through clear steps and a practical approach that reflects the reality of the market, we put you directly on the path to professionalism and distinction.
            </p>
            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-black-400 mx-auto mt-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
