const PromoVideoSection = () => {
  return (
    <section className="w-full py-16 bg-white px-4">
      <div className="w-full max-w-[95%] mx-auto">
        {/* Video Container with Gradient Border */}
        <div className="relative group" style={{ paddingBottom: '35%' }}>
          {/* Static Gradient Border - Always Visible */}
          <div className="absolute inset-0 rounded-[30px] pointer-events-none">
            <div className="absolute inset-0 rounded-[30px] p-[5px] bg-gradient-to-b from-[#FF0000] via-[#DDFF11] via-[#FF00FF] to-[#00F2FF]">
              <div className="w-full h-full rounded-[30px] bg-black"></div>
            </div>
          </div>

          {/* Animated Light on Hover */}
          <div className="absolute inset-0 rounded-[30px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="absolute inset-0 rounded-[30px] p-[5px] bg-gradient-to-b from-transparent via-white to-transparent border-light-animate">
              <div className="w-full h-full rounded-[30px] bg-black"></div>
            </div>
          </div>

          {/* Video Content */}
          <div className="absolute inset-0 rounded-[30px] flex items-center justify-center pointer-events-auto">
            {/* Play Button */}
            <button className="relative z-10 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
              <svg 
                className="w-8 h-8 text-black ml-1" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoVideoSection;
