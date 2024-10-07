"use client";
import React, { useState } from "react";
import { playfair } from "@/utils/fonts";
import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/app/components/layout/AnimatedSection";
import ImageModal from "@/app/components/ImageModal";

interface ProjectSectionProps {
  title: string;
  children: React.ReactNode;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ title, children }) => (
  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">{title}</h2>
    {children}
  </section>
);

interface ProjectImageProps {
  src: string;
  alt: string;
  onClick: () => void;
}

const ProjectImage: React.FC<ProjectImageProps> = ({ src, alt, onClick }) => (
  <div
    className="flex items-center justify-center w-full cursor-pointer hover:scale-105 transition-transform mb-8"
    onClick={onClick}>
    <Image
      src={src}
      alt={alt}
      width={600}
      height={600}
      className="rounded-lg"
    />
  </div>
);

interface ProjectTemplateProps {
  project: {
    title: string;
    description: string;
    sections: { title: string; content: string[] }[];
    images: { src: string; alt: string }[];
  };
}

const ProjectTemplate: React.FC<ProjectTemplateProps> = ({ project }) => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [image, setImage] = useState({ src: "", alt: "" });

  const openImageModal = (src: string, alt: string) => {
    setImage({ src, alt });
    setIsImageModalOpen(true);
  };

  const handleClose = () => setIsImageModalOpen(false);

  return (
    <>
      <nav className="sticky navbar top-0 w-screen md:w-full flex justify-between items-center py-4 px-8 bg-base-100 z-50">
        <Link href="/" className={playfair.className}>
          Y.Shalom;
        </Link>
        <Link href="/" className="btn btn-outline btn-sm">
          Go back to Home
        </Link>
      </nav>
      <AnimatedSection
        className="flex flex-col justify-center items-center min-h-[70vh] lg:min-h-[80vh] p-12"
        id="projects">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-lg mb-8">{project.description}</p>

          {project.images.map((img, idx) => (
            <ProjectImage
              key={idx}
              src={img.src}
              alt={img.alt}
              onClick={() => openImageModal(img.src, img.alt)}
            />
          ))}

          {project.sections.map((section, idx) => (
            <ProjectSection key={idx} title={section.title}>
              <ul className="list-disc pl-5 mb-8 text-lg">
                {section.content.map((item, idx) => (
                  <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            </ProjectSection>
          ))}
        </div>
      </AnimatedSection>
      <ImageModal
        image={image}
        isOpen={isImageModalOpen}
        handleClose={handleClose}
      />
    </>
  );
};

export default ProjectTemplate;
