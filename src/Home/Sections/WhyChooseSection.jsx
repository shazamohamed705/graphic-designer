import React from 'react';

const WhyChooseSection = () => {
  return (
    <section className="relative w-full bg-white pt-16 sm:pt-20 lg:pt-24 px-4 sm:px-6 lg:px-8 pb-64">
      {/* Gradient background decoration extending down */}
      
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-12 text-gray-400">
          Why choose <span className="text-black">us?</span>
        </h2>

        {/* Content Box */}
        <div 
          className="relative w-full p-[2px] rounded-3xl"
          style={{
            background: 'linear-gradient(135deg, #00FFFF, #FF69B4, #00FF00)'
          }}
        >
          <div className="bg-white rounded-3xl p-8 sm:p-10 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Text Content */}
            <div className="flex-1">
              <p className="text-black text-xl sm:text-2xl lg:text-3xl font-bold leading-relaxed">
                Because we focus on real results... We equip you to be a sought-after, confident, and influential designer in the market.
              </p>
            </div>

            {/* Icons */}
            <div className="relative flex-shrink-0">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 flex items-center justify-center overflow-hidden">
                {/* Single GIF Icon */}
                <div className="w-32 h-32 sm:w-40 sm:h-40 overflow-hidden relative">
                  <img 
                    src="/ScreenRecording2026-02-17142643-ezgif.com-video-to-gif-converter.gif" 
                    alt="Icon" 
                    className="absolute"
                    style={{ 
                      width: '110%',
                      height: '110%',
                      top: '-10%',
                      right: '-5%',
                      objectFit: 'cover',
                      willChange: 'auto',
                      transform: 'translateZ(0)'
                    }}
                  />
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;  