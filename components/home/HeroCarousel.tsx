'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const slides = [
  {
    src: '/hero-photo.svg',
    alt: 'Founder working on a laptop',
  },
  {
    src: '/hero-photo2.svg',
    alt: 'Founder working on a laptop',
  },
];

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="ml-auto w-full max-w-[1000px]">
      <div className="relative overflow-hidden">
        <div className="relative min-h-[460px] sm:min-h-[560px] lg:min-h-[700px]">
          <div
            className="absolute inset-0 flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              width: `${slides.length * 100}%`,
              transform: `translateX(-${activeIndex * (100 / slides.length)}%)`,
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={slide.src}
                className="relative shrink-0"
                style={{ width: `${100 / slides.length}%` }}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 1023px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-[8px]">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Go to hero slide ${index + 1}`}
            aria-pressed={activeIndex === index}
            onClick={() => setActiveIndex(index)}
            className={`h-3 w-3 rounded-full transition-colors duration-300 ${
              activeIndex === index ? 'bg-[#5C5C5C]' : 'bg-[#D7D7D2]'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
