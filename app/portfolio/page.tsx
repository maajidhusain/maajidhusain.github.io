export default function Portfolio() {
  return (
    <div className="space-y-12">
      <h1 className="text-3xl font-bold text-white border-b border-gray-700 pb-4">Portfolio</h1>

      <nav className="bg-gray-900 border border-gray-700 rounded-lg p-4">
        <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Table of Contents</h2>
        <ol className="list-decimal list-inside space-y-1 text-blue-400">
          <li>
            <a href="#coursework" className="hover:underline">Relevant Coursework</a>
            <ul className="ml-6 mt-1 space-y-1 list-disc list-inside">
              <li><a href="#first-year" className="hover:underline">First Year</a></li>
              <li><a href="#second-year" className="hover:underline">Second Year</a></li>
              <li><a href="#third-year" className="hover:underline">Third Year</a></li>
            </ul>
          </li>
          <li><a href="#skills" className="hover:underline">Skills</a></li>
          <li><a href="#projects" className="hover:underline">Projects</a></li>
        </ol>
      </nav>

      <section id="coursework">
        <h2 className="text-2xl font-semibold text-white mb-6">Relevant Coursework</h2>
        <div className="space-y-6">
          <div id="first-year" className="bg-gray-900 border border-gray-700 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-blue-400 mb-3">First Year</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex gap-2"><span className="text-gray-500 font-mono text-sm w-24 flex-shrink-0">STAT 1602</span> Introduction to Data Science in Python</li>
              <li className="flex gap-2"><span className="text-gray-500 font-mono text-sm w-24 flex-shrink-0">ENWR 1520</span> Writing about Housing Inequality</li>
            </ul>
          </div>
          <div id="second-year" className="bg-gray-900 border border-gray-700 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-blue-400 mb-3">Second Year</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex gap-2"><span className="text-gray-500 font-mono text-sm w-24 flex-shrink-0">STAT 2120</span> Introduction to Statistical Analysis</li>
              <li className="flex gap-2"><span className="text-gray-500 font-mono text-sm w-24 flex-shrink-0">STAT 3110</span> Foundations of Statistics (Probability and Linear Algebra)</li>
              <li className="flex gap-2"><span className="text-gray-500 font-mono text-sm w-24 flex-shrink-0">STAT 3130</span> Design and Analysis of Sample Surveys</li>
              <li className="flex gap-2"><span className="text-gray-500 font-mono text-sm w-24 flex-shrink-0">CS 2100</span> Data Structures and Algorithms</li>
              <li className="flex gap-2"><span className="text-gray-500 font-mono text-sm w-24 flex-shrink-0">CS 2130</span> Computer Systems and Organization</li>
            </ul>
          </div>
          <div id="third-year" className="bg-gray-900 border border-gray-700 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-blue-400 mb-3">Third Year <span className="text-gray-500 text-sm font-normal">(In Progress)</span></h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex gap-2"><span className="text-gray-500 font-mono text-sm w-24 flex-shrink-0">STAT 3220</span> Introduction to Regression Analysis</li>
              <li className="flex gap-2"><span className="text-gray-500 font-mono text-sm w-24 flex-shrink-0">STAT 3120</span> Mathematical Statistics</li>
              <li className="flex gap-2"><span className="text-gray-500 font-mono text-sm w-24 flex-shrink-0">STAT 3250</span> Data Analysis in Python</li>
              <li className="flex gap-2"><span className="text-gray-500 font-mono text-sm w-24 flex-shrink-0">CS 3140</span> Software Development Essentials</li>
              <li className="flex gap-2"><span className="text-gray-500 font-mono text-sm w-24 flex-shrink-0">CS 2120</span> Discrete Mathematics</li>
            </ul>
          </div>
        </div>
      </section>

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
        <p className="text-gray-300 mb-4">View my projects on GitHub:</p>
        <a
          href="https://maajidhusain.github.io"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-gray-900 font-medium px-5 py-2 rounded-lg hover:bg-gray-200 transition-colors"
        >
          Continue to Projects
        </a>
      </section>
    </div>
  );
}
