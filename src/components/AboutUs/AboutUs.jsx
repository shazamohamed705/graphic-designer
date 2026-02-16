

function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      <section className="w-full bg-white flex items-start justify-center pt-16 md:pt-20 relative">
        <div className="relative w-full max-w-full">
          <img
            className="w-full h-auto object-cover bg-black"
            src="/22931e73cc3cca91153b1bd3463146c5058365ff.png" 
            alt="Courses Cover"
          />
          {/* Blur overlay on image */}
          <div className="absolute inset-0 backdrop-blur-sm bg-black/30"></div>
           
          <div className="absolute inset-0 flex items-center justify-center pl-8 md:pl-20 lg:pl-32 -mt-20 md:-mt-40">
            <div className="text-left text-white font-lexend max-w-xl">
              <h1 className="inline-block text-[42px] md:text-[92px] font-bold leading-[1.05]">
                ABOUT US
              </h1>
              <p className="mt-3 text-sm md:text-base font-medium tracking-wide">
       Your gateway to mastering the global design market with expert
led training and real-world projects

              </p>
            </div>
            
          </div>
        </div>
      </section>
      
      {/* Second Section */}
      <section className="w-full bg-white flex items-center justify-center py-8 md:py-12">
        <div className="relative w-full max-w-[2000px] mx-auto px-6 sm:px-8 lg:px-12">
          <img
            className="w-full h-auto object-cover rounded-2xl"
            src="/22931e73cc3cca91153b1bd3463146c5058365ff.png" 
            alt="About Section"
          />
          
          <div className="absolute inset-0 flex items-center justify-center px-8 md:px-20">
            <div className="text-center text-white font-lexend max-w-4xl">
           
              <p className="text-base md:text-lg lg:text-2xl font-medium">
Your gateway to mastering the global design market with expert
led training and real-world projects

              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission Section with Images */}
      <section className="w-full bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* Left Image */}
            <div className="flex justify-center">
              <img
                src="/professional-portrait-of-a-gulf-woman-st_HSwB66zARaOcxRg_O_coCg_n5HVAPbLTN6IQsly9mDo1Q 1.png"
                alt="Designer working"
                className="w-full max-w-md h-auto object-cover rounded-3xl shadow-lg"
              />
            </div>

            {/* Center Text Content */}
            <div className="text-left space-y-10 px-2">
              <h2 className="text-xl md:text-xl font-bold text-black mb-6">
                Our mission is to transform aspiring creators into high-earning professionals. We don't just teach software; we teach the Business of Design
              </h2>
              
              <ul className="space-y-3 text-gray-700 font-semibold">
                <li className="flex items-start">
                  <span className="text-black mr-2">•</span>
                  <div>
                    <strong className="text-black">Real-World Expertise:</strong>  We transfer years of field experience, teaching you how to think like a professional designer who commands high fees.
Comprehensive Branding: Our programs, like "Design to Income," focus on real projects—from logo creation to building full Brand Guidelines.
Market Mastery: We reveal the secrets of dealing with high-end clients in the Gulf market, including professional pricing and project management.
Career Support: We provide a supportive ecosystem, from portfolio reviews to strategic consultations that ensure you stand out in a competitive industry.
                  </div>
                </li>
                
                <li className="flex items-start">
                  <span className="text-black mr-2">•</span>
                  <div>
                    <strong className="text-black">Comprehensive Branding:</strong> Our programs, like "Design to Income," focus on real projects—from logo creation to building full Brand Guidelines.
                  </div>
                </li>
                
                <li className="flex items-start">
                  <span className="text-black mr-2">•</span>
                  <div>
                    <strong className="text-black">Market Mastery:</strong> We reveal the secrets of dealing with high-end clients in the Gulf market, including professional pricing and project management.
                  </div>
                </li>
                
                <li className="flex items-start">
                  <span className="text-black mr-2">•</span>
                  <div>
                    <strong className="text-black">Career Support:</strong> We provide a supportive ecosystem, from portfolio reviews to strategic consultations that ensure you stand out in a competitive industry.
                  </div>
                </li>
              </ul>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <img
                src="/professional-portrait-of-a-gulf-woman-st_HSwB66zARaOcxRg_O_coCg_n5HVAPbLTN6IQsly9mDo1Q 2.png"
                alt="Designer with tablet"
                className="w-full max-w-md h-auto object-cover rounded-3xl shadow-lg"
              />
            </div>

          </div>
        </div>
      </section>
      
      {/* New Section with Subtract Image */}
      <section className="w-full bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            {/* Left Side - Empty space */}
            <div></div>

            {/* Right Side - Image with Stats */}
            <div className="flex flex-col items-center lg:items-end">
              {/* Stats Section */}
              <div className="hidden lg:flex flex-row justify-between w-full mb-4 px-4">
                {/* Stat 1 */}
                <div 
                  className="flex flex-col -ml-16 md:-ml-24"
                  style={{ marginLeft: window.innerWidth >= 1024 ? '-35rem' : undefined }}
                >
                  <div className="flex items-center gap-3">
                    <h3 
                      className="text-black text-4xl sm:text-5xl md:text-6xl lg:text-[96px]"
                      style={{
                        fontFamily: 'Lexend',
                        fontWeight: 200,
                        lineHeight: '100%',
                        letterSpacing: '0%',
                        WebkitFontSmoothing: 'antialiased'
                      }}
                    >
                      100%
                    </h3>
                    <p 
                      className="text-black uppercase text-sm sm:text-base md:text-xl lg:text-[32px]"
                      style={{
                        fontFamily: 'Lexend',
                        fontWeight: 200,
                        lineHeight: '100%',
                        letterSpacing: '0%',
                        WebkitFontSmoothing: 'antialiased'
                      }}
                    >
                      CUSTOMER<br />SATISFACTION
                    </p>
                  </div>
                  <div className="w-full h-0.5 mt-2" style={{ background: 'linear-gradient(to right, #00C8FF 0%, #00C8FF 50%, #000000 50%, #000000 100%)' }}></div>
                </div>
                
                {/* Stat 2 */}
                <div 
                  className="flex flex-col"
                  style={{ transform: 'translateX(-120px)' }}
                >
                  <div className="flex items-center gap-3">
                    <h3 
                      className="text-black"
                      style={{
                        fontFamily: 'Lexend',
                        fontWeight: 200,
                        fontSize: '96px',
                        lineHeight: '100%',
                        letterSpacing: '0%',
                        WebkitFontSmoothing: 'antialiased'
                      }}
                    >
                      350+
                    </h3>
                    <p 
                      className="text-black uppercase"
                      style={{
                        fontFamily: 'Lexend',
                        fontWeight: 200,
                        fontSize: '32px',
                        lineHeight: '100%',
                        letterSpacing: '0%',
                        WebkitFontSmoothing: 'antialiased'
                      }}
                    >
                      GRAPHIC<br />SESSIONS
                    </p>
                  </div>
                  <div className="w-full h-0.5 mt-2" style={{ background: 'linear-gradient(to right, #00C8FF 0%, #00C8FF 50%, #000000 50%, #000000 100%)' }}></div>
                </div>
              </div>
              
              {/* Image - Extended to right edge */}
              <div className="hidden lg:block absolute right-0 mr-8 sm:mr-12 lg:mr-16 xl:mr-20 -mt-10 md:-mt-5 z-30">
                <img
                  src="/Subtract.png"
                  alt="Subtract"
                  className="w-auto h-[800px] md:h-[950px] lg:h-[1100px] object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
      
      {/* Black Background Section - Full Width */}
      <section 
        className="w-full relative bg-black py-32 lg:py-48 mt-32 lg:mt-48 z-10"
      >
        {/* Profile Image on the right - overlapping both sections */}
        <div className="hidden lg:block absolute right-8 md:right-16 lg:right-24 top-[-150px] z-[200]">
          <img 
            src="/3 51.png" 
            alt="Profile" 
            className="w-80 md:w-96 lg:w-[700px] h-auto object-contain"
          />
        </div>
        
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:pl-12 lg:pr-[600px] xl:pr-[800px] -mt-16 md:-mt-24 lg:-mt-32">
          {/* Why Choose Us Section */}
          <div className="max-w-3xl lg:max-w-xl">
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Why <span className="text-orange-500">Choose</span> Us
            </h2>
            <div className="w-full h-1 bg-gradient-to-r from-orange-500 to-transparent mb-8"></div>
            
            {/* Accordion Items */}
            <div className="space-y-4 divide-y divide-orange-500">
              {/* Item 1 */}
              <div className="pt-4 first:pt-0">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-white text-lg md:text-xl font-semibold">Real-World Market Expertise</h3>
                  <button className="text-white text-xl">+</button>
                </div>
                <p className="text-gray-300 text-xs md:text-sm">
                  We don't just teach tools; we share years of hands-on experience in the Egyptian and Saudi markets. You learn what actually works in the professional industry.
                </p>
              </div>
              
              {/* Item 2 */}
              <div className="pt-4">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-white text-lg md:text-xl font-semibold">Income-Driven Curriculum</h3>
                  <button className="text-white text-xl">+</button>
                </div>
                <p className="text-gray-300 text-xs md:text-sm">
                  Our "Design to Income" methodology is designed to transform your skills into a profitable career, focusing on how to price, pitch, and land high-end clients.
                </p>
              </div>
              
              {/* Item 3 */}
              <div className="pt-4">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-white text-lg md:text-xl font-semibold">Practical Project-Based Learning</h3>
                  <button className="text-white text-xl">+</button>
                </div>
                <p className="text-gray-300 text-xs md:text-sm">
                  You will build a world-class portfolio by working on real-life simulation projects from corporate branding to advanced visual effects.
                </p>
              </div>
              
              {/* Item 4 */}
              <div className="pt-4">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-white text-lg md:text-xl font-semibold">Mentorship & Professional Support</h3>
                  <button className="text-white text-xl">+</button>
                </div>
                <p className="text-gray-300 text-xs md:text-sm">
                  Get direct guidance from industry experts who understand your challenges and provide the roadmap you need to stand out in a competitive market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos Section */}
      <section className="w-full bg-white py-12 md:py-16 overflow-hidden">
        <div className="relative">
          <div className="flex animate-scroll gap-8 md:gap-12 lg:gap-16">
            <img src="/1 4.png" alt="Logo" className="h-16 md:h-20 lg:h-32 xl:h-40 w-auto object-contain grayscale hover:grayscale-0 transition-all flex-shrink-0" />
            <img src="/1 4.png" alt="Logo" className="h-16 md:h-20 lg:h-32 xl:h-40 w-auto object-contain grayscale hover:grayscale-0 transition-all flex-shrink-0" />
            <img src="/1 4.png" alt="Logo" className="h-16 md:h-20 lg:h-32 xl:h-40 w-auto object-contain grayscale hover:grayscale-0 transition-all flex-shrink-0" />
            <img src="/1 4.png" alt="Logo" className="h-16 md:h-20 lg:h-32 xl:h-40 w-auto object-contain grayscale hover:grayscale-0 transition-all flex-shrink-0" />
            <img src="/1 4.png" alt="Logo" className="h-16 md:h-20 lg:h-32 xl:h-40 w-auto object-contain grayscale hover:grayscale-0 transition-all flex-shrink-0" />
            {/* Duplicate for seamless loop */}
            <img src="/1 4.png" alt="Logo" className="h-16 md:h-20 lg:h-32 xl:h-40 w-auto object-contain grayscale hover:grayscale-0 transition-all flex-shrink-0" />
            <img src="/1 4.png" alt="Logo" className="h-16 md:h-20 lg:h-32 xl:h-40 w-auto object-contain grayscale hover:grayscale-0 transition-all flex-shrink-0" />
            <img src="/1 4.png" alt="Logo" className="h-16 md:h-20 lg:h-32 xl:h-40 w-auto object-contain grayscale hover:grayscale-0 transition-all flex-shrink-0" />
            <img src="/1 4.png" alt="Logo" className="h-16 md:h-20 lg:h-32 xl:h-40 w-auto object-contain grayscale hover:grayscale-0 transition-all flex-shrink-0" />
            <img src="/1 4.png" alt="Logo" className="h-16 md:h-20 lg:h-32 xl:h-40 w-auto object-contain grayscale hover:grayscale-0 transition-all flex-shrink-0" />
          </div>
        </div>
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      {/* Video Section */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="relative w-full aspect-video bg-black rounded-3xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform">
                <svg className="w-10 h-10 md:w-12 md:h-12 text-red-600 ml-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="hidden lg:block w-full bg-white relative">
        <div className="relative w-full">
          {/* Large Image - Full Width Cover - Shifted Left */}
          <img 
            src="/professional-portrait-of-a-gulf-woman-st_VMTN33Z4RIao7LQi0EaSVA_9T8J_OzSQ7GRNT_78pt7yg_4k 1.png" 
            alt="Our Values" 
            className="w-full h-auto object-cover"
            style={{ transform: 'translateX(-1%)' }}
          />
          
          {/* Content Overlay - Top Left - Fixed Size Box */}
          <div className="absolute top-24 left-8 md:top-32 md:left-12 lg:top-48 lg:left-[180px]">
            <div 
              className="border border-white bg-black/5 backdrop-blur-md flex flex-col justify-center"
              style={{
                width: '950px',
                height: '350px',
                borderRadius: '16px'
              }}
            >
              <div className="px-8">
                <div className="flex items-center gap-4 mb-4">
                  <h2 
                    className="text-white"
                    style={{
                      fontFamily: 'Lexend',
                      fontWeight: 300,
                      fontSize: '96px',
                      lineHeight: '100%',
                      letterSpacing: '0%'
                    }}
                  >
                    Our Values
                  </h2>
                  <img 
                    src="/Mask group.png" 
                    alt="Quote" 
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <div className="flex gap-3 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  ))}
                </div>
                <div className="w-1/2 h-px bg-white mb-4"></div>
                <p className="text-xl text-white font-medium">What We Stand For</p>
              </div>
            </div>
          </div>
        </div>
      </section>
     
    </div>
  );
}

export default AboutUs;