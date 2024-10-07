import React from "react";
import { heroText } from "../../utils/heroText";
import { playfair } from "../../utils/fonts";
import AnimatedSection from "./layout/AnimatedSection";
import Wave from "./Wave";
import Image from "next/image";

const Hero = () => {
  return (
    <AnimatedSection
      className="relative flex flex-col md:justify-center min-h-[50vh] justify-center lg:min-h-hero p-10 md:pe-56  md:bg-inherit text-primary-contant text-center md:text-left "
      id="home">
      <Wave className="text-primary absolute -top-2 left-0 w-full md:hidden" />
      <h1
        className={`text-5xl md:text-8xl font-bold mb-2 z-30 ${playfair.className}`}>
        {heroText.title}
      </h1>
      <h2 className="text-xl md:text-2xl mb-4">{heroText.subtitle}</h2>
      <p className="text-lg md:text-xl font-light">{heroText.description}</p>
    </AnimatedSection>
  );
};

export default Hero;
