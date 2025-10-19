import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
  const workExperience = [
    {
      title: "Associate Consultant",
      company: "Ernst and Young (EY)",
      location: "Mumbai, India",
      duration: "Oct 2024 – July 2025",
      points: [
        "Collaborating with clients like Adani to develop a sales web application for the cement industry.",
        "Managing backend development, API creation, and database operations using Node.js and MSSQL.",
        "Creating dynamic APIs to enhance performance and scalability.",
        "Delivering Gen AI solutions for client efficiency improvements.",
        "Working on data migration, testing, and bug resolution using Azure DevOps and APIM.",
        "Monitoring production and optimizing CI/CD pipelines for smooth deployments.",
      ],
    },
    {
      title: "Senior Analyst",
      company: "Ernst and Young (EY)",
      location: "Mumbai, India",
      duration: "July 2023 – Sep 2024",
      points: [
        "Developed generative AI solutions for clients like Tata Play, integrating chatbots with visual analytics for sales prediction.",
        "Built a data science copilot using OpenAI and PandasAI for automated financial analysis.",
        "Authored detailed system documentation and workflows for AI integration in finance.",
        "Created OCR tools to extract and summarize official documents (Aadhar, PAN) for automation.",
      ],
    },
  ];

  const internships = [
    {
      title: "Full Stack Web Developer Intern",
      company: "ShapeAI",
      location: "Mumbai, India",
      duration: "Aug 2021 – Dec 2021",
      points: [
        "Developed multiple MERN stack projects featuring CRUD operations and React frontends.",
        "Handled deployment and Docker setup for production-ready web apps.",
        "Designed visually appealing, user-friendly interfaces.",
        "Ranked among top interns out of 150 for project excellence and consistency.",
      ],
    },
    {
      title: "IoT Intern",
      company: "Tinkerer’s Lab",
      location: "India",
      duration: "May 2021 – July 2021",
      points: [
        "Built an IoT-based noise pollution monitoring system using sensors and microcontrollers.",
        "Integrated Wi-Fi modules with Firebase for real-time data collection.",
        "Designed a Web UI to visualize live noise data for analysis and mitigation.",
      ],
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      {/* Gradient Heading */}
      <div className="relative text-center py-16 mb-12 rounded-xl overflow-hidden">
        <img
          src="/assets/hero_bg.png"
          alt="abstract background"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#c94a57] to-[#f17c76] bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-slate-600 mt-3">Professional journey and internships</p>
        </div>
      </div>

      {/* Work Experience Timeline */}
      <div className="relative border-l-2 border-rose-200 pl-6 space-y-12">
        {workExperience.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15 }}
            className="relative pl-4"
          >
            <div className="absolute -left-[13px] top-2 bg-rose-500 w-6 h-6 rounded-full shadow-md"></div>
            <h3 className="text-xl font-semibold text-slate-800">{exp.title}</h3>
            <p className="text-rose-600 font-medium">{exp.company}</p>
            <div className="flex items-center text-sm text-slate-500 mt-1">
              <Calendar size={14} className="mr-2" /> {exp.duration}
            </div>
            <ul className="mt-3 text-slate-600 space-y-2 text-sm list-disc list-inside">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Internships Section */}
      <div className="mt-16">
        <h3 className="text-3xl font-bold bg-gradient-to-r from-[#c94a57] to-[#f17c76] bg-clip-text text-transparent mb-8">
          Internships
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {internships.map((intern, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl border border-rose-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <Briefcase size={22} className="text-rose-500" />
                <h4 className="text-lg font-semibold text-slate-800">
                  {intern.title}
                </h4>
              </div>
              <p className="text-sm text-rose-600 font-medium">
                {intern.company} – {intern.location}
              </p>
              <p className="text-sm text-slate-500 mt-1">{intern.duration}</p>
              <ul className="mt-3 text-slate-600 space-y-2 text-sm list-disc list-inside">
                {intern.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
