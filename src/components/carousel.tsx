"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

interface InfiniteCarouselProps {
  images: { src: string; alt: string }[];
  speed?: number; // pixels per second
}

export default function InfiniteCarousel({
  images,
  speed = 50,
}: InfiniteCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll effect
  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    let animationFrame: number;
    let lastTime = performance.now();

    const scrollStep = (time: number) => {
      if (!isPaused) {
        const delta = (time - lastTime) / 1000; // seconds
        container.scrollLeft += speed * delta;

        // Loop back for infinite scroll
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      lastTime = time;
      animationFrame = requestAnimationFrame(scrollStep);
    };

    animationFrame = requestAnimationFrame(scrollStep);

    return () => cancelAnimationFrame(animationFrame);
  }, [speed, isPaused]);

  return (
    <div
      className="overflow-x-scroll no-scrollbar bg-white "
      ref={carouselRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex w-max">
        {[...images, ...images].map((img, index) => (
          <div
            key={index}
            className="relative w-60 h-52 flex-shrink-0 m-2 rounded-lg overflow-hidden shadow-md mt-5"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="240px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
