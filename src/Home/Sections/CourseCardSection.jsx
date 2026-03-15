import React, { useState } from 'react';

const CourseCardSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handlePlayClick = () => {
    setIsVideoOpen(true);
  };

  const handleCloseVideo = () => {
    setIsVideoOpen(false);
  };

  return (
    <section className="w-full bg-white py-6 sm:py-8 lg:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl xl:max-w-7xl mx-auto">
        {/* Free Lecture Heading - Above Card */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="font-lexend font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6" style={{
              backgroundImage: 'linear-gradient(to right, #BD8800 0%, #BD8800 35%, #FFD100 45%, #FFD100 55%, #9C6B00 65%, #9C6B00 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent'
          }}>
            Free lecture
          </h2>
          <p className="text-gray-800 text-base sm:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed px-4">
            "Take your seat now in a free lecture, where we open the doors to our backstage to show you the methodology by which we transform silent ideas into market-leading visual identities, and discover the secret of the gap that separates the amateur designer from the global professional."
          </p>
        </div>

        {/* Course Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl shadow-black/40 overflow-hidden p-4 sm:p-5 lg:p-6">
          {/* Top Section - Video/Banner with Animated Border */}
          <div className="relative mb-4 group">
            {/* Video Container with Border */}
            <div className="relative w-full aspect-[16/11] overflow-hidden rounded-3xl shadow-2xl shadow-black/30 bg-black">
              {/* Static Border */}
              <div className="absolute inset-0 rounded-3xl pointer-events-none z-20">
                <div className="absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-b from-[#FF0000] via-[#DDFF11] via-[#FF00FF] to-[#00F2FF]">
                  <div className="w-full h-full rounded-3xl bg-black"></div>
                </div>
              </div>

              {/* Animated Light on Hover */}
              <div className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity z-20">
                <div className="absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-b from-transparent via-white to-transparent border-light-animate">
                  <div className="w-full h-full rounded-3xl bg-black"></div>
                </div>
              </div>
            
              {/* Play Button - Centered */}
              <div className="absolute inset-0 flex items-center justify-center z-30">
                <button
                  onClick={handlePlayClick}
                  className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-full border-4 border-cyan-300/80 bg-cyan-600/40 shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-200 overflow-hidden backdrop-blur-sm"
                  aria-label="Play video"
                >
                  <img
                    src="/1182011_555.png"
                    alt="Play"
                    className="w-full h-full object-cover rounded-full"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Time and Students Count - Between Image and Title */}
          <div className="flex items-center gap-4 sm:gap-6 mb-4">
              {/* 1 Minute */}
              <div className="flex items-center gap-2">
                <img
                  src="/clock_5417422 1.png"
                  alt="Time"
                  className="w-3 h-3 sm:w-5 sm:h-5 lg:w-5 lg:h-5 object-contain self-center mt-0.5 sm:mt-1"
                />
                <span className="text-gray-700 text-sm sm:text-base lg:text-lg font-sm leading-none">
                  1 Minute
                </span>
              </div>
              
              {/* 10,000 Students */}
              <div className="flex items-center gap-2">
                <img
                  src="/group_694642 1.png"
                  alt="Students"
                  className="w-5 h-5 sm:w-7 sm:h-7 lg:w-7 lg:h-7 object-contain self-center mt-0.5 sm:mt-1"
                />
                <span className="text-gray-700 text-sm sm:text-base lg:text-lg font-sm leading-none">
                  10,000 Students
                </span>
              </div>
            </div>

          {/* Bottom Section - Course Details */}
          <div className="pt-0">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4">
              Free Section
            </h3>
            <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
              Master Python by building 100 projects in 100 days. Learn data science, automation, build websites games and apps
            </p>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <span className="text-black text-sm sm:text-base">(600,00 review)</span>
            </div>

            {/* CTA Button */}
            <div className="flex justify-end">
              <button className="btn-wave flex items-center bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-colors shadow-lg font-semibold text-sm sm:text-base">
                <span className="letter">V</span>
                <span className="letter">i</span>
                <span className="letter">e</span>
                <span className="letter">w</span>
                <span className="letter">&nbsp;</span>
                <span className="letter">A</span>
                <span className="letter">l</span>
                <span className="letter">l</span>
                <span className="letter">&nbsp;</span>
                <span className="letter">c</span>
                <span className="letter">o</span>
                <span className="letter">u</span>
                <span className="letter">r</span>
                <span className="letter">s</span>
                <span className="letter">e</span>
                <span className="letter">s</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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
      </div>
    </section>
  );
};

export default CourseCardSection;

