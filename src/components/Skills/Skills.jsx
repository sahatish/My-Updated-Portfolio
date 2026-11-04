import React, { useState } from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";
import { FaSearch, FaLayerGroup, FaCheckCircle } from "react-icons/fa";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", ...SkillsInfo.map((cat) => cat.title)];

  // Filter skills based on category and search query
  const filteredCategories = SkillsInfo.map((cat) => {
    if (activeTab !== "All" && cat.title !== activeTab) return null;

    const filteredSkills = cat.skills.filter((skill) =>
      skill.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (filteredSkills.length === 0) return null;

    return {
      ...cat,
      skills: filteredSkills,
    };
  }).filter(Boolean);

  return (
    <section
      id="skills"
      className="py-20 px-[7vw] md:px-[7vw] lg:px-[16vw] font-sans relative z-10"
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center space-x-2 bg-purple-900/40 border border-purple-500/40 text-purple-300 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
          <FaLayerGroup />
          <span>Technical Expertise</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          SKILLS & TECHNOLOGIES
        </h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
          A comprehensive suite of technologies, frameworks, and engineering tools I utilize to craft production-ready software solutions.
        </p>
      </div>

      {/* Filter Tabs & Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 max-w-5xl mx-auto">
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? "bg-[#8245ec] text-white shadow-[0_0_15px_rgba(130,69,236,0.5)] scale-105"
                  : "bg-[#0d0922]/80 text-gray-400 hover:text-white border border-purple-900/40 hover:border-purple-600/50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search Input Box */}
        <div className="relative w-full md:w-64">
          <FaSearch className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
          <input
            type="text"
            placeholder="Search skills (e.g. React)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#0d0922]/90 border border-purple-900/60 text-white placeholder-gray-500 text-xs sm:text-sm rounded-xl pl-9 pr-4 py-2 focus:outline-none focus:border-purple-500"
          />
        </div>
      </div>

      {/* Skills Display Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category) => (
            <div
              key={category.title}
              className="bg-[#0b081e]/90 backdrop-blur-md p-6 rounded-2xl border border-purple-900/50 shadow-[0_0_20px_rgba(130,69,236,0.15)] hover:border-purple-600/60 transition duration-300"
            >
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-purple-900/40">
                <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#8245ec] inline-block"></span>
                  <span>{category.title}</span>
                </h3>
                <span className="text-xs text-purple-300 font-semibold bg-purple-900/40 px-2.5 py-1 rounded-full border border-purple-700/50">
                  {category.skills.length} Skills
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {category.skills.map((skill) => (
                  <Tilt
                    key={skill.name}
                    tiltMaxAngleX={12}
                    tiltMaxAngleY={12}
                    perspective={800}
                    scale={1.03}
                    transitionSpeed={600}
                  >
                    <div className="flex items-center space-x-2.5 bg-[#120e2e]/80 border border-purple-900/60 hover:border-purple-500/80 rounded-xl p-2.5 transition duration-200 shadow-sm hover:shadow-[0_0_12px_rgba(130,69,236,0.4)] group">
                      <img
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        className="w-7 h-7 object-contain group-hover:scale-110 transition-transform duration-200"
                      />
                      <span className="text-xs sm:text-sm text-gray-200 font-medium truncate">
                        {skill.name}
                      </span>
                    </div>
                  </Tilt>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-2 text-center py-12 bg-[#0b081e]/80 rounded-2xl border border-purple-900/40">
            <p className="text-gray-400">No matching skills found for "{searchQuery}".</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
