import React from "react";
import { FaStar } from "react-icons/fa";
import AnimatedWords from "../../components/AnimatedWords/AnimatedWords";

const InstructorAbout = () => {
  return (
    <section className="w-full py-20 bg-white flex justify-center">
      <div className="text-center flex flex-col items-center gap-4">

        {/* Small title */}
        <AnimatedWords
          text="About"
          as="p"
          className="font-lexend text-[48px] font-semibold tracking-wider inline-block"
          style={{
            backgroundImage: 'linear-gradient(90deg, #BD8800, #FFD100, #9C6B00)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent'
          }}
        />

        {/* Main title */}
        <div className="font-lexend text-4xl md:text-5xl font-extrabold text-black relative inline-block">
          <AnimatedWords
            text="Instruct"
            as="span"
            className="inline text-black"
          />
          <span className="relative inline-block w-[1em] h-[1em]">
            <span className="absolute inset-0 flex justify-center items-center">
              <FaStar className="text-yellow-500 text-[0.4em]" />
            </span>
            O
          </span>
          <AnimatedWords
            text="r"
            as="span"
            className="inline text-black"
          />
        </div>

      </div>
    </section>
  );
};

export default InstructorAbout;
