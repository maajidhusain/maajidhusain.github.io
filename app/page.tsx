import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="flex min-h-screen pt-16 sm:pt-24 items-center justify-center sm:justify-start">
        <div className="w-full sm:w-1/2 flex flex-col items-center sm:items-start justify-center px-4 sm:pl-24 py-10 sm:py-0">
          <div className="w-full max-w-[560px] glass-panel rounded-2xl p-6 sm:p-12 animate-slide-up-fade shadow-sm">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight font-display text-slate-900 mb-4">
              Maajid Husain
            </h1>
            <p className="text-lg sm:text-xl font-light text-slate-900/70 mb-3">
              Data-Driven AI Developer & Builder
            </p>
            <p className="text-sm sm:text-base font-light text-slate-900/60 leading-relaxed mb-8 sm:mb-10 max-w-md">
              Business Analyst at Capital One. UVA graduate in Applied Statistics & Computer Science. Building at the intersection of data, AI, and software.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/portfolio"
                className="bg-slate-900 hover:bg-slate-800 text-white text-sm uppercase tracking-[1px] font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-lg text-center"
              >
                View Portfolio
              </Link>
              <Link
                href="/contact"
                className="bg-white/30 hover:bg-white/50 text-slate-900 text-sm uppercase tracking-[1px] font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5 border border-white/50 text-center"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
