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
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black"
          />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full max-w-[415px] mx-auto">
              {/* Card */}
              <div 
                className="rounded-[30px] sm:rounded-[40px] lg:rounded-[50px] p-4 sm:p-5 lg:p-6 hover:shadow-xl transition-shadow duration-200 flex flex-col overflow-hidden"
                style={{ 
                  height: '202px',
                  background: 'linear-gradient(45deg, #F0F0F0 0%, #FFFFFF 20%, #FFFFFF 60%, #F0F0F0 100%)'
                }}
              >
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
                    <h4 className="text-xs sm:text-sm lg:text-base font-bold text-black">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-black">
                      {testimonial.title}
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-gray-700 mb-2 sm:mb-3 leading-relaxed flex-1 overflow-hidden">
                  "{testimonial.quote}"
                </p>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

