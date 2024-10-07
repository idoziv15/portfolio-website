import React from "react";
import { aboutMe } from "../../utils/aboutMe";
import { playfair } from "../../utils/fonts";
import { techStack } from "../../utils/techStack";
import TechIcon from "./TechIcon";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import AnimatedSection from "./layout/AnimatedSection";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";

const AboutMe = () => {
  const iconStyle =
    "transform hover:scale-110 transition-transform w-10 h-10 hover:text-primary";
  return (
    <AnimatedSection
      className="flex flex-col justify-center min-h-[70vh] lg:min-h-[80vh] p-10 md:pe-56"
      id="about">
      <h1
        className={`text-4xl md:text-6xl font-bold mb-2 ${playfair.className}`}>
        About Me.
      </h1>
      <p className="text-lg md:text-xl font-light mb-4">
        {aboutMe.description}
      </p>

      <h2 className={`text-lg md:text-xl font-medium mb-2`}>
        {`Technologies I've worked with:`}
      </h2>
      <div className="grid grid-cols-4 md:flex md:flex-wrap gap-4">
        {techStack.map(({ name, iconName }) => (
          <TechIcon
            key={name}
            iconName={iconName as IconName}
            name={name}
            style={iconStyle}
          />
        ))}
      </div>
      <Link
        href="/Ido Ziv - CV.pdf"
        target="_blank"
        download="Ido Ziv CV"
        className="btn md:btn-wide btn-primary text-primary-content font-normal mx-auto mt-8 md:mt-14">
        Download CV
        <FaChevronDown />
      </Link>
    </AnimatedSection>
  );
};

export default AboutMe;
