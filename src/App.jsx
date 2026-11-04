import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import CanvasParticles from "./components/Background/CanvasParticles";
import ThemeSelector from "./components/Theme/ThemeSelector";
import BlurBlob from "./BlurBlob";

const App = () => {
  const [themeColor, setThemeColor] = useState("#8245ec");

  return (
    <div className="bg-[#050414] text-white min-h-screen relative overflow-x-hidden selection:bg-purple-600 selection:text-white">
      {/* Interactive Background Particle Mesh */}
      <CanvasParticles themeColor={themeColor} />

      {/* Decorative Glow Blobs */}
      <BlurBlob position={{ top: "20%", left: "15%" }} size={{ width: "35%", height: "35%" }} />
      <BlurBlob position={{ top: "60%", left: "85%" }} size={{ width: "30%", height: "35%" }} />
      <BlurBlob position={{ top: "85%", left: "20%" }} size={{ width: "25%", height: "30%" }} />

      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 pointer-events-none bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0"></div>

      {/* Dynamic Theme Color Picker */}
      <ThemeSelector activeTheme={themeColor} onThemeChange={setThemeColor} />

      {/* Main Content Sections */}
      <div className="relative z-10 pt-16 sm:pt-20">
        <Navbar />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
