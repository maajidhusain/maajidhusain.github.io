"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar({ variant = "light" }: { variant?: "light" | "dark" }) {
  const pathname = usePathname();

  const isDark = variant === "dark";
  const logoColor = isDark ? "text-white" : "text-slate-900";
  const activeColor = isDark ? "text-white border-white" : "text-slate-900 border-slate-900";
  const inactiveColor = isDark
    ? "text-white/60 hover:text-white"
    : "text-slate-900/60 hover:text-slate-900";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-16 sm:h-24 px-4 sm:px-10 glass-panel rounded-none border-x-0 border-t-0 bg-white/5">
      <Link href="/" className={`text-lg sm:text-2xl font-bold tracking-tight font-display ${logoColor}`}>
        Maajid Husain
      </Link>
      <nav className="flex items-center gap-4 sm:gap-9">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-xs sm:text-sm font-semibold uppercase tracking-[1px] sm:tracking-[2px] transition-all duration-300 ${
              pathname === link.href
                ? `${activeColor} border-b pb-0.5`
                : inactiveColor
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
