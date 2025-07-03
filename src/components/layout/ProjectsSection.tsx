'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// Import projects data from data file
import { projects } from '@/data/projects';

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  color: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  const router = useRouter();
  
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-hover rotate-3d glassmorphism rounded-xl overflow-hidden cursor-pointer"
      onClick={() => router.push(`/projects/${project.id}`)}
    >
      <div 
        className="h-48 relative"
        style={{ 
          backgroundImage: `linear-gradient(rgba(15, 14, 23, 0.5), rgba(15, 14, 23, 0.8)), url(${project.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div 
          className="absolute inset-0 opacity-30"
          style={{ 
            background: `linear-gradient(45deg, ${project.color}, transparent)`
          }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-foreground/70 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag: string) => (
            <span 
              key={tag} 
              className="text-xs py-1 px-2 rounded-full" 
              style={{ 
                backgroundColor: `${project.color}20`,
                color: project.color
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function ProjectsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20" ref={sectionRef}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A selection of my recent work built with modern technologies and best practices.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
