import React from 'react';

const ServicesSection = () => {
  return (
    <section className="relative w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Profile Image - Top */}
        <div className="flex justify-center -mb-16 sm:-mb-20 lg:-mb-24">
          <img
            src="/45565621 1.png"
            alt="Abdullah ElNasr"
            className="w-[300px] sm:w-[400px] lg:w-[500px] h-auto object-contain"
          />
        </div>

        {/* Content Box */}
        <div 
          className="relative rounded-[80px] sm:rounded-[100px] lg:rounded-[120px] p-10 sm:p-14 lg:p-20 pt-4 sm:pt-5 lg:pt-6 overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #1a1a1a 0%, #3d2a1a 50%, #8B6914 100%)'
          }}
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0 opacity-70">
            <img
              src="/11 82014.png"
              alt="Background Pattern"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content - Above background */}
          <div className="relative z-10">
          {/* Header with Logo - Centered */}
          <div className="flex justify-center mb-2">
            <img
              src="/logo alnaser text 1.png"
              alt="Abdullah ElNasr Logo"
              className="h-8 sm:h-10 lg:h-16 w-auto"
            />
          </div>

          {/* Title - Centered */}
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 text-center"
            style={{
              backgroundImage: 'linear-gradient(to right, #E6A326, #E9DB69, #E29C14)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent'
            }}
          >
            Abdullah ElNasr
          </h2>

          {/* Subtitle - Centered */}
          <p className="text-white text-lg sm:text-xl mb-6 font-medium text-center">
            A vision that began in the heart of the market
          </p>

          {/* Content with Border */}
          <div className="border-l-4 border-yellow-500 pl-6 mb-8">
            <p className="text-white text-sm sm:text-base lg:text-lg leading-relaxed mb-4">
              For eight years, my passion has been more than just designing beautiful images; it's understanding the business psychology behind every pixel. After working with major agencies and brands, I've realized that Arab designers possess talent, but they need a clear professional roadmap to place them where they deserve to be.
            </p>
            
            <p className="text-white text-sm sm:text-base lg:text-lg leading-relaxed">
              ANS Courses is the culmination of my journey... I designed it to be the practical professional guide that saves you years of trial and error, so that you can be the next success story.
            </p>
          </div>

          {/* Learn More Button */}
          <div className="flex justify-end">
            <button className="btn-wave bg-white text-black px-8 py-3 rounded-full font-semibold text-base sm:text-lg flex items-center hover:bg-gray-100 transition-colors shadow-lg">
              <span className="letter">L</span>
              <span className="letter">e</span>
              <span className="letter">a</span>
              <span className="letter">r</span>
              <span className="letter">n</span>
              <span className="letter">&nbsp;</span>
              <span className="letter">m</span>
              <span className="letter">o</span>
              <span className="letter">r</span>
              <span className="letter">e</span>
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center ml-3">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;