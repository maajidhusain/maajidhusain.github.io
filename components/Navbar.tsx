"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-24 px-10 glass-panel rounded-none border-x-0 border-t-0 bg-white/5">
      <Link href="/" className="text-slate-900 text-2xl font-bold tracking-tight font-display">
        Maajid Husain
      </Link>
      <nav className="flex items-center gap-9">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm font-semibold uppercase tracking-[2px] transition-all duration-300 ${
              pathname === link.href
                ? "text-slate-900 border-b border-slate-900 pb-0.5"
                : "text-slate-900/60 hover:text-slate-900"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
