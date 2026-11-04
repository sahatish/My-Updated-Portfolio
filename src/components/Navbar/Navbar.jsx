import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Section scrollSpy
      const sections = ["about", "skills", "experience", "work", "education", "contact"];
      const scrollPos = window.scrollY + 200;

      for (let secId of sections) {
        const el = document.getElementById(secId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(secId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 px-[7vw] md:px-[7vw] lg:px-[16vw] ${
        isScrolled
          ? "bg-[#070519]/90 backdrop-blur-xl border-b border-purple-900/50 shadow-[0_10px_30px_rgba(0,0,0,0.5)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="flex justify-between items-center text-white">
        {/* Brand Logo */}
        <div
          onClick={() => handleMenuItemClick("about")}
          className="text-base sm:text-lg font-mono font-bold cursor-pointer flex items-center space-x-1 group"
        >
          <span className="text-[#8245ec] group-hover:text-cyan-400 transition">&lt;</span>
          <span className="text-white tracking-wider">ATISH</span>
          <span className="text-purple-400">/</span>
          <span className="text-gray-300">SAH</span>
          <span className="text-[#8245ec] group-hover:text-cyan-400 transition">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-6 text-sm font-medium">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleMenuItemClick(item.id)}
                className={`transition-all duration-200 py-1 px-2 rounded-lg relative ${
                  activeSection === item.id
                    ? "text-purple-300 font-bold bg-purple-900/40 border border-purple-700/50"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons & Resume CTA */}
        <div className="hidden lg:flex items-center space-x-3">
          <a
            href="https://github.com/sahatish"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-300 hover:text-white bg-purple-950/40 hover:bg-purple-900/60 rounded-xl border border-purple-900/50 transition"
            title="GitHub Profile"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/atish-sah-8a1a9b260/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-300 hover:text-white bg-purple-950/40 hover:bg-purple-900/60 rounded-xl border border-purple-900/50 transition"
            title="LinkedIn Profile"
          >
            <FaLinkedin size={18} />
          </a>

          <a
            href="https://drive.google.com/file/d/1OadatyReH9NZHVDwDO9dTBPxatswg0_x/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 bg-[#8245ec] hover:bg-purple-600 text-white text-xs font-bold px-4 py-2 rounded-xl transition shadow-[0_0_15px_rgba(130,69,236,0.4)]"
          >
            <FaFileDownload size={12} />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-purple-400 bg-purple-950/60 border border-purple-800/60 rounded-xl"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="mt-3 bg-[#0d0924]/95 backdrop-blur-2xl border border-purple-800/80 rounded-2xl p-4 lg:hidden shadow-2xl animate-fadeIn">
          <ul className="flex flex-col space-y-2 text-sm text-gray-200">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`w-full text-left py-2 px-4 rounded-xl transition ${
                    activeSection === item.id
                      ? "bg-[#8245ec] text-white font-bold"
                      : "hover:bg-white/10 text-gray-300"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-between pt-4 mt-4 border-t border-purple-900/60">
            <div className="flex space-x-3">
              <a
                href="https://github.com/sahatish"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/atish-sah-8a1a9b260/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaLinkedin size={20} />
              </a>
            </div>

            <a
              href="https://drive.google.com/file/d/1OadatyReH9NZHVDwDO9dTBPxatswg0_x/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs bg-[#8245ec] text-white font-bold px-3 py-1.5 rounded-lg"
            >
              Resume 📄
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
