import {
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaEnvelope,
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn
  } from "react-icons/fa";
  import { FaXTwitter, FaTiktok } from "react-icons/fa6";
  import { BsLink45Deg } from "react-icons/bs";
  const Footer = () => {
    return (
      <footer className="bg-black text-white px-8 md:px-16 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
  
        <div>
  {/* Logo */}
  <img
    src="/Abdullah  el-Nasr.png"
    alt="Logo"
    className="w-28 mb-4"
  />
<h3 className="text-lg font-lexend mb-2">
  Contact information
</h3>

<div className="w-21 h-px bg-gradient-to-r from-white/70 via-white/30 to-transparent "></div>


  
<div className="text-sm text-gray-300 space-y-8 mt-4">

{/* Group 1 */}
<div className="space-y-4">
  <div className="flex items-center gap-3">
    <FaPhoneAlt className="text-gray-400" />
    <a href="tel:@alnaser224" className="hover:text-white transition-colors cursor-pointer">
      @alnaser224
    </a>
  </div>

  <div className="flex items-center gap-3">
    <BsLink45Deg className="text-gray-400" />
    <span>https://t.me/.....</span>
  </div>
</div>

{/* Group 2 */}
<div className="space-y-4">
  <div className="flex items-center gap-3">
    <FaMapMarkerAlt className="text-gray-400" />
    <span>Kingdom of Saudi Arabia</span>
  </div>

  <div className="flex items-center gap-3">
    <FaEnvelope className="text-gray-400" />
    <span>abdullahenasrabdullahenasr@gmail.com</span>
  </div>
</div>

</div>

          </div>
  
          {/* Right side */}
          <div className="flex gap-4 mt-60">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-black flex items-center justify-center shrink-0 hover:bg-white hover:text-black transition">
              <FaFacebookF />
            </div>
  
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-black flex items-center justify-center shrink-0 hover:bg-white hover:text-black transition">
              <FaInstagram />
            </div>
  
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-black flex items-center justify-center shrink-0 hover:bg-white hover:text-black transition">
              <FaXTwitter />
            </div>
  
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-black flex items-center justify-center shrink-0 hover:bg-white hover:text-black transition">
              <FaLinkedinIn />
            </div>
  
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-black flex items-center justify-center shrink-0 hover:bg-white hover:text-black transition">
              <FaTiktok />
            </div>
          </div>
        </div>
  
        {/* Line */}
        <div className="mt-10 border-t border-gray-700"></div>
      </footer>
    );
  };
  
  export default Footer;
  