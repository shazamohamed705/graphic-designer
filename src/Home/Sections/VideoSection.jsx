import { useState } from 'react';

const VideoSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handlePlayClick = () => {
    setIsVideoOpen(true);
  };

  const handleCloseVideo = () => {
    setIsVideoOpen(false);
  };

  return (
    <section className="relative w-full bg-transparent py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 -mt-24 z-20">
      <div className="w-full max-w-[95%] mx-auto">
        <div className="relative group" style={{ paddingBottom: '35%' }}>
          {/* Static Gradient Border - Always Visible */}
          <div className="absolute inset-0 rounded-[30px] pointer-events-none">
            <div className="absolute inset-0 rounded-[30px] p-[5px] bg-gradient-to-b from-[#FF0000] via-[#DDFF11] via-[#FF00FF] to-[#00F2FF]">
              <div className="w-full h-full rounded-[30px] bg-black"></div>
            </div>
          </div>

          {/* Animated Light on Hover */}
          <div className="absolute inset-0 rounded-[30px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="absolute inset-0 rounded-[30px] p-[5px] bg-gradient-to-b from-transparent via-white to-transparent border-light-animate">
              <div className="w-full h-full rounded-[30px] bg-black"></div>
            </div>
          </div>
          
          {/* Video Content */}
          <div className="absolute inset-0 rounded-[30px] flex items-center justify-center pointer-events-auto">
            <button
              type="button"
              onClick={handlePlayClick}
              className="relative z-10 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
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

