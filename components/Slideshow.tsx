"use client";

import { useState } from "react";
import Image from "next/image";

interface Slide {
  src: string;
  caption: string;
}

export default function Slideshow({ slides }: { slides: Slide[] }) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));

  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="relative w-full h-80 rounded-xl overflow-hidden bg-gray-800">
        <Image
          src={slides[current].src}
          alt={slides[current].caption}
          fill
          sizes="(max-width: 768px) 100vw, 672px"
          className="object-cover transition-opacity duration-500"
          priority
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-sm text-center py-2 px-4">
          {slides[current].caption}
        </div>
        <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
          {current + 1} / {slides.length}
        </div>
      </div>
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg transition-colors"
        aria-label="Previous"
      >&#10094;</button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg transition-colors"
        aria-label="Next"
      >&#10095;</button>
      <div className="flex justify-center gap-2 mt-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-colors ${i === current ? "bg-blue-400" : "bg-gray-600 hover:bg-gray-400"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
