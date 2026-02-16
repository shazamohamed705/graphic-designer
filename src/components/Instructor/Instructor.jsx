function Instructor() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Image */}
       <section className="w-full bg-white flex items-start justify-center pt-16 md:pt-20 relative">
        <div className="relative w-full max-w-full">
          <img
            className="w-full h-auto object-cover bg-black"
            src="16 1.png" 
            alt="Courses Cover"
          />
        
         
        </div>
      </section>

      {/* Scrolling Text Section */}
      <section className="w-full bg-white py-4 overflow-hidden border-y-2 border-black">
        <div className="flex animate-scroll-text whitespace-nowrap">
          <span className="text-3xl md:text-4xl lg:text-5xl font-bold px-8">
            Illustrator + Photoshop + InDesign + Illustrator + Photoshop + InDesign + Illustrator + Photoshop + InDesign
          </span>
          <span className="text-3xl md:text-4xl lg:text-5xl font-bold px-8">
            Illustrator + Photoshop + InDesign + Illustrator + Photoshop + InDesign + Illustrator + Photoshop + InDesign
          </span>
        </div>
        <style jsx>{`
          @keyframes scroll-text {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll-text {
            animation: scroll-text 30s linear infinite;
          }
        `}</style>
      </section>

      {/* MY SERVICES Section */}
      
     <section className="w-full bg-white flex items-start justify-center pt-16 md:pt-20 relative">
        <div className="relative w-full max-w-full">
          <img
            className="w-full h-auto object-cover bg-black"
            src="Screenshot 2026-02-15 152422.png" 
            alt="Courses Cover"
          />
        
         
        </div>
      </section>
      
     
      
     <section className="w-full bg-white flex items-start justify-center pt-16 md:pt-20 relative">
        <div className="relative w-full max-w-full">
          <img
            className="w-full h-auto object-"
            src="Screenshot 2026-02-15 153331.png" 
            alt="Courses Cover"
          />
        
         
        </div>
      </section>
 {/* About Me Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          {/* About Me Title */}
          <h2 className="text-gray-400 text-left font-bold mb-4" style={{ fontFamily: 'Inter', fontSize: '40px', lineHeight: '100%', letterSpacing: '0%' }}>
            About Me
          </h2>
          
          {/* Main Heading */}
          <h1 className="text-black font-bold mb-2 inline-block" style={{ fontFamily: 'Inter', fontSize: '64px', lineHeight: '100%', letterSpacing: '0%' }}>
            Who is Abdullah Elnasr
          </h1>
          
          {/* Decorative Line */}
          <div className="h-1 bg-black mb-8" style={{ width: '100%', maxWidth: '600px' }}></div>
          
          {/* Description */}
          <p className="max-w-5xl" style={{ fontFamily: 'Inter', fontWeight: '700', fontSize: '16px', lineHeight: '100%', letterSpacing: '0%', color: '#9A9A9A' }}>
            Abdullah Al-Nasr | Creative Director & Branding Strategist. With over 6 years of experience in the Egyptian and Saudi markets, I help aspiring designers master the industry secrets and build a high-income career through strategic visual storytelling."
          </p>
        </div>
      </section>
 <section className="w-full bg-white flex items-start justify-center relative">
        <div className="relative w-full max-w-6xl">
          <img
            className="w-full h-auto"
            src="Screenshot 2026-02-15 164840.png" 
            alt="Courses Cover"
          />
        </div>
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

export default Instructor;
