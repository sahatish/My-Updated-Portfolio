import React from "react";
import { education } from "../../constants";
import { FaGraduationCap, FaAward, FaCalendarAlt } from "react-icons/fa";

const Education = () => {
  return (
    <section
      id="education"
      className="py-20 px-[7vw] md:px-[7vw] lg:px-[16vw] font-sans relative z-10"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center space-x-2 bg-purple-900/40 border border-purple-500/40 text-purple-300 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
          <FaGraduationCap />
          <span>Academic Foundation</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
          Academic excellence, software engineering coursework, and computer science fundamentals.
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Center Line */}
        <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-0.5 bg-gradient-to-b from-purple-600 via-pink-600 to-transparent h-full z-0"></div>

        {/* Education Entries */}
        <div className="space-y-12 relative z-10">
          {education.map((edu, index) => (
            <div
              key={edu.id || index}
              className={`flex flex-col sm:flex-row items-start ${
                index % 2 === 0 ? "" : "sm:flex-row-reverse"
              }`}
            >
              {/* Timeline Icon */}
              <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#0b081e] border-2 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.6)] flex items-center justify-center text-purple-300 z-10">
                <FaGraduationCap size={16} />
              </div>

              {/* Card Container */}
              <div
                className={`w-full sm:w-[45%] ml-12 sm:ml-0 ${
                  index % 2 === 0 ? "sm:mr-auto sm:pr-8" : "sm:ml-auto sm:pl-8"
                }`}
              >
                <div className="bg-[#0b081e]/90 border border-purple-900/60 hover:border-purple-500/70 p-6 rounded-2xl shadow-[0_0_25px_rgba(130,69,236,0.15)] transition duration-300 hover:-translate-y-1">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <img
                        src={edu.img}
                        alt={edu.school}
                        className="w-12 h-12 rounded-xl object-cover border border-purple-500/40 bg-white"
                      />
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                          {edu.degree}
                        </h3>
                        <h4 className="text-xs sm:text-sm font-semibold text-purple-300 mt-0.5">
                          {edu.school}
                        </h4>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4 bg-purple-950/40 border border-purple-900/50 p-2.5 rounded-xl">
                    <div className="flex items-center space-x-1 text-xs text-gray-300">
                      <FaCalendarAlt className="text-purple-400" />
                      <span>{edu.date}</span>
                    </div>

                    <div className="flex items-center space-x-1 text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 px-2.5 py-0.5 rounded-full">
                      <FaAward />
                      <span>Grade: {edu.grade}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                    {edu.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
