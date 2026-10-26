import React, { useState } from "react";

export default function Contact() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");

    const formData = new FormData(event.target);
    // Replace with your Web3Forms Access Key from https://web3forms.com/
    formData.append("access_key", "06f65368-a4b7-4a4d-b6a0-c73548e597f8");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully!");
        event.target.reset();
      } else {
        console.error("Error:", data);
        setResult(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 max-w-3xl mx-auto text-white">
      <div className="text-center mb-10">
        <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800">
          Get In Touch
        </span>
        <h2 className="text-4xl font-bold mt-4">Let's Work Together</h2>
        <p className="text-gray-400 mt-2 max-w-xl mx-auto">
          Whether you need a custom WordPress platform, GoHighLevel automation funnel, or a fast React application, feel free to reach out.
        </p>
      </div>

      {/* Form Container */}
      <form
        onSubmit={handleSubmit}
        className="space-y-5 bg-slate-900/60 p-8 rounded-2xl border border-slate-800 shadow-xl backdrop-blur-sm"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1.5">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Your Name"
            className="w-full px-4 py-3 bg-slate-800/80 border border-slate-700/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white placeholder-gray-500 transition duration-200"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="your.email@example.com"
            className="w-full px-4 py-3 bg-slate-800/80 border border-slate-700/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white placeholder-gray-500 transition duration-200"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1.5">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            placeholder="Write your message here..."
            className="w-full px-4 py-3 bg-slate-800/80 border border-slate-700/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white placeholder-gray-500 resize-none transition duration-200"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 px-6 bg-emerald-500 hover:bg-emerald-400 disabled:bg-emerald-800/60 text-slate-950 font-bold rounded-xl transition duration-200 shadow-lg shadow-emerald-500/10 cursor-pointer"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

        {result && (
          <p
            className={`text-center text-sm font-medium mt-4 ${
              result.includes("successfully") ? "text-emerald-400" : "text-rose-400"
            }`}
          >
            {result}
          </p>
        )}
      </form>

      {/* External Links */}
      <div className="flex justify-center items-center space-x-6 mt-10 text-sm text-gray-400">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-emerald-400 transition-colors flex items-center gap-1"
        >
          LinkedIn ↗
        </a>
        <a
          href="https://behance.net"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-emerald-400 transition-colors flex items-center gap-1"
        >
          Behance ↗
        </a>
      </div>
    </section>
  );
}