import React, { useState } from "react";
import { FaPalette, FaRocket, FaTerminal, FaStar } from "react-icons/fa";

const themes = [
  { name: "Cyber Purple", color: "#8245ec", label: "Purple" },
  { name: "Neon Cyan", color: "#00f0ff", label: "Cyan" },
  { name: "Emerald Glow", color: "#10b981", label: "Emerald" },
  { name: "Sunset Pink", color: "#ec4899", label: "Pink" },
];

const ThemeSelector = ({ activeTheme, onThemeChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded Palette Menu */}
      {isOpen && (
        <div className="mb-3 bg-[#0d0922]/95 border border-purple-800/80 backdrop-blur-xl p-3 rounded-2xl shadow-2xl flex flex-col space-y-2 animate-fadeIn">
          <span className="text-[10px] text-gray-400 font-semibold text-center uppercase tracking-wider">
            Accent Mood
          </span>
          {themes.map((theme) => (
            <button
              key={theme.name}
              onClick={() => {
                onThemeChange(theme.color);
                setIsOpen(false);
              }}
              className={`flex items-center space-x-2 px-3 py-1.5 rounded-xl text-xs font-semibold transition ${
                activeTheme === theme.color
                  ? "bg-white/10 text-white border border-white/20"
                  : "text-gray-300 hover:bg-white/5"
              }`}
            >
              <span
                className="w-3 h-3 rounded-full shadow-sm"
                style={{ backgroundColor: theme.color }}
              ></span>
              <span>{theme.name}</span>
            </button>
          ))}
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(130,69,236,0.5)] transition duration-300 transform hover:scale-110 border border-white/20"
        style={{
          background: `linear-gradient(135deg, ${activeTheme}, #3b0764)`,
        }}
        title="Customize Accent Color"
      >
        <FaPalette className="text-lg animate-spin-slow" />
      </button>
    </div>
  );
};

export default ThemeSelector;
