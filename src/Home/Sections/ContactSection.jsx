import AnimatedWords from "../../components/AnimatedWords/AnimatedWords";
import { useState, useEffect } from "react";

const projects = [
  { id: 1, image: "/Excellence-in-Graphic-Design 12.png", name: "Brandin" },
  { id: 2, image: "/Excellence-in-Graphic-Design 11.png", name: "Nescafe" },
  { id: 3, image: "/Excellence-in-Graphic-Design 9.png", name: "DiDi" },
  { id: 4, image: "/Excellence-in-Graphic-Design 8.png", name: "Project 4" },
  { id: 5, image: "/Excellence-in-Graphic-Design 7.png", name: "Project 5" },
  { id: 6, image: "/Excellence-in-Graphic-Design 10.png", name: "Project 6" },
  { id: 7, image: "/Excellence-in-Graphic-Design 7.png", name: "Project 5 Copy", isLastPair: true },
  { id: 8, image: "/Excellence-in-Graphic-Design 10.png", name: "Project 6 Copy", isLastPair: true }
];

function ContactSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const getProjectIndex = (offset) => {
    return (currentIndex + offset + projects.length) % projects.length;
  };

  return (
    <section className="w-full py-16 bg-white font-lexend overflow-hidden">
      {/* Title */}
      <div className="text-center mb-12">
        <AnimatedWords
          text="trainees projects"
          as="h2"
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold"
          style={{
            backgroundImage: 'linear-gradient(90deg, #BD8800, #FFD100, #9C6B00)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent'
          }}
        />
      </div>

      {/* Cover Image - People */}
      <div className="w-full max-w-6xl mx-auto mb-16 px-4">
        <img
          src="/cover-websitebar.png"
          alt="Trainees"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Scrolling Projects - 3D Carousel */}
      <div className="w-full perspective-container py-12">
        <div className="flex justify-center items-center relative overflow-hidden" style={{ height: '450px', width: '100%' }}>
          {projects.map((project, index) => {
            const position = (index - currentIndex + projects.length) % projects.length;
            
            let styles = {
              position: 'absolute',
              transition: 'all 0.7s ease-in-out'
            };
            
            if (position === 0) {
              // Center position
              styles = {
                ...styles,
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 3,
                opacity: 1
              };
            } else if (position === projects.length - 1 || position === -1) {
              // Left position
              styles = {
                ...styles,
                left: '5%',
                transform: 'perspective(1000px) rotateY(-25deg) scaleX(1.3) translateZ(-100px)',
                zIndex: 1,
                opacity: 1
              };
            } else if (position === 1) {
              // Right position
              styles = {
                ...styles,
                right: '5%',
                transform: 'perspective(1000px) rotateY(25deg) scaleX(1.3) translateZ(-100px)',
                zIndex: 1,
                opacity: 1
              };
            } else if (position === 2) {
              // Far right (exiting)
              styles = {
                ...styles,
                right: '-30%',
                transform: 'perspective(1000px) rotateY(45deg) scaleX(1.5) translateZ(-200px)',
                zIndex: 0,
                opacity: 0
              };
            } else {
              // Far left (entering)
              styles = {
                ...styles,
                left: '-30%',
                transform: 'perspective(1000px) rotateY(-45deg) scaleX(1.5) translateZ(-200px)',
                zIndex: 0,
                opacity: 0
              };
            }
            
            return (
              <div 
                key={project.id}
                className={position === 0 
                  ? "w-[350px] sm:w-[450px] md:w-[500px] h-[250px] sm:h-[300px] md:h-[350px] rounded-3xl overflow-hidden shadow-2xl"
                  : "w-[350px] sm:w-[450px] h-[250px] sm:h-[300px] rounded-3xl overflow-hidden shadow-2xl"
                }
                style={styles}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
