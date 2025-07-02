'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// Project data representing 10 selected projects
const projects = [
  {
    id: 'flashpoint-qr',
    title: 'FlashPoint QR',
    description: 'A QR-based ordering system for restaurants with kitchen display and inventory management',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
    image: '/projects/flashpoint-qr.jpg',
    color: '#ff8906'
  },
  {
    id: 'purpsend',
    title: 'PurpSend',
    description: 'A financial transaction platform for sending money securely across borders',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    image: '/projects/purpsend.jpg',
    color: '#7f5af0'
  },
  {
    id: 'clinical-assistant',
    title: 'Clinical Assistant',
    description: 'AI-powered clinical documentation and decision support system for healthcare professionals',
    tags: ['Next.js', 'OpenAI', 'TypeScript', 'Firebase'],
    image: '/projects/clinical-assistant.jpg',
    color: '#e53170'
  },
  {
    id: 'gasaroo-delivery',
    title: 'Gasaroo Delivery',
    description: 'On-demand fuel delivery service application with real-time tracking',
    tags: ['React Native', 'Firebase', 'Google Maps API', 'Node.js'],
    image: '/projects/gasaroo-delivery.jpg',
    color: '#f25f4c'
  },
  {
    id: 'rag-chatbot',
    title: 'RAG Chatbot Platform',
    description: 'Retrieval-augmented generation platform for building knowledge-based chatbots',
    tags: ['Python', 'FastAPI', 'Vector DB', 'React'],
    image: '/projects/rag-chatbot.jpg',
    color: '#2cb67d'
  },
  {
    id: 'ehright',
    title: 'EHRight',
    description: 'Electronic health records management system with patient portal',
    tags: ['Angular', 'Express', 'PostgreSQL', 'TypeScript'],
    image: '/projects/ehright.jpg',
    color: '#ff8906'
  },
  {
    id: 'job-application-agent',
    title: 'Job Application Agent',
    description: 'AI-powered assistant for automating job applications and tracking progress',
    tags: ['React', 'Python', 'NLP', 'MongoDB'],
    image: '/projects/job-application-agent.jpg',
    color: '#7f5af0'
  },
  {
    id: 'splitwise',
    title: 'SplitWise',
    description: 'Expense splitting application for groups, trips, and roommates',
    tags: ['React Native', 'Firebase', 'Redux', 'Expo'],
    image: '/projects/splitwise.jpg',
    color: '#e53170'
  },
  {
    id: 'culinary-compass',
    title: 'Culinary Compass',
    description: 'Recipe discovery and meal planning application with ingredient tracking',
    tags: ['Vue.js', 'Nuxt', 'Supabase', 'JavaScript'],
    image: '/projects/culinary-compass.jpg',
    color: '#f25f4c'
  },
  {
    id: 'ai-forex-trading',
    title: 'AI Forex Trading',
    description: 'Machine learning-based trading signals and analysis for forex markets',
    tags: ['Python', 'TensorFlow', 'FastAPI', 'React'],
    image: '/projects/ai-forex-trading.jpg',
    color: '#2cb67d'
  }
];

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
      className="card-hover rotate-3d glassmorphism rounded-xl overflow-hidden"
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
    <section id="projects" className="section relative bg-background py-20" ref={sectionRef}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A collection of my most significant projects developed with Cascade, showcasing various technologies and solutions.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/projects" className="btn-outline">
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
