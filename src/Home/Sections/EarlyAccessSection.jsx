
import AnimatedWords from '../../components/AnimatedWords/AnimatedWords';

const EarlyAccessSection = () => {
  return (
    <section className="w-full bg-white pt-10 pb-6 sm:pt-4 sm:pb-8 md:pt-6 md:pb-12 lg:py-24 px-4 sm:px-6 lg:px-8  mt-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Headline */}
        <AnimatedWords 
          text="Transform Your Design Skills Into a Professional Career"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 sm:mb-6 leading-tight"
        />
        
        {/* Sub-headline */}
        <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 sm:mb-12 max-w-3xl mx-auto">
          Training, Practice, Portfolio, Certificate, And Successful Career All In One.
        </p>
        
        {/* Design To Income Button */}
        <div className="mb-8 sm:mb-12">
          <div 
            className="inline-block px-8 sm:px-10 md:px-12 py-2 sm:py-4 md:py-5 rounded-full shadow-lg text-white font-bold text-xl sm:text-2xl md:text-3xl"
            style={{
              background: 'linear-gradient(to right, rgb(186, 140, 1), rgb(223, 181, 1))',
              fontFamily: 'Climate Crisis, sans-serif',
              fontSize: 'clamp(24px, 5vw, 48px)'
            }}
          >
           Design To Income
          </div>
        </div>
        
        {/* Email Input and Button */}
        <div className="flex flex-row gap-0 justify-center items-center mb-6 sm:mb-8 mx-auto bg-gray-100 rounded-full border border-gray-300 overflow-hidden shadow-lg shadow-gray-300/60"
             style={{ maxWidth: '1300px' }}>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="flex-1 px-5 sm:px-6 py-3 sm:py-4 bg-transparent border-none rounded-full text-black focus:outline-none text-sm sm:text-base min-w-0"
          />
          <button className="btn-wave px-6 sm:px-8 py-3 sm:py-4 bg-black text-white rounded-full font-semibold text-sm sm:text-base transition-colors">
            <span className="letter">G</span>
            <span className="letter">e</span>
            <span className="letter">t</span>
            <span className="letter">&nbsp;</span>
            <span className="letter">E</span>
            <span className="letter">a</span>
            <span className="letter">r</span>
            <span className="letter">l</span>
            <span className="letter">y</span>
            <span className="letter">&nbsp;</span>
            <span className="letter">A</span>
            <span className="letter">c</span>
            <span className="letter">c</span>
            <span className="letter">e</span>
            <span className="letter">s</span>
            <span className="letter">s</span>
          </button>
        </div>
        
        {/* Social Proof */}
        <div className="flex items-center justify-center gap-3 sm:gap-4">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-300 border-2 border-white"></div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-400 border-2 border-white"></div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-500 border-2 border-white"></div>
          </div>
          <p className="text-sm sm:text-base text-gray-700">
            3 Students already Access
          </p>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccessSection;
