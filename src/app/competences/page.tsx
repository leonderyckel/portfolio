import Navigation from "@/components/navigation";
import { Card3D } from "@/components/ui/aceternity/3d-card";
import Link from "next/link";

export default function CompetencesPage() {
  const themes = [
    {
      id: "developpement",
      title: "Développement Web",
      icon: "💻",
      activities: [
        {
          title: "Hackathon Full-Stack Development",
          hours: 8,
          type: "Hackathon",
          proof: "Certificat de participation",
          description: "Participation à un hackathon de 8 heures axé sur le développement d'une application web complète utilisant React, Node.js et MongoDB.",
          reflection: "Cette expérience m'a permis de renforcer mes compétences en développement full-stack et de travailler sous pression. J'ai appris à mieux gérer mon temps et à prioriser les fonctionnalités essentielles.",
        },
        {
          title: "Formation React Avancé",
          hours: 10,
          type: "Formation en ligne",
          proof: "Certificat de réussite",
          description: "Formation approfondie sur les concepts avancés de React, incluant les hooks, le context API, et l'optimisation des performances.",
          reflection: "Cette formation m'a permis de maîtriser des concepts complexes de React que je n'utilisais pas correctement auparavant. J'ai notamment amélioré ma compréhension des patterns de performance.",
        },
      ],
    },
    {
      id: "design",
      title: "UI/UX Design",
      icon: "🎨",
      activities: [
        {
          title: "Workshop Design Thinking",
          hours: 6,
          type: "Atelier",
          proof: "Photos de l'événement",
          description: "Participation à un atelier de design thinking organisé par une agence de design locale, focalisé sur l'UX dans les applications mobiles.",
          reflection: "J'ai découvert l'importance de l'empathie dans le processus de design. Cette approche m'a permis de mieux comprendre les besoins des utilisateurs et d'améliorer mes compétences en wireframing.",
        },
        {
          title: "Cours de Figma Avancé",
          hours: 8,
          type: "Formation en ligne",
          proof: "Certificat de complétion",
          description: "Formation complète sur les fonctionnalités avancées de Figma, incluant les composants, les variants et l'auto-layout.",
          reflection: "Cette formation a transformé ma façon de concevoir des interfaces. Je suis maintenant capable de créer des systèmes de design cohérents et réutilisables, ce qui améliore mon efficacité.",
        },
      ],
    },
    {
      id: "gestion",
      title: "Gestion de Projet",
      icon: "📊",
      activities: [
        {
          title: "Certification Scrum Master",
          hours: 10,
          type: "Certification",
          proof: "Certificat officiel",
          description: "Formation et certification Scrum Master, couvrant les principes agiles, les cérémonies Scrum et la facilitation d'équipe.",
          reflection: "Cette certification m'a donné une compréhension approfondie de la méthodologie Scrum. J'ai appris à faciliter les rituels agiles et à résoudre les obstacles qui empêchent l'équipe d'avancer.",
        },
      ],
    },
    {
      id: "communication",
      title: "Communication",
      icon: "🗣️",
      activities: [
        {
          title: "Atelier Prise de Parole en Public",
          hours: 6,
          type: "Atelier",
          proof: "Attestation de participation",
          description: "Participation à un atelier intensif sur la prise de parole en public, avec exercices pratiques et feedback personnalisé.",
          reflection: "Cet atelier m'a aidé à surmonter ma peur de parler en public. J'ai développé des techniques pour structurer mes présentations et captiver mon audience, compétences essentielles pour ma carrière.",
        },
      ],
    },
    {
      id: "informatique",
      title: "Infrastructure Cloud",
      icon: "☁️",
      activities: [
        {
          title: "Formation AWS Solutions Architect",
          hours: 10,
          type: "Formation en ligne",
          proof: "Badge de compétence",
          description: "Formation complète sur l'architecture de solutions sur AWS, incluant EC2, S3, RDS, et les services de networking.",
          reflection: "Cette formation m'a ouvert les yeux sur les possibilités offertes par le cloud. J'ai acquis une vision plus large de l'architecture d'applications et de l'importance de l'infrastructure scalable.",
        },
      ],
    },
    {
      id: "langues",
      title: "Langues Étrangères",
      icon: "🌏",
      activities: [
        {
          title: "Immersion Linguistique Anglais",
          hours: 10,
          type: "Échange linguistique",
          proof: "Attestation du programme",
          description: "Participation à un programme d'immersion linguistique avec des professionnels anglophones du secteur tech.",
          reflection: "Cette immersion a considérablement amélioré ma fluidité en anglais technique. Je suis maintenant plus à l'aise pour lire la documentation technique et communiquer avec des collègues internationaux.",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center">Acquisition de Compétences</h1>
        <p className="text-xl text-center mb-16 text-foreground/80">
          Mon parcours d'apprentissage organisé par thèmes
        </p>
        
        <div className="space-y-16">
          {themes.map((theme) => (
            <section key={theme.id} id={theme.id} className="scroll-mt-20">
              <div className="flex items-center gap-3 mb-8">
                <div className="text-3xl">{theme.icon}</div>
                <h2 className="text-3xl font-bold text-primary">{theme.title}</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {theme.activities.map((activity, index) => (
                  <Card3D key={index} className="bg-background/50 p-8 rounded-xl border border-foreground/10">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold">{activity.title}</h3>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        {activity.hours} heures
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-0.5 bg-secondary/10 text-secondary rounded-full text-xs">
                        {activity.type}
                      </span>
                      <span className="px-2 py-0.5 bg-accent/10 text-accent rounded-full text-xs">
                        Preuve: {activity.proof}
                      </span>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-medium mb-2">Description:</h4>
                      <p className="text-foreground/80">{activity.description}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Analyse réflexive:</h4>
                      <div className="bg-foreground/5 p-4 rounded-lg">
                        <p className="text-foreground/90 italic">{activity.reflection}</p>
                      </div>
                    </div>
                  </Card3D>
                ))}
              </div>
            </section>
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-background/50 rounded-xl border border-foreground/10">
          <h2 className="text-2xl font-bold mb-6 text-primary">Importance de l'Apprentissage Continu</h2>
          <p className="mb-4">
            Dans un domaine aussi dynamique que le développement web, l'apprentissage continu est essentiel pour rester compétitif et pertinent. Chaque activité d'acquisition de compétences que j'entreprends est soigneusement choisie pour compléter mon profil professionnel et m'aider à atteindre mes objectifs de carrière.
          </p>
          <p>
            Mon approche consiste à diversifier mes sources d'apprentissage et à équilibrer les compétences techniques et non techniques. Je crois fermement que cette polyvalence est un atout majeur dans l'environnement professionnel actuel, qui valorise autant l'expertise technique que les "soft skills".
          </p>
        </div>
      </div>
    </div>
  );
} 