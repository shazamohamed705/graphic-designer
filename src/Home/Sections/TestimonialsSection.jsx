import React from 'react';
import AnimatedWords from '../../components/AnimatedWords/AnimatedWords';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Layla Mansour",
      title: "Creative Director",
      quote: "The attention to detail is simply world-class. They took my vision and turned it into something even better than I imagined. Truly a talented team.",
      image: "/32 1.png" // يمكن استبدالها بالصور الحقيقية
    },
    {
      name: "Aya Mahmoud",
      title: "Freelance Graphic Designer",
      quote: "This course was a turning point in my career. I went from struggling with tools to confidently handling complex branding projects for international clients.",
      image: "/32 2.png"
    },
    {
      name: "Mostafa Khaled",
      title: "Beginner Student",
      quote: "I started with zero knowledge in design, but after just a few weeks, I can now create my own logos and posters. The lessons are very easy to follow.",
      image: "/32 3.png"
    },
    {
      name: "Tarek Idris",
      title: "College Student",
      quote: "I took this course to learn a new skill during my summer break. It was the best decision! The way they explain Photoshop makes it look so simple.",
      image: "/84 1.png"
    },
    {
      name: "Lina Mansour",
      title: "Marketing Specialist",
      quote: "Even as a non-designer, this course gave me the skills to create stunning visuals for my social media campaigns. Best investment I've made this year.",
      image: "/84 1.png"
    },
    {
      name: "Amr Abdel-Rahman",
      title: "Freelance Beginner",
      quote: "This course gave me the confidence to start taking small design jobs. It covered everything I needed to get started in the real world.",
      image: "/84 1.png"
    }
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <AnimatedWords
            text="Testimonials"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-4 font-bold"
            style={{
              backgroundImage: 'linear-gradient(to right, #BD8800 0%, #BD8800 35%, #FFD100 45%, #FFD100 55%, #9C6B00 65%, #9C6B00 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
              textShadow: '0 2px 4px rgba(128, 128, 128, 0.3)'
            }}
          />
          <AnimatedWords
            text="Student's Feedback"
            as="h3"
            className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-4"
            style={{ color: '#000000' }}
          />
          <p className="text-gray-700 text-base sm:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed">
            Elite voices: Success stories that began with passion and transformed into tangible professional realities thanks to methodology. Testimonials: From the classroom to leading their own projects
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => {
            // First column (0, 3) and last column (2, 5) should be black in 3-column layout
            const isBlackCard = index % 3 === 0 || index % 3 === 2;
            const bgGradient = isBlackCard 
              ? 'linear-gradient(45deg, #1a1a1a 0%, #2d2d2d 20%, #2d2d2d 60%, #1a1a1a 100%)'
              : 'linear-gradient(45deg, #F0F0F0 0%, #FFFFFF 20%, #FFFFFF 60%, #F0F0F0 100%)';
            const textColor = isBlackCard ? 'text-white' : 'text-black';
            const quoteColor = isBlackCard ? 'text-gray-300' : 'text-gray-700';

            return (
            <div key={index} className="w-full max-w-[415px] mx-auto">
              {/* Card */}
              <div 
                className="rounded-[30px] sm:rounded-[40px] lg:rounded-[50px] p-4 sm:p-5 lg:p-6 hover:shadow-xl transition-shadow duration-200 flex flex-col overflow-hidden relative group"
                style={{ 
                  height: '202px',
                  background: bgGradient
                }}
              >
                {/* Static Border */}
                <div className="absolute inset-0 rounded-[30px] sm:rounded-[40px] lg:rounded-[50px] pointer-events-none">
                  <div className="absolute inset-0 rounded-[30px] sm:rounded-[40px] lg:rounded-[50px] p-[2px] bg-gradient-to-b from-[#FF0000] via-[#DDFF11] via-[#FF00FF] to-[#00F2FF]">
                    <div className="w-full h-full rounded-[30px] sm:rounded-[40px] lg:rounded-[50px]" style={{ background: bgGradient }}></div>
                  </div>
                </div>

                {/* Animated Light on Hover */}
                <div className="absolute inset-0 rounded-[30px] sm:rounded-[40px] lg:rounded-[50px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute inset-0 rounded-[30px] sm:rounded-[40px] lg:rounded-[50px] p-[2px] bg-gradient-to-b from-transparent via-white to-transparent border-light-animate">
                    <div className="w-full h-full rounded-[30px] sm:rounded-[40px] lg:rounded-[50px]" style={{ background: bgGradient }}></div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="relative z-10 flex flex-col h-full">
                {/* Profile Picture and Info */}
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-gray-300 overflow-hidden flex-shrink-0">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className={`text-xs sm:text-sm lg:text-base font-bold ${textColor}`}>
                      {testimonial.name}
                    </h4>
                    <p className={`text-xs sm:text-sm ${textColor}`}>
                      {testimonial.title}
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <p className={`text-xs sm:text-sm ${quoteColor} mb-2 sm:mb-3 leading-relaxed flex-1 overflow-hidden`}>
                  "{testimonial.quote}"
                </p>
                </div>
              </div>

              {/* Rating - Outside the card, below, on the left */}
              <div className="flex gap-0.5 justify-start mt-2 sm:mt-3 ml-4 sm:ml-5 lg:ml-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

