function Contact() {
  return (
    <div style={{ backgroundColor: '#000000C9' }}>
      {/* Hero Section */}
      <section className="w-full h-[85vh] md:h-[82vh] flex items-center">
        <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="order-2 lg:order-1 lg:mt-20">
              {/* Main Heading */}
              <h1 className="text-white font-bold mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl" style={{ fontFamily: 'Inter', lineHeight: '100%', letterSpacing: '0%' }}>
                Contact Us
              </h1>
              
              {/* Subheading */}
              <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl" style={{ fontFamily: 'Lexend', fontWeight: '300', lineHeight: '100%', letterSpacing: '0%' }}>
                We'd love to hear from you.
              </p>
            </div>

            {/* Right Side - Image */}
            <div className="order-1 lg:order-2 relative lg:left-24 xl:left-40 lg:mt-5">
              <img
                src="CONTACT 1.png"
                alt="Contact"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full py-16 md:py-20 bg-white">
        <div className="w-full max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
          {/* Form Container with Gradient Background */}
          <div 
            className="p-4 md:p-6 lg:p-8 w-full h-auto md:h-[500px] lg:h-[570px] max-w-full lg:max-w-[1287px]"
            style={{ 
              background: 'linear-gradient(90deg, #4A4A4A 0%, #E8E6E6 100%)',
              borderRadius: '34px'
            }}
          >
            <form className="space-y-6">
              {/* Name and Phone Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name Input */}
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-6 py-3 rounded-full bg-white text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{ fontFamily: 'Inter' }}
                />
                
                {/* Phone Input */}
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full px-6 py-3 rounded-full bg-white text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{ fontFamily: 'Inter' }}
                />
              </div>

              {/* Email Input */}
              <input
                type="email"
                placeholder="E-mail"
                className="w-full px-6 py-3 rounded-full bg-white text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{ fontFamily: 'Inter' }}
              />

              {/* Message Textarea */}
              <textarea
                placeholder="Massage"
                className="w-full px-6 py-4 bg-white text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none
                           h-[200px] md:h-[240px] lg:h-[274px] max-w-full lg:max-w-[1225px]"
                style={{ fontFamily: 'Inter', borderRadius: '34px' }}
              ></textarea>
            </form>
          </div>

          {/* Submit Button - Outside Form */}
          <div className="mt-8">
            <button
              type="submit"
              className="bg-black text-white px-12 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors"
              style={{ fontFamily: 'Inter' }}
            >
              Submit Massage
            </button>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="w-full py-16 bg-white">
        <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Email Card */}
            <div className="p-8 w-full h-[220px] md:h-[240px] lg:h-[264px] max-w-full lg:max-w-[414px] mx-auto" style={{ background: 'linear-gradient(127.15deg, #4A4A4A -58.35%, #E8E6E6 101.65%)', borderRadius: '34px' }}>
              <h3 className="text-white text-3xl font-bold mb-4" style={{ fontFamily: 'Inter' }}>
                Email
              </h3>
              <div className="flex items-center gap-3">
                <img 
                  src="8a8b1a639f587bdb4a0980f9ab6da7861daa802b.png" 
                  alt="Email Icon" 
                  className="w-8 h-8 flex-shrink-0"
                />
                <p className="text-white break-all" style={{ fontFamily: 'Lexend', fontWeight: '500', fontSize: '24.83px', lineHeight: '100%', letterSpacing: '0%' }}>
                  abdullahelnasrabdullahelnasr@gmail.com
                </p>
              </div>
            </div>

            {/* Telegram Card */}
            <div className="bg-black p-8 w-full h-[220px] md:h-[240px] lg:h-[264px] max-w-full lg:max-w-[414px] mx-auto" style={{ borderRadius: '34px' }}>
              <h3 className="text-white text-3xl font-bold mb-4" style={{ fontFamily: 'Inter' }}>
                Telegram
              </h3>
              <div className="flex items-center gap-3">
                <img 
                  src="a55a63e9a0c462ec3178d9033c501081e0aa0e68.png" 
                  alt="Telegram Icon" 
                  className="w-8 h-8 flex-shrink-0"
                />
                <p className="text-white" style={{ fontFamily: 'Lexend', fontWeight: '500', fontSize: '24.83px', lineHeight: '100%', letterSpacing: '0%' }}>
                  @alnaser224
                </p>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-8 w-full h-[220px] md:h-[240px] lg:h-[264px] max-w-full lg:max-w-[414px] mx-auto" style={{ background: 'linear-gradient(127.15deg, #4A4A4A -58.35%, #E8E6E6 101.65%)', borderRadius: '34px' }}>
              <h3 className="text-white text-3xl font-bold mb-4" style={{ fontFamily: 'Inter' }}>
                LOCATION
              </h3>
              <div className="flex items-center gap-3">
                <svg className="w-8 h-8 text-black flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <p className="text-white" style={{ fontFamily: 'Lexend', fontWeight: '500', fontSize: '20px', lineHeight: '100%', letterSpacing: '0%' }}>
                  Kingdom of Saudi Arabia
                </p>
              </div>
            </div>
          </div>

          {/* Map Image */}
          <div className="w-full rounded-[30px] overflow-hidden relative">
            <img
              src="3928928a83e47dbb36a175d2dcee4117f02b0e19.jpg"
              alt="Location Map"
              className="w-full h-[300px] md:h-[400px] object-cover"
            />
            {/* Location Pin Overlay */}
            <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
              <img
                src="82b6745f5934ff472d3008ac6ff82a1b6fd57401.png"
                alt="Location Pin"
                className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
