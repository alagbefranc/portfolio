'use client';

import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import { projects } from '../../../data/projects';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ArrowLeftIcon, CodeBracketIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

// Project type definition based on the actual data structure
interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  image: string;
  color: string;
  githubUrl?: string;
  liveUrl?: string;
  features?: string[];
  technologies?: string[];
}

// Sample code snippet to display
const getCodeSnippet = (id: string) => {
  // This would typically come from your data source
  // For now, returning sample snippets based on project ID
  const snippets: {[key: string]: string} = {
    'flashpoint-qr': `// QR Code Generator Component
import QRCode from 'qrcode.react';

export function QRCodeGenerator({ value }: { value: string }) {
  return (
    <div className="qr-container p-4 bg-white rounded-lg shadow-lg">
      <QRCode 
        value={value}
        size={200}
        bgColor={"#ffffff"}
        fgColor={"#000000"}
        level={"H"}
        includeMargin={true}
      />
    </div>
  );
}`,
    'default': `// React Component Example
import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="counter-container">
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`
  };
  
  return snippets[id] || snippets.default;
};

export default function ProjectDetail() {
  const params = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const [headerRef, headerInView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });
  
  const [featuresRef, featuresInView] = useInView({
    triggerOnce: false,
    threshold: 0.2
  });
  
  const [codeRef, codeInView] = useInView({
    triggerOnce: false,
    threshold: 0.2
  });
  
  const [demoRef, demoInView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  // Parallax effects
  const headerY = useTransform(scrollYProgress, [0, 0.5], ['0%', '100%']);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.3, 0.4], [1, 0.8, 0.6, 0.4]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const titleX = useTransform(scrollYProgress, [0, 0.3], ['0px', '-50px']);
  const featuresX = useTransform(scrollYProgress, [0, 0.5], ['100px', '0px']);

  useEffect(() => {
    // Find the project from our data
    const projectId = params?.id as string;
    const foundProject: Project | null = projects.find(p => p.id === projectId) || null;
    
    if (foundProject) {
      setProject(foundProject);
    } else {
      notFound();
    }
    setLoading(false);
  }, [params]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <p className="mb-8">The project you're looking for doesn't exist.</p>
        <Link href="/#projects" className="btn-primary">
          Back to Projects
        </Link>
      </div>
    );
  }
  
  const codeSnippet = project ? getCodeSnippet(project.id) : '';
  
  // Non-null assertion after the check to help TypeScript understand project is defined
  if (!project) return null;
  
  // TypeScript can now safely use project without null checks
  // as we've verified it's not null above
  const safeProject: Project = project;
  
  return (
    <div className="relative" ref={containerRef}>
      {/* Back navigation - fixed position */}
      <div className="fixed top-8 left-8 z-50">
        <Link 
          href="/#projects" 
          className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors bg-background/80 backdrop-blur-sm py-2 px-4 rounded-full shadow-lg"
        >
          <ArrowLeftIcon className="w-5 h-5" />
          <span>Back to projects</span>
        </Link>
      </div>

      {/* Hero section with parallax effect */}
      <motion.div 
        className="h-screen w-full relative overflow-hidden flex items-center justify-center"
        ref={headerRef}
        style={{ y: headerY, opacity, scale }}
      >
        <div 
          className="absolute inset-0 z-0"
          style={{ 
            backgroundImage: `linear-gradient(rgba(15, 14, 23, 0.5), rgba(15, 14, 23, 0.8)), url(${safeProject.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        <div 
          className="absolute inset-0 z-0 opacity-40"
          style={{ 
            background: `linear-gradient(135deg, ${safeProject.color}, transparent 70%)`,
          }}
        />
        
        <motion.div 
          className="container mx-auto px-4 z-10 text-center"
          style={{ x: titleX }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {safeProject.title}
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {safeProject.description}
          </motion.p>
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {safeProject.tags.map((tag: string, index: number) => (
              <motion.span
                key={tag}
                className="text-sm py-1.5 px-4 rounded-full"
                style={{ 
                  backgroundColor: `${safeProject.color}20`,
                  color: safeProject.color,
                  border: `1px solid ${safeProject.color}40`
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-8 h-12 rounded-full border-2 border-white/30 flex justify-center items-start p-2"
          >
            <motion.div 
              className="w-1.5 h-3 bg-white rounded-full"
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
          </motion.div>
        </div>
      </motion.div>
      
      {/* Project description with parallax */}
      <div className="bg-background pt-20 pb-16 relative z-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main content */}
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-8 gradient-text inline-block">About The Project</h2>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  {safeProject.longDescription || safeProject.description}
                </p>
              </motion.div>
              
              {/* Features with parallax */}
              {safeProject.features && (
                <motion.div 
                  ref={featuresRef}
                  initial={{ opacity: 0, x: 100 }}
                  animate={featuresInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  style={{ x: featuresX }}
                  className="mb-16"
                >
                  <h2 className="text-3xl font-bold mb-8 gradient-text inline-block">Key Features</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {safeProject.features?.map((feature: string, index: number) => (
                      <motion.div 
                        key={index}
                        className="glassmorphism p-6 rounded-xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <p className="text-foreground/90 font-medium">{feature}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
              
              {/* Code snippet display */}
              <motion.div
                ref={codeRef}
                initial={{ opacity: 0, y: 50 }}
                animate={codeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <div className="flex items-center gap-3 mb-6">
                  <CodeBracketIcon className="w-6 h-6 text-primary" />
                  <h2 className="text-3xl font-bold gradient-text inline-block">Code Showcase</h2>
                </div>
                <div className="glassmorphism rounded-xl overflow-hidden">
                  <div className="bg-black/50 px-4 py-2 flex justify-between items-center border-b border-white/10">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-xs text-foreground/60">component.tsx</span>
                  </div>
                  <pre className="p-6 text-sm overflow-x-auto text-green-300 font-mono">
                    <code>{codeSnippet}</code>
                  </pre>
                </div>
              </motion.div>
              
              {/* Space for App GIF/Demo */}
              <motion.div
                ref={demoRef}
                initial={{ opacity: 0, y: 50 }}
                animate={demoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <div className="flex items-center gap-3 mb-6">
                  <GlobeAltIcon className="w-6 h-6 text-primary" />
                  <h2 className="text-3xl font-bold gradient-text inline-block">Live Demo</h2>
                </div>
                <div 
                  className="glassmorphism rounded-xl p-1 overflow-hidden"
                  style={{ boxShadow: `0 0 40px ${safeProject.color}30` }}
                >
                  <div className="aspect-video w-full bg-black/30 rounded-lg flex items-center justify-center">
                    <p className="text-foreground/60 text-center max-w-md mx-auto px-4">
                      {/* Placeholder for GIF/video/screenshot */}
                      Space for project demo GIF or interactive preview.
                      <br/><br/>
                      <span className="text-sm">(Add your project demonstration here)</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-4">
              <motion.div 
                className="glassmorphism rounded-xl p-6 sticky top-24"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h2 className="text-xl font-bold mb-6 gradient-text inline-block">Project Details</h2>
                
                {safeProject.technologies && (
                  <div className="mb-8">
                    <h3 className="text-sm font-medium text-foreground/60 mb-3">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {safeProject.technologies?.map((tech: string, index: number) => (
                        <span 
                          key={index}
                          className="text-xs py-1 px-2 rounded-full"
                          style={{ 
                            backgroundColor: `${safeProject.color}20`,
                            color: safeProject.color,
                            border: `1px solid ${safeProject.color}40`
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="flex flex-col gap-4 mt-8">
                  {safeProject.githubUrl && (
                    <a 
                      href={safeProject.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-primary w-full text-center flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      View on GitHub
                    </a>
                  )}
                  
                  {safeProject.liveUrl && (
                    <a 
                      href={safeProject.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-outline w-full text-center flex items-center justify-center gap-2"
                      style={{ borderColor: safeProject.color, color: safeProject.color }}
                    >
                      <GlobeAltIcon className="w-5 h-5" />
                      Visit Live Site
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );


}
