import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'About', path: '/AboutUs' },
    { name: 'Contact', path: '/contact' },
    { name: 'Instructor', path: '/instructor' },
    { name: 'Portfolio', path: '#portfolio' },
    { name: 'Certifications', path: '#certifications' },
    { name: 'Subscribe', path: '#subscribe' }
  ];

  return (
    <div className="w-full">
      {/* Main navigation bar */}
      <nav className="bg-black fixed top-0 left-0 right-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo area - Left side */}
<div className="flex-shrink-0 flex items-center -ml-4 sm:-ml-6 lg:-ml-8">
  <div className="h-13 md:h-20 w-24 md:w-32  relative  ">
    {/* Logo image */}
    <div className="h-full w-full flex items-center justify-center">
      <img
        src="/Abdullah  el-Nasr.png"       // ضع هنا مسار الصورة
        alt="Logo"
        className="h-12 md:h-16 object-contain"
      />
    </div>
  </div>
</div>


            {/* Navigation links - Center (Desktop) */}
            <div className="hidden lg:flex items-center space-x-2 xl:space-x-10 flex-1 justify-center ml-8 xl:ml-12">
              {navLinks.map((link, index) => (
                link.path.startsWith('#') ? (
                  <a
                    key={index}
                    href={link.path}
                    className="text-white hover:text-blue-400 transition-colors duration-200 text-sm xl:text-base font-medium whitespace-nowrap"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={index}
                    to={link.path}
                    className="text-white hover:text-blue-400 transition-colors duration-200 text-sm xl:text-base font-medium whitespace-nowrap"
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </div>

            {/* Right side icons */}
            <div className="flex items-center space-x-4 md:space-x-6">
              {/* Language selector */}
              <div className="hidden sm:flex items-center space-x-1 text-white cursor-pointer hover:text-blue-400 transition-colors">
                <svg 
                  className="w-4 h-4 md:w-5 md:h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                  />
                </svg>
                <span className="text-sm md:text-base font-medium">EN</span>
              </div>

              {/* Heart icon */}
              <div className="hidden sm:block cursor-pointer hover:scale-110 transition-transform">
                <svg 
                  className="w-5 h-5 md:w-6 md:h-6 text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
                  />
                </svg>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden text-white focus:outline-none rounded p-2"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-black border-t border-gray-800">
            <div className="px-4 pt-2 pb-4 space-y-2">
              {navLinks.map((link, index) => (
                link.path.startsWith('#') ? (
                  <a
                    key={index}
                    href={link.path}
                    className="block text-white hover:text-blue-400 transition-colors py-2 text-base"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={index}
                    to={link.path}
                    className="block text-white hover:text-blue-400 transition-colors py-2 text-base"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              ))}
              {/* Mobile language selector */}
              <div className="flex items-center space-x-2 text-white pt-4 border-t border-gray-800">
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                  />
                </svg>
                <span className="text-base font-medium">EN</span>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;

