import React from "react";
import AnimatedWords from "../../components/AnimatedWords/AnimatedWords";

function SupportSection() {
  return (
    <section className="w-full min-h-screen bg-white flex justify-center items-center relative px-4 sm:px-8 lg:px-16">
      <div className="relative w-full max-w-[1500px]">

        {/* الكونتينر الأسود (أكبر من الصورة بوضوح) */}
{/* الكونتينر الأسود */}
<div
          className="
            absolute top-4 left-0 w-full
            h-[260px] sm:h-[490px]
            bg-black
            rounded-[40px] sm:rounded-[100px]
            z-10
          "
        ></div>
        {/* Wrapper للصورة عشان تبقى جوه الأسود */}
        <div className="relative w-full h-[600px] flex items-center justify-end z-20 pr-1">
          <img
            src="/aa.png"
            alt="Main"
            className="w-[960px] h-[580px] object-contain rounded-[40px] -mt-20"          />
        </div>

        {/* النصوص */}
        <div className="absolute top-20 left-12 max-w-lg text-white z-30">
        <div
  className="
    flex items-center gap-3

    text-[14px] leading-snug font-medium
    sm:text-[44.54px] sm:leading-normal sm:font-normal

    mb-4
    whitespace-nowrap
    font-['Inter']
  "
>

  <span className="text-white">I'm</span>

  {/* الصورة الأولى */}
  <img
    src="/profile.png"
    alt="Profile 1"
    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white object-cover"
  />

  <span className="font-semibold text-white">Always With You,</span>

  <span className="text-white">To</span>

  {/* Wrapper للصورة الثانية مستقلة */}
{/* Wrapper للصورة الثانية مستقلة */}
<div className="relative flex flex-col items-center ml-4">
  {/* الصورة */}
  <div className="w-20 h-20 sm:w-20 sm:h-20 relative">
    <img
      src="/profile.png"
      alt="Profile 2"
      className="w-full h-full rounded-full border-2 border-white object-cover"
    />

    {/* الدوائر مائلة لليمين تدريجيًا */}
    <div className="absolute -bottom-6 left-0">
      <span className="w-7 h-7 rounded-full bg-white absolute top-[-30px] left-20"></span>
      <span className="w-6 h-6 rounded-full bg-white absolute top-[1px] left-28"></span>
      <span className="w-5 h-5 rounded-full bg-white absolute top-[20px] left-36"></span>
      <span className="w-4.5 h-4.5 rounded-full bg-white absolute top-[40px] left-36"></span>
      <span className="w-3.5 h-3.5 rounded-full bg-white absolute top-[45px] left-44"></span>
      <span className="w-2.5 h-2.5 rounded-full bg-white absolute top-[60px] left-52"></span>
    </div>
  </div>
</div>
</div>
<AnimatedWords
  text="Solve Any Problem"
  as="span"
  className="
    block text-white
    text-[14px] font-semibold leading-snug

    sm:text-[44.54px] sm:leading-normal
    font-['Inter']
  "
/>

<p
  className="
    text-white/90
    text-sm leading-relaxed

    sm:text-base lg:text-lg
  "
>
  Feel free to let me know if there is any problem with the work and solve it.
</p>

         
        </div>

        

      </div>
    </section>
  );
}

export default SupportSection;