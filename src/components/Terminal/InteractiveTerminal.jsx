import React, { useState, useRef, useEffect } from "react";
import { FaTerminal, FaPlay, FaTrash, FaExternalLinkAlt } from "react-icons/fa";

const InteractiveTerminal = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    {
      type: "system",
      text: "⚡ Welcome to Atish's Interactive Developer Terminal v2.0",
    },
    {
      type: "system",
      text: "Type 'help' or click any quick command chip below to explore.",
    },
  ]);
  const [isMatrixMode, setIsMatrixMode] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const commandList = [
    { cmd: "help", desc: "List available commands" },
    { cmd: "whoami", desc: "Short developer bio & profile summary" },
    { cmd: "skills", desc: "Summary of technical tech stack" },
    { cmd: "projects", desc: "Featured software projects" },
    { cmd: "experience", desc: "Work history & developer roles" },
    { cmd: "education", desc: "Academic degree & qualifications" },
    { cmd: "contact", desc: "Direct email, phone & social handles" },
    { cmd: "hire", desc: "Why hire Atish for your team?" },
    { cmd: "matrix", desc: "Toggle Cyber Matrix digital rain visual" },
    { cmd: "clear", desc: "Clear terminal history" },
  ];

  const handleCommand = (cmdText) => {
    const rawCmd = cmdText.trim().toLowerCase();
    if (!rawCmd) return;

    const newHistory = [...history, { type: "input", text: rawCmd }];

    switch (rawCmd) {
      case "help":
        newHistory.push({
          type: "output",
          text: `AVAILABLE COMMANDS:
-------------------
• help       - Display this assistance menu
• whoami     - View developer profile overview
• skills     - View technical skills & frameworks
• projects   - View key full-stack projects
• experience - View work history & roles
• education  - View B.Tech Computer Science info
• contact    - Get email, phone & social links
• hire       - Instant pitch for recruiters
• matrix     - Toggle matrix effect
• clear      - Clear terminal screen`,
        });
        break;

      case "whoami":
      case "bio":
      case "about":
        newHistory.push({
          type: "output",
          text: `⚡ ATISH KUMAR SAH
------------------
Role      : Full-Stack Developer & Software Engineer
Education : B.Tech in CSE @ Parul University (CGPA: 8.0/10)
Location  : Vadodara, Gujarat (India) | Janakpur (Nepal)
Core Stack: MERN (MongoDB, Express, React, Node) + Python / Flask
Status    : 🟢 Open for Full-Time Software Developer Roles & Internships`,
        });
        break;

      case "skills":
        newHistory.push({
          type: "output",
          text: `🛠️ TECHNICAL SKILLS MATRIX:
----------------------------
[Frontend]  : React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Bootstrap, Redux
[Backend]   : Node.js, Express.js, Flask, Python, Java
[Database]  : MongoDB, MySQL
[Testing]   : Manual Testing, Test Case Design, Bug Tracking, SDLC, STLC
[Tools]     : Git, GitHub, VS Code, Postman, Vercel`,
        });
        break;

      case "projects":
        newHistory.push({
          type: "output",
          text: `🚀 FEATURED PROJECTS:
---------------------
1. BookStore App (MERN Stack)
   - Online bookstore with cart, checkout, MongoDB backend & React frontend.
   - Code: https://github.com/sahatish/BookStoreApp

2. AgriTech Solutions (Python, Flask, React/Bootstrap, Machine Learning)
   - Smart farming marketplace, crop diagnosis, equipment booking.
   - Code: https://github.com/sahatish/AgriTech_solutions

3. Event Management System (Full-Stack UI/UX Developer @ Swasthya Chetna)
   - Browse, book & manage corporate/medical events online.

4. Hotel Booking App (Django, HTML/CSS, Searching & Sorting Algorithms)
   - Room search, luxury booking portal.
   - Code: https://github.com/sahatish/Hotel_booking_app

5. Weather App (React.js, OpenWeather API)
   - Real-time weather reporting app. Live on Vercel!`,
        });
        break;

      case "experience":
        newHistory.push({
          type: "output",
          text: `💼 WORK EXPERIENCE:
--------------------
1. UI/UX Developer @ Swasthya Chetna Pvt. Ltd. (2026)
   - Built full-stack Event Management Booking System using React.js, Tailwind CSS, Flask & MongoDB.
2. Digital Marketing @ Spodenet (2022)
   - Handled digital product campaigns & communication strategy.`,
        });
        break;

      case "education":
        newHistory.push({
          type: "output",
          text: `🎓 EDUCATION BACKGROUND:
------------------------
• B.Tech in Computer Science & Engineering (2022 - 2026)
  Parul University (PU), Vadodara, Gujarat India | CGPA: 8.0
  Coursework: Data Structures, Algorithms, DBMS, OOPs, Web Tech, Software Engineering.

• Grade XII (PCM Science) (2019 - 2021)
  Mithila Institute of Technology, Nepal | Score: 81%`,
        });
        break;

      case "contact":
        newHistory.push({
          type: "output",
          text: `📬 GET IN TOUCH WITH ATISH:
--------------------------
Email    : sahatish1662@gmail.com
LinkedIn : https://www.linkedin.com/in/atish-sah-8a1a9b260/
GitHub   : https://github.com/sahatish
Location : Vadodara, Gujarat, India`,
        });
        break;

      case "hire":
        newHistory.push({
          type: "output",
          text: `🌟 WHY HIRE ATISH?
-------------------
✔️ Strong Computer Science Foundation (DSA, OOP, System Design, Databases).
✔️ Full-Stack capability across React, Node, Python, Flask, MongoDB & MySQL.
✔️ Clean Code mindset with Manual Testing & Software Quality Assurance skills.
✔️ High energy, quick learner, and ready to relocate or work remotely immediately!

👉 Send an email now: sahatish1662@gmail.com`,
        });
        break;

      case "matrix":
        setIsMatrixMode((prev) => !prev);
        newHistory.push({
          type: "output",
          text: `🟢 Matrix Cyber Mode toggled! ${!isMatrixMode ? "ON 🟢" : "OFF ⚪"}`,
        });
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      default:
        newHistory.push({
          type: "output",
          text: `❌ Command '${rawCmd}' not recognized. Type 'help' to see all valid commands.`,
        });
        break;
    }

    setHistory(newHistory);
    setInput("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCommand(input);
  };

  return (
    <section id="terminal" className="py-16 px-[7vw] lg:px-[18vw] font-mono">
      <div className="text-center mb-8">
        <div className="inline-flex items-center space-x-2 bg-purple-900/40 border border-purple-500/40 text-purple-300 px-4 py-1.5 rounded-full text-sm mb-3 backdrop-blur-md">
          <FaTerminal className="text-purple-400 animate-pulse" />
          <span>Interactive Developer CLI</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Terminal Console
        </h2>
        <p className="text-gray-400 text-sm mt-2 max-w-xl mx-auto">
          Type commands or click prompt chips below to query Atish's interactive portfolio directly.
        </p>
      </div>

      {/* Quick Command Chips */}
      <div className="flex flex-wrap justify-center gap-2 mb-6 max-w-4xl mx-auto">
        {commandList.map((item) => (
          <button
            key={item.cmd}
            onClick={() => handleCommand(item.cmd)}
            className="text-xs bg-[#13112b] hover:bg-[#8245ec] text-purple-300 hover:text-white border border-purple-800/60 rounded-lg px-3 py-1.5 transition duration-200 flex items-center space-x-1 shadow-sm"
          >
            <span className="text-purple-400">$</span>
            <span>{item.cmd}</span>
          </button>
        ))}
      </div>

      {/* Terminal Window Box */}
      <div
        className={`w-full max-w-4xl mx-auto rounded-xl overflow-hidden border shadow-[0_0_35px_rgba(130,69,236,0.25)] transition-all duration-300 ${
          isMatrixMode
            ? "bg-black border-green-500 shadow-[0_0_40px_rgba(34,197,94,0.3)] text-green-400"
            : "bg-[#09071c]/95 border-purple-800/60 backdrop-blur-xl text-gray-200"
        }`}
      >
        {/* Title Bar */}
        <div className="bg-[#120d2e] px-4 py-3 border-b border-purple-900/50 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            <span className="text-xs text-purple-300 ml-2 font-mono hidden sm:inline">
              atish@dev-portfolio:~ (bash)
            </span>
          </div>

          <div className="flex items-center space-x-3 text-xs text-gray-400">
            <button
              onClick={() => setIsMatrixMode(!isMatrixMode)}
              className="hover:text-green-400 transition"
              title="Toggle Matrix mode"
            >
              [Matrix Mode]
            </button>
            <button
              onClick={() => handleCommand("clear")}
              className="hover:text-red-400 flex items-center space-x-1 transition"
              title="Clear terminal"
            >
              <FaTrash size={11} />
              <span>Clear</span>
            </button>
          </div>
        </div>

        {/* Console Body */}
        <div className="p-4 sm:p-6 min-h-[300px] max-h-[420px] overflow-y-auto font-mono text-sm leading-relaxed space-y-3">
          {history.map((item, idx) => (
            <div key={idx}>
              {item.type === "input" && (
                <div className="flex items-center space-x-2 text-purple-400 font-semibold">
                  <span>atish@portfolio:~$</span>
                  <span className="text-white">{item.text}</span>
                </div>
              )}
              {item.type === "system" && (
                <div className="text-purple-300 italic opacity-90">
                  {item.text}
                </div>
              )}
              {item.type === "output" && (
                <pre
                  className={`whitespace-pre-wrap font-mono mt-1 ${
                    isMatrixMode ? "text-green-400" : "text-gray-300"
                  }`}
                >
                  {item.text}
                </pre>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#0f0b26] border-t border-purple-900/50 p-3 flex items-center space-x-2"
        >
          <span className="text-purple-400 font-bold">$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'help' or command..."
            className="flex-1 bg-transparent text-white focus:outline-none font-mono text-sm placeholder-gray-500"
          />
          <button
            type="submit"
            className="bg-[#8245ec] hover:bg-purple-600 text-white p-2 rounded-lg transition"
          >
            <FaPlay size={12} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default InteractiveTerminal;
