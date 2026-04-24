"use client";

import Image from "next/image";
import { useState } from "react";

interface ImgStackProps {
  images: string[];
}

const STACK_ROTATIONS = [4, -3, 6, -5, 2];
const STACK_OFFSETS = [
  { x: 10, y: 6 },
  { x: -8, y: 5 },
  { x: 14, y: 8 },
  { x: -12, y: 7 },
  { x: 6, y: 4 },
];

export default function ImgStack({ images }: ImgStackProps) {
  const [topIndex, setTopIndex] = useState(0);

  const getCardStyle = (imageIndex: number) => {
    const total = images.length;
    const depth = ((imageIndex - topIndex) % total + total) % total;

    if (depth === 0) {
      return {
        transform: "rotate(0deg) translate(0px, 0px)",
        zIndex: total,
        boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
      };
    }

    const rot = STACK_ROTATIONS[(depth - 1) % STACK_ROTATIONS.length];
    const off = STACK_OFFSETS[(depth - 1) % STACK_OFFSETS.length];

    return {
      transform: `rotate(${rot}deg) translate(${off.x}px, ${off.y}px)`,
      zIndex: total - depth,
      boxShadow: "0 8px 20px rgba(0,0,0,0.35)",
    };
  };

  const advance = () => setTopIndex((prev) => (prev + 1) % images.length);

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="relative w-72 h-56" style={{ perspective: "600px" }}>
        {images.map((src, i) => (
          <div
            key={i}
            className="absolute inset-0 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-out"
            style={getCardStyle(i)}
            onClick={advance}
          >
            <Image
              src={src}
              alt={`Photo ${i + 1}`}
              fill
              className="object-cover"
              sizes="288px"
            />
          </div>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <div className="flex gap-1.5">
          {images.map((_, i) => {
            const depth = ((i - topIndex) % images.length + images.length) % images.length;
            return (
              <button
                key={i}
                onClick={() => setTopIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  depth === 0
                    ? "w-5 bg-white"
                    : "w-1.5 bg-gray-600 hover:bg-gray-400"
                }`}
              />
            );
          })}
        </div>
        <span className="text-xs text-gray-500">
          {((topIndex % images.length) + 1)} / {images.length}
        </span>
      </div>
    </div>
  );
}
