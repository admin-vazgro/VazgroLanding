'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useEffect } from 'react';

export default function SiteParallax({ children }: { children: React.ReactNode }) {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const orbOneY = useTransform(scrollY, [0, 1800], [0, -120]);
  const orbTwoY = useTransform(scrollY, [0, 1800], [0, -180]);
  const orbThreeY = useTransform(scrollY, [0, 1800], [0, -90]);

  useEffect(() => {
    if (reduceMotion) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const viewportHeight = window.innerHeight;
      const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'));

      for (const element of elements) {
        const speed = Number(element.dataset.parallax || 18);
        const rect = element.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const distanceFromCenter = (center - viewportHeight / 2) / viewportHeight;
        const y = distanceFromCenter * -speed;
        element.style.setProperty('--parallax-y', `${y.toFixed(2)}px`);
      }
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
    };
  }, [reduceMotion]);

  return (
    <div className="relative">
      {!reduceMotion && (
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <motion.div
            style={{ y: orbOneY }}
            className="absolute left-[-14rem] top-[10rem] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,_rgba(242,240,232,0.95)_0%,_rgba(242,240,232,0)_72%)] blur-3xl"
          />
          <motion.div
            style={{ y: orbTwoY }}
            className="absolute right-[-12rem] top-[34rem] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,_rgba(244,244,241,0.95)_0%,_rgba(244,244,241,0)_72%)] blur-3xl"
          />
          <motion.div
            style={{ y: orbThreeY }}
            className="absolute left-[18%] top-[72rem] h-[20rem] w-[20rem] rounded-full bg-[radial-gradient(circle,_rgba(248,248,245,0.95)_0%,_rgba(248,248,245,0)_72%)] blur-3xl"
          />
        </div>
      )}

      {children}
    </div>
  );
}
