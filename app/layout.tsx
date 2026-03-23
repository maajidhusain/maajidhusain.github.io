import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Maajid Husain - Portfolio",
  description: "Personal portfolio of Maajid Husain, UVA student in Applied Statistics and Computer Science.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-950 text-gray-100">
        <Navbar />
        <main className="max-w-5xl mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="bg-gray-900 border-t border-gray-700 mt-16 py-6">
          <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <span>&copy; {new Date().getFullYear()} Maajid Husain</span>
            <div className="flex gap-6">
              <a href="https://github.com/maajidhusain" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">GitHub</a>
              <a href="https://linkedin.com/in/maajid-husain" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">LinkedIn</a>
              <a href="mailto:mah2ksc@virginia.edu" className="hover:text-blue-400 transition-colors">Email</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
