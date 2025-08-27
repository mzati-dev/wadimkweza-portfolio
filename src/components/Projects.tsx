import React from 'react';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      image: "https://d64gsuwffb70l.cloudfront.net/68adc6976e048bfc8e4946f2_1756219082548_75ef00cf.webp",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://d64gsuwffb70l.cloudfront.net/68adc6976e048bfc8e4946f2_1756219084438_435d8574.webp",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "AI-Powered Analytics",
      description: "Machine learning dashboard for data visualization and predictive analytics with interactive charts and real-time insights.",
      image: "https://d64gsuwffb70l.cloudfront.net/68adc6976e048bfc8e4946f2_1756219086456_cdd135ea.webp",
      technologies: ["Python", "TensorFlow", "D3.js", "Flask"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication, transaction history, and budget tracking features.",
      image: "https://d64gsuwffb70l.cloudfront.net/68adc6976e048bfc8e4946f2_1756219088529_408d05c8.webp",
      technologies: ["React Native", "Express", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Social Media Dashboard",
      description: "Comprehensive social media management platform with scheduling, analytics, and multi-platform posting capabilities.",
      image: "https://d64gsuwffb70l.cloudfront.net/68adc6976e048bfc8e4946f2_1756219090448_57a69fd4.webp",
      technologies: ["Angular", "TypeScript", "GraphQL"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Cryptocurrency Tracker",
      description: "Real-time cryptocurrency portfolio tracker with price alerts, market analysis, and trading recommendations.",
      image: "https://d64gsuwffb70l.cloudfront.net/68adc6976e048bfc8e4946f2_1756219092471_5cb65fae.webp",
      technologies: ["React", "Redux", "WebSocket", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore my latest work showcasing innovative solutions and cutting-edge technologies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;