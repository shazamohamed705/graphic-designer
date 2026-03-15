import { useState } from 'react';
import { BsStars } from "react-icons/bs";
import AnimatedWords from "../components/AnimatedWords/AnimatedWords";

function PhSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handlePlayClick = () => {
    setIsVideoOpen(true);
  };

  const handleCloseVideo = () => {
    setIsVideoOpen(false);
  };
  
  return (
    <section className="w-full bg-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Video Section with Border Animation */}
        <div className="relative w-full mb-8 sm:mb-12 lg:mb-16">
          <div className="relative group" style={{ paddingBottom: '56.25%' }}>
            {/* Static Gradient Border - Always Visible */}
            <div className="absolute inset-0 rounded-[30px] pointer-events-none z-10">
              <div className="absolute inset-0 rounded-[30px] p-[5px] bg-gradient-to-b from-[#FF0000] via-[#DDFF11] via-[#FF00FF] to-[#00F2FF]">
                <div className="w-full h-full rounded-[30px] bg-black"></div>
              </div>
            </div>

            {/* Animated Light on Hover */}
            <div className="absolute inset-0 rounded-[30px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity z-10">
              <div className="absolute inset-0 rounded-[30px] p-[5px] bg-gradient-to-b from-transparent via-white to-transparent border-light-animate">
                <div className="w-full h-full rounded-[30px] bg-black"></div>
              </div>
            </div>
            
            {/* Play Button */}
            <div className="absolute inset-0 rounded-[30px] flex items-center justify-center pointer-events-auto z-20">
              <button
                type="button"
                onClick={handlePlayClick}
                className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
                aria-label="Play video"
              >
                <svg 
                  className="w-10 h-10 text-black ml-1" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Video Modal */}
        {isVideoOpen && (
          <div 
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={handleCloseVideo}
          >
            <div 
              className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleCloseVideo}
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors z-10"
                aria-label="Close video"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <video
                className="w-full h-full"
                controls
                autoPlay
              >
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}
        
        {/* النص الجديد */}
        <div className="text-center mt-8 sm:mt-12 lg:mt-16 max-w-5xl mx-auto overflow-visible">
          
        {/* Text Box with Animated Border */}
        <div className="relative w-full max-w-[1273px] mx-auto mb-8 sm:mb-12 lg:mb-16 group" style={{ minHeight: '458px' }}>
          {/* Static Gradient Border */}
          <div className="absolute inset-0 rounded-[50px] pointer-events-none">
            <div className="absolute inset-0 rounded-[50px] p-[3px] bg-gradient-to-b from-[#FF0000] via-[#DDFF11] via-[#FF00FF] to-[#00F2FF]">
              <div className="w-full h-full rounded-[50px] bg-white"></div>
            </div>
          </div>

          {/* Animated Light on Hover */}
          <div className="absolute inset-0 rounded-[50px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="absolute inset-0 rounded-[50px] p-[3px] bg-gradient-to-b from-transparent via-white to-transparent border-light-animate">
              <div className="w-full h-full rounded-[50px] bg-white"></div>
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 px-8 sm:px-12 lg:px-16 py-8 sm:py-10 lg:py-12 flex items-center justify-center min-h-[458px]">
            <AnimatedWords
              text="We know you don't just want to learn Photoshop; you want a clear path to reach elite clients in the Gulf. Forget traditional learning methods. At ANS Academy, our curriculum is derived from the heart of real projects in the GCC countries. We are saving you years of trial and error to give you the exact expertise the Gulf market needs right now:"
              as="p"
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black text-center leading-relaxed"
              byLine={true}
            />
          </div>
        </div>

        
        </div>
        
       <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black text-center mt-40 ">
            <AnimatedWords
              text="All Courses"
              className="inline"
              as="span"
              style={{ 
                backgroundImage: 'linear-gradient(to right, #9C6B00, #FFD100, #BD8800)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}
            />
          </div>
      </div>
    </section>
  );
}

export default PhSection;
