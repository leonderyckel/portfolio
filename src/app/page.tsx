"use client";

import { TypewriterEffect } from "@/components/ui/aceternity/typewriter-effect";
import { Card3D } from "@/components/ui/aceternity/3d-card";
import Navigation from "@/components/navigation";
import Link from "next/link";

export default function Home() {
  const words = [
    {
      text: "Bonjour,",
      
    },
    {
      text: "bienvenue",
    },
    {
      text: "sur"
    },
    {
      text: "mon",
    },
    {
      text: "Portfolio",
    },
  ];

  const skills = [
    { title: "Développement Web", icon: "💻", link: "/competences#developpement" },
    { title: "Communication", icon: "🗣️", link: "/competences#communication" },
    { title: "Gestion de Projet", icon: "📊", link: "/competences#gestion" },
    { title: "Design", icon: "🎨", link: "/competences#design" },
    { title: "Informatique", icon: "🔧", link: "/competences#informatique" },
    { title: "Langues", icon: "🌏", link: "/competences#langues" },
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
            Découvrez mon parcours professionnel, mes projets, et mon analyse réflexive sur mes compétences et expériences.
          </p>
          
          <div className="flex gap-4">
            <Link 
              href="/cv" 
              className="px-6 py-3 rounded-md bg-purple-500 text-white hover:bg-purple-600 transition-colors"
            >
              Voir mon CV
            </Link>
            <Link 
              href="/projet" 
              className="px-6 py-3 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors"
            >
              Mon Projet Pro
            </Link>
          </div>
        </div>
      </section>
      
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center gradient-title">Mes Domaines de Compétences</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Link href={skill.link} key={index}>
              <Card3D className="h-48 p-6 flex flex-col items-center justify-center text-center rounded-xl border border-gray-200 hover:border-purple-500 transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="text-xl font-medium">{skill.title}</h3>
              </Card3D>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
