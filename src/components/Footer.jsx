import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-100 bg-gradient-to-r from-white via-rose-50/40 to-white backdrop-blur-sm py-10 text-center">
      <div className="flex justify-center gap-8 mb-4 text-slate-600">
        <a
          href="https://www.linkedin.com/in/surabhi-byju-9b062322b/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-rose-500 transition"
          title="LinkedIn"
        >
          <FaLinkedin size={38} />
        </a>

        <a
          href="https://github.com/Surabhi21072001"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-rose-500 transition"
          title="GitHub"
        >
          <FaGithub size={38} />
        </a>

        <a
          href="mailto:ssurabhi@andrew.cmu.edu"
          className="hover:text-rose-500 transition"
          title="Email"
        >
          <FaEnvelope size={38} />
        </a>
      </div>
    </footer>
  );
}
