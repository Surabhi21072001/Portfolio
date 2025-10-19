import React from "react";

export default function Contact() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      <h3 className="text-2xl font-bold">Get in touch</h3>
      <p className="text-slate-600 mt-2">Available for freelance, directing and generative product work.</p>

      <form className="mt-6 grid grid-cols-1 gap-4">
        <input className="border rounded-md px-4 py-3" placeholder="Your name" />
        <input className="border rounded-md px-4 py-3" placeholder="Email" />
        <textarea className="border rounded-md px-4 py-3 h-32" placeholder="Tell me about your project"></textarea>
        <div className="flex items-center gap-4">
          <button className="bg-slate-900 text-white px-4 py-2 rounded-md">Send message</button>
          <a href="#" className="text-sm text-slate-600 hover:underline">Or email me directly</a>
        </div>
      </form>
    </section>
  );
}
