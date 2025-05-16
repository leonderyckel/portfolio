import Navigation from "@/components/navigation";
// MovingBorder is not used in this new structure
// import { MovingBorder } from "@/components/ui/aceternity/moving-border";

export default function ProjetPage() {
  // strengths and weaknesses arrays are not needed as the content is narrative within sections

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Mon Projet Professionnel</h1>
        
        {/* Introductory paragraph */}
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg text-center text-foreground/80">
            Je m'appelle Léon de Ryckel, étudiant en informatique à l'EPHEC, j'aimerais travaiiler dans développement de solutions numériques sécurisées et performantes. Mon projet professionnel est clair : m'établir à Cape Town, en Afrique du Sud, pour y créer ma propre entreprise ou travailler comme indépendant, en concevant des applications web et des services IT sur mesure, avec un focus sur la sécurité des données et la satisfaction des utilisateurs. Voici mon parcours, mes ambitions, et la stratégie que je mets en place pour atteindre ces objectifs.
          </p>
        </div>

        {/* Section: Mon Parcours et Mes Ambitions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-primary text-center">Mon Parcours et Mes Ambitions</h2>
          <div className="bg-background/50 p-8 rounded-xl border border-foreground/10 max-w-4xl mx-auto space-y-6">
            <p className="text-lg">
              Je trouve que mon parcours à l'EPHEC m'a permis de construire une base solide dans un peu tous les domaines de l'informatique. Je pense avoir acquis des compétences variées : développement web (front-end et back-end), réseaux, serveurs, cloud computing, et hardware. Ces connaissances me donnent une vision globale des systèmes IT, essentielle pour mes projets futurs.
            </p>
            <p className="text-lg">
              Actuellement, je réalise un stage chez Bitrix IT, une entreprise informatique à Cape Town, où je mets mes compétences à l'épreuve dans un contexte professionnel B2B. Sur le terrain, j'accompagne M. Philip Theunissen pour des dépannages chez des clients : résolution de problèmes dans une base de données pour une clinique, installation de routeurs Cisco et switches intelligents, réparation d'écrans ou de disques durs défectueux, mise à jour de systèmes d'exploitation, configuration d'imprimantes réseau, et résolution de soucis DNS ou DHCP. Ces missions, variées et souvent urgentes, m'ont appris à allier rigueur technique et communication avec les clients.
            </p>
            <p className="text-lg">
              En parallèle, je développe une application web pour mon travail de fin d'études (TFE), qui sert également Bitrix IT. Cet outil de gestion de tickets inclut un agenda automatisé, un module de facturation, un stockage sécurisé des mots de passe, des accès à distance, et des schémas réseau interactifs pour optimiser la gestion des interventions clients. Ce projet me permet de combiner mes compétences techniques avec une réflexion stratégique sur les besoins d'une entreprise, tout en laissant une contribution concrète à l'équipe.
            </p>
            <p className="text-lg">
              Mon ambition est de devenir un développeur full-stack expert, capable de créer des applications web complètes, de l'interface utilisateur à l'infrastructure back-end. À moyen terme, je souhaite travailler comme indépendant à Cape Town, en collaborant avec des entreprises locales comme Bitrix IT. À long terme, je vise à lancer ma propre startup, spécialisée dans des solutions numériques sécurisées et innovantes, dans un marché où la demande pour des outils fiables est forte.
            </p>
          </div>
        </section>

       

        {/* Section: Mes objectifs à court et long terme */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-primary text-center">Mes Objectifs à Court et Long Terme</h2>
          <div className="bg-background/50 p-8 rounded-xl border border-foreground/10 max-w-4xl mx-auto space-y-6">
            <h3 className="text-2xl font-semibold mb-4 text-secondary">Court terme (1-2 ans)</h3>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Finaliser mon TFE avec une application fonctionnelle, adoptée par Bitrix IT, pour démontrer mes compétences.</li>
              <li>Approfondir mes connaissances en développement back-end et obtenir une certification cloud.</li>
              <li>Contribuer à un projet open source et élargir mon réseau.</li>
              <li>Commercialiser un projet informatique </li>
            </ul>
            <h3 className="text-2xl font-semibold mt-8 mb-4 text-secondary">Long terme (3-5 ans)</h3>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Devenir expert dans une technologie émergente, comme l'IA pour des applications personnalisées ou la blockchain.</li>
              <li>Lancer un produit numérique innovant, comme une solution  pour les entreprises B2B.</li>
              <li>M'installer définitivement à Cape Town, avec un réseau professionnel solide et une carrière établie comme indépendant.</li>
            </ul>
          </div>
        </section>

        {/* Section: Analyse personnelle */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-primary text-center">Analyse Personnelle</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-background/50 p-8 rounded-xl border border-foreground/10">
              <h3 className="text-2xl font-semibold mb-6 text-secondary text-center">Mes Points Forts</h3>
              <ul className="list-disc list-inside space-y-3 text-lg">
                <li><span className="font-medium">Polyvalence :</span> Mes compétences me permettentde comprendre différents secteur de l'informatique avec une vision globale.</li>
                <li><span className="font-medium">Clarté d'objectif :</span> Je sais que je veux m'installer à Cape Town et créer une entreprise, ce qui guide mes choix de formation et de projets.</li>
                <li><span className="font-medium">Curiosité technique :</span> Je me forme constamment sur de nouvelles technologies, ce qui est crucial dans un domaine qui évolue vite.</li>
              </ul>
            </div>
            <div className="bg-background/50 p-8 rounded-xl border border-foreground/10">
              <h3 className="text-2xl font-semibold mb-6 text-accent text-center">Mes Points à Améliorer</h3>
              <ul className="list-disc list-inside space-y-3 text-lg">
                <li><span className="font-medium">Compétences business :</span> Je dois me former au marketing et à la stratégie pour réussir à commercialiser un produit car je n'ai pas de compétences dans ce domaine.</li>
                <li><span className="font-medium">Communication professionnelle :</span> Je veux ameliorer ma communication dans le milieu professionnel surtout avec des personnes sans compétences informatiques pour expliquer mes idées.</li>
                <li><span className="font-medium">Visibilité :</span> Mon réseau et ma présence en ligne (GitHub, LinkedIn) sont encore limités ; je dois plus me faire connaître.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section: Ma stratégie de développement professionnel */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-primary text-center">Ma Stratégie de Développement Professionnel</h2>
          <div className="bg-background/50 p-8 rounded-xl border border-foreground/10 max-w-4xl mx-auto space-y-6">
          
            <ol className="list-decimal list-inside space-y-3 text-lg">
              <li><span className="font-medium">Formation continue :</span> consacrer 5 à 10 heures par semaine à l'apprentissage, que ce soit via des cours en ligne  des projets perso, ou des certifications. Actuellement, par exemple sur le back-end et le cloud.</li>
              <li><span className="font-medium">Expérience pratique :</span> Après l'EPHEC, je chercherai des missions freelance pour diversifier mes projets et financer mes futurs projets. Mon stage est un tremplin, mais je veux multiplier les expériences concrètes.</li>
              <li><span className="font-medium">Veille technologique :</span> Je suis des blogs (comme Dev.to), des posts sur les tendances tech, et je teste de nouveaux outils pour rester à jour. Cela m'aide à anticiper les besoins du marché.</li>
            </ol>
          </div>
        </section>

      </div>
    </div>
  );
} 