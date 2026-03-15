import React from 'react';

const ValuePropositionSection = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 mb-24 sm:mb-32 lg:mb-40">
      <div className="max-w-5xl mx-auto">
        
        {/* First Block - Tool Icon */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          {/* Icon - Image behind box */}
          <div className="flex justify-end mb-[-80px] sm:mb-[-100px] lg:mb-[-100px]">
            <img 
              src="/group.png" 
              alt="Design Tool" 
              className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 object-contain"
            />
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 relative z-10">
            I'm not here to teach you <span className="text-gray-400">just a tool (Tools).</span>
          </h2>

          {/* Gradient Border Box */}
          <div className="relative rounded-3xl p-[2px] group z-10" style={{background: 'linear-gradient(180deg, #ef4444 0%, #ef4444 15%, #22c55e 40%, #3b82f6 65%, #ec4899 90%, #ec4899 100%)'}}>
            {/* Animated Light on Hover */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-b from-transparent via-white to-transparent"></div>
            
            <div className="relative bg-white rounded-3xl p-8 sm:p-12 lg:p-16">
              <p className="text-base sm:text-lg lg:text-xl font-bold leading-relaxed bg-gradient-to-r from-black to-gray-400 bg-clip-text text-transparent">
                I'm here to give you the 'code' that makes your designs worth hundreds of dollars. In this course, I'll share with you all the professional secrets I've learned in the field — so you can skip years of trial and error."
              </p>
            </div>
          </div>
        </div>

        {/* Second Block - Handshake Icon */}
        <div>
          {/* Icon - Image behind box */}
          <div className="flex justify-end mb-[-80px] sm:mb-[-100px] lg:mb-[-120px]">
            <img 
              src="/Mask group (9).png" 
              alt="Mask group (9).png" 
              className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 object-contain"
            />
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 relative z-10">
            Join the elite <span className="text-gray-400">community of creative designers.</span>
          </h2>

          {/* Gradient Border Box */}
          <div className="relative rounded-[40px] p-[2px] group z-10" style={{background: 'linear-gradient(180deg, #ef4444 0%, #ef4444 15%, #22c55e 40%, #3b82f6 65%, #ec4899 90%, #ec4899 100%)'}}>
            {/* Animated Light on Hover */}
            <div className="absolute inset-0 rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-b from-transparent via-white to-transparent"></div>
            
            <div className="relative bg-white rounded-[40px] p-8 sm:p-12 lg:p-16">
              <p className="text-base sm:text-lg lg:text-xl font-bold leading-relaxed bg-gradient-to-r from-black to-gray-400 bg-clip-text text-transparent">
                We take pride in our graduates who started their journey with us and today, they are part of some of the biggest advertising and marketing agencies across the Arab world.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ValuePropositionSection;
