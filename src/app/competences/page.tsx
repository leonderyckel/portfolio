"use client"; 

import Navigation from "@/components/navigation";
import { Card3D } from "@/components/ui/aceternity/3d-card";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const activities = [
  {
    title: "Montage de deux PC",
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
    title: "Formation OpenClassrooms : React",
    realHours: 12,
    countedHours: 10,
    type: "Formation en ligne",
    icon: "💻",
    proof: "Certificat et projets React",
    proofLink: "#",
    description: "Formation approfondie sur React, incluant les hooks, le state management, et l'écosystème React.",
    reflection: "L'apprentissage de React a ouvert de nouvelles perspectives pour la création d'interfaces utilisateur dynamiques.",
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
  {
    title: "Conférences en ligne sur l'IA et RGPD",
    realHours: 11,
    countedHours: 10,
    type: "Webinaires",
    icon: "📚", 
    proof: "Captures d'écran de l'historique",
    proofLink: "#",
    description: "Participation à 11 webinaires sur des sujets variés liés à l'Intelligence Artificielle et au RGPD, chacun d'une durée approximative d'une heure.",
    reflection: "Ces conférences ont enrichi ma compréhension des enjeux actuels de l'IA et de la protection des données.",
  },
];

export default function CompetencesPage() {
  
  const [openLightbox, setOpenLightbox] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const lightboxSlides = [
    { src: "/images/ef-confirmation.png" },
    { src: "/images/cape-town-brochure.png" },
    { src: "/images/hockey-invoice.png" },
    { src: "/images/hockey-action-photo.jpg" },
    { src: "/images/pc-build-1.jpg" },
    { src: "/images/pc-build-2.jpg" },
    { src: "/images/pc-build-3.jpg" },
    { src: "/images/pc-build-4.jpg" },
    { src: "/images/python-formation-1.png" },
    { src: "/images/python-formation-2.png" },
    { src: "/images/react-formation-1.png" },
    { src: "/images/react-formation-2.png" },
    { src: "/images/webinar-ia-rgpd-1.png" },
    { src: "/images/webinar-ia-rgpd-2.png" },
    { src: "/images/webinar-ia-rgpd-3.png" },
  ];

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

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((a, i) => {
            let cardId = "";
            if (a.title === "Montage de deux PC") cardId = "montage-pc";
            else if (a.title === "Formation OpenClassrooms : Python") cardId = "python";
            else if (a.title === "Formation OpenClassrooms : React") cardId = "react";
            else if (a.title === "Cours d'anglais à l'étranger (Cape Town, 2 semaines, février 2023)") cardId = "anglais-cape-town";
            else if (a.title === "Joueur de hockey") cardId = "hockey";
            else if (a.title === "Conférences en ligne sur l'IA et RGPD") cardId = "conferences-ia-rgpd";

            return (
              <div id={cardId || undefined} key={`activity-wrapper-${i}`}>
                <Card3D className="bg-white/90 p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col gap-2 h-full">
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
                    <div className="bg-gray-50 p-3 rounded-lg max-h-60 overflow-y-auto">
                      <p className="text-gray-700 text-sm whitespace-pre-line">{a.reflection}</p>
                    </div>
                  </div>
                  {/* PC Build Images Section */}
                  {a.title === "Montage de deux PC" && (
                    <div className="mt-4 flex flex-col gap-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-gray-800">Photos du montage :</h4>
                        <div className="grid grid-cols-2 gap-4">
                          {[1, 2, 3, 4].map((num, idx) => (
                            <div 
                              key={`pc-img-${num}`}
                              className="cursor-pointer"
                              onClick={() => {
                                setCurrentImageIndex(4 + idx); 
                                setOpenLightbox(true);
                              }}
                            >
                              <Image
                                src={`/images/pc-build-${num}.jpg`}
                                alt={`Photo montage PC ${num}`}
                                width={300} 
                                height={200}
                                className="rounded-lg object-cover border border-gray-200 w-full h-auto"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  {a.title === "Cours d'anglais à l'étranger (Cape Town, 2 semaines, février 2023)" && (
                    <div className="mt-4 flex flex-col gap-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-gray-800">Documents justificatifs :</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div 
                            className="cursor-pointer"
                            onClick={() => {
                              setCurrentImageIndex(0);
                              setOpenLightbox(true);
                            }}
                          >
                            <Image
                              src="/images/ef-confirmation.png"
                              alt="Confirmation de réservation EF"
                              width={300} 
                              height={200}
                              className="rounded-lg object-cover border border-gray-200 w-full h-auto"
                            />
                          </div>
                          <div 
                            className="cursor-pointer"
                            onClick={() => {
                              setCurrentImageIndex(1);
                              setOpenLightbox(true);
                            }}
                          >
                            <Image
                              src="/images/cape-town-brochure.png"
                              alt="Brochure Le Cap EF"
                              width={300} 
                              height={200}
                              className="rounded-lg object-cover border border-gray-200 w-full h-auto"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {a.title === "Joueur de hockey" && (
                    <div className="mt-4 flex flex-col gap-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-gray-800">Documents justificatifs :</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div 
                            className="cursor-pointer"
                            onClick={() => {
                              setCurrentImageIndex(2);
                              setOpenLightbox(true);
                            }}
                          >
                            <Image
                              src="/images/hockey-invoice.png"
                              alt="Facture club de hockey"
                              width={300} 
                              height={200}
                              className="rounded-lg object-cover border border-gray-200 w-full h-auto"
                            />
                          </div>
                          <div 
                            className="cursor-pointer"
                            onClick={() => {
                              setCurrentImageIndex(3);
                              setOpenLightbox(true);
                            }}
                          >
                            <Image
                              src="/images/hockey-action-photo.jpg"
                              alt="Photo action match de hockey"
                              width={300} 
                              height={200}
                              className="rounded-lg object-cover border border-gray-200 w-full h-auto"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {a.title === "Formation OpenClassrooms : Python" && (
                    <div className="mt-4 flex flex-col gap-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-gray-800">Documents justificatifs :</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div 
                            className="cursor-pointer"
                            onClick={() => {
                              setCurrentImageIndex(8);
                              setOpenLightbox(true);
                            }}
                          >
                            <Image
                              src="/images/python-formation-1.png"
                              alt="Python Formation Image 1"
                              width={300} height={200}
                              className="rounded-lg object-cover border border-gray-200 w-full h-auto"
                            />
                          </div>
                          <div 
                            className="cursor-pointer"
                            onClick={() => {
                              setCurrentImageIndex(9);
                              setOpenLightbox(true);
                            }}
                          >
                            <Image
                              src="/images/python-formation-2.png"
                              alt="Python Formation Image 2"
                              width={300} height={200}
                              className="rounded-lg object-cover border border-gray-200 w-full h-auto"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {a.title === "Formation OpenClassrooms : React" && (
                    <div className="mt-4 flex flex-col gap-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-gray-800">Documents justificatifs :</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div 
                            className="cursor-pointer"
                            onClick={() => {
                              setCurrentImageIndex(10);
                              setOpenLightbox(true);
                            }}
                          >
                            <Image
                              src="/images/react-formation-1.png"
                              alt="React Formation Image 1"
                              width={300} height={200}
                              className="rounded-lg object-cover border border-gray-200 w-full h-auto"
                            />
                          </div>
                          <div 
                            className="cursor-pointer"
                            onClick={() => {
                              setCurrentImageIndex(11);
                              setOpenLightbox(true);
                            }}
                          >
                            <Image
                              src="/images/react-formation-2.png"
                              alt="React Formation Image 2"
                              width={300} height={200}
                              className="rounded-lg object-cover border border-gray-200 w-full h-auto"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {a.title === "Conférences en ligne sur l'IA et RGPD" && (
                    <div className="mt-4 flex flex-col gap-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-gray-800">Captures d'écran :</h4>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                          {[1, 2, 3].map((num, idx) => (
                            <div 
                              key={`webinar-img-${num}`}
                              className="cursor-pointer"
                              onClick={() => {
                                setCurrentImageIndex(12 + idx); 
                                setOpenLightbox(true);
                              }}
                            >
                              <Image
                                src={`/images/webinar-ia-rgpd-${num}.png`}
                                alt={`Webinaire IA & RGPD ${num}`}
                                width={300} 
                                height={200}
                                className="rounded-lg object-cover border border-gray-200 w-full h-auto"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </Card3D>
              </div>
            );
          })}
        </div>
      </div>

      <Lightbox
        open={openLightbox}
        close={() => setOpenLightbox(false)}
        slides={lightboxSlides}
        index={currentImageIndex}
      />
    </div>
  );
} 