import Navigation from "@/components/navigation";
import { Card3D } from "@/components/ui/aceternity/3d-card";
import Link from "next/link";

const activities = [
  {
    title: "Montage d'un PC",
    realHours: 15,
    countedHours: 10,
    type: "Projet personnel",
    icon: "🛠️",
    proof: "Photo du montage",
    proofLink: "#",
    description: "Montage complet d'un ordinateur de bureau, choix des composants, assemblage, installation du système et tests.",
    reflection: "Ce projet m'a permis de mieux comprendre l'architecture matérielle d'un ordinateur et d'acquérir des compétences pratiques en hardware.",
  },
  {
    title: "Formation OpenClassrooms : Python",
    realHours: 12,
    countedHours: 10,
    type: "Formation en ligne",
    icon: "🐍",
    proof: "Certificat OpenClassrooms",
    proofLink: "#",
    description: "Formation de 10 heures sur les bases de Python, incluant la syntaxe, les structures de données et l'automatisation de tâches simples.",
    reflection: "Cette formation m'a permis de découvrir un nouveau langage et d'élargir mes compétences en programmation.",
  },
  {
    title: "Formation OpenClassrooms : (à compléter)",
    realHours: 10,
    countedHours: 10,
    type: "Formation en ligne",
    icon: "📚",
    proof: "Certificat OpenClassrooms",
    proofLink: "#",
    description: "Formation de 10 heures sur une thématique à définir (ex : SQL, JavaScript, etc.).",
    reflection: "Cette formation viendra compléter mon parcours d'apprentissage sur OpenClassrooms.",
  },
  {
    title: "Cours d'anglais à l'étranger (Cape Town, 2 semaines, février 2023)",
    realHours: 40,
    countedHours: 10,
    type: "Cours intensif à l'étranger",
    icon: "🇬🇧",
    proof: "Attestation de l'école de langue",
    proofLink: "#",
    description: "Cours d'anglais intensif à Cape Town, Afrique du Sud, pendant 2 semaines en février 2023.",
    reflection: "Cette expérience immersive m'a permis de progresser rapidement en anglais et de découvrir une nouvelle culture.",
  },
  {
    title: "Joueur de hockey",
    realHours: 60,
    countedHours: 10,
    type: "Sport collectif",
    icon: "🏑",
    proof: "Photo ou attestation de club",
    proofLink: "#",
    description: "Participation régulière à des entraînements et matchs de hockey sur gazon en club.",
    reflection: "Le hockey m'a appris l'esprit d'équipe, la persévérance et la gestion de l'effort sur la durée.",
  },
];

export default function CompetencesPage() {
  const totalReal = activities.reduce((acc, a) => acc + a.realHours, 0);
  const totalCounted = activities.reduce((acc, a) => acc + a.countedHours, 0);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-extrabold mb-2 text-center bg-gradient-to-r from-purple-600 via-blue-500 to-emerald-500 bg-clip-text text-transparent">Acquisition de Compétences</h1>
        <p className="text-xl text-center mb-10 text-gray-700 font-medium">
          Récapitulatif de mes activités comptabilisées et heures réelles
        </p>

        {/* Tableau récapitulatif */}
        <div className="overflow-x-auto mb-14">
          <table className="min-w-full border border-gray-200 rounded-xl shadow-md bg-white">
            <thead className="bg-gradient-to-r from-blue-100 to-purple-100">
              <tr>
                <th className="px-4 py-3 text-lg font-semibold">Activité</th>
                <th className="px-4 py-3 text-lg font-semibold">Heures réelles</th>
                <th className="px-4 py-3 text-lg font-semibold">Heures comptabilisées</th>
              </tr>
            </thead>
            <tbody>
              {activities.map((a, i) => (
                <tr key={i} className="border-t hover:bg-blue-50/40 transition-colors">
                  <td className="px-4 py-3 font-medium flex items-center gap-2 text-gray-800">
                    <span className="text-2xl">{a.icon}</span> {a.title}
                  </td>
                  <td className="px-4 py-3 text-center text-gray-700">{a.realHours}</td>
                  <td className="px-4 py-3 text-center text-gray-700">{a.countedHours}</td>
                </tr>
              ))}
              <tr className="font-bold bg-gradient-to-r from-blue-100 to-purple-100">
                <td className="px-4 py-3">Total</td>
                <td className="px-4 py-3 text-center">{totalReal}</td>
                <td className="px-4 py-3 text-center">{totalCounted}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Cards détaillées */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((a, i) => (
            <Card3D key={i} className="bg-white/90 p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col gap-2">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-4xl">{a.icon}</span>
                <h3 className="text-2xl font-bold text-gray-900 flex-1">{a.title}</h3>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium shadow-sm">
                  {a.type}
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="px-2 py-0.5 bg-purple-100 text-purple-700 rounded-full text-xs">
                  Heures réelles : {a.realHours}
                </span>
                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full text-xs">
                  Heures comptabilisées : {a.countedHours}
                </span>
              </div>
              <div className="mb-4">
                <h4 className="font-semibold mb-1 text-gray-800">Description :</h4>
                <p className="text-gray-700 text-sm">{a.description}</p>
              </div>
              <div>
                <h4 className="font-semibold mb-1 text-gray-800">Analyse réflexive :</h4>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-gray-700 italic text-sm">{a.reflection}</p>
                </div>
              </div>
            </Card3D>
          ))}
        </div>
      </div>
    </div>
  );
} 