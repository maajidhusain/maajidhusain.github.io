import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Maajid Husain",
  description: "Personal portfolio of Maajid Husain — Data-Driven AI Developer & Builder.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#FDFBF7] text-slate-900 overflow-hidden min-h-screen relative">
        <div className="fixed inset-0 z-0 animate-fade-in-bg">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/maajidhusain%20website%20background.png')" }}
          />
        </div>
        <div className="relative z-10 min-h-screen">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
