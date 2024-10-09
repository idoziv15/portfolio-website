import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { education } from "../../utils/education";
import { playfair } from "../../utils/fonts";
import AnimatedSection from "./layout/AnimatedSection";

const Education = () => {
  return (
    <AnimatedSection className="flex flex-col justify-center min-h-[70vh] lg:min-h-[80vh] p-10 md:pe-56" id="education">
      <div className="flex items-center mb-6">
        <FaGraduationCap className="text-4xl md:text-6xl mr-3" />
        <h1 className={`text-4xl md:text-6xl font-bold ${playfair.className}`}>
          Education.
        </h1>
      </div>
      <div className="flex items-start justify-between mb-6">
        {/* University Logo */}
        <div className="flex-shrink-0 mr-4">
          <img
            src="/biu.png"
            alt="University Logo"
            className="w-16 h-16 rounded-full object-cover"
          />
        </div>
        {/* University Information */}
        <div className="flex-grow">
          <h2 className="text-2xl font-semibold">{education.university}</h2>
          <p className="text-lg">{education.degree}</p>
          <p className="mt-2 text-gray-700">{education.description}</p>
        </div>
        {/* Dates */}
        <div className="whitespace-nowrap text-right text-gray-500">{education.period}</div>
      </div>
      {/* Skills or Subjects */}
        <div className="flex flex-wrap gap-2 mt-2">
            {education.courses.map((course, index) => (
                <span
                key={index}
                className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm" >
                {/* className="text-sm md:text-base bg-primary text-white px-2 py-1 rounded-md" > */}
                {course}
                </span>
            ))}
        </div>
    </AnimatedSection>
  );
};

export default Education;
