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
    reflection: `
**Contexte :**
L'objectif était de monter deux ordinateurs personnels de A à Z, afin de mieux maîtriser les aspects matériels et la configuration d'un système informatique complet. Cela répondait aussi à un besoin concret de mon entourage.

**Actions réalisées :**
J'ai sélectionné l'ensemble des composants (processeur, carte mère, mémoire, stockage, alimentation, boîtier) en veillant à leur compatibilité et au budget. Ensuite, j'ai procédé à l'assemblage physique des machines, à l'installation des systèmes d'exploitation (Windows et Linux) et des pilotes, puis j'ai effectué des tests de fonctionnement et de performance.

**Apport :**
Cette expérience m'a permis d'acquérir une connaissance pratique des composants d'un ordinateur et de leur interaction. J'ai développé des compétences en assemblage, en installation de système et en diagnostic de base. C'est utile pour comprendre les prérequis matériels des logiciels et pour avoir une meilleure autonomie en cas de problème technique.
`,
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
    reflection: `
**Contexte :**
J'ai suivi cette formation pour acquérir les bases du langage Python, très répandu dans de nombreux domaines du développement (web, scripts, data science).

**Actions réalisées :**
La formation couvrait la syntaxe de Python, les structures de données fondamentales (listes, dictionnaires), les boucles, les conditions, et les fonctions. J'ai réalisé des exercices pratiques pour mettre en application ces concepts, notamment en créant de petits scripts.

**Apport :**
Cela m'a donné une première compréhension solide de Python et de sa logique. Je peux désormais lire et comprendre du code Python simple, et écrire des scripts pour des tâches d'automatisation basiques. C'est une compétence de base importante pour un futur développeur.
`,
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
    reflection: `
**Contexte :**
L'objectif était d'apprendre à utiliser React, une bibliothèque JavaScript populaire pour construire des interfaces utilisateur dynamiques et modernes pour des applications web.

**Actions réalisées :**
J'ai étudié les concepts clés de React : composants, JSX, props, state, et le cycle de vie des composants. La formation abordait également les hooks (comme useState, useEffect), React Router pour la navigation, et des bases sur la gestion d'état.

**Apport :**
J'ai acquis les bases pour développer des interfaces utilisateur interactives avec React. Je comprends comment structurer une application en composants réutilisables et gérer les données au sein de l'interface. C'est une compétence demandée pour le développement front-end.
`,
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
    reflection: `
**Contexte :**
Ce séjour visait à améliorer mon niveau d'anglais général, en particulier ma fluidité à l'oral, par une immersion dans un environnement anglophone.

**Actions réalisées :**
J'ai suivi des cours d'anglais intensifs en école de langue, axés sur la conversation, la grammaire et la compréhension. J'ai également pratiqué l'anglais au quotidien lors de mon séjour sur place.

**Apport :**
Mon aisance à l'oral en anglais s'est améliorée, ainsi que ma compréhension. J'ai gagné en confiance pour communiquer en anglais dans des situations variées. C'est une compétence essentielle dans le monde professionnel, notamment dans le secteur technologique.
`,
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
    reflection: `
**Contexte :**
La pratique régulière du hockey en club est une activité sportive et sociale.

**Actions réalisées :**
Participation aux entraînements hebdomadaires et aux matchs de championnat durant la saison.

**Apport :**
Au-delà de l'aspect physique, le hockey développe l'esprit d'équipe, la discipline et la persévérance. Ce sont des qualités utiles dans un contexte professionnel, notamment pour la collaboration sur des projets.
`,
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
    reflection: `
**Contexte :**
J'ai assisté à ces webinaires pour me tenir informé des évolutions et des enjeux concernant l'Intelligence Artificielle et le Règlement Général sur la Protection des Données.

**Actions réalisées :**
Suivi de 11 présentations en ligne par des experts, couvrant divers aspects de l'IA (applications, éthique) et du RGPD (obligations, droits des utilisateurs).

**Apport :**
Cela m'a permis d'actualiser mes connaissances sur deux sujets importants du numérique. J'ai une meilleure compréhension des implications de l'IA et des principes clés du RGPD, ce qui est pertinent pour développer des applications respectueuses des utilisateurs et de la réglementation.
`,
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