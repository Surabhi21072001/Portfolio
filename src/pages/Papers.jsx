import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const papers = [
  {
    id: 1,
    title: "Rainfall Prediction Using SARIMA and OpenAI",
    journal: "IEEE Xplore, 2024",
    description:
      "Published a study integrating SARIMA-based rainfall forecasting with OpenAI’s interpretive modeling for climate analytics across Indian regions. Demonstrated enhanced prediction accuracy and transparency for sustainable planning.",
    link: "https://ieeexplore.ieee.org/document/10533971",
  },
  {
    id: 2,
    title: "Voice-to-Text Summarization and Patient Interaction System",
    journal: "IEEE Xplore, 2024",
    description:
      "Developed an NLP-driven framework to convert doctor–patient conversations into structured insights. The research highlights GPT-based summarization models for healthcare documentation.",
    link: "https://ieeexplore.ieee.org/document/10810979",
  },
  {
    id: 3,
    title: "E-Cart using RFID Technology and Automated Checkout",
    journal: "REST Journals, 2024",
    description:
      "IOT-based project which consists of RFID sensors, microcontroller, communication module, and a Web application for inventory management which has reduced power needs. The main objective for designing this prototype is to reduce human efforts by introducing a low cost, easily scalable system for assisting the customers in shopping. ",
    link: "https://restpublisher.com/wp-content/uploads/2024/03/1.-E-Cart-using-RFID-technology-and-Automated-Checkout.pdf",
  },
  {
    id: 4,
    title: "Smart Classroom",
    journal: "GRADIVA Review Journal, 2023",
    description:
      "Created an intelligent classroom that minimizes the need for teachers to carry hardware and maximizes their use of lecture time. The Smart Classroom has the capability to actively monitor and engage teachers in class discussions, even with remote students. The paper highlights the benefits and key technologies underlying this system. The said system uses a single USB drive for uploading the teaching material, and presenting it in the classroom, without having to carry heavy laptops. The system also consists of an app that will allow the professor to roam around the class and still navigate through presentation slides.",
    link: "https://drive.google.com/file/d/1fcgVDAlPgoZfxBN5hzI1LbKQCJDi3npH/view",
  },
];

export default function Papers() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      {/* Gradient heading background (like hero section) */}
      <div className="relative text-center py-16 mb-10 rounded-xl overflow-hidden">
        <img
          src="/assets/hero_bg.png"
          alt="abstract gradient background"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#c94a57] to-[#f17c76] bg-clip-text text-transparent">
            Research & Publications
          </h2>
          <p className="text-slate-600 mt-3">
            A selection of academic work and published research.
          </p>
        </div>
      </div>

      {/* Paper Cards */}
      <div className="flex flex-col gap-6">
        {papers.map((paper, idx) => (
          <motion.div
            key={paper.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group bg-white rounded-xl border border-rose-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col md:flex-row justify-between items-start md:items-center"
          >
            <div className="md:w-4/5">
              <h3 className="text-lg font-semibold text-slate-800">
                {paper.title}
              </h3>
              <p className="text-sm text-rose-600 mt-1">{paper.journal}</p>
              <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                {paper.description}
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <a
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-rose-500 hover:text-rose-600 font-medium transition"
              >
                Read Paper <ArrowUpRight size={18} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
