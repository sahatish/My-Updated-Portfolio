import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEnvelope, FaLinkedin, FaGithub, FaCopy, FaCheck, FaPaperPlane, FaMapMarkerAlt, FaComments } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const emailAddress = "sahatish1662@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    toast.success("Email copied to clipboard! 📋", {
      position: "top-right",
      autoClose: 2000,
      theme: "dark",
    });
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_va7ewu2",
        "template_i0rgaun",
        form.current,
        "zrKTexD9j91KhF5vx"
      )
      .then(
        () => {
          setIsSubmitting(false);
          form.current.reset();
          toast.success("Message sent successfully! 🚀 Atish will reply soon.", {
            position: "top-right",
            autoClose: 4000,
            theme: "dark",
          });
        },
        (error) => {
          setIsSubmitting(false);
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please email directly.", {
            position: "top-right",
            autoClose: 4000,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-20 px-[7vw] md:px-[7vw] lg:px-[16vw] font-sans relative z-10"
    >
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center space-x-2 bg-purple-900/40 border border-purple-500/40 text-purple-300 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
          <FaComments />
          <span>Get In Touch</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">CONTACT ME</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
          Have an open role, software project, or collaboration in mind? I’d love to connect with you!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
        {/* Left Column: Direct Info Cards */}
        <div className="lg:col-span-5 space-y-4">
          {/* Quick Copy Email Card */}
          <div className="bg-[#0b081e]/90 border border-purple-900/60 p-6 rounded-2xl shadow-[0_0_20px_rgba(130,69,236,0.15)] flex flex-col justify-between">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-purple-900/50 border border-purple-500/40 flex items-center justify-center text-purple-400">
                <FaEnvelope size={18} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Direct Email</h4>
                <p className="text-xs text-purple-300">sahatish1662@gmail.com</p>
              </div>
            </div>

            <button
              onClick={handleCopyEmail}
              className="mt-2 w-full inline-flex items-center justify-center space-x-2 bg-purple-950/70 hover:bg-[#8245ec] text-purple-300 hover:text-white border border-purple-800/60 py-2.5 rounded-xl text-xs font-semibold transition duration-200"
            >
              {copiedEmail ? <FaCheck className="text-emerald-400" /> : <FaCopy />}
              <span>{copiedEmail ? "Copied!" : "Copy Email Address"}</span>
            </button>
          </div>

          {/* Social Quick Links */}
          <div className="bg-[#0b081e]/90 border border-purple-900/60 p-6 rounded-2xl shadow-[0_0_20px_rgba(130,69,236,0.15)] space-y-3">
            <h4 className="text-sm font-bold text-white mb-2">Connect Across Platforms</h4>

            <a
              href="https://www.linkedin.com/in/atish-sah-8a1a9b260/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-xl bg-[#120e2e] hover:bg-purple-900/40 border border-purple-900/40 hover:border-purple-500/50 transition text-gray-300 hover:text-white text-xs font-medium"
            >
              <div className="flex items-center space-x-2.5">
                <FaLinkedin className="text-purple-400 text-base" />
                <span>LinkedIn Profile</span>
              </div>
              <span className="text-[10px] bg-purple-950 text-purple-300 px-2 py-0.5 rounded">
                Connect ↗
              </span>
            </a>

            <a
              href="https://github.com/sahatish"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-xl bg-[#120e2e] hover:bg-purple-900/40 border border-purple-900/40 hover:border-purple-500/50 transition text-gray-300 hover:text-white text-xs font-medium"
            >
              <div className="flex items-center space-x-2.5">
                <FaGithub className="text-purple-400 text-base" />
                <span>GitHub Repositories</span>
              </div>
              <span className="text-[10px] bg-purple-950 text-purple-300 px-2 py-0.5 rounded">
                Follow ↗
              </span>
            </a>

            <div className="flex items-center space-x-2.5 p-3 rounded-xl bg-[#120e2e] border border-purple-900/40 text-xs text-gray-300">
              <FaMapMarkerAlt className="text-purple-400 text-base" />
              <span>Location: Vadodara, Gujarat (India) / Nepal</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="lg:col-span-7 bg-[#0b081e]/90 border border-purple-900/60 p-6 sm:p-8 rounded-2xl shadow-[0_0_30px_rgba(130,69,236,0.2)]">
          <h3 className="text-xl font-bold text-white mb-2 flex items-center space-x-2">
            <span>Send a Direct Message</span>
            <span className="text-purple-400">✉️</span>
          </h3>
          <p className="text-xs text-gray-400 mb-6">
            Fill out the form below and it will land directly in Atish's inbox.
          </p>

          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="e.g. John Doe"
                  className="w-full p-3 rounded-xl bg-[#120e2e] text-white border border-purple-900/60 focus:outline-none focus:border-purple-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">
                  Your Email *
                </label>
                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="e.g. john@company.com"
                  className="w-full p-3 rounded-xl bg-[#120e2e] text-white border border-purple-900/60 focus:outline-none focus:border-purple-500 text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">
                Subject *
              </label>
              <input
                type="text"
                name="subject"
                required
                placeholder="e.g. Job Opportunity / Collaboration"
                className="w-full p-3 rounded-xl bg-[#120e2e] text-white border border-purple-900/60 focus:outline-none focus:border-purple-500 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">
                Message *
              </label>
              <textarea
                name="message"
                rows="4"
                required
                placeholder="Hi Atish, we were impressed by your profile..."
                className="w-full p-3 rounded-xl bg-[#120e2e] text-white border border-purple-900/60 focus:outline-none focus:border-purple-500 text-sm"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-3.5 px-6 rounded-xl shadow-[0_0_20px_rgba(130,69,236,0.4)] transition duration-200 flex items-center justify-center space-x-2 text-sm disabled:opacity-50"
            >
              <FaPaperPlane />
              <span>{isSubmitting ? "Sending Message..." : "Send Message"}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
