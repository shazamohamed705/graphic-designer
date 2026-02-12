import { useState } from 'react';
import { FaArrowLeft,  FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const CoursesSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();

  const handlePlayClick = (index) => {
    setSelectedVideo(index);
    setIsVideoOpen(true);
  };

  const handleCloseVideo = () => {
    setIsVideoOpen(false);
    setSelectedVideo(null);
  };

  const handleCourseClick = (courseIndex) => {
    navigate(`/course/${courseIndex}`);
  };

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
    },
    {
      image: "/Untitled-3 6.png",
      title: "We will learn photomonoplication integration",
      description: "Master Python by building 100 projects in 100 days. Learn data science, automation, build websites games and apps!",
      duration: "1 Minute",
      students: "150 Students",
      rating: 5,
      reviews: "120 revreview"
    },
    {
      image: "/Untitled-3 1.png",
      title: "Advanced Design Techniques",
      description: "Take your design skills to the next level with advanced techniques and professional workflows!",
      duration: "2 Minutes",
      students: "200 Students",
      rating: 5,
      reviews: "150 reviews"
    },
    {
      image: "/Untitled-3 2.png",
      title: "Brand Identity Masterclass",
      description: "Learn how to create stunning brand identities that stand out in the market!",
      duration: "3 Minutes",
      students: "180 Students",
      rating: 5,
      reviews: "130 reviews"
    },
    {
      image: "/Untitled-3 3.png",
      title: "Social Media Design Pro",
      description: "Master social media design and create engaging content that converts!",
      duration: "1.5 Minutes",
      students: "220 Students",
      rating: 5,
      reviews: "180 reviews"
    }
  ];

  // Carousel functions
  const coursesPerPage = 9;
  const totalPages = Math.ceil(courses.length / coursesPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getCurrentCourses = () => {
    const startIndex = currentPage * coursesPerPage;
    return courses.slice(startIndex, startIndex + coursesPerPage);
  };

  return (
    <section 
      className="w-full bg-black py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 rounded-3xl shadow-[0_25px_50px_rgba(0,0,0,0.6)]"
      style={{
        background: 'linear-gradient(180deg, #000000 0%, #1A1A1A 100%)'
      }}
    >

      <div className="max-w-7xl mx-auto">
           
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {getCurrentCourses().map((course, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.35)] overflow-visible w-full max-w-[580px] mx-auto flex flex-col cursor-pointer transition-all duration-300 hover:shadow-[0_30px_60px_rgba(0,0,0,0.45)]" 
              style={{ aspectRatio: '520 / 599.94' }}
              onClick={() => handleCourseClick(index)}
            >
              <div className="relative mx-4 sm:mx-5 lg:mx-6 mt-4 aspect-[16/9] overflow-hidden shadow-2xl shadow-black/30 rounded-2xl sm:rounded-3xl">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60">
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

              <div className="px-4 sm:px-5 lg:px-6 pt-6 sm:pt-8 pb-2">
                <div className="flex items-center gap-4 sm:gap-6">
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

              <div className="p-4 sm:p-5 lg:p-6 pt-0">
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-black mb-3">
                  {course.title}
                </h3>
                <p className="text-gray-700 text-xs sm:text-sm mb-4 leading-relaxed">
                  {course.description}
                </p>
                
                <div className="flex items-center justify-between gap-4 ">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      {[...Array(course.rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ))}
                    </div>
                    <span className="text-gray-600 text-sm sm:text-sm">({course.reviews})</span>
                  </div>

                 
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <button
            onClick={prevPage}
            className="w-12 h-12 rounded-full bg-white shadow-lg border-2 border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
            disabled={totalPages <= 1}
          >
            <FaArrowLeft className="text-gray-600" />
          </button>
          
   
          <button
            onClick={nextPage}
            className="w-12 h-12 rounded-full bg-white shadow-lg border-2 border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
            disabled={totalPages <= 1}
          >
            <FaArrowRight className="text-gray-600" />
          </button>
        </div>

        <div className="flex justify-center">
          <button className="btn-wave text-white px-12 sm:px-16 lg:px-20 py-4 sm:py-5 lg:py-6 rounded-lg transition-colors shadow-lg font-semibold text-lg sm:text-xl lg:text-2xl flex items-center" style={{
            backgroundImage: 'linear-gradient(to right, #D9D9D9, #737373)'
          }}>
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
            <FaArrowRight className="ml-2" />
          </button>
        </div>

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

export default CoursesSection;