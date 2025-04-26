import Navigation from "@/components/navigation";
import { Card3D } from "@/components/ui/aceternity/3d-card";

export default function CVPage() {
  const education = [
    {
      degree: "Master en Développement Web",
      institution: "Université de Technologie",
      period: "2018 - 2020",
      description: "Spécialisation en développement front-end et UX design",
    },
    {
      degree: "Licence en Informatique",
      institution: "École Supérieure d'Informatique",
      period: "2015 - 2018",
      description: "Formation généraliste en informatique avec une orientation web",
    },
  ];

  const experience = [
    {
      title: "Développeur Front-end Senior",
      company: "WebTech Solutions",
      period: "2020 - Présent",
      description: "Développement d'applications web modernes utilisant React, Next.js et TypeScript. Travail en équipe agile et intégration continue.",
      achievements: [
        "Développement de la nouvelle interface utilisateur qui a amélioré les conversions de 25%",
        "Optimisation des performances front-end réduisant le temps de chargement de 40%",
        "Mentorat de 5 développeurs juniors et mise en place de bonnes pratiques",
      ],
    },
    {
      title: "Développeur Web",
      company: "Digital Agency",
      period: "2018 - 2020",
      description: "Création de sites web responsive et applications web pour divers clients dans différents secteurs.",
      achievements: [
        "Développement de 15+ sites web pour des clients importants",
        "Mise en place de workflows automatisés pour l'équipe de développement",
        "Intégration de systèmes de paiement et d'authentification sécurisés",
      ],
    },
  ];

  const skills = [
    { category: "Langages", items: ["JavaScript/TypeScript", "HTML5", "CSS3/SASS", "PHP", "SQL"] },
    { category: "Frameworks", items: ["React", "Next.js", "Vue.js", "Node.js", "Express", "Laravel"] },
    { category: "Outils", items: ["Git", "Docker", "Webpack", "Figma", "Adobe XD", "JIRA"] },
    { category: "Soft Skills", items: ["Communication", "Travail d'équipe", "Résolution de problèmes", "Gestion du temps", "Adaptabilité"] },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center">Mon CV</h1>
        <p className="text-xl text-center mb-16 text-foreground/80">Mon parcours professionnel et mes compétences</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-1">
            <Card3D className="h-full p-8 bg-background/50 rounded-xl border border-foreground/10">
              <h2 className="text-2xl font-bold mb-6 text-primary">Informations</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-foreground/80">contact@exemple.com</p>
                </div>
                <div>
                  <h3 className="font-medium">Téléphone</h3>
                  <p className="text-foreground/80">+33 6 12 34 56 78</p>
                </div>
                <div>
                  <h3 className="font-medium">Localisation</h3>
                  <p className="text-foreground/80">Paris, France</p>
                </div>
                <div>
                  <h3 className="font-medium">LinkedIn</h3>
                  <p className="text-foreground/80">linkedin.com/in/monprofil</p>
                </div>
                <div>
                  <h3 className="font-medium">GitHub</h3>
                  <p className="text-foreground/80">github.com/monprofil</p>
                </div>
                <div>
                  <h3 className="font-medium">Langues</h3>
                  <p className="text-foreground/80">Français (natif), Anglais (courant), Espagnol (intermédiaire)</p>
                </div>
              </div>
            </Card3D>
          </div>
          
          <div className="lg:col-span-2">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-6 text-primary">Expérience Professionnelle</h2>
                <div className="space-y-6">
                  {experience.map((item, index) => (
                    <div key={index} className="bg-background/50 p-6 rounded-xl border border-foreground/10">
                      <div className="flex flex-col md:flex-row md:justify-between mb-2">
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <span className="text-foreground/80">{item.period}</span>
                      </div>
                      <p className="text-secondary font-medium mb-3">{item.company}</p>
                      <p className="mb-4">{item.description}</p>
                      <h4 className="font-medium mb-2">Réalisations:</h4>
                      <ul className="list-disc list-inside space-y-1 text-foreground/80">
                        {item.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <section>
            <h2 className="text-2xl font-bold mb-6 text-primary">Formation</h2>
            <div className="space-y-6">
              {education.map((item, index) => (
                <div key={index} className="bg-background/50 p-6 rounded-xl border border-foreground/10">
                  <div className="flex flex-col md:flex-row md:justify-between mb-2">
                    <h3 className="text-xl font-bold">{item.degree}</h3>
                    <span className="text-foreground/80">{item.period}</span>
                  </div>
                  <p className="text-secondary font-medium mb-3">{item.institution}</p>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-6 text-primary">Compétences</h2>
            <div className="space-y-6">
              {skills.map((skillGroup, index) => (
                <div key={index} className="bg-background/50 p-6 rounded-xl border border-foreground/10">
                  <h3 className="text-xl font-bold mb-4">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-foreground/5 text-foreground/90 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 