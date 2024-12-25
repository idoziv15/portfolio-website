import React from "react";
import { aboutMe } from "../../utils/aboutMe";
import { playfair } from "../../utils/fonts";
import { techStack } from "../../utils/techStack";
import AnimatedSection from "./layout/AnimatedSection";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import Tabs from "./Tabs";

const AboutMe = () => {
  return (
    <AnimatedSection
      className="flex flex-col justify-center min-h-[70vh] lg:min-h-[80vh] p-10 md:pe-56"
      id="about"
    >
      <h1 className={`text-4xl md:text-6xl font-bold mb-2 ${playfair.className}`}>
        About Me.
      </h1>
      <p className="text-lg md:text-xl font-light mb-4">
        {aboutMe.description.split("'").map((part, i, arr) => 
          i === arr.length - 1 ? part : <React.Fragment key={i}>{part}&apos;</React.Fragment>
        )}
      </p>

      <h2 className={`text-lg md:text-xl font-medium mb-2`}>
        Technologies I&apos;ve worked with:
      </h2>
      <Tabs categories={techStack} />

      <Link
        href="/IDO ZIV - CV.pdf"
        target="_blank"
        download="Ido Ziv CV"
        className="btn md:btn-wide btn-primary text-primary-content font-normal mx-auto mt-8 md:mt-14"
      >
        Download CV
        <FaChevronDown />
      </Link>
    </AnimatedSection>
  );
};

export default AboutMe;