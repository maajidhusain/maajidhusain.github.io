"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type Project = {
  title: string;
  tags: string;
  category: string;
  description: string;
  link?: string;
  image: string;
  imageAlt: string;
  Icon: LucideIcon;
};

export function StackedProjectCards({ projects }: { projects: Project[] }) {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Only run on mobile viewports where this layout is visible
    if (window.innerWidth >= 768) return;

    const scroller = document.querySelector(".glass-scroll") as HTMLElement;
    if (!scroller) return;

    const ctx = gsap.context(() => {
      sectionRefs.current.forEach((section, index) => {
        if (!section || index >= projects.length - 1) return;
        const card = cardRefs.current[index];
        if (!card) return;

        const targetScale = 1 - (projects.length - index) * 0.04;

        gsap.to(card, {
          scale: targetScale,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            scroller,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    });

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, [projects]);

  return (
    <div>
      {projects.map((project, index) => {
        const { title, tags, category, description, link, image, imageAlt, Icon } = project;
        // Each card peeks 16px below the previous, starting just below the navbar
        const topPad = 104 + index * 16;

        return (
          <div
            key={title}
            ref={(el) => { sectionRefs.current[index] = el; }}
            className="flex items-start justify-center"
            style={{
              height: "100vh",
              position: "sticky",
              top: 0,
              zIndex: index + 1,
              paddingTop: `${topPad}px`,
              paddingLeft: "16px",
              paddingRight: "16px",
            }}
            >
            <div
              ref={(el) => { cardRefs.current[index] = el; }}
              className="glass-panel rounded-2xl p-5 flex flex-col gap-4 w-full"
              style={{ transformOrigin: "top center" }}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10 bg-white/5">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 bg-black/30 backdrop-blur-md">
                  <Icon size={20} className="text-white/80" strokeWidth={1.5} />
                </div>
              </div>

              <div>
                <p className="text-white/50 text-[10px] font-semibold tracking-widest uppercase mb-1">
                  {category}
                </p>
                <h3 className="text-white text-lg font-display font-medium leading-snug">
                  {title}
                </h3>
                <p className="text-white/50 text-[10px] font-semibold tracking-widest uppercase mt-1">
                  {tags}
                </p>
              </div>

              <p className="text-white/60 text-sm font-light leading-relaxed">{description}</p>

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
          </div>
        );
      })}
      {/* breathing room after last card */}
      <div style={{ height: "30vh" }} />
    </div>
  );
}
