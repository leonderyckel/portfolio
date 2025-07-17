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
    title: "Building Two PCs",
    realHours: 15,
    countedHours: 10,
    type: "Personal Project",
    icon: "🛠️",
    proof: "Assembly photos",
    proofLink: "#",
    description: "Complete assembly of a desktop computer, component selection, assembly, system installation and testing.",
    reflection: `
**Context:**
The objective was to build two personal computers from A to Z, in order to better master the hardware aspects and configuration of a complete computer system. This also met a concrete need of my entourage.

**Actions performed:**
I selected all the components (processor, motherboard, memory, storage, power supply, case) ensuring their compatibility and budget. Then, I proceeded with the physical assembly of the machines, installation of operating systems (Windows and Linux) and drivers, then performed functionality and performance tests.

**Contribution:**
This experience allowed me to acquire practical knowledge of computer components and their interaction. I developed skills in assembly, system installation and basic diagnostics. This is useful for understanding software hardware requirements and for having better autonomy in case of technical problems.
`,
  },
  {
    title: "OpenClassrooms Training: Python",
    realHours: 12,
    countedHours: 10,
    type: "Online Training",
    icon: "🐍",
    proof: "OpenClassrooms Certificate",
    proofLink: "#",
    description: "10-hour training on Python basics, including syntax, data structures and simple task automation.",
    reflection: `
**Context:**
I took this training to acquire the basics of the Python language, widely used in many development fields (web, scripts, data science).

**Actions performed:**
The training covered Python syntax, fundamental data structures (lists, dictionaries), loops, conditions, and functions. I completed practical exercises to apply these concepts, notably by creating small scripts.

**Contribution:**
This gave me a solid first understanding of Python and its logic. I can now read and understand simple Python code, and write scripts for basic automation tasks. This is an important basic skill for a future developer.
`,
  },
  {
    title: "OpenClassrooms Training: React",
    realHours: 12,
    countedHours: 10,
    type: "Online Training",
    icon: "💻",
    proof: "Certificate and React projects",
    proofLink: "#",
    description: "In-depth training on React, including hooks, state management, and the React ecosystem.",
    reflection: `
**Context:**
The objective was to learn how to use React, a popular JavaScript library for building dynamic and modern user interfaces for web applications.

**Actions performed:**
I studied React's key concepts: components, JSX, props, state, and component lifecycle. The training also covered hooks (like useState, useEffect), React Router for navigation, and basics on state management.

**Contribution:**
I acquired the basics to develop interactive user interfaces with React. I understand how to structure an application into reusable components and manage data within the interface. This is a sought-after skill for front-end development.
`,
  },
  {
    title: "English Course Abroad (Cape Town, 2 weeks, February 2023)",
    realHours: 40,
    countedHours: 10,
    type: "Intensive Course Abroad",
    icon: "🇬🇧",
    proof: "Language school certificate",
    proofLink: "#",
    description: "Intensive English course in Cape Town, South Africa, for 2 weeks in February 2023.",
    reflection: `
**Context:**
This stay aimed to improve my general English level, particularly my oral fluency, through immersion in an English-speaking environment.

**Actions performed:**
I took intensive English courses at a language school, focused on conversation, grammar and comprehension. I also practiced English daily during my stay there.

**Contribution:**
My oral English fluency improved, as well as my comprehension. I gained confidence in communicating in English in various situations. This is an essential skill in the professional world, especially in the technology sector.
`,
  },
  {
    title: "Hockey Player",
    realHours: 60,
    countedHours: 10,
    type: "Team Sport",
    icon: "🏑",
    proof: "Photo or club certificate",
    proofLink: "#",
    description: "Regular participation in field hockey training and matches at the club.",
    reflection: `
**Context:**
Regular practice of hockey at the club is a sporting and social activity.

**Actions performed:**
Participation in weekly training sessions and championship matches during the season.

**Contribution:**
Beyond the physical aspect, hockey develops team spirit, discipline and perseverance. These are useful qualities in a professional context, particularly for collaboration on projects.
`,
  },
  {
    title: "Online Conferences on AI and GDPR",
    realHours: 11,
    countedHours: 10,
    type: "Webinars",
    icon: "📚", 
    proof: "Screenshots of history",
    proofLink: "#",
    description: "Participation in 11 webinars on various topics related to Artificial Intelligence and GDPR, each lasting approximately one hour.",
    reflection: `
**Context:**
I attended these webinars to stay informed about developments and issues concerning Artificial Intelligence and the General Data Protection Regulation.

**Actions performed:**
Followed 11 online presentations by experts, covering various aspects of AI (applications, ethics) and GDPR (obligations, user rights).

**Contribution:**
This allowed me to update my knowledge on two important digital topics. I have a better understanding of AI implications and key GDPR principles, which is relevant for developing applications that respect users and regulations.
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
        <h1 className="text-5xl font-extrabold mb-2 text-center bg-gradient-to-r from-purple-600 via-blue-500 to-emerald-500 bg-clip-text text-transparent">Skills Acquisition</h1>
        <p className="text-xl text-center mb-10 text-gray-700 font-medium">
          Summary of my recorded activities and actual hours
        </p>

        {/* Summary table */}
        <div className="overflow-x-auto mb-14">
          <table className="min-w-full border border-gray-200 rounded-xl shadow-md bg-white">
            <thead className="bg-gradient-to-r from-blue-100 to-purple-100">
              <tr>
                <th className="px-4 py-3 text-lg font-semibold">Activity</th>
                <th className="px-4 py-3 text-lg font-semibold">Actual Hours</th>
                <th className="px-4 py-3 text-lg font-semibold">Recorded Hours</th>
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
            if (a.title === "Building Two PCs") cardId = "montage-pc";
            else if (a.title === "OpenClassrooms Training: Python") cardId = "python";
            else if (a.title === "OpenClassrooms Training: React") cardId = "react";
            else if (a.title === "English Course Abroad (Cape Town, 2 weeks, February 2023)") cardId = "anglais-cape-town";
            else if (a.title === "Hockey Player") cardId = "hockey";
            else if (a.title === "Online Conferences on AI and GDPR") cardId = "conferences-ia-rgpd";

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
                      Actual hours: {a.realHours}
                    </span>
                    <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full text-xs">
                      Recorded hours: {a.countedHours}
                    </span>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-1 text-gray-800">Description:</h4>
                    <p className="text-gray-700 text-sm">{a.description}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-gray-800">Reflective Analysis:</h4>
                    <div className="bg-gray-50 p-3 rounded-lg max-h-60 overflow-y-auto">
                      <p className="text-gray-700 text-sm whitespace-pre-line">{a.reflection}</p>
                    </div>
                  </div>
                  {/* PC Build Images Section */}
                  {a.title === "Building Two PCs" && (
                    <div className="mt-4 flex flex-col gap-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-gray-800">Assembly photos:</h4>
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
                                alt={`PC Assembly ${num}`}
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

                  {a.title === "English Course Abroad (Cape Town, 2 weeks, February 2023)" && (
                    <div className="mt-4 flex flex-col gap-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-gray-800">Supporting documents:</h4>
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
                              alt="EF booking confirmation"
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
                              alt="Cape Town EF brochure"
                              width={300} 
                              height={200}
                              className="rounded-lg object-cover border border-gray-200 w-full h-auto"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {a.title === "Hockey Player" && (
                    <div className="mt-4 flex flex-col gap-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-gray-800">Evidence:</h4>
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
                              alt="Hockey club membership invoice"
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
                              alt="Hockey action photo"
                              width={300} 
                              height={200}
                              className="rounded-lg object-cover border border-gray-200 w-full h-auto"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {a.title === "OpenClassrooms Training: Python" && (
                    <div className="mt-4 flex flex-col gap-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-gray-800">Screenshots:</h4>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {[1, 2].map((num, idx) => (
                            <div 
                              key={`python-img-${num}`}
                              className="cursor-pointer"
                              onClick={() => {
                                setCurrentImageIndex(8 + idx); 
                                setOpenLightbox(true);
                              }}
                            >
                              <Image
                                src={`/images/python-formation-${num}.png`}
                                alt={`Python Training ${num}`}
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
                  {a.title === "OpenClassrooms Training: React" && (
                    <div className="mt-4 flex flex-col gap-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-gray-800">Screenshots:</h4>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {[1, 2].map((num, idx) => (
                            <div 
                              key={`react-img-${num}`}
                              className="cursor-pointer"
                              onClick={() => {
                                setCurrentImageIndex(10 + idx); 
                                setOpenLightbox(true);
                              }}
                            >
                              <Image
                                src={`/images/react-formation-${num}.png`}
                                alt={`React Training ${num}`}
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

                  
                  {a.title === "Online Conferences on AI and GDPR" && (
                    <div className="mt-4 flex flex-col gap-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-gray-800">Screenshots:</h4>
                        
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
                                alt={`AI & GDPR Webinar ${num}`}
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