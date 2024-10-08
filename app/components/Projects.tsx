import React from "react";
import { playfair } from "../../utils/fonts";
import { projects } from "../../utils/projects";
import AnimatedSection from "./layout/AnimatedSection";
import Link from "next/link";

const Projects = () => {
  return (
    <AnimatedSection
      className="flex flex-col justify-center min-h-[70vh] lg:min-h-[80vh] p-10 md:pe-56"
      id="projects">
      <h1
        className={`text-4xl md:text-6xl font-bold mb-4 ${playfair.className}`}>
        Key Projects.
      </h1>
      {projects.map((project) => (
        <div className="flex flex-col mb-6" key={project.title}>
          <h2 className="text-xl md:text-2xl font-semibold">{project.title}</h2>
          <p className="text-md md:text-lg font-light mb-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm md:text-base bg-primary text-white px-2 py-1 rounded-md">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-4 mt-4 items-center">
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm">
                GitHub
              </Link>
            )}
            {/* {project.youtubeUrl && (
              <Link
                href={project.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm">
                Demo
              </Link>
            )}
            {project.url && (
              <Link href={project.url} className="btn btn-outline btn-sm">
                View More
              </Link>
            )} */}
          </div>
        </div>
      ))}
    </AnimatedSection>
  );
};

export default Projects;
