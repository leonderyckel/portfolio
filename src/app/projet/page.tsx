import Navigation from "@/components/navigation";
import { MovingBorder } from "@/components/ui/aceternity/moving-border";

export default function ProjetPage() {
  const strengths = [
    {
      title: "Polyvalence",
      description: "Mon parcours m'a permis de développer des compétences variées, allant du développement web au cloud en passant par les réseaux et la sécurité, ce qui est essentiel pour lancer une startup tech avec une vision full-stack.",
    },
    {
      title: "Vision sur mon avenir professionnel",
      description: "Je sais où je veux aller, avec des objectifs précis à court et long terme, ce qui me permet d'orienter mes choix de formation, de stage et de projets dans une direction stratégique.",
    },
    {
      title: "Capacité à concrétiser des projets en réels",
      description: "Le fait de travailler sur une application concrète durant mon stage et mon TFE me permet de confronter mes idées à la réalité du terrain, de m'adapter aux besoins et d'améliorer mes compétences en continu.",
    },
    {
      title: "Goût de l'apprentissage continu et de l'innovation",
      description: "Je cherche constamment à me former sur de nouvelles technologies et à rester à jour, ce qui est essentiel dans un secteur en évolution constante.",
    },
  ];

  const weaknesses = [
    {
      title: "Gagner en expérience en gestion d'équipe",
      description: "Apprendre à organiser et diriger un groupe de travail pour des projets plus ambitieux.",
    },
    {
      title: "Mieux comprendre le côté business",
      description: "Me former au marketing, à la stratégie commerciale et à la gestion d'entreprise pour bien lancer un produit.",
    },
    {
      title: "Améliorer ma communication professionnelle",
      description: "Être plus à l'aise pour expliquer mes idées, que ce soit à l'écrit ou à l'oral, surtout avec des personnes non techniques.",
    },
    {
      title: "Travailler sur ma visibilité pro",
      description: "Développer mon réseau (LinkedIn, GitHub, conférences…) pour mieux me faire connaître.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center">Mon Projet Professionnel</h1>
        <p className="text-xl text-center mb-16 text-foreground/80">Mon parcours, mes ambitions et ma stratégie</p>
        
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-primary text-center">Mon Parcours et Mes Ambitions</h2>
          <div className="bg-background/50 p-8 rounded-xl border border-foreground/10 max-w-4xl mx-auto space-y-6">
            <p className="text-lg">
              Je m'appelle Léon de Ryckel, étudiant en IT passionné par la création de solutions numériques utiles, fiables et sécurisées. Mon objectif professionnel est clair : créer ma propre entreprise et devenir indépendant, en développant des logiciels sur mesure et en proposant des services spécialisés dans la sécurisation du stockage de données.
            </p>
            <p className="text-lg">
              Mon parcours m'a permis d'acquérir une vision complète des systèmes informatiques, depuis le développement web et backend jusqu'à l'infrastructure réseau et au cloud computing. Aujourd'hui, je souhaite mettre ces compétences au service d'un projet entrepreneurial solide, avec un fort accent sur la qualité, la sécurité des données, et la valeur ajoutée pour les utilisateurs.
            </p>
            <p className="text-lg">
              Actuellement, je réalise un stage en Afrique du Sud au sein d'une entreprise tech locale, dans laquelle je développe une application web répondant à des besoins concrets du marché. Ce projet fait également l'objet de mon Travail de Fin d'Études (TFE), ce qui me permet de pousser l'approche encore plus loin, tant sur le plan technique que stratégique.
            </p>
            <p className="text-lg">
              À moyen terme, je souhaite continuer à collaborer avec des entreprises ou clients en tant qu'indépendant, tout en faisant grandir ma structure. J'aspire à créer des produits fiables, durables, sécurisés, en particulier dans des contextes où la demande est forte mais les solutions actuelles encore limitées.
            </p>
          </div>
        </section>
        
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
                
                <li>Développer une expertise dans une technologie émergente (IA, IoT, Blockchain)</li>
                <li>Créer un produit numérique innovant ou une startup tech</li>
                
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
                <span className="font-bold">Networking: </span>
                Participer activement à des réunions,conférences,évènements pour développer mon réseau professionnel.
              </li>
              <li>
                <span className="font-bold">Experience: </span>
                Chercher des personnes expérimentés pour m'accompagner dans mon parcours et avoir une vision plus concrète de mes objectifs.
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