"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("_honeypot")) { setStatus("error"); return; }
    try {
      const res = await fetch("https://getform.io/f/c23a28ac-a108-4589-8f5c-3c8702566925", {
        method: "POST", body: data, headers: { Accept: "application/json" },
      });
      if (res.ok) { setStatus("success"); form.reset(); }
      else setStatus("error");
    } catch { setStatus("error"); }
  }

  return (
    <div className="min-h-screen text-slate-900">
      <Navbar />
      <main className="relative flex min-h-screen items-center justify-center sm:justify-start px-4 sm:px-0 py-10 sm:py-0 pt-20 sm:pt-0">
        <div className="w-full max-w-[500px] sm:ml-24 glass-panel rounded-2xl p-6 sm:p-10 flex flex-col gap-6 sm:gap-8 shadow-sm">
          <div className="flex flex-col gap-2">
            <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight">Get in Touch</h1>
            <p className="text-slate-900/60 font-light text-base sm:text-lg leading-relaxed">
              Open to opportunities, collaborations, and conversations.
            </p>
          </div>

          {status === "success" ? (
            <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
              <p className="font-display text-xl sm:text-2xl text-slate-900">Message received. I will be in touch.</p>
              <button
                onClick={() => setStatus("idle")}
                className="text-slate-900/60 text-sm uppercase tracking-[1px] hover:text-slate-900 transition-colors"
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-6 w-full">
              <input type="text" name="_honeypot" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

              <input
                type="text"
                name="name"
                required
                placeholder="Name"
                className="glass-input py-3 text-slate-900 placeholder-slate-900/40 text-base sm:text-lg font-light"
              />

              <input
                type="email"
                name="email"
                required
                placeholder="Email Address"
                className="glass-input py-3 text-slate-900 placeholder-slate-900/40 text-base sm:text-lg font-light"
              />

              <select
                name="platform"
                required
                className="glass-input py-3 text-slate-900 text-base sm:text-lg font-light appearance-none bg-transparent cursor-pointer"
              >
                <option value="" className="bg-white">Reason for reaching out...</option>
                <option className="bg-white">Recruiting</option>
                <option className="bg-white">Connecting</option>
                <option className="bg-white">Interested Party</option>
                <option className="bg-white">Other</option>
              </select>

              <textarea
                name="question"
                required
                placeholder="Your message..."
                className="glass-input py-3 text-slate-900 placeholder-slate-900/40 text-base sm:text-lg font-light min-h-[100px] sm:min-h-[120px] resize-none"
                rows={4}
              />

              {status === "error" && (
                <p className="text-red-700/80 text-sm">Something went wrong. Please try again.</p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-1 sm:mt-2 bg-slate-900 hover:bg-slate-800 disabled:opacity-50 text-white rounded-full py-4 px-8 uppercase tracking-[1px] text-sm font-semibold transition-all transform hover:-translate-y-0.5 w-full"
              >
                {status === "submitting" ? "Sending…" : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </main>
    </div>
  );
}
