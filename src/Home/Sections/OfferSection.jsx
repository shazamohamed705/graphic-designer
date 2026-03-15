const OfferSection = () => {
  const cards = [
    {
      image: '/Mask groupo.png',
      title: 'Practical, Real-World Experience',
      description: 'We provide you with the essence of years of real-work experience: executing realistic projects, understanding client mindset and requirements, and creating work that commands high prices.'
    },
    {
      image: '/Mask group (1).png',
      title: 'Learning with a Professional Mindset',
      description: "You won't just learn software and tools; you'll learn how a professional designer thinks: how to analyze, how to innovate, and how to deliver design that sells and is valued."
    },
    {
      image: '/Mask group (2).png',
      title: 'Mastering the Job Market (Especially the Gulf)',
      description: 'We reveal the secrets of dealing with premium clients, how to price your work ideally, and how to manage your career professionally without missing deals.'
    }
  ];

  return (
    <section className="w-full bg-whit py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="relative rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 flex flex-col h-full"
            >
              {/* Card Image with Border */}
              <div 
                className="relative p-1 rounded-t-3xl"
                style={{
                  background: 'linear-gradient(135deg, #FF0000, #00BBFF, #00FF51, #EA00FF)'
                }}
              >
                <div className="relative h-64 overflow-hidden rounded-t-3xl">
                  <img 
                    src={card.image} 
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Card Content */}
              <div className="bg-black p-6 space-y-4 rounded-b-3xl flex-1 flex flex-col">
                {/* Title */}
                <h3 className="text-xl font-bold text-white text-center">
                  {card.title}
                </h3>

                {/* Description with bullet point */}
                <div className="flex items-start gap-3 flex-1">
                  <span className="text-green-500 text-xl mt-1 flex-shrink-0">✓</span>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quote Section */}
        <div className="mt-12 text-center max-w-4xl mx-auto">
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold leading-relaxed"
            style={{
              background: 'linear-gradient(to right, #000000, #666666)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent'
            }}
          >
            "You aren't just buying a course... you are investing in a professional asset that grows with you for a lifetime. One decision, continuous growth, and the power to always keep you at the forefront of the elite."
          </p>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
