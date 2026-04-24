import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-10 py-10">
      <div className="flex flex-col sm:flex-row items-center gap-8">
        <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg flex-shrink-0">
          <Image
            src="/images/myheadshot.png"
            alt="Maajid Husain"
            fill
            sizes="160px"
            className="object-cover"
            priority
          />
        </div>
        <div className="text-center sm:text-left">
          <h1 className="text-4xl font-bold text-white mb-2">Maajid Husain</h1>
          <p className="text-blue-400 text-lg font-medium">Data Driven AI Dev and Builder</p>
          <p className="text-gray-400 text-sm mt-1">Leesburg, VA &bull; University of Virginia &bull; Capital One</p>
        </div>
      </div>

      <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 max-w-2xl w-full text-center">
        <p className="text-gray-200 text-lg leading-relaxed">Hey!</p>
        <p className="text-gray-200 mt-4 leading-relaxed">
          Currently a Business Analyst at Capital One. Graduated from the University of Virginia in 2024 with a double major in Applied Statistics and Computer Science. I have a passion for building projects that combine data, AI, and software development to solve real-world problems. I am always looking for new opportunities to learn and grow, so feel free to reach out if you want to connect or collaborate on a project!
        </p>
      </div>

      <div className="flex flex-wrap gap-4 justify-center">
        <a
          href="https://github.com/maajidhusain"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-600 text-white px-5 py-3 rounded-lg transition-colors font-medium"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
          </svg>
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/maajid-husain"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-blue-700 hover:bg-blue-600 border border-blue-500 text-white px-5 py-3 rounded-lg transition-colors font-medium"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          LinkedIn
        </a>
        <Link
          href="/contact"
          className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-600 text-white px-5 py-3 rounded-lg transition-colors font-medium"
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
}
