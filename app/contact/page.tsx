"use client";

import { useState } from "react";
import { SocialIcons } from "@/components/ui/social-icons";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);

    if (data.get("_honeypot")) {
      setStatus("error");
      return;
    }

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

      {/* Social icons hero */}
      <div className="flex flex-col items-center gap-6 py-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight text-white">Connect with me</h2>
          <p className="text-sm text-neutral-400">Find me across the web</p>
        </div>
        <SocialIcons />
      </div>

      {/* Direct contact */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-gray-900 border border-gray-700 rounded-2xl p-5">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">Email</p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <span className="text-gray-500">Personal</span>
              <a href="mailto:maajidhusain02@outlook.com" className="text-blue-400 hover:text-blue-300 transition-colors truncate">
                maajidhusain02@outlook.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-gray-500">School</span>
              <a href="mailto:mah2ksc@virginia.edu" className="text-blue-400 hover:text-blue-300 transition-colors truncate">
                mah2ksc@virginia.edu
              </a>
            </li>
          </ul>
        </div>
        <div className="bg-gray-900 border border-gray-700 rounded-2xl p-5">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">Phone</p>
          <a href="tel:5715286133" className="text-blue-400 hover:text-blue-300 transition-colors text-sm">
            +1 (571) 528-6133
          </a>
        </div>
      </div>

      {/* Contact form */}
      <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-6">Send a message</p>

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
            <input type="text" name="_honeypot" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1.5">
                  Name <span className="text-red-400">*</span>
                </label>
                <input type="text" name="name" id="name" required placeholder="Your name"
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl px-3.5 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors text-sm" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">
                  Email <span className="text-red-400">*</span>
                </label>
                <input type="email" name="email" id="email" required placeholder="your@email.com"
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl px-3.5 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors text-sm" />
              </div>
            </div>

            <div>
              <label htmlFor="platform" className="block text-sm font-medium text-gray-300 mb-1.5">
                Reason for reaching out <span className="text-red-400">*</span>
              </label>
              <select name="platform" id="platform" required
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-blue-500 transition-colors text-sm">
                <option value="">Select an option</option>
                <option>Recruiting</option>
                <option>Connecting</option>
                <option>Interested Party</option>
                <option>Other (please specify in message)</option>
              </select>
            </div>

            <div>
              <label htmlFor="question" className="block text-sm font-medium text-gray-300 mb-1.5">
                Message <span className="text-red-400">*</span>
              </label>
              <textarea name="question" id="question" required placeholder="What's on your mind?"
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-3.5 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors text-sm resize-none" rows={4} />
            </div>

            {status === "error" && (
              <p className="text-red-400 text-sm">Something went wrong. Please try again or email directly.</p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-semibold px-6 py-2.5 rounded-xl transition-colors text-sm"
            >
              {status === "submitting" ? "Sending…" : "Send message"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
