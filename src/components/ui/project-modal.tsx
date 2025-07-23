"use client";

import React from "react";
import Image from "next/image";

interface ProjectModalProps {
  project: {
    title: string;
    icon: string;
    description: string;
    status: "completed" | "in-progress";
    difficulty: "Easy" | "Medium" | "Hard";
    technologies: string[];
    images?: string[];
    links?: {
      github?: string;
      demo?: string;
      website?: string;
    };
    notes: string;
    duration: string;
    client?: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!isOpen) return null;

  const statusColors = {
    completed: "bg-green-100 text-green-800 border-green-200",
    "in-progress": "bg-yellow-100 text-yellow-800 border-yellow-200"
  };

  const difficultyColors = {
    Easy: "bg-blue-100 text-blue-800 border-blue-200",
    Medium: "bg-orange-100 text-orange-800 border-orange-200",
    Hard: "bg-red-100 text-red-800 border-red-200"
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-4xl">{project.icon}</span>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{project.title}</h2>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Status and Info */}
          <div className="flex flex-wrap gap-3">
            <span className={`px-3 py-1 rounded-full text-sm font-medium border ${statusColors[project.status]}`}>
              {project.status === "completed" ? "✅ Completed" : "🚧 In Progress"}
            </span>
            <span className={`px-3 py-1 rounded-full text-sm font-medium border ${difficultyColors[project.difficulty]}`}>
              {project.difficulty}
            </span>
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 border border-gray-200">
              📅 {project.duration}
            </span>
            {project.client && (
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 border border-purple-200">
                👤 {project.client}
              </span>
            )}
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Images */}
          {project.images && project.images.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Project Screenshots</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.images.map((image, index) => (
                  <div key={index} className="rounded-lg overflow-hidden border border-gray-200">
                    <Image
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Links */}
          {project.links && Object.keys(project.links).length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Project Links</h3>
              <div className="flex flex-wrap gap-3">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                )}
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                )}
                {project.links.website && (
                  <a
                    href={project.links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                    </svg>
                    Website
                  </a>
                )}
              </div>
            </div>
          )}

          {/* Notes */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Project Notes</h3>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <p className="text-gray-700 whitespace-pre-line">{project.notes}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 