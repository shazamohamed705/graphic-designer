import AnimatedWords from '../components/AnimatedWords/AnimatedWords';

function Design() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-2 sm:space-y-3">
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black">
            <AnimatedWords
              text="Elnasr Courses"
              className="inline"
              style={{ 
                backgroundImage: 'linear-gradient(to right, #D7AD01, #FADD64)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}
            />
          </div>
          <AnimatedWords
            text="Leading E-Learning Platform."
            as="p"
            className="text-[14px] sm:text-[16px] md:text-[20px] lg:text-[48px] font-semibold text-black leading-relaxed"
          />
        </div>
      </div>
    </section>
  );
}

export default Design;