import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { MdOutlineDateRange } from 'react-icons/md';
import { FaCircleCheck, FaEye, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaTiktok } from "react-icons/fa6";

import ComentSection from './ComentSection';
function CourseDetails() {
  const { courseId } = useParams();
  const [activeTab, setActiveTab] = useState('all');

  const courseData = {
    title: "We will learn photomonoplication integration",
    instructor: "Abdullah Elnasr",
    price: "1000 SAR",
    lastUpdate: "11/2025",
    videoUrl: "/11 1.png",
    features: [
      "Accredited certificate",
      "Lifetime payment", 
      "Download files and supporting resources",
      "Unlimited access to recorded content"
    ],
    lessons: [
      "We will learn photomonoplication integration",
      "We will learn photomonoplication integration", 
      "We will learn photomonoplication integration"
    ]
  };

  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'overview', label: 'Overview' },
    { id: 'content', label: 'Course content' },
    { id: 'details', label: 'Details' },
    { id: 'instructor', label: 'Instructor' },
    { id: 'reviews', label: 'Reviews' }
  ];

  const testimonials = [
    {
      name: "Layla Mansour",
      title: "Creative Director",
      quote: "The attention to detail is simply world-class. They took my vision and turned it into something even better than I imagined. Truly a talented team.",
      image: "/32 1.png"
    },
    {
      name: "Aya Mahmoud",
      title: "Freelance Graphic Designer",
      quote: "This course was a turning point in my career. I went from struggling with tools to confidently handling complex branding projects for international clients.",
      image: "/32 2.png"
    },
    {
      name: "Mostafa Khaled",
      title: "Beginner Student",
      quote: "I started with zero knowledge in design, but after just a few weeks, I can now create my own logos and posters. The lessons are very easy to follow.",
      image: "/32 3.png"
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-16 md:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ml-25">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2">
            <div className="mb-4">
              <nav className="text-lg text-black font-bold">
                <Link to="/" className="hover:text-gray-600 transition-colors">Home</Link> 
                <span> &gt; </span> 
                <Link to="/courses" className="hover:text-gray-600 transition-colors">Courses</Link> 
                <span> &gt; </span> 
                <span>Subscribe</span>
              </nav>
            </div>
            
            <div className="flex items-center mb-6">
              <img 
                src="/profile.png" 
                alt="Instructor"
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h3 className="font-semibold text-black">{courseData.instructor}</h3>
                <p className="text-black">Instructor</p>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4 whitespace-nowrap">
              {courseData.title}
            </h1>

            <p className="mb-10" style={{ color: '#9E9E9E' }}>
              Master Python by building 100 projects in 100 days.<br />
              Learn data science, automation, build websites games and apps!
            </p>

            <div className="flex items-center gap-6 mb-8 text-sm text-black">
              <div className="flex items-center">
                <span className="flex items-center" style={{ color: '#9E9E9E' }}>
                  <MdOutlineDateRange className="mr-1" style={{ color: '#9E9E9E' }} />
                  Last update {courseData.lastUpdate}
                </span>
              </div>
              <div className="flex items-center">
                <span className="flex items-center" style={{ color: '#9E9E9E' }}>
                  <img src="/world-book-day_12133395 1.png" alt="Certified" className="w-4 h-4 mr-1" />
                  Certified course
                </span>
              </div>
            </div>

            <div className="relative mb-8 rounded-2xl overflow-hidden bg-black">
              <img 
                src={courseData.videoUrl}
                alt="Course preview"
                className="w-full h-80 sm:h-96 lg:h-[550px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/40 flex items-center justify-center">
                <button className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold">Graphics</h3>
                <p className="text-sm opacity-90">GRAPHIC EXPERIENCES</p>
              </div>
            </div>

            <div className="mb-6 flex justify-center">
              <nav className="bg-black rounded-full p-1 flex space-x-1 w-full max-w-[705px] h-12 items-center">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 h-10 rounded-full font-medium text-sm transition-all ${
                      activeTab === tab.id
                        ? 'bg-white text-black'
                        : 'text-white hover:bg-white/10'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            <div className="space-y-6">
              {(activeTab === 'all' || activeTab === 'overview') && (
                <div className="rounded-lg p-6 border" style={{ 
                  background: 'linear-gradient(45deg, #FFFFFF 0%, #E8E6E6 100%)', 
                  borderColor: '#E8E6E6' 
                }}>
                  <h3 className="font-semibold mb-6 text-black border-b pb-3" style={{ borderColor: '#E8E6E6' }}>What will you learn?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                    <div>
                      <h4 className="font-medium text-black mb-2 flex items-center">
                        <FaCircleCheck className="mr-2 text-green-600" />
                        CUTTING
                      </h4>
                      <p className="font-medium text-black flex items-center ml-0">
                        <FaCircleCheck className="mr-2 text-green-600" />
                        brush too
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-black mb-2 flex items-center">
                        <FaCircleCheck className="mr-2 text-green-600" />
                        MOCKUPS
                      </h4>
                    </div>
                  </div>
                  <button className="text-green-600 text-bold mt-6 hover:text-green-700 transition-colors">
                    Show more
                  </button>
                </div>
              )}
              
              {(activeTab === 'all' || activeTab === 'content') && (
                <div className="rounded-lg p-6 border" style={{ 
                  background: 'linear-gradient(45deg, #FFFFFF 0%, #E8E6E6 100%)', 
                  borderColor: '#E8E6E6' 
                }}>
                  <h3 className="font-semibold mb-4 text-black border-b pb-3" style={{ borderColor: '#E8E6E6' }}>Course content</h3>
                  <div className="space-y-3">
                    <FaCircleCheck className="text-green-600 text-sm" />
                    <FaCircleCheck className="text-green-600 text-sm" />
                  </div>
                  <button className="text-green-600 text-bold mt-6 hover:text-green-700 transition-colors">
                    Show more
                  </button>
                </div>
              )}

              {(activeTab === 'all' || activeTab === 'details') && (
                <div className="rounded-lg p-6 border" style={{ 
                  background: 'linear-gradient(45deg, #FFFFFF 0%, #E8E6E6 100%)', 
                  borderColor: '#E8E6E6' 
                }}>
                  <h3 className="font-semibold mb-4 text-black border-b pb-3" style={{ borderColor: '#E8E6E6' }}>Course Details</h3>
                  <div className="space-y-3">
                    <FaCircleCheck className="text-green-600 text-sm" />
                    <FaCircleCheck className="text-green-600 text-sm" />
                    
                  </div>
                  <button className="text-green-600 text-bold mt-6 hover:text-green-700 transition-colors">
                    Show more
                  </button>
                </div>
              )}

              {(activeTab === 'all' || activeTab === 'instructor') && (
                <div className="rounded-lg p-6 border" style={{ 
                  background: 'linear-gradient(45deg, #FFFFFF 0%, #E8E6E6 100%)', 
                  borderColor: '#E8E6E6' 
                }}>
                  <h3 className="font-semibold mb-4 text-black border-b pb-3" style={{ borderColor: '#E8E6E6' }}>About the Instructor</h3>
                  <div className="flex items-center mb-4">
                    <img src="/profile.png" alt="Instructor" className="w-16 h-16 rounded-full mr-4" />
                    <div>
                      <h4 className="font-semibold text-black">{courseData.instructor}</h4>
                      <p className="text-sm text-gray-600">Graphic Design Expert</p>
                    </div>
                  </div>
                  <p className="text-sm text-black">Professional graphic designer with over 10 years of experience in the field.</p>
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-[440px]">
              <div className="bg-black text-white rounded-2xl p-6 mb-6 w-full max-w-[450px] mx-auto" style={{ height: '300px' }}>
                <h3 className="text-[29px] font-bold mb-2">Course price</h3>
                <p className="text-2xl font-bold mb-4">{courseData.price}</p>
                <button className="w-full max-w-[397px] h-[51px] mx-auto bg-gradient-to-r from-green-400 to-yellow-400 text-black font-semibold rounded-lg mb-4 flex items-center  justify-start pl-6">
                  Subscribe now →
                </button>
                <button className="w-full max-w-[397px] h-[51px] mx-auto border border-white text-white rounded-lg flex items-center justify-start pl-6">
                  Try Free Lesson ⟲
                </button>
              </div>

              <div className="bg-white border border-white rounded-2xl p-6 mb-6 shadow-lg shadow-black/20">
                <h3 className="font-semibold mb-4">What does the course content include?</h3>
                <div className="space-y-3">
                  {courseData.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <FaCircleCheck className="text-green-600 mr-3" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-white rounded-2xl p-6 mb-6 shadow-lg shadow-black/20">
                <h3 className="font-semibold mb-4">You have 5 free lessons available to try</h3>
                <div className="space-y-3">
                  {courseData.lessons.slice(0, 3).map((lesson, index) => (
                    <div key={index} className="text-sm">
                      <div className="flex items-center m-2">
                        <svg className="w-4 h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                        {lesson}
                      </div>
                      <div className="ml-5 flex items-center">
                        <FaCircleCheck className="text-green-600 mr-2 text-xs" />
                        <div className="bg-black text-white px-3 py-1 rounded-full flex items-center text-xs w-fit" style={{ width: '120px', height: '15px' }}>
                          <FaEye className="w-3 h-3 mr-1" />
                          watch
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div 
                className="bg-black text-white rounded-3xl p-6 mb-6 shadow-[0_25px_50px_rgba(0,0,0,0.6)]"
                style={{
                  background: 'linear-gradient(180deg, #000000 0%, #1A1A1A 100%)'
                }}
              >
                <h3 className="font-bold mb-6 text-xl border-b border-white/20 pb-4">Share the course</h3>
                <div className="flex justify-center space-x-4">
                  <button className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/20 flex items-center justify-center shrink-0 hover:bg-white/30 transition-colors">
                    <FaFacebookF className="text-white text-lg" />
                  </button>
                  <button className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/20 flex items-center justify-center shrink-0 hover:bg-white/30 transition-colors">
                    <FaInstagram className="text-white text-lg" />
                  </button>
                  <button className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/20 flex items-center justify-center shrink-0 hover:bg-white/30 transition-colors">
                    <FaTwitter className="text-white text-lg" />
                  </button>
                  <button className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/20 flex items-center justify-center shrink-0 hover:bg-white/30 transition-colors">
                    <FaLinkedinIn className="text-white text-lg" />
                  </button>
                  <button className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/20 flex items-center justify-center shrink-0 hover:bg-white/30 transition-colors">
                    <FaTiktok className="text-white text-lg" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full Width Reviews Section - Breakout from container */}
        {(activeTab === 'all' || activeTab === 'reviews') && (
          <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-white py-12 mt-8">
            <div className="max-w-7xl mx-auto px-6">
              <h3 className="font-bold mb-8 text-[48px] text-black border-b pb-3 pl-8" style={{ borderColor: '#E8E6E6' }}>
             Reviews
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full max-w-[415px] mx-auto">
                    <div 
                      className="rounded-[30px] sm:rounded-[40px] lg:rounded-[50px] p-6 lg:p-8 hover:shadow-xl transition-shadow duration-200 flex flex-col"
                      style={{ 
                        minHeight: '230px',
                        background: 'linear-gradient(45deg, #F0F0F0 0%, #FFFFFF 20%, #FFFFFF 60%, #F0F0F0 100%)'
                      }}
                    >
                      <div className="flex items-center gap-3 lg:gap-4 mb-4">
                        <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-gray-300 overflow-hidden flex-shrink-0">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="text-base lg:text-lg font-bold text-black">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm lg:text-base text-black">
                            {testimonial.title}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm lg:text-base text-gray-700 leading-relaxed flex-1">
                        "{testimonial.quote}"
                      </p>
                    </div>
                    <div className="flex gap-1 justify-start mt-4 ml-6 lg:ml-8">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
          <ComentSection/>

    </div>
  );
}

export default CourseDetails;