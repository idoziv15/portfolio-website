import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName, library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

interface ITechIcon {
  iconName: IconName | string;
  name: string;
  style: string;
}

const TechIcon = ({ iconName, name, style }: ITechIcon) => {
  const isCustomIcon = typeof iconName === "string" && iconName.startsWith("/icons/");

  return (
    <div className="relative group">
      {isCustomIcon ? (
        <img src={iconName} alt={`${name} logo`} className={`w-10 h-10 ${style}`} />
      ) : (
        <FontAwesomeIcon
          icon={["fab", iconName as IconName]}
          className={`text-3xl ${style}`}
        />
      )}
      <span className="absolute top-full mt-2 px-2 py-1 text-xs text-primary-content bg-primary rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
        {name}
      </span>
    </div>
  );
};

export default TechIcon;
