'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted py-16 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-primary blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-accent blur-3xl translate-x-1/3 translate-y-1/3 opacity-30"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12 pb-12 border-b border-white/10">
          <div className="md:col-span-5">
            <Link href="/" className="inline-block mb-6">
              <h3 className="text-2xl font-bold gradient-text">Portfolio Showcase</h3>
            </Link>
            <p className="text-foreground/70 mb-6">
              A collection of innovative projects built with Next.js,
              featuring 3D models, modern design, and cutting-edge technologies.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white/10 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0Z" />
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white/10 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.533 7.11175C21.5482 7.32494 21.5482 7.53817 21.5482 7.75136C21.5482 14.2539 16.599 21.7463 7.5533 21.7463C4.76648 21.7463 2.17767 20.9391 0 19.5382C0.395953 19.5838 0.776625 19.599 1.18781 19.599C3.48727 19.599 5.60405 18.8222 7.29445 17.4975C5.13141 17.4518 3.31979 16.0356 2.69508 14.0863C3 14.132 3.30492 14.1624 3.62508 14.1624C4.06598 14.1624 4.50687 14.1016 4.9173 13.9954C2.66953 13.538 0.974625 11.5736 0.974625 9.16759V9.10669C1.62961 9.47004 2.39086 9.6985 3.19727 9.72876C1.87189 8.84677 1.00527 7.34355 1.00527 5.63787C1.00527 4.72556 1.24875 3.88919 1.67437 3.1579C4.09914 6.11918 7.73534 8.04232 11.8172 8.24782C11.7411 7.88447 11.6954 7.50584 11.6954 7.12717C11.6954 4.42372 13.8736 2.23053 16.5919 2.23053C18.0102 2.23053 19.2901 2.84475 20.208 3.83666C21.3502 3.62347 22.447 3.21304 23.4249 2.65244C23.0614 3.79134 22.2801 4.72556 21.2513 5.3093C22.2497 5.2028 23.2178 4.9289 24.0953 4.53498C23.4249 5.4845 22.5583 6.32087 21.533 7.11175Z" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white/10 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-foreground/70 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="text-foreground/70 hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-foreground/70 hover:text-primary transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-lg font-medium mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#" className="text-foreground/70 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/#" className="text-foreground/70 hover:text-primary transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/#" className="text-foreground/70 hover:text-primary transition-colors">
                  Tutorials
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <h4 className="text-lg font-medium mb-4" id="contact">Contact</h4>
            <form className="space-y-4">
              <div>
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="w-full p-3 bg-background/20 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <textarea 
                  rows={3} 
                  placeholder="Your message" 
                  className="w-full p-3 bg-background/20 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>
              <div>
                <button 
                  type="button" 
                  className="btn-primary w-full"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <motion.div 
          className="text-center text-sm text-foreground/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p>© {currentYear} Portfolio Showcase. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
