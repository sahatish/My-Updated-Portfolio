import React, { useState } from "react";
import { projects } from "../../constants";
import { FaGithub, FaExternalLinkAlt, FaTimes, FaLaptopCode, FaArrowRight, FaArrowLeft, FaChevronRight } from "react-icons/fa";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "MERN Stack", "Python & Flask", "Web Apps"];

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "MERN Stack") {
      return (
        project.tags.includes("React.js") ||
        project.tags.includes("MongoDB") ||
        project.tags.includes("Node.js")
      );
    }
    if (activeCategory === "Python & Flask") {
      return (
        project.tags.includes("Flask") ||
        project.tags.includes("Django") ||
        project.tags.includes("Python")
      );
    }
    if (activeCategory === "Web Apps") {
      return (
        project.tags.includes("Javascript") ||
        project.tags.includes("HTML") ||
        project.tags.includes("HTML5")
      );
    }
    return true;
  });

  const handleNextProject = () => {
    if (!selectedProject) return;
    const currentIndex = projects.findIndex((p) => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % projects.length;
    setSelectedProject(projects[nextIndex]);
  };

  const handlePrevProject = () => {
    if (!selectedProject) return;
    const currentIndex = projects.findIndex((p) => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    setSelectedProject(projects[prevIndex]);
  };

  return (
    <section
      id="work"
      className="py-20 px-[7vw] md:px-[7vw] lg:px-[16vw] font-sans relative z-10"
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center space-x-2 bg-purple-900/40 border border-purple-500/40 text-purple-300 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
          <FaLaptopCode />
          <span>Featured Software Creations</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
          Explore my portfolio of web applications, full-stack systems, and software solutions built with modern tech stacks.
        </p>
      </div>

      {/* Filter Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
              activeCategory === cat
                ? "bg-[#8245ec] text-white shadow-[0_0_15px_rgba(130,69,236,0.5)] scale-105"
                : "bg-[#0d0922]/80 text-gray-400 hover:text-white border border-purple-900/40 hover:border-purple-600/50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="group bg-[#0b081e]/90 border border-purple-900/50 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden cursor-pointer hover:border-purple-500/80 hover:shadow-[0_0_30px_rgba(130,69,236,0.3)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Image Preview Container */}
              <div className="relative overflow-hidden h-48 bg-[#120e2e]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b081e] via-transparent to-transparent opacity-80"></div>
                <div className="absolute top-3 right-3 bg-purple-900/80 text-purple-200 border border-purple-500/50 text-[10px] uppercase font-bold px-2.5 py-1 rounded-full backdrop-blur-md">
                  Click for details
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm mb-4 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-purple-950/80 text-purple-300 text-[11px] font-medium rounded-md px-2 py-0.5 border border-purple-800/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Card Footer */}
            <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-purple-900/30">
              <span className="text-xs text-purple-400 font-semibold group-hover:underline flex items-center space-x-1">
                <span>Explore Project</span>
                <FaChevronRight size={10} />
              </span>

              <div className="flex space-x-3 text-gray-400">
                {project.github && project.github.startsWith("http") && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="hover:text-white transition"
                    title="GitHub Code"
                  >
                    <FaGithub size={16} />
                  </a>
                )}
                {project.webapp && (
                  <a
                    href={project.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="hover:text-purple-400 transition"
                    title="Live App"
                  >
                    <FaExternalLinkAlt size={14} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fadeIn">
          <div className="bg-[#0c0922] border border-purple-600/60 rounded-2xl shadow-[0_0_50px_rgba(130,69,236,0.4)] lg:w-full w-[95%] max-w-3xl overflow-hidden relative text-gray-200">
            {/* Modal Header Bar */}
            <div className="flex items-center justify-between p-4 border-b border-purple-900/60 bg-[#120d2e]">
              <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-purple-500 animate-ping"></span>
                <span>{selectedProject.title}</span>
              </h3>
              <div className="flex items-center space-x-2">
                <button
                  onClick={handlePrevProject}
                  className="p-2 text-gray-400 hover:text-white bg-purple-900/40 rounded-lg border border-purple-800/50"
                  title="Previous Project"
                >
                  <FaArrowLeft size={12} />
                </button>
                <button
                  onClick={handleNextProject}
                  className="p-2 text-gray-400 hover:text-white bg-purple-900/40 rounded-lg border border-purple-800/50"
                  title="Next Project"
                >
                  <FaArrowRight size={12} />
                </button>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 text-gray-400 hover:text-white bg-red-900/30 rounded-lg border border-red-800/50 ml-2"
                  title="Close Modal"
                >
                  <FaTimes size={14} />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 max-h-[80vh] overflow-y-auto space-y-6">
              {/* Main Image */}
              <div className="rounded-xl overflow-hidden border border-purple-900/60 bg-[#120e2e]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full max-h-72 object-contain bg-black/40 p-2"
                />
              </div>

              {/* Description */}
              <div>
                <h4 className="text-xs uppercase font-semibold text-purple-400 tracking-wider mb-2">
                  Project Overview
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Tech Stack Pills */}
              <div>
                <h4 className="text-xs uppercase font-semibold text-purple-400 tracking-wider mb-2">
                  Technologies Utilized
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-purple-950 text-purple-300 text-xs font-semibold px-3 py-1 rounded-lg border border-purple-800/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4 border-t border-purple-900/40">
                {selectedProject.github && selectedProject.github.startsWith("http") ? (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2.5 px-4 rounded-xl transition border border-gray-600 text-sm"
                  >
                    <FaGithub />
                    <span>View Repository</span>
                  </a>
                ) : (
                  <div className="flex-1 bg-purple-950/40 border border-purple-900/60 p-2.5 rounded-xl text-xs text-purple-300 italic text-center">
                    {selectedProject.github}
                  </div>
                )}

                {selectedProject.webapp && (
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center space-x-2 bg-[#8245ec] hover:bg-purple-600 text-white font-semibold py-2.5 px-4 rounded-xl transition shadow-[0_0_15px_rgba(130,69,236,0.5)] text-sm"
                  >
                    <FaExternalLinkAlt />
                    <span>Launch Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
