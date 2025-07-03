'use client';

import React, { useState, useEffect } from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';
import Link from 'next/link';
import CubeModel from '../3d/CubeModel';

interface HeroContentProps {
  scrollYProgress: MotionValue<number>;
}

// Separate particle effect component to handle all animations
const ParticleEffect = ({ opacity }: { opacity: MotionValue<number> }) => {
  const [particles, setParticles] = useState<Array<{
    id: number;
    left: string;
    top: string;
    scale: number;
    yMovement: number[];
    duration: number;
  }>>([]);

  // Generate particles only on client-side
  useEffect(() => {
    const newParticles = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      scale: Math.random() * 0.5 + 0.5,
      yMovement: [Math.random() * 10, Math.random() * -10],
      duration: Math.random() * 3 + 2,
    }));
    
    setParticles(newParticles);
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 z-[2] pointer-events-none"
      style={{ opacity }}
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1.5 h-1.5 rounded-full bg-primary/30"
          style={{
            left: particle.left,
            top: particle.top,
            scale: particle.scale,
          }}
          animate={{
            y: particle.yMovement,
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </motion.div>
  );
};

// Main client-only hero content component
const HeroContent: React.FC<HeroContentProps> = ({ scrollYProgress }) => {
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.8]);
  
  return (
    <>
      {/* Moving particles/dots */}
      <ParticleEffect opacity={opacity} />

      {/* Content container - positioned with selective pointer events */}
      <div className="container-custom relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left side (text) */}
        <motion.div 
          className="flex-1 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{ y, opacity, scale }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Francis Alagbe</span> 
            <br />Software Developer
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 mb-8">
            Welcome to my portfolio showcasing innovative projects built with the latest web technologies 
            and modern design principles. Passionate about creating elegant solutions to complex problems.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="#projects" className="btn-primary">
              View Projects
            </Link>
            <Link href="#about" className="btn-outline">
              About Me
            </Link>
          </div>
        </motion.div>

        {/* Right side (3D model) */}
        <motion.div 
          className="flex-1 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <div className="animate-float">
            <CubeModel size={400} />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ opacity }}
      >
        <p className="text-sm text-foreground/60 mb-2">Scroll to explore</p>
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="text-foreground/60"
        >
          <path 
            d="M12 5L12 19M12 19L19 12M12 19L5 12" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </>
  );
};

export default HeroContent;
