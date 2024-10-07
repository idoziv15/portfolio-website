import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName, library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);

interface ITechIcon {
  iconName: IconName;
  name: string;
  style: string;
}

const TechIcon = ({ iconName, name, style }: ITechIcon) => (
  <div className="relative group">
    <FontAwesomeIcon
      icon={["fab", `${iconName}`]}
      className={`text-3xl ${style}`}
    />
    <span className="absolute top-full mt-2 px-2 py-1 text-xs text-primary-content bg-primary rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
      {name}
    </span>
  </div>
);

export default TechIcon;
