import AnimatedWords from '../components/AnimatedWords/AnimatedWords';

const CertificationsSection = () => {
  const certifications = [
    {
      name: "FATIMA YASSER",
      achievement: "Excellence in Graphic Design",
      description: "vision that fits my ambitions perfectly. I have new ideas and great that I know I will achieve them. It is a wonderful thing, when you work in a field the environment that always strives for success. It is not a slogan, but a fact. One name for success.",
      image: "/Excellence-in-Graphic-Design 6.png",
      displayName: "Fatima"
    },
    {
      name: "Yasser Gaber",
      achievement: "Excellence in Graphic Design",
      description: "vision that fits my ambitions perfectly. I have new ideas and great that I know I will achieve them. It is a wonderful thing, when you work in a field the environment that always strives for success. It is not a slogan, but a fact. One name for success.",
      image: "/Excellence-in-Graphic-Design 1.png",
      displayName: "yasser"
    },
    {
      name: "Mostafa Khaled",
      achievement: "Excellence in Graphic Design",
      description: "vision that fits my ambitions perfectly. I have new ideas and great that I know I will achieve them. It is a wonderful thing, when you work in a field the environment that always strives for success. It is not a slogan, but a fact. One name for success.",
      image: "/Excellence-in-Graphic-Design 5.png",
      displayName: "Mostafa"
    },
    {
      name: "Salma Hegazi",
      achievement: "Excellence in Graphic Design",
      description: "vision that fits my ambitions perfectly. I have new ideas and great that I know I will achieve them. It is a wonderful thing, when you work in a field the environment that always strives for success. It is not a slogan, but a fact. One name for success.",
      image: "/Excellence-in-Graphic-Design 3.png",
      displayName: "Salma"
    },
    {
      name: "Karim Sabry",
      achievement: "Excellence in Graphic Design",
      description: "vision that fits my ambitions perfectly. I have new ideas and great that I know I will achieve them. It is a wonderful thing, when you work in a field the environment that always strives for success. It is not a slogan, but a fact. One name for success.",
      image: "/Excellence-in-Graphic-Design 2 (1)png",
      displayName: "Karım"
    },
    {
      name: "FATIMA YASSER",
      achievement: "Excellence in Graphic Design",
      description: "vision that fits my ambitions perfectly. I have new ideas and great that I know I will achieve them. It is a wonderful thing, when you work in a field the environment that always strives for success. It is not a slogan, but a fact. One name for success.",
      image: "/Excellence-in-Graphic-Design 2 (1).png",
      displayName: "marim"
    }
  ];

  return (
    <div className="w-full relative">
      {/* Title - Outside the background */}
      <div className="text-center mb-8 px-4 sm:px-6 lg:px-8 relative z-30">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          <div className="text-black">Our</div>
          <div className="text-yellow-500">Certifications</div>
          <div className="text-black text-lg sm:text-xl lg:text-2xl font-medium mt-2">reflect confidence</div>
        </h1>
      </div>

      {/* Medal Icon - Outside background, overlapping */}
      <div className="flex justify-center relative z-40 mb-[-60px]">
        <img 
          src="/10603705_42828 2.png" 
          alt="Medal Icon" 
          className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 object-contain"
        />
      </div>

      {/* Background section with content */}
      <section className="w-full min-h-screen relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-visible mb-16 sm:mb-20 lg:mb-24" style={{background: 'linear-gradient(135deg, rgba(230,230,230,0.3), rgba(255,255,255,0.3), rgba(219,219,219,0.3))', borderRadius: '120px'}}>
        
        {/* Background Image - Ellipse 67 on top */}
        <div className="absolute -top-80 left-15 w-full h-full z-10 flex justify-center items-center">
          <img
            src="/Ellipse 64.png"
            alt="Background"
            className="w-4/5 h-4/5 object-contain rounded-[50px]"
          />
        </div>
        
        {/* Background Image - Ellipse 64 below */}
       
        
        <div className="relative z-20 max-w-7xl mx-auto">

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-3 lg:p-4 shadow-lg overflow-visible flex flex-col"
            >
              {(index === 1 || index === 4) ? (
                <>
                  {/* Image Section - Top */}
                  <div className="relative mb-6 rounded-lg p-2 flex items-center justify-center flex-shrink-0">
                    <div className="relative rounded-lg flex items-center justify-center w-full aspect-[391/441]">
                      <img
                        src={cert.image}
                        alt={cert.name}
                        className="max-w-full max-h-full scale-110 object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.style.backgroundColor = '#e5e7eb';
                        }}
                      />
                    </div>
                  </div>

                  {/* Content - Bottom */}
                  <div className="mt-auto">
                    {/* Title */}
                    <div className="mb-4">
                      <div className="relative inline-flex items-center mb-2">
                        <h3 className="text-xs sm:text-lg lg:text-3xl font-bold text-gray uppercase tracking-wider">
                          CERTIFICATIONS
                        </h3>

                        <img
                          src="/10603705_42828 2.png"
                          alt="Decoration"
                          className="
                            absolute
                            right-[-3.5rem] sm:right-[-4.5rem] lg:right-[-5.5rem]
                            top-1/2 -translate-y-1/2
                            w-20 h-20 sm:w-24 sm:h-24 lg:w-22 lg:h-22
                            object-contain
                            pointer-events-none
                          "
                        />
                      </div>

                      <h4 className="text-lg sm:text-xl lg:text-2xl font-normal text-black mb-1">
                        {cert.achievement}
                      </h4>
                      <p className="text-sm sm:text-base text-gray-700 font-normal">
                        Excellence in Graphic Design
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-black mb-4 leading-relaxed">
                      {cert.description}
                    </p>

                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Title */}
                  <div className="mb-4">
                    <div className="relative inline-flex items-center mb-2">
                      <h3 className="text-xs sm:text-lg lg:text-2xl font-bold text-gray uppercase tracking-wider">
                        CERTIFICATIONS
                      </h3>

                      <img
                        src="/10603705_42828 2.png"
                        alt="Decoration"
                        className="
                          absolute
                          right-[-3.5rem] sm:right-[-4.5rem] lg:right-[-5.5rem]
                          top-[100%] -translate-y-1/2
                          w-20 h-20 sm:w-24 sm:h-24 lg:w-22 lg:h-22
                          object-contain
                          pointer-events-none
                        "
                      />
                    </div>

                    <h4 className="text-lg sm:text-xl lg:text-2xl font-normal text-black mb-1">
                      {cert.achievement}
                    </h4>
                    <p className="text-sm sm:text-base text-gray-700 font-normal">
                      Excellence in Graphic Design
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-black mb-4 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>

                  {/* Image Section - Bottom */}
                  <div className="relative mt-auto rounded-lg p-2 flex items-center justify-center">
                    <div className="relative rounded-lg flex items-center justify-center w-full aspect-[391/441]">
                      <img
                        src={cert.image}
                        alt={cert.name}
                        className="max-w-full max-h-full scale-110 object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.style.backgroundColor = '#e5e7eb';
                        }}
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center">
        <div className="flex justify-center">
  <button
    className="btn-wave px-8 sm:px-10 lg:px-12 py-3 sm:py-4 rounded-full shadow-xl font-semibold text-sm sm:text-base lg:text-lg flex items-center border-2 border-gray-300 bg-gradient-to-r from-gray-500 via-white to-gray-300 text-black transition-transform duration-200"
  >
    <span className="letter">V</span>
    <span className="letter">i</span>
    <span className="letter">e</span>
    <span className="letter">w</span>
    <span className="letter">&nbsp;</span>
    <span className="letter">A</span>
    <span className="letter">l</span>
    <span className="letter">l</span>
    <span className="letter">&nbsp;</span>
    <span className="letter">C</span>
    <span className="letter">e</span>
    <span className="letter">r</span>
    <span className="letter">t</span>
    <span className="letter">i</span>
    <span className="letter">f</span>
    <span className="letter">i</span>
    <span className="letter">c</span>
    <span className="letter">a</span>
    <span className="letter">t</span>
    <span className="letter">i</span>
    <span className="letter">o</span>
    <span className="letter">n</span>
    <span className="letter">s</span>
    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </button>
</div>

        </div>
        </div>
      </section>
    </div>
  );
};

export default CertificationsSection;