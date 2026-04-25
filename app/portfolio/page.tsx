"use client";

import Navbar from "@/components/Navbar";
import { StackedProjectCards } from "@/components/ui/stacked-project-cards";
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
import type { LucideIcon } from "lucide-react";

type Project = {
  title: string;
  tags: string;
  category: string;
  description: string;
  link?: string;
  Icon: LucideIcon;
};

const projects: Project[] = [
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

function ProjectCard({ project }: { project: Project }) {
  const { title, tags, category, description, link, Icon } = project;
  return (
    <div className="group glass-panel rounded-2xl p-6 flex flex-col gap-5 cursor-default hover:bg-white/20 transition-all duration-500 hover:-translate-y-2">
      {/* Icon area */}
      <div className="w-full aspect-[4/3] rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors duration-500">
        <Icon
          size={40}
          className="text-white/40 group-hover:text-[#ec5b13] transition-colors duration-500"
          strokeWidth={1.25}
        />
      </div>

      {/* Meta */}
      <div>
        <p className="text-white/50 text-[10px] font-semibold tracking-widest uppercase mb-1">
          {category}
        </p>
        <h3 className="text-white text-xl font-display font-medium leading-snug group-hover:text-[#ec5b13] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-white/50 text-[11px] font-semibold tracking-widest uppercase mt-1">
          {tags}
        </p>
      </div>

      <p className="text-white/60 text-sm font-light leading-relaxed flex-1">
        {description}
      </p>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] uppercase tracking-widest font-semibold text-white/40 hover:text-[#ec5b13] transition-colors self-start"
        >
          View →
        </a>
      )}
    </div>
  );
}

const col1 = projects.filter((_, i) => i % 2 === 0);
const col2 = projects.filter((_, i) => i % 2 !== 0);

export default function Portfolio() {
  return (
    <div className="h-screen overflow-y-auto glass-scroll">
      {/* Dark overlay over the global background image */}
      <div className="fixed inset-0 z-0 bg-black/55" />

      <Navbar variant="dark" />

      {/* ── Mobile layout (< md) ── */}
      <main className="relative z-10 md:hidden">
        <div className="px-6 pt-28 pb-4">
          <h1 className="text-white text-4xl font-display font-bold leading-tight mb-3 drop-shadow-lg">
            The<br />Portfolio
          </h1>
          <p className="text-white/70 text-sm max-w-sm font-light leading-relaxed">
            A curated selection of projects at the intersection of data, AI, and software engineering.
          </p>
        </div>
        <StackedProjectCards projects={projects} />
      </main>

      {/* ── Desktop layout (≥ md) ── */}
      <main className="relative z-10 px-6 md:px-12 lg:px-24 pt-36 pb-24 hidden md:block">
        <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-12 lg:gap-24">

          {/* Left: title */}
          <div className="lg:w-1/3 lg:pt-32 lg:sticky lg:top-36 lg:self-start">
            <h1 className="text-white text-5xl md:text-7xl font-display font-bold leading-tight mb-6 drop-shadow-lg">
              The<br />Portfolio
            </h1>
            <p className="text-white/70 text-lg max-w-sm font-light leading-relaxed">
              A curated selection of projects at the intersection of data, AI, and software engineering.
            </p>
          </div>

          {/* Right: offset two-column grid */}
          <div className="lg:w-2/3 grid grid-cols-2 gap-8 md:gap-10 pb-12">
            {/* Column 1 — starts lower */}
            <div className="flex flex-col gap-8 md:gap-10 md:mt-24">
              {col1.map((p) => (
                <ProjectCard key={p.title} project={p} />
              ))}
            </div>
            {/* Column 2 — flush top */}
            <div className="flex flex-col gap-8 md:gap-10">
              {col2.map((p) => (
                <ProjectCard key={p.title} project={p} />
              ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
