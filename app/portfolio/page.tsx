import Navbar from "@/components/Navbar";
import {
  Trophy,
  Bot,
  Database,
  Building2,
  GitBranch,
  Layers,
  FileSearch,
  Users,
} from "lucide-react";

const projects = [
  {
    title: "SABRHacks",
    tags: "TypeScript · Supabase",
    category: "Web App",
    description:
      "A web application for streamlining hackathon management and collaboration. Built with TypeScript and a Supabase SQL database backend.",
    link: "https://sabr-hacks.vercel.app",
    Icon: Trophy,
  },
  {
    title: "Claude Code Projects",
    tags: "AI · Python · CLI",
    category: "AI Development",
    description:
      "AI-assisted development using Anthropic's Claude Code CLI for rapid feature iteration, code generation, and autonomous agent workflows.",
    Icon: Bot,
  },
  {
    title: "RAG Systems",
    tags: "AI Developer Tooling",
    category: "AI",
    description:
      "Designing and implementing Retrieval-Augmented Generation pipelines to ground LLM outputs in proprietary enterprise data.",
    Icon: Database,
  },
  {
    title: "Capital One — Data & AI",
    tags: "Capital One · Enterprise",
    category: "Enterprise",
    description:
      "Engineered scalable data pipelines with 40% processing improvement, secure API gateways, and legacy cloud migrations reducing operational costs by 25%.",
    Icon: Building2,
  },
  {
    title: "PS-Acq-Claude-Code-Test",
    tags: "Python · AI",
    category: "AI",
    description:
      "Collaborative AI-driven solutions including fraud prediction pipelines and software development essentials.",
    link: "https://github.com/maajidhusain/PS-Acq-Claude-Code-Test",
    Icon: GitBranch,
  },
  {
    title: "LLM Model-Agnostic Architecture",
    tags: "System Design",
    category: "System Design",
    description:
      "Building AI systems decoupled from any single provider — easily swappable across OpenAI, Anthropic, and open-source models.",
    Icon: Layers,
  },
  {
    title: "Data Extraction & Structuring",
    tags: "Data Engineering",
    category: "Data",
    description:
      "Transforming unstructured documents, PDFs, and raw data into machine-readable formats for downstream AI consumption.",
    Icon: FileSearch,
  },
  {
    title: "Cross-Team Collaboration",
    tags: "Interpersonal · Leadership",
    category: "Leadership",
    description:
      "Bridging engineering teams and analysts at Capital One to align technical AI infrastructure work with business outcomes.",
    Icon: Users,
  },
];

export default function Portfolio() {
  return (
    <div className="h-screen overflow-y-auto glass-scroll">
      {/* Solid background to cover the global image */}
      <div className="fixed inset-0 z-0 bg-[#FDFBF7]" />

      <Navbar />

      <main className="relative z-10 pt-32 pb-24 px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <header className="mb-16">
            <p className="text-xs uppercase tracking-[4px] text-slate-400 font-semibold mb-4">
              Selected Work
            </p>
            <h1 className="font-display text-6xl font-bold text-slate-900 leading-tight">
              The Portfolio
            </h1>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group bg-white border border-slate-100 rounded-2xl p-8 flex flex-col gap-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-slate-900 group-hover:border-slate-900 transition-all duration-300">
                    <project.Icon size={18} className="text-slate-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] uppercase tracking-[2.5px] text-slate-400 font-semibold">
                      {project.category}
                    </span>
                    <h2 className="font-display text-xl font-bold text-slate-900 leading-snug">
                      {project.title}
                    </h2>
                    <p className="text-[11px] uppercase tracking-[1.5px] text-slate-400">
                      {project.tags}
                    </p>
                  </div>
                </div>

                <p className="text-slate-500 text-sm font-light leading-relaxed flex-1">
                  {project.description}
                </p>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] uppercase tracking-[1.5px] font-semibold text-slate-400 hover:text-slate-900 transition-colors self-start"
                  >
                    View →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
