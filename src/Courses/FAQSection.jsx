import React, { useState } from 'react';

const FAQSection = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "How long does it take to become a designer capable of setting up my services?",
      answer: "After you complete the program and apply the knowledge gained with me, you will be able to work as a professional designer within 3-6 months, depending on your commitment and practice level."
    },
    {
      id: 2,
      question: "Will I learn the new AI technologies in Photoshop?",
      answer: "Absolutely! The course covers the latest AI technologies in Photoshop, including AI-powered tools and features that will help you work more efficiently and create stunning designs."
    },
    {
      id: 3,
      question: "What's the difference between what I'll learn in Photoshop and ready-made design apps like Canva?",
      answer: "While Canva offers templates for quick designs, Photoshop gives you complete creative control. You'll learn to create original designs from scratch, manipulate images professionally, and develop skills that set you apart as a true designer."
    },
    {
      id: 4,
      question: "Where will I get high-quality images and resources for my designs?",
      answer: "Part of the course covers sourcing high-quality images, fonts, and design resources. I'll share my favorite websites and resources that provide professional-grade materials for your projects."
    },
    {
      id: 5,
      question: "What if a new Photoshop update is released after I purchase the course?",
      answer: "No worries! You'll get lifetime access to course updates. Whenever Adobe releases new features, I update the course content to include the latest tools and techniques."
    }
  ];

  const toggleQuestion = (id) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <section className="w-full relative" style={{overflow: 'visible'}}>
      {/* Subtract Background Image - Outside all containers */}
      <img
        src="/Subtract.png"
        alt="Background"
        className="absolute -top-[100px] -right-[500px] w-[280%] h-[180vh] object-contain opacity-50 z-40 pointer-events-none"
        style={{overflow: 'visible'}}
      />
      
      {/* Title - On transparent background */}
      <div className="text-center mb-8 px-4 py-8 relative z-50" style={{background: 'transparent'}}>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 drop-shadow-lg relative z-50">
          Your question
        </h2>
      </div>

      {/* Black Background Section */}
      <div className="bg-black py-8 relative z-10 overflow-visible">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side - FAQ List */}
          <div className="w-full lg:w-1/2 space-y-8 mt-16">
            <h3 className="text-2xl font-bold text-white mb-8">
              Your question
            </h3>
            
            {faqs.map((faq) => (
              <div key={faq.id} className="pb-6">
                {/* Question */}
                <div className="mb-4">
                  <h4 className="text-lg font-medium text-white leading-relaxed">
                    {faq.question}
                  </h4>
                </div>
                
                {/* Two orange lines under each question - one thick, one thin and lighter */}
                <div className="w-full mb-4">
                  <div className="w-full h-1 bg-orange-400"></div>
                  <div className="w-full h-0.5 bg-orange-300 opacity-60 mt-1"></div>
                </div>
                
                {/* Answer - Always visible */}
                <div className="mb-4">
                  <div className="text-green-400 font-semibold mb-3 text-lg">Answer</div>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    {faq.answer}
                  </p>
                </div>
                
                {/* Plus icon at the end */}
                <div className="flex justify-end">
                  <span className="text-2xl text-yellow-500">+</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative p-8 overflow-visible">
              {/* Background Icons */}
              <div className="absolute top-4 right-4 opacity-20">
                <svg className="w-32 h-32 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              
              

              {/* Images - Two images stacked vertically */}
              <div className="relative z-10 flex flex-col justify-center items-center w-full -mt-80 overflow-visible ml-24" style={{overflow: 'visible'}}>
                {/* First image - Mask group (7) on top */}
                <img
                  src="/Mask group (7).png"
                  alt="Abdullah Al-Nasr"
                  className="w-full max-w-4xl h-auto object-contain relative z-80"
                />
                
                {/* Second image - 2 post 1 below, larger and raised more */}
                <img
                  src="/2 post 1.png"
                  alt="Abdullah Al-Nasr"
                  className="w-full h-auto object-contain min-h-[800px] -mt-60 scale-125 relative z-90"
                />
              </div>

              {/* Coffee Cup */}
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;