"use client";

import { TypewriterEffect } from "@/components/ui/aceternity/typewriter-effect";
import { Card3D } from "@/components/ui/aceternity/3d-card";
import Navigation from "@/components/navigation";
import Link from "next/link";

export default function Home() {
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
    { title: "Web Application for IT Company", icon: "💼", description: "Custom ticket management system with automated calendar and billing" },
    { title: "E-commerce Website", icon: "🛒", description: "Full-stack online store with payment integration" },
    { title: "Mobile App Development", icon: "📱", description: "Cross-platform mobile application for small business" },
    { title: "Database Optimization", icon: "🗄️", description: "Performance improvement for existing database systems" },
    { title: "Custom CMS Development", icon: "📝", description: "Content management system tailored to client needs" },
    { title: "Website Redesign", icon: "🎨", description: "Modern responsive website with improved UX/UI" },
  ];

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
            <Card3D key={index} className="h-64 p-6 flex flex-col items-center justify-center text-center rounded-xl border border-gray-200 hover:border-purple-500 transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-4">{project.icon}</div>
              <h3 className="text-xl font-medium mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm">{project.description}</p>
            </Card3D>
          ))}
        </div>
      </section>
    </div>
  );
}
