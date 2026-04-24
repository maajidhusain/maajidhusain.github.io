import Navbar from "@/components/Navbar";

export default function Portfolio() {
  return (
    <div className="h-screen overflow-hidden text-slate-900">
      <Navbar />
      <main className="flex h-full pt-24">
        <div className="pl-24 pr-8 flex flex-1 justify-start py-6">
          <div className="w-[640px] flex-none flex flex-col gap-4">
            <p className="text-5xl font-bold leading-tight text-slate-900 font-display px-4">The Work</p>
            <div className="grid grid-cols-2 gap-6 overflow-y-auto h-[calc(100vh-220px)] pr-2 pb-12 glass-scroll">

              <div className="bg-white/15 backdrop-blur-[16px] border border-white/30 rounded-xl p-6 flex flex-col gap-3 transition-all duration-500 hover:scale-[1.02] hover:border-white/60 cursor-pointer h-fit">
                <div className="flex flex-col gap-1">
                  <h3 className="font-display text-2xl text-slate-900 font-bold leading-snug">SABRHacks</h3>
                  <p className="text-slate-900/60 text-xs uppercase tracking-[2px]">TypeScript · Supabase</p>
                </div>
                <p className="text-slate-900/70 text-sm font-light leading-relaxed">A web application for streamlining hackathon management and collaboration. Built with TypeScript and a Supabase SQL database backend.</p>
                <a href="https://sabr-hacks.vercel.app" target="_blank" rel="noopener noreferrer"
                  className="mt-auto text-xs uppercase tracking-[1px] font-semibold text-slate-900/60 hover:text-slate-900 transition-colors flex items-center gap-1">
                  View →
                </a>
              </div>

              <div className="mt-12 bg-white/15 backdrop-blur-[16px] border border-white/30 rounded-xl p-6 flex flex-col gap-3 transition-all duration-500 hover:scale-[1.02] hover:border-white/60 cursor-pointer h-fit">
                <div className="flex flex-col gap-1">
                  <h3 className="font-display text-2xl text-slate-900 font-bold leading-snug">Claude Code Projects</h3>
                  <p className="text-slate-900/60 text-xs uppercase tracking-[2px]">AI · Python · CLI</p>
                </div>
                <p className="text-slate-900/70 text-sm font-light leading-relaxed">AI-assisted development using Anthropic&apos;s Claude Code CLI for rapid feature iteration, code generation, and autonomous agent workflows.</p>
              </div>

              <div className="bg-white/15 backdrop-blur-[16px] border border-white/30 rounded-xl p-6 flex flex-col gap-3 transition-all duration-500 hover:scale-[1.02] hover:border-white/60 cursor-pointer h-fit">
                <div className="flex flex-col gap-1">
                  <h3 className="font-display text-2xl text-slate-900 font-bold leading-snug">Cross-Team Collaboration</h3>
                  <p className="text-slate-900/60 text-xs uppercase tracking-[2px]">Interpersonal</p>
                </div>
                <p className="text-slate-900/70 text-sm font-light leading-relaxed">Bridging engineering teams and analysts at Capital One to align technical AI infrastructure work with business outcomes.</p>
              </div>

              <div className="mt-12 bg-white/15 backdrop-blur-[16px] border border-white/30 rounded-xl p-6 flex flex-col gap-3 transition-all duration-500 hover:scale-[1.02] hover:border-white/60 cursor-pointer h-fit">
                <div className="flex flex-col gap-1">
                  <h3 className="font-display text-2xl text-slate-900 font-bold leading-snug">RAG Systems</h3>
                  <p className="text-slate-900/60 text-xs uppercase tracking-[2px]">AI Developer Tooling</p>
                </div>
                <p className="text-slate-900/70 text-sm font-light leading-relaxed">Designing and implementing Retrieval-Augmented Generation pipelines to ground LLM outputs in proprietary enterprise data.</p>
              </div>

              <div className="bg-white/15 backdrop-blur-[16px] border border-white/30 rounded-xl p-6 flex flex-col gap-3 transition-all duration-500 hover:scale-[1.02] hover:border-white/60 cursor-pointer h-fit">
                <div className="flex flex-col gap-1">
                  <h3 className="font-display text-2xl text-slate-900 font-bold leading-snug">Work Projects</h3>
                  <p className="text-slate-900/60 text-xs uppercase tracking-[2px]">Capital One · Enterprise</p>
                </div>
                <p className="text-slate-900/70 text-sm font-light leading-relaxed">Engineered scalable data pipelines with 40% processing improvement, secure API gateways, and legacy cloud migrations reducing operational costs by 25%.</p>
              </div>

              <div className="mt-12 bg-white/15 backdrop-blur-[16px] border border-white/30 rounded-xl p-6 flex flex-col gap-3 transition-all duration-500 hover:scale-[1.02] hover:border-white/60 cursor-pointer h-fit">
                <div className="flex flex-col gap-1">
                  <h3 className="font-display text-2xl text-slate-900 font-bold leading-snug">PS-Acq-Claude-Code-Test</h3>
                  <p className="text-slate-900/60 text-xs uppercase tracking-[2px]">Python · AI</p>
                </div>
                <p className="text-slate-900/70 text-sm font-light leading-relaxed">Collaborative AI-driven solutions including fraud prediction pipelines and software development essentials.</p>
                <a href="https://github.com/maajidhusain/PS-Acq-Claude-Code-Test" target="_blank" rel="noopener noreferrer"
                  className="mt-auto text-xs uppercase tracking-[1px] font-semibold text-slate-900/60 hover:text-slate-900 transition-colors flex items-center gap-1">
                  View →
                </a>
              </div>

              <div className="bg-white/15 backdrop-blur-[16px] border border-white/30 rounded-xl p-6 flex flex-col gap-3 transition-all duration-500 hover:scale-[1.02] hover:border-white/60 cursor-pointer h-fit">
                <div className="flex flex-col gap-1">
                  <h3 className="font-display text-2xl text-slate-900 font-bold leading-snug">LLM Model-Agnostic Architecture</h3>
                  <p className="text-slate-900/60 text-xs uppercase tracking-[2px]">System Design</p>
                </div>
                <p className="text-slate-900/70 text-sm font-light leading-relaxed">Building AI systems decoupled from any single provider — easily swappable across OpenAI, Anthropic, and open-source models.</p>
              </div>

              <div className="mt-12 bg-white/15 backdrop-blur-[16px] border border-white/30 rounded-xl p-6 flex flex-col gap-3 transition-all duration-500 hover:scale-[1.02] hover:border-white/60 cursor-pointer h-fit">
                <div className="flex flex-col gap-1">
                  <h3 className="font-display text-2xl text-slate-900 font-bold leading-snug">Data Extraction & Structuring</h3>
                  <p className="text-slate-900/60 text-xs uppercase tracking-[2px]">Data Engineering</p>
                </div>
                <p className="text-slate-900/70 text-sm font-light leading-relaxed">Transforming unstructured documents, PDFs, and raw data into machine-readable formats for downstream AI consumption.</p>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
