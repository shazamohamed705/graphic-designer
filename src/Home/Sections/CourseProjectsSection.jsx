import React from 'react';

const CourseProjectsSection = () => {
  // Row 1 images
  const row1Images = [
    '/tyvm-sound 3.png',
    '/tyvm-sound 8.png',
    '/tyvm-sound 2.png',
    '/2 4.png',
    '/2 5.png',
  ];

  // Row 2 images
  const row2Images = [
    '/tyvm-sound 7.png',
    '/tyvm-sound 6.png',
    '/tyvm-sound 13.png',
    '/tyvm-sound 11.png',
    '/tyvm-sound 13.png',
  ];

  // Row 3 images
  const row3Images = [
    '/tyvm-sound 3.png',
    '/tyvm-sound 11.png',
    '/tyvm-sound 2.png',
    '/tyvm-sound 6.png',
    '/tyvm-sound 8.png',
  ];

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4" style={{
              backgroundImage: 'linear-gradient(to right, #BD8800 0%, #BD8800 35%, #FFD100 45%, #FFD100 55%, #9C6B00 65%, #9C6B00 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent'
          }}>
            Course projects
          </h2>
          <p className="text-xl sm:text-2xl text-black font-semibold">
            This is the level you will reach at the end of the course."
          </p>
        </div>
      </div>

      {/* Project Rows - Full Width */}
      <div className="space-y-8 perspective-container -mx-4">
        {/* Row 1 - Scroll Right */}
        <div className="flex gap-0.5 animate-marquee row-3d will-change-transform">
          {[...row1Images, ...row1Images, ...row1Images, ...row1Images].map((img, index) => (
            <div key={index} className="flex-shrink-0 w-[550px] sm:w-[620px] md:w-[680px] lg:w-[740px] xl:w-[800px] h-56 sm:h-64 md:h-72 lg:h-80 xl:h-[350px] rounded-2xl overflow-hidden bg-white shadow-2xl relative card-3d">
              <img 
                src={img} 
                alt={`Project ${index + 1}`} 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Row 2 - Scroll Left */}
        <div className="flex gap-0.5 animate-marquee-reverse row-3d-reverse will-change-transform">
          {[...row2Images, ...row2Images, ...row2Images, ...row2Images].map((img, index) => (
            <div key={index} className="flex-shrink-0 w-[550px] sm:w-[620px] md:w-[680px] lg:w-[740px] xl:w-[800px] h-56 sm:h-64 md:h-72 lg:h-80 xl:h-[350px] rounded-2xl overflow-hidden bg-white shadow-2xl relative card-3d">
              <img 
                src={img} 
                alt={`Project ${index + 1}`} 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Row 3 - Scroll Right */}
        <div className="flex gap-0.5 animate-marquee row-3d will-change-transform">
          {[...row3Images, ...row3Images, ...row3Images, ...row3Images].map((img, index) => (
            <div key={index} className="flex-shrink-0 w-[550px] sm:w-[620px] md:w-[680px] lg:w-[740px] xl:w-[800px] h-56 sm:h-64 md:h-72 lg:h-80 xl:h-[350px] rounded-2xl overflow-hidden bg-white shadow-2xl relative card-3d">
              <img 
                src={img} 
                alt={`Project ${index + 1}`} 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseProjectsSection;
