import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    {
      title: "Programming Languages",
      items: ["Python", "JavaScript", "SQL", "Java", "TypeScript"],
    },
    {
      title: "Web and API Development",
      items: ["REST APIs", ".NET (ASP.NET Core)", "C#", "Flask", "MERN Stack (React.js, Node.js, Express, MongoDB)"],
    },
    {
      title: "Databases",
      items: ["MySQL", "MSSQL", "MongoDB", "Firebase", "Oracle", "Cosmos"],
    },
    {
      title: "Data Science",
      items: [
        "Machine Learning",
        "Predictive Modeling",
        "Generative AI",
        "NLP",
        "Optical Character Recognition (OCR)",
        "OpenCV",
      ],
    },
    {
      title: "Cloud and DevOps",
      items: [
        "AWS (EC2, S3, RDS, Lambda, IAM, CloudWatch, API Gateway, VPC, BedRock, SageMaker)",
        "Azure (Azure DevOps, APIM)",
        "CI/CD Pipelines",
        "Docker",
      ],
    },
    {
      title: "Agentic Systems",
      items: [
        "LangChain",
        "Temporal",
        "CrewAI",
        "Retrieval-Augmented Generation (RAG)",
        "AI Tooling (Replit AI, Kiro, Github Copilot)",
      ],
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      {/* 🔹 Hero-like heading section */}
      <div className="relative flex flex-col items-center justify-center text-center py-20 mb-16 overflow-hidden rounded-2xl">
        {/* Background image layer */}
        <div className="absolute inset-0">
          <img
          src="/assets/hero_bg.png"
          alt="abstract gradient background"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-[#ffe8e6]/60 to-[#fffafa]/80" />
        </div>

        {/* Foreground text */}
        <h2 className="relative text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#c94a57] to-[#f17c76] bg-clip-text text-transparent z-10">
          Skills & Technology
        </h2>
        <p className="relative text-slate-700 mt-4 text-lg max-w-2xl z-10">
          Tools, technologies, and disciplines that help me build, analyze, and create.
        </p>
      </div>

      {/* 🔹 Skill cards below */}
      <div className="flex flex-col gap-8">
        {skills.map((group, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-gradient-to-r from-[#fff7f7] via-[#fff2f2] to-[#fffafa] border border-rose-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 md:p-8"
          >
            <h3 className="text-xl font-semibold text-[#c94a57] mb-3">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {group.items.map((item, subIdx) => (
                <span
                  key={subIdx}
                  className="px-3 py-1.5 bg-white border border-rose-100 text-slate-700 rounded-full text-sm hover:border-rose-300 hover:text-rose-500 transition"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
