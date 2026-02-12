import React from 'react';
import AnimatedWords from '../../components/AnimatedWords/AnimatedWords';

const ServicesSection = () => {
  return (
    <section
      className="
        relative w-full
        mt-20 sm:mt-24 lg:mt-32
        py-24 sm:py-28 lg:py-32
        px-4 sm:px-6 lg:px-8
        rounded-br-[120px] sm:rounded-br-[180px] lg:rounded-br-[240px]
        rounded-tl-[120px] sm:rounded-tl-[180px] lg:rounded-tl-[240px]
      "
      style={{ backgroundColor: 'rgb(0,0,0)' }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-10">
        <img
          src="/11 82013.png"
          alt="Background"
          className="
            w-full h-full object-cover opacity-80
            rounded-br-[120px] sm:rounded-br-[180px] lg:rounded-br-[240px]
            rounded-tl-[120px] sm:rounded-tl-[180px] lg:rounded-tl-[240px]
          "
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">

          {/* LEFT - Image */}
         {/* LEFT - Image */}
<div className="relative">
  <img
    src="/profile 4.png"
    alt="profile"
    className="
      absolute
      -top-[200px]
      left-1/3
      -translate-x-1/2
      lg:left-0
      lg:translate-x-0

      w-[260px] sm:w-[340px] lg:w-[480px]
      h-[260px] sm:h-[340px] lg:h-[480px]
      object-cover
    "
  />
</div>

          {/* RIGHT - Text */}
          {/* Section Header */}
          <div className="relative z-20 -mt-16 sm:-mt-20 lg:-mt-24 mb-12 max-w-xl mx-auto lg:mx-0">
  {/* Header */}
  <div className="text-xl sm:text-2xl lg:text-3xl font-semibold whitespace-nowrap text-left">
    {/* Name */}
    <AnimatedWords
      text="Abdullah ElNasr"
      as="span"
      className="inline"
      style={{
        backgroundImage: 'linear-gradient(to right, #E6A326, #E9DB69, #E29C14)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent'
      }}
    />

    {/* Title */}
    <span className="text-white font-medium">
      : Creative Director & Founder
    </span>
  </div>

  {/* Gold Line under Name */}
  <div className="mt-1 mb-6 flex justify-start">
    <span
      className="
        block
        h-[2px]
        w-32
        bg-gradient-to-r
        from-[#E6A326]
        via-[#E9DB69]
        to-[#E29C14]
      "
    />
  </div>

  {/* Paragraph */}
  <p className="text-gray-200 text-sm sm:text-base leading-relaxed max-w-xl text-left ml-2">
    With 6+ years of experience in the Egyptian and Saudi markets, I help
    aspiring designers master industry-standard tools and build a
    high-income freelance career through
    <span className="text-white font-semibold"> Design to Income</span>.
  </p>

  {/* Full Image under paragraph */}
{/* Full Image under paragraph */}
<div className="mt-3 flex justify-start ml-10">
  <img
    src="/logo alnaser text 1.png"
    alt="Logo Alnaser"
    className="w-[400px] sm:w-[300px] h-auto"
  /> 
</div>
</div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;