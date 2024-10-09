"use client";
import React, { useState } from "react";
import { playfair } from "../../utils/fonts";
import { projects } from "../../utils/projects";
import AnimatedSection from "./layout/AnimatedSection";
import Link from "next/link";

// Define TypeScript interfaces
interface Project {
  title: string;
  description: string;
  imageUrl?: string;
  tags: string[];
  githubUrl?: string;
  url?: string;
}

const Projects = () => {
  return (
    <AnimatedSection
      className="flex flex-col justify-center min-h-[70vh] lg:min-h-[80vh] p-10 md:pe-56"
      id="projects">
      <h1
        className={`text-4xl md:text-6xl font-bold mb-6 ${playfair.className}`}>
        Key Projects.
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project: Project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </AnimatedSection>
  );
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div 
      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow transform hover:scale-105 duration-300">
      <div className="flex flex-col">
        {/* Image section (if available) */}
        {project.imageUrl && (
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-40 object-cover rounded-md mb-4" 
          />
        )}
        {/* Title */}
        <h2 className="text-xl md:text-2xl font-semibold mb-2">
          {project.title}
        </h2>
        {/* Description */}
        <p 
          className={`text-md md:text-lg font-light mb-4 ${showMore ? "" : "line-clamp-3"}`}>
          {project.description}
        </p>
        <button 
          onClick={() => setShowMore(!showMore)} 
          className="text-primary hover:underline self-start mb-4">
          {showMore ? "Show Less ▲" : "Show More ▼"}
        </button>
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag: string) => (
            <span
              key={tag}
              className="text-sm md:text-base bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        {/* Links */}
        <div className="flex gap-4 mt-auto items-center">
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline">
              GitHub
            </Link>
          )}
          {project.url && (
            <Link 
              href={project.url} 
              className="text-primary hover:underline">
              View More
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
