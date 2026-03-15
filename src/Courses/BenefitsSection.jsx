import AnimatedWords from '../components/AnimatedWords/AnimatedWords';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: "/Mask group (6).png",
      title: "You will think like a strategist, not just an executive.",
      subtitle: "Mindset & Branding (The Strategic Foundation)",
      description: "You won't only learn how to design a logo, but how to analyze a brand, think outside the box, and build a complete visual identity that tells a story and creates real impact.",
      image: "/Mask g.png",
      position: "right"
    },
    {
      icon: "/Mask group (3).png",
      title: "Real-world projects that reflect reality.",
      subtitle: "Practical Experience (Portfolio)",
      description: "Stop training on hypothetical projects. Together, you will execute real projects with clear, structured steps to graduate with a professional Portfolio designed to capture the attention of major companies.",
      image: "/Maskj.png",
      position: "left"
    },
    {
      icon: "/Mask group (5).png",
      title: "You'll dominate the Gulf job market intelligently.",
      subtitle: "Mastering the Market & Money (The Business of Design)",
      description: "We reveal to you the secrets of dealing with VIP clients in the Gulf, how to convince clients of higher budgets without hesitation, and how to manage your projects with complete professionalism — without stress or chaos.",
      image: "/Maskj.png",
      position: "right"
    },
    {
      icon: "/Mask group (4).png",
      title: "Support & Follow-Up (Security & Confidence)",
      subtitle: "With us... you're never alone.",
      description: "Your journey doesn't end when the course ends. You'll receive continuous feedback on your work, strategic guidance for your career path, and practical advice that sets you apart from any other designer in the market.",
      image: "/vv.png",
      position: "left"
    }
  ];

  return (
    <section className="w-full  py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {benefits.map((benefit, index) => (
          <div 
            key={index}
            className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-16 lg:mb-24"
          >
            {/* Icon - Always on left */}
            {benefit.position === 'left' && (
              <div className="flex-shrink-0">
                <img 
                  src={benefit.icon} 
                  alt={benefit.title}
                  className="w-34 h-34 sm:w-40 sm:h-40 lg:w-50 lg:h-50 object-contain"
                />
              </div>
            )}

            {/* Content Box - Image + Text Side by Side */}
            <div className="w-full max-w-4xl bg-black rounded-3xl text-white relative group overflow-hidden" style={{ height: '350px' }}>
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-3xl pointer-events-none z-10">
                <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-b from-[#FF0000] via-[#DDFF11] via-[#FF00FF] to-[#00F2FF]">
                  <div className="w-full h-full rounded-3xl bg-black"></div>
                </div>
              </div>

              {/* Animated Light on Hover */}
              <div className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-b from-transparent via-white to-transparent border-light-animate">
                  <div className="w-full h-full rounded-3xl bg-black"></div>
                </div>
              </div>

              {/* Content - Image and Text */}
              <div className={`relative z-20 flex ${benefit.position === 'right' ? 'flex-row' : 'flex-row-reverse'} items-stretch h-full`}>
                {/* Image Side */}
                <div className={`w-[50%] flex-shrink-0 flex items-center justify-center ${benefit.position === 'right' ? 'pr-0' : 'pl-0'}`}>
                  <img 
                    src={benefit.image} 
                    alt={benefit.title}
                    className={`w-full h-full object-cover ${benefit.position === 'right' ? 'rounded-r-3xl' : 'rounded-l-3xl'}`}
                  />
                </div>

                {/* Text Side */}
                <div className="w-[80%] p-6 sm:p-8 flex flex-col justify-center">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3">
                    {benefit.title}
                  </h3>
                  
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-green-400 text-lg flex-shrink-0 mt-0.5">✓</span>
                      <p className="text-sm sm:text-base font-semibold">{benefit.subtitle}</p>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <span className="text-green-400 text-lg flex-shrink-0 mt-0.5">✓</span>
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Icon - Always on right */}
            {benefit.position === 'right' && (
              <div className="flex-shrink-0">
                <img 
                  src={benefit.icon} 
                  alt={benefit.title}
                  className="w-34 h-34 sm:w-40 sm:h-40 lg:w-50 lg:h-50 object-contain"
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Animated Text Box */}
      <div className="max-w-7xl mx-auto mt-16 lg:mt-24 px-4">
        <div className="bg-white rounded-[40px] p-8 sm:p-12 lg:p-16 shadow-lg mx-auto" style={{ border: '6px solid #D4AF37', maxWidth: '798px', height: 'auto', minHeight: '368px' }}>
          <AnimatedWords
            text="I possess the secrets of the elite that will open doors for you to major companies in the Gulf, with"
            as="p"
            className="text-xl sm:text-2xl lg:text-6xl font-sm text-center leading-relaxed mb-4"
            byLine={true}
            gradientPerLine={true}
          />
          <AnimatedWords
            text="Abdullah Al-Nasr."
            as="p"
            className="text-2xl sm:text-3xl lg:text-4xl font-black text-center"
            style={{ color: '#000000' }}
          />
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
