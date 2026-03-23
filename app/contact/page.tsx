"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("https://getform.io/f/c23a28ac-a108-4589-8f5c-3c8702566925", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-bold text-white border-b border-gray-700 pb-4">Contact</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-gray-900 border border-gray-700 rounded-xl p-5">
          <h2 className="text-xl font-semibold text-white mb-3 italic">Email</h2>
          <ul className="space-y-2 text-gray-300">
            <li><span className="text-gray-500 text-sm">Personal: </span><a href="mailto:maajidhusain02@outlook.com" className="text-blue-400 hover:underline">maajidhusain02@outlook.com</a></li>
            <li><span className="text-gray-500 text-sm">School: </span><a href="mailto:mah2ksc@virginia.edu" className="text-blue-400 hover:underline">mah2ksc@virginia.edu</a></li>
          </ul>
        </div>
        <div className="bg-gray-900 border border-gray-700 rounded-xl p-5">
          <h2 className="text-xl font-semibold text-white mb-3 italic">Phone Number</h2>
          <a href="tel:5715286133" className="text-blue-400 hover:underline text-lg">+1 (571) 528-6133</a>
        </div>
      </div>

      <div className="bg-gray-900 border border-gray-700 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-white mb-6 italic">Questions</h2>

        {status === "success" ? (
          <div className="text-center py-8">
            <div className="text-green-400 text-xl font-semibold mb-2">Message sent!</div>
            <p className="text-gray-400">Thank you for reaching out. I will get back to you soon.</p>
            <button onClick={() => setStatus("idle")} className="mt-4 text-blue-400 hover:underline text-sm">
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email address <span className="text-red-400">*</span></label>
              <input type="email" name="email" id="email" required placeholder="Enter email"
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors" />
            </div>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name <span className="text-red-400">*</span></label>
              <input type="text" name="name" id="name" required placeholder="Enter your name"
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors" />
            </div>
            <div>
              <label htmlFor="platform" className="block text-sm font-medium text-gray-300 mb-1">What is your order of business? <span className="text-red-400">*</span></label>
              <select name="platform" id="platform" required
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500 transition-colors">
                <option value="">Select an option</option>
                <option>Recruiting</option>
                <option>Connecting</option>
                <option>Interested Party</option>
                <option>Other (please specify in question)</option>
              </select>
            </div>
            <hr className="border-gray-700" />
            <div>
              <label htmlFor="question" className="block text-sm font-medium text-gray-300 mb-1">What would you like to know? <span className="text-red-400">*</span></label>
              <input type="text" name="question" id="question" required placeholder="Enter Question Here"
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors" />
            </div>
            <hr className="border-gray-700" />
            {status === "error" && (
              <p className="text-red-400 text-sm">Something went wrong. Please try again or email directly.</p>
            )}
            <button
              type="submit"
              disabled={status === "submitting"}
              className="bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-semibold px-6 py-2 rounded-lg transition-colors"
            >
              {status === "submitting" ? "Sending…" : "Submit"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
