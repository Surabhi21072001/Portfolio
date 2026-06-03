import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Code, Mic, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
     <section className="relative flex flex-col items-center justify-center text-center py-28 px-6 overflow-hidden">
        {/* 🔹 Background Image Layer */}
        <div className="absolute inset-0">
          <img
          src="/assets/hero_bg.png"
          alt="abstract gradient background"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-[#ffe8e6]/60 to-[#fffafa]/90" />
        </div>

        {/* 🔹 Foreground Content */}
        <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#c94a57] to-[#f17c76] bg-clip-text text-transparent z-10 leading-tight pb-2"
            >
            Surabhi Byju
        </motion.h1>


        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative mt-4 text-lg text-slate-600 font-medium z-10"
        >
          MS Information Systems Management @CMU • Ex-EY Associate Consultant
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="relative mt-6 text-2xl md:text-3xl font-semibold bg-gradient-to-r from-rose-600 to-rose-400 bg-clip-text text-transparent tracking-tight z-10"
        >
          <TypeAnimation
            sequence={[
              "Software Development",
              2000,
              "",
              "Data Science",
              2000,
              "",
              "Automation",
              2000,
              "",
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            deletionSpeed={60}
            speed={70}
          />
        </motion.div>

       <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="relative z-10 mt-10"
            >
            <Link
                to="/projects"
                className="bg-[#f05a66] hover:bg-[#e14b58] text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
            >
                My Projects →
            </Link>
        </motion.div>
      </section>

      {/* About Section */}
      {/* About Section – with image */}
<section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
  {/* Left: Image */}
  <div className="flex justify-center">
    <div className="relative rounded-2xl overflow-hidden shadow-sm border border-rose-100 bg-gradient-to-b from-[#fff4f3] to-[#fff9f9] w-80 h-80">
      <img
        src="/assets/Gemini_Generated.png" // 👈 replace with your actual image path (e.g., /assets/surabhi.jpg)
        alt="Surabhi Byju portrait"
        className="w-full h-full object-cover object-center rounded-2xl"
      />
    </div>
  </div>

  {/* Right: Personal intro */}
  <div className="text-left">
    <h2 className="text-3xl font-bold bg-gradient-to-r from-[#c94a57] to-[#f17c76] bg-clip-text text-transparent mb-4">
      Hello,
    </h2>

    <p className="text-slate-600 leading-relaxed mb-4">
      I’m <span className="font-semibold text-slate-800">Surabhi</span> — a
      technologist who enjoys solving meaningful problems with creativity,
      structure, and a bit of experimentation.
    </p>

    <p className="text-slate-600 leading-relaxed mb-4">
      My journey spans software engineering, automation, and data-driven innovation. I love exploring how technology can enhance human experiences — whether through storytelling, design, or systems thinking.
    </p>

    <p className="text-slate-600 leading-relaxed mb-8">
      Today, I’m focused on bridging data, AI, and human-centered design — creating systems that don’t just automate effort, but amplify it. AI and I work hand in hand… though only one of us needs caffeine to function ☕️.
    </p>
  </div>
</section>


    </>
  );
}
