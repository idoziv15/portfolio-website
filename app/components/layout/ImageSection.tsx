"use client";
import Image from "next/image";
import React from "react";
import { SocialIcon } from "../SocialIcon";
import { Toaster, toast } from "react-hot-toast";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import { socialItems } from "../../../utils/socialItems";
import AnimatedSection from "./AnimatedSection";

const ImageSection = () => {
  const iconsStyle =
    "text-white text-4xl md:text-3xl transform transition-transform duration-300 md:hover:scale-125 md:hover:rotate-12 md:hover:-translate-x-2";

  return (
    <section className="relative w-screen h-[50vh] flex flex-col md:flex-row md:fixed md:right-0 md:top-0 md:h-full items-center justify-center bg-slate-400 md:w-5/12">
      <AnimatedSection className="flex md:flex-col gap-4 mb-8 md:mb-0 md:fixed md:right-0 transform md:-translate-y-1/2 md:pr-4 xl:pr-8 2xl:pr-12">
        {socialItems.map(({ link, icon }) => (
          <SocialIcon
            key={link}
            link={link}
            icon={icon as IconName}
            style={iconsStyle}
          />
        ))}
      </AnimatedSection>
      <AnimatedSection className="flex items-center justify-center">
        <Image
          className="md:sticky object-cover rounded-full overflow-hidden w-[65%] aspect-square md:w-56 lg:w-80 drop-shadow-2xl shadow-slate-400 md:hover:border-2 md:hover:border-sky-700 md:transition-all md:duration-200 md:hover:scale-105 z-10"
          src="/profile-pic.jpeg"
          alt="Profile Picture"
          width={800}
          height={800}
        />
      </AnimatedSection>

      <Toaster />
    </section>
  );
};

export default ImageSection;
