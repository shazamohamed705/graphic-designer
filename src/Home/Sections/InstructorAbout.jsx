import React from "react";
import { FaStar } from "react-icons/fa";
import AnimatedWords from "../../components/AnimatedWords/AnimatedWords";

const InstructorAbout = () => {
  return (
    <section className="w-full py-20 bg-white flex justify-center">
      <div className="text-center flex flex-col items-center gap-4">

        {/* Small title */}
        <AnimatedWords
          text="Who is the leader?"
          as="p"
          className="font-lexend text-[32px] md:text-[48px] font-semibold tracking-wider inline-block text-black"
        />

        {/* Main title */}
        <div className="font-lexend text-4xl md:text-5xl lg:text-6xl font-extrabold relative inline-block">
          <AnimatedWords
            text="Meet Your Ment"
            as="span"
            className="inline"
            style={{
              backgroundImage: 'linear-gradient(90deg, #BD8800, #FFD100, #9C6B00)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent'
            }}
          />
          <span className="relative inline-block" style={{
            backgroundImage: 'linear-gradient(90deg, #BD8800, #FFD100, #9C6B00)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent'
          }}>
            <span className="absolute -top-4 left-1/2 -translate-x-1/2">
              <FaStar className="text-yellow-500 text-[0.4em]" />
            </span>
            o
          </span>
          <AnimatedWords
            text="r"
            as="span"
            className="inline"
            style={{
              backgroundImage: 'linear-gradient(90deg, #BD8800, #FFD100, #9C6B00)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent'
            }}
          />
        </div>

      </div>
    </section>
  );
};

export default InstructorAbout;
