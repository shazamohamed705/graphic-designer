import React from 'react';
import AnimatedWords from '../../components/AnimatedWords/AnimatedWords';

const OurCourseSection = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <AnimatedWords 
          text="Course videos"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 font-bold"
          style={{
              backgroundImage: 'linear-gradient(to right, #BD8800 0%, #BD8800 35%, #FFD100 45%, #FFD100 55%, #9C6B00 65%, #9C6B00 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        />
        <AnimatedWords 
          text='Carefully designed training pathways to move you from the "implementer" stage to the status of "creative partner"'
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black"
          as="h3"
        />
      </div>
    </section>
  );
};

export default OurCourseSection;
