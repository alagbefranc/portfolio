'use client';

import React, { useRef } from 'react';
import { useScroll } from 'framer-motion';
import dynamic from 'next/dynamic';

// Dynamically import all components with motion values or random numbers
// This ensures they only render on the client side
const ClientOnlyChromeGrid = dynamic(
  () => import('../ui/chrome-grid').then((mod) => mod.ChromeGrid),
  { ssr: false }
);

// Dynamically import motion components with transforms
const ClientOnlyHeroContent = dynamic(
  () => import('../client/HeroContent'),
  { ssr: false }
);

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });
  
  return (
    <section ref={ref} className="relative h-screen flex items-center overflow-hidden">
      {/* Chrome Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <ClientOnlyChromeGrid />
      </div>
      
      {/* Overlay gradient for better text contrast */}
      <div className="absolute inset-0 bg-black/30 z-[1] pointer-events-none" />
      
      {/* Client-only hero content with all motion values */}
      <ClientOnlyHeroContent scrollYProgress={scrollYProgress} />
    </section>
  );
}
