import { BsStars } from "react-icons/bs";
import AnimatedWords from "../components/AnimatedWords/AnimatedWords";
function PhSection() {
  
  return (
    <section className="w-full bg-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative w-full">
          <img 
            src="/COVER-PADGE-COURCE 3.png" 
            alt="Course Photo"
            className="w-full h-auto object-contain rounded-lg"
          />
        </div>
        
        {/* النص الجديد */}
        <div className="text-center mt-8 sm:mt-12 lg:mt-16 max-w-5xl mx-auto overflow-visible">
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-6 leading-relaxed flex items-center justify-center gap-3">
            <AnimatedWords
              text="Turn your passion for design into a professional skill"
              className="inline"
            />
            <BsStars className="text-yellow-400" />
          </h2>
          
          <div className="text-xl sm:text-3xl lg:text-2xl font-bold text-black mb-6 leading-relaxed">
            <AnimatedWords
              text="Learn visual identity design and brand building, and create stunning designs for social media using the world's most powerful design tools:"
              as="p"
              byLine={true}
            />
          </div>
          
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 pb-6 overflow-visible">
            <AnimatedWords
              text="Photoshop | Illustrator | InDesign"
              className="inline"
              byLine={true}
              style={{
                backgroundImage: 'linear-gradient(to right, #9C6B00, #FFD100, #BD8800)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}
            />
          </h3>
          
          <div className="text-xl sm:text-2xl lg:text-3xl font-semibold text-black leading-relaxed">
            <AnimatedWords
              text="Start your journey toward excellence and creativity now with Al-Nasr Courses"
              as="p"
              byLine={true}
            />
          </div>
        </div>
        
       <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black text-center mt-40 ">
            <AnimatedWords
              text="All Courses"
              className="inline"
              style={{ 
                backgroundImage: 'linear-gradient(to right, #9C6B00, #FFD100, #BD8800)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}
            />
          </div>
      </div>
    </section>
  );
}

export default PhSection;