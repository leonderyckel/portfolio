"use client";

import { useState } from "react";
import { TypewriterEffect } from "@/components/ui/aceternity/typewriter-effect";
import { Card3D } from "@/components/ui/aceternity/3d-card";
import Navigation from "@/components/navigation";
import Link from "next/link";
import ProjectModal from "@/components/ui/project-modal";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const words = [
    {
      text: "Hello,",
      
    },
    {
      text: "welcome",
    },
    {
      text: "to"
    },
    {
      text: "my",
    },
    {
      text: "Portfolio",
    },
  ];

  const projects = [
    {
      title: "Ticket Management System",
      icon: "💼",
      description: "Custom ticket management system with automated calendar and billing",
      status: "completed" as const,
      difficulty: "Hard" as const,
      duration: "3 months",
      client: "Bitrix IT",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS", "Node.js"],
      images: ["/images/pc-build-1.jpg", "/images/pc-build-2.jpg"],
      links: {
        github: "https://github.com/leonderyckel/ticket-system",
        demo: "https://ticket-demo.vercel.app"
      },
      notes: `This project was developed for my internship at Bitrix IT in Cape Town. The system includes:

• Automated ticket scheduling with calendar integration
• Client management with detailed contact information
• Billing module with invoice generation
• Real-time notifications for urgent tickets
• Interactive network diagrams for client setups
• Secure password storage for client systems

The main challenge was creating a seamless workflow that could handle the company's diverse client base while maintaining security standards. The system reduced ticket resolution time by 40% and improved client satisfaction significantly.`
    },
    {
      title: "E-commerce Platform",
      icon: "🛒",
      description: "Full-stack online store with payment integration and admin panel",
      status: "completed" as const,
      difficulty: "Medium" as const,
      duration: "2 months",
      client: "Local Boutique",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Express.js", "CSS3"],
      images: ["/images/react-formation-1.png", "/images/react-formation-2.png"],
      links: {
        website: "https://boutique-example.com",
        github: "https://github.com/leonderyckel/ecommerce-platform"
      },
      notes: `Complete e-commerce solution built for a local fashion boutique. Features include:

• Product catalog with advanced filtering
• Shopping cart with persistent sessions
• Secure payment processing via Stripe
• Order tracking and management
• Admin dashboard for inventory management
• Responsive design for mobile shopping

The client reported a 200% increase in online sales within the first month of launch. The platform handles both physical and digital products with automated email confirmations.`
    },
    {
      title: "Restaurant Management App",
      icon: "📱",
      description: "Cross-platform mobile app for restaurant operations",
      status: "in-progress" as const,
      difficulty: "Hard" as const,
      duration: "4 months (ongoing)",
      client: "Cape Town Restaurant",
      technologies: ["React Native", "Firebase", "Redux", "Expo", "TypeScript"],
      images: ["/images/python-formation-1.png"],
      links: {
        github: "https://github.com/leonderyckel/restaurant-app"
      },
      notes: `Currently developing a comprehensive restaurant management solution featuring:

• Table reservation system with real-time availability
• Menu management with photo uploads
• Order processing and kitchen notifications
• Staff scheduling and payroll integration
• Customer loyalty program
• Analytics dashboard for sales tracking

Progress: 70% complete. Currently working on the payment integration and testing phase. Expected completion: Next month.`
    },
    {
      title: "Database Optimization Project",
      icon: "🗄️",
      description: "Performance improvement for legacy database systems",
      status: "completed" as const,
      difficulty: "Medium" as const,
      duration: "3 weeks",
      client: "Healthcare Clinic",
      technologies: ["MySQL", "Python", "SQL", "Redis", "Docker"],
      images: ["/images/webinar-ia-rgpd-1.png"],
      links: {},
      notes: `Optimized a legacy patient management database for a busy clinic. Improvements included:

• Query optimization reducing load times by 85%
• Database indexing strategy implementation
• Caching layer with Redis for frequent queries
• Data migration to more efficient schema
• Backup and recovery procedures

The clinic can now handle 3x more concurrent users during peak hours. Patient check-in time reduced from 5 minutes to under 1 minute.`
    },
    {
      title: "Personal Blog CMS",
      icon: "📝",
      description: "Custom content management system for bloggers",
      status: "in-progress" as const,
      difficulty: "Easy" as const,
      duration: "1 month (ongoing)",
      client: "Personal Project",
      technologies: ["Next.js", "Markdown", "Tailwind CSS", "Vercel"],
      images: [],
      links: {
        github: "https://github.com/leonderyckel/blog-cms"
      },
      notes: `Building a simple yet powerful CMS for content creators. Features in development:

• Markdown-based content creation
• SEO optimization tools
• Social media integration
• Comment system with moderation
• Analytics integration
• Mobile-first responsive design

Progress: 40% complete. Currently working on the admin interface and content editor. This serves as a learning project for exploring new Next.js 14 features.`
    },
    {
      title: "Portfolio Website Redesign",
      icon: "🎨",
      description: "Modern responsive website with improved UX/UI",
      status: "completed" as const,
      difficulty: "Easy" as const,
      duration: "2 weeks",
      client: "Graphic Designer",
      technologies: ["HTML5", "CSS3", "JavaScript", "GSAP", "Figma"],
      images: ["/images/pc-build-3.jpg", "/images/pc-build-4.jpg"],
      links: {
        website: "https://designer-portfolio.com",
        demo: "https://portfolio-demo.netlify.app"
      },
      notes: `Complete redesign of a graphic designer's portfolio website focusing on:

• Clean, minimalist design showcasing artwork
• Smooth animations and micro-interactions
• Fast loading times with optimized images
• Contact form with email integration
• Mobile-responsive layout
• Gallery with lightbox functionality

The client reported increased client inquiries by 150% and improved user engagement metrics. The site now loads 3x faster than the previous version.`
    }
  ];

  const openModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <section className="container mx-auto px-4 py-24 md:py-32">
        <div className="flex flex-col items-center text-center">
          <div className="gradient-wrapper">
            <TypewriterEffect className="text-4xl sm:text-5xl gradient-title md:text-6xl font-bold mb-8" words={words} />
          </div>
          
          <p className="text-lg md:text-xl max-w-3xl mb-10 text-gray-600">
            Discover my professional journey and the projects I create for my clients. Specialized in web development and custom IT solutions.
          </p>
          
          <div className="flex gap-4">
            <Link 
              href="/cv" 
              className="px-6 py-3 rounded-md bg-purple-500 text-white hover:bg-purple-600 transition-colors"
            >
              View my CV
            </Link>
          </div>
        </div>
      </section>
      
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center gradient-title">My Projects</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="cursor-pointer"
              onClick={() => openModal(project)}
            >
              <Card3D className="h-80 p-6 flex flex-col items-center justify-center text-center rounded-xl border border-gray-200 hover:border-purple-500 transition-all duration-300 hover:scale-105 relative">
                {/* Status badge */}
                <div className="absolute top-4 right-4">
                  {project.status === "completed" ? (
                    <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full border border-green-200">
                      ✅ Done
                    </span>
                  ) : (
                    <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full border border-yellow-200">
                      🚧 In Progress
                    </span>
                  )}
                </div>
                
                <div className="text-4xl mb-4">{project.icon}</div>
                <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                
                {/* Technologies preview */}
                <div className="flex flex-wrap gap-1 justify-center mb-4">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span key={i} className="px-2 py-1 text-xs bg-blue-50 text-blue-600 rounded border border-blue-200">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs bg-gray-50 text-gray-600 rounded border border-gray-200">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="text-sm text-gray-500 mt-auto">
                  Click to view details
                </div>
              </Card3D>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </div>
  );
}
