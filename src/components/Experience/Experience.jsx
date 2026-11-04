import React from "react";
import { experiences } from "../../constants";
import { FaBriefcase, FaBuilding, FaCalendarAlt } from "react-icons/fa";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 px-[7vw] md:px-[7vw] lg:px-[16vw] font-sans relative z-10"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center space-x-2 bg-purple-900/40 border border-purple-500/40 text-purple-300 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
          <FaBriefcase />
          <span>Professional Background</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">WORK EXPERIENCE</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
          A timeline of my software engineering and tech roles in various companies.
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Center Vertical Glow Line */}
        <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-0.5 bg-gradient-to-b from-[#8245ec] via-purple-600 to-transparent h-full z-0"></div>

        {/* Experience Entries */}
        <div className="space-y-12 relative z-10">
          {experiences.map((exp, index) => (
            <div
              key={exp.id || index}
              className={`flex flex-col sm:flex-row items-start ${
                index % 2 === 0 ? "sm:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Node Icon */}
              <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#0b081e] border-2 border-[#8245ec] shadow-[0_0_15px_rgba(130,69,236,0.6)] flex items-center justify-center text-purple-400 z-10">
                <FaBuilding size={14} />
              </div>

              {/* Content Card */}
              <div
                className={`w-full sm:w-[45%] ml-12 sm:ml-0 ${
                  index % 2 === 0 ? "sm:mr-auto sm:pr-8" : "sm:ml-auto sm:pl-8"
                }`}
              >
                <div className="bg-[#0b081e]/90 border border-purple-900/60 hover:border-purple-500/70 p-6 rounded-2xl shadow-[0_0_25px_rgba(130,69,236,0.15)] transition duration-300 hover:-translate-y-1">
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={exp.img}
                      alt={exp.company}
                      className="w-12 h-12 rounded-xl object-cover border border-purple-500/40 bg-white"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-white leading-tight">
                        {exp.role}
                      </h3>
                      <h4 className="text-sm font-semibold text-purple-400">
                        {exp.company}
                      </h4>
                      <div className="flex items-center space-x-1 text-xs text-gray-400 mt-1">
                        <FaCalendarAlt size={10} className="text-purple-400" />
                        <span>{exp.date}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {exp.desc}
                  </p>

                  <div>
                    <span className="text-[11px] font-bold text-purple-300 uppercase tracking-wider block mb-2">
                      Key Competencies
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="bg-purple-950/80 text-purple-300 text-[11px] font-semibold px-2.5 py-1 rounded-md border border-purple-800/50"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
