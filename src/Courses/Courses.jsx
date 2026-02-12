import Design from './Design';
import CoursesSection from './CoursesSection';
import PhSection from './PhSection';
import ComentSection from './ComentSection';
import TestimonialsSection from '../Home/Sections/TestimonialsSection';
function Courses() {
  return (
    <div className="min-h-screen bg-white">
      <section className="w-full bg-white flex items-start justify-center pt-16 md:pt-20 relative">
        <div className="relative w-full max-w-full">
          <img
            className="w-full h-auto object-cover bg-black"
            src="/COVER-PADGE-COURCE 1.png" 
            alt="Courses Cover"
          />
          <div className="absolute inset-0 flex items-center justify-start pl-8 md:pl-20 lg:pl-32">
            <div className="text-left text-white font-lexend max-w-xl">
              <h1 className="inline-block text-[42px] md:text-[92px] font-extrabold leading-[1.05]">
                Welcome&nbsp;to<br />
                the course
              </h1>
              <p className="mt-3 text-sm md:text-base font-medium tracking-wide">
                elnasr Graphic
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Design />
       <PhSection />
      <CoursesSection />
      <TestimonialsSection />
      <ComentSection />
    </div>
  );
}

export default Courses;