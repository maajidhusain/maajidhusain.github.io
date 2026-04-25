"use client";

import Script from "next/script";
import { useState } from "react";
import Navbar from "@/components/Navbar";

declare global {
  interface Window {
    Forminit?: new () => {
      submit: (
        formId: string,
        formData: FormData,
      ) => Promise<{ data?: unknown; error?: { message?: string } }>;
    };
  }
}

const FORM_ID = "t2lrsuk8yxd";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("Something went wrong. Please try again.");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    if (!window.Forminit) {
      setErrorMessage("Form service failed to load. Please refresh and try again.");
      setStatus("error");
      return;
    }

    try {
      const forminit = new window.Forminit();
      const { error } = await forminit.submit(FORM_ID, data);

      if (error) {
        setErrorMessage(error.message || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setErrorMessage("Something went wrong. Please try again.");
      form.reset();
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  return (
    <div className="h-screen overflow-y-auto glass-scroll text-slate-900">
      <Script src="https://forminit.com/sdk/v1/forminit.js" strategy="afterInteractive" />
      <Navbar />
      <main className="relative flex min-h-full items-start justify-center sm:justify-start px-4 pb-24 pt-24 sm:px-0 sm:pb-24 sm:pt-28">
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
              <input
                type="text"
                name="fi-sender-fullName"
                required
                placeholder="Name"
                className="glass-input py-3 text-slate-900 placeholder-slate-900/40 text-base sm:text-lg font-light"
              />

              <input
                type="email"
                name="fi-sender-email"
                required
                placeholder="Email Address"
                className="glass-input py-3 text-slate-900 placeholder-slate-900/40 text-base sm:text-lg font-light"
              />

              <select
                name="fi-select-reason"
                required
                className="glass-input py-3 text-slate-900 text-base sm:text-lg font-light appearance-none bg-transparent cursor-pointer pr-8"
              >
                <option value="" className="bg-white">Reason for reaching out...</option>
                <option value="Recruiting" className="bg-white">Recruiting</option>
                <option value="Connecting" className="bg-white">Connecting</option>
                <option value="Interested Party" className="bg-white">Interested Party</option>
                <option value="Other" className="bg-white">Other</option>
              </select>

              <textarea
                name="fi-text-message"
                required
                placeholder="Your message..."
                className="glass-input py-3 text-slate-900 placeholder-slate-900/40 text-base sm:text-lg font-light min-h-[100px] sm:min-h-[120px] resize-none"
                rows={4}
              />

              {status === "error" && (
                <p className="text-red-700/80 text-sm">{errorMessage}</p>
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
