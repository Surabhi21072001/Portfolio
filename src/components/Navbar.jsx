import React from "react";
import { Link } from "react-router-dom";
import { Sun } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full border-b border-rose-50 bg-gradient-to-r from-[#ffffff] via-[#fff1f1] to-[#ffffff] backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-lg font-semibold text-[#e74a5b] tracking-tight">
        
        </div>
        <nav className="flex items-center gap-8 text-sm text-slate-700 font-medium">
          <Link to="/" className="hover:text-[#e74a5b] transition">Home</Link>
          <Link to="/projects" className="hover:text-[#e74a5b] transition">Projects</Link>
          <Link to="/experience" className="hover:text-[#e74a5b] transition">Experience</Link>
          <Link to="/skills" className="hover:text-[#e74a5b] transition">Skills</Link>
          <Link to="/papers" className="hover:text-[#e74a5b] transition">Papers</Link>
        </nav>
      </div>
    </header>
  );
}
