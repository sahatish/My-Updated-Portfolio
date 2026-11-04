import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaGithub, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="text-white py-12 px-[7vw] md:px-[7vw] lg:px-[16vw] border-t border-purple-900/40 relative z-10 bg-[#060416]/90">
      <div className="container mx-auto flex flex-col items-center justify-between text-center space-y-6">
        {/* Top Section: Brand & Back-to-Top */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-purple-900/30">
          <div className="text-left">
            <h2 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Atish Kumar Sah
            </h2>
            <p className="text-xs text-gray-400 mt-0.5">
              Full-Stack Software Developer & Quality Analyst
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 bg-purple-950/60 hover:bg-[#8245ec] text-purple-300 hover:text-white border border-purple-800/60 px-4 py-2 rounded-xl text-xs font-semibold transition shadow-sm"
          >
            <span>Back to top</span>
            <FaArrowUp size={12} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-4 text-xs sm:text-sm text-gray-400">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
            { name: "Contact", id: "contact" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-400 transition"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="flex flex-wrap justify-center space-x-5 text-lg">
          {[
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/atish-sah-8a1a9b260/", name: "LinkedIn" },
            { icon: <FaGithub />, link: "https://github.com/sahatish", name: "GitHub" },
            { icon: <FaTwitter />, link: "https://x.com/SahAtish1662?t=DmARStottE8ysvWICnVjJg&s=09", name: "Twitter" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/aatishshah002?igsh=bnd0aDZhcm8yMmw4", name: "Instagram" },
            { icon: <FaFacebook />, link: "https://www.facebook.com/aatish.shah.109987", name: "Facebook" },
            { icon: <FaYoutube />, link: "https://youtube.com/@shahaatish-g2b?si=uQ4vVe0fPk9_bpQG", name: "YouTube" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-transform transform hover:scale-125"
              title={item.name}
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-xs text-gray-500 pt-4">
          © {new Date().getFullYear()} Atish Kumar Sah. Designed & Built with React, Tailwind CSS & Cyber Aesthetics.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
