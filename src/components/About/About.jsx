import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/photo.jpg";
import { FaFileDownload, FaPaperPlane, FaMapMarkerAlt, FaBriefcase, FaGraduationCap, FaCode } from "react-icons/fa";

const About = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="py-10 px-[7vw] md:px-[7vw] lg:px-[16vw] font-sans mt-8 md:mt-16 relative z-10"
    >
      {/* Top Open Status Banner */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-[#0d0a21]/80 border border-purple-800/50 backdrop-blur-md px-4 py-2.5 rounded-2xl mb-12 max-w-4xl mx-auto shadow-[0_0_20px_rgba(130,69,236,0.15)]">
        <div className="flex items-center space-x-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <span className="text-xs sm:text-sm font-semibold text-emerald-300">
            Open for Full-Time Roles & Internships
          </span>
        </div>
        <div className="flex items-center space-x-1.5 text-xs text-gray-400 font-medium">
          <FaMapMarkerAlt className="text-purple-400" />
          <span>Vadodara, Gujarat (India) / Nepal</span>
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-12">
        {/* Left Content Column */}
        <div className="lg:w-7/12 text-center lg:text-left">
          <div className="inline-block bg-purple-900/30 text-purple-300 border border-purple-500/30 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            Full-Stack Software Engineer
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-2 tracking-tight leading-tight">
            Hi, I am <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">Atish Kumar Sah</span>
          </h1>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 text-[#8245ec] h-12">
            <span className="text-gray-300">I am a </span>
            <span className="text-purple-400 underline decoration-purple-500 underline-offset-4 font-bold">
              <Typewriter
                words={[
                  "Fullstack Developer",
                  "Software Engineer",
                  "MERN Stack Specialist",
                  "Quality Analyst & QA Engineer",
                  "Python / Flask Enthusiast",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={40}
                delaySpeed={1800}
              />
            </span>
          </h2>

          <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Passionate B.Tech Computer Science graduate building scalable, high-performance web applications. Skilled across front-end & back-end stacks (React, Node, Flask, MongoDB, MySQL), with a sharp eye for clean architecture and software quality.
          </p>

          {/* Action CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
            <a
              href="https://drive.google.com/file/d/1OadatyReH9NZHVDwDO9dTBPxatswg0_x/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-white font-bold py-3.5 px-7 rounded-full shadow-[0_0_25px_rgba(130,69,236,0.6)] transition duration-300 transform hover:scale-105"
              style={{
                background: "linear-gradient(90deg, #8245ec, #a855f7)",
              }}
            >
              <FaFileDownload />
              <span>DOWNLOAD RESUME</span>
            </a>

            <button
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center space-x-2 bg-transparent hover:bg-white/10 text-gray-200 border border-gray-600 font-bold py-3.5 px-6 rounded-full transition duration-300"
            >
              <FaPaperPlane />
              <span>GET IN TOUCH</span>
            </button>
          </div>

          {/* Quick Stats Metrics Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl mx-auto lg:mx-0 pt-4 border-t border-purple-900/40">
            <div className="bg-[#0b081e]/70 border border-purple-900/60 p-3 rounded-xl text-center">
              <div className="text-2xl font-extrabold text-purple-400 flex items-center justify-center space-x-1">
                <FaCode className="text-base mr-1 text-purple-400" />
                <span>5+</span>
              </div>
              <div className="text-xs text-gray-400 mt-1">Fullstack Apps</div>
            </div>

            <div className="bg-[#0b081e]/70 border border-purple-900/60 p-3 rounded-xl text-center">
              <div className="text-2xl font-extrabold text-cyan-400 flex items-center justify-center space-x-1">
                <FaGraduationCap className="text-base mr-1 text-cyan-400" />
                <span>7.8</span>
              </div>
              <div className="text-xs text-gray-400 mt-1">B.Tech CGPA</div>
            </div>

            <div className="bg-[#0b081e]/70 border border-purple-900/60 p-3 rounded-xl text-center">
              <div className="text-2xl font-extrabold text-pink-400 flex items-center justify-center space-x-1">
                <FaBriefcase className="text-base mr-1 text-pink-400" />
                <span>15+</span>
              </div>
              <div className="text-xs text-gray-400 mt-1">Tech Stack Skills</div>
            </div>

            <div className="bg-[#0b081e]/70 border border-purple-900/60 p-3 rounded-xl text-center">
              <div className="text-2xl font-extrabold text-emerald-400">100%</div>
              <div className="text-xs text-gray-400 mt-1">Code Quality Focus</div>
            </div>
          </div>
        </div>

        {/* Right Photo Column */}
        <div className="lg:w-5/12 flex justify-center relative">
          <div className="relative">
            {/* Glowing Backdrop Ring */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-[#8245ec] via-[#00f0ff] to-[#ec4899] opacity-40 blur-xl animate-pulse"></div>

            <Tilt
              className="w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 border-4 border-purple-500/80 rounded-full relative z-10 p-1 bg-[#050414]"
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <img
                src={profileImage}
                alt="Atish Kumar Sah"
                className="w-full h-full rounded-full object-cover shadow-[0_0_30px_rgba(130,69,236,0.6)]"
              />
            </Tilt>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
