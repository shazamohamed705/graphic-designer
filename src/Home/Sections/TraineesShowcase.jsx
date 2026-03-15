import AnimatedWords from "../../components/AnimatedWords/AnimatedWords";

const trainees = [
  {
    id: 1,
    name: "Lina Mansour",
    title: "Marketing Specialist",
    personImage: "/a_ (1) 15.png",
    projectImage: "/Vibrant Photoshop P.png",
    testimonial: "Even as a non-designer, this course gave me the skills to create stunning visuals for my social media campaigns. Best investment I've made this year."
  },
  {
    id: 2,
    name: "Saud Al-Otaibi",
    title: "Creative Director",
    personImage: "/a_(1) 16.png",
    projectImage: "/Vibrant Photoshop.png",
    testimonial: "Abdullah Al-Nasr's course strengthened my strategy in building visual identities and raised the level of my entire team."
  },
  {
    id: 3,
    name: "Muhammad Al-Qahtani",
    title: "Digital Marketing Specialist",
    personImage: "/a_عا (1) 14.png",
    projectImage: "/Excellence-in-Graphic-Design 9.png",
    testimonial: "From the music I understood how to turn designs into a real sales tool."
  }
];

function TraineesShowcase() {
  return (
    <section className="w-full py-16 bg-white">
      {/* Title */}
      <div className="text-center mb-16 px-4">
        <AnimatedWords
          text="Our group of departments"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-2"
          style={{ 
            backgroundImage: 'linear-gradient(to right, #E6B800, #BD8800, #E6B800, #BD8800)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent'
          }}
        />
        <AnimatedWords
          text="rivals the highest quality"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-2"
          style={{ 
            backgroundImage: 'linear-gradient(to right, #D4A017, #B8860B, #D4A017, #B8860B)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent'
          }}
        />
        <AnimatedWords
          text="and international design"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-2"
          style={{ 
            backgroundImage: 'linear-gradient(to right, #D4A017, #B8860B, #D4A017, #B8860B)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent'
          }}
        />
        <AnimatedWords
          text="agencies."
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
          style={{ 
            backgroundImage: 'linear-gradient(to right, #D4A017, #B8860B, #D4A017, #B8860B)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent'
          }}
        />
      </div>

      {/* Trainees Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {trainees.map((trainee, index) => (
          <div 
            key={trainee.id} 
            className="flex flex-col items-center"
          >
            {/* Person Image */}
            <div className="w-full max-w-[280px] flex items-end justify-center overflow-hidden -mb-16 mx-auto">
              <img
                src={trainee.personImage}
                alt={trainee.name}
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>

            {/* Project Image */}
            <div className="w-full flex justify-center mb-2">
              <img
                src={trainee.projectImage}
                alt={`${trainee.name} project`}
                className="w-full max-w-[280px] h-auto aspect-[364/394] object-contain"
                loading="lazy"
              />
            </div>

            {/* Info Card */}
            <div className="w-full max-w-[280px] h-auto min-h-[170px] relative z-10 mx-auto group -mt-16">
              {/* Static Border */}
              <div className="absolute inset-0 rounded-3xl pointer-events-none">
                <div className="absolute inset-0 rounded-3xl p-[3px] bg-gradient-to-b from-[#FF0000] via-[#DDFF11] via-[#FF00FF] to-[#00F2FF]">
                  <div className="w-full h-full rounded-3xl bg-black"></div>
                </div>
              </div>

              {/* Card Content */}
              <div className="relative z-10 bg-black rounded-3xl p-5 text-white h-full min-h-[170px]">
                <h3 className="text-lg font-bold mb-1">{trainee.name}</h3>
                <p className="text-xs text-gray-400 mb-2">{trainee.title}</p>
                <p className="text-xs leading-relaxed">{trainee.testimonial}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TraineesShowcase;
