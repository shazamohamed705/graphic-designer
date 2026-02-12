const HeroSection = () => {
  return (
    <section className="w-full bg-white flex items-start justify-center pb-0 md:pb-8 relative">
      <div className="relative w-full max-w-[98%]">
        <img 
          src="/Screenshot 2026-01-20 162351.png" 
          alt="Hero"
          className="w-full h-auto object-contain"
        />
        
        {/* Buttons overlay */}
        <div className="absolute top-48 sm:top-52 md:top-80 lg:top-[40rem] xl:top-[48rem] left-4 sm:left-6 md:left-8 lg:left-12 xl:left-16 flex flex-row gap-3 sm:gap-4 z-10">
          <button className="btn-wave px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-2 sm:py-2.5 md:py-3 lg:py-3.5 xl:py-4 bg-black text-white rounded-lg transition-colors text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold whitespace-nowrap min-w-[140px] sm:min-w-[160px] md:min-w-[180px] lg:min-w-[200px] xl:min-w-[220px]">
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
          <button className="btn-wave px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-2 sm:py-2.5 md:py-3 lg:py-3.5 xl:py-4 bg-black text-white rounded-lg transition-colors text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold whitespace-nowrap min-w-[140px] sm:min-w-[160px] md:min-w-[180px] lg:min-w-[200px] xl:min-w-[220px]">
            <span className="letter">S</span>
            <span className="letter">i</span>
            <span className="letter">g</span>
            <span className="letter">n</span>
            <span className="letter">&nbsp;</span>
            <span className="letter">i</span>
            <span className="letter">n</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

