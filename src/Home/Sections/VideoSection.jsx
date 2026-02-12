import React, { useState } from 'react';

const VideoSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handlePlayClick = () => {
    setIsVideoOpen(true);
  };

  const handleCloseVideo = () => {
    setIsVideoOpen(false);
  };

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="relative w-full aspect-[16/7] overflow-hidden rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] shadow-lg bg-[#b8b3b3]">
          <button
            type="button"
            onClick={handlePlayClick}
            className="absolute inset-0 m-auto w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-full border-3 border-white/80 shadow-xl flex items-center justify-center hover:scale-105 transition-transform duration-200 overflow-hidden"
            aria-label="Play video"
          >
            <img
              src="/1182011_555.png"
              alt="Play"
              className="w-full h-full object-cover rounded-full"
            />
          </button>
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

export default VideoSection;

