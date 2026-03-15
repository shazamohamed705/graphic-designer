import AnimatedWords from '../components/AnimatedWords/AnimatedWords';
import FadeInText from '../components/FadeInText/FadeInText';

const InstructorProfile = () => {
  const achievements = [
    {
      icon: "/group.png",
      text: "Visual Identity Expert: Over 8 years of experience at the heart of leading creative agencies in Saudi Arabia and Egypt."
    },
    {
      icon: "/group (7).png",
      text: "Creator of the \"Design your Income\" methodology: Empowered hundreds of designers to achieve exceptional financial and professional breakthroughs."
    },
    {
      icon: "/group (8).png",
      text: "Mentor of professionals: Supervised and guided 500+ designers who have now become the first choice for major companies."
    },
    {
      icon: "/group (9).png",
      text: "Market Psychology Expert: Combines artistic creativity with business strategy to ensure designs that never get rejected."
    }
  ];

  return (
    <section className="w-full pt-48 pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-8 relative mb-16 sm:mb-20 lg:mb-24">
      <div className="max-w-4xl mx-auto relative">
        {/* Border Gradient Wrapper */}
        <div className="rounded-[40px] p-[2px] bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 shadow-2xl">
          {/* Main Card */}
          <div className="bg-white rounded-[34px] overflow-visible relative">
          {/* Person Image - Positioned Above Card */}
          <div className="absolute left-1/2 transform -translate-x-1/2 z-30" style={{ top: '-220px' }}>
            <img 
              src="/17 2.png" 
              alt="Abdullah Al-Nasr"
              className="h-[480px] w-auto object-contain drop-shadow-2xl"
            />
          </div>

          {/* Golden Background Section */}
          <div className="relative w-full h-[260px] rounded-t-[32px] rounded-b-[32px] overflow-hidden">
            <img 
              src="/nzrzOfxWPwo 4.png" 
              alt="Background"
              className="w-full h-full object-cover object-center rounded-b-[32px]"
            />
          </div>

          {/* Achievements List */}
          <div className="p-8 sm:p-10 lg:p-12 space-y-8">
            {achievements.map((achievement, index) => (
              <div key={index}>
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 mt-2">
                    <img 
                      src={achievement.icon} 
                      alt="icon"
                      className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <FadeInText
                      text={achievement.text}
                      as="p"
                      className="text-xl sm:text-2xl lg:text-3xl font-semibold leading-relaxed"
                      delay={index * 0.3}
                      style={{
                        background: 'linear-gradient(to right, #000000, #808080)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        fontFamily: 'Lexend, sans-serif'
                      }}
                    />
                  </div>
                </div>
                
                {/* Colored Line Separator */}
                {index < achievements.length - 1 && (
                  <div className="flex justify-center">
                    <div className="w-3/4 h-0.5 bg-gradient-to-r from-red-400 via-green-400 via-cyan-400 to-purple-400 rounded-full"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
          </div>
        </div>

        {/* Quote Box */}
        <div className="mt-20">
          <AnimatedWords
            text="I am not here to just teach you a few (Tools), but to give you the 'Code' that makes your designs worth hundreds of dollars. In this course, I will share with you all the trade secrets I've learned in the field, so you can save yourself years of trial and error."
            as="p"
            className="text-base sm:text-lg font-bold text-gray-800 text-center leading-relaxed italic"
            byLine={true}
          />
        </div>
      </div>
    </section>
  );
};

export default InstructorProfile;
