export default function Portfolio() {
  return (
    <div className="space-y-12">
      <h1 className="text-3xl font-bold text-white border-b border-gray-700 pb-4">Portfolio</h1>

      <nav className="bg-gray-900 border border-gray-700 rounded-lg p-4">
        <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Table of Contents</h2>
        <ol className="list-decimal list-inside space-y-1 text-blue-400">
          <li><a href="#skills" className="hover:underline">Skills</a></li>
          <li><a href="#projects" className="hover:underline">Projects</a></li>
        </ol>
      </nav>

      <hr className="border-gray-700" />

      <section id="skills">
        <h2 className="text-2xl font-semibold text-white mb-6">Skills</h2>
        <div className="space-y-6">

          {/* Interpersonal */}
          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-5">Interpersonal</p>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <span className="mt-0.5 p-2 rounded-lg bg-violet-500/15 text-violet-300 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">Cross-Team Collaboration</p>
                  <p className="text-sm text-gray-400 mt-0.5">Bridging engineering teams and analysts to align technical work with business outcomes.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-0.5 p-2 rounded-lg bg-blue-500/15 text-blue-300 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">AI Infrastructure Vision</p>
                  <p className="text-sm text-gray-400 mt-0.5">Influencing AI infrastructure strategy across cross-functional teams and leadership stakeholders.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-0.5 p-2 rounded-lg bg-emerald-500/15 text-emerald-300 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/>
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">Stakeholder-Driven Development</p>
                  <p className="text-sm text-gray-400 mt-0.5">Building websites and features that satisfy diverse stakeholder requirements across product and design.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* AI Developer Tooling */}
          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-5">AI Developer Tooling</p>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <span className="mt-0.5 p-2 rounded-lg bg-orange-500/15 text-orange-300 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">Claude Code</p>
                  <p className="text-sm text-gray-400 mt-0.5">AI-assisted development using Anthropic's Claude Code CLI for rapid feature iteration and code generation.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-0.5 p-2 rounded-lg bg-purple-500/15 text-purple-300 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/>
                    <line x1="12" y1="22" x2="12" y2="15.5"/>
                    <polyline points="22 8.5 12 15.5 2 8.5"/>
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">Obsidian</p>
                  <p className="text-sm text-gray-400 mt-0.5">Knowledge management and second-brain workflows for structuring research, notes, and AI project context.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-0.5 p-2 rounded-lg bg-cyan-500/15 text-cyan-300 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">RAG Systems</p>
                  <p className="text-sm text-gray-400 mt-0.5">Designing and implementing Retrieval-Augmented Generation pipelines to ground LLM outputs in proprietary data.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-0.5 p-2 rounded-lg bg-yellow-500/15 text-yellow-300 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">Data Extraction & Structuring</p>
                  <p className="text-sm text-gray-400 mt-0.5">Transforming unstructured documents, PDFs, and raw data into machine-readable formats for downstream AI consumption.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-0.5 p-2 rounded-lg bg-teal-500/15 text-teal-300 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/>
                    <line x1="9" y1="2" x2="9" y2="4"/><line x1="15" y1="2" x2="15" y2="4"/>
                    <line x1="9" y1="20" x2="9" y2="22"/><line x1="15" y1="20" x2="15" y2="22"/>
                    <line x1="20" y1="9" x2="22" y2="9"/><line x1="20" y1="14" x2="22" y2="14"/>
                    <line x1="2" y1="9" x2="4" y2="9"/><line x1="2" y1="14" x2="4" y2="14"/>
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">LLM Model-Agnostic Architecture</p>
                  <p className="text-sm text-gray-400 mt-0.5">Building AI systems decoupled from any single provider — easily swappable across OpenAI, Anthropic, and open-source models.</p>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </section>

      <hr className="border-gray-700" />

      <section id="projects">
        <h2 className="text-2xl font-semibold text-white mb-4">Projects</h2>

        <div className="space-y-6">
          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6">
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="text-lg font-semibold text-white">SABRHacks</h3>
              <div className="flex items-center gap-2 shrink-0">
                <a href="https://sabr-hacks.vercel.app" target="_blank" rel="noopener noreferrer"
                  className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
                  title="Live site">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </a>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              A web application built using TypeScript with a Supabase SQL database backend. The platform is designed to streamline hackathon management and collaboration.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6">
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="text-lg font-semibold text-white">PS-Acq-Claude-Code-Test</h3>
              <div className="flex items-center gap-2 shrink-0">
                <a href="https://github.com/maajidhusain/PS-Acq-Claude-Code-Test" target="_blank" rel="noopener noreferrer"
                  className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
                  title="GitHub">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              A collaborative project showcasing various AI-driven solutions, including fraud prediction pipelines and software development essentials.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6">
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="text-lg font-semibold text-white">Work Projects</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              During my professional career, I have contributed to impactful projects that demonstrate my expertise in software development and cloud infrastructure:
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex gap-2"><span className="text-gray-600 mt-0.5">—</span>Engineered a scalable data pipeline for real-time analytics, achieving a 40% improvement in processing speed.</li>
              <li className="flex gap-2"><span className="text-gray-600 mt-0.5">—</span>Designed and implemented a secure API gateway for internal applications, enhancing security and performance.</li>
              <li className="flex gap-2"><span className="text-gray-600 mt-0.5">—</span>Spearheaded the migration of legacy systems to modern cloud infrastructure, reducing operational costs by 25%.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
