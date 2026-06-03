import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Trust Layer AI",
    subtitle: "AI Trust Infrastructure, Responsible AI",
    description:
      "Built a multi-layer AI trust infrastructure featuring prompt redaction, trust analysis, consent management, and creator attribution to improve transparency and responsible AI usage. Developed a Trust Engine combining rule-based detection, semantic similarity analysis, claim classification, and contextual trust scoring to identify bias, uncertainty, and verifiability risks in AI-generated content. Designed a Consent & Attribution Framework for preventing non-consensual deepfakes and protecting user identities.",
    Github: "https://github.com/Surabhi21072001/trust-layer-ai",
  },
  {
    id: 2,
    title: "AI Financial Analyst",
    subtitle: "Agentic AI, LangChain, Multi-Agent Systems",
    description:
      "Built an agentic AI financial analysis system using LangChain and Python to parse balance sheets and generate financial reports. Designed a planner–analyst multi-agent architecture that inspects datasets, computes financial ratios, detects risks, and performs multi-year trend analysis. Developed a Streamlit dashboard with automated financial charts, a financial health scoring model, and AI-generated investment recommendations for decision support.",
    Github: "https://github.com/Surabhi21072001/AI-Financial-Analyst",
  },
  {
    id: 3,
    title: "FoodBridge AI",
    subtitle: "🥇 AWS Reachback Kiro Hackathon Winner · Agentic AI",
    description:
      "Won 1st Place Overall at the AWS Reachback Kiro Hackathon for building FoodBridge AI — an agentic AI system designed to help students access available food on campus in real time. Built using spec-driven development with Kiro, the platform automates food discovery, reservations, and pantry pickups through natural language interactions.",
    Github: "https://github.com/Surabhi21072001/FoodBridge-Main",
  },
  {
    id: 4,
    title: "Rainfall Prediction using SARIMA and OpenAI",
    subtitle: "Time-Series Analysis, Forecasting",
    description:
      "Developed a rainfall forecasting model using SARIMA for accurate time-series prediction across Indian regions. Integrated OpenAI for interactive data exploration and interpretability, highlighting key drivers of rainfall variability. Published findings in an IEEE paper demonstrating the model's potential for scalable climate planning.",
    Github: "https://github.com/Surabhi21072001/Rainfall-prediction-using-SARIMA-and-Openai",
  },
  {
    id: 5,
    title: "Voice-to-Text Summarization and Patient Interaction System",
    subtitle: "Generative AI, Chatbot Development",
    description:
      "Built an AI-powered medical assistant using NLP and OpenAI language models for voice-to-text summarization and structured insight extraction. Developed a Python backend with API integration and connected it to a Dialogflow chatbot for appointment scheduling and reminders. Published research in IEEE highlighting advancements in intelligent healthcare communication.",
    Github: "https://github.com/Surabhi21072001/health-voice-to-text-transcribe",
  },
  {
    id: 6,
    title: "Loan Approval Prediction System with Interactive Dashboard",
    subtitle: "Data Analysis · Data Visualization",
    description:
      "Built a machine learning system to predict loan approvals using Logistic Regression, Random Forest, and XGBoost. Performed data analysis and feature engineering to identify key approval factors, and developed an interactive Plotly Dash dashboard to visualize predictions and provide actionable insights for decision-makers.",
    Github:
      "https://github.com/Surabhi21072001/Loan-Approval-Prediction-System-with-Interactive-Dashboard-",
  },
  {
    id: 7,
    title: "AI-Powered Image Enhancement System",
    subtitle: "AI Image Enhancement, Flask",
    description:
      "Built a Flask-based web application for automated portrait and skin enhancement using the Enhancor AI API and Cloudinary. Enabled users to upload and enhance images with adjustable parameters for realism, depth, and facial detailing. Integrated real-time status tracking, batch processing, and automated result downloads to deliver a complete end-to-end AI image enhancement workflow.",
    Github: "https://github.com/Surabhi21072001/enhancor",
  },
  {
    id: 8,
    title: "CMU Transportation Comparison Web App",
    subtitle: "Web Scrapping",
    description:
      "Developed a Python-based web application using Streamlit to help Carnegie Mellon University students, faculty, and staff compare transportation options. The platform integrates CMU shuttle schedules, Port Authority public transit data (Google Maps API), and Uber API for real-time pricing and travel time estimates. Features include live shuttle tracking, cost and time comparisons, and an intuitive, responsive interface for seamless trip planning.",
    Github: "https://github.com/sanathmahesh/DFP-TeamBrown",
  },
  {
    id: 9,
    title: "Full Stack Development Projects",
    subtitle: "MERN Stack, API Integration, Deployment",
    description:
      "A collection of end-to-end web applications built using the MERN stack (MongoDB, Express.js, React.js, Node.js). These projects include RESTful APIs, dynamic dashboards, and cloud-hosted platforms focused on usability and performance. Deployed using Firebase and Azure, with CI/CD automation for smooth delivery.",
    Github: "https://github.com/SurabhiByju21",
  },
];

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      {/* Hero-like heading section */}
      <div className="relative flex flex-col items-center justify-center text-center py-20 mb-16 overflow-hidden rounded-2xl">
        <div className="absolute inset-0">
          <img
            src="/assets/hero_bg.png"
            alt="abstract gradient background"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-[#ffe8e6]/60 to-[#fffafa]/80" />
        </div>
        <h3 className="relative text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#c94a57] to-[#f17c76] bg-clip-text text-transparent z-10">
          Selected Works
        </h3>
      </div>

      {/* Project cards */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((p, idx) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group bg-white rounded-2xl shadow-sm border border-rose-100 hover:-translate-y-1 hover:shadow-lg hover:border-rose-200 transition-all duration-300 overflow-hidden flex flex-col"
          >
            <div className="p-5 flex flex-col flex-grow">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold text-slate-800">
                  {p.title}
                </h4>
                {p.Github && p.Github !== "#" && (
                  <a
                    href={p.Github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-rose-500 transition"
                    title="Go to project"
                  >
                    <ArrowUpRight size={20} />
                  </a>
                )}
              </div>
              <p className="text-sm text-rose-600 mt-1">{p.subtitle}</p>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed flex-grow">
                {p.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
