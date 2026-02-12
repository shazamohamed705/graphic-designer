import AnimatedWords from "../../components/AnimatedWords/AnimatedWords";

const trainees = [
  { id: 1, name: "Hagar Mahmoud", image: "Excellence-in-Graphic-Design 12.png", rating: 5 },
  { id: 2, name: "Shahd-Adel", image: "/Excellence-in-Graphic-Design 11.png", rating: 4.5 },
  { id: 3, name: "Shaimaa", image: "/Excellence-in-Graphic-Design 9.png", rating: 5 },
  { id: 4, name: "New Trainee 1", image: "/Excellence-in-Graphic-Design 8.png", rating: 4 },
  { id: 5, name: "New Trainee 2", image: "/Excellence-in-Graphic-Design 7.png", rating: 5 },
  { id: 6, name: "New Trainee 3", image: "/Excellence-in-Graphic-Design 10.png", rating: 3.5 }
];

function ContactSection() {
  return (
    <section className="w-full py-16 bg-white font-lexend">
      <div className="
  text-center mb-12 font-bold font-lexend
  text-[36px] sm:text-[48px] md:text-[72px] lg:text-[94px]
  flex justify-center items-center gap-2 sm:gap-4 mt-20
">
  <span className="text-yellow-400 text-[20px] sm:text-[28px] md:text-[32px]">⭐</span>
  <AnimatedWords
    text="trainees' projects"
    as="h2"
    className="inline"
  />
  <span className="text-yellow-400 text-[20px] sm:text-[28px] md:text-[32px]">⭐</span>
</div>


<div className="
  max-w-7xl mx-auto
  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
  gap-8 mt-20
  justify-items-center
">
        {trainees.map((trainee, index) => (
          <div
            key={trainee.id}
            className={`rounded-xl overflow-hidden relative w-[415px] h-[709px] flex flex-col justify-between text-white`}
            style={{
              // لينير للون الكرت الثاني من كل 3
              background: index % 3 === 1
                ? "linear-gradient(180deg, #999999 0%, #FFFFFF 50%, #CCCCCC 100%)"
                : "#000000"
            }}
          >
            {/* عنوان المشروع */}
            <div className="p-4 text-center font-bold text-[64px]">PROJECT</div>

            {/* Rating Stars */}
            <div className="flex justify-center gap-1 mb-14 text-yellow-400 text-[20px]">
              {Array.from({ length: Math.floor(trainee.rating) }).map((_, i) => (
                <span key={i}>⭐</span>
              ))}
              {trainee.rating % 1 !== 0 && <span>⭐</span>}
            </div>

            {/* Project Image */}
            <div className="flex justify-center items-center">
              <img
                src={trainee.image}
                alt={trainee.name}
                className="w-[391px] h-[441px] object-cover"
              />
            </div>

            
          </div>
        ))}
      </div>
    </section>
  );
}

export default ContactSection;
