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
      title: "FindMe - Vehicle Parts Platform",
      icon: "🔍",
      description: "AI-powered platform for finding vehicle parts with community and marketplace",
      status: "in-progress" as const,
      difficulty: "Hard" as const,
      duration: "6 months (ongoing)",
      client: "Personal Startup Project",
      technologies: ["Next.js", "TypeScript", "AI/ML", "Web Crawling", "PostgreSQL", "Tailwind CSS", "Vercel"],
      images: ["/images/react-formation-1.png", "/images/react-formation-2.png"],
      links: {
        website: "https://findme-taupe.vercel.app/",
        github: "https://github.com/leonderyckel/findme-platform"
      },
      notes: `Comprehensive vehicle parts discovery platform featuring three main components:

🤖 **AI Parts Assistant**
• Expert knowledge base with live web search capabilities
• Real-time pricing information and part compatibility
• Intelligent crawling system that learns from automotive websites
• GPT-4 powered recommendations for parts and installation

🏛️ **Community Forum (Reddit-style)**
• Ask questions and share tutorials with vehicle enthusiasts
• User-generated content and peer support system
• Upvoting system for best answers and solutions
• Category-based discussions for different vehicle types

🛒 **Trusted Marketplace**
• Buy and sell vehicle parts with confidence
• Verified seller system and buyer protection
• Real-time inventory tracking and pricing
• Integration with major automotive suppliers

Progress: 75% complete. Currently finalizing the AI crawling optimization and marketplace payment integration. The platform aims to revolutionize how people find and purchase vehicle parts by combining AI intelligence with community knowledge.`
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
