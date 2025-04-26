import Navigation from "@/components/navigation";
import { MovingBorder } from "@/components/ui/aceternity/moving-border";

export default function ProjetPage() {
  const strengths = [
    {
      title: "Expertise technique",
      description: "Maîtrise des technologies web modernes et des frameworks comme React, Next.js et TypeScript.",
    },
    {
      title: "Créativité",
      description: "Capacité à proposer des solutions innovantes et à penser en dehors des conventions établies.",
    },
    {
      title: "Adaptabilité",
      description: "Facilité à m'adapter à de nouveaux environnements, technologies et méthodes de travail.",
    },
    {
      title: "Travail d'équipe",
      description: "Excellentes compétences de communication et de collaboration au sein d'une équipe pluridisciplinaire.",
    },
  ];

  const weaknesses = [
    {
      title: "Perfectionnisme",
      description: "Tendance à consacrer trop de temps à peaufiner des détails, parfois au détriment de l'efficacité.",
      improvement: "Je travaille sur la priorisation des tâches et l'acceptation de l'itération progressive.",
    },
    {
      title: "Impatience",
      description: "Difficulté à gérer les situations où le progrès est lent ou où je dépends du travail des autres.",
      improvement: "J'améliore ma gestion du stress et ma planification pour mieux anticiper les délais.",
    },
    {
      title: "Difficulté à déléguer",
      description: "Préférence pour accomplir les tâches moi-même plutôt que de les déléguer.",
      improvement: "J'apprends à faire confiance aux autres et à déléguer efficacement.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center">Mon Projet Professionnel</h1>
        <p className="text-xl text-center mb-16 text-foreground/80">Vision, objectifs et analyse</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <section>
            <h2 className="text-2xl font-bold mb-6 text-primary">Vision Professionnelle</h2>
            <div className="bg-background/50 p-8 rounded-xl border border-foreground/10">
              <p className="mb-4">
                Mon objectif professionnel est de devenir un développeur web full-stack expert, spécialisé dans la création d'applications web performantes et accessibles qui résolvent des problèmes concrets pour les utilisateurs.
              </p>
              <p className="mb-4">
                Je souhaite combiner ma passion pour le développement front-end avec une expertise croissante en back-end pour créer des solutions complètes. À terme, j'aspire à diriger une équipe de développement au sein d'une entreprise innovante ou à lancer ma propre startup technologique.
              </p>
              <p>
                Mon parcours professionnel est guidé par un désir constant d'apprentissage et d'amélioration, ainsi que par la volonté de contribuer à des projets qui ont un impact positif sur la société.
              </p>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-6 text-primary">Objectifs à Court et Long Terme</h2>
            <div className="bg-background/50 p-8 rounded-xl border border-foreground/10">
              <h3 className="text-xl font-bold mb-4">Court terme (1-2 ans)</h3>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Approfondir mes connaissances en architecture logicielle et développement backend</li>
                <li>Obtenir une certification en développement cloud (AWS ou Azure)</li>
                <li>Contribuer à des projets open source pour élargir mon réseau professionnel</li>
                <li>Donner une conférence technique sur un sujet spécialisé</li>
              </ul>
              
              <h3 className="text-xl font-bold mb-4">Long terme (3-5 ans)</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Occuper un poste de lead developer ou architecte logiciel</li>
                <li>Développer une expertise dans une technologie émergente (IA, IoT, Blockchain)</li>
                <li>Créer un produit numérique innovant ou une startup tech</li>
                <li>Devenir un mentor reconnu dans la communauté du développement web</li>
              </ul>
            </div>
          </section>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-primary text-center">Analyse Personnelle</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section>
              <MovingBorder className="p-8">
                <h3 className="text-xl font-bold mb-6 text-center">Mes Points Forts</h3>
                <div className="space-y-6">
                  {strengths.map((item, index) => (
                    <div key={index}>
                      <h4 className="text-lg font-bold text-secondary mb-2">{item.title}</h4>
                      <p className="text-foreground/80">{item.description}</p>
                    </div>
                  ))}
                </div>
              </MovingBorder>
            </section>
            
            <section>
              <MovingBorder className="p-8">
                <h3 className="text-xl font-bold mb-6 text-center">Mes Points à Améliorer</h3>
                <div className="space-y-6">
                  {weaknesses.map((item, index) => (
                    <div key={index}>
                      <h4 className="text-lg font-bold text-accent mb-2">{item.title}</h4>
                      <p className="text-foreground/80 mb-2">{item.description}</p>
                      <p className="text-primary/80 italic">
                        <span className="font-medium">Comment je m'améliore: </span>
                        {item.improvement}
                      </p>
                    </div>
                  ))}
                </div>
              </MovingBorder>
            </section>
          </div>
        </div>
        
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-primary">Stratégie de Développement Professionnel</h2>
          <div className="bg-background/50 p-8 rounded-xl border border-foreground/10">
            <p className="mb-4">
              Pour atteindre mes objectifs, j'ai établi une stratégie de développement professionnel structurée autour de plusieurs piliers:
            </p>
            
            <ol className="list-decimal list-inside space-y-4 mb-4">
              <li>
                <span className="font-bold">Formation continue: </span>
                Consacrer au moins 5 heures par semaine à l'apprentissage de nouvelles technologies et à l'approfondissement de mes connaissances existantes.
              </li>
              <li>
                <span className="font-bold">Projets personnels: </span>
                Développer des projets personnels innovants qui me permettent d'explorer de nouvelles technologies et de créer un portfolio solide.
              </li>
              <li>
                <span className="font-bold">Networking: </span>
                Participer activement à des meetups, conférences et communautés en ligne pour développer mon réseau professionnel.
              </li>
              <li>
                <span className="font-bold">Mentorat: </span>
                Chercher des mentors expérimentés pour m'accompagner dans mon parcours et devenir moi-même mentor pour consolider mes connaissances.
              </li>
              <li>
                <span className="font-bold">Veille technologique: </span>
                Maintenir une veille constante sur les tendances et innovations du secteur technologique.
              </li>
            </ol>
            
            <p>
              Cette approche structurée, combinée à une analyse régulière de mes progrès et à des ajustements stratégiques, me permettra de progresser efficacement vers la réalisation de mon projet professionnel.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
} 