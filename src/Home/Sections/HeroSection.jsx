const HeroSection = () => {
  return (
    <section className="w-full bg-white flex items-start justify-center pb-0 md:pb-8 relative">
      <div className="relative w-full max-w-[98%]">
        <img 
          src="/cover-websitebar2 1.png" 
          alt="Hero"
          className="w-[85%] mx-auto h-auto object-contain"
        />
        
        {/* Text and Buttons overlay */}
        <div className="absolute top-32 sm:top-40 md:top-48 lg:top-64 left-4 sm:left-8 md:left-12 lg:left-20 z-10 max-w-md">
         <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4">
  <span
  className="inline-block leading-tight"
  style={{
    color: '#C99600', // لون ذهبي ثابت
    WebkitMaskImage: 'url(/nzrzOfxWPwo 1.png)',
    maskImage: 'url(/nzrzOfxWPwo 1.png)',
    WebkitMaskRepeat: 'no-repeat',
    maskRepeat: 'no-repeat',
    WebkitMaskSize: 'cover',
    maskSize: 'cover',
  }}
>
  Don't Just
</span>

  <br />
  <span className="text-black">Learn Design</span>
</h1>

          <p className="text-xl sm:text-2xl md:text-3xl font-thin md:font-extralight mb-6 md:mb-8">
            <span className="bg-gradient-to-r from-[#00C3FF] via-[#F600FF] via-[#F600FF] to-[#FF00CC] bg-clip-text text-transparent">
              Master the Business of Design
            </span>
          </p>
          
          {/* Floating Image */}
          <div className="absolute top-[140px] sm:top-[160px] md:top-[160px] left-0 z-0 pointer-events-none">
            <img 
              src="/background_removed_image_cOJ5pLLfT5SGchOf9rJdfw 1.png" 
              alt="Design Icon"
              className="h-32 md:h-40 lg:h-30 object-contain"
            />
          </div>
          
          {/* Buttons */}
          <div className="flex flex-col gap-5 mt-32 relative z-10">
            <button className="btn-wave bg-black text-white rounded-2xl transition-colors font-semibold whitespace-nowrap" style={{ width: '237px', height: '52px' }}>
              <span className="letter">S</span>
              <span className="letter">i</span>
              <span className="letter">g</span>
              <span className="letter">n</span>
              <span className="letter">&nbsp;</span>
              <span className="letter">i</span>
              <span className="letter">n</span>
            </button>
            <button className="btn-wave bg-black text-white rounded-2xl transition-colors font-semibold whitespace-nowrap" style={{ width: '237px', height: '52px' }}>
              <span className="letter">C</span>
              <span className="letter">r</span>
              <span className="letter">e</span>
              <span className="letter">a</span>
              <span className="letter">t</span>
              <span className="letter">e</span>
              <span className="letter">&nbsp;</span>
              <span className="letter">a</span>
              <span className="letter">c</span>
              <span className="letter">c</span>
              <span className="letter">o</span>
              <span className="letter">u</span>
              <span className="letter">n</span>
              <span className="letter">t</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

