import React from "react";
import ProjectTemplate from "@/app/components/ProjectTemplate";
import { projects } from "@/utils/projects";
import { notFound } from "next/navigation";

export const dynamicParams = true;

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

const ProjectPage = ({ params }: { params: any }) => {
  const { id } = params;
  const project = projects.find((proj) => proj.id.toString() === id);

  if (!project) {
    notFound();
  }

  if (!project.projectPage) {
    return (
      <div className="flex items-center justify-center">
        Project page not found
      </div>
    );
  }

  return <ProjectTemplate project={project.projectPage} />;
};

export default ProjectPage;
