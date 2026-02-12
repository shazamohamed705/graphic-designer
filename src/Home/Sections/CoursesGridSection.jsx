import React, { useState } from 'react';

const CoursesGridSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handlePlayClick = (index) => {
    setSelectedVideo(index);
    setIsVideoOpen(true);
  };

  const handleCloseVideo = () => {
    setIsVideoOpen(false);
    setSelectedVideo(null);
  };

  // Sample course data - يمكن استبدالها بالبيانات الحقيقية
  const courses = [
    {
      image: "/Untitled-3 1.png",
      title: "We will learn photomonoplication integration",
      description: "Master Python by building 100 projects in 100 days. Learn data science, automation, build websites games and apps!",
      duration: "1 Minute",
      students: "150 Students",
      rating: 5,
      reviews: "120 revreview"
    },
    {
      image: "/Untitled-3 2.png",
      title: "We will learn photomonoplication integration",
      description: "Master Python by building 100 projects in 100 days. Learn data science, automation, build websites games and apps!",
      duration: "1 Minute",
      students: "150 Students",
      rating: 5,
      reviews: "120 revreview"
    },
    {
      image: "/Untitled-3 3.png",
      title: "We will learn photomonoplication integration",
      description: "Master Python by building 100 projects in 100 days. Learn data science, automation, build websites games and apps!",
      duration: "1 Minute",
      students: "150 Students",
      rating: 5,
      reviews: "120 revreview"
    },
    {
      image: "/Untitled-3 4 (1).png",
      title: "We will learn photomonoplication integration",
      description: "Master Python by building 100 projects in 100 days. Learn data science, automation, build websites games and apps!",
      duration: "1 Minute",
      students: "150 Students",
      rating: 5,
      reviews: "120 revreview"
    },
    {
      image: "/Untitled-3 4.png",
      title: "We will learn photomonoplication integration",
      description: "Master Python by building 100 projects in 100 days. Learn data science, automation, build websites games and apps!",
      duration: "1 Minute",
      students: "150 Students",
      rating: 5,
      reviews: "120 revreview"
    },
    {
      image: "/Untitled-3 6.png",
      title: "We will learn photomonoplication integration",
      description: "Master Python by building 100 projects in 100 days. Learn data science, automation, build websites games and apps!",
      duration: "1 Minute",
      students: "150 Students",
      rating: 5,
      reviews: "120 revreview"
    }
  ];

  return (
    <section className="w-full bg-gray-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 rounded-[80px] sm:rounded-[100px] lg:rounded-[120px]">
      <div className="max-w-7xl mx-auto">
        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-visible w-full max-w-[414.99px] mx-auto flex flex-col" style={{ aspectRatio: '414.99 / 599.94' }}>
              {/* Top Section - Video/Banner - Extends beyond card */}
              <div className="relative mx-4 sm:mx-5 lg:mx-6 mt-4 aspect-[16/9] overflow-hidden shadow-2xl shadow-black/30 rounded-2xl sm:rounded-3xl">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60">
                  {/* Play Button - Centered */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={() => handlePlayClick(index)}
                      className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-black/60 border-2 border-white/80 shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-200"
                      aria-label="Play video"
                    >
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Middle Section - Stats */}
              <div className="px-4 sm:px-5 lg:px-6 pt-6 sm:pt-8 pb-2">
                <div className="flex items-center gap-4 sm:gap-6">
                  {/* Duration */}
                  <div className="flex items-center gap-2">
                    <img
                      src="/clock_5417422 1.png"
                      alt="Time"
                      className="w-3 h-3 sm:w-5 sm:h-5 lg:w-5 lg:h-5 object-contain self-center mt-0.5 sm:mt-1"
                    />
                    <span className="text-gray-700 text-sm sm:text-base lg:text-lg font-medium leading-none">
                      {course.duration}
                    </span>
                  </div>
                  
                  {/* Students */}
                  <div className="flex items-center gap-2">
                    <img
                      src="/group_694642 1.png"
                      alt="Students"
                      className="w-5 h-5 sm:w-7 sm:h-7 lg:w-7 lg:h-7 object-contain self-center mt-0.5 sm:mt-1"
                    />
                    <span className="text-gray-700 text-sm sm:text-base lg:text-lg font-medium leading-none">
                      {course.students}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Section - Course Details */}
              <div className="p-4 sm:p-5 lg:p-6 pt-0">
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-black mb-3">
                  {course.title}
                </h3>
                <p className="text-gray-700 text-xs sm:text-sm mb-4 leading-relaxed">
                  {course.description}
                </p>
                
                {/* Rating and Enroll Button - Same Line */}
                <div className="flex items-center justify-between gap-4">
                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      {[...Array(course.rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ))}
                    </div>
                    <span className="text-black text-sm sm:text-sm">({course.reviews})</span>
                  </div>

                  {/* Enroll Button */}
                  <button className="btn-wave flex items-center text-black transition-colors font-semibold text-sm sm:text-base flex-shrink-0">
                    <span className="letter">E</span>
                    <span className="letter">n</span>
                    <span className="letter">r</span>
                    <span className="letter">o</span>
                    <span className="letter">l</span>
                    <span className="letter">l</span>
                    <span className="letter">&nbsp;</span>
                    <span className="letter">C</span>
                    <span className="letter">o</span>
                    <span className="letter">u</span>
                    <span className="letter">r</span>
                    <span className="letter">s</span>
                    <span className="letter">e</span>
                    <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" fill="currentColor"/>
                      <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Courses Button */}
        <div className="flex justify-center">
          <button className="btn-wave bg-black text-white px-8 sm:px-10 lg:px-12 py-3 sm:py-4 rounded-lg transition-colors shadow-lg font-semibold text-base sm:text-lg">
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

export default CoursesGridSection;

