import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="flex min-h-screen items-start sm:items-center justify-center sm:justify-start px-5 pt-28 pb-24 sm:px-0 sm:pt-24 sm:pb-0">
        <div className="w-full sm:w-[min(54rem,58vw)] flex flex-col items-stretch sm:items-start justify-center sm:pl-24 lg:pl-28">
          <div className="max-w-3xl animate-slide-up-fade">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#b24a1d] sm:mb-6 sm:text-xs">
              Data, AI, and Software
            </p>
            <h1 className="text-[3.2rem] leading-[0.92] sm:text-7xl lg:text-[5.5rem] font-bold tracking-tight font-display text-slate-950">
              Maajid Husain
            </h1>
            <p className="mt-4 max-w-[20rem] text-xl sm:mt-6 sm:max-w-2xl sm:text-3xl font-light leading-tight text-slate-950/82">
              Data-Driven AI Developer with a builder&apos;s eye for useful systems.
            </p>
            <p className="mt-5 text-sm sm:mt-7 sm:text-base font-light text-slate-950/68 leading-relaxed max-w-xl">
              Business Analyst at Capital One. UVA graduate in Applied Statistics and Computer Science. Building thoughtful products where data, automation, and software engineering meet.
            </p>
            <div className="mt-8 flex flex-col sm:mt-10 sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/portfolio"
                className="bg-[#a8441a] hover:bg-[#913a15] text-white text-sm uppercase tracking-[1px] font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-[#a8441a]/20 text-center w-full sm:w-auto"
              >
                View Portfolio
              </Link>
              <Link
                href="/contact"
                className="bg-white/20 hover:bg-white/35 text-slate-950 text-sm uppercase tracking-[1px] font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5 border border-[#a8441a]/25 text-center w-full sm:w-auto"
              >
                Get in Touch
              </Link>
            </div>
            <div className="mt-8 h-px w-28 bg-gradient-to-r from-[#a8441a] via-[#d18845] to-transparent sm:mt-12 sm:w-40" />
          </div>
        </div>
      </main>
    </div>
  );
}
