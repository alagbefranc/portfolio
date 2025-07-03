import Hero from '@/components/layout/Hero';
import ProjectsSection from '@/components/layout/ProjectsSection';
import TestimonialsSection from '@/components/layout/TestimonialsSection';
import { Suspense } from 'react';

export default function Home() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
        <ProjectsSection />
        
        {/* About Section with Parallax Effect */}
        <section id="about" className="section relative overflow-hidden">
          <div className="absolute inset-0 -z-10 opacity-20">
            {Array.from({ length: 20 }).map((_, i) => (
              <div 
                key={i}
                className="absolute rounded-full"
                style={{
                  width: `${Math.random() * 300 + 50}px`,
                  height: `${Math.random() * 300 + 50}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  background: `radial-gradient(circle, rgba(127, 90, 240, ${Math.random() * 0.8}) 0%, rgba(255, 137, 6, 0) 70%)`,
                  transform: `scale(${Math.random() * 1 + 0.5})`,
                }}
              />
            ))}
          </div>
          
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="glassmorphism p-8 rounded-2xl">
                <h2 className="text-3xl font-bold mb-6">About This <span className="gradient-text">Portfolio</span></h2>
                <p className="mb-4 text-foreground/80">
                  This portfolio showcases a collection of 10 diverse projects developed using Cascade, an AI-assisted 
                  development environment that helps create powerful web applications quickly and efficiently.
                </p>
                <p className="mb-4 text-foreground/80">
                  The projects featured here represent a range of applications from financial services and healthcare 
                  to AI-powered tools and mobile applications, demonstrating technical versatility and problem-solving capabilities.
                </p>
                <p className="text-foreground/80">
                  This portfolio itself is built with Next.js, featuring modern design elements such as 3D models, 
                  gradient colors, and parallax scrolling effects to create an engaging user experience.
                </p>
              </div>
              
              <div className="glow p-1 rounded-2xl">
                <div className="bg-muted p-8 rounded-xl h-full">
                  <h3 className="text-2xl font-bold mb-4">Skills & Technologies</h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div>
                      <h4 className="text-lg font-medium mb-2 text-primary">Frontend</h4>
                      <ul className="space-y-1 text-sm text-foreground/80">
                        <li>React / Next.js</li>
                        <li>TypeScript</li>
                        <li>Tailwind CSS</li>
                        <li>Three.js / React Three Fiber</li>
                        <li>Framer Motion</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-2 text-accent">Backend</h4>
                      <ul className="space-y-1 text-sm text-foreground/80">
                        <li>Node.js / Express</li>
                        <li>Python / FastAPI</li>
                        <li>MongoDB / PostgreSQL</li>
                        <li>Firebase</li>
                        <li>RESTful APIs</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-lg font-medium mb-2 text-tertiary">Mobile</h4>
                      <ul className="space-y-1 text-sm text-foreground/80">
                        <li>React Native</li>
                        <li>Expo</li>
                        <li>Mobile-first design</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-2 text-secondary">Other</h4>
                      <ul className="space-y-1 text-sm text-foreground/80">
                        <li>AI Integration</li>
                        <li>Machine Learning</li>
                        <li>UI/UX Design</li>
                        <li>Responsive Design</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <TestimonialsSection />
        
        {/* Contact CTA Section */}
        <section id="contact" className="section py-32 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted opacity-90"></div>
          </div>
          
          <div className="container-custom max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Work <span className="gradient-text">Together</span></h2>
            <p className="text-lg text-foreground/80 mb-10 max-w-2xl mx-auto">
              Interested in collaborating or learning more about these projects? Feel free to reach out through the contact form below.
            </p>
            
            <div className="glassmorphism p-8 rounded-2xl">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full p-3 bg-background/20 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full p-3 bg-background/20 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your email"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input 
                    type="text" 
                    className="w-full p-3 bg-background/20 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Subject"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    rows={4} 
                    className="w-full p-3 bg-background/20 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <div className="md:col-span-2">
                  <button className="btn-primary w-full py-4">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Suspense>
    </>
  );
}
