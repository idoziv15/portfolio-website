import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName, library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);

interface ISocialIcon {
  icon: IconName;
  link: string;
  style: string;
}

export const SocialIcon = ({ icon, link, style }: ISocialIcon) => (
  <Link href={link} className={style} target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={["fab", `${icon}`]} />
  </Link>
);
