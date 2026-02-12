import React from 'react';
import AnimatedWords from '../../components/AnimatedWords/AnimatedWords';
import AnimatedLetters from '../../components/AnimatedLetters/AnimatedLetters';

const AboutSection = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Main Title */}
        <AnimatedWords 
          text="About us"
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-12 sm:mb-16 text-center"
          style={{ 
              backgroundImage: 'linear-gradient(to right, #BD8800 0%, #BD8800 35%, #FFD100 45%, #FFD100 55%, #9C6B00 65%, #9C6B00 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent'
          }}
        />
        
        {/* Who We Are Section */}
        <div className="mb-12 sm:mb-16">
          <AnimatedWords 
            text="Who We Are"
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6"
            style={{ 
              background: 'linear-gradient(to right, rgba(197, 149, 0, 0.8), rgba(197, 149, 0, 0.65), rgba(197, 149, 0, 0.8))',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent'
            }}
            as="h3"
          />
          <p className="text-black text-base sm:text-lg leading-relaxed font-bold">
            ANS Academy: Where Creativity Meets the Market. We are more than just an online learning platform; we are a creative powerhouse founded by Abdullah Al-Nasr. With over 6 years of hands-on experience crafting visual identities for the Egyptian and Saudi markets, we've built ANS Academy to bridge the gap between artistic talent and professional success.
          </p>
        </div>
        
        {/* What We Do Section */}
        <div>
          <AnimatedWords 
            text="What We Do"
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6"
            style={{ 
              background: 'linear-gradient(to right, rgba(197, 149, 0, 0.8), rgba(197, 149, 0, 0.65), rgba(197, 149, 0, 0.8))',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent'
            }}
            as="h3"
          />
          <p className="text-black text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed font-bold">
            Our mission is to transform aspiring creators into high-earning professionals. We don't just teach software; we teach the Business of Design:
          </p>
          
          <ul className="space-y-4 sm:space-y-5">
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 border border-black rounded-full mt-3 mr-3 flex-shrink-0"></span>
              <p className="text-black text-base sm:text-lg leading-relaxed font-normal">
                Real-World Expertise: We transfer years of field experience, teaching you how to think like a professional designer who commands high fees.
              </p>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 border border-black rounded-full mt-3 mr-3 flex-shrink-0"></span>
              <p className="text-black text-base sm:text-lg leading-relaxed font-normal">
                Comprehensive Branding: Our programs, like "Design to Income," focus on real projects—from logo creation to building full Brand Guidelines.
              </p>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 border border-black rounded-full mt-3 mr-3 flex-shrink-0"></span>
              <p className="text-black text-base sm:text-lg leading-relaxed font-normal">
                Market Mastery: We reveal the secrets of dealing with high-end clients in the Gulf market, including professional pricing and project management.
              </p>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 border border-black rounded-full mt-3 mr-3 flex-shrink-0"></span>
              <p className="text-black text-base sm:text-lg leading-relaxed font-normal">
                Career Support: We provide a supportive ecosystem, from portfolio reviews to strategic consultations that ensure you stand out in a competitive industry.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

