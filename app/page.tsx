import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen overflow-hidden">
      <Navbar />
      <main className="flex h-screen pt-24">
        <div className="w-1/2 h-full flex flex-col justify-center pl-24">
          <div className="w-[560px] glass-panel rounded-2xl p-12 animate-slide-up-fade shadow-sm">
            <h1 className="text-6xl font-bold tracking-tight font-display text-slate-900 mb-4">
              Maajid Husain
            </h1>
            <p className="text-xl font-light text-slate-900/70 mb-3">
              Data-Driven AI Developer & Builder
            </p>
            <p className="text-base font-light text-slate-900/60 leading-relaxed mb-10 max-w-md">
              Business Analyst at Capital One. UVA graduate in Applied Statistics & Computer Science. Building at the intersection of data, AI, and software.
            </p>
            <div className="flex gap-4">
              <Link
                href="/portfolio"
                className="bg-slate-900 hover:bg-slate-800 text-white text-sm uppercase tracking-[1px] font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
              >
                View Portfolio
              </Link>
              <Link
                href="/contact"
                className="bg-white/30 hover:bg-white/50 text-slate-900 text-sm uppercase tracking-[1px] font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5 border border-white/50"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full" />
      </main>
    </div>
  );
}
