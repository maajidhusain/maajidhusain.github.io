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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-gray-700 rounded-xl p-6">
            <h3 className="text-lg font-bold text-white text-center mb-4">Hard Skills</h3>
            <ul className="space-y-2 text-gray-200">
              <li className="font-medium">Python
                <ul className="ml-4 mt-1 space-y-1 text-gray-400 text-sm">
                  <li>Pandas</li>
                  <li>NumPy</li>
                  <li>Seaborn</li>
                </ul>
              </li>
              <li>Java</li>
              <li>C</li>
              <li>R</li>
              <li>HTML</li>
            </ul>
          </div>
          <div className="bg-gray-700 rounded-xl p-6">
            <h3 className="text-lg font-bold text-white text-center mb-4">Soft Skills</h3>
            <ul className="space-y-2 text-gray-200">
              <li>Public Speaking</li>
              <li>Event Planning</li>
              <li>Teamwork</li>
              <li>Graphic Design</li>
            </ul>
          </div>
        </div>
      </section>

      <hr className="border-gray-700" />

      <section id="projects">
        <h2 className="text-2xl font-semibold text-white mb-4">Projects</h2>

        <div className="space-y-6">
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-blue-400 mb-3">SABRHacks</h3>
            <p className="text-gray-300 mb-3">
              A web application built using TypeScript with a Supabase SQL database backend. The platform is designed to streamline hackathon management and collaboration. Visit the live site: <a href="https://sabr-hacks.vercel.app" className="text-blue-400 hover:underline">SABRHacks</a>.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-700 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-blue-400 mb-3">PS-Acq-Claude-Code-Test</h3>
            <p className="text-gray-300 mb-3">
              A collaborative project showcasing various AI-driven solutions, including fraud prediction pipelines and software development essentials. Explore the repository: <a href="https://github.com/maajidhusain/PS-Acq-Claude-Code-Test" className="text-blue-400 hover:underline">GitHub</a>.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-700 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-blue-400 mb-3">Work Projects</h3>
            <p className="text-gray-300 mb-3">
              During my professional career, I have contributed to impactful projects that demonstrate my expertise in software development and cloud infrastructure:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                Engineered a scalable data pipeline for real-time analytics, achieving a 40% improvement in processing speed and enabling faster decision-making.
              </li>
              <li>
                Designed and implemented a secure API gateway for internal applications, enhancing both security and performance across the organization.
              </li>
              <li>
                Spearheaded the migration of legacy systems to modern cloud infrastructure, reducing operational costs by 25% and improving system reliability.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
